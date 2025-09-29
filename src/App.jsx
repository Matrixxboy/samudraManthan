// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./Routes/Router.jsx";
import { AuthProvider } from "./components/Auth/AuthContext";
import { Layer } from "./ThemeProvider/Layer.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layer>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={element}
                />
              ))}
            </Routes>
          </Suspense>
        </Layer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;