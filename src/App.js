import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Switch, NavLink, useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();
  return (
    <div className='pageWrapper'>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path={`/galleries/${id}`}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>


  );
}

export default App;
