import { useEffect, useState } from 'react'
import './assets/css/App.css'
import AppHeader from './components/AppHeader'
import AppCover from './components/AppCover';
import AppHome from './components/AppHome';
import { booksApi } from './config/axios';

function App(): JSX.Element {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([])
  const [book, setBook] = useState(null)

  const fetchBooks = async () => {
    const res = await booksApi.get('/books')
    setBooks(res.data)
  }

  const addBook = (evt) => {
    evt.preventDefault();
    if (book) {
      const data = `bookId=${book.id}`;
      axios.post('/books/add/1', data)
        .then((res) => {
          if (res.data) {
            setBook(null);
          }
          setBooks([...books, res.data]);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])


  return (
    <div className="App">
       <AppHeader action={setBook} addBook={addBook}/>
        <AppCover/>
        <AppHome books={books} limit={4}/>
        <footer> Code and design by @JesusAntGuerrero</footer>
    </div>
  )
}

export default App
