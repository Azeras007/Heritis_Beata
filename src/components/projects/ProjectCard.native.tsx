import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  fundingGoal?: number;
  currentFunding?: number;
  daysLeft?: number;
  location?: string;
  ownerName?: string;
  ownerAvatarUrl?: string;
}

const ProjectCard = ({
  id = "1",
  title = "Restauration du Patrimoine Château Bordeaux",
  description = "Aidez-nous à restaurer ce vignoble du 18ème siècle à sa gloire d'antan et rejoignez notre club de vin exclusif avec un accès spécial aux millésimes.",
  imageUrl = "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80",
  fundingGoal = 50000,
  currentFunding = 32500,
  daysLeft = 21,
  location = "Bordeaux, France",
  ownerName = "Marie Dubois",
  ownerAvatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
}: ProjectCardProps) => {
  const navigation = useNavigation();
  const fundingPercentage = Math.min(
    Math.round((currentFunding / fundingGoal) * 100),
    100,
  );

  return (
    <Card style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart" size={18} color="#e11d48" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share-2" size={18} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.locationBadge}>
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.ownerContainer}>
          <Image source={{ uri: ownerAvatarUrl }} style={styles.ownerAvatar} />
          <Text style={styles.ownerName}>{ownerName}</Text>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>

        <View style={styles.fundingContainer}>
          <View style={styles.fundingHeader}>
            <Text style={styles.currentFunding}>
              {currentFunding.toLocaleString()} €
            </Text>
            <Text style={styles.fundingGoal}>
              sur {fundingGoal.toLocaleString()} €
            </Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBar, { width: `${fundingPercentage}%` }]}
            />
          </View>

          <View style={styles.fundingFooter}>
            <Text style={styles.percentage}>{fundingPercentage}%</Text>
            <Text style={styles.daysLeft}>{daysLeft} jours restants</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.supportButton}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("ProjectDetail", { id });
          }}
        >
          <Text style={styles.supportButtonText}>Soutenir Ce Projet</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 380,
    height: 480,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  imageContainer: {
    height: 192,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  actionButtons: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  locationBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#333",
  },
  content: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 8,
  },
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ownerAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  ownerName: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  fundingContainer: {
    marginTop: "auto",
  },
  fundingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  currentFunding: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  fundingGoal: {
    fontSize: 14,
    color: "#666",
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#722F37",
    borderRadius: 4,
  },
  fundingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  percentage: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  daysLeft: {
    fontSize: 14,
    color: "#666",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  supportButton: {
    backgroundColor: "#722F37",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  supportButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default ProjectCard;
