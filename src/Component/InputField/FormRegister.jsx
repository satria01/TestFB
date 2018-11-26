import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const data = {
  "status": true,
  "data": {
    "date": [1, 2, 3, 4, 5],
    "month": ["January", "February", "Maret"],
    "year": [2000, 2001, 2002]
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  HeaderColor: {
    background: '#3b5998'
  },
  p: {
    marginLeft: -12,
    marginRight: 20,
  },
  color: {
    color: 'white'
  },
  paper: {
    height: 540,
    width: 600,
  },

};

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      spacing: '16',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    console.log(name);
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
        <React.Fragment>
            < input
            name = "firstname"
            placeholder = "Nama depan"
            value = { this.state.firstname }
            onChange = { this.handleChange }
             />

          <input
            name="lastname"
            placeholder="Nama belakang"
            value={this.state.lastname}
            onChange={this.handleChange}
             />
          <br/>
          <input
            name="phone"
            placeholder="Nomor seluler atau email"
            value={this.state.phone}
            onChange={this.handleChange}
             />
          <br/>
          <input
            name="password"
            placeholder="Kata sandi baru"
            value={this.state.password}
            onChange={this.handleChange}
             />
          <br/>
          <select>
            {data.data.date.map(element => {
              return (
                <option value={element}>{element}</option>
              );
            })}
          </select>

          <select>
            {data.data.month.map(element =>
              <option value={element}>{element}</option>
            )}
          </select>

          <select>
            {data.data.year.map(element =>
              <option value={element}>{element}</option>
            )}
          </select>

          <p>
            Perempuan
              <input
              name='sex'
              type='radio'
            />
            Laki-Laki
              <input
              name='sex'
              type='radio'
            />
          </p>

          <button name="Daftar" type="submit" value="Submit" onClick={this.handleSubmit}>
            <span>Daftar</span>
          </button>
    </React.Fragment>
    )
  }
}

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextInput);
