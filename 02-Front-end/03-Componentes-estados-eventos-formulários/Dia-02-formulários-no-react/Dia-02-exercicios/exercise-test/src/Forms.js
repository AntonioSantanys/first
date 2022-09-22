import React from "react";

class Forms extends React.Component {

    constructor() {
        super()

     
        this.state = {
            name: '',
            password: '',
            select: '',
        }
    }

    handleInputs(event) {
      this.setState({
        name: event.target.value
      })
    }

    render() {

        return (
            <div>
                <form className="form">
                    <label>
                        {/* Error */}
                        Seu nome:
                       {/*  <input name="name" value={this.state.name} onChange={this.handleInputName}></input> */}
                       <textarea name="text" value={this.state.name} onChange={this.handleInputName}></textarea>
                    </label>
                    <label>
                        Sua senha:
                        <input name="password"></input>
                    </label>
                    <select>
                        <option>Água</option>
                        <option>Terra</option>
                        <option>Fogo</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Forms;