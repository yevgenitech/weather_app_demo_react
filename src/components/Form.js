import React from 'react';
import axios from 'axios';


class Form extends React.Component {
  state = {locationName: '', data: []}

  onFormSubmit = (e) => {
    e.preventDefault();
    // ajax ...
    axios.get('/api/data/')
        .then(response => {
          for (let i = 0; i < response.data.data.length; i++) {
            if (response.data.data[i].locationName == this.state.locationName) {
              this.props.onSubmit((response.data.data[i].locationName));

            }
          }
        })
        .catch(console.error);
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text"
                 value={this.state.locationName}
                 onChange={(e) => this.setState({locationName: e.target.value})}
                 placeholder="Location Name"
          />
          <button type="submit">Search Location</button>

        </form>


    );
  }

}

export default Form;