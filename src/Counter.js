import React from 'react'



class Counter extends React.Component {
    state = (
        JSON.parse(localStorage.getItem('Counter-state')) ||
        { number: this.props.startNumber }
    )

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage() {
        localStorage.setItem('Counter-state', JSON.stringify(this.state))
    }

    PlusOneHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    MinusOneHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }

    PlusFiveHandler = () => {
        this.setState({ number: this.state.number + 5 })
    }

    MinusFiveHandler = () => {
        this.setState({ number: this.state.number - 5 })
    }

    resetHandler = () => {
        this.setState({ number: 0 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.PlusOneHandler}
                >
                    +1
                </button>

                <button
                    onClick={this.MinusOneHandler}
                >
                    -1
                </button>
                <button
                    onClick={this.PlusFiveHandler}
                >
                    +5
                </button>
                <button
                    onClick={this.MinusFiveHandler}
                >
                    -5
                </button>

                <button
                    onClick={this.resetHandler}
                >
                    0
                </button>

            </div>
        )
    }
}



export default Counter