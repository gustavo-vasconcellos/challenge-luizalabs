import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface Path {
  name: string
  href: string
}

const Breadcrumb: React.FunctionComponent = () => {
  const location = useLocation()
  const [paths, setPaths] = useState<Path[]>([])

  useEffect(() => {
    const newPaths = location.pathname.split('/').map<Path>((path, index) => {
      if (path === '' && index === 0) {
        return { name: 'Home', href: '/' }
      }

      return { name: path.replace(/-/g, ' '), href: path }
    })

    setPaths(newPaths)
  }, [location])

  return (
    <div className="flex ttc mb4 mt2">
      {paths.map((path, index) => {
        if (index && path.href) {
          return (
            <a
              className="black fw6 no-underline"
              href={path.href}
              key={index.toString()}
            >
              &nbsp;&gt; {path.name}
            </a>
          )
        }

        return (
          <a
            className="black fw6 no-underline"
            href={path.href}
            key={index.toString()}
          >
            {path.name}
          </a>
        )
      })}
    </div>
  )
}

export default Breadcrumb
