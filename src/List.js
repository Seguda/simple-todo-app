import React, { Component } from "react";
import Items from "./Items";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
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

        console.log(this.state.items);

        e.preventDefault();

    }
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this.inputElement = a} 
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
                <Items entries={this.state.items} />
          </div>
        );
    }
}

export default List;