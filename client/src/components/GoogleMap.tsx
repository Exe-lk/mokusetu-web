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
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [
              {
                weight: "2.00"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#9c9c9c"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: 45
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#7b7b7b"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#46bcec"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#c8d7d4"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#070707"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          }
        ]
      });

      // Add marker
      new window.google.maps.Marker({
        position: center,
        map: newMap,
        title: "Mokusetu Office",
        icon: {
          url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#DD2136" stroke="#ffffff" stroke-width="4"/>
              <path d="M20 8C15.58 8 12 11.58 12 16C12 22 20 32 20 32C20 32 28 22 28 16C28 11.58 24.42 8 20 8ZM20 19C18.9 19 18 18.1 18 17C18 15.9 18.9 15 20 15C21.1 15 22 15.9 22 17C22 18.1 21.1 19 20 19Z" fill="#ffffff"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20)
        }
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
