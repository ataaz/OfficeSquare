import { configureStore } from "@reduxjs/toolkit";
// import getHeaderReducer from "./HeaderRedux";
// import getFooterReducer from "./FooterRedux";
import HomepageReducer from "redux/HomepageRedux";
import ContactReducer from "redux/ContactRedux";
import AboutpageReducer from "redux/AboutpageRedux";
import PrivateWorkspacesReducer from "redux/PrivateWorkspacesRedux";
import CoworkingSpacesReducer from "redux/CoworkingSpacesRedux";
import ConferenceRoomsReducer from "redux/ConferenceRoomsRedux";
import EventSpacesReducer from "redux/EventSpacesRedux";
import VirtualOfficesReducer from "redux/VirtualOfficesRedux";
import BusinessSetupReducer from "redux/BusinessSetupRedux";
import ProManagementReducer from "redux/ProManagementRedux";
import PrivacyReducer from "redux/PrivacyPolicyRedux";

export default configureStore({
  reducer: {
    // HeaderData: getHeaderReducer,
    // FooterData: getFooterReducer,
    Homepage: HomepageReducer,
    Aboutpage: AboutpageReducer,
    ContactPage: ContactReducer,
    PrivateWorkspaces: PrivateWorkspacesReducer, 
    CoworkingSpaces: CoworkingSpacesReducer,
    ConferenceRooms: ConferenceRoomsReducer,
    EventSpaces: EventSpacesReducer, 
    VirtualOffices: VirtualOfficesReducer, 
    BusinessSetup: BusinessSetupReducer, 
    ProManagement: ProManagementReducer,
    Privacypage: PrivacyReducer
  },
});