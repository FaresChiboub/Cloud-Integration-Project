import React from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const mapStyles = {
  height: "100%",
  width: "100%",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.006,
};

const LandingPage = () => {
  return (
    <Container>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <MapContainer>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
          />
        </MapContainer>
      </LoadScript>
    </Container>
  );
};

export default LandingPage;
