import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import '../App.css';
import env from '../environment';

function Dashboard() {
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get(`${env.apiurl}/users/flipkartDB`)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const filteredProducts = productData.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar className='navColour fixed-top'>
        <Container fluid>
          <h5 className='logo'>webscraper</h5>
          <Form className='d-flex custom-search-bar'>
            <Form.Control
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Button variant='warning'>
              <FaSearch />
            </Button>
          </Form>
          <h3 className='logo'>
            <FaShoppingCart />
          </h3>
        </Container>
      </Navbar>

      <div className='dbContent'>
        <Container>
          {filteredProducts.map(product => (
            <div key={product._id} className='d-flex product-item'>
              <img src={product.imageURL} alt={product.productName} className='product-image' />
              <div className='product-details'>
                <h4 className='product-title'>{product.productName}</h4>
                <p className='product-price'>{product.productPrice}</p>
                <p className='product-ratings'>{product.productRatings}</p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
