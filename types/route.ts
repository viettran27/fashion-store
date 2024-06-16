import { Route } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

export enum MenuType {
  DROPDOWN = "dropdown",
  SINGLE = "single",
}

export type Route = {
  href?: Url;
  categories?: string;
}

export type RouteContainer = Route & {
  type: MenuType;
  options?: {
    href: string;
    categories: string;
  }[];
}