// studying google maps api in react from: https://developers.google.com/maps/documentation/javascript/react-map?hl=zh-tw#javascript_1
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./App.css";
import mapJson from "./map.json";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import TestLocationPanel from "./components/TestLocationPanel";
import ResultContainer from "./components/ResultContainer";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultPosition = {
  lat: 23.995619518049228,
  lng: 118.65264039938866,
};

// 控制地圖內建 UI 顯示
const customizedOptions = {
  disableDefaultUI: false,
  scaleControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${import.meta.env.VITE_MY_GOOGLE_MAPS_API_KEY}`, // 使用 .env 保存金鑰變數
  });

  // Map setting start
  const mapRef = React.useRef();
  const [map, setMap] = React.useState(null);
  const [currentPosition, setCurrentPosition] = React.useState(defaultPosition);
  const [isSearching, setIsSearching] = React.useState(false);
  const onLoad = React.useCallback((map) => {
    mapRef.current = map;
  });
  const handleMapLoad = React.useCallback((map) => {
    setMap(map);
    onLoad(map);
  }, []);
  // Map setting end

  // about smoothZoom: https://stackoverflow.com/questions/4752340/how-to-zoom-in-smoothly-on-a-marker-in-google-maps
  // function smoothZoom(map, targetZoomLevel, currentZoomLevel) {
  //   if (currentZoomLevel >= targetZoomLevel) {
  //     return;
  //   } else {
  //     let z = google.maps.event.addListener(map, "zoom_changed", function (e) {
  //       google.maps.event.removeListener(z);
  //       smoothZoom(map, targetZoomLevel, currentZoomLevel + 1);
  //     });
  //     setTimeout(function () {
  //       map.setZoom(targetZoomLevel);
  //     }, 80);
  //   }
  // }

  function smoothZoom(map, targetZoomLevel, currentZoomLevel) {
    if (targetZoomLevel <= currentZoomLevel) {
      return;
    } else {
      google.maps.event.addListenerOnce(map, "zoom_changed", function (event) {
        smoothZoom(
          map,
          targetZoomLevel,
          currentZoomLevel + (targetZoomLevel > currentZoomLevel ? 1 : -1)
        );
      });
      setTimeout(function () {
        map.setZoom(currentZoomLevel);
      }, 80);
    }
  }

  function handleCurrentLocationClick(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentPosition(userPosition);
      // map.setZoom(15);
      smoothZoom(map, 17, map.getZoom());
      map.panTo(userPosition);
    });
    setIsSearching(true);
  }

  function handleTargetLocationClick(e, identifier) {
    e.preventDefault;
    let targetPosition;

    mapJson["features"].forEach((item) => {
      if (identifier === item.properties.identifier) {
        const targetPositionCoord = {
          lat: item["geometry"]["coordinates"][0],
          lng: item["geometry"]["coordinates"][1],
        };
        targetPosition = targetPositionCoord;
      }
      setIsSearching(true);
    });

    setCurrentPosition(targetPosition);
    smoothZoom(map, 17, map.getZoom());
    map.panTo(targetPosition);
  }

  if (loadError) {
    return <div>Error Loading Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <div className="page-wrapper">
      <Header />
      {!isSearching ? (
        <SearchContainer
          handleCurrentLocationClick={handleCurrentLocationClick}
        />
      ) : (
        <ResultContainer />
      )}

      <TestLocationPanel
        handleTargetLocationClick={handleTargetLocationClick}
      />
      <section className="map-container" style={{width: isSearching && '70%', right: isSearching && '0px'}}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={7}
          center={currentPosition}
          options={customizedOptions}
          onLoad={handleMapLoad}
        >
          {/* <Marker position={currentPosition}>
              {currentPosition === defaultPosition ? null : (
                <InfoWindow
                  onCloseClick={() => {
                    console.log("window closed!");
                  }}
                >
                  <div>test</div>
                </InfoWindow>
              )}
            </Marker> */}
        </GoogleMap>
      </section>
    </div>
  );
}

export default App;
