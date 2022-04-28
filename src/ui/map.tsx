import _ from "lodash";
import React from "react";

import Images from "../services/images";

class Map extends React.Component {
  static hyruleMap = _.get(Images.IMAGES, "HYRULE_MAP");

  static loruleMap = _.get(Images.IMAGES, "LORULE_MAP");

  static changeMapUp = _.get(Images.IMAGES, "CHANGE_MAP_UP");

  constructor(props: never) {
    super(props);

    this.state = {
      currentMap: this.hyruleMap,
      mapText: "Hyrule",
    }
  }

  render(): React.ReactNode {
    function changeMap(event: React.MouseEvent<HTMLDivElement>) {
      event.stopPropagation();
      event.preventDefault();

      if (currentMap === this.hyruleMap) {
        this.setState({
          currentMap: this.loruleMap,
          mapText: "Lorule",
        });
      }
      else {
        this.setState({
          currentMap: this.hyruleMap,
          mapText: "Hyrule",
        });
      }
    }

    function onChangeMapMouseOver() {
      if (mapText === "Change Map" && currentMap === this.hyruleMap) {
        this.setState({
          mapText: "Hyrule",
        });
      }
      else if (mapText === "Change Map" && currentMap === this.loruleMap) {
        this.setState({
          mapText: "Lorule",
        });
      }
      else {
        this.setState({
          mapText: "Change Map",
        });
      }
    }

    return (
      <div className="map">
        <img
          id="hyrule-map"
          src={currentMap}
          alt="Map of Hyrule"
          draggable={false}
        />
        <div id="map-extras">
          <div id="map-label">
            <img
              id="hyrule-map-tooltip"
              src={_.get(Images.IMAGES, "MAP_TOOLTIP")}
              alt="Hyrule map label"
              draggable={false}
            />
            <div id="map-text">{mapText}</div>
          </div>
          <div id="change-map"
            onClick={changeMap}
            onContextMenu={changeMap}
            onMouseOver={onChangeMapMouseOver}
            onMouseOut={onChangeMapMouseOver}
            role="button"
          >
            <img
              id="change-map-button"
              src={this.changeMapUp}
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
