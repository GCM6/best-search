import { Suspense } from 'react';
import './App.css';
import route from './router';
import store from './redux/store'
import { Provider  } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <Provider store={store}>
      <Routes>
        {route.map((route, index) => 
          <Route
          key={index + route.path}
          path={route.path}
          element={<route.component/>}
          ></Route>
          )}
      </Routes>
      </Provider>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
