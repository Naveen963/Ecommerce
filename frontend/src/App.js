import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ActivationPage,
  LoginPage,
  SignUpPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "./Routes";
import { loadUser } from "./redux/thunks/loadUserthunk";
function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  // const isAuthenticated = useSelector(state=>state.user.isAuthenticated)
  // const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
