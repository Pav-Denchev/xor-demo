import React from 'react';

export class LetterCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{ width: '41.66666666666667px', height: '54.16666666666667px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ opacity: this.props.opacity, fontSize: '40px' }}>{this.props.col}</div>
            </div>

        )
    }
}
