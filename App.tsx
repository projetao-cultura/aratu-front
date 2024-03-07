// App.tsx
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { UserProvider } from "./src/UserContext"; // Ajuste o caminho conforme a estrutura do seu projeto
import { FeedProvider } from "./src/Contexts/FeedContext";

export default function App(){
  return(
    <UserProvider>
      <FeedProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </FeedProvider>
    </UserProvider>
  );
}
