import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PhotoItem } from './components/PhotoItem';
import { PhotoList } from './components/PhotoList';
import { makeCaption } from './components/helper';

function App() {
  const baseUrl = 'https://pixabay.com/api/?key=38293521-ba0e38f874daa0c76e1c0704f';

  const [images, setImages] = useState([]);
  const [caption, setCaption] = useState('Popular images');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');
  const [image, setImage] = useState('');

  function handleSelectedCategory(e) {
    setCategory(e.target.value);
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSelectedSort(e) {
    setSort(e.target.value);
  }

  useEffect(()=> {
    setCaption(makeCaption(category, search, sort));
    fetch(baseUrl + '&q=' + search + '&category=' + category + '&order=' + sort)
    .then((response) => {
      if (!response.ok) throw new Error('Response isn\'t ok');
      return response.json();
    })
    .then(data => {
      setImages(data.hits);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [category, search, sort, caption]);

  function handleImageClick(e) {
    const photolistitem = e.currentTarget;
    const key = photolistitem.getAttribute('data-key');
    fetch(baseUrl + '&id=' + key)
    .then(response => {
      if (!response) throw new Error('Response isn\'t ok');
      return response.json();
    })
    .then(data => {
      setImage(data.hits[0]);
    })
    .catch(error => {
      console.log(error);
    })
  }

  function handleImageClose(e) {
    setImage('');
  }

  return (
    <div className="App">
      <Header category={category} setCategory={handleSelectedCategory} search={search} setSearch={handleChangeSearch} sort={sort} setSort={handleSelectedSort} />
      <PhotoList images={images} caption={caption} imageClick={handleImageClick} />
      {image!== '' ? <PhotoItem image={image} imageClose={handleImageClose} /> : ''}
      <Footer />
    </div>
  );
}

export default App;
