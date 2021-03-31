import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

class Chart extends React.Component {
  render() {
    const {
      props: { chartData },
    } = this.props;

    return (
      <div>
        <Line
          data={chartData}
          options={{
            title: {
              display: true,
              text: "",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

Chart.defaultProps = {
  props: {
    chartData: {},
  },
};

Chart.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Chart;
