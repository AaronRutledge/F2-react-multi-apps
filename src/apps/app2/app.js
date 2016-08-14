// This is the entry to our app and acts as a top level container.  This
//could all be done just as easily within appClass, but wanted to demonstrate
//ES2015 module imports and I think makes for a nice separation between app stuff
//and F2 implementation details

require('./app.css');
import HelloReactApp from './appClass.js';

F2.Apps["com_openf2_examples_react_helloreact2"]=HelloReactApp;
