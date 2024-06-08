import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PhotoItem } from './components/PhotoItem';
import { PhotoList } from './components/PhotoList';


function App() {
  const baseUrl = 'https://pixabay.com/api/?key=38293521-ba0e38f874daa0c76e1c0704f';

  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');

  useEffect(()=> {
    fetch(baseUrl + '&q=' + search + '&category=' + category + '&order=' + sort)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Response isn\'t ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.hits);
      //setImages(data.hits);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [category, search, sort]);

  return (
    <div className="App">
      <Header />
      <PhotoList  />
      <PhotoItem />
      <Footer />
    </div>
  );
}

export default App;
