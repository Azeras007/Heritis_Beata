import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

// Import screens
import HomePage from "./src/components/home.native";
import LoginPage from "./src/pages/LoginPage.native/index";
import RegisterPage from "./src/pages/RegisterPage.native/index";
import ProjectsPage from "./src/pages/ProjectsPage.native/index";
import ProjectDetailPage from "./src/pages/ProjectDetailPage.native/index";
import MarketplacePage from "./src/pages/MarketplacePage.native/index";
import VineyardDetailPage from "./src/pages/VineyardDetailPage.native/index";
import ProfilePage from "./src/pages/ProfilePage.native/index";

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Projects" component={ProjectsPage} />
            <Stack.Screen name="ProjectDetail" component={ProjectDetailPage} />
            <Stack.Screen name="Marketplace" component={MarketplacePage} />
            <Stack.Screen
              name="VineyardDetail"
              component={VineyardDetailPage}
            />
            <Stack.Screen name="Profile" component={ProfilePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
