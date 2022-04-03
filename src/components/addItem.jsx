import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

import { getCategories, getKeys } from "../services/fakeItems";
import { capitalizeFirstLetter } from "./utils/strings";

class AddItem extends Component {
  state = {
    selectedCategory: "Select..",
    dataObject: {},
  };

  onChangeCategory = (event) => {
    const selectedCategory = event.target.value;
    const keys = getKeys(selectedCategory);
    let dataObject = {};

    for (var key in keys) {
      dataObject[keys[key]] = "";
    }

    this.setState({ selectedCategory, dataObject });
  };

  onChangeInput = (event, key) => {
    let dataObject = this.state.dataObject;
    dataObject[key] = event.target.value;

    this.setState({ dataObject });
  };

  render() {
    return (
      <Form>
        <Form.Group as={Col} className="mb-3">
          <Form.Label column sm={4}>
            Category
          </Form.Label>
          <Form.Control
            as="select"
            defaultValue={this.state.selectedCategory}
            onChange={this.onChangeCategory}
          >
            {getCategories().map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Form.Control>
        </Form.Group>

        {this.state.selectedCategory === "Select.." ? (
          <p>Please select a category for add details</p>
        ) : (
          <React.Fragment>
            {getKeys(this.state.selectedCategory).map((item) => (
              <Form.Group key={item} as={Row} className="mb-3">
                <Form.Label column>{capitalizeFirstLetter(item)}</Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => this.onChangeInput(e, item)}
                    placeholder="Enter text here"
                  />
                </Col>
              </Form.Group>
            ))}
          </React.Fragment>
        )}
      </Form>
    );
  }
}

export default AddItem;
