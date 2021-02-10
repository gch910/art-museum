import { useParams } from 'react-router-dom';

const GalleryView = ({ galleries }) => {
    const { id } = useParams();
    const gallery = galleries.find((gallery) => Number(gallery.id) === Number(id))

    return (
        <h1>{gallery.name}</h1>
    );
}

export default GalleryView;