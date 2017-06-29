import React, { Component } from 'react';
// import * as d3 from 'd3';
// for reasons why: https://stackoverflow.com/questions/40206884/create-react-app-and-d3-why-is-d3-undefined


class DataCircles extends Component {

    renderCircles(fullData, xScale, yScale) {
        return (data, index) => {
            var circleProps = {
              cx: xScale(data.price/2),
              cy: this.props.yScale((4000 - data.sqft)/(4000/400)),
              r: data.br * 10,
            };
        return <circle circleProps={circleProps} />;
      };
    };

    render() {


        return ( 
        	<g> {this.props.data.map(this.renderCircles(this.props.data,this.props.xScale, this.props.yScale))} </g>
        );
    }


}

export default DataCircles;