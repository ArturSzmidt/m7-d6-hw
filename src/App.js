import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import Favourites from './components/Favourites';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore, persistor } from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainSearch} />
            <Route exact path="/favourites" component={Favourites} />
            <Route
              exact
              path="/:companyName"
              component={CompanySearchResults}
            />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
