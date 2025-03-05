import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Share2,
  MapPin,
  Calendar,
  Wine,
  Users,
  Grape,
  ArrowLeft,
} from "lucide-react";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  // Sample project data - in a real app, you would fetch this based on the ID
  const project = {
    id: "1",
    title: "Restauration du Patrimoine Château Bordeaux",
    description:
      "Aidez-nous à restaurer ce vignoble du 18ème siècle à sa gloire d'antan et rejoignez notre club de vin exclusif avec un accès spécial aux millésimes.",
    fullDescription: `
      <p>Le Château Bordeaux est un joyau historique du patrimoine viticole français, datant du 18ème siècle. Situé au cœur de l'appellation Saint-Émilion, ce domaine de 15 hectares a produit des vins d'exception pendant des générations.</p>
      
      <p>Malheureusement, les bâtiments historiques, dont le chai et la maison principale, nécessitent d'importantes rénovations pour préserver leur intégrité architecturale et améliorer les installations de production.</p>
      
      <h3>Notre projet comprend:</h3>
      <ul>
        <li>Restauration de la façade historique du château</li>
        <li>Rénovation du chai avec équipement moderne tout en préservant son caractère</li>
        <li>Amélioration des installations de dégustation pour accueillir les visiteurs</li>
        <li>Restauration des jardins historiques entourant le domaine</li>
      </ul>
      
      <p>En participant à ce projet, vous ne contribuez pas seulement à préserver un patrimoine culturel important, mais vous rejoignez également notre club de vin exclusif avec des avantages exceptionnels.</p>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80",
      "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
      "https://images.unsplash.com/photo-1566903451935-7e8833da3b22?w=600&q=80",
    ],
    fundingGoal: 50000,
    currentFunding: 32500,
    daysLeft: 21,
    location: "Bordeaux, France",
    ownerName: "Marie Dubois",
    ownerAvatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    rewards: [
      {
        amount: 100,
        title: "Soutien Initial",
        description:
          "Une bouteille de notre millésime actuel et votre nom sur notre mur des soutiens.",
      },
      {
        amount: 250,
        title: "Pack Découverte",
        description:
          "Trois bouteilles de nos différentes cuvées et une visite guidée privée du domaine.",
      },
      {
        amount: 500,
        title: "Club du Vin",
        description:
          "Adhésion d'un an à notre club de vin avec livraison trimestrielle de bouteilles sélectionnées.",
      },
      {
        amount: 1000,
        title: "Parrainage de Vigne",
        description:
          "Parrainez une rangée de vignes avec plaque personnalisée et recevez chaque année des bouteilles de cette parcelle.",
      },
      {
        amount: 5000,
        title: "Expérience VIP",
        description:
          "Week-end complet au domaine avec hébergement, dégustations privées et dîner avec le vigneron.",
      },
    ],
  };

  const fundingPercentage = Math.min(
    Math.round((project.currentFunding / project.fundingGoal) * 100),
    100,
  );

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-[#722F37] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux projets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">
                  {project.daysLeft} jours restants
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={project.ownerAvatarUrl}
                  alt={project.ownerName}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-gray-600">{project.ownerName}</span>
              </div>
            </div>

            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="gallery">Galerie</TabsTrigger>
                <TabsTrigger value="updates">Mises à jour</TabsTrigger>
                <TabsTrigger value="comments">Commentaires</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="text-gray-700">
                <div
                  dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                />
              </TabsContent>

              <TabsContent value="gallery">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="updates">
                <div className="text-center py-8">
                  <Wine className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">
                    Aucune mise à jour pour le moment
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="comments">
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">
                    Aucun commentaire pour le moment
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Funding Info */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg p-6 sticky top-24">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-900">
                    {project.currentFunding.toLocaleString()} €
                  </span>
                  <span className="text-gray-500">
                    sur {project.fundingGoal.toLocaleString()} €
                  </span>
                </div>
                <Progress
                  value={fundingPercentage}
                  className="h-2 bg-gray-200"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-medium text-gray-900">
                    {fundingPercentage}%
                  </span>
                  <span className="text-gray-500">
                    {project.daysLeft} jours restants
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">
                  Choisir un montant
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[50, 100, 250, 500, 1000, 2500].map((amount) => (
                    <button
                      key={amount}
                      className={`py-2 px-3 border rounded-md ${selectedAmount === amount ? "bg-[#722F37] text-white border-[#722F37]" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      {amount} €
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Autre montant"
                    className="w-full border rounded-md px-3 py-2"
                    min="10"
                    onChange={(e) =>
                      handleAmountSelect(parseInt(e.target.value))
                    }
                  />
                  <span className="absolute right-3 top-2 text-gray-500">
                    €
                  </span>
                </div>
              </div>

              <Button className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white mb-4">
                Soutenir ce projet
              </Button>

              <div className="flex justify-center gap-4 mb-6">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5 text-rose-500" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5 text-gray-700" />
                </Button>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-lg mb-3">Récompenses</h3>
                <div className="space-y-3">
                  {project.rewards.map((reward, index) => (
                    <div
                      key={index}
                      className={`border rounded-md p-3 cursor-pointer hover:border-[#722F37] transition-colors ${selectedAmount === reward.amount ? "border-[#722F37] bg-[#722F37]/5" : ""}`}
                      onClick={() => handleAmountSelect(reward.amount)}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium">{reward.title}</h4>
                        <span className="text-[#722F37] font-semibold">
                          {reward.amount} €
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {reward.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
