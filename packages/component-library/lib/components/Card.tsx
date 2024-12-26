import { SharedBannerComponent } from "../types/types.gen";
import { getGlobalConfig } from "../config";
export default function Card(props: SharedBannerComponent) {
  const config = getGlobalConfig();
  return (
    <div className="w-full relative">
      <img className=" " src={`${config.backendUrl}${props.ImgBanner?.url}`} />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 text-2xl font-bold ">
        {props.TitleBaner}
      </span>
    </div>
  );
}
