import React from 'react';

import {LetterColumn} from "./LetterColumn";


export class TextLayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div style={{display: 'flex',  flexDirection: 'row', flexWrap: 'wrap'}} className="TextContainer">
                {this.props.letters && this.props.brightnessMatrix && this.props.brightnessMatrix.map(((brightness,index) =>  {
                    return <LetterColumn useKr={this.props.useKr} row={this.props.letters[index]} key={index} brightnessColumn={brightness} targetBrightness={this.props.targetBrightness} fontLightColor={this.props.fontLightColor} fontDarkColor={this.props.fontDarkColor}/>}))
                }
            </div>
    )

    }

}

