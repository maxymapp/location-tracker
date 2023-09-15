"use client";
import { useEffect, useState } from "react";
// import GoogleMapReact from "google-map-react";
// @ts-ignore
// import haversine from "haversine";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Home() {
  const [locState, setLocState] = useState(null);
  const [watchID, setWatchID] = useState(null);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  useEffect(() => {
    const id = (navigator as Navigator).geolocation.watchPosition(
      (position) => {
        // const { coordinate, routeCoordinates, distanceTravelled } = locState;//old coordinates
        const { latitude, longitude } = position.coords;

        console.log({ latitude, longitude });

        const newCoordinate = {
          latitude,
          longitude,
        };

        /*setLocState({
          latitude,
          longitude,
          // routeCoordinates: routeCoordinates.concat([newCoordinate]),
          // distanceTravelled: distanceTravelled + calcDistance(newCoordinate),
          prevLatLng: newCoordinate,
        });*/
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    setWatchID(id);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/*<GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={locState?.latitude}
          lng={locState?.longitude}
          text="My Marker"
        />
      </GoogleMapReact>*/}
    </div>
  );
}
