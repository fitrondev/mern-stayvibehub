import CardItem from "@/components/atoms/cardItem/CardItem";
import { hotels } from "@/constants/data";

const Hotels = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div>
          <h3 className="text-2xl font-medium text-center lg:text-start">
            Hotels With Large Living Room
          </h3>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-y-8 sm:gap-8 lg:gap-0">
          {hotels.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              city={item.city}
              country={item.country}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hotels;
