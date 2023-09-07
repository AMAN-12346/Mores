import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import mscore from "../../../assets/moreIcon/m-score.png";
import Image from "next/image";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box sx={{ width: 200 }} style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginLeft: "10px",
        }}
      >
        <div>
          {/* <span className='font-semibold'>M Score</span> */}
          <div className="flex bg-searchPageText2 rounded-2xl p-1 items-center align-middle gap-2">
            <Image className="m-1 h-5 w-4 text-slate-500" src={mscore} alt="icon" />
            <h1 className="font-semibold text-sm">Score</h1>
          </div>
        </div>
        <div className="pt-1">
          <span>{value1[0]}</span>
          <span style={{ margin: "0 5px" }}> - </span>
          <span>{value1[1]}</span>
        </div>
      </div>
      <Slider
        sx={{
          color: "rgba(1, 129, 145, 1)", // Change the color of the selected part
          "& .MuiSlider-rail": {
            backgroundColor: "rgba(1, 129, 145, 0.37)", // Change the color of the unselected part
          },
        }}
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        // valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}
