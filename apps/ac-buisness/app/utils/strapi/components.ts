/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentProps as ReactComponentProps } from "react";
import type * as Components from "~/components/strapiSlices";
import { StrapiSlicesZoneComponentType } from "./StrapiSlicesZoneComponent";
export type ComponentName = keyof typeof Components;

export type ComponentProps<T extends ComponentName> = ReactComponentProps<
  (typeof Components)[T]
>;

export type ComponentMap = {
  [K in ComponentName]: StrapiSlicesZoneComponentType<any>;
};
