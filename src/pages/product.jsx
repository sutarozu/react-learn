import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 'Rp 1.000.000',
    img: '/img/product-shoes1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit dolorum a fugit laudantium! Necessitatibus laudantium atque corporis rerum libero reprehenderit voluptas est mollitia cum? At distinctio reprehenderit modi voluptas?`,
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    price: 'Rp 3.000.000',
    img: '/img/product-shoes1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit dolorum a fugit laudantium! Necessitatibus.`,
  },
  {
    id: 3,
    name: 'Sepatu Andalas',
    price: 'Rp 2.500.000',
    img: '/img/product-shoes1.jpg',
    description: `Andalas nih bos`,
  },
  {
    id: 4,
    name: 'Sepatu Chibaiduyut',
    price: 'Rp 7.000.000',
    img: '/img/product-shoes1.jpg',
    description: `Naon anjing`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-red-200 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header img={product.img}></CardProduct.Header>
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price}></CardProduct.Footer>
            </CardProduct>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
