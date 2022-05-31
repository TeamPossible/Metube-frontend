import { Home } from './views/Home';
import { Auth } from './views/Auth';
import { Watch } from './views/Watch';
import { Upload } from './views/Upload';
import { Profile } from './views/Profile';
import { Header } from './components/Header';
import { EditMedia } from './views/EditUpload';
import { Route, Switch } from 'react-router-dom';
import { EditProfile } from './views/EditProfile';
import { CheckAuth } from './components/checkAuth';
import { WatchHistory } from './views/WatchHistory';
import { DataProvider } from './context/DataProvider';
import { UserProvider } from './context/UserProvider';
import { AuthProvider } from './context/AuthProvider';
import { LoadingProvider } from './context/LoadingProvider';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <UserProvider>
          <LoadingProvider>
            <DataProvider>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/auth">
                  <Auth />
                </Route>
                <CheckAuth exact path="/watch/:id">
                  <Watch />
                </CheckAuth>
                <CheckAuth exact path="/profile/history">
                  <WatchHistory />
                </CheckAuth>
                <Route exact path="/profile/:id">
                  <Profile />
                </Route>
                <Route exact path="/profile/:id/edit">
                  <EditProfile />
                </Route>
                <CheckAuth exact path="/upload">
                  <Upload />
                </CheckAuth>
                <Route exact path="/upload/edit/:id">
                  <EditMedia />
                </Route>
              </Switch>
            </DataProvider>
          </LoadingProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
}
