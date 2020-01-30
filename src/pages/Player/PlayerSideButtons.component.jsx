import React from 'react';
import styles from './styles.css';

export default class PlayerSideButtons extends React.Component {
    render() {
        return (
            <div class="btn-group">
                    <button>Reset Form</button>
                    <button>View Your Statiscs</button>
                    <button>View Team Stats</button>
            </div>

        )
    }
}