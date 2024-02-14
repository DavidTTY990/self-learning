// studying google maps api in react from: https://developers.google.com/maps/documentation/javascript/react-map?hl=zh-tw#javascript_1
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./App.css";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultPosition = {
  lat: 25.0374865,
  lng: 121.5647688,
};

const customizedOptions = {
  disableDefaultUI: false,
};



function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${import.meta.env.VITE_MY_GOOGLE_MAPS_API_KEY}`,
  });
  const mapRef = React.useRef();
  const [map, setMap] = React.useState(null);
  const [currentPosition, setCurrentPosition] = React.useState(defaultPosition);
  const onLoad = React.useCallback((map) => {
    mapRef.current = map;
  });
  const handleMapLoad = React.useCallback((map) => {
    setMap(map);
    onLoad(map);
  }, []);

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
    if(targetZoomLevel <= currentZoomLevel){
      return
    } else {
      google.maps.event.addListenerOnce(map, 'zoom_changed', function(event){
        smoothZoom(map,targetZoomLevel, currentZoomLevel + (targetZoomLevel > currentZoomLevel ? 1 : -1));
      });
      setTimeout(function() { map.setZoom(currentZoomLevel)}, 80)
    }
  }

  const handleCurrentLocationClick = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentPosition(userPosition);
      // map.setZoom(15);
      smoothZoom(map, 15, map.getZoom());
      map.panTo(userPosition);
    });
  };

  if (loadError) {
    return <div>Error Loading Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <div className="page-wrapper">
      <header className="header-wrapper">
        <div className="announcement">
          <a href="">請支持貓咖，讓貓咖一起變得更好</a>
        </div>
        <div className="main-header">
          <a href="" className="main-logo">
            貓咖 | Cat Cafe
          </a>
          <a href="" className="main-tutorial">
            第一次找貓咖？
          </a>
          <div className="menu-container">
            <button type="button" className="btn btn-dark btn-lg">
              註冊
            </button>
            <button type="button" className="btn btn-light btn-lg">
              登入
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="user-search-container">
          <div className="user-search-title-container">
            <h3>工作 + 吸貓 + 咖啡？</h3>
            <h4>快來找最適合你的貓咖！</h4>
            <div className="user-search-input-container">
              <input type="text" placeholder="輸入縣市、地區或店名" />
              <span className="material-symbols-outlined"> search </span>
            </div>
            <div className="user-search-neighborhood-container">
              <div className="user-search-neighborhood-container-text-container">
                <h4>找找附近的貓咖？</h4>
                <p>需開啟瀏覽器定位權限</p>
              </div>
              <button
                type="button"
                className="btn btn-light btn-md"
                onClick={(e) => handleCurrentLocationClick(e)}
              >
                立即搜尋
              </button>
            </div>
          </div>
        </section>
        <section className="map-container">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={7}
            center={currentPosition}
            options={customizedOptions.disableDefaultUI}
            onLoad={handleMapLoad}
          >
            <Marker position={currentPosition} />
          </GoogleMap>
        </section>
      </main>
    </div>
  );
}

export default App;