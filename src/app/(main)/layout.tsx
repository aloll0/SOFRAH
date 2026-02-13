import Header from "../../app/components/Header/Header";
import Hero from "../../app/components/Hero/Hero";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Hero />
      {children}
    </>
  );
}