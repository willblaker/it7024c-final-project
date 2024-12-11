// components/WebMapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { TeamMember } from '@/app/types/team';
import L from 'leaflet';

interface WebMapComponentProps {
  teamData: TeamMember[];
}

// Fix for default marker icons
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Define the world's geographical bounds
const BOUNDS: L.LatLngBoundsExpression = [
  [-90, -180], // Southwest coordinates
  [90, 180]    // Northeast coordinates
];

export default function WebMapComponent({ teamData }: WebMapComponentProps) {
  const center = teamData.reduce(
    (acc, member) => {
      return {
        lat: acc.lat + member.hometown.lat / teamData.length,
        lng: acc.lng + member.hometown.lng / teamData.length,
      };
    },
    { lat: 0, lng: 0 }
  );

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={4}
      style={{ height: '100%', width: '100%' }}
      maxBounds={BOUNDS}
      maxBoundsViscosity={1.0}
      minZoom={2}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
        bounds={BOUNDS}
      />
      {teamData.map((member) => (
        <Marker
          key={member.id}
          position={[member.hometown.lat, member.hometown.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <div>
              <h3>{member.name}</h3>
              <p>From: {member.hometown.name}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}