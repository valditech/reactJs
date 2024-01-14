
import styles from "./style.module.css"
export const BannerSection = () => {
  return (
    <div className="container">
      <section className={styles.flexbox}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXo5nsgr__DXtbRg0-jCEC8slThOWYn30VQ&usqp=CAU"
          alt="image of the banner"
        ></img>

        <div>
          <h1 className="title1">Fashion Store</h1>
          <p className="paragraph">We have the best store of the world</p>
          <a href="#" className="btn">
            Buy a product
          </a>
        </div>
      </section>
    </div>
  );
};
