import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    let imgArray = this.imageData()
    return(
      <>
        <h1 className='heading'>Kalvium Gallery</h1>
          <div className="images">
            {/* <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" /> */}
            {
              imgArray.map(elem =>{
                return(

                  <img src={elem.img}/>
                )
              })
            }
          </div>
      </>
    )
  }
}