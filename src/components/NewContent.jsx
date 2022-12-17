function NewContent() {
  return (
    <div className="page__main-content__new">
      <h2 className="page__main-content__new__title">New</h2>
      <ul className="page__main-content__new__articles">
        <li>
          <a href="#" className="page__main-content__new__articles__item">
            Hydrogen VS Electric Cars
          </a>
          <p>Will hydrogen fueled cars ever catch up to EVs?</p>
        </li>
        <li>
          <a href="#" className="page__main-content__new__articles__item">
            The Downsides of AI Artistry
          </a>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </li>
        <li>
          <a href="#" className="page__main-content__new__articles__item">
            Is VC Funding Drying Up?
          </a>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default NewContent;
