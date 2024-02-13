
// import { Link } from 'react-router-dom';
// import React from 'react';
// import { useQuery } from '@apollo/client';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';


// const comments = () => {
//     const { loading, data } = useQuery(QUERY_THOUGHTS);
//     const thoughts = data?.thoughts || [];
//     return (
//         <main>
//             <div className="flex-row justify-center">
//                 <div
//                     className="col-12 col-md-10 mb-3 p-3"
//                     style={{ border: '1px dotted #1a1a1a' }}
//                 >
//                     <ThoughtForm />
//                 </div>
//                 <div className="col-12 col-md-8 mb-3">
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : (
//                         <ThoughtList
//                             thoughts={thoughts}
//                             title="Some Food for Thought(s)..."
//                         />
//                     )}
//                 </div>
//             </div>
//         </main>
//     );
// }

// // export default comments;
// import React, { useState } from 'react';

// const RecommendationPage = () => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [newRecommendation, setNewRecommendation] = useState('');

//   const handleInputChange = (e) => {
//     setNewRecommendation(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newRecommendation.trim() !== '') {
//       setRecommendations([...recommendations, newRecommendation]);
//       setNewRecommendation('');
//     }
//   };

//   return (
//     <div className="recommendation-page">
//       <h1>Recommendations</h1>
//       <ul className="recommendation-list">
//         {recommendations.map((recommendation, index) => (
//           <li key={index}>{recommendation}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           placeholder="Write your recommendations here..."
//           value={newRecommendation}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Post Recommendations</button>
//       </form>
//     </div>
//   );
// };

// export default RecommendationPage;


// import React, { useState } from 'react';
// import { useMutation, useQuery } from '@apollo/client';
// import { GET_RECOMMENDATIONS } from '../utils/queries'; // Import your queries and mutations
// import { ADD_RECOMMENDATION } from '../utils/mutations'; // Import your queries and mutations

// const RecommendationPage = () => {
//   const [recommendationText, setRecommendationText] = useState('');
//   const { data } = useQuery(GET_RECOMMENDATIONS);
//   const [addRecommendation] = useMutation(ADD_RECOMMENDATION);

//   const handleAddRecommendation = () => {
//     addRecommendation({
//       variables: {
//         recommendationText: recommendationText,
//       },
//       refetchQueries: [{ query: GET_RECOMMENDATIONS }],
//     });
//     setRecommendationText('');
//   };

//   const backgroundStyle = {
//     backgroundImage: "url('images/banner.webp')",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     minHeight: "60vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     position: "relative",
//   };

//   const titleStyle = {
//     position: "absolute",
//     top: "100px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     color: "white",
//     fontSize: "40px",
//     zIndex: "1", // Ensure title appears above navbar
//   };

 

//   const buttonStyle = {
//     backgroundColor: "black",
//     color: "red",
//     border: "1px solid red",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginTop: "20px",
//   };

//   return (
//     <div>
//       <h1 style={titleStyle}>Recommendations 📝</h1>
//       <div style={backgroundStyle}>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {data && data.recommendations && data.recommendations.map((recommendation) => (
//             <li key={recommendation.id} style={{ color: "white", marginBottom: "10px" }}>{recommendation.text}</li>
//           ))}
//         </ul>
//         <textarea
//           value={recommendationText}
//           onChange={(e) => setRecommendationText(e.target.value)}
//           className="form-control"
//           placeholder="Enter your recommendation..."
//           style={{ marginBottom: "10px", width: "1000px", height: "100px" }}
//         ></textarea>
//         <button onClick={handleAddRecommendation} style={buttonStyle}>Add Recommendation</button>
//       </div>
//     </div>
//   );
// };

// export default RecommendationPage;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_RECOMMENDATION } from '../utils/mutations'; // Import the ADD_RECOMMENDATION mutation
// import Auth from '../utils/auth';

// const RecommendationForm = () => {
//   const [recommendationText, setRecommendationText] = useState('');
//   const [addRecommendation, { error }] = useMutation(ADD_RECOMMENDATION);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await addRecommendation({
//         variables: { recommendationText },
//       });
  
//       setRecommendationText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h4>Recommend Your Favorite Eateries Below</h4>

//       {Auth.loggedIn() ? (
//         <form
//           className="flex-row justify-center justify-space-between-md align-center"
//           onSubmit={handleFormSubmit}
//         >
//           <div className="col-12 col-lg-9">
//             <input
//               placeholder="Enter your recommendation..."
//               value={recommendationText}
//               className="form-input w-100"
//               onChange={(event) => setRecommendationText(event.target.value)}
//             />
//           </div>

//           <div className="col-12 col-lg-3">
//             <button className="btn btn-info btn-block py-3" type="submit">
//               Add Recommendation
//             </button>
//           </div>
//           {error && (
//             <div className="col-12 my-3 bg-danger text-white p-3">
//               {error.message}
//             </div>
//           )}
//         </form>
//       ) : (
//         <p>
//           You need to be logged in to add recommendations. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };

// export default RecommendationForm;
import React, { useState } from 'react';

const RecommendationPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [newRecommendation, setNewRecommendation] = useState('');
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'category') {
      setCategory(value);
    } else if (name === 'recommendation') {
      setNewRecommendation(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecommendation.trim() !== '') {
      const newRec = {
        username,
        category,
        recommendation: newRecommendation
      };
      setRecommendations([...recommendations, newRec]);
      setNewRecommendation('');
      setUsername('');
      setCategory('');
    }
  };

  const backgroundStyle = {
    backgroundImage: "url('images/banner.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  };

  const titleStyle = {
    position: "absolute",
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "40px",
    zIndex: "1", // Ensure title appears above navbar
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "red",
    border: "1px solid red",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const renderRecommendations = () => {
    return recommendations.map((rec, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">User: {rec.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Category: {rec.category}</h6>
          <p className="card-text">{rec.recommendation}</p>
        </div>
      </div>
    ));
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={titleStyle}>Recommendations 📝</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {renderRecommendations()}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Your Username"
                  value={username}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="category"
                  placeholder="SA-Flavor-Finder Category"
                  value={category}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <textarea
                  name="recommendation"
                  placeholder="Write your recommendation here..."
                  value={newRecommendation}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger" style={buttonStyle}>Add Recommendation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
