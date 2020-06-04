import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
  } from "reactstrap";

// We created a CustomModal class and it nests the Modal component that is derived from the 
// reactstrap library. We also defined three fields in the form:
// Title
// Description
// Completed

// Here’s how the CustomModal works, it receives activeItem, toggle and onSave as props.
// 1. activeItem represents the Todo item to be edited.
// 2. toggle is a function used to control the Modal’s state i.e open or close the modal.
// 3. onSave is a function that is called to save the edited values of the Todo item.
  export default class CustomModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: this.props.activeItem
      };
    }

    handleChange = e => {
      let { name, value } = e.target;
      if (e.target.type === "checkbox") {
        value = e.target.checked;
      }
      const activeItem = { ...this.state.activeItem, [name]: value };
      this.setState({ activeItem });
    };

    render() {
      const { toggle, onSave } = this.props;
      return (
        <Modal isOpen={true} toggle={toggle}>
          <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={this.state.activeItem.title}
                  onChange={this.handleChange}
                  placeholder="Enter Todo Title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={this.state.activeItem.description}
                  onChange={this.handleChange}
                  placeholder="Enter Todo description"
                />
              </FormGroup>
              <FormGroup check>
                <Label for="completed">
                  <Input
                    type="checkbox"
                    name="completed"
                    checked={this.state.activeItem.completed}
                    onChange={this.handleChange}
                  />
                  Completed
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => onSave(this.state.activeItem)}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      );
    }
  }