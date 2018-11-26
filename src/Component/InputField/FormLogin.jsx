import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


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

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      spacing: '16',
    };
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
     </div >
    );
  }
}

FormLogin.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(FormLogin);