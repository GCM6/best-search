import { Suspense } from 'react';
import './App.css';
import route from './router';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <Routes>
        {route.map((route, index) => 
          <Route
            key={index + route.path}
            path={route.path}
            element={<route.component/>}
          ></Route>
        )}
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
