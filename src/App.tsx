import React from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';

class App extends React.Component {
  state = {
    count: 0,
  };

  handleClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClickMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount(): void {
    console.log('component did mount');
  }
  componentDidUpdate(): void {
    console.log('component did update');
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
