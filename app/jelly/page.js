import JellyList from "./jelly-list";
import styles from "./page.module.css";

export default async function Home() {
  const dataResp = await fetch('https://jellybellywikiapi.onrender.com/api/Beans')
  const data = await dataResp.json()

  return (
    <div>
      <p className={styles.description}>
        Explore our wide variety of delicious jellies!
      </p>
      <JellyList items={data.items} />
    </div>
  );
}
