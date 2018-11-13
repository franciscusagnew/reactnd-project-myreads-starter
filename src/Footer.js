import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="app-copyright">
          <div
            style={{
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              textAlign: "center"
            }}>
            &copy; 2018 Udacity | Franciscus Agnew
          </div>
      </footer>
    )
  }
}

export default Footer