import React, { useState,useEffect } from "react";
import Styles from "./index.module.css";

// Sample reviews data
const reviewsData = [
  {
    id: 1,
    user: "User 1",
    rating: 4,
    userType: "AGNET",
    review:
      "Great experience, loved the place Great experience, loved the place.",
  },
  {
    id: 2,
    user: "User 2",
    rating: 5,
    userType: "USER",
    review:
      "Excellent service and amen Great experience, loved the place Great experience, loved the place ities amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  ",
  },
  {
    id: 3,
    user: "User 3",
    rating: 3,
    userType: "AGNET",
    review:
      "Decent place, but needs improvem Great experience, loved the place Great experience, loved the placeent.",
  },
  {
    id: 4,
    user: "User 4",
    rating: 4,
    userType: "USER",
    review:
      "Great experience, loved the p Great experience, loved the place Great experience, loved the placelace.",
  },
  {
    id: 5,
    user: "User 5",
    rating: 5,
    userType: "ADMIN",
    review:
      "Excellent service and amen Great experience, loved the place Great experience, loved the place ities  .",
  },
  {
    id: 6,
    user: "User 6",
    rating: 3,
    userType: "OWNER",
    review: "Decent place, but needs improvement.",
  },
  {
    id: 7,
    user: "User 8",
    rating: 4,
    userType: "USER",
    review:
      "Great experience, loved th Great experience, loved the place e place.",
  },
  {
    id: 8,
    user: "User 9",
    rating: 5,
    userType: "USER",
    review:
      "Excellent service and am Great experience, loved the place enities.",
  },
  {
    id: 9,
    user: "User 10",
    rating: 3,
    userType: "USER",
    review: "Decent place, but needs improvement.",
  },
  // ... more reviews
];

const Review = () => {
    const [itemsPerPage, setItemsPerPage] = useState(4);
//   const itemsPerPage = window.innerWidth >= 768 ? 4 : 2;
   // Number of reviews per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // const windowWidth = ;
    const handleResize = () => {
      if ( window.innerWidth >= 1024) {
        setItemsPerPage(4);
      }
    //   else if(windowWidth >= 768 && windowWidth < 1024){
    //     setItemsPerPage(2);

    //   } 
    //   else if(windowWidth >= 481 && windowWidth < 768){
    //     setItemsPerPage(2);

    //   }
      else {
        setItemsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the index range of reviews to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get reviews for the current page
  const currentReviews = reviewsData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="relative shadow-md">
      <div className="bg-[#9DACA1] rounded-t-lg shadow-lg p-4">
        <div>
          <h1 className="text-white text-2xl font-semibold">Reviews</h1>
        </div>
      </div>
      <div className="bg-white shadow-md ">
        <div className="container">
          <div className=" flex justify-around ">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="p-4 md:p-3 m-5 border border-gray-300 rounded-lg flex flex-col"
                style={{ width: "300px", height: "200px" }}
              >
                <div className="items-center">
                  <h2 className="font-semibold">{review.user}</h2>
                  <div className="flex mt-2">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gold" // Change the color here to gold
                        viewBox="0 0 16 16"
                        className="h-5 w-5" // Remove the text-primary class
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 .25a.75.75 0 0 1 .664.408l1.93 4.927 5.451.398a.75.75 0 0 1 .416 1.299l-4.148 3.208 1.457 5.377a.75.75 0 0 1-1.156.844L8 13.347l-4.056 2.756a.75.75 0 0 1-1.156-.845l1.457-5.377L.489 7.98a.75.75 0 0 1 .416-1.3l5.45-.397L7.336.657A.75.75 0 0 1 8 .25z"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className={`overflow-y-scroll h-24 overflow-x-hidden ${Styles.para}`}>
                    <p>{review.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-center p-8">
            {Array.from({
              length: Math.ceil(reviewsData.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-primary border-2 border-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
