import Header from '../../components/Header/Header';
import { IoStar } from 'react-icons/io5';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { product } from '../../faker/product';

export default function SingleProduct() {
  // useParams
  const { slug } = useParams();

  // useSearchParams
  const searchParams = useSearchParams();
  console.log(searchParams);

  // useLocation to find status - gives hash, key, pathname, search, state
  const locate = useLocation();
  console.log(locate);

  const { name, photo, desc, regular_price, sale_price } = product.find((data) => data.slug === slug);

  return (
    <>
      <Header />
      <div className="product-area max-w-screen-xl mx-auto min-h-screen">
        <div className="product-item mt-5 flex">
          <div className="product-img ">
            <img className="max-w-lg" src={photo} alt="product image" />
          </div>
          <div class="product-details p-5">
            <h5 class="text-3xl font-medium text-gray-900 dark:text-white">{name}</h5>;
            <div class="flex items-center my-7">
              <IoStar className="text-2xl text-yellow-300" />
              <IoStar className="text-2xl text-yellow-300" />
              <IoStar className="text-2xl text-yellow-300" />
              <IoStar className="text-2xl text-yellow-300" />
              <IoStar className="text-2xl text-yellow-300" />
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
            <div>
              {sale_price ? (
                <span class="text-3xl font-bold text-gray-900 sale_price">
                  ${sale_price}
                  <span class="pl-3 text-xl font-medium text-gray-500 regular_price line-through">
                    ${regular_price}
                  </span>
                </span>
              ) : (
                <span className="text-3xl font-bold text-gray-900">{regular_price}</span>
              )}

              <h2 className="font-bold my-3 pt-5 border-t-2 border-rose-700">About this product</h2>
              <p>{desc}</p>
              <Link
                to="?location=dc&word=sale"
                className="text-white mt-10 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-4 text-center block"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
