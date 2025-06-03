import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>
              <Link
                href="/"
                className="contrast"
                data-tooltip="That's me!"
                data-placement="right"
              >
                <div style={{ textTransform: "uppercase" }}>eiqnepm</div>
              </Link>
            </strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/names"
              className="contrast"
              data-tooltip="Generate random usernames"
              data-placement="left"
            >
              Names
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
