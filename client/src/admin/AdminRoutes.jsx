import React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/Auth';
import AdminMenu from '../components/layout/AdminMenu';

const AdminRoutes = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-4">
              <h3 className="mb-4">Admin Information</h3>
              <div className="mb-3">
                <strong>Admin Name:</strong> {auth?.user?.name}
              </div>
              <div className="mb-3">
                <strong>Admin Email:</strong> {auth?.user?.email}
              </div>
              <div>
                <strong>Admin Contact:</strong> {auth?.user?.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminRoutes;
