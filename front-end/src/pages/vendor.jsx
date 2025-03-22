import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import PackageCard from "../components/service/PackageCard";
import useVendorDetails from "../hooks/useVendorDetails";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import BackButton from "../components/ui/BackButton";
import CartModal from "../components/service/CartModal";
import { useCartContext } from "../components/service/CartContext";
import { toast } from "react-toastify";

const Vendor = () => {
  const navigate = useNavigate();
  const { vendorDetails, loading, error } = useVendorDetails();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { addToCart } = useCartContext();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePackageSelect = (packageData) => {
    const cartItem = {
      id: packageData.id,
      type: 'package',
      name: packageData.name,
      price: packageData.price,
      vendorId: vendorDetails.id,
      vendorName: vendorDetails.name,
      description: packageData.description
    };
    
    addToCart(cartItem);
    toast.success(`${packageData.name} added to cart!`);
    setIsCartModalOpen(true);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <BackButton onClick={handleBackClick} text="Back" />

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage title="Error Loading Vendor" message={error} />
          ) : vendorDetails ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
              {/* Vendor Image */}
              <div className="relative h-64">
                <img 
                  src={vendorDetails.image} 
                  alt={vendorDetails.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h1 className="text-3xl font-bold">{vendorDetails.name}</h1>
                  </div>
                </div>
              </div>
              
              {/* Packages Section */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Available Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {vendorDetails.packages.map((pkg) => (
                    <PackageCard 
                      key={pkg.id} 
                      packageData={pkg} 
                      onSelect={handlePackageSelect}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Vendor Not Found</h2>
              <p className="text-gray-600">The vendor you're looking for could not be found.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)} 
      />
      
      <Footer />
    </>
  );
};

export default Vendor;
