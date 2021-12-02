import React, {FC} from 'react';
import GoogleMapReact from 'google-map-react';
import {useAppSelector} from "@/hooks";

const mapOptions = {
  keyboardShortcuts: false,
  fullscreenControl: false,
  zoomControl: false,
  clickableIcons: false,
  disableDoubleClickZoom: true
}

const MyMap: FC = () => {
  const {userPlaceLocation: defaultCenter, currentLocation: center} = useAppSelector(state => state.taxi)

  return (
    <div className="fixed inset-0">
      <GoogleMapReact
        bootstrapURLKeys={{key: String(process.env.GOOGLE_API_KEY)}}
        defaultCenter={defaultCenter}
        center={center}
        defaultZoom={15}
        options={mapOptions}
      />
    </div>
  );
};

export default MyMap;