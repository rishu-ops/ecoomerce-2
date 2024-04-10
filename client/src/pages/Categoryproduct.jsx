import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cart';

const Categoryproduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://ecommerce-e3o2.onrender.com/api/v1/product/product-category/${params.slug}`
      );

      console.log('API Response:', data);

      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          {products?.map((p) => (
            <div className="col-lg-3 col-md-4 col-12 mb-4" key={p._id}>
              <div
                className="card mx-auto" // Center the card horizontally on small screens
                style={{
                  width: '100%',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  objectFit: 'contain',
                }}
              >
                <img
                  src={`https://ecommerce-e3o2.onrender.com/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body" style={{ fontFamily: 'Secular One' }}>
                  <h5 className="card-title" style={{ fontFamily: 'Salsa' }}>
                    {p.name}
                  </h5>
                  <p className="card-text">{p.description.substring(0, 30)}...</p>
                  <p className="card-text">$ {p.price}</p>
                  <div className="d-flex">
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-secondary ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem('cart', JSON.stringify([...cart, p]));
                        alert('Added to cart');
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categoryproduct;
