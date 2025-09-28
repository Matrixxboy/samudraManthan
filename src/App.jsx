// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./Routes/Router.jsx";
import { AuthProvider } from "./components/Auth/AuthContext";
import { useTheme } from "./ThemeProvider/Layer.jsx";

function App() {
  const theme = useTheme();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <div
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.textPrimary,
                      minHeight: "100vh",
                      fontFamily: theme.fontFamily.sans,
                    }}
                  >
                    {element}
                  </div>
                }
              />
            ))}
          </Routes>

        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
