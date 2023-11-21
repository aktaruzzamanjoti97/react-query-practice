import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("http://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h1>{quote?.content}</h1>
    </div>
  );
};

export default Quote;
