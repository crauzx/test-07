import styles from "./page.module.css";

export default function JellyLayout({ children }) {
    return (
        <section className={styles.layout}>
            {children}
        </section>
    )
}