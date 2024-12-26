import type { ComponentType } from "react";
import { useMemo } from "react";

export type StrapiSlicesZoneComponentProps<T> = T;

export type StrapiSlicesZoneComponentType<T> = ComponentType<
  StrapiSlicesZoneComponentProps<T>
>;

export type StrapiSlicesZoneComponentZoneProps = {
  components: {
    [K: string]: StrapiSlicesZoneComponentType<unknown>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entries: any[];
};

function transformPattern(str: string) {
  // Séparer par le point et le tiret
  const parts = str.split(".");

  if (parts.length === 2 && parts[0] === "slices") {
    const words = parts[1].split("-");

    // Convertir en camelCase
    const camelCaseStr = words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase(); // Première partie en minuscule
        }
        return word.charAt(0).toUpperCase() + word.slice(1); // Les autres avec la 1ère majuscule
      })
      .join("");

    return camelCaseStr;
  }

  return str;
}

export function StrapiSlicesZoneComponent({
  entries = [],
  components,
}: StrapiSlicesZoneComponentZoneProps) {
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
