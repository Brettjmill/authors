import { Redirect, Router } from '@reach/router';

import './App.css';

import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div style = {{ width: '80%', margin: '0 auto' }}>
      <Router>
        <Redirect from = '/' to = '/authors' noThrow = 'true' />
        <AllAuthors path = '/authors' />
        <NewAuthor path = '/authors/new' />
        <EditAuthor path = '/authors/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
