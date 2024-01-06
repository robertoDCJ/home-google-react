import styles from './Button.module.css';

function Button(par) {
    const {parametro} = par;

    return (
        <div className={styles.Button}>
            <button>{parametro}</button>
        </div>
    )
}

export default Button