import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovieForm from './components/AddMovieForm';
import ListMovie from './components/ListMovie';
import Card from './components/Card';
import Summary from './components/Summary';
import SelectInput from './components/SelectInput';

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function App() {
  const [movie, setMovie] = useState([]);
  const [filter, setFilter] = useState(null)
  const genre = [
    { id: 1, title: 'Action' },
    { id: 2, title: 'Comedy' },
    { id: 3, title: 'Romantic' },
    { id: 4, title: 'History' },
    { id: 5, title: 'Crime' },
    { id: 6, title: 'Scienc' },
    { id: 7, title: 'Biography' },
  ];
  const filters = [
    'All', 'Watched', 'UnWatched'
  ];

  const statusMovieFilter =
    filter === 'All' || !filter
      ? movie
      : movie.filter(m =>
        filter === 'Watched' ? m.watched : !m.watched
      );
  const listGenre = genre.map((item) => {
    return (<option key={item.id} value={item.id}>{item.title}</option>);
  });
  const listFilter = filters.map((value, index) => {
    return (<option key={index} value={value}>{value}</option>);
  });

  const listMovie = statusMovieFilter.length > 0 ? (
    statusMovieFilter.map((m_item, index) => {
      const genreTitle =
        genre.find(g => g.id === m_item.genre)?.title || '-';
      const status = m_item.watched > 0 ? 'Watched' : 'UnWatched';

      return (
        <tr key={m_item.id || index}>
          <td>{index + 1}</td>
          <td>{m_item.title}</td>
          <td>{genreTitle}</td>
          <td>{status}</td>
          <td>
            <span className="btn btn-primary me-2" onClick={() => changeStatus(m_item.id)}>change status</span>
            <span className="btn btn-danger" onClick={() => deleteMovie(m_item.id)}>delete</span>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="5">No movies found. Add one!</td>
    </tr>
  )
  function addNewMovie(data) {
    const newMovie = {
      id: createId(),
      ...data,
    };

    setMovie(prev => [newMovie, ...prev]);
  }

  function changeStatus(movie_id) {
    setMovie(prev =>
      prev.map(item =>
        item.id === movie_id
          ? { ...item, watched: !item.watched }
          : item
      )
    );
  }

  function deleteMovie(movie_id) {
    setMovie(prev =>
      prev.filter(item => item.id !== movie_id)
    );
  }
  const totalMovies = movie.length;
  const watchCount = (movie.filter((item) => item.watched > 0)).length
  const unWatchCount = (movie.filter((item) => item.watched == 0)).length

  return (
    <>
      <div className='container'>
        <Card nameClass="form_add_movie" title="add movie">
          <AddMovieForm genres={listGenre} addClick={addNewMovie} />
        </Card>
        <Card nameClass="summary_part" title="summary">
          <Summary totalMovies={totalMovies} watchCount={watchCount} unWatchedCount={unWatchCount} />
        </Card>
        <Card nameClass="list_movie_section" title="Movies" right={
          <div className='filter_part'>
            <SelectInput value={filter} onChangeF={setFilter} >
              {listFilter}
            </SelectInput>
          </div>
        }>
          <ListMovie items={listMovie} />
        </Card>
      </div>
    </>
  )
}

export default App
