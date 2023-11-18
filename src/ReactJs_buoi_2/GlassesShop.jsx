import {useState} from 'react'
import dataGlasses from './dataGlasses.json'
import GlassesList from './GlassesList'
import FaceTest from './FaceTest';
import "./GlassesShop.css";

export default function GlassesShop() {
  const[selectedGlasses, setSelectGlasses] = useState(null);

  const handleSelectGlasses = (glass) => {
    setSelectGlasses(glass);
  }
  return (
    <div className='background'>
        <h3 className='text-center header'>TRY GLASSES APP ONLINE</h3>

        <FaceTest glassTest={selectedGlasses} />
        <GlassesList 
          glasses={dataGlasses}
          onSelect={handleSelectGlasses}
          selectedGlasses={selectedGlasses}
        />
    </div>
  )
}
