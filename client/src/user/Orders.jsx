import React, { useEffect, useState } from "react";
import UserMenu from "../components/layout/UserMenu";
import Layout from "../components/layout/Layout";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All Orders</h1>
            <div className="alert alert-warning" role="alert">
              This page is currently under construction. Orders functionality will be available soon.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
