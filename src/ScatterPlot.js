import React, { Component } from 'react';
import DataCircles from './DataCircles'
import * as d3 from 'd3';

// for reasons why: https://stackoverflow.com/questions/40206884/create-react-app-and-d3-why-is-d3-undefined


var width = 400;
var height = 400;

var xScale = d3.scaleLinear()
    .domain([0, width*2])
    .range([0, width]);

var yScale = d3.scaleLinear()
.range([height,0]);
//.domain([0,height]);

yScale.domain([0, 4000]); //d3.max(values, function(d) { return d.time * 2; })]);


class ScatterPlot extends Component {

    render() {
        return ( 
        	<svg width="900" height="900">
                <DataCircles data={this.props.data} xscale={xScale} yscale={yScale} />
            </svg>
        );
    }


}

export default ScatterPlot;