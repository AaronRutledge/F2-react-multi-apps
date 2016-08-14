require('../../node_modules/bootstrap/dist/css/bootstrap.css');

const ready = require('document-ready-promise')

var _appConfig = [
  {
    appId: 'com_openf2_examples_react_helloreact1',
    manifestUrl: 'http://localhost:8080/manifests/app1.js',
    context: {
      name: "Bingus Billy"
    }
  },
  {
    appId: 'com_openf2_examples_react_helloreact2',
    manifestUrl: 'http://localhost:8080/manifests/app2.js',
  }
];

//on document ready...
ready().then(function() {
  F2.init();
  F2.registerApps(_appConfig);
})
