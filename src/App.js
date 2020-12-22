import React from "react";
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import LoginPage from "./pages/login";
// Home pages
// import HomePage from "./pages/home/home";
// import ProfilePage from "./pages/home/profile";
import PlacementPage from "./pages/home/placement";
import PlanPage from "./pages/home/plan";
// Learning pages
import ClientAcquisitionPage from "./pages/learning/client-acquisition";
import ServiceDeliveryPage from "./pages/learning/service-delivery";
import SolutionsSupportPage from "./pages/learning/solutions-support";
import AgilePage from "./pages/learning/agile";
// Report
import StudentBiweeklyReportPage from "./pages/report/student-biweekly";
import IndustrialSupervisorReportPage from "./pages/report/industrial-supervisor";
import AcademicSupervisorReportPage from "./pages/report/academic-supervisor";
// Profile
import ProfilePage from "./pages/profile/profile";



// import LearningPage from "./pages/learning";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/home/tasks">
          <HomePage /> */}
        {/* </Route> */}
        <Route path="/home/placement">
          <PlacementPage />
        </Route>
        <Route path="/home/plan">
          <PlanPage />
        </Route>
        <Route path="/home">
          <PlacementPage />
        </Route>


        <Route path="/learning/client-acquisition">
          <ClientAcquisitionPage />
        </Route>
        <Route path="/learning/service-delivery">
          <ServiceDeliveryPage />
        </Route>
        <Route path="/learning/solutions-support">
          <SolutionsSupportPage />
        </Route>
        <Route path="/learning/agile">
          <AgilePage />
        </Route>
        <Route path="/learning">
          <ClientAcquisitionPage />
        </Route>

        <Route path="/report/student-biweekly">
          <StudentBiweeklyReportPage />
        </Route>

        <Route path="/report/industrial-supervisor">
          <IndustrialSupervisorReportPage />
        </Route>

        <Route path="/report/academic-supervisor">
          <AcademicSupervisorReportPage />
        </Route>

        <Route path="/report">
          <StudentBiweeklyReportPage />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router >
  );
}

export default hot(App);
