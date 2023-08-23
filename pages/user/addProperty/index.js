"use client";

import * as React from "react";
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
import Amenities from "@/pages/property/[_id]/Amenities";
import property from '@/DummyData/data';


const steps = [
  {
    label: "Whats your plan",
    component: (
      <div style={{ display: "flex" }} className="mb-3 mt-2">
        <div className="p-4 border-2 border-button bg-white rounded-lg">
          <StepOneCard
            mainHeading="Sell or Rent Your Home With MORES Expert"
            definition="Lorem ipsum dolor sit amet consectetur. Et ut orci morbi Vulputate pretium sem. Justo sollicitudin lacus interdum Sit in sollicitudin vestibulum ultricies duis. Malesuada fusce sit lorem aliquam."
          />
        </div>
        <div className="p-4 border-2 border-primary bg-white rounded-lg ml-5">
          <StepOneCard
            mainHeading="Sell or Rent Your Home Directly"
            definition="Lorem ipsum dolor sit amet consectetur. Et ut orci morbi Vulputate pretium sem. Justo sollicitudin lacus interdum Sit in sollicitudin vestibulum ultricies duis. Malesuada fusce sit lorem aliquam."
          />
        </div>
      </div>
    ),
  },
  {
    label: "Property Details",

    component: <PropertyDetailsForm />,
  },

  {
    label: "Additional Details",
    component: <AdditionalDetail />,
  },

  {
    label: "Amenities",
    component: <Amenities props={property} />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const buttonStyle = {
    backgroundColor: "#931602", // Replace with your desired button color
    "&:hover": {
      backgroundColor: "#931602", // Replace with your desired hover color
    },
  };
  return (
    <div className="bg-white">
      {" "}
      {/* Apply Tailwind classes */}
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 3 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {step.component ? step.component : ""}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      style={buttonStyle} // Use inline style for button
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={buttonStyle.color}
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
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
