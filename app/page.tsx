import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PenginapanSection from "@/components/PenginapanSection";
import CafeSection from "@/components/CafeSection";
import LocationSection from "@/components/LocationSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-orange-200 selection:text-orange-950">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Section Penginapan & Fasilitas Kamar */}
        <PenginapanSection />

        {/* Section Warung Mie Bumie Ema */}
        <CafeSection />

        {/* Section Lokasi, Jam Buka & Google Maps */}
        <LocationSection />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
