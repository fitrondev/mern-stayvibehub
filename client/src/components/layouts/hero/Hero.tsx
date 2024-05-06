import HeroItem from "@/components/atoms/heroItem/HeroItem";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/images/hero.jpg";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="lg:h-[460px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[130px]">
          <div className="h-full flex flex-col justify-between sm:items-center sm:justify-center lg:items-start lg:justify-between gap-5 sm:gap-8 lg:gap-0 sm:order-2 lg:order-1 ">
            <div className="space-y-6 sm:space-y-8 sm:flex sm:flex-col items-center justify-center lg:block">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl lg:leading-[65px] font-bold sm:text-center lg:text-start">
                Forget Busy Work, Start Next Vacation
              </h1>

              <p className="sm:max-w-[450px] lg:max-w-[335px] font-light text-gray-600 sm:text-center lg:text-start">
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moments.
              </p>

              <div>
                <Button size={"lg"} className="px-10">
                  Show Me Now
                </Button>
              </div>
            </div>

            <div className="inline-flex gap-6">
              <HeroItem />
            </div>
          </div>

          <div className="lg:relative sm:order-1 lg:order-2">
            <img
              src={heroImg}
              alt=""
              className="lg:absolute -left-10 sm:w-full lg:w-[520px] sm:h-[410px] object-cover rounded-2xl lg:rounded-tl-[100px] z-10"
            />

            <div className="hidden lg:block lg:absolute bottom-3 right-0 w-full h-[410px] bg-transparent border-4 -z-10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
