import React from 'react';
import Layout from '../components/layout/Layout';
import { useSearch } from '../context/Search';
import { useCart } from '../context/Cart';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  return (
    <Layout title={'Search Results'}>
      <div className="container">
        <div className="text-center">
          <h1 className="mb-4">Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? 'No products found'
              : `Found ${values?.results.length} products`}
          </h6>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {values?.results.map((p) => (
              <div className="col mb-3" key={p._id}>
                <div className="card">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top custom-img"
                    style={{height : "170px" , objectFit : "contain"}}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0, 50)}...</p>
                    <p className="card-text">$ {p.price}</p>
                    <button
                      className="btn btn-dark me-2"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem('cart', JSON.stringify([...cart, p]));
                        alert('Added to cart');
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
