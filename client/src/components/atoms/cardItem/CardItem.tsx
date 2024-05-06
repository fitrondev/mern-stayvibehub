type CardItemProps = {
  title: string;
  city: string;
  country: string;
  img: string;
};

const CardItem = ({ title, city, country, img }: CardItemProps) => {
  return (
    <div className="relative size-full sm:w-[285px] md:w-[343px] lg:w-[260px] lg:h-[240px] flex flex-col sm:justify-between">
      <div>
        <img src={img} alt="" className="size-full rounded-2xl brightness-75" />
      </div>

      <div className="absolute left-5 bottom-5 lg:static">
        <h4 className="text-xl font-light sm:font-medium text-white lg:text-[#152C5B]">
          {title}
        </h4>
        <p className="text-sm font-light text-white lg:text-gray-400">
          {city}, {country}
        </p>
      </div>
    </div>
  );
};
export default CardItem;
