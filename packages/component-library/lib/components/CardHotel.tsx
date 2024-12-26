import { Hotel } from "../types/types.gen";
import { getGlobalConfig } from "../config";
export default function CardHotel(hotel: Hotel) {
  const config = getGlobalConfig();
  return (
    <div className="w-60 h-60 m-10">
      <img
        className="w-60 h-40 "
        src={"http://localhost:1337/" + hotel.image[0].url}
        alt={hotel.image[0].alternativeText}
        loading="lazy"
      />

      <h1 className="text-black font-bold text-xl">{hotel.nom}</h1>
      <span
        className="text-black text-l"
        style={{
          color: hotel.gamme?.color || "#000000",
        }}
      >
        APPART'CITY {hotel.gamme?.name}{" "}
        {new Array(hotel.gamme?.stars).fill(0).map(() => "⭐")}
      </span>
    </div>
  );
}
