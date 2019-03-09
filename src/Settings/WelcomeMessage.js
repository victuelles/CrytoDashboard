import React from 'react'
import {AppContext} from '../App/AppProvider'

export default function ({firstVisit})  {
  return (
    <AppContext.Consumer>
      {({firstVisit})=>
      firstVisit?<h1>Welcome to CrytoDash</h1>:null
    
    }
      
    </AppContext.Consumer>
  )
}
