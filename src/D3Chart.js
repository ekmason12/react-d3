import React, { Component } from 'react';
import ScatterPlot from './ScatterPlot';
// for reasons why: https://stackoverflow.com/questions/40206884/create-react-app-and-d3-why-is-d3-undefined


var values = [{ price: 700, sqft: 3000, br: 3, pets: ['cats', 'dogs'] },
    { price: 445, sqft: 1700, br: 2, pets: [] },
    { price: 421, sqft: 1455, br: 2, pets: ['cats', 'dogs'] },
    { price: 411, sqft: 1314, br: 2, pets: ['dogs'] },
    { price: 275, sqft: 1200, br: 1, pets: ['cats'] },
    { price: 500, sqft: 650, br: 1, pets: [] },

];


class D3Chart extends Component {

    constructor(props) {
        super(props);
        this.state = { data: values };
    }

    render() {


        return ( 
        	< div >
            	< h1 > Zillow Home Data Interactive < /h1> 
            	< ScatterPlot data={this.state.data} /> 
            < /div>
        );
    }


}

export default D3Chart;