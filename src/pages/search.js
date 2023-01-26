import { useState } from 'react'
import Container from '../components/container'
import SearchForm from '../components/searchForm'

const SearchPage = props => {
  const [term, setTerm] = useState('React')
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [savedRepos, setSavedRepos] = useState([])
  
  return (
    <Container className="mt-3">
      <h1>Search Github Repos: <span className="badge bg-secondary">{term}</span></h1>

      <SearchForm />

      {/* List */}

    </Container>
  )
}

export default SearchPage