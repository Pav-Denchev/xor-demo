import React from 'react';


export class LetterCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    getRandomLetter = () => {
        return String.fromCharCode(Math.floor(Math.random()*26)+65);
    };

    getOpacity = () => {
        if (this.props.useKr) {
            let cellBrightness = this.props.brightness;
            let targetBrightness = this.props.targetBrightness;
            /*console.log(cellBrightness);
            console.log(targetBrightness);
            console.log((targetBrightness-cellBrightness)/(this.getBrightness()-cellBrightness));*/
            let opacity = (targetBrightness-cellBrightness)/(this.getBrightness()-cellBrightness);
            if (opacity < 0) return 0;
            if (opacity > 1) return 1;
            if (!opacity) return 0;
            return opacity;
        } else {
            return 1;
        }
    };

    getBrightness = () => {
        let cellBrightness = this.props.brightness;
        let targetBrightness = this.props.targetBrightness;
        if (cellBrightness < targetBrightness) {
            if (this.props.lightColor.rgb) return 0.3*this.props.lightColor.rgb.r+0.587*this.props.lightColor.rgb.g+0.113*this.props.lightColor.rgb.b;
            return 255;
        }
        if (this.props.darkColor.rgb) return 0.3*this.props.darkColor.rgb.r+0.587*this.props.darkColor.rgb.g+0.113*this.props.darkColor.rgb.b;
        return 0;
    };

    getColor = () => {
        if (this.props.useKr) {
            let cellBrightness = this.props.brightness;
            let targetBrightness = this.props.targetBrightness;
    
            if (cellBrightness < targetBrightness) return this.props.lightColor.hex;
            return this.props.darkColor.hex;
        } else {
            return '#000000'
        }

    };

    render() {
        return (
            <div style={{width: '20px', height:'26px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{opacity: this.getOpacity(), color: this.getColor()}}>{this.props.col}</div>
            </div>

    )

    }

}


