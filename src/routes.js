import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Links from "./pages/Links";
import Start from "./pages/Start";

import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#2ccbb9",
        activeTintColor: "#fff",
        marginTop: 16,
        labelStyle: {
          fontSize: 19,
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Start}
        options={{
          title: "Encurtar Link",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Encurtar Link",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Links"
        component={Links}
        options={{
          title: "Meus Links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
