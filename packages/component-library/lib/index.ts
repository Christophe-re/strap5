import "./index.css";
import Button from "./components/Button";
import Seo from "./components/Seo";
import SliderComp from "./components/Slider";
import Quote from "./components/Quote";
import RichText from "./components/RichText";
import Media from "./components/Media";
import componentMap from "./strapi/componentMap.js";
import { StrapiSlicesZoneComponent } from "./strapi/StrapiSlicesZoneComponent.js";
import CardHotel from "./components/CardHotel";
import HomeHotelHighlighting from "./components/HomeHotelHighlighting.js";
export {
  Button,
  Seo,
  SliderComp,
  Quote,
  RichText,
  Media,
  componentMap,
  StrapiSlicesZoneComponent,
  CardHotel,
  HomeHotelHighlighting,
};
export { default as tailwindConfig } from "../tailwind.config.js";
export * from "./types/types.gen.js";
export { setGlobalConfig } from "./config";
