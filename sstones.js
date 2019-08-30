'use strict';

var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var Link = window.ReactRouter.Link;

function BasicExample() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/about" },
            "About"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/topics" },
            "Topics"
          )
        )
      ),
      React.createElement("hr", null),
      React.createElement(Route, { exact: true, path: "/", component: Home }),
      React.createElement(Route, { path: "/about", component: About }),
      React.createElement(Route, { path: "/topics", component: Topics })
    )
  );
}

function Home() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Home"
    )
  );
}

function About() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "About"
    )
  );
}

function Topics(_ref) {
  var match = _ref.match;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Topics"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: match.url + "/rendering" },
          "Rendering with React"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: match.url + "/components" },
          "Components"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: match.url + "/props-v-state" },
          "Props v. State"
        )
      )
    ),
    React.createElement(Route, { path: match.path + "/:topicId", component: Topic }),
    React.createElement(Route, {
      exact: true,
      path: match.path,
      render: function render() {
        return React.createElement(
          "h3",
          null,
          "Please select a topic."
        );
      }
    })
  );
}

function Topic(_ref2) {
  var match = _ref2.match;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      match.params.topicId
    )
  );
}

// render the page
ReactDOM.render(React.createElement(BasicExample, null), document.getElementById('root'));

