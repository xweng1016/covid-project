import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, Layer, Source } from "react-map-gl";
let Twp = require("terraformer-wkt-parser");
let AreaData = require("./areadata.json");

function Map() {
    const [mapView, setMapView] = useState({
        latitude: 43.654118,
        longitude: -79.383452,
        width: "50vw",
        height: "50vh",
        zoom: 9.8
    });

    const [community, setCommunity] = useState(null);
    console.log(Twp.parse(AreaData[0].geometry).coordinates[0][0][0]);
    return (<div>
        <h2>COVID-19 Active Case Map</h2>
        <ReactMapGL {...mapView}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={mapView => {
                setMapView(mapView);
            }}
            mapStyle="mapbox://styles/hermanluk/ckc4307z70ape1ip73hd7j9rt"
        >

            {AreaData.map((area, index) =>
                <div
                    key={index}
                    onClick={e => {
                        e.preventDefault();
                        setCommunity(area);
                    }}
                >

                    <Source
                        id={area.area_s_cd.toString()}
                        type="geojson"
                        data={Twp.parse(area.geometry)}
                    />

                    {area["Rate per 100,000 people"] < 200 &&
                        <Layer
                            id={area.area_s_cd + "LAYER"}
                            type="fill"
                            source={area.area_s_cd.toString()}
                            paint={
                                {
                                    'fill-color': "#F08080",
                                    "fill-opacity": 0.5
                                }
                            }

                        />
                    }

                    {area["Rate per 100,000 people"] >= 200 && area["Rate per 100,000 people"] < 600 &&
                        <Layer
                            id={area.area_s_cd + "LAYER"}
                            type="fill"
                            source={area.area_s_cd.toString()}
                            source-layer=""
                            paint={
                                {
                                    'fill-color': "#951B02",
                                    "fill-opacity": 0.5
                                }
                            }
                        />
                    }

                    {area["Rate per 100,000 people"] >= 600 &&
                        <Layer
                            id={area.area_s_cd + "LAYER"}
                            type="fill"
                            source={area.area_s_cd.toString()}
                            paint={
                                {
                                    'fill-color': "#3B0B01",
                                    "fill-opacity": 0.6
                                }

                            }

                        />
                    }

                    <Marker
                        key={area.area_s_cd}
                        latitude={Twp.parse(area.geometry).coordinates[0][0][1]}
                        longitude={Twp.parse(area.geometry).coordinates[0][0][0]}
                    >
                        <button class="marker-btn" onClick={e => {
                            e.preventDefault();
                            setCommunity(area);
                        }}>
                            <img src="/locator.svg" alt="Community Locator" />
                        </button>
                    </Marker>
                </div>
            )}


            {community ? (
                <Popup
                    latitude={Twp.parse(community.geometry).coordinates[0][0][1]}
                    longitude={Twp.parse(community.geometry).coordinates[0][0][0]}
                    onClose={
                        () => {
                            setCommunity(null);
                        }
                    }>
                    <div style={{ color: 'black' }}>
                        <h2 style={{ fontSize: 15, fontWeight: "bold" }}>{community["Neighbourhood Name"]}</h2>
                        <p style={{ fontSize: 10 }}>Rate per 100,000 people: {community["Rate per 100,000 people"]}</p>
                        <p style={{ fontSize: 10 }}>Case Count: {community["Case Count"]}</p>
                    </div>
                </Popup>) : null}

        </ReactMapGL>
    </div>)
}

export default Map;

/*  <Marker
                        key={area.area_s_cd}
                        latitude={Twp.parse(area.geometry).coordinates[0][1]}
                        longitude={Twp.parse(area.geometry).coordinates[0][0]}
                    >
                        <button class="marker-btn" onClick={e => {
                            e.preventDefault();
                            setCommunity(true);
                        }}>
                            <img src="/locator.svg" alt="Community Locator" />
                        </button>
                    </Marker>

        <Source
            id="Danforth"
            type="geojson"
            data={p}
        />


        <Layer
            id="DanforthLY"
            type="fill"
            source="Danforth"
            paint={
                polygonPaint
            }
        />*/