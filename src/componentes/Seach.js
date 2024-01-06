import styles from './Seach.module.css';
import lupa from './lupa1.png';
import teclado from './teclado1.png';
import microfone from './microfone1.png';

function Seach() {
    return (
        <div className={styles.Seach}>
            <img className={styles.Lupa} src={lupa} alt="ERROR"/>
            <input type="text"/>
            <img src={teclado} alt="ERROR"/>
            <img src={microfone} alt="ERROR"/>
        </div>
    )
}

export default Seach