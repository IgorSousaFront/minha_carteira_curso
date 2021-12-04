import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "../components/Layout";

import Dashboard from '../pages/Dashboard';
import Lists from '../pages/Lists';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Layout> 
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/list/:type" element={<Lists />}>
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRoutes;