import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";

const geoUrl = 'https://cartomap.github.io/nl/wgs84/provincie_2021.topojson';

const App = () => (
    <div className="map-container">
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-5.25, -52.0, 0],
                scale: 7500
            }}
        >
            <Geographies geography={geoUrl}>
                {({geographies}) =>
                    <>
                        {geographies.map(geo => {
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="orange"
                                    stroke="#000"
                                />
                            );
                        })};
                    </>
                }
            </Geographies>
        </ComposableMap>
    </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
