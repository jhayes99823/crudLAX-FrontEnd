import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import UserTypeModal from '../Modal/modal.component';

import styles from './styles.css';

export default function Login() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Button>Log In</Button>
            <div className="divider one-line line"><span>or</span></div>
            <Button onClick={() => setShow(true)}>Sign Up</Button>
            <UserTypeModal show={show} onHide={() => setShow(false)} />
        </div>
    )
}