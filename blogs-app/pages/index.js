import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Center from "@/components/hero/Center";
import Last from "@/components/last/Last";
import Hero from "@/components/main/Hero";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Center />
    <Featured />
    <Last />
    <Footer />
    </>
  );
}
