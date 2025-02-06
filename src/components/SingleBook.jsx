import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <Col xs={12} md={4}>
        <Card
          className={
            this.state.selected === false
              ? "book-cover d-flex flex-column"
              : "book-cover d-flex flex-column border-danger"
          }
        >
          <Card.Img
            variant="top"
            src={this.props.urlImg}
            onClick={() => {
              if (this.state.selected === false) {
                this.setState({ selected: true });
              } else {
                this.setState({ selected: false });
              }
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
