import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/Routes";
import Header from "./Layout/Header";
import Aside from "./Layout/Aside";

// Create a separate component that uses the location hook
function AppContent() {
  const location = useLocation();

  // Check if the current route is a login page
  // Assuming login is at /login - adjust the path as needed
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Header />} {/* Hide Header on login page, show elsewhere */}
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Private Routes */}
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Catch-All Route for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {!isLoginPage && <Aside />} {/* Hide Header on login page, show elsewhere */}
    </>
  );
}

// Main App component that provides the Router context
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
