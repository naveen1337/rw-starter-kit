import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  GoogleMap,
  MarkerClusterer,
  Marker,
  Polygon,
  useGoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useMapLocalState, MapContext } from "./map-ctrl";
import MapPageUI from "./map-ui";

export default function MapPageHOC() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPKEY,
  });

  const { map, setMap, mapCenter, setMapCenter, mapZoom, setMapZoom } =
    useMapLocalState();

  function onLoad(map: any) {
    setMap(map);
  }

  // console.log(mapObj);

  function markerPress() {
    map.panTo(mapCenter);
  }

  return (
    <MapPageUI
      pageLoading={!isLoaded}
      pageError={false}
      pageSpinner={false}
      center={mapCenter}
      zoom={mapZoom}
      onLoad={onLoad}
      onUnmount={undefined}
      markerPress={markerPress}
    />
  );
}
