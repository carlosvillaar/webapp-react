import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <div className="container my-5">
          <nav>
            <a href="/" className=" text-decoration-none">
              <h1 className="gradient-text">BoolReviews</h1>
            </a>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default DefaultLayout;
