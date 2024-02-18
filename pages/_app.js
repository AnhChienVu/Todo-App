import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 106px)" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
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
    </>
  );
}
