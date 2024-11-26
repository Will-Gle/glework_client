import React from "react";
import { Routes, Route } from "react-router-dom";
import SidePanel from "./AdminSidePanel";
import "./AdminPageLayout.css";
import AdminDashboard from "./AdminDashboard";
import AdminOrder from "./AdminOrder";
import OrderDetail from "./OrderDetail";
// import UserList from "./UserList";

const UserPageLayout: React.FC = () => {
  return (
    <div className="user-layout">
      {/* Side Panel for Navigation */}
      <SidePanel />

      {/* User Content Section */}
      <div className="user-content">
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="my-orders" element={<AdminOrder />} />
          <Route path="my-orders/order-detail/:orderId" element={<OrderDetail />} />
          {/*<Route path="user-list" element={<UserList />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default UserPageLayout;
