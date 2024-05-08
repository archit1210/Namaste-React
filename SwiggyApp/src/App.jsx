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

const ResCard = (props) => {
  const { resData } = props;
  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" src={resData.logo} alt="" />
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.cost}</h4>
        <h4>{resData.deliveryTime} minutes</h4>
      </div>
    </>
  );
};

const restaurantList = [
  {
    id: "1",
    logo: "https://lh3.googleusercontent.com/Rp8JcJDQ72XS-pJgtyNZBql5D56UFM-_XlgsTkoaj7bC1KeqK_kHZftRGUuPxMo9BSRw7xd3mUk3EXgFcKZB1Xck35D2=w1200-rw",
    name: "KFC",
    cuisines: ["Chicken", "Nuggets", "Wings"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "2",
    logo: "https://media.timeout.com/images/106035990/750/422/image.jpg",
    name: "McDonalds",
    cuisines: ["Burgers", "Fries", "Wraps"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "3",
    logo: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Epitome%203.jpg",
    name: "Epitome",
    cuisines: ["Japanese", "Italian", "Spanish"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "4",
    logo: "https://b.zmtcdn.com/data/pictures/chains/7/36267/63054b16eaeef51da79f4f3e1bd8ae76.jpg",
    name: "Sahara Dining",
    cuisines: ["Paneer Masala", "Pav Bhaji", "Dal tadka"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "5",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd32ncEeqXMrI5QZKLgV-uwGT_NUd4J042mOTf9PgbyzExifcewQMW7sxWOMFi6vtiip0&usqp=CAU",
    name: "Vrindavan Gardens",
    cuisines: ["Idli", "Vadapav", "Chole kulche"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "6",
    logo: "https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/1436899547-delish-starbucks-drinks-flickr.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    name: "Starbucks",
    cuisines: ["Coffee", "Sandwich", "Sparkling water"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "7",
    logo: "https://b.zmtcdn.com/data/pictures/1/20216421/fe2f9b763a12646d71a81a8067678091_featured_v2.jpg",
    name: "Cafe-Coffee-Day(CCD)",
    cuisines: ["Idli", "Vadapav", "Chole kulche"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "8",
    logo: "https://b.zmtcdn.com/data/pictures/8/20358318/e8c6185c4b4ffd2dfeb1d637602bb697.jpg?fit=around|960:500&crop=960:500;*,*",
    name: "JumboKing",
    cuisines: ["Chicken Pav", "Bombay Burger", "Cheese vadapav"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "9",
    logo: "https://b.zmtcdn.com/data/pictures/chains/2/19907792/fbdcbb541f9300799c5b595b5e60a36d.jpg?fit=around|960:500&crop=960:500;*,*",
    name: "I Love Misal",
    cuisines: ["MisalPav Thali", "Special Thali", "Lassi"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "10",
    logo: "https://d4t7t8y8xqo0t.cloudfront.net/app//resized/818X450/restaurant/691663/restaurant520231110081658.jpg",
    name: "Chembur Social",
    cuisines: ["Paneer Starters", "Wraps and Frankies", "Pizzas"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "11",
    logo: "https://b.zmtcdn.com/data/pictures/0/19531090/72bc70d8744fe250cc5be1b96ef3e5e3.jpg",
    name: "Angrezi Dhaba",
    cuisines: ["Butter Chicken", "Roti", "Chilli Paneer"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "12",
    logo: "https://b.zmtcdn.com/data/pictures/2/19830002/7431d41972b4819510ecbbbc43f92c56.jpg?fit=around|960:500&crop=960:500;*,*",
    name: "One8 commune",
    cuisines: ["Gulab Jamun", "Rasgulla", "Ghevar"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "13",
    logo: "https://hungryforever.net/wp-content/uploads/2017/01/Acharekar%E2%80%99s-Malvan-Katta.jpg",
    name: "Malvan tadka",
    cuisines: ["Pomphret Thali", "Surmai Thali", "Solkadhi"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "14",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN60cnXxdwgsNbafV9Nw1r5IB_gEDjkiGSXCsFx8Q4jh2zylZH2ZM4rexaN28BofAYuIA&usqp=CAU",
    name: "Pop-Tates",
    cuisines: ["Potato Twisters", "Momos", "Moburg"],
    cost: 300,
    deliveryTime: 30,
  },
  {
    id: "15",
    logo: "https://im.whatshot.in/img/2020/Mar/gomantak-3-1584027265.jpg?wm=1&w=1200&h=630&cc=1",
    name: "Gomantak",
    cuisines: ["Biryani", "Pulav", "Fish Fry"],
    cost: 300,
    deliveryTime: 30,
  },
];

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="searchBar">Search</div>
        <div className="resContainer">
          {restaurantList.map((restaurant) => (
            <ResCard key={restaurant.id} resData={restaurant} />
          ))}
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
