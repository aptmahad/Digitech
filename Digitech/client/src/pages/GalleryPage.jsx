import React from 'react'
import "./GalleryPage.css";
const galleryImages = [ 
     "https://blog.invgate.com/hubfs/Digital-worksplace---blog-post.jpg", 
     "https://cioafrica.co/wp-content/uploads/2019/09/Digital-Marketing-01.png",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayUm8GiNCUyiMNErliLPMK87GXLEBh2G1pA&s",
     "https://www.digitalstrike.com/wp-content/uploads/2022/05/AdobeStock_302183555-scaled.jpeg",
     "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=", 
     "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/02/agentforce-marquee-what-is-digital-labor.png?resize=1024,576",
     ];

const GalleryPage = () => {
  return (

    <><section className='gallery-hero'>

      </section>
      
      <section className="gallery-section-page">
              <h2 className="gallery-title-page">Gallery</h2>
              <div className="gallery-wrapper-page">
                  <div className="gallery-grid-page">
                      {galleryImages.map((src, index) => (
                          <div key={index} className="gallery-item-page">
                              <img src={src} alt={`Gallery image ${index + 1}`} />
                          </div>
                      ))}
                  </div>
              </div>
          </section></>
  );
};

export default GalleryPage