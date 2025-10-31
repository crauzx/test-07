"use client";
import Image from "next/image";
import styles from "./jelly-list.module.css";
import { useRouter } from "next/navigation";

export default function JellyList({ items }) {
  const router = useRouter();

  const viewJellyDetail = (jellyId) => {
    router.push(`/jelly/${jellyId}`);
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Sugar Free</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items &&
          items.map((jelly) => (
            <tr
              className={styles.jellyItem}
              key={jelly.flavorName}
              onClick={() => viewJellyDetail(jelly.beanId)}
            >
              <td>
                <Image
                  src={jelly.imageUrl}
                  alt={jelly.flavorName}
                  width={50}
                  height={50}
                />
              </td>
              <td>{jelly.flavorName}</td>
              <td>{jelly.description}</td>
              <td>{jelly.sugarFree ? "Yes" : "No"}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
