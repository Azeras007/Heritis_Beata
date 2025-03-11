import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Appbar, Menu, Divider, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Feather";

interface NavbarProps {
  isLoggedIn?: boolean;
  userType?: "investor" | "vineyard";
  userName?: string;
  userAvatar?: string;
}

const Navbar = ({
  isLoggedIn: propIsLoggedIn = false,
  userType: propUserType = "investor",
  userName: propUserName = "Utilisateur Invité",
  userAvatar:
    propUserAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
}: NavbarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(propIsLoggedIn);
  const [userType, setUserType] = useState(propUserType);
  const [userName, setUserName] = useState(propUserName);
  const [userAvatar, setUserAvatar] = useState(propUserAvatar);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedIsLoggedIn =
          (await AsyncStorage.getItem("isLoggedIn")) === "true";
        const storedUserType =
          ((await AsyncStorage.getItem("userType")) as
            | "investor"
            | "vineyard") || propUserType;
        const storedUserName =
          (await AsyncStorage.getItem("userName")) || propUserName;

        // Force login status to true for demo purposes
        if (!storedIsLoggedIn) {
          await AsyncStorage.setItem("isLoggedIn", "true");
          await AsyncStorage.setItem("userType", "investor");
          await AsyncStorage.setItem("userName", "Jean Dupont");
          setIsLoggedIn(true);
          setUserType("investor");
          setUserName("Jean Dupont");
          setUserAvatar(
            `https://api.dicebear.com/7.x/avataaars/svg?seed=JeanDupont`,
          );
        } else {
          setIsLoggedIn(storedIsLoggedIn);
          setUserType(storedUserType);
          setUserName(storedUserName);

          if (storedIsLoggedIn) {
            setUserAvatar(
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${storedUserName.replace(/\s+/g, "")}`,
            );
          }
        }
      } catch (error) {
        console.error("Error reading from AsyncStorage:", error);
      }
    };

    checkLoginStatus();
  }, [propIsLoggedIn, propUserType, propUserName, propUserAvatar]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("isLoggedIn");
      await AsyncStorage.removeItem("userType");
      await AsyncStorage.removeItem("userName");

      setIsLoggedIn(false);
      setUserType("investor");
      setUserName("Utilisateur Invité");
      setUserAvatar("https://api.dicebear.com/7.x/avataaars/svg?seed=guest");

      // @ts-ignore
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="wine" size={24} color="#722F37" />
          <Text style={styles.logoText}>Heritis</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={20} color="#333" />
          </TouchableOpacity>

          {isLoggedIn ? (
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <TouchableOpacity
                  style={styles.userButton}
                  onPress={() => setMenuVisible(true)}
                >
                  <Avatar.Image size={32} source={{ uri: userAvatar }} />
                  <Text style={styles.userName}>{userName}</Text>
                </TouchableOpacity>
              }
            >
              <Menu.Item
                onPress={() => {
                  setMenuVisible(false);
                  // @ts-ignore
                  navigation.navigate("Profile");
                }}
                title="Mon Profil"
                leadingIcon="account"
              />
              <Menu.Item
                onPress={() => {
                  setMenuVisible(false);
                  // @ts-ignore
                  navigation.navigate("Profile");
                }}
                title={
                  userType === "investor"
                    ? "Mes Investissements"
                    : "Mes Projets Viticoles"
                }
              />
              <Menu.Item
                onPress={() => setMenuVisible(false)}
                title="Paramètres"
              />
              <Divider />
              <Menu.Item
                onPress={() => {
                  setMenuVisible(false);
                  handleLogout();
                }}
                title="Déconnexion"
                leadingIcon="logout"
              />
            </Menu>
          ) : (
            <View style={styles.authButtons}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate("Login");
                }}
              >
                <Icon name="log-in" size={16} color="#333" />
                <Text style={styles.loginText}>Connexion</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate("Register");
                }}
              >
                <Text style={styles.registerText}>S'inscrire</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    height: 60,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#722F37",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchButton: {
    marginRight: 16,
    padding: 8,
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  userName: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  authButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    padding: 8,
  },
  loginText: {
    marginLeft: 4,
    color: "#333",
  },
  registerButton: {
    backgroundColor: "#722F37",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  registerText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default Navbar;
