import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Wine } from "lucide-react";
import WineCard from "@/components/marketplace/WineCard";

interface MarketplacePreviewProps {
  title?: string;
  subtitle?: string;
}

const MarketplacePreview = ({
  title = "Boutique de Vins",
  subtitle = "Découvrez et achetez des vins d'exception directement auprès des vignobles",
}: MarketplacePreviewProps) => {
  // Sample featured wines
  const featuredWines = [
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
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
          </div>
          <Button
            className="mt-4 md:mt-0 bg-[#722F37] hover:bg-[#5a252c] text-white flex items-center gap-2"
            onClick={() => (window.location.href = "/marketplace")}
          >
            <ShoppingCart className="h-4 w-4" />
            Visiter la boutique
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWines.map((wine) => (
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
              onAddToCart={() => (window.location.href = "/marketplace")}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 p-4 bg-[#F9F7F4] rounded-lg">
            <Wine className="h-6 w-6 text-[#722F37]" />
            <span className="text-lg font-medium">
              Plus de 200 vins d'exception disponibles
            </span>
          </div>
          <div className="mt-6">
            <Button
              variant="outline"
              className="text-[#722F37] border-[#722F37] hover:bg-[#722F37] hover:text-white"
              onClick={() => (window.location.href = "/marketplace")}
            >
              Découvrir tous nos vins <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
