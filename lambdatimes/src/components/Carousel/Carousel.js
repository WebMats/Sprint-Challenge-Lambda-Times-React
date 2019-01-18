import React, { Component } from 'react';
import styled from 'styled-components';
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

const Carousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px; 
  @media (min-width: 1200px) {
      width: 1200px;
  }
  img {
    width: 100%;
    display: none;
  }
`
const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`
const RightButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`


// Complete this Carousel 
export default class CarouselComponent extends Component {
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
      <Carousel>
        <LeftButton onClick={this.leftClick}>{"<"}</LeftButton>
        {this.state.carouselData.length > 0 ? this.selectedImage(): null}
        <RightButton onClick={this.rightClick}>{">"}</RightButton>
      </Carousel>
    )
  }
}