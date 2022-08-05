import { GoogleMap } from "@react-google-maps/api";

```ts
const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey: "YOUR_API_KEY",
});
```

It will load the Google Map script

### Props

options

---

<Marker>

### Props

1. position => Lat lng Coords
2. title => string
3. options =>

---

<InfoWindow>

      <InfoWindow position={props.center}>
            <div>
              <p>InfoWindow</p>
            </div>
          </InfoWindow>
