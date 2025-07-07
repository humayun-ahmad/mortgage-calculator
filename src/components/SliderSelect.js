import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  console.log(data);
  return (
    <div>
      <SliderComponent
        unit={"$"}
        amount={data.homeValue}
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={bank_limit}
        label={"Home Value"}
        step={100}
        onChange={(e, value) => {
          setData({
            // spread operator
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
          });
        }}
      />
      <SliderComponent
        unit={"$"}
        amount={data.downPayment}
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        label={"Down Payment"}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value,
          });
        }}
      />
      <SliderComponent
        unit={"$"}
        amount={data.loanAmount}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={0}
        max={data.homeValue}
        label={"Loan Amount"}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,
          });
        }}
      />
      <SliderComponent
        unit={"%"}
        amount={data.interestRate}
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        label={"Interest Rate"}
        step={0.5}
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}
      />
    </div>
  );
};

export default SliderSelect;
