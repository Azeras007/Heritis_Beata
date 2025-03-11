import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import ProjectCard from "../projects/ProjectCard.native";

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
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = 380; // Width of each card
  const cardMargin = 16; // Margin between cards
  const totalCardWidth = cardWidth + cardMargin; // Total width including margin

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current?.scrollTo({
        x: newIndex * totalCardWidth,
        animated: true,
      });
    } else {
      // Loop back to the beginning
      setCurrentIndex(0);
      scrollViewRef.current?.scrollTo({ x: 0, animated: true });
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current?.scrollTo({
        x: newIndex * totalCardWidth,
        animated: true,
      });
    } else {
      // Loop to the end
      const newIndex = projects.length - 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current?.scrollTo({
        x: newIndex * totalCardWidth,
        animated: true,
      });
    }
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / totalCardWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.carouselContainer}>
        {/* Navigation Buttons */}
        <TouchableOpacity style={styles.navButton} onPress={prevSlide}>
          <Icon name="chevron-left" size={24} color="#333" />
        </TouchableOpacity>

        {/* Projects Carousel */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          onMomentumScrollEnd={handleScroll}
        >
          {projects.map((project) => (
            <View key={project.id} style={styles.cardContainer}>
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
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.navButton} onPress={nextSlide}>
          <Icon name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Pagination Indicators */}
      <View style={styles.pagination}>
        {projects.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index ? styles.paginationDotActive : {},
            ]}
            onPress={() => {
              setCurrentIndex(index);
              scrollViewRef.current?.scrollTo({
                x: index * totalCardWidth,
                animated: true,
              });
            }}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("Projects");
          }}
        >
          <Text style={styles.buttonText}>Voir Tous les Projets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: "#F9F5F0",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    maxWidth: "80%",
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 8,
  },
  cardContainer: {
    width: 380,
    marginHorizontal: 8,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    width: 32,
    backgroundColor: "#722F37",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#722F37",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default FeaturedProjects;
