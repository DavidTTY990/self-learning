// studying google maps api in react from: https://developers.google.com/maps/documentation/javascript/react-map?hl=zh-tw#javascript_1

import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";  // Bootstrap Bundle JS
import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useState, useRef } from "react";
import "./App.css";

const render = (status) => {
  return <h1>{status}</h1>;
}

function App() {
  // const Map:React.FC<{}> = () => {}
  const Map = () => {}

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();


  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);


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
              <button type="button" className="btn btn-light btn-md">
                立即搜尋
              </button>
            </div>
          </div>
        </section>
        <section className="map-container">
          <Wrapper
            apiKey={import.meta.env.MY_GOOGLE_MAPS_API_KEY}
            render={render}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
