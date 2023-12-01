import Title from "./Title";
import Tour from "./Tour";
import { ToursList } from "./data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {ToursList.map((tour, index) => {
          return (
            <Tour key={index} {...tour} />
            // <article key={index} className="tour-card">
            //   <div className="tour-img-container">
            //     <img src={tour.img} className="tour-img" alt="" />
            //     <p className="tour-date">{tour.date}</p>
            //   </div>
            //   <div className="tour-info">
            //     <div className="tour-title">
            //       <h4>{tour.title}</h4>
            //     </div>
            //     <p>{tour.text}</p>
            //     <div className="tour-footer">
            //       <p>
            //         <span>
            //           <i className="fas fa-map"></i>
            //         </span>{" "}
            //         {tour.location}
            //       </p>
            //       <p>{tour.duration}</p>
            //       <p>from {tour.amount}</p>
            //     </div>
            //   </div>
            // </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
