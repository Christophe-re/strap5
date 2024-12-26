import type { ComponentType } from "react";
import { useMemo } from "react";

export type StrapiSlicesZoneComponentProps<T> = T;

export type StrapiSlicesZoneComponentType<T> = ComponentType<
  StrapiSlicesZoneComponentProps<T>
>;

export type StrapiSlicesZoneComponentZoneProps = {
  components: {
    [K: string]: StrapiSlicesZoneComponentType<any>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entries: any[];
  strapiComponentFolder: string;
};

export function StrapiSlicesZoneComponent({
  entries = [],
  components,
  strapiComponentFolder,
}: StrapiSlicesZoneComponentZoneProps) {
  function transformPattern(str: string) {
    // Séparer par le point et le tiret
    const parts = str.split(".");

    if (parts.length === 2 && parts[0] === strapiComponentFolder) {
      const words = parts[1].split("-");
      console.log("words", words);
      // Convertir en camelCase
      const camelCaseStr = words
        .map((word, index) => {
          if (index === 0) {
            return word.toLowerCase(); // Première partie en minuscule
          }
          return word.charAt(0).toUpperCase() + word.slice(1); // Les autres avec la 1ère majuscule
        })
        .join("");
      console.log("camelCaseStr", camelCaseStr);
      return camelCaseStr;
    }

    return str;
  }
  const renderedComponents = useMemo(
    () =>
      entries.map((entry) => {
        const type = transformPattern(entry.__component);
        const Comp = components[type];

        if (Comp) {
          return <Comp key={type + entry.id} {...entry} />;
        }

        return null;
      }),
    [entries, components]
  );
  return renderedComponents;
}
