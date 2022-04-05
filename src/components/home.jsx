import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { CardGroup } from "react-bootstrap";

import {
  GetName,
  GetAllProducts,
  GetSoldItems,
  GetCategories,
  GetCategoryCount,
} from "../services/fakeProducts";
import PieChart from "./common/pieChart";

const SoldProducts = () => {
  return (
    <React.Fragment>
      <Card border="dark" style={{ width: "30%" }}>
        <Card.Body>
          <Card.Title>Recently Sold Products</Card.Title>
          <Card.Text>
            {Array.prototype.reverse
              .call(GetSoldItems())
              .slice(0, 5)
              .map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <FontAwesomeIcon icon={faBox} />
                    <li
                      style={{
                        listStyle: "none",
                        display: "inline",
                        marginLeft: "5px",
                      }}
                    >
                      {GetName(item.id)}
                    </li>
                    <br />
                  </React.Fragment>
                );
              })}
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

const AddedProducts = () => {
  return (
    <React.Fragment>
      <Card border="dark" style={{ width: "30%" }}>
        <Card.Body>
          <Card.Title>Recently Added Products</Card.Title>
          <Card.Text>
            {Array.prototype.reverse
              .call(GetAllProducts())
              .slice(0, 5)
              .map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <FontAwesomeIcon icon={faBox} />
                    <li
                      style={{
                        listStyle: "none",
                        display: "inline",
                        marginLeft: "5px",
                      }}
                    >
                      {GetName(item.id)}
                    </li>
                    <br />
                  </React.Fragment>
                );
              })}
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

class Home extends Component {
  state = {
    soldCount: Object.keys(GetSoldItems()).length,
    unsoldCount:
      Object.keys(GetAllProducts()).length - Object.keys(GetSoldItems()).length,
    categories: GetCategories(),
    categoriesCount: GetCategories().map((e) => GetCategoryCount(e)),
  };
  render() {
    return (
      <React.Fragment>
        <Container style={{ position: "absolute" }}>
          <Row>
            <Col sm={4}>
              <PieChart
                title={"Summery"}
                labels={["Sold", "Unsold"]}
                series={[this.state.soldCount, this.state.unsoldCount]}
                pieWidth={"80%"}
              />
            </Col>
            <Col sm={4}>
              <PieChart
                title={"Categories"}
                labels={this.state.categories}
                series={this.state.categoriesCount}
                pieWidth={"80%"}
              />
            </Col>
          </Row>
        </Container>
        <div style={{ marginLeft: "60%", position: "absolute" }}>
          <div style={{ width: "250%" }}>
            <SoldProducts />
          </div>
          <div style={{ width: "250%", paddingTop: "10px" }}>
            <AddedProducts />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
