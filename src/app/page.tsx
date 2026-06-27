import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { NewArrivals } from "@/components/landing/collections";
import { About } from "@/components/landing/about";
import { Features } from "@/components/landing/features";
import { Newsletter } from "@/components/landing/newsletter";
import { Instagram } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <NewArrivals />
        <About />
        <Features />
        <Newsletter />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
