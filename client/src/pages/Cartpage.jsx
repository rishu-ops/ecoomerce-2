import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/Cart';
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';

const Cartpage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState('');
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total = total + item.price;
      });
      return total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (productId) => {
    try {
      let updatedCart = [...cart];
      const index = updatedCart.findIndex((item) => item._id === productId);
      if (index !== -1) {
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getToken = async () => {
    try {
      const { data } = await axios.get('https://ecommerce-e3o2.onrender.com/api/v1/product/braintree/token');
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [auth?.token]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post('https://ecommerce-e3o2.onrender.com/api/v1/product/braintree/payment', {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem('cart');
      setCart([]);
      navigate('/dashboard/user/orders');
      alert('Payment Completed');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2">
              {`Hello ${auth?.token && auth.user?.name}`}
            </h1>
            <div className="text-center">
              <h3>
              {cart?.length > 0 ? (
                `You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart${
                  auth?.token ? '' : '. Please log in to checkout.'
                }`
              ) : (
                'Your cart is empty'
              )}
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-3 boxing">
          <div className="col-md-8 ">
            {cart?.map((product) => (
              <div className="row mb-2 card flex-row" key={product._id}>
                <div className="col-md-4">
                  <img
                    src={`https://ecommerce-e3o2.onrender.com/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                  
                    style={{ objectFit: 'contain' , height : "170px" } }
                  />
                </div>
                <div className="col-md-4">
                  <h4>{product.name}</h4>
                  <h6> {product.description.substring(0, 100)}... </h6>
                  <h6> {product.price}</h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <div className="card p-3">
              <h4>CART SUMMARY</h4>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : {totalPrice()} </h4>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">Current Address </div>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate('/dashboard/user/profile')}
                  >
                    Update Address
                  </button>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate('/dashboard/user/profile')}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate('/login', { state: '/cart' })}
                    >
                      Please login to Checkout
                    </button>
                  )}
                </div>
              )}
              <div className="mt-2">
                {!clientToken || !cart.length ? (
                  ''
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: 'vault',
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={!loading || !auth?.user?.address}
                    >
                      {loading ? 'Processing...' : 'Make Payment'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cartpage;
