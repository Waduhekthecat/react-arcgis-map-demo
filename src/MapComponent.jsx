import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export default function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      basemap: "streets-vector"
    });

    const view = new MapView({
      container: mapRef.current,
      map,
      zoom: 4,
      center: [-98, 39]
    });

    return () => view.destroy();
  }, []);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
}