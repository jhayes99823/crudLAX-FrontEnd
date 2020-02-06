import React from 'react';

import styles from './styles.css';

export default class LabelPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            'backgroundColor': this.props.bcolor,
            'left': this.props.leftperc,
            'top': this.props.topperc,
            'padding': this.props.padding
        }

        return (
            <div className="label-border" style={styles}>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}