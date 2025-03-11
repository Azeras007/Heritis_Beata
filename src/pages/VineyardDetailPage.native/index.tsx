import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VineyardDetailPage = () => {
  return (
    <View style={styles.container}>
      <Text>Vineyard Detail Page (React Native)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F5F0",
  },
});

export default VineyardDetailPage;
