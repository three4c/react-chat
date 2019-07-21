import React, { Component } from 'react'

export default class ChatBox extends Component {
    render() {
        return (
            <div className="chatbox">
                <div className="chatbox__username-wrapper">
                    <input name="user_name" type="user_name" placeholder="Name" className="chatbox__username" onChange={this.props.onTextChange} />
                </div>
                <input name="textarea" placeholder="Messages" rows="1" className="chatbox__textarea" onChange={this.props.onTextChange} />
                <button className="chatbox__button" onClick={this.props.onButtonClick}>送信</button>
            </div>
        );
    }
}
