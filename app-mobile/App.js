import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/HomeScreen";
import ProfileScreen from "./components/HomeScreen";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();



function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="A'rosa-je"
                component={HomeScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#0EB51F",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerRight: () => (
                    <Icon
                      name="info"
                      size={30}
                      color="#fff"
                      style={{ marginRight: 20 }}
                      onPress={ () => alert('In progress')}
                    />
                  ),
                }}
              />
              <HomeStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#0EB51F",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Chat">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Chat"
                component={SettingsScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#0EB51F",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
              <SettingsStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#0EB51F",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#0EB51F",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
              <SettingsStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#0EB51F",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

