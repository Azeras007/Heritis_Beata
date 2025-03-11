import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text>Login Page (React Native)</Text>
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

export default LoginPage;
