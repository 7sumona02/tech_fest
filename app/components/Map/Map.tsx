'use client';

import React, { createContext } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

interface MapProps {
  center: [number, number];
  zoom: number;
  scrollWheelZoom: boolean;
}

const MapContext = createContext<MapProps>({});

const Map: React.FC<MapProps> = ({ center, zoom, scrollWheelZoom }) => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center pt-14'>
        <h1 className='text-4xl font-bold text-center text-zinc-200 -translate-y-20'>Venue</h1>
        <div className='-translate-y-[80px]'>
            <div className='w-36 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-36 h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <MapContext.Provider value={{ center, zoom, scrollWheelZoom }} className="text-white">
      <div className="h-[60vh] w-[25vw]">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={scrollWheelZoom}
          className="h-full w-full rounded"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </MapContext.Provider>
    </div>
  );
};

export default Map;