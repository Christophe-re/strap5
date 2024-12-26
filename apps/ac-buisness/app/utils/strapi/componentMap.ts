import * as Components from "~/components/strapiSlices";
import type { ComponentMap, ComponentName } from "./components";
import type { StrapiSlicesZoneComponentType } from "./StrapiSlicesZoneComponent";

const componentMap: ComponentMap = Object.entries(Components).reduce(
  (acc, [name, component]) => {
    const key = (name.charAt(0).toLowerCase() + name.slice(1)) as ComponentName;
    return {
      ...acc,
      [key]: component as StrapiSlicesZoneComponentType<unknown>,
    };
  },
  {} as ComponentMap
);

export default componentMap;
