import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapVisualization.css';

const MapVisualization = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, latitude: 37.7749, longitude: -122.4194, name: 'San Francisco' },
    { id: 2, latitude: 34.0522, longitude: -118.2437, name: 'Los Angeles' }
  ];

  return (
    <div id="mapViz">
      <h3>Geographical Data Visualization</h3>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedLocation(location);
              }}
            >
              <img src="/marker-icon.png" alt="Marker" />
            </button>
          </Marker>
        ))}

        {selectedLocation && (
          <Popup
            latitude={selectedLocation.latitude}
            longitude={selectedLocation.longitude}
            onClose={() => setSelectedLocation(null)}
          >
            <div>
              <h4>{selectedLocation.name}</h4>
              <p>Coordinates: {selectedLocation.latitude}, {selectedLocation.longitude}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapVisualization;
