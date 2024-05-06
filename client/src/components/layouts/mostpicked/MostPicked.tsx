import { mostPicked } from "@/constants/data";

const MostPicked = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div>
          <h3 className="text-2xl font-medium ">Most Picked</h3>
        </div>

        <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {mostPicked.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="relative size-full sm: lg:col-span-4 rounded-2xl">
              <img
                src={item.image}
                alt=""
                className="size-full object-cover rounded-2xl brightness-75"
              />

              <div className="absolute left-5 bottom-5 text-white font-light">
                <h4 className="text-xl">{item.title}</h4>
                <p className="text-sm">
                  {item.city}, {item.country}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-[180px] h-[40px] bg-primary text-white rounded-tr-lg rounded-bl-lg flex items-center justify-center font-medium">
                <p>
                  ${item.price} <span className="font-light">per night</span>
                </p>
              </div>
            </div>
          ))}

          <div className="lg:col-span-8 flex flex-col lg:flex-row lg:flex-wrap gap-8">
            {mostPicked.slice(1).map((item) => (
              <div
                key={item.id}
                className="relative size-full lg:w-[348px] lg:h-[215px] rounded-2xl">
                <img
                  src={item.image}
                  alt=""
                  className="size-full object-cover rounded-2xl brightness-75"
                />

                <div className="absolute left-5 bottom-5 text-white font-light">
                  <h4 className="text-xl">{item.title}</h4>
                  <p className="text-sm">
                    {item.city}, {item.country}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-[180px] h-[40px] bg-primary text-white rounded-tr-lg rounded-bl-lg flex items-center justify-center font-medium">
                  <p>
                    ${item.price} <span className="font-light">per night</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MostPicked;
