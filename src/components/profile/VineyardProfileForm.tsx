import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Upload, Trash2, Plus, Wine, Grape, Award } from "lucide-react";

const VineyardProfileForm = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [awards, setAwards] = useState<string[]>([
    "Médaille d'Or au Concours Général Agricole 2020",
  ]);
  const [newAward, setNewAward] = useState("");

  // Project creation state
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectImage, setProjectImage] = useState<string | null>(null);

  const handleSaveProfile = () => {
    toast({
      title: "Profil enregistré",
      description: "Votre profil de domaine a été mis à jour avec succès.",
    });
  };

  const handleCreateProject = () => {
    toast({
      title: "Projet créé",
      description: "Votre projet de financement a été créé avec succès.",
    });

    // Reset form
    setProjectTitle("");
    setProjectDescription("");
    setFundingGoal("");
    setProjectDuration("");
    setProjectImage(null);
  };

  const handleAddAward = () => {
    if (newAward.trim()) {
      setAwards([...awards, newAward.trim()]);
      setNewAward("");
    }
  };

  const handleRemoveAward = (index: number) => {
    setAwards(awards.filter((_, i) => i !== index));
  };

  const handleAddGalleryImage = () => {
    // Simulate adding a new image
    const newImage = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?w=600&q=80`;
    setGalleryImages([...galleryImages, newImage]);
  };

  const handleImageUpload = (
    setter: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    // Simulate image upload with random unsplash image
    const randomId = Math.floor(Math.random() * 1000000);
    setter(`https://images.unsplash.com/photo-${randomId}?w=800&q=80`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profil du Domaine</TabsTrigger>
          <TabsTrigger value="projects">Projets de Financement</TabsTrigger>
          <TabsTrigger value="wines">Vins & Boutique</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wine className="h-5 w-5 text-[#722F37]" />
                Informations du Domaine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cover Image */}
              <div className="space-y-2">
                <Label>Image de couverture</Label>
                <div className="relative h-48 bg-gray-100 rounded-md overflow-hidden">
                  {coverImage ? (
                    <>
                      <img
                        src={coverImage}
                        alt="Cover"
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setCoverImage(null)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Button
                        variant="outline"
                        onClick={() => handleImageUpload(setCoverImage)}
                      >
                        <Upload className="h-4 w-4 mr-2" /> Ajouter une image de
                        couverture
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Logo */}
              <div className="space-y-2">
                <Label>Logo du domaine</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 bg-gray-100 rounded-full overflow-hidden">
                    {logoImage ? (
                      <>
                        <img
                          src={logoImage}
                          alt="Logo"
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-0 right-0 rounded-full h-6 w-6 p-0"
                          onClick={() => setLogoImage(null)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full h-8 w-8 p-0"
                          onClick={() => handleImageUpload(setLogoImage)}
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">
                      Ajoutez le logo de votre domaine. Il sera affiché sur
                      votre profil et vos projets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom du domaine</Label>
                  <Input
                    id="name"
                    placeholder="Château Bordeaux"
                    defaultValue="Château Bordeaux"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Région</Label>
                  <Input
                    id="region"
                    placeholder="Bordeaux, France"
                    defaultValue="Bordeaux, France"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="foundedYear">Année de fondation</Label>
                  <Input
                    id="foundedYear"
                    type="number"
                    placeholder="1785"
                    defaultValue="1785"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="owner">Propriétaire</Label>
                  <Input
                    id="owner"
                    placeholder="Marie Dubois"
                    defaultValue="Marie Dubois"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="website">Site web</Label>
                  <Input
                    id="website"
                    placeholder="https://www.example.com"
                    defaultValue="https://www.example.com"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre domaine..."
                    rows={5}
                    defaultValue="Fondé au 18ème siècle, Château Bordeaux est un domaine viticole d'exception situé au cœur de l'appellation Saint-Émilion. Nos vignes s'étendent sur 15 hectares de terroir argilo-calcaire, idéal pour la culture du merlot et du cabernet franc. Notre philosophie est de produire des vins qui expriment pleinement le terroir tout en respectant l'environnement à travers des pratiques durables."
                  />
                </div>
              </div>

              {/* Awards */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#722F37]" />
                  Distinctions et récompenses
                </Label>
                <div className="space-y-2">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input value={award} readOnly className="flex-1" />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveAward(index)}
                      >
                        <Trash2 className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Ajouter une distinction..."
                      value={newAward}
                      onChange={(e) => setNewAward(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleAddAward}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="space-y-2">
                <Label>Galerie d'images</Label>
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-24 bg-gray-100 rounded-md overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() =>
                          setGalleryImages(
                            galleryImages.filter((_, i) => i !== index),
                          )
                        }
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center justify-center h-24 bg-gray-100 rounded-md border-2 border-dashed border-gray-300">
                    <Button variant="ghost" onClick={handleAddGalleryImage}>
                      <Plus className="h-4 w-4 mr-2" /> Ajouter
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  className="bg-[#722F37] hover:bg-[#5a252c] text-white"
                  onClick={handleSaveProfile}
                >
                  Enregistrer le profil
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grape className="h-5 w-5 text-[#722F37]" />
                Créer un nouveau projet de financement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Image principale du projet</Label>
                <div className="relative h-48 bg-gray-100 rounded-md overflow-hidden">
                  {projectImage ? (
                    <>
                      <img
                        src={projectImage}
                        alt="Project"
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setProjectImage(null)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Button
                        variant="outline"
                        onClick={() => handleImageUpload(setProjectImage)}
                      >
                        <Upload className="h-4 w-4 mr-2" /> Ajouter une image de
                        projet
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="projectTitle">Titre du projet</Label>
                  <Input
                    id="projectTitle"
                    placeholder="Ex: Restauration du Chai Historique"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fundingGoal">
                    Objectif de financement (€)
                  </Label>
                  <Input
                    id="fundingGoal"
                    type="number"
                    placeholder="50000"
                    value={fundingGoal}
                    onChange={(e) => setFundingGoal(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDuration">Durée (jours)</Label>
                  <Input
                    id="projectDuration"
                    type="number"
                    placeholder="30"
                    value={projectDuration}
                    onChange={(e) => setProjectDuration(e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="projectDescription">
                    Description du projet
                  </Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Décrivez votre projet de financement..."
                    rows={5}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Récompenses pour les investisseurs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card
                    className="border-t-4"
                    style={{ borderTopColor: "#722F37" }}
                  >
                    <CardHeader>
                      <CardTitle className="text-base">
                        Niveau 1: 100€
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Une bouteille de notre millésime actuel et votre nom sur
                        notre mur des soutiens.
                      </p>
                    </CardContent>
                  </Card>
                  <Card
                    className="border-t-4"
                    style={{ borderTopColor: "#5E8C31" }}
                  >
                    <CardHeader>
                      <CardTitle className="text-base">
                        Niveau 2: 500€
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Adhésion d'un an à notre club de vin avec livraison
                        trimestrielle de bouteilles sélectionnées.
                      </p>
                    </CardContent>
                  </Card>
                  <Card
                    className="border-t-4"
                    style={{ borderTopColor: "#B8860B" }}
                  >
                    <CardHeader>
                      <CardTitle className="text-base">
                        Niveau 3: 1000€
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Parrainez une rangée de vignes avec plaque personnalisée
                        et recevez chaque année des bouteilles de cette
                        parcelle.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" /> Ajouter un niveau de
                  récompense
                </Button>
              </div>

              <div className="flex justify-end">
                <Button
                  className="bg-[#722F37] hover:bg-[#5a252c] text-white"
                  onClick={handleCreateProject}
                >
                  Créer le projet
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mes projets en cours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <p>Vous n'avez pas encore de projets en cours.</p>
                <p className="text-sm">
                  Créez votre premier projet de financement pour commencer.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wines" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wine className="h-5 w-5 text-[#722F37]" />
                Mes vins en vente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button className="bg-[#722F37] hover:bg-[#5a252c] text-white">
                    <Plus className="h-4 w-4 mr-2" /> Ajouter un vin
                  </Button>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Nom
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Millésime
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Prix
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Stock
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">
                          Château Margaux Grand Cru
                        </td>
                        <td className="px-4 py-3 text-sm">2015</td>
                        <td className="px-4 py-3 text-sm">Rouge</td>
                        <td className="px-4 py-3 text-sm">120 €</td>
                        <td className="px-4 py-3 text-sm">15</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="ghost" size="sm">
                            Modifier
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">
                          Château d'Yquem Sauternes
                        </td>
                        <td className="px-4 py-3 text-sm">2010</td>
                        <td className="px-4 py-3 text-sm">Blanc</td>
                        <td className="px-4 py-3 text-sm">180 €</td>
                        <td className="px-4 py-3 text-sm">8</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="ghost" size="sm">
                            Modifier
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">
                          Château Cheval Blanc
                        </td>
                        <td className="px-4 py-3 text-sm">2016</td>
                        <td className="px-4 py-3 text-sm">Rouge</td>
                        <td className="px-4 py-3 text-sm">140 €</td>
                        <td className="px-4 py-3 text-sm">7</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="ghost" size="sm">
                            Modifier
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistiques de vente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Ventes ce mois</p>
                  <p className="text-2xl font-bold">4,250 €</p>
                  <p className="text-xs text-green-600">
                    +12% par rapport au mois dernier
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Bouteilles vendues</p>
                  <p className="text-2xl font-bold">32</p>
                  <p className="text-xs text-green-600">
                    +8% par rapport au mois dernier
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Clients</p>
                  <p className="text-2xl font-bold">18</p>
                  <p className="text-xs text-green-600">+5 nouveaux clients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VineyardProfileForm;
