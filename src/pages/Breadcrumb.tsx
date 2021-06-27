import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumb: React.FunctionComponent = () => {
  const location = useLocation()
  const [paths, setPaths] = useState<string[]>([])

  useEffect(() => {
    const newPaths = location.pathname.split('/').map((path, index) => {
      if (path === '' && index === 0) {
        return 'Home'
      }

      return path.replace(/-/g, ' ')
    })

    setPaths(newPaths)
  }, [location])

  return (
    <div className="flex fw5 ttc mb3">
      {paths.map((path, index) => {
        if (index && path) {
          return <span>&nbsp;&gt; {path}</span>
        }
        return <span>{path}</span>
      })}
    </div>
  )
}

export default Breadcrumb
