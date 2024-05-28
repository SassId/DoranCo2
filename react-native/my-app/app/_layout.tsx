import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    // creates a drawer nav menu (the drawer is nested inside the gesture handler that allows to swipe to reveal the menue)
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "slateblue",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />

        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About",
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
          }}
        />
        <Drawer.Screen
          name="authentification"
          options={{
            drawerLabel: "Account",
            title: "Account",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// * Expo uses the navigation by directory:
// It gives us several options of navigation style:
// Stack Navigation (pages are loaded and displayed on top the previous one)
// Drawer Navigation (translateX() nav)
// Tab Navigation
