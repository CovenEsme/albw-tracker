import _ from "lodash";
import React from "react";

interface TableInterface {
  elements:   JSX.Element[],
  numColumns: number,
}

class Table extends React.PureComponent<TableInterface> {
  renderRow(rowElements: JSX.Element[]): JSX.Element[] {
    return _.map(rowElements, (element, index) => {
      return (
        <td key={index}>{element}</td>
      );
    });
  }

  render(): JSX.Element {
    const {
      elements,
      numColumns,
    } = this.props;

    const rows = _.map(
      _.chunk(elements, numColumns),
      (rowElements, index) => (
        <tr key={index}>{this.renderRow(rowElements)}</tr>
      ),
    );

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Table;
