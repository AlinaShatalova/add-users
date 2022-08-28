import { useState } from 'react';
import Card from '../UI/Card';
import _ from 'lodash';
import styles from './NewUsers.module.css';

const NewUsers = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const userNameChangeHandler = ({ target }) => {
        setUserName(target.value);
    };

    const userAgeChangeHandler = ({ target }) => {
        setUserAge(target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newUser = {
            id: _.uniqueId(),
            name: userName,
            age: +userAge,
        };

        onAddUser(newUser);

        setUserName('');
        setUserAge('');
    };

    return (
        <Card>
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
    )
};

export default NewUsers;