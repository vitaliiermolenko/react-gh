// Файл Home.tsx
import { Link } from "@remix-run/react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Перейти на сторінку "Про нас"</Link>
      <br />
      <Link to="/comments">Перейти на сторінку "З Коментами"</Link>
    </div>
  );
}

export default Home;
