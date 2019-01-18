import React, { Component } from 'react';
// import { carouselData } from '../../data'

import mountainImg from "./assets/carousel/mountains.jpg"
import computerImg from   "./assets/carousel/computer.jpg"
import treesImg from   "./assets/carousel/trees.jpg"
import turntableImg from   "./assets/carousel/turntable.jpg"

const carouselData = [
  {img: mountainImg, title: "mountains"},
  {img: computerImg, title: "computer"},
  {img: treesImg, title: "trees"}, 
  {img: turntableImg, title: "turntable"}
];


// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
      index: 0
    }
  }
  componentDidMount(){
    this.setState({carouselData, selectedImage: carouselData[0].img, alt: carouselData[0].title})
  }

  leftClick = () => {
    this.setState(prevState => {
      if (prevState.index === 0 ) {
        return {index: prevState.carouselData.length - 1}
      }
      return {index: prevState.index - 1}
    })
  }

  rightClick = () => {
    this.setState(prevState => {
      if (prevState.index === prevState.carouselData.length - 1) {
        return {index: 0}
      }
      return {index: prevState.index + 1}
    })
  }

  selectedImage = () => {
    return <img src={this.state.carouselData[this.state.index].img} alt={this.state.carouselData[this.state.index].title} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.state.carouselData.length > 0 ? this.selectedImage(): null}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}