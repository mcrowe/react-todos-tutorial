var App = React.createClass({

  getInitialState: function() {
    return {
      todos: ['Walk the dog', 'Read a book', 'Rollerblade around the city']
    };
  },

  render: function() {
    var items = this.state.todos.map(function(todo, i) {
      return (
        ['li', {}, todo]
      );
    });

    return jsm(
      ['div', {},
        ['ul', {}, items]
      ]
    );
  }

});

React.render(
  React.createElement(App, {}),
  document.getElementById('app')
);