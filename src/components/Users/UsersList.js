import User from './User';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
    return (
        <Card className={styles.users}>
            <ul className={styles['users-list']}>
                {users.map((user) => (
                    <User key={user.id} name={user.name} age={user.age} />
                ))}
            </ul>
        </Card>
    )
};

export default UsersList;