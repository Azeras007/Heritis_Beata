import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { ShoppingCart as CartIcon, Trash2, X, Plus, Minus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

interface CartItem {
  id: string;
  name: string;
  year: number;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface ShoppingCartProps {
  trigger?: React.ReactNode;
}

const ShoppingCart = ({ trigger }: ShoppingCartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("wineCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart data", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wineCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({
      title: "Article retiré",
      description: "L'article a été retiré de votre panier",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Panier vidé",
      description: "Tous les articles ont été retirés de votre panier",
    });
  };

  const checkout = () => {
    toast({
      title: "Commande passée",
      description: "Votre commande a été traitée avec succès!",
    });
    setCartItems([]);
    setIsOpen(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon" className="relative">
            <CartIcon className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#722F37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Votre Panier</SheetTitle>
          <SheetDescription>
            {cartItems.length === 0
              ? "Votre panier est vide"
              : `${totalItems} article${totalItems > 1 ? "s" : ""} dans votre panier`}
          </SheetDescription>
        </SheetHeader>

        {cartItems.length > 0 && (
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-gray-500 flex items-center"
              onClick={clearCart}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Vider le panier
            </Button>
          </div>
        )}

        <div className="flex-grow overflow-auto py-2">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <CartIcon className="h-12 w-12 mb-4 text-gray-300" />
              <p>Votre panier est vide</p>
              <Button
                variant="outline"
                className="mt-4 text-[#722F37] border-[#722F37]"
                onClick={() => setIsOpen(false)}
              >
                Continuer vos achats
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.year}</p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-2 py-1 text-gray-500"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-gray-500"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-medium">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Frais de livraison</span>
                <span>{shipping.toFixed(2)} €</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>

            <SheetFooter className="mt-6">
              <Button
                className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white"
                onClick={checkout}
              >
                Passer la commande
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
