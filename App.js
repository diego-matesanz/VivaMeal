import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from "firebase/app";
 import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: "AIzaSyDC2I-QWCKrFuuftmU8TB29ij2qMLydE-0",
  authDomain: "vivameal.firebaseapp.com",
  projectId: "vivameal",
  storageBucket: "vivameal.appspot.com",
  messagingSenderId: "300761696355",
  appId: "1:300761696355:web:7f464ad4109c08f5609056"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "diegomatesanzfuente@gmail.com", "password")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error(error);
      });
    }, 5000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='light'/>
    </>
  );
}
