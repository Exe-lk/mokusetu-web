"use client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className?: string;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#a0d8ef"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#333333"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#666666"
              }
            ]
          }
        ]
      });

      // Add marker
      new window.google.maps.Marker({
        position: center,
        map: newMap,
        title: "Mokusetu Office"
      });

      setMap(newMap);
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} className={className} />;
};

const render = (status: Status): React.ReactElement => {
  switch (status) {
    case Status.LOADING:
      return (
        <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-muted">Loading map...</p>
          </div>
        </div>
      );
    case Status.FAILURE:
      return (
        <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-muted">Failed to load map</p>
          </div>
        </div>
      );
    default:
      return <div />;
  }
};

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = "w-full h-96 rounded-xl" }: GoogleMapProps) {
  const apiKey = "AIzaSyAHH_NldhXDmiISsMYG7tHpoKJx5r16b7E";
  
  if (!apiKey) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-muted">Google Maps API key not configured</p>
        </div>
      </div>
    );
  }

  const center: google.maps.LatLngLiteral = {
    lat: 35.4442, // Latitude for 6-chōme-50 Honchō, Naka Ward, Yokohama
    lng: 139.6380  // Longitude for 6-chōme-50 Honchō, Naka Ward, Yokohama
  };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MapComponent center={center} zoom={16} className={className} />
    </Wrapper>
  );
}
