var App = React.createClass({

  render: function() {
    return jsm(
      ['div', {}, 'Hello from React!']
    );
  }

});

React.render(
  React.createElement(App, {}),
  document.getElementById('app')
);