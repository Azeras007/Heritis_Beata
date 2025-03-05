import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin } from "lucide-react";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  // Sample projects data
  const projects = [
    {
      id: "1",
      title: "Restauration du Patrimoine Château Bordeaux",
      description:
        "Aidez-nous à restaurer ce vignoble du 18ème siècle à sa gloire d'antan et rejoignez notre club de vin exclusif avec un accès spécial aux millésimes.",
      imageUrl:
        "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80",
      fundingGoal: 50000,
      currentFunding: 32500,
      daysLeft: 21,
      location: "Bordeaux, France",
      ownerName: "Marie Dubois",
      ownerAvatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
      region: "bordeaux",
    },
    {
      id: "2",
      title: "Conversion Bio des Collines Toscanes",
      description:
        "Soutenez la transition de notre vignoble familial vers des méthodes de production entièrement biologiques tout en vous assurant l'accès à nos vins de réserve limités.",
      imageUrl:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80",
      fundingGoal: 35000,
      currentFunding: 28000,
      daysLeft: 14,
      location: "Toscane, Italie",
      ownerName: "Marco Bianchi",
      ownerAvatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marco",
      region: "italie",
    },
    {
      id: "3",
      title: "Expérimentation de Nouveaux Cépages à Napa Valley",
      description:
        "Rejoignez-nous dans le développement d'un cépage résistant au climat qui pourrait révolutionner la production viticole californienne face aux changements climatiques.",
      imageUrl:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
      fundingGoal: 75000,
      currentFunding: 41200,
      daysLeft: 30,
      location: "Napa Valley, USA",
      ownerName: "Sarah Johnson",
      ownerAvatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      region: "usa",
    },
    {
      id: "4",
      title: "Expansion en Haute Altitude à Mendoza",
      description:
        "Aidez-nous à étendre notre vignoble à des altitudes plus élevées dans les Andes pour produire des Malbecs plus complexes avec des expressions de terroir uniques.",
      imageUrl:
        "https://images.unsplash.com/photo-1566903451935-7e8833da3b22?w=600&q=80",
      fundingGoal: 60000,
      currentFunding: 18000,
      daysLeft: 45,
      location: "Mendoza, Argentine",
      ownerName: "Carlos Mendez",
      ownerAvatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      region: "argentine",
    },
    {
      id: "5",
      title: "Innovation en Vin Mousseux de la Vallée de la Loire",
      description:
        "Financez notre production expérimentale de vin mousseux utilisant des méthodes traditionnelles avec une technologie moderne pour une nouvelle génération de bulles.",
      imageUrl:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
      fundingGoal: 40000,
      currentFunding: 22500,
      daysLeft: 28,
      location: "Vallée de la Loire, France",
      ownerName: "Jeanne Moreau",
      ownerAvatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeanne",
      region: "loire",
    },
    {
      id: "6",
      title: "Vignoble Biodynamique en Bourgogne",
      description:
        "Participez à notre conversion vers des pratiques biodynamiques complètes pour produire des vins qui expriment véritablement le terroir bourguignon.",
      imageUrl:
        "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&q=80",
      fundingGoal: 45000,
      currentFunding: 15000,
      daysLeft: 60,
      location: "Bourgogne, France",
      ownerName: "Philippe Laurent",
      ownerAvatarUrl:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Philippe",
      region: "bourgogne",
    },
  ];

  // Filter projects based on search term and selected region
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "all" || project.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrir les Projets Viticoles
          </h1>
          <p className="text-lg text-gray-600">
            Explorez et soutenez des projets viticoles innovants du monde entier
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher par nom, description ou lieu"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </Button>

            <select
              className="border rounded-md px-3 py-2 bg-white"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="all">Toutes les régions</option>
              <option value="bordeaux">Bordeaux</option>
              <option value="bourgogne">Bourgogne</option>
              <option value="loire">Loire</option>
              <option value="italie">Italie</option>
              <option value="usa">États-Unis</option>
              <option value="argentine">Argentine</option>
            </select>
          </div>
        </div>

        {/* Map View Button */}
        <div className="mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Voir la carte des vignobles
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="flex justify-center">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  fundingGoal={project.fundingGoal}
                  currentFunding={project.currentFunding}
                  daysLeft={project.daysLeft}
                  location={project.location}
                  ownerName={project.ownerName}
                  ownerAvatarUrl={project.ownerAvatarUrl}
                />
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun projet ne correspond à votre recherche
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
