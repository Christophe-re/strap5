import { SharedMediaComponent } from "../types/types.gen";
import { getGlobalConfig } from "../config";
export default function MediaComp  ( props : SharedMediaComponent) {
  const config = getGlobalConfig();
  return (
    <div>
      <span>SharedMEdia</span>
      <img src= {`${config.backendUrl}${props.file?.url}`}/>
    </div>
  );
};

