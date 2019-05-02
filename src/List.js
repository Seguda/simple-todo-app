import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input 
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
            </div>
        );
    }
}

export default List;