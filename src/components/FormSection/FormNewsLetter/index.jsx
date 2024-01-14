import styles from "./style.module.css"

export const FormNewsLetter = () =>{
    return(
        <form className={`formulary ${styles.form}`}>
            <input type="email" required placeholder="E-mail"></input>
            <button className="btn" type="submit">please Sign in</button>
        </form>
    )
}