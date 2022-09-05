import Card from './Card';
import Button from './Button';
import styles from './Warning.module.css';

const Warning = (props) => {
    const handleClose = () => {
        props.onClose();
    };

    return (
        <>
            <div className={styles.backdrop} onClick={handleClose}></div>
            <Card className={styles.warning}>
                <div className={styles['warning-title']}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles['warning-content']}>
                    <p className={styles['warning-text']}>{props.text}</p>
                    <div className={styles['warning-close']}>
                        <Button onClick={handleClose}>Okay</Button>
                    </div>
                </div>
            </Card>
        </>
    )
};

export default Warning;