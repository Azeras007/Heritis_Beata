import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wine, ShoppingCart, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface WineCardProps {
  id: string;
  name: string;
  year: number;
  price: number;
  imageUrl: string;
  rating: number;
  type: string;
  region: string;
  description: string;
  stock: number;
  onAddToCart?: (id: string) => void;
}

const WineCard = ({
  id,
  name,
  year,
  price,
  imageUrl,
  rating,
  type,
  region,
  description,
  stock,
  onAddToCart,
}: WineCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    } else {
      // Fallback if no handler is provided
      toast({
        title: "Ajouté au panier",
        description: `${name} (${year}) a été ajouté à votre panier`,
      });
    }
  };

  return (
    <Card className="w-full max-w-[300px] overflow-hidden flex flex-col bg-white h-[450px]">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={`${name} ${year}`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-md text-xs font-medium">
          {year}
        </div>
        <div className="absolute top-2 left-2 bg-[#722F37]/90 text-white px-2 py-1 rounded-md text-xs font-medium">
          {type}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-1">
          {name}
        </CardTitle>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-gray-600">{region}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm ml-1">{rating}/5</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3 mb-2">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg text-[#722F37]">
            {price.toFixed(2)} €
          </span>
          <span className="text-sm text-gray-500">
            {stock > 0 ? `${stock} en stock` : "Rupture de stock"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white flex items-center justify-center gap-2"
          onClick={handleAddToCart}
          disabled={stock <= 0}
        >
          <ShoppingCart className="h-4 w-4" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WineCard;
