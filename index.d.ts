import * as L from "leaflet";

declare module "leaflet" {
  interface MapOptions {
    smoothWheelZoom?: boolean | string;
    smoothSensitivity?: number;
  }

  interface Map {
    SmoothWheelZoom: Handler;
  }
}
