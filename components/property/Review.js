import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";

// Sample reviews data
const reviewsData = [
    {
        id: 1,
        user: "User 1",
        rating: 4,
        userType: "AGNET",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis, cursus aliquet dignissim enim. Lobortis ultrices purus, aliquam fames enim, proin integer leo. Vitae elit massa sed.",
        city: "Owner"
    },
    {
        id: 2,
        user: "User 2",
        rating: 5,
        userType: "USER",
        review: "Excellent service and amen Great experience, loved the place Great experience, loved the place ities amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  amen Great experience, loved the place Great experience, loved the place ities  ",
        city: "User"
    },
    {
        id: 3,
        user: "User 3",
        rating: 3,
        userType: "AGNET",
        review: "Decent place, but needs improvem Great experience, loved the place Great experience, loved the placeent.",
        city: "Agent"
    },
    {
        id: 4,
        user: "User 4",
        rating: 4,
        userType: "USER",
        review: "Great experience, loved the p Great experience, loved the place Great experience, loved the placelace.",
        city: "Admin"
    },
    {
        id: 5,
        user: "User 5",
        rating: 5,
        userType: "ADMIN",
        review: "Excellent service and amen Great experience, loved the place Great experience, loved the place ities  .",
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
        review: "Great experience, loved th Great experience, loved the place e place.",
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

    const [view, setView] = useState(true);

    const handleMobileView = () => {
        setView(!view);
    }

    const [itemsPerPage, setItemsPerPage] = useState(3);
    //   const itemsPerPage = window.innerWidth >= 768 ? 4 : 2;
    // Number of reviews per page
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // const windowWidth = ;
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
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
            <div className="bg-[#9DACA1] flex justify-between rounded-t-lg shadow-lg p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-lg font-semibold">Reviews</h1>
                </div>
                <div>
                    <h1 className="text-white text-lg font-semibold">View All</h1>
                </div>
            </div>
            {
                view &&
                <div className="bg-white shadow-md ">
                    <div className="container">
                        <div className="flex justify-between">
                            {currentReviews.map((review) => (
                                <div key={review.id} className="rounded-2xl border-solid border-2 border-[#003E71] shadow-md md:p-3 m-6 flex flex-col" style={{ width: "400px", height: "auto" }} >
                                    <div className="items-center p-3">
                                        <h2 className="font-semibold">{review.user}</h2>
                                        <div className="flex mt-2 mb-3">
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
                                        
                                        <div className="mt-5">
                                            From {review?.city ? review?.city : "New User"}
                                            <hr className={Styles.cityUnderline} />
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Review;
