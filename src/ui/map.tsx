import _ from "lodash";
import React from "react";

import Images from "../services/images";

class Map extends React.Component {
  render(): React.ReactNode {
    const hyruleMap = _.get(Images.IMAGES, "HYRULE_MAP");
    // const loruleMap = _.get(Images.IMAGES, "LORULE_MAP");

    const changeMapUp = _.get(Images.IMAGES, "CHANGE_MAP_UP");

    const mapText = "Hyrule";

    return (
      <div className="map">
        <img
          id="hyrule-map"
          src={hyruleMap}
          alt="Map of Hyrule"
          draggable={false}
        />
        <div id="map-extras">
          <div id="map-label">
            <img
              id="hyrule-map-tooltip"
              src={_.get(Images.IMAGES, "MAP_TOOLTIP")}
              alt="Map label"
              draggable={false}
            />
            <div id="map-text">{mapText}</div>
          </div>
          <div id="change-map">
            <img
              id="change-map-button"
              src={changeMapUp}
              alt="Change map button"
              draggable={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
