import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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

class Facebook extends React.Component {
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
      <div>
        <div className={classes.root}>
          <AppBar position="static" className={classes.HeaderColor} classes={{ root: classes.color}}>
            <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              Facebook
              </IconButton>
            <div className={classes.grow}> </div>
            <div>
              Email atau Telepon
                <input name="email" value={this.state.email} onChange={this.handleChange} className={classes.input} />
              Kata Sandi
                <input name="pass" value={this.state.pass} onChange={this.handleChange} />
              <button name="Masuk" type="submit" value="Submit" onClick={this.handleSubmit}>
                <span>Masuk</span>
              </button>
            </div>
          </Toolbar>
          </AppBar>
      </div>

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

      <input
        name="phone"
        placeholder="Nomor seluler atau email"
        value={this.state.phone}
        onChange={this.handleChange}
      />

      <input
        name="password"
        placeholder="Kata sandi baru"
        value={this.state.password}
        onChange={this.handleChange}
      />

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

      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={0}>
            {[0, 1].map(element => (
              <Grid key={element} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      </div >
    );
  }

}

Facebook.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Facebook);
