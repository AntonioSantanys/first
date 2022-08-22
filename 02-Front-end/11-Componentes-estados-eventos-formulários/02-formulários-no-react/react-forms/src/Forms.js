import React from "react";

class Forms extends React.Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            nome: ''
        }
    }

    // Function that stores the value in the state
    handleChange(event) {
        this.setState({ nome: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>Estados e React: Forms</h1>
                <form className="form">
                    <label>
                        Digite seu nome:
                        <input name="name" value={this.state.nome} onChange={this.handleChange}></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default Forms;