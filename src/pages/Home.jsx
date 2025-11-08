import Brandslogo from "../components/Brandslogo";
import Header from "../components/Header";
import Mainsec from "../components/mainsec";
import Category from "../components/Category";
import Benar from "../components/Benar";
import Genderpro from "../components/Genderpro";
import Allcollection from "../components/Allcollection";
import Review from '../components/Review';
import Footer from "../components/Footer";
import { Route, Routes} from "react-router-dom"
import Mancoll from "../components/Mancoll";
import Womancoll from "../components/Womancoll";
import Childcoll from "../components/Childcoll";

function Home({cart}) {

  return (
    <>
   
    <Header />
    <Mainsec />
    <Brandslogo />
    <Category />
    <Benar />
    <Genderpro />
    <Routes>
      <Route path="/" element={<Allcollection />}/>
      <Route path="mancoll" element={<Mancoll />}/>
      <Route path="womancoll" element={<Womancoll />}/>
      <Route path="childcoll" element={<Childcoll />}/>
    </Routes>
    <Review />
    <Footer />
    
    </>
  )
}

export default Home;
