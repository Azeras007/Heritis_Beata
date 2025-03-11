import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HowItWorks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment Fonctionne Heritis</Text>
      <Text style={styles.subtitle}>Version React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9F5F0",
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

export default HowItWorks;
