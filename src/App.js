import axios from 'axios';
import { useEffect, useState } from 'react';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = 'https://api.unsplash.com/photos/';
const searchUrl = 'https://api.unsplash.com/search/photos/';

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url = `${mainUrl}${clientID}`;

    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className='App'>
      <h2>Stock Photos Starter...</h2>
    </div>
  );
}

export default App;
