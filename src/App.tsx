import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Registration } from "./components/pages/Registration";
import SignIn from "./components/pages/SignIn";
import Error404 from "./components/pages/Error404";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProducts from "./components/pages/AddProducts";

function App() {
  const LayOut = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    const showNavbar = !["/404", "*"].includes(location.pathname);

    return (
      <>
        {showNavbar && <Navbar />}
        {children}
        {showNavbar && <Footer />}
      </>
    );
  };

  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <LayOut>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/Products" element={<Products />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/signIn" element={<SignIn />} />

              {/* protected Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/addproducts"
                element={
                  <ProtectedRoute>
                    <AddProducts />
                  </ProtectedRoute>
                }
              />
              {/* Errors */}
              <Route path="/404" element={<Error404 />} />
              <Route path="*" element={<Navigate to={"/404"} />} />
            </Routes>
          </LayOut>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
