import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import './App.css';
import Dice from './Dice';
import PlayerName from './PlayerName';
import Comments from './Comments';
import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/users


function App() {
  const [state, setState] = useState([])

  const columns = React.useMemo(
    () => [
      {
        Header: 'IDs',
        columns: [
          {
            Header: 'Post ID',
            accessor: 'postId',
          },
          {
            Header: 'ID',
            accessor: 'ID',
          },
        ],
      },
      {
        Header: 'User',
        columns: [
          {
            Header: 'NAME',
            accessor: 'name',
          },
          {
            Header: 'eMail',
            accessor: 'email',
          },
        ],
      },
      {
        Header: 'Content',
        columns: [
          {
            Header: 'contentns',
            accessor: 'body',
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    if (!state.data) {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setState({ data }));
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/comments">
          <Comments columns={columns} data={state.data || []} />
        </Route>
        <Route>
          <div className="App">
            <header className="App-header">
              <h2>Welcome to online cassino</h2>
                <table>
                  <tr>
                    <td>
                      <Dice />
                    </td>
                    <td>
                      <PlayerName />
                    </td>
                  </tr>
                </table>
            </header>
          </div>
          <footer>
            See <Link to="/comments">comments</Link>
          </footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
