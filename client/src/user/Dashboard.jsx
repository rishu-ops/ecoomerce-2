import React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/Auth';
import UserMenu from '../components/layout/UserMenu';

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title="Dashboard">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-4">
              <h3 className="mb-3">Welcome, {auth?.user?.name}!</h3>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Information</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {auth?.user?.email}
                  </p>
                  <p className="card-text">
                    <strong>Address:</strong> {auth?.user?.address || 'Not provided'}
                  </p>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
