import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className='bg-gray-900 text-gray-100'>
      <Toaster richColors />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}