import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FunctionComponent = () => {
  const [text, setText] = useState('')
  return (
    <div className="flex pa2 ph3 bg-white items-center br2 mt2" data-test-id="search-bar">
      <span className="mr3 gray db">
        <FaSearch />
      </span>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="bn outline-0 w-100 db black lh-copy"
      />
    </div>
  )
}

export default SearchBar
