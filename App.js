import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import Analysts from "./screens/Analysts";
import Diplomats from "./screens/Diplomats";
import Sentinels from "./screens/Sentinels"
import Explorers from "./screens/Explorers";
import Chart from "./screens/Chart";

const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Personality Types" component={RootTabNavigator} />
      <Drawer.Screen name="Personality Chart" component={Chart} />
    </Drawer.Navigator>
  );
};

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "#defdef",
        inactiveTintColor: "#808080",
        style: {
          backgroundColor: '#000000', //change the bg color of bottom tab nav
        },
      }}
    >
      <RootTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "#ac97b4" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Analysts"
        component={Analysts}
        options={{
          title: "Analysts",
          tabBarIcon: ({ focused }) => (
            <Entypo name="graduation-cap" size={24} color={focused ? "#ac97b4" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Diplomats"
        component={Diplomats}
        options={{
          title: "Diplomats",
          tabBarIcon: ({ focused }) => (
            <AntDesign name="heart" size={24} color={focused ? "#ac97b4" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Sentinels"
        component={Sentinels}
        options={{
          title: "Sentinels",
          tabBarIcon: ({ focused }) => (
            <Entypo name="briefcase" size={24} color={focused ? "#ac97b4" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Explorers"
        component={Explorers}
        options={{
          title: "Explorers",
          tabBarIcon: ({ focused }) => (
            <Entypo name="rocket" size={24} color={focused ? "#ac97b4" : "gray"} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}