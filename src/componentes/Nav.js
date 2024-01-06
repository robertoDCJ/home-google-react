import menu1 from './menu1.png';
import foto1 from './foto1.png';
import styles from './Nav.module.css';


function Nav() {
    return (
        <div className={styles.Nav}>
            <div className={styles.Divnav}>
                <ul>
                    <li>Gmail</li>
                    <li>Imagens</li>
                    <li><img className={styles.Menu} src={menu1} alt='ERROR'/></li>
                    <li><img src={foto1} alt='ERROR'/></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav