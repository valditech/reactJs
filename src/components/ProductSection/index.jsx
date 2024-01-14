import { ProductCard } from "./ProductCard";
import {products} from "../../data/products"
import styles from "./style.module.css"


export const ProductSection = () => {

  return (
    <div className="container">
      <section className={styles.ProductSection}>
        <h2 className="title2">The best product</h2>
        <ul className={styles.productList}>
       {
         products.map((product) =>{
            const {id, name, price, img} = product
        
            return(
                <li key={id}>
                    <ProductCard title={name} image={img} price={price}></ProductCard>
                </li>
            )
         })
       
       }
        </ul>
      </section>
    </div>
  );
};
