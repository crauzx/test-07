import Link from "next/link";
import styles from './page.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href='/jelly' className={styles.link}>Jelly Store</Link>
            <Link href='/jelly-facts' className={styles.link}>Jelly Facts</Link>
        </nav>
    )
}