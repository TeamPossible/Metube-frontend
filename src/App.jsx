import { Route, Switch } from 'react-router-dom';
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import { Upload } from './views/Upload';
import { Watch } from './views/Watch';
import { WatchHistory } from './views/WatchHistory';
import { EditProfile } from './views/EditProfile';
import { EditUpload } from './views/EditUpload';

export default function App() {
  return (
    <>
      <Header />
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
            <EditUpload />
          </Route>
          <Route path="profile/history">
            <WatchHistory />
          </Route>
        </Switch>
      </DataProvider>
    </>
  );
}
