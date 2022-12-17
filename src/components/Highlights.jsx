import img1 from "../assets/static/images/image-retro-pcs.jpg";
import img2 from "../assets/static/images/image-top-laptops.jpg";
import img3 from "../assets/static/images/image-gaming-growth.jpg";
function Highlights() {
  return (
    <section className="page__highlights">
      <div>
        <img
          src={img1}
          alt="A Retro-PC Art. The PC is surrounded by a Game Boy, an Arcade Joystick and cassets"
        />
        <div className="page__highlights__item">
          <p className="page__highlights__item__number">01</p>
          <h3>
            <a href="#">Reviving Retro PCs</a>
          </h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="page__highlights__item">
        <img
          src={img2}
          alt="A Laptop keyboard's keys filling the image. The keys have backlight"
        />
        <div>
          <p className="page__highlights__item__number">02</p>
          <h3>
            <a href="#">Top 10 Laptops of 2022</a>
          </h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="page__highlights__item">
        <img src={img3} alt="A left hand catching a console controller." />
        <div>
          <p className="page__highlights__item__number">03</p>
          <h3>
            <a href="#">The Growth of Gaming</a>
          </h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
