(function () {
  var compile = function (item) {

    var compileChildren = function (children) {
      return children.map(function (child) {
        if (Array.isArray(child)) {
          if (child.length === 0) {
            return child;
          } else if ( Array.isArray(child[0]) ) {
            return child.map(compile);
          } else {
            return compile(child);
          }
        }

        return child;
      });
    };

    var type = item[0];
    var props = item[1];
    var children;

    if (props != null && props.constructor === Object) {
      children = item.slice(2);
    } else {
      props = {};
      children = item.slice(1);
    }

    children = compileChildren(children);

    return React.createElement.apply(React, [type, props].concat(children));
  };

  window.jsm = compile;
})();