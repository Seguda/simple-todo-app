import React, { Component } from "react";
import Items from "./Items";
import "./List.css";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this.inputElement.value !== "") {
            let newItem = {
                text: this.inputElement.value,
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this.inputElement.value = "";
        }

        e.preventDefault();

    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    render() {
        return (
          <div className="todoList">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input
                  ref={a => (this.inputElement = a)}
                  type="text"
                  name="todo_input_area"
                  id="todo-input-area"
                  placeholder="Add a todo here"
                  size="30"
                  required
                />
                <button type="submit">Add</button>
              </form>
            </div>
            <Items entries={this.state.items} delete={this.deleteItem}/>
          </div>
        );
    }
}

export default List;