// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { Clerk, ClerkProvider } from '@clerk/clerk-js';

// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { ClerkProvider } from '@clerk/clerk-react';


// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <App />npm install @clerk/clerk-react
//     </ClerkProvider>
//   </React.StrictMode>
// );

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { ClerkProvider } from '@clerk/clerk-react'

// // Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Add your Clerk Publishable Key to the .env.local file')
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>,
// )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { ClerkProvider } from "@clerk/clerk-react";

// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!clerkPubKey) {
//   throw new Error("Missing Publishable Key");
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>
// );