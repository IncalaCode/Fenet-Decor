import AboutUsSection from '../components/section/AboutUsSection';
import ImageSection from '../components/section/ImageSection';
import Navbar from '../components/ui/Navbar';
import ContactSection from '../components/ui/Footer';

export default function Aboutuspage() {
  return (
    <>
      <Navbar />
      <ImageSection
        height="100vh"
        backgroundImage="/image/heroImage.jpg"
        overlayColor="rgba(0,0,0,0.4)"
        targetId="aboutus"  
      >
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-12">
          About Us
        </h2>
      </ImageSection>
      <AboutUsSection />
      
      <ContactSection />
    </>
  );
}