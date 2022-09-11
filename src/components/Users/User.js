import styles from './User.module.css';

const User = ({ name, age }) => {
    return (
        <li className={styles.user}>
            <div>{name}</div>
            <div>({age} years old)</div>
        </li>
    )
};

export default User;