import React from "react";
import { View, Text, Button } from "react-native";

function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    );
  }