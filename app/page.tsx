import Navbar from "../app/components/NavBar";
import Header from "../app/components/section/header";
import Features from "../app/components/section/features";
import Why from "../app/components/section/why";
import Pricing from "../app/components/section/pricing";
import Contact from "../app/components/section/contact";
import Testemonials from "../app/components/section/testemonials";
import Footer from "../app/components/section/footer";
import BottomFooter from "../app/components/section/BottomFooter";

export default function Home() {
  return (
    <>
      <main className=" bg-gray-100 px-5 py-4 flex flex-col gap-y-4 min-h-screen">
        <Navbar />
        <Header />
        <Features />
        <Why />
        <Pricing />
        <Contact />
        <Testemonials />
        <Footer />
        <BottomFooter />
      </main>
    </>
  );
}
