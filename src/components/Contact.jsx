import React,{useState} from 'react';
import NavbarHome from './NavbarHome';
import axios from 'axios';


const Contact = () => {
  
    const [fileData, setFileData] = useState({
      clothingImage: null,
      avatarImage: null
    });
  
    const handleFileChange = (event) => {
      const { name, files } = event.target;
      setFileData(prevData => ({
        ...prevData,
        [name]: files[0] // Store the file in state based on the input's name
      }));
    };
  
    const tryfile = async () => {
      if (!fileData.clothingImage || !fileData.avatarImage) {
        alert('Both files are required');
        return;
      }
  
      const formData = new FormData();
      formData.append('clothing_image', fileData.clothingImage);
      formData.append('avatar_image', fileData.avatarImage);
  
      const options = {
        method: 'POST',
        url: 'https://texel-virtual-try-on.p.rapidapi.com/try-on-file',
        headers: {
          'X-RapidAPI-Key': '32fbd79bb5msh2259071a25ab83fp156319jsn012882197e4d',
          'X-RapidAPI-Host': 'texel-virtual-try-on.p.rapidapi.com',
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      };
  
      try {
        const response = await axios(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };




  return (
    <div style={{ backgroundColor: '#020217', color: 'white' }}>
      <NavbarHome /> <br /><br /><br /><br /><br />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://i.pinimg.com/736x/99/58/33/995833922c33514afd8010d63d40141b.jpg" 
                    className="img-fluid rounded-start" 
                    alt="Office Environment"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Contact Us</h5>
                    <p className="card-text">
                      For queries, please call:<br />
                      <strong>0-814-477-8866</strong><br />
                      or contact our 24x7 Help Desk.<br />
                      Email ID: <a href="mailto:helpdesk@fashionimagesearchengine.com">elpdesk@fashionimagesearchengine.com</a><br />
                      For queries, call:<br />
                      <strong>+91 7123456777</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="clothing-image">Clothing Image:</label>
        <input
          type="file"
          id="clothing-image"
          name="clothingImage"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <label htmlFor="avatar-image">Avatar Image:</label>
        <input
          type="file"
          id="avatar-image"
          name="avatarImage"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="button" onClick={tryfile}>Upload Files</button>
    </form>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
    
  );
}

export default Contact;
