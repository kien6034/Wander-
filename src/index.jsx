import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import firebase from "firebase/app";
import { FirebaseAppProvider } from "reactfire";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxM2zv2IXfqFMpeboXHBCHGfxO3aY1Guo",
  authDomain: "soict-hackathon.firebaseapp.com",
  projectId: "soict-hackathon",
  storageBucket: "soict-hackathon.appspot.com",
  messagingSenderId: "748510673310",
  appId: "1:748510673310:web:77e4c455f6bc7205803e8f",
  measurementId: "G-98GC2E5J7K",
};

// const history = createBrowserHistory();

ReactDOM.render(
  <React.Fragment key="index">
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </Provider>
  </React.Fragment>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
