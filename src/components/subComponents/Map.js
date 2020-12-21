import { useState, useCallback } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 33.83314762860516,
    lng: -118.16037258895552
};

export default function Map() {
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCg69tinSkMw1mVxl9yqEqanMuEjgEutLI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}
