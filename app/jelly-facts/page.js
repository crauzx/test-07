"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function JellyFactPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const factResponse = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Facts"
      );
      const facts = await factResponse.json();
      setData(facts);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jelly Facts</h1>

      {!data && <div className={styles.loading}>Loading facts…</div>}

      {data && data.items && data.items.length === 0 && (
        <div className={styles.empty}>No facts available.</div>
      )}

      {data && data.items && data.items.length > 0 && (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((fact) => (
                <tr key={fact.factId}>
                  <td>{fact.title}</td>
                  <td>{fact.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
