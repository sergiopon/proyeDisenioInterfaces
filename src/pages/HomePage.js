import Header from '../components/Header.jsx'
import { ThemeProvider } from "@mui/material/styles/index.js";
import { theme } from "../themes/MUItheme.js";
import ParcheCard from '../components/ParcheCardV1.jsx';
import FilterComponent from '../components/FiltroHome.jsx';
import datosParche from '../datosParche.json';
import "../styles/Homepage.css";

const Home = () => {
    return (
      <>
        <div className="home-ctn">
          <h1>Parches disponibles en Cali :)</h1>
          <div class="home-columns">
            <div className="filter-ctn">
              <div className="filter-wrap">
                <ThemeProvider theme={theme}>
                  <FilterComponent />
                </ThemeProvider>
              </div>
            </div>
            <div className="cards-ctn">
              {datosParche.map((parche, index) => (
                <ParcheCard key={index} {...parche} />
              ))}
            </div>
          </div>
        </div>
        <div className="gradient-ctn"></div>
      </>
    );
  };
  
  export default Home;