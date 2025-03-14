import styles from '../../../styles/main.module.scss'

export default function Areas() {
    return (
        <div className={styles.areasContainer}>
        <div className={styles.areasContent}>
            <h1>Atendimentos oferecidos</h1>
            <div className={styles.cardsContainer}>
                <div className={styles.cardBox}>
                    <div className={styles.cardTitle}>
                        <h4>Área 1</h4>
                    </div>
                    <div className={styles.cardText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac condimentum nibh. Integer efficitur feugiat erat, et bla</p>
                    </div>
                </div>
                <div className={styles.cardBox}>
                    <div className={styles.cardTitle}>
                        <h4>Área 2</h4>
                    </div>
                    <div className={styles.cardText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac condimentum nibh. Integer efficitur feugiat erat, et bla</p>
                    </div>
                </div>
                <div className={styles.cardBox}>
                    <div className={styles.cardTitle}>
                        <h4>Área 3</h4>
                    </div>
                    <div className={styles.cardText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac condimentum nibh. Integer efficitur feugiat erat, et bla</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
} 