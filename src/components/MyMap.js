import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];
const MyMap =()=> {
    return(
        <div id="myMap">
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        </div>
    )
} 

export default MyMap;


// import React, { useEffect } from 'react';
// import L from 'leaflet';

// import MyStyledHeading from '../styledComponent/header';

// function MyMap() {
//     useEffect(() => {
//         // create map
//         L.map('map', {
//             center: [49.8419, 24.0315],
//             zoom: 16,
//             layers: [
//                 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//                     attribution:
//                         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 }),
//             ]
//         });
//     }, []);

//     return (
//         <div>
//             <MyStyledHeading>Leaflet Map</MyStyledHeading>
//             <div id="map"></div>
//         </div>     
//     )
// }

// export default MyMap;