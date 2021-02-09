import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries)
    return (
          <nav>
              <h1>Gallery Navigation</h1>
              <ul>
                  <NavLink exact to='/'>Home</NavLink>
                  {galleries.map(gallery => (
                      <li key={gallery.id}>
                        <NavLink to={`/galleries/${gallery.id}`}>
                            {gallery.name}
                        </NavLink>
                      </li>
                  ))}
               </ul>
          </nav>

    
    )
}



export default GalleryNavigation