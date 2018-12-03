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

    plusOneHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    minusOneHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }

    plusFiveHandler = () => {
        this.setState({ number: this.state.number + 5 })
    }

    minusFiveHandler = () => {
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
                    onClick={this.plusOneHandler}
                >
                    +1
                </button>

                <button
                    onClick={this.minusOneHandler}
                >
                    -1
                </button>
                <button
                    onClick={this.plusFiveHandler}
                >
                    +5
                </button>
                <button
                    onClick={this.minusFiveHandler}
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