import React , {useState , useEffect } from "react";

import Layout from "../components/layout/Layout";
import AdminMenu from "../components/layout/AdminMenu";
import axios from "axios"
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const  { Option } = Select

const CreateProduct = () => {
 
 const [categories , setCategories ] = useState([]);
 const [category , setCategory ] = useState([]);
 const [photo , setphoto ] = useState("");
 const [name , setname ] = useState("");
 const [discription , setdiscription ] = useState("");
 const [price , setprice ] = useState("");
 const [quantity , setquantity ] = useState("");
 const [shipping , setshipping ] = useState("");
 
 const navigate= useNavigate()
 const handleCreate = async (e) => {
  e.preventDefault();
  try {
    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", discription);
    productData.append("price", price);
    productData.append("quantity", quantity);
    productData.append("photo", photo);
    productData.append("category", category);
    const { data } = axios.post(
      "https://ecommerce-e3o2.onrender.com/api/v1/product/create-product",
      productData
    );
    if (data?.success) {
      alert(data?.message);
    } else {
     alert("Product Created Successfully");
      navigate("/dashboard/admin/products");
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}
 
 const getAllCategory = async () => {
  try {
    const { data } = await axios.get("https://ecommerce-e3o2.onrender.com/api/v1/category/get-category");
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong in getting categories");
  }
};

useEffect(() => {
  getAllCategory();
}, []);


  return (
    <Layout title={'Dashboard - Create Product'}>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Create Product</h1>
          <div className="m-1 w-75">
            <Select
              bordered={false}
              placeholder="Select a category"
              size="large"
              showSearch
              className="form-select mb-3"
              onChange={(value) => {
                setCategory(value);
              }}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
            <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setphoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

            <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={discription}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setdiscription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setquantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setshipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
    );
  };
  
  
  
  export default CreateProduct;