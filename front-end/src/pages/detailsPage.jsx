import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import useServiceDetails from "../hooks/useServiceDetails";
import useQueryParams from "../hooks/useQueryParams";
import ServiceHero from "../components/service/ServiceHero";
import ServiceOverview from "../components/service/ServiceOverview";
import ServiceFeatures from "../components/service/ServiceFeatures";
import ServicePricingInfo from "../components/service/ServicePricingInfo";
import VendorsList from "../components/service/VendorsList";
import BackButton from "../components/ui/BackButton";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import NotFoundMessage from "../components/ui/NotFoundMessage";
import ConsultationButton from "../components/service/ConsultationButton";

const DetailsPage = () => {
  const { getParam } = useQueryParams();
  const navigate = useNavigate();
  const selectedService = getParam("selected");
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get service details and vendors
  const { serviceDetails, vendors, loading, error } = useServiceDetails(selectedService);

  const handleBackClick = () => {
    navigate("/services");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <BackButton onClick={handleBackClick} text="Back to Services" />

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage title="Error Loading Service Details" message={error} />
          ) : serviceDetails ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ServiceHero 
                title={serviceDetails.title} 
                image={serviceDetails.image} 
              />
              
              {/* Tabs Navigation */}
              <div className="border-b">
                <div className="flex overflow-x-auto">
                  <button
                    className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                      activeTab === 'overview' 
                        ? 'border-b-2 border-wedding-purple text-wedding-purple' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => handleTabChange('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                      activeTab === 'vendors' 
                        ? 'border-b-2 border-wedding-purple text-wedding-purple' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => handleTabChange('vendors')}
                  >
                    Vendors ({vendors?.length || 0})
                  </button>
                </div>
              </div>
              
              <div className="p-6 md:p-10">
                <div className="max-w-4xl mx-auto">
                  {/* Overview Tab Content */}
                  {activeTab === 'overview' && (
                    <>
                      <ServiceOverview description={serviceDetails.description} />
                      
                      {serviceDetails.features && serviceDetails.features.length > 0 && (
                        <ServiceFeatures features={serviceDetails.features} />
                      )}
                      
                      <ServicePricingInfo 
                        pricing={serviceDetails.pricing} 
                        timeline={serviceDetails.timeline} 
                      />
                      
                      {/* Show a preview of vendors */}
                      {vendors && vendors.length > 0 && (
                        <div className="mb-8">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Featured Vendors</h2>
                            <button 
                              onClick={() => handleTabChange('vendors')}
                              className="text-wedding-purple hover:underline text-sm font-medium"
                            >
                              View All Vendors
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {vendors.slice(0, 2).map(vendor => (
                              <div key={vendor.id} className="border rounded-lg p-4 flex items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                  <img 
                                    src={vendor.image} 
                                    alt={vendor.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="ml-4">
                                  <h3 className="font-medium">{vendor.name}</h3>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="flex items-center">
                                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                      {vendor.rating} ({vendor.reviewCount} reviews)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  
                  {/* Vendors Tab Content */}
                  {activeTab === 'vendors' && (
                    <VendorsList 
                      vendors={vendors || []} 
                      serviceTitle={serviceDetails.title}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <NotFoundMessage 
              title="Service Not Found" 
              message="The requested service information could not be found." 
            />
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DetailsPage;
