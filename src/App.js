import logo from './logo.svg';
import './App.css';

const App = async () => {
  const url = "https://cmr.earthdata.nasa.gov/browse-scaler/browse_images/datasets/C1561222826-GES_DISC?h=85&w=85"
  const value = await fetch(url)
  console.log("🚀 App -> value", value)
  
  // return (
  //   <div className="App">
  //     <img
  //     src="https://cmr.earthdata.nasa.gov/browse-scaler/browse_images/datasets/C1561222826-GES_DISC?h=85&w=85"
  //     >
  //     </img>
  //   </div>
  // );
}

export default App;
