import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function calculate(seconds) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < seconds * 1000) {}
}

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);
  const [productTime, setProductTime] = useState(calculate(2));
  const navigate = useNavigate();

  async function getAllProducts() {
    let data = await fetch("https://dummyjson.com/products");
    let { products } = await data.json();
    setProductList(products);
  }

  function addNewProduct() {
    let newProduct = {
      id: 45,
      title: "Realme",
      description: "An realme mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [],
    };
    productList[productList.length] = newProduct;
  }

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
      let filterProduct = productList.filter((product) => product.price > 400);
    }, 8000);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-6">
          <h1 className="text-center text-lg mt-8">
            <span className="">Count : </span>
            {count}
          </h1>
          <button
            onClick={incrementCount()}
            className="bg-green-400 py-1 mt-8 text-sm px-2 rounded-md"
          >
            Increment Count
          </button>
        </div>
        <button
          onClick={addNewProduct}
          className="bg-green-400 py-1 mt-8 text-sm px-2 rounded-md"
        >
          Add New Product
        </button>
      </div>
      <div className="mt-8">
        <ul class="py-4 divide-y divide-gray-300">
          {productList.map((product, index) => (
            <li className="py-4 flex justify-between py-6 gap-4">
              <div className="flex gap-8">
                <h1 className="text-gray-600">{index + 1}</h1>
                <h1>{product.title}</h1>
              </div>
              <button
                onClick={() => navigate(`/productDetail/${product.id}`)}
                className="bg-blue-400 py-1 -mt-0.5 text-sm px-2 rounded-md"
              >
                View Detail
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
