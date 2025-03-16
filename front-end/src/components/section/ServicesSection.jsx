import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="text-wedding-purple text-3xl mb-4">{icon}</div>
      <h3 className="text-2xl font-script mb-3 text-wedding-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: '💍',
      title: 'Full Wedding Planning',
      description: 'From venue selection to day-of coordination, we handle every detail so you can focus on enjoying your special day.'
    },
    {
      icon: '🌸',
      title: 'Floral Design',
      description: 'Custom floral arrangements that capture your vision and transform your venue into a romantic paradise.'
    },
    {
      icon: '📸',
      title: 'Photography & Video',
      description: 'Expert photographers and videographers who capture every magical moment of your celebration.'
    },
    {
      icon: '🍽️',
      title: 'Catering & Cake',
      description: 'Delicious culinary experiences and stunning cake designs tailored to your taste and preferences.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
        Our Services
      </h2>
          <div className="w-16 h-1 bg-wedding-purple mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Comprehensive wedding planning services to make your special day perfect in every way.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
