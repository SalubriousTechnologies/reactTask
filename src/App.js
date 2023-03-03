import "./App.css";
import { useState, useEffect } from "react";

const sideNavArr = [
  { label: "Home", href: "#", isActive: true },
  { label: "Users", href: "#", isActive: false },
  { label: "Profile", href: "#", isActive: false },
  { label: "About", href: "#", isActive: false },
];

const userInfo = {
  name: "John",
  age: 20,
  address: { state: "UP" },
};

function App() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discount: "",
    desc: "",
  });
  const [userData, setUserData] = useState(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    userData.name = "sam";
    setUserData(userInfo);
  }, []);

  useEffect(() => {
    setCount(count + 1);
  });

  const handleFormData = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <header className="header">
        <div className="buttonWrapper">
          <div style={{ display: "flex" }}>
            <h1 style={{ fontSize: 18 }}>
              Hey ! I am{" "}
              <span style={{ color: "black" }}>{userData.name}</span> from{" "}
              {userData.address.city}, {userData.address.state}
            </h1>
          </div>
          <button className="button">Register</button>
          <button class="button">Login</button>
        </div>
      </header>

      <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Users</a>
        <a href="#">Profile</a>
        <a href="#">About</a>
      </nav>
      <main className="mainContent">
        <aside class="sideBar">
          {sideNavArr.map((item) => (
            <a className={item.isActive && "active"} href={item.href}>
              {item.label}
            </a>
          ))}
        </aside>

        <div className="section">
          <section>
            <div className="formContainer">
              <div className="formWrapper">
                <div className="formCard">
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#302d2d",
                      fontSize: 23,
                    }}
                  >
                    Add/Edit Products
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="formItem">
                      <label>Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleFormData}
                        placeholder="Enter Product Title"
                      />
                    </div>
                    <div className="formItem">
                      <label>Price</label>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        onChange={handleFormData}
                        placeholder="Enter Product Price"
                      />
                    </div>
                    <div className="formItem">
                      <label>Discount</label>
                      <input
                        type="text"
                        id="discount"
                        name="discount"
                        onChange={handleFormData}
                        placeholder="Enter Product Discount %"
                      />
                    </div>
                    <div className="formItem">
                      <label>Description</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={handleFormData}
                        placeholder="Enter Product Description"
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button class="formButton submitButton">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1>Product Data</h1>
            <table>
              <thead></thead>
              <tr>
                <th>Ttile</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Description</th>
              </tr>
              <tbody>
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>{" "}
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>{" "}
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>{" "}
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>{" "}
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>
                <tr>
                  <td>iPhone 9</td>
                  <td>$549</td>
                  <td>12.96%</td>
                  <td>An apple mobile</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
