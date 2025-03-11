-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('investor', 'vineyard')),
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  website TEXT
);

-- Create projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT,
  image_url TEXT NOT NULL,
  gallery_images TEXT[],
  funding_goal NUMERIC NOT NULL,
  current_funding NUMERIC DEFAULT 0,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  owner_id UUID REFERENCES profiles(id) NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'funded', 'completed', 'cancelled'))
);

-- Create investments table
CREATE TABLE investments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  investor_id UUID REFERENCES profiles(id) NOT NULL,
  project_id UUID REFERENCES projects(id) NOT NULL,
  amount NUMERIC NOT NULL,
  investment_type TEXT NOT NULL CHECK (investment_type IN ('donation', 'loan', 'equity')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled'))
);

-- Create rewards table
CREATE TABLE rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  project_id UUID REFERENCES projects(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  amount NUMERIC NOT NULL
);

-- Create wines table
CREATE TABLE wines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  year INTEGER NOT NULL,
  price NUMERIC NOT NULL,
  image_url TEXT NOT NULL,
  rating NUMERIC DEFAULT 0,
  type TEXT NOT NULL,
  region TEXT NOT NULL,
  description TEXT NOT NULL,
  stock INTEGER NOT NULL,
  vineyard_id UUID REFERENCES profiles(id) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE wines ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Profiles: users can read all profiles but only update their own
CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Projects: anyone can view active projects, owners can manage their own
CREATE POLICY "Projects are viewable by everyone" ON projects FOR SELECT USING (true);
CREATE POLICY "Vineyard owners can insert their own projects" ON projects FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Vineyard owners can update their own projects" ON projects FOR UPDATE USING (auth.uid() = owner_id);

-- Investments: investors can see their own investments, project owners can see investments in their projects
CREATE POLICY "Investors can view their own investments" ON investments FOR SELECT USING (auth.uid() = investor_id);
CREATE POLICY "Project owners can view investments in their projects" ON investments FOR SELECT USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = investments.project_id AND projects.owner_id = auth.uid())
);
CREATE POLICY "Investors can create investments" ON investments FOR INSERT WITH CHECK (auth.uid() = investor_id);

-- Rewards: anyone can view rewards, project owners can manage them
CREATE POLICY "Rewards are viewable by everyone" ON rewards FOR SELECT USING (true);
CREATE POLICY "Project owners can manage rewards" ON rewards FOR ALL USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = rewards.project_id AND projects.owner_id = auth.uid())
);

-- Wines: anyone can view wines, vineyard owners can manage their own
CREATE POLICY "Wines are viewable by everyone" ON wines FOR SELECT USING (true);
CREATE POLICY "Vineyard owners can manage their wines" ON wines FOR ALL USING (auth.uid() = vineyard_id);

-- Create functions for triggers
CREATE OR REPLACE FUNCTION update_project_funding()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE projects
    SET current_funding = current_funding + NEW.amount
    WHERE id = NEW.project_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE projects
    SET current_funding = current_funding - OLD.amount
    WHERE id = OLD.project_id;
  ELSIF TG_OP = 'UPDATE' THEN
    UPDATE projects
    SET current_funding = current_funding - OLD.amount + NEW.amount
    WHERE id = NEW.project_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER update_project_funding_trigger
AFTER INSERT OR UPDATE OR DELETE ON investments
FOR EACH ROW
EXECUTE FUNCTION update_project_funding();
