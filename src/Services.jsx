import Title from "./Title";
import { serviceDetails } from "./data";
import Service from "./service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {serviceDetails.map((service, id) => {
          return <Service key={id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
