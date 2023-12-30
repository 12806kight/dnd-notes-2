import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";



function View() {
    const location = useLocation();

    console.log(location.pathname.split("/")[2]);
    const locationId = location.pathname.split("/")[2];

     return (
      <div>
      <Header/>
      <p>{locationId}</p>
      <Footer/>
      </div>
    );
  }
  
 

export default View