"use client";
import Image from "next/image";
import styles from "./jelly-detail.module.css";
import { useRouter } from "next/navigation";

export default function JellyDetail({ jelly }) {
  const router = useRouter();
  const goBack = () => {
    router.push("/jelly");
  };
  return (
    <div>
      <button className={styles.button} onClick={() => goBack()}>
        Back to jelly list
      </button>
      <div className={styles.imageContainer}>
        <Image
          src={jelly.imageUrl}
          alt={jelly.flavorName}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>{jelly.flavorName}</h1>
      <p className={styles.description}>{jelly.description}</p>
      <div className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>Ingredients</h2>
        <div className={styles.ingredientsList}>
          {jelly.ingredients.map((ingredient) => (
            <div key={ingredient} className={styles.ingredient}>
              {ingredient}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dietaryInfo}>
        <div className={styles.dietaryItem}>
          <span className={styles.label}>Sugar Free:</span>
          <span
            className={`${styles.value} ${
              jelly.sugarFree ? styles.yes : styles.no
            }`}
          >
            {jelly.sugarFree ? "Yes" : "No"}
          </span>
        </div>
        <div className={styles.dietaryItem}>
          <span className={styles.label}>Gluten Free:</span>
          <span
            className={`${styles.value} ${
              jelly.glutenFree ? styles.yes : styles.no
            }`}
          >
            {jelly.glutenFree ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
}
