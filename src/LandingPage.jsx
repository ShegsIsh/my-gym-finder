import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  // Replace with your actual Google Maps API key
  const apiKey = 'YOUR_API_KEY';

  const mapOptions = {
    zoom: 12,
    center: { lat: 40.7128, lng: -74.0059 }, // Center coordinates (adjust if needed)
  };

  return (
    <div className="landing-page">
      <h1>Find Your Perfect Gym</h1>
      <p>Search for gyms near you and start your fitness journey today!</p>

      {/* Google Maps component */}
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLMaps={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,drawing,places`}
          defaultOptions={mapOptions}
          yesIWantToUseGoogleMapApi={true} // Required for Google Maps API usage
        >
          {/* Add markers or custom elements here if needed */}
        </GoogleMapReact>
      </div>

      <button>Search for Gyms</button>
    </div>
  );
};

export default LandingPage;
