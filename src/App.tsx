import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Experience />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </Layout>
  );
}

