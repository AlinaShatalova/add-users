import ReactDOM from "react-dom";

import Card from './Card';
import Button from './Button';
import styles from './Warning.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.warning}>
            <div className={styles['warning-title']}>
                <h2>Invalid input</h2>
            </div>
            <div className={styles['warning-content']}>
                <p className={styles['warning-text']}>{props.text}</p>
                <div className={styles['warning-close']}>
                    <Button onClick={props.onClose}>Okay</Button>
                </div>
            </div>
        </Card>
    )
};

const Warning = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop 
                    onClose={props.onClose}/>,
                    document.querySelector('#backdrop')
                )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    text={props.text}
                    onClose={props.onClose}
                />,
                document.querySelector('#modal')
            )}
        </>
    )
};

export default Warning;