import Navbar from "../components/ui/Navbar";
import Button from "../components/ui/Button";
import Footer from "../components/ui/Footer";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-4 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          text={"Back to Home"}
          onClick={handleGoHome}
          variant="primary"
        ></Button>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
