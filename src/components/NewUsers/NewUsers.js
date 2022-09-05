import { useState } from 'react';
import Card from '../UI/Card';
import Warning from '../UI/Warning';
import _ from 'lodash';
import styles from './NewUsers.module.css';

const NewUsers = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [warning, setWarning] = useState(false);

    const userNameChangeHandler = ({ target }) => {
        setUserName(target.value);
    };

    const userAgeChangeHandler = ({ target }) => {
        setUserAge(target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!userName || !userAge) {
            setWarning(true);
            return;
        }

        const newUser = {
            id: _.uniqueId(),
            name: userName,
            age: +userAge,
        };

        onAddUser(newUser);

        setUserName('');
        setUserAge('');
    };

    const handleWarningClose = () => {
        setWarning(false);
    };

    return (
        <>
            {warning && <Warning text='No empty fields' onClose={handleWarningClose} />}
            <Card className={styles['add-user']}>
                <form onSubmit={submitHandler} >
                    <label forhtml='username-input'>Username</label>
                    <input
                        id='username-input'
                        className={styles['user-input']}
                        type='text'
                        value={userName}
                        onChange={userNameChangeHandler}
                    />
                    <label forhtml='username-age'>Age (Years)</label>
                    <input
                        id='username-age'
                        className={styles['user-input']}
                        type='number'
                        value={userAge}
                        onChange={userAgeChangeHandler}
                    />
                    <button className={styles['add-button']}>Add User</button>
                </form>
            </Card>
        </>
    )
};

export default NewUsers;