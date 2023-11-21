import { useQuery } from "@tanstack/react-query";
import React from "react";
import getQuote from "./getQuoteApi";

const Quote = () => {
  const { data } = useQuery({
    queryKey: ["quote"],
    queryFn: () => getQuote(),
  });

  console.log(data);

  return (
    <div>
      <h1>{data?.content}</h1>
    </div>
  );
};

export default Quote;
