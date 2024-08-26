import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SplashScreen } from './pages/SplashScreen';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { ChoosePage } from './pages/ChoosePage';
import { UserMenuPage } from './pages/UserMenuPage';
import { NewPetPage } from './pages/NewPetPage';
import { CustomizePetPage } from './pages/CustomizePetPage';
import { MyPetsPage } from './pages/MyPetsPage';
import { PetInteractionPage } from './pages/PetInteractionPage';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route
          path="/user-menu"
          element={
            <ProtectedRoute>
              <UserMenuPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-pet"
          element={
            <ProtectedRoute>
              <NewPetPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customize-pet"
          element={
            <ProtectedRoute>
              <CustomizePetPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-pets"
          element={
            <ProtectedRoute>
              <MyPetsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pet/:id"
          element={
            <ProtectedRoute>
              <PetInteractionPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



/*
// pruebas
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SplashScreen } from './pages/SplashScreen';
import { HomePage } from './pages/HomePage';
import { ChoosePage } from './pages/ChoosePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserMenuPage } from './pages/UserMenuPage';
import { NewPetPage } from './pages/NewPetPage';
import { CustomizePetPage } from './pages/CustomizePetPage';
import { MyPetsPage } from './pages/MyPetsPage';
import { PetInteractionPage } from './pages/PetInteractionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-menu" element={<UserMenuPage />} /> 
        <Route path="/new-pet" element={<NewPetPage />} /> 
        <Route path="/customize-pet" element={<CustomizePetPage />} />
        <Route path="/my-pets" element={<MyPetsPage />} />
        <Route path="/pet/:id" element={<PetInteractionPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
*/