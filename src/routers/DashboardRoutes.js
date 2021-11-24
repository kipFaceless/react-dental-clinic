import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from "../components/search/SearchScreen";
import { Routes, Route } from "react-router-dom";

export const DashboardRoutes = () => {
    return ( 
        <>

            <Navbar />
             <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
       
      </Routes>
        
        </>
     );
}

export default DashboardRoutes;
 
