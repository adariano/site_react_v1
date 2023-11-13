import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}> 
            <ul className={styles.ul}>
                <li className={styles.li}>teste</li>
                <li className={styles.li}>teste</li>
                <li className={styles.li}>teste</li>
            </ul >
            <ul className={styles.ul}>
                <li className={styles.li}>teste</li>
                <li className={styles.li}>teste</li>
            </ul>
        </nav>
    )
}

// os class names com {chaves} é um jeito de exportar estilos css para comps em react