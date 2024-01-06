import checkup from './safe1.png';
import styles from './Checkup.module.css';

function Checkup() {
    return (
        <div className={styles.Checkup}>
            <img src={checkup} alt="ERROR"/>
            <p>Faça o Check-up de privacidade</p>
        </div>
    )
}

export default Checkup