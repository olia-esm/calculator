import React, { Component } from 'react';
import Key from './Key';

class Display extends Component {
    state = {
        expression: "",
        fake: 123
    }

    updateExpression = (value) => {
        if (!(value == "+" || value == "*" || value == "/" || value == "-")
            || !(this.state.expression.endsWith("+") ||
                this.state.expression.endsWith("*") ||
                this.state.expression.endsWith("/") ||
                this.state.expression.endsWith("-"))) {
            this.setState({
                expression: this.state.expression + value
            })
        }
    }
    
    showResulte = () => {
        this.setState({
            expression: eval(this.state.expression)
        })
    }
    clearExpression = () => {
        this.setState({
            expression: ""
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.expression}></input>
                <div>
                    <Key value="0" update={this.updateExpression} />
                    <Key value="1" update={this.updateExpression} />
                    <Key value="2" update={this.updateExpression} />
                    <Key value="+" update={this.updateExpression} />
                </div>
                <div>
                    <Key value="3" update={this.updateExpression} />
                    <Key value="4" update={this.updateExpression} />
                    <Key value="5" update={this.updateExpression} />
                    <Key value="-" update={this.updateExpression} />
                </div>
                <div>
                    <Key value="6" update={this.updateExpression} />
                    <Key value="7" update={this.updateExpression} />
                    <Key value="8" update={this.updateExpression} />
                    <Key value="*" update={this.updateExpression} />
                </div>
                <div>
                    <Key value="9" update={this.updateExpression} />
                    <Key value="=" update={this.showResulte} />
                    <Key value="C" update={this.clearExpression} />
                    <Key value="/" update={this.updateExpression} />
                </div>
            </div>
        )
    }
}


export default Display;