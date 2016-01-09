import React from 'react';
import IconBase from 'react-icon-base';

export default class SvgContainer extends React.Component {
    render() {

        var size = this.props.size;
        var fill = this.props.fill;

        var viewBox = [0, 0, size, size].join(' ')

        var pathData = [
            'M', 2, 2, // Move to 2,2
            'L', 62, 2, // Draw a line to 62,2
            'L', 62, 62, // Draw a line to 62,62
            'L', 2, 62, // Draw a line to 2,62
            'L', 2, 2, // Draw a line to 2,2
        ].join(' ')

        return (
            <svg xmlns="http://www.w3.org/svg/2000"
                 viewBox={viewBox}
                 width={size}
                 height={size}
                 fill={fill}>
                <path d={pathData} />
            </svg>
        )

    }
}
