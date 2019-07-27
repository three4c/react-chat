import React, { Component } from 'react';
import { firebaseDb } from './firebase';
import './App.scss';
import Message from './components/Message';
import ChatBox from './components/ChatBox';
import Hoge from './components/Hoge';

const messageRef = firebaseDb.ref('messages');

class App extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.fuga = this.fuga.bind(this);
    this.state = {
      text: '',
      user_name: '',
      messages: [],
      hoge: true
    }
  }

  onTextChange(e) {
    if (e.target.name === 'user_name') {
      this.setState({
        'user_name': e.target.value,
      });
    } else if (e.target.name === 'textarea') {
      this.setState({
        'text': e.target.value,
      });
    }
  }

  onButtonClick(e) {
    if (this.state.user_name === '') {
      alert('user_name empty');
      return;
    } else if (this.state.text === '') {
      alert('text empty');
      return;
    }

    messageRef.push({
      "user_name": this.state.user_name,
      "text": this.state.text
    })
    document.querySelector('.chatbox__username').value = '';
    document.querySelector('.chatbox__textarea').value = '';
  }

  componentWillMount() {
    messageRef.on('child_added', (snapshot) => {
      const m = snapshot.val();
      let msgs = this.state.messages;

      msgs.push({
        'text': m.text,
        'user_name': m.user_name
      })

      this.setState({
        messages: msgs
      });
    })
  }

  fuga(state) {
    setTimeout(() => {
      this.setState({
        hoge: state
      })
      console.log("aaaaaaa");
    }, 2000)
  }

  fuga02(state) {
    this.setState({
      hoge: state
    })
  }

  render() {
    if (this.state.messages.length === 0) {
      console.log("何もないよ");
    }
    console.log(this);
    return (
      <div className="App">
        <div className="message__list">
          {this.state.messages.map((m, i) => {
            return <Message key={i} message={m} />
          })}
        </div>
        <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
        {this.state.hoge && <Hoge fuga={this.fuga} />}
        <button onClick={() => this.fuga02(true)}>hoge復活ボタン</button>
      </div>
    )
  }
}

export default App;
