import React from 'react';
var ReactDOM = require('react-dom');

//Believe it or not, this is an F2 App_Class.  We extend it from React.Component
//so we can render a react component to the DOM
class HelloReactApp extends React.Component {
  constructor(appConfig, appContent, root) {
    super(appConfig);
    this.appConfig = appConfig;
    this.appContent = appContent;
    this.$root = $(root);
    this.state = {
          context: "initial"
        };

  }
  init() {
      ReactDOM.render(this.render(), document.getElementById(this.$root.attr('id')));
  }
  render() {
    return (
      <div>
        <h1>Hello F2 React!</h1>
        <p>This is a React component 2 rendered via F2.</p>
        <p>The instance id is {this.appConfig.instanceId}</p>
        <p>In this example we extend our F2 App_Class with React.Component.</p>
      </div>
    );
  }
}

export {HelloReactApp as default}
