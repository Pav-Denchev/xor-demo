import React from 'react';
import {LetterCell} from "./letterCell";


export class LetterColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div style={{width: '41.666666666667', height:'1300px', display: 'flex', flexDirection: 'column'}}>
                {this.props.brightnessColumn && this.props.brightnessColumn.map(((brightness,index) =>  {
                    return <LetterCell useKr={this.props.useKr} col={this.props.row[index]} key={index} brightness={brightness} targetBrightness={this.props.targetBrightness} lightColor={this.props.fontLightColor} darkColor={this.props.fontDarkColor}/>}))
                }
            </div>

    )

    }

}

