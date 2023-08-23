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

export default function StepThreeCard({ imageSrc, definition, buttonLabel }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh", // Adjust this value as needed
        }}
      >
        <Card variant="outlined">
          <CardContent>
            {/* Image */}
            <img src={imageSrc} alt="Main Image" />

            {/* Definition */}
            <Typography variant="body2">{definition}</Typography>
          </CardContent>
          <CardActions>
            {/* Button */}
            <Button size="small">{buttonLabel}</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
