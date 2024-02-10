// import React from "react";
// import trucks from "./FoodTrucks.jsx";
// import { Link } from "react";


// const Home = () => {
//   // const [foodTrucks, setFoodTrucks] = useState([]);
//   const { loading, data } = useQuery(trucks);
//   const foodtrucks = data?.foodtrucks || [];
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <section className="trucks-section">
//       <div className="trucks-content">
//       <h2>Food Trucks! 🚚 </h2>

//         <div className="foodtruck-container">
//           {foodtrucks.map((foodtruck, index) => (
//             <div className="foodtruck-card" key={index}>
//               <img src={foodtruck.image} alt={`${foodtruck.title} Screenshot`} />
//               <div className="foodtruck-info">
//                 <h3>{foodtruck.title}</h3>
//                 <div className="foodtruck-links">
//                   <a href={foodtruck.websiteLink} target="_blank" rel="noopener noreferrer">
//                     Website
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
//  };

// export default Home;
