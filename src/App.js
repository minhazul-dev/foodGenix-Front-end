
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ConnectWithUsForm from './components/ConnectWithUsForm/ConnectWithUsForm';
// import DonationCategories from './components/DonationCategories/DonationCategories';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Registration from "./components/Registration/RegistrationForm";
import Completion from "./components/Payment/Completion/Completion";
import MapAdmin from "./Admin/map/MapAdmin";

import RegisteredOrganizations from "./components/RegisteredOrganizations/RegisteredOrganizations";

import Admin from "./Admin/Admin";
import Payment from "./components/Payment/Payment";
import Volunteer from "./Admin/Pages/Volunteers/Volunteer";
import ClothesDonationForm from "./components/DonationForms6categories/ClothesDonationForm";
import FootwearDonationForm from "./components/DonationForms6categories/FootwearDonationForm";
import FoodDonationForm from "./components/DonationForms6categories/FoodDonationForm";
import MapWithMarkers from "./components/MapWithMarkers/MapWithMarkers";
// import Missions from './components/Missions/Missions';
// import DataFilter from './components/NgoData/DataFilter';
function App() {
  return (


    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/*" exact element={<Header />} />
          <Route path="home" element={<Header />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registeredOrganizations" element={<RegisteredOrganizations />} />
          <Route path="/admin_panel" element={<Admin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentClothes" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/mapAdmin" element={<MapAdmin />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/footwear" element={<FootwearDonationForm />} />
          <Route path="/food" element={<FoodDonationForm />} />
          <Route path="/clothes" element={< ClothesDonationForm />} />
          <Route path="/mapwithmarkers" element={< MapWithMarkers />} />

        </Routes>


      </Router>
    </>
    //     <div>
    //  <Header/>
    //  <DataFilter/>
    //  <DonationCategories/>
    //  <Missions/>
    //  <ConnectWithUsForm/>
    //  <Footer/>
    //     </div>
  );
}

export default App;
