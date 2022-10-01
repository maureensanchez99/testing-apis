import './App.css';

import { useEffect, useState, useRef } from "react";
import axios from "axios";

// TomTom SDK
import * as tt from "@tomtom-international/web-sdk-maps";
// styles
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function App() {
  const [map, setMap] = useState();
  const mapContainer = useRef();
  const LSUSTUDENTUNION = { lon: -91.168953, lat: 30.403860 };
  
  useEffect(() => {
    let map = tt.map({
      key: "qgsuBcvctE2xWrChbABEv2mcoxa21qoV",
      container: mapContainer.current.id,
      center: LSUSTUDENTUNION,
      zoom: 10,
      language: "en-GB",
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());

    setMap(map);
    return () => {
      map.remove();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <nav className="nav">
        <h1>Tiger Trax</h1>
      </nav>
      <div ref={mapContainer} className="map" id="map" />
    </div>
  );
}

export default App;