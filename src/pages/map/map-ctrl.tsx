import React, { useState } from "react";

export const MapContext = React.createContext<any>(null);

export function useMapLocalState() {
  const [map, setMap] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState({
    lat: 34.3675675365613,
    lng: -89.51555468501157,
  });
  const [mapZoom, setMapZoom] = useState(11);
  return {
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
    map,
    setMap,
  };
}
