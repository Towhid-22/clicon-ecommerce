"use client";
import React from "react";
import Container from "./Container";
// import RangeSlider from "react-range-slider-input";
// import "react-range-slider-input/dist/style.css";
import * as React from "react";
import { Range } from "react-range";

const SuperSimple: React.FC = () => {
  const [values, setValues] = React.useState([50]);
  return (
    <Range
      label="Select your value"
      step={0.1}
      min={0}
      max={100}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            backgroundColor: "#999",
          }}
        />
      )}
    />
  );
};
const PriceRange = () => {
  return (
    <div className="py-10">
      <Container>
        {/* <RangeSlider /> */}
      </Container>
    </div>
  );
};

export default PriceRange;
