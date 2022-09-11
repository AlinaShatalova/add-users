import { useState } from 'react';
import Card from '../UI/Card';
import Warning from '../UI/Warning';
import _ from 'lodash';
import styles from './NewUsers.module.css';

const NewUsers = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    // const [warning, setWarning] = useState(false);
    const [error, setError] = useState('');

    const userNameChangeHandler = ({ target }) => {
        setUserName(target.value);
    };

    const userAgeChangeHandler = ({ target }) => {
        setUserAge(target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!userName.trim() || !userAge.trim()) {
            // setWarning(true);
            setError('Please enter a valid name and age (non-empty values)');
            return;
        }

        if (+userAge < 0) {
            // setWarning(true);
            setError('Please enter a valid age (> 0)');
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
        setError(null);
    };

    return (
        <>
            {error && <Warning
                text={error}
                onClose={handleWarningClose}
            />}
            <Card className={styles['add-user']}>
                <form onSubmit={submitHandler} >
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        className={styles['user-input']}
                        type='text'
                        value={userName}
                        onChange={userNameChangeHandler}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
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