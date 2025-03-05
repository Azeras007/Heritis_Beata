import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VineyardProfile from "@/components/marketplace/VineyardProfile";
import WineCard from "@/components/marketplace/WineCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import ShoppingCartComponent from "@/components/marketplace/ShoppingCart";
import { useToast } from "@/components/ui/use-toast";

const VineyardDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  // Sample vineyard data - in a real app, you would fetch this based on the ID
  const vineyard = {
    id: "1",
    name: "Château Bordeaux",
    description:
      "Fondé au 18ème siècle, Château Bordeaux est un domaine viticole d'exception situé au cœur de l'appellation Saint-Émilion. Nos vignes s'étendent sur 15 hectares de terroir argilo-calcaire, idéal pour la culture du merlot et du cabernet franc. Notre philosophie est de produire des vins qui expriment pleinement le terroir tout en respectant l'environnement à travers des pratiques durables.",
    foundedYear: 1785,
    region: "Bordeaux, France",
    owner: "Marie Dubois",
    awards: [
      "Médaille d'Or au Concours Général Agricole 2020",
      "95 points par Wine Spectator pour le millésime 2015",
      "Certification Agriculture Biologique depuis 2018",
    ],
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    coverImageUrl:
      "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=1200&q=80",
    websiteUrl: "https://example.com",
  };

  // Sample wines from this vineyard
  const vineyardWines = [
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

  const addToCart = (id: string) => {
    const wineToAdd = vineyardWines.find((wine) => wine.id === id);
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
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/marketplace"
            className="inline-flex items-center text-[#722F37] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour à la boutique
          </Link>

          <ShoppingCartComponent
            trigger={
              <Button className="bg-[#722F37] hover:bg-[#5a252c] text-white flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Panier
              </Button>
            }
          />
        </div>

        <div className="mb-8">
          <VineyardProfile {...vineyard} />
        </div>

        <Tabs defaultValue="wines" className="mt-12">
          <TabsList className="mb-6">
            <TabsTrigger value="wines">Nos Vins</TabsTrigger>
            <TabsTrigger value="history">Histoire</TabsTrigger>
            <TabsTrigger value="terroir">Terroir</TabsTrigger>
          </TabsList>

          <TabsContent value="wines">
            <h2 className="text-2xl font-bold mb-6">Vins du Domaine</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {vineyardWines.map((wine) => (
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
          </TabsContent>

          <TabsContent value="history">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    Fondé en 1785 par la famille Dubois, Château Bordeaux est
                    l'un des plus anciens domaines viticoles de la région.
                    Pendant plus de deux siècles, notre famille a cultivé la
                    vigne avec passion et dévouement, transmettant de génération
                    en génération un savoir-faire unique.
                  </p>
                  <p className="mb-4">
                    Au fil des années, le domaine s'est agrandi et modernisé,
                    mais nous avons toujours maintenu notre engagement envers la
                    qualité et l'authenticité. Chaque bouteille de vin que nous
                    produisons raconte l'histoire de notre terroir et de notre
                    héritage.
                  </p>
                  <p>
                    Aujourd'hui, sous la direction de Marie Dubois,
                    représentante de la septième génération, Château Bordeaux
                    continue d'innover tout en respectant les traditions qui ont
                    fait sa réputation d'excellence.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1543418219-44e30b057fea?w=800&q=80"
                    alt="Histoire du domaine"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="terroir">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Notre Terroir</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=800&q=80"
                    alt="Terroir du domaine"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <p className="mb-4">
                    Situé sur les coteaux de Saint-Émilion, notre vignoble
                    bénéficie d'un terroir exceptionnel caractérisé par des sols
                    argilo-calcaires. Cette composition unique du sol, combinée
                    à un microclimat idéal, offre des conditions parfaites pour
                    la culture de nos cépages.
                  </p>
                  <p className="mb-4">
                    Nos 15 hectares de vignes sont principalement plantés de
                    Merlot (60%), de Cabernet Franc (30%) et de Cabernet
                    Sauvignon (10%), avec un âge moyen des vignes de 35 ans.
                  </p>
                  <p>
                    Depuis 2010, nous avons adopté des pratiques de viticulture
                    biodynamique, travaillant en harmonie avec les cycles
                    naturels pour produire des raisins d'une qualité
                    exceptionnelle tout en préservant la biodiversité de notre
                    écosystème.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default VineyardDetailPage;
