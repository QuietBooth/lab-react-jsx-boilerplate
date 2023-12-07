import './App.css';
import elephant from "./images/elephant.jpeg";


const imageData = ()=>{
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

function App() {

  let image_Arr = imageData()

  return(
    
  <div>
      <h1>Kalvium Gallery</h1>
      <div className='Grid' >
        {
          image_Arr.map(elem=>{
          return(
          <div className='photo-grid' >
            <img src={image_Arr[0].img} id='image' className='image' alt="" />
          </div>
          )
        })
      }

      </div>
  </div>
  )

  let image_arr = imageData();
  console.log(image_arr)

  return(
    <>
      <h1>Kalvium Gallery</h1>
      <div className='parent-div'>
        {
          image_arr.map( elem =>{
            return(
              <img src={elem.img} className='image' alt='elephant' />
            )
          })
        }
      </div>
    </>
  )
}



export default App;
