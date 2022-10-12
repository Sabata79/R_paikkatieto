import './App.css';
import Geocoding from './components/geoCoding';
import Header from './components/Header';
import star from './star.png'

function App() {
  
  return (
    <>
      <Header />
      <div className='container'> 
             <img src={star} />
        <Geocoding />
      </div>
    </> 
  );
}

export default App;
