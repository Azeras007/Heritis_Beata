import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MarketplacePreview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boutique de Vins</Text>
      <Text style={styles.subtitle}>Version React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});

export default MarketplacePreview;
