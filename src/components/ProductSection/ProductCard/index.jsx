
import styles from "./style.module.css"

export const ProductCard = ({title , image , price}) =>{

    const priceFormated = price.toLocaleString("en-US" , {style: "currency" , currency: "USD"})
    return(
        <div className={styles.productCard}>
        <img src ={image} alt="image product"></img>
        <h3 className="title3">{title}</h3>
        <p className="price">{priceFormated}</p>
        </div>
    )
}