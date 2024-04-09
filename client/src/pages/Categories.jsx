import React from 'react';
import useCategory from '../hooks/useCategory';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={'All Categories'}>
      <div className="container mt-5">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6" key={c._id}>
              <div className="card bg-dark text-white mb-3">
                {/* Assuming 'imageUrl' is the property holding the background image URL */}
                <div
                  className="card-body"
                  style={{
                    backgroundImage: `url(${c.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '150px', // Adjust the height based on your design
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <h5 className="card-title">{c.name}</h5>
                  <Link to={`/category/${c.slug}`} className="btn btn-primary">
                    Explore {c.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
