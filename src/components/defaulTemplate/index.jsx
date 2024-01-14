import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({children}) =>{
    return(
        <>
        <Header></Header>

        <main>
            {children}
        </main>

        <Footer></Footer>
        </>
    )
}