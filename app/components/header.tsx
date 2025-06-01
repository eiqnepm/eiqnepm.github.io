import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong style={{ textTransform: "uppercase" }}>
              <Link href="/" className="contrast">
                eiqnepm
              </Link>
            </strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/names" className="contrast">
              Names
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
