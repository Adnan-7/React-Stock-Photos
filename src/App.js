import axios from 'axios';
import { useEffect, useState } from 'react';

const mainUrl = 'https://api.unsplash.com/photos/';

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url = `${mainUrl}?client_id=UNnmOmMMFOggg3zg_xLVMr4WxnM1nbLSpmQVDoTXVbg`;
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
