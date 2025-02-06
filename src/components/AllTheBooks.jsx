import { Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return <SingleBook key={book.asin} urlImg={book.img} cardTitle={book.title} />;
      })}
    </Row>
  );
};

export default AllTheBooks;
