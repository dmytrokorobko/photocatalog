import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PhotoItem } from './components/PhotoItem';
import { PhotoList } from './components/PhotoList';

function App() {
  const baseUrl = 'https://pixabay.com/api/?key=38293521-ba0e38f874daa0c76e1c0704f';

  const [images, setImages] = useState([]);
  const [caption, setCaption] = useState('Popular images');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');

  function handleSelectedCategory(e) {
    setCategory(e.target.value);
    console.log(category);
    
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
    console.log(category);
  }

  function handleSelectedSort(e) {
    setSort(e.target.value);
    console.log(category);
  }

  useEffect(()=> {
    setCaption(category + " " + search + " " + sort + ' images')
    console.log(caption);
    fetch(baseUrl + '&q=' + search + '&category=' + category + '&order=' + sort)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Response isn\'t ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.hits);
      setImages(data.hits);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [category, search, sort]);

  return (
    <div className="App">
      <Header />
      <PhotoList images={images} caption={caption} category={category} setCategory={handleSelectedCategory} search={search} setSearch={handleChangeSearch} sort={sort} setSort={handleSelectedSort} />
      <PhotoItem />
      <Footer />
    </div>
  );
}

export default App;
