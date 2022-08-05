import { MainLayout, PageUIStatus } from "@components";
import { PageProps } from "../../types/app";
import { useContext, useRef } from "react";
import {
  GoogleMap,
  OverlayView,
  InfoWindow,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import MAPSTYLE from "../../assets/json/map-style.json";

interface PropTypes extends PageProps {
  center: any;
  zoom: number;
  onLoad: any;
  onUnmount: any;
  markerPress(e: any): any;
}

export default function MapPageUI(props: PropTypes) {
  if (props.pageLoading) {
    return <PageUIStatus error={false} />;
  }
  if (props.pageError) {
    return <PageUIStatus error={true} />;
  }

  return (
    <MainLayout>
      <div className="p-6">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "400px",
          }}
          options={{
            styles: MAPSTYLE,
            // zoomControl: false,
            controlSize: 28,
            mapTypeControl: false,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
            },
            // disableDefaultUI: true,
          }}
          // onBoundsChanged={(e) => console.log(e)}
          center={props.center}
          onLoad={props.onLoad}
          zoom={props.zoom}
          onUnmount={props.onUnmount}
        >
          <Marker
            onClick={(e) => props.markerPress(e)}
            position={props.center}
            // label="very very nnig markr"
            title="My Title"
          ></Marker>

          <OverlayView
            getPixelPositionOffset={(w, h) => console.log(w)}
            position={props.center}
            mapPaneName={OverlayView.OVERLAY_LAYER}
          >
            <div className="bg-gray-500 p-3 rounded">
              <h1>Test sfcvqewd</h1>
            </div>
          </OverlayView>
        </GoogleMap>
      </div>
    </MainLayout>
  );
}
