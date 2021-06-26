import * as React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const Location: React.FunctionComponent = () => (
  <div className="v-mid dib">
    <span className="dib v-mid">
      <HiLocationMarker />
    </span>
    <span className="ml2 v-mid">Cidade: São Paulo</span>
  </div>
)

export default Location
