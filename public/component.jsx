/** @jsx React.DOM */

define(function(require, exports, module) {
  var React = require('react');
  var Component = React.createClass({
    getInitialState: function() {
      return {
        count: 0
      };
    },

    componentDidMount: function() {

    },

    render: function() {
      return (
        <h1>
          Hello World!
        </h1>
      );
    }
  });

  return module.exports = Component;
});
