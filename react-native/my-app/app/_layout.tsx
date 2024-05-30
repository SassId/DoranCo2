import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { createContext, useState } from "react";

type UserContextType = {
  user: {
    email: string;
  };
  setUser: (value: { email: string }) => void;
};
export const UserContext = createContext<UserContextType>({
  user: { email: "" },
  setUser: (user) => null,
});

export default function RootLayout() {
  const [user, setUser] = useState({ email: "" });

  return (
    // creates a drawer nav menu (the drawer is nested inside the gesture handler that allows to swipe to reveal the menu)
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
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
              drawerLabel: "Login / Signin",
              title: "Login / Signin",
            }}
          />
          <Drawer.Screen
            name="profile"
            options={{
              drawerLabel: "Profile",
              title: "Profile",
            }}
          ></Drawer.Screen>
        </Drawer>
      </GestureHandlerRootView>
    </UserContext.Provider>
  );
}

// * Expo uses the navigation by directory:
// It gives us several options of navigation style:
// Stack Navigation (pages are loaded and displayed on top the previous one)
// Drawer Navigation (translateX() nav)
// Tab Navigation

// TODO:
// Exercice:
// layout principale:
// Créer un context
// Ajouter une variable d'atat user et setUser
// Ajouter le Provider avec les valeur user et setUser

// Dans connexion (index);
// Utiliser le contect pour mettre email dans la variable d'état user
