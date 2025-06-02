"use client";

import { useEffect, useState } from "react";

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
    <ul>
      {names.map((username: any) => (
        <li key={username}>{username}</li>
      ))}
    </ul>
  );
}
