import React from 'react'

const UserHome = () => {
  return (
    <div style={{ backgroundColor: '#020217', color: 'white' }}>
      <div className="container">
        <div className="row">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">Search Image</h5>
                    <a href="http://localhost:8501/" class="btn btn-primary">Search</a>
                </div>
                <img src="https://www.uniqlo.com/eu/en/news/sp/topics/2021040701/img/mimg_1_m.jpg" class="card-img-top" />
                </div>
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Crop Image</h5>
                    <a href="http://localhost:8502/" class="btn btn-primary">Crop</a>
                </div>
                <img src="https://dl-asset.cyberlink.com/web/prog/learning-center/html/10014/PDR19-YouTube-273_Best_Image_Cropping_Apps/img/crop-app.jpg" class="card-img-top"/>
                </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserHome
