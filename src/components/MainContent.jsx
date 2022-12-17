import bigImg from "../assets/static/images/image-web-3-desktop.jpg";
import smallImage from "../assets/static/images/image-web-3-mobile.jpg";
import NewContent from "./NewContent";
function MainContent() {
  return (
    <section className="page__main-content">
      <picture className="page__main-content__img">
        <source srcSet={bigImg} media="(min-width: 800px)" type="image/png" />
        <img
          className="page__main-content__img"
          src={smallImage}
          alt="Forms and figures all around stacking on top of each other"
        />
      </picture>
      <h1 className="page__main-content__title">
        The Bright Future of Web 3.0?
      </h1>
      <div className="page__main-content__intro-container">
        <p className="page__main-content__intro-container__text">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a href="#" className="page__main-content__intro-container__cta">
          read more
        </a>
      </div>
      <NewContent />
    </section>
  );
}

export default MainContent;
