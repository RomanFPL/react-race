import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from '../../store/user';
import s from './style.module.css'

const UserProfile = () => {

    const getUserData = useSelector(selectUser);
    const registerDate = new Date(getUserData.createdAt * 1000).toLocaleString();
    const lastLoginDate = new Date(getUserData.lastLoginAt * 1000).toLocaleString();
    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem('idToken');
        history.replace('/');
    }

    return (
        <section className={s.sectionCenter}>
            <div className={s.userPanel}>
            <table>
                <tr>
                    <th>Data</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Created at: </td>
                    <td>{registerDate}</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{getUserData.email}</td>
                </tr>
                <tr>
                    <td>Last login at :</td>
                    <td>{lastLoginDate}</td>
                </tr>
                </table>
                <button onClick={logOut}>Log out</button>
            </div>
        </section>
    )
}

export default UserProfile;