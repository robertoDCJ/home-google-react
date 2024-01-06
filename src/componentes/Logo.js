import styles from './Logo.module.css';
import logo from './logo1.png';

function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="ERROR"/>
        </div>
    )
}

export default Logo