import logo from "../assets/static/icons/logo.svg";
const handleClick = () => {
  document.querySelector("#menu").classList.toggle("active");
};

function Nav() {
  return (
    <nav className="page__nav">
      <a href="#">
        <img
          src={logo}
          alt="Logo"
          className="page__nav__primary-nav__item page__nav__primary-nav__item--logo"
        />
      </a>
      <button
        id="menu"
        aria-label="Menu"
        aria-controls="primary-nav"
        className="page__nav__menu"
        onClick={handleClick}
      >
        Menu
      </button>
      <ul id="primary-nav" className="page__nav__primary-nav">
        <li>
          <a
            href="#"
            className="page__nav__primary-nav__item page__nav__primary-nav__item--link"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="page__nav__primary-nav__item page__nav__primary-nav__item--link"
          >
            New
          </a>
        </li>
        <li>
          <a
            href="#"
            className="page__nav__primary-nav__item page__nav__primary-nav__item--link"
          >
            Popular
          </a>
        </li>
        <li>
          <a
            href="#"
            className="page__nav__primary-nav__item page__nav__primary-nav__item--link"
          >
            Trending
          </a>
        </li>
        <li>
          <a
            href="#"
            className="page__nav__primary-nav__item page__nav__primary-nav__item--link"
          >
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
