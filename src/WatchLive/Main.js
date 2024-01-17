import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

let map

const Main=()=>{
    useEffect(()=>{
        map = L.map('map').setView([12.9889,79.9702],5)
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20 
        }).addTo(map); 

        return () => {
            map.remove();
        };        
    },[])    

    return(
        <main className='WatchLive-main'>  
                <div id="map"></div>  
        </main>
    )
}

export default Main