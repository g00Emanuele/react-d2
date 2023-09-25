import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PostProvider } from "../../contexts/BookContext";
import { useContext, useState } from "react";

export default function AddComment() {
  const { isSelected } = useContext(PostProvider);
  const [myComment, setMyComment] = useState("");
  const [myRate, setMyRate] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addComment = async () => {  
    try {
      setIsLoading(true)
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`,{
        method: 'POST',
        body: JSON.stringify({
          rate: myRate,
          comment: myComment,
          elementId: isSelected
        }),
        headers:{
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTU2MjM4NjEsImV4cCI6MTY5NjgzMzQ2MX0.Ctp7yKd6QUqD4R_OFnAaTQyc2x7i1vVpvkoLcTaCNUU"
        }
      })
      const data = await response.json()
      console.log(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  };
  return (
    <>
      {error && <h1>Errore nell'invio del form</h1>}
      {!error && isLoading && <h1>sta caricando...</h1>}
      {!error && !isLoading && (
        <Form className="bg-primary p-3">
          <Form.Group className="mb-3">
            <Form.Label>Scrivi la tua recensione</Form.Label>
            <Form.Control
              type="text"
              value={myComment}
              onChange={(e) => setMyComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Voto da 1 a 5</Form.Label>
            <Form.Control
              type="text"
              value={myRate}
              onChange={(e) => setMyRate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Scrivi la tua email</Form.Label>
            <Form.Control
              type="text"
              value={myEmail}
              onChange={(e) => setMyEmail(e.target.value)}
            />
          </Form.Group>
          <Button onClick={addComment} variant="light" >
            Invia
          </Button>
        </Form>
      )}
    </>
  );
}
