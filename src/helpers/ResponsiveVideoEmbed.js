/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from 'react';
import { Map } from 'google-maps-react';
export default (props) => {
  return (
    <div
      // className={className}
      style={{
        position: "relative",
        // background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <Map
        title="Embeded Video"
        loaded={'Loading...'}
        google={props.google}

        center={{
          lat: 40.854885,
          lng: -88.081807
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        // google={url}
        frameBorder="0"
      />
    </div>
  );
};
