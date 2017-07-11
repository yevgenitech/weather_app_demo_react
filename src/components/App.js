import React from 'react';
import axios from 'axios';
import Header from './Header';
import DataPreview from './DataPreview';

import Form from './Form';

class App extends React.Component {
  state = {
    pageHeader: 'Weather App',
    data: []
  };

  componentDidMount() {
    // ajax
    axios.get('/api/data')
        .then(response => {
          this.setState({
            data: response.data.data
          });
        })
        .catch(console.error);

  }

  componentWillUnmount() {
    // ...
  }

  findLocation = (loc) => {
    const city = this.state.data.filter((city) => city.locationName === loc);
    this.setState(prevState => ({
      data: prevState.data.concat(city)
    }));
  };

  render() {
    return (
        <div className="App main clearfix">
          <Header message={this.state.pageHeader}/>
          <div>
            {this.state.data.map((data, index) =>
                <DataPreview {...data} key={ index }/>
            )}
          </div>
          <hr/>
          <Form onSubmit={this.findLocation}/>

        </div>
    );
  }
}

export default App;