import { BannerSection } from "../../sections/BannerSection";
import { CategoriesSection } from "../../components/CategoriesSection";
import { FormSection } from "../../components/FormSection";
import { ProductSection } from "../../components/ProductSection";
import { DefaultTemplate } from "../../components/defaulTemplate";

export const LandinPage = () =>{
    return(
        <>
        
           <DefaultTemplate>
             <BannerSection></BannerSection>
             <CategoriesSection></CategoriesSection>
             <ProductSection></ProductSection>
             <FormSection></FormSection>
           
           </DefaultTemplate>
        
        </>
    )
}



