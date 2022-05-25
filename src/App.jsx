import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/profile/:id/edit">
            <EditProfile />
          </Route>
          <Route path="/upload/">
            <Upload />
          </Route>
          <Route path="/upload/edit/:id">
            <EditUpload />
          </Route>
          <Route path="profile/history">
            <EditUpload />
          </Route>
        </Switch>
      </DataProvider>
    </>
  );
}
