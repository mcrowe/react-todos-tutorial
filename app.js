var App = React.createClass({

  getInitialState: function() {
    return {
      todos: ['Walk the dog', 'Read a book', 'Rollerblade around the city']
    };
  },

  addTodo: function() {
    var input = React.findDOMNode(this.refs.newTodo);
    var title = input.value;
    input.value = '';
    input.focus();

    this.state.todos.push(title);
    this.setState({todos: this.state.todos});
  },

  render: function() {
    var items = this.state.todos.map(function(todo, i) {
      return (
        ['li', {}, todo]
      );
    });

    return jsm(
      ['div', {}, [
        ['ul', {}, items],
        ['input', {type: 'text', ref: 'newTodo', placeholder: 'What needs to be done?'}],
        ['button', {onClick: this.addTodo}, 'Add Todo'],
      ]]
    );
  }

});

React.render(
  React.createElement(App, {}),
  document.getElementById('app')
);