'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var ClientApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        "Welcome Client Bundle!"
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(event) { 
  React.render(<ClientApp />, document.body); // jshint ignore:line
});

module.exports = ClientApp;
