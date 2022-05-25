import { Home } from './views/Home';
import { Auth } from './views/Auth';
import { Watch } from './views/Watch';
import { Upload } from './views/Upload';
import { Profile } from './views/Profile';
import { Header } from './components/Header';
import { EditMedia } from './views/EditUpload';
import { Route, Switch } from 'react-router-dom';
import { EditProfile } from './views/EditProfile';
import { WatchHistory } from './views/WatchHistory';
import { DataProvider } from './context/DataProvider';
import { UserProvider } from './context/UserProvider';

export default function App() {
  return (
    <>
      <Header />
      <UserProvider>
        <DataProvider>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
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
              <EditMedia />
            </Route>
            <Route path="profile/history">
              <WatchHistory />
            </Route>
          </Switch>
        </DataProvider>
      </UserProvider>
    </>
  );
}
