import "./App.css";

function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="logofood"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg"
          alt=""
          height={100}
          width={100}
        />
      </div>
      <div className="nav-list">
        <div className="navitems">Home</div>
        <div className="navitems">About Us</div>
        <div className="navitems">Contact Us</div>
        <div className="navitems">Cart</div>
      </div>
    </div>
  );
}

const ResCard = () => {
  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmlcifdqtpoxdrdvet2s"
          alt=""
        />
        <h3>Meghna Foods</h3>
        <h4>Asian food and chinese cuisins</h4>
        <h4>4.3 stars</h4>
        <h4>25 mintues</h4>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="searchBar">Search</div>
        <div className="resContainer">
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
        </div>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
