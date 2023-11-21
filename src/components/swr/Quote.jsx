import React from "react";
import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};

const Quote = () => {
  const { data, error } = useSWR("http://api.quotable.io/random", fetcher, {
    suspense: true
  });

  if (error) {
    return <h1>There was an error! </h1>;
  }

  return (
    <div>
      <h1>{data.content}</h1>
    </div>
  );
};

export default Quote;
