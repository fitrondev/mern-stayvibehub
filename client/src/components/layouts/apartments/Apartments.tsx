import CardItem from "@/components/atoms/cardItem/CardItem";
import { apartments } from "@/constants/data";

const Apartments = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div>
          <h3 className="text-2xl font-medium text-center lg:text-start">
            Apartments With Kitchen Set
          </h3>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-y-8 sm:gap-8 lg:gap-0">
          {apartments.map((item) => (
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
export default Apartments;
