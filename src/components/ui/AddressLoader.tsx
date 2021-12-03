import React from 'react';
import ContentLoader from "react-content-loader";

const AddressLoader = () => {
  return (
    <div className="overflow-hidden">
      <ContentLoader
        speed={2}
        width='580'
        height='170'
        viewBox="0 0 630 170"
        backgroundColor="#f7f7f7"
        foregroundColor="#ecebeb"
      >
        <rect x="5" y="5" rx="2" ry="2" width="630" height="30"/>
        <rect x="5" y="45" rx="2" ry="2" width="630" height="30"/>
        <rect x="5" y="90" rx="2" ry="2" width="630" height="30"/>
        <rect x="5" y="135" rx="2" ry="2" width="630" height="30"/>
      </ContentLoader>
    </div>
  );
};

export default AddressLoader;