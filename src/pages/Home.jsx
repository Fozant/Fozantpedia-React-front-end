import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Nav } from '../components/NavbarElements';
import './Home.css';
import gambar from "./images/177717d6-2c47-4b3f-8960-b740bfd8544bimages.jpg"

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const deleteProduct = async (id) => {
    //   try {
    //     await axios.delete(`http://localhost:8080/products/${id}`);
    //     loadProducts();
    //   } catch (error) {
    //     console.error("Error deleting product:", error);
    //   }
  };

  return (
    <div className="containerr">
        <Navbar/>
        {/* <img  src={gambar} alt="Logo" /> */}

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">number</th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
  {products.map((product, index) => (
    
    <tr key={product.id}>
  <th scope="row">{index + 1}</th>
  <td>
  <img
     
       src={require(`.${product.imageUrl}`)} 
      alt={`Product ${index + 1}`}
      style={{ width: '100px', height: 'auto' }}
    />
  </td>
  <td>{product.name}</td>
  <td>{product.description}</td>
  <td>{product.price}</td>
      <td>
                  <button
                    className="updatebutton"
                    to={`/viewproduct/${product.id}`}
                  >
                    Update
                  </button>
                  
                  <button
                    className="Deletebutton"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
