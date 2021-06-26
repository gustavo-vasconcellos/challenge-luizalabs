import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FunctionComponent = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <span>
        <FaSearch />
      </span>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
