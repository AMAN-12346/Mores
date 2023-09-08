"use client";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepOneCard from "./component/cards/StepOneCard";
import PropertyDetailsForm from "./component/PropertyDetailsForm";
import AdditionalDetail from "./component/AdditionalDetails";
import Amenities from "./component/services/Amenities";
import property from "@/DummyData/data";
import AdditionalDetailsForm from "./component/AdditionalDetailsForm";
//TODO map function in step 1.

export default function AddProperty() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [uplodedPhoto, setUploadPhoto] = useState([]);
  const [uplodedVideo, setUploadVideo] = useState([]);

  const [locationData, setLocationData] = React.useState({
    city: "",
    cityLongitude: "",
    cityLatitude: "",
    locality: "",
    localityLongitude: "",
    localityLatitude: "",
    buildingLocation: "",
    buildingLongitude: "",
    buildingLatitude: "",
  });

  const handlePhotoUplod = (data) => {
    console.log("recieved photos at add property", data);

    setUploadPhoto((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleVideoUplod = (data) => {
    console.log("recieved video at add property", data);

    setUploadVideo((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleLocationChange = (data) => {
    console.log("Received location data:", data);

    // Update the locationData state with the received data
    setLocationData((prevData) => ({
      ...prevData,
      ...data,
    }));

    // Update the consolidatedPropertyData with the received location data
    const updatedConsolidatedData = {
      ...propertyDetails.step2Data,
      ...propertyDetails.step3Data,
      ...propertyDetails.step4Data,
      ...data, // Include the location data
    };

    console.log("Updated consolidated data:", updatedConsolidatedData);

    setConsolidatedPropertyData(updatedConsolidatedData);
  };

  const [propertyDetails, setPropertyDetails] = React.useState({
    step2Data: {
      // propertyListing: "",
      // propertyCatagory: "",
      // propertyType: "",
      // city: "",
      // projectName: "",
      // price: "",
      // locality: "",
      // Add more fields as needed
    },
    step3Data: {
      // additionalRooms: "",
      // PossessionStatus: "",
      // propertyListing: "",
      // furnishStatus: "",
      // numberOfBedrooms: "",
      // numberOfBathrooms: "",
      // ageOfProperty: "",
      // additionalBalconies: "",
      // powerBackup: "",
      // view: "",
      // flooringOption: "",
      // totalFloors: "",
      // unitNumber: "",
      // tower: "",
      // Add more fields as needed
    },
    step4Data: {
      amenities: [],
    },
    // Add more steps' data objects as needed
  });
  const [consolidatedPropertyData, setConsolidatedPropertyData] =
    React.useState({});

  const handleStep2InputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      step1Data: {
        ...prevData.step2Data,
        [name]: value,
      },
    }));
  };

  const handleStep3InputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      step2Data: {
        ...prevData.step3Data,
        [name]: value,
      },
    }));
  };

  const handleStep4InputChange = (selectedAmenities) => {
    setPropertyDetails((prevData) => ({
      ...prevData,
      step4Data: {
        ...prevData.step4Data,
        amenities: selectedAmenities,
      },
    }));
  };

  const steps = [
    {
      label: "Whats your plan",
      component: (
        <div className="mb-4 mt-5 lg:flex">
          <div className="flex flex-col mb-0 mr-4 lg:mb-0">
            <div className="p-4 border-2 border-button bg-white rounded-lg mb-2">
              <StepOneCard
                mainHeading="Sell or Rent Your Home With MORES Expert"
                definition="Lorem ipsum dolor sit amet consectetur. Et ut orci morbi Vulputate pretium sem. Justo sollicitudin lacus interdum Sit in."
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-4 border-2 border-primary bg-white rounded-lg">
              <StepOneCard
                mainHeading="Sell or Rent Your Home Directly"
                definition="Lorem ipsum dolor sit amet consectetur. Et ut orci morbi Vulputate pretium sem. jfnwqpqd lkqwdojiqd kjwejfoi2"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Property Details",
      component: (
        <PropertyDetailsForm
          data={propertyDetails.step2Data}
          onChange={(name, value) =>
            setPropertyDetails({
              ...propertyDetails,
              step2Data: { ...propertyDetails.step2Data, [name]: value },
            })
          }
          onLocationChange={handleLocationChange} // Make sure you pass onLocationChange prop
        />
      ),
    },

    {
      label: "Additional Details",
      component: (
        <AdditionalDetailsForm
          data={propertyDetails.step3Data}
          onChange={(name, value) =>
            setPropertyDetails({
              ...propertyDetails,
              step3Data: { ...propertyDetails.step3Data, [name]: value },
            })
          }
          onPhotoChange={handlePhotoUplod}
          onVideoChange={handleVideoUplod}
        />
      ),
    },

    {
      label: "Amenities",
      component: (
        <Amenities
          selected={propertyDetails.step4Data.amenities}
          onUpdateAmenities={handleStep4InputChange}
        />
      ),
    },
  ];

  const handleNext = () => {
    // Check the current step
    if (activeStep === 1) {
      // Step 2
      // Display step 2 data on the console
      console.log("Step 1 Data:", propertyDetails.step2Data);
    } else if (activeStep === 2) {
      // Step 3
      // Display step 3 data on the console
      console.log("Step 2 Data:", propertyDetails.step3Data);
    } else if (activeStep === 3) {
      // Step 4
      // Display step 4 data on the console
      console.log("Step 3 Data:", propertyDetails.step4Data);
    } else if (activeStep === 4) {
      // Step 4
      // Display step 4 data on the console
      console.log("Step 4 Data:", propertyDetails.step4Data);
    }
    // Consolidate property data when clicking "Post Property"
    if (activeStep === steps.length - 1) {
      const consolidatedData = {
        ...propertyDetails.step2Data,
        ...propertyDetails.step3Data,
        ...propertyDetails.step4Data,
        ...locationData,
        ...uplodedPhoto,
        ...uplodedVideo,
      };
      setConsolidatedPropertyData(consolidatedData);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    //!abhi reset pe hora hai last me post property pe krna hai
    console.log(consolidatedPropertyData, "whole data of property");
    setActiveStep(0);
    setPropertyDetails({
      step2Data: {},
      step3Data: {},
      step4Data: {
        amenities: [],
      },
    });
  };

  const buttonStyle = {
    backgroundColor: "#931602", // Replace with your desired button color
    "&:hover": {
      backgroundColor: "#931602", // Replace with your desired hover color
    },
    fontSize: "12px",
    height: "25px",
 
  };
  return (
    <div className="bg-white p-5 w-full">
      {" "}
      {/* Apply Tailwind classes */}
      <Box sx={{ maxWidth: 1000 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              {/* <span>{step.label}</span> */}

              <StepLabel
                className="font-extrabold  p-2 rounded bg-white border"
                optional={
                  index === 3 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
                sx={{
                  "& .MuiStepLabel-label": {
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "",
                    // ... other custom styles
                  },
                  "& .MuiStepLabel-iconContainer": {
                    "& .MuiStepIcon-root": {
                      color: "#018191", // Change color for step index circle
                    },
                  },
                }}
              >
                {step.label}
              </StepLabel>

              <StepContent className="text-center md:text-left">
                <Typography>{step.description}</Typography>
                {step.component ? step.component : ""}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      style={buttonStyle} // Use inline style for button
                    >
                      {index === steps.length - 1 ? "Continue" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      //   sx={}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              onClick={handleReset}
              sx={{ mt: 1, mr: 1, color: "#931602" }}
            >
              Add Property
            </Button>
            <Button
              onClick={handleBack}
              //   sx={}
            >
              Back
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
