import { useState } from 'react'
import Container from '../components/container'

const SearchPage = props => {
  const [term, setTerm] = useState('React')
  
  return (
    <Container className="mt-3">
      <h1>Search Github Repos: <span className="badge bg-secondary">{term}</span></h1>

      {/* SearchForm */}

      {/* List */}

    </Container>
  )
}

export default SearchPage