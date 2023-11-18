import styles from "@/styles/Home.module.css"

export default function Card() {
    return(
        <div className={styles.Card}>
            <header className={styles.Cardtitle}>Titulo</header>
            <main className={styles.Cardcontent}>
                <div className={styles.Cardcategory}>
                    <section>
                        <h1>Categoria</h1>
                        <ul>
                            <li>texto</li>
                            <li>texto</li>
                            <li>texto</li>
                        </ul>
                    </section>

                </div>
            </main>
        </div>
    );
}