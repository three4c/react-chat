import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                <p className="message__user">{this.props.message.user_name}</p>
                <p className="message__text">{this.props.message.text}</p>
            </div>
        )
    }
}
