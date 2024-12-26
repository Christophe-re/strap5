import {
  Hotel,
  SharedHomeHotelHighlightingComponent,
  SharedPushHotelByGammeComponent,
} from "../types/types.gen";
import { getGlobalConfig } from "../config";
import CardHotel from "./CardHotel";
import { useState } from "react";
export default function HomeHotelHighlighting(
  props: SharedHomeHotelHighlightingComponent
) {
  const config = getGlobalConfig();
  const [active, setActive] = useState<string>(props.pushHotelByGamme[0].title);
  return (
    <div className="w-full relative">
      <span></span>
      <div className="flex flex-row justify-center">
        {props.pushHotelByGamme?.map(
          (push: SharedPushHotelByGammeComponent) => (
            <span
              onClick={() => setActive(push.title as string)}
              style={{
                color: push?.color || "#000000",
              }}
              className={
                active === push.title
                  ? "p-1 cursor-pointer border-b-2 "
                  : "p-1 cursor-pointer"
              }
            >
              {push.title}
            </span>
          )
        )}
      </div>
      {props.pushHotelByGamme?.map((push: SharedPushHotelByGammeComponent) => (
        <div className="flex flex-row">
          <div className={active === push.title ? "flex flex-row" : "hidden"}>
            {(push.pushHotel?.hotels as Hotel[])?.map((hotel: Hotel) => (
              <span className="text-black">
                <CardHotel {...hotel} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
