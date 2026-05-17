import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../services/product.service';

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-500">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans max-w-2xl bg-slate-600 p-10 border border-slate-700 rounded-xl">
          <div className="flex-none w-68 relative">
            <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full" loading="lazy" />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-black pr-10">{product.title}</h1>
              <div className="text-lg font-semibold text-black">${product.price}</div>
              <div className="w-full flex-none text-sm font-medium text-bllack mt-2">
                Review {product.rating.rate} ({product.rating.count})
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-black">
              <div className="space-x-2 flex text-sm">{product.description}</div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-slate-500 text-white" type="submit">
                  Buy Now
                </button>
                <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
                  Add to bag
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;
