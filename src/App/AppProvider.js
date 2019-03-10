import React, { Component } from 'react'
import cc from 'cryptocompare'

export const AppContext=React.createContext()

export default class AppProvider extends Component {
  constructor(props){
    super(props)
    this.state={
      page:'dashboard',
      setPage:this.setPage,
      ...this.saveSettings(),
      confirmFavorites:this.confirmFavorites
    }
  }
  componentDidMount(){
    this.fetchCoins()
  }

  fetchCoins= async()=>{
    let coinList =(await cc.coinList()).Data
    this.setState({coinList})
  //  console.log(coinList.Data)
  }

  confirmFavorites=()=>{
    console.log('confirmFavorites')
    this.setState({
      firstVisit:false,
      page:'dashboard'
    })
    localStorage.setItem('cryptoDash',JSON.stringify({test:"hello"}))
  }
  saveSettings(){
    let crytoDashData=JSON.parse(localStorage.getItem('cryptoDash'))
    if(!crytoDashData){
      return {page:'settings',firstVisit:true}
    }
    return { }
  }
  setPage=page=>this.setState({page})

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
