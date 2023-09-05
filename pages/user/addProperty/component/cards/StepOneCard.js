"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./StepOneCard.module.css"; // Import the CSS module

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function StepOneCard({ mainHeading, definition }) {
  return (
    <div className={styles.cardContainer}> {/* Use the generated class name */}
      <Card variant="outlined" className={styles.customCard}> {/* Use the generated class name */}
        <CardContent>
          <Typography variant="h5" component="div" className={styles.mainHeading}>
            {mainHeading}
          </Typography>
          <Typography variant="body2">{definition}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
