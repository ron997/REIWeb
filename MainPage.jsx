import FinanceRatesChart from "./FinanceRatesChart";
import NavBar from "./NavBar";
import MapComponent from "./MapComponent";
import PropertiesList from "../PropertyList/PropertiesList";
import RateChart from "./RateChart";
import InvestmentGraph from "./InvestmentGraph";
import Footer from "./Footer";

const MainPage = () => {
    return (
      <div>
        <NavBar />
        <MapComponent />
        <PropertiesList />
        <RateChart />
        <InvestmentGraph />
        <FinanceRatesChart/>
        <Footer />
      </div>
    );
  };
  
  export default MainPage;