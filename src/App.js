import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import './App.scss';
import './App.min.css';

function App() {
     const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
     useEffect (() => {
        // API call for fetching images

        axios.get(`https://pseudo-data.onrender.com/pictures`)
        .then(function (response) {
            //handle success
            updatePhotoGalleryArray(response.data)
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        })
     }, [])
     return (
        <div className="App">
            <h1 className="title">Image Gallery</h1>
            <div className="gallery">
                {
                    photoGalleryArray.map((photoGalleryArrayItem, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-4 col-sm-12 p-1">
                                <img src={photoGalleryArrayItem.img_url}
                                    alt={`image_${photoGalleryArrayItem.name}`}
                                    
                                />
                            </div>
                        );
                    })
                }
            </div>

        </div>
     );
}

export default App;