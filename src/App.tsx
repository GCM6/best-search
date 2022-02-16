import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import route from './router';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
const useRoute = () => {
  return useRoutes(route);
};
function App() {
  return (
    <Suspense fallback={<div>top</div>}>
      <Routes>
        {route.map((route, index) => (
          <Route
            key={index + route.path}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
