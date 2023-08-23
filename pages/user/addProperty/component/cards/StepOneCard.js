"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <div >
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" className="text-2xl">
            {mainHeading}
          </Typography>

          <Typography variant="body2">{definition}</Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
}
