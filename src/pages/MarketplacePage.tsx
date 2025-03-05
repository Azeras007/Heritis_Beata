import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WineCard from "@/components/marketplace/WineCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ShoppingCart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShoppingCartComponent from "@/components/marketplace/ShoppingCart";
import { useToast } from "@/components/ui/use-toast";

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const { toast } = useToast();

  // Sample wines data
  const wines = [
    {
      id: "1",
      name: "Château Margaux Grand Cru",
      year: 2015,
      price: 120,
      imageUrl:
        "https://images.unsplash.com/photo-1586370434639-0fe27fbd46f6?w=600&q=80",
      rating: 4.8,
      type: "Rouge",
      region: "Bordeaux",
      description:
        "Un vin élégant avec des notes de cassis, de violette et une touche de chêne. Tanins soyeux et finale persistante.",
      stock: 15,
      vineyardId: "1",
    },
    {
      id: "2",
      name: "Domaine de la Romanée-Conti",
      year: 2017,
      price: 250,
      imageUrl:
        "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&q=80",
      rating: 4.9,
      type: "Rouge",
      region: "Bourgogne",
      description:
        "Un pinot noir exceptionnel aux arômes de fruits rouges, d'épices et de sous-bois. Structure délicate et complexe.",
      stock: 5,
      vineyardId: "2",
    },
    {
      id: "3",
      name: "Château d'Yquem Sauternes",
      year: 2010,
      price: 180,
      imageUrl:
        "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=600&q=80",
      rating: 4.7,
      type: "Blanc",
      region: "Bordeaux",
      description:
        "Un vin liquoreux d'exception avec des notes de miel, d'abricot confit et de vanille. Équilibre parfait entre sucrosité et acidité.",
      stock: 8,
      vineyardId: "1",
    },
    {
      id: "4",
      name: "Domaine Leflaive Montrachet",
      year: 2018,
      price: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1566952579007-432838148d95?w=600&q=80",
      rating: 4.6,
      type: "Blanc",
      region: "Bourgogne",
      description:
        "Un chardonnay d'exception aux arômes de fruits blancs, de noisette et de minéralité. Texture crémeuse et finale longue.",
      stock: 10,
      vineyardId: "2",
    },
    {
      id: "5",
      name: "Dom Pérignon Vintage",
      year: 2012,
      price: 150,
      imageUrl:
        "https://images.unsplash.com/photo-1594372366280-9b96ac46a2b8?w=600&q=80",
      rating: 4.8,
      type: "Champagne",
      region: "Champagne",
      description:
        "Un champagne prestigieux aux notes d'agrumes, de brioche et de fleurs blanches. Effervescence fine et persistante.",
      stock: 12,
      vineyardId: "3",
    },
    {
      id: "6",
      name: "Château Cheval Blanc",
      year: 2016,
      price: 140,
      imageUrl:
        "https://images.unsplash.com/photo-1553361371-9b22f78e9b10?w=600&q=80",
      rating: 4.7,
      type: "Rouge",
      region: "Bordeaux",
      description:
        "Un assemblage de merlot et cabernet franc aux arômes de fruits noirs, d'épices et de truffe. Structure puissante et élégante.",
      stock: 7,
      vineyardId: "1",
    },
    {
      id: "7",
      name: "Barolo Monfortino Giacomo Conterno",
      year: 2014,
      price: 160,
      imageUrl:
        "https://images.unsplash.com/photo-1568213816046-0a8e0e9a40fa?w=600&q=80",
      rating: 4.6,
      type: "Rouge",
      region: "Italie",
      description:
        "Un nebbiolo d'exception aux arômes de rose, de goudron et de cerise. Tanins puissants et finale interminable.",
      stock: 9,
      vineyardId: "4",
    },
    {
      id: "8",
      name: "Château Pétrus",
      year: 2015,
      price: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600&q=80",
      rating: 5.0,
      type: "Rouge",
      region: "Bordeaux",
      description:
        "Un merlot d'exception aux arômes de fruits noirs, de truffe et de violette. Texture veloutée et finale interminable.",
      stock: 3,
      vineyardId: "1",
    },
  ];

  // Sample vineyards data
  const vineyards = [
    {
      id: "1",
      name: "Château Bordeaux",
      region: "Bordeaux, France",
      wineCount: 4,
    },
    {
      id: "2",
      name: "Domaine de Bourgogne",
      region: "Bourgogne, France",
      wineCount: 2,
    },
    {
      id: "3",
      name: "Maison de Champagne",
      region: "Champagne, France",
      wineCount: 1,
    },
    {
      id: "4",
      name: "Tenuta Italiana",
      region: "Piémont, Italie",
      wineCount: 1,
    },
  ];

  // Filter wines based on search term, selected region and type
  const filteredWines = wines.filter((wine) => {
    const matchesSearch =
      wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "all" ||
      wine.region.toLowerCase() === selectedRegion.toLowerCase();
    const matchesType =
      selectedType === "all" ||
      wine.type.toLowerCase() === selectedType.toLowerCase();

    return matchesSearch && matchesRegion && matchesType;
  });

  const addToCart = (id: string) => {
    const wineToAdd = wines.find((wine) => wine.id === id);
    if (!wineToAdd) return;

    // Check if item already exists in cart
    const existingCartItems = JSON.parse(
      localStorage.getItem("wineCart") || "[]",
    );
    const existingItemIndex = existingCartItems.findIndex(
      (item: any) => item.id === id,
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      existingCartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item if it doesn't exist
      existingCartItems.push({
        id: wineToAdd.id,
        name: wineToAdd.name,
        year: wineToAdd.year,
        price: wineToAdd.price,
        imageUrl: wineToAdd.imageUrl,
        quantity: 1,
      });
    }

    // Save to localStorage
    localStorage.setItem("wineCart", JSON.stringify(existingCartItems));

    toast({
      title: "Ajouté au panier",
      description: `${wineToAdd.name} (${wineToAdd.year}) a été ajouté à votre panier`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Boutique de Vins
            </h1>
            <p className="text-lg text-gray-600">
              Découvrez et achetez des vins d'exception directement auprès des
              vignobles
            </p>
          </div>

          <ShoppingCartComponent
            trigger={
              <Button className="bg-[#722F37] hover:bg-[#5a252c] text-white flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Panier
              </Button>
            }
          />
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher par nom, description ou région"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <select
              className="border rounded-md px-3 py-2 bg-white"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="all">Toutes les régions</option>
              <option value="bordeaux">Bordeaux</option>
              <option value="bourgogne">Bourgogne</option>
              <option value="champagne">Champagne</option>
              <option value="italie">Italie</option>
            </select>

            <select
              className="border rounded-md px-3 py-2 bg-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">Tous les types</option>
              <option value="rouge">Rouge</option>
              <option value="blanc">Blanc</option>
              <option value="champagne">Champagne</option>
            </select>
          </div>
        </div>

        {/* Tabs for Wines and Vineyards */}
        <Tabs defaultValue="wines" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="wines">Vins</TabsTrigger>
            <TabsTrigger value="vineyards">Domaines</TabsTrigger>
          </TabsList>

          <TabsContent value="wines">
            {filteredWines.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredWines.map((wine) => (
                  <WineCard
                    key={wine.id}
                    id={wine.id}
                    name={wine.name}
                    year={wine.year}
                    price={wine.price}
                    imageUrl={wine.imageUrl}
                    rating={wine.rating}
                    type={wine.type}
                    region={wine.region}
                    description={wine.description}
                    stock={wine.stock}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Aucun vin ne correspond à votre recherche
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="vineyards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vineyards.map((vineyard) => (
                <div
                  key={vineyard.id}
                  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <a
                    href={`/marketplace/vineyard/${vineyard.id}`}
                    className="block"
                  >
                    <div className="h-40 bg-gray-100 flex items-center justify-center">
                      <img
                        src={`https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80`}
                        alt={vineyard.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{vineyard.name}</h3>
                      <p className="text-sm text-gray-600">{vineyard.region}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {vineyard.wineCount} vins disponibles
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default MarketplacePage;
