import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const API_ACCESS_KEY = 'sUcNmnrdJLibkXmg1nXzw5fMKEToxsn5vyrsFYXgeWY'
  const API_SECRET_KEY = '3goxgskuXvedAZG7yPf_KaEv9KLiCsKSoYZ7Mq8mYG8'
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
    e.target.elements.search.value = ''
  }
  return (
    <section>
      <h2 className="title">unsplash images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
