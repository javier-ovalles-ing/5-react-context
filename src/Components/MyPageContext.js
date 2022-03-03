import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";





   

const MyPageContext = ()=> {
       
    return (
        <div className="my-page"> 
        <AuthProvider>
          <LanguageProvider>
           <ThemeProvider>
               <HeaderContext/>
               <MainContext/>
               <FooterContext/>
           </ThemeProvider>  
           </LanguageProvider>
        </AuthProvider>
        </div>
    )
}

export default MyPageContext;