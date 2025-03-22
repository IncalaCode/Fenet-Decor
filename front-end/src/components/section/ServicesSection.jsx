import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServicesSection = () => {
  const { services, loading, error } = useServices();
  const navigate = useNavigate();
  
  const handleServiceClick = (serviceTitle) => {
    // Navigate to services list with the selected service as a query parameter
    navigate(`/services?selected=${encodeURIComponent(serviceTitle)}`);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-wedding-purple mx-auto mb-6"></div>
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  if (error) {
    console.log('Using fallback services due to error');
  }
  
  const servicesToRender = Array.isArray(services) ? services : [];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-wedding-purple mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Comprehensive wedding planning services to make your special day perfect in every way.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToRender.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
              onClick={() => handleServiceClick(service.title)}
              role="button"
              aria-label={`View details for ${service.title}`}
            >
              {service.image ? (
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center text-wedding-purple text-5xl rounded-t-lg bg-gray-100">
                  {service.icon}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-script mb-3 text-wedding-dark transition-colors duration-300 group-hover:text-wedding-purple relative">
                  {service.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wedding-purple transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-wedding-purple font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
