import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import filterOptions from "../AccordionFilters/const.json";
import MainAccordion from "./MainAccordion";

export default function BasicAccordion() {
  return (
    <div className="me-3">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-3xl font-bold font-sans">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <div className="max-lg:flex justify-between max-md:flex-col">
              {filterOptions.map((option, index) => (
                <div className="">
                  <MainAccordion
                    key={index}
                    hname={option.heading}
                    htype={option.key}
                    filters={option.filters}
                  />
                </div>
              ))}
            </div> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
