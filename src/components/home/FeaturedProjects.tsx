import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "../projects/ProjectCard";

interface FeaturedProjectsProps {
  title?: string;
  subtitle?: string;
  projects?: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    fundingGoal: number;
    currentFunding: number;
    daysLeft: number;
    location: string;
    ownerName: string;
    ownerAvatarUrl: string;
  }>;
}

const FeaturedProjects = ({
  title = "Projets Viticoles en Vedette",
  subtitle = "Découvrez des opportunités viticoles uniques et devenez partie prenante de leur histoire",
  projects = [
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
    },
  ],
}: FeaturedProjectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = 3; // Number of projects visible at once

  const nextSlide = () => {
    if (currentIndex < projects.length - visibleProjects) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projects.length - visibleProjects); // Loop to the end
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#F9F5F0] w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </Button>
          </div>

          {/* Projects Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
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
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({
            length: Math.ceil(projects.length / visibleProjects),
          }).map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all ${currentIndex === index * visibleProjects ? "w-8 bg-[#722F37]" : "w-2.5 bg-gray-300"}`}
              onClick={() => setCurrentIndex(index * visibleProjects)}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-[#722F37] hover:bg-[#5a252c] text-white px-8 py-2">
            Voir Tous les Projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
