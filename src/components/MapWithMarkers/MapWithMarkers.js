import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import "leaflet/dist/leaflet.css";
const MapWithMarkers = () => {
    const mapRef = useRef(null);
    const [userLocation, setUserLocation] = useState(null);
    const [nearbyAddresses, setNearbyAddresses] = useState([]);

    useEffect(() => {
        // Get the user's current location
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
            });
        }
    }, []);

    const handleLocateMe = () => {
        if (mapRef.current && userLocation) {
            mapRef.current.flyTo(userLocation, 15, {
                duration: 2, // Animation duration in seconds
            });
        }
    };

    useEffect(() => {
        // Fetch nearby addresses based on user location (dummy data)
        if (userLocation) {
            // Perform an API request or data processing to get nearby addresses
            const nearbyAddressesData = [
                // { id: 1, name: 'Address 1', latitude: userLocation[0] + 0.001, longitude: userLocation[1] + 0.001 },
                // { id: 2, name: 'Address 2', latitude: userLocation[0] - 0.001, longitude: userLocation[1] - 0.001 },
                {
                    "city": "Dhaka",
                    "admin": "Agency for Integrated Development",
                    "area": "Savar",
                    "address": "10 Tarapur, Savar, Dhaka.",
                    "hotline": "7743145",
                    "lat": "23.8382",
                    "lng": "90.2604",
                    "country": "Bangladesh"
                },
                {
                    "city": "Dhaka",
                    "admin": "Association for Socio Economic and Human Upliftment (ASHU)",
                    "area": "savar",
                    "address": "Moni Villa, B-2/1, East Rajshon",
                    "hotline": "01857-623324",
                    "lat": "23.9396",
                    "lng": "90.2772",
                    "country": "Bangladesh"
                },
                {
                    "city": "Dhaka",
                    "admin": "Bangladesh Youth First Concerns (BYFC)",
                    "area": "savar",
                    "address": "B-8/9 East Bhobanipur, Ghenda",
                    "hotline": "7742036,",
                    "lat": "23.8342",
                    "lng": "90.2607",
                    "country": "Bangladesh"
                },
                {
                    "city": "Dhaka",
                    "admin": "Dipti Foundation",
                    "area": "savar",
                    "address": "House-15, Block-B, Main Road, Ward-02, Khagon, Biluria Road",
                    "hotline": "01713-042814",
                    "lat": "23.8730",
                    "lng": "90.3113",
                    "country": "Bangladesh"
                },
                {
                    "city": "Dhaka",
                    "admin": "ASHOKA : Innovators for the Public",
                    "area": "Dhanmondi",
                    "address": "House-19/1, (2nd floor), R- 15(New), 28(Old), Dhanmondi R/A",
                    "hotline": "01713-042814",
                    "lat": "23.77786",
                    "lng": "90.373188",
                    "country": "Bangladesh"
                }
            ];
            setNearbyAddresses(nearbyAddressesData);
        }
    }, [userLocation]);

    const customMarkerIcon = L.icon({
        iconUrl: './New folder/image_processing20210717-12803-16w2f3x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
    });

    return (
        <MapContainer center={[23.8103, 90.4125]} zoom={13} style={{ height: '500px' }} whenCreated={mapRef}>
            <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=KeNVArqulWDriBkoWkEg" />

            {userLocation && (
                <Marker position={userLocation} icon={customMarkerIcon}>
                    <Popup>Your Location</Popup>
                </Marker>
            )}

            {nearbyAddresses.map((address) => (
                <Marker key={address.admin} position={[address.lat, address.lng]}>
                    <Popup>{address.admin} <br /> {address.hotline}</Popup>
                    {/* <Popup>{address.hotline}</Popup> */}
                </Marker>
            ))}

            <button onClick={handleLocateMe} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
                Locate Me
            </button>
        </MapContainer>
    );
};

export default MapWithMarkers;
