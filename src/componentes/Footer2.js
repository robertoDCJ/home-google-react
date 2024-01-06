import styles from './Footer2.module.css';

function Footer2() {
    return (
        <div className={styles.Footer2}>
            <ul>
                <li>Sobre</li>
                <li>Publicidade</li>
                <li>Negócios</li>
                <li>Como funciona a Pesquisa</li>
            </ul>
            <ul>
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Configurações</li>
            </ul>
        </div>
    )
}

export default Footer2