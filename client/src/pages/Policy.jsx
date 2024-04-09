import React from 'react';
import Layout from '../components/layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7478.jpg?size=626&ext=jpg&ga=GA1.1.1037392081.1662271397&semt=sph"
            alt="contactus"
            className="images"
          />
        </div>
        <div className="col-md-6">
          <div className="policies">
            <p>Some policies:</p>
            <ul>
              <h6>" - We are committed to protecting your privacy and ensuring the security of your personal information."</h6>
              <h6>" - By using our website, you agree to comply with and be bound by our terms and conditions."</h6>
              <h6>" - Your online payments are secure. We use industry-standard encryption to protect your sensitive information."</h6>
              {/* Add more policies as needed */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
