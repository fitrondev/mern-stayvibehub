import Apartments from "@/components/layouts/apartments/Apartments";
import Hero from "@/components/layouts/hero/Hero";
import Hotels from "@/components/layouts/hotels/Hotels";
import Houses from "@/components/layouts/houses/Houses";
import MostPicked from "@/components/layouts/mostpicked/MostPicked";

const Home = () => {
  return (
    <>
      <Hero />
      <MostPicked />
      <Houses />
      <Hotels />
      <Apartments />
    </>
  );
};
export default Home;
