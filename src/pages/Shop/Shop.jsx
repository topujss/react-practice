import Header from '../../components/Header/Header';
import { IoStar } from 'react-icons/io5';
import { product } from '../../faker/product';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <>
      <section>
        <Header />
        <div className="product-area max-w-screen-xl mx-auto">
          <div className="product-item mt-5 grid grid-cols-4 gap-5">
            {product.map((product, index) => (
              <div class="max-w-xs bg-white rounded-lg shadow-md" key={index}>
                <div className="p-img">
                  <img class="rounded-t-lg object-cover" src={product.photo} />
                </div>
                <div class="p-3">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                  <div class="flex items-center mt-2.5 mb-5">
                    <IoStar className="text-xl text-yellow-300" />
                    <IoStar className="text-xl text-yellow-300" />
                    <IoStar className="text-xl text-yellow-300" />
                    <IoStar className="text-xl text-yellow-300" />
                    <IoStar className="text-xl text-yellow-300" />
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    {product.sale_price ? (
                      <span class="text-3xl font-bold text-gray-900 sale_price">
                        {product.sale_price && `$` + product.sale_price}
                        <span class="pl-3 text-xl font-medium text-gray-500 regular_price line-through">
                          ${product.regular_price}
                        </span>
                      </span>
                    ) : (
                      <span className="text-3xl font-bold text-gray-900">{`$${product.regular_price}`}</span>
                    )}
                    <Link
                      to={`/shop/${product.slug}`}
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
