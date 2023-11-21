import axios from "axios";
import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("http://api.quotable.io/random");
      setQuote(res.data);
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
