import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import BookDetailsCard from "../components/bookDetailsCard/BookDetailsCard";

export default function BookDetails({ img, title, price }) {
  const { bookId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookDetails, setBookDetails] = useState([]);

  const getBookDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://epibooks.onrender.com/${bookId}`);
      const data = await response.json();
      setBookDetails(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      if (error) setError(error);
    }
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  return (
    <>
      {error && <h1>Errore nel caricare i dettagli del libro</h1>}
      {!error && isLoading && <h1>Caricamento in corso...</h1>}
      {!error && !isLoading && (
        <BookDetailsCard
          img={bookDetails[0].img}
          title={bookDetails[0].title}
          price={bookDetails[0].price}
          asin={bookDetails[0].asin}
        />
      )}
    </>
  );    
}
