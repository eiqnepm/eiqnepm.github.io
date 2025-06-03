"use client";

import { useEffect, useState } from "react";
import styles from "./names.module.css";

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

export default function Names() {
  const [names, setNames] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rich-bobcat-25.deno.dev");
      const data = await response.json();
      setNames(data);
      setLoading(false);
    })();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!names) return <p>No names</p>;

  return (
    <ul className={styles.names}>
      {names.map((username: any) => (
        <li
          key={username}
          onClick={() => {
            copy(username);
          }}
        >
          <div data-tooltip="Click to copy">{username}</div>
        </li>
      ))}
    </ul>
  );
}
