import React from 'react';
import {LetterCell} from "./letterCell";

export class LetterRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{width: '1000px', height:'54.16666666666667px', display: 'flex', flexDirection: 'row'}}>
                {this.props.row && this.props.row.map(((letter, index) =>  {
                    return <LetterCell col={letter} key={index} opacity={this.props.opacity} />}))
                }
            </div>
        )
    }
}
