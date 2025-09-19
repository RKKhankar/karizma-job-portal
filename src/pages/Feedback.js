import React from "react";
import { useParams } from "react-router-dom";

const Feedback = () => {
  const { type } = useParams();
  return <h1>Thank you for your feedback: {type} 🙏</h1>;
};

export default Feedback;
