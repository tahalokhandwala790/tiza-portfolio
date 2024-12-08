import { clientReviews } from "../costants";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from my Clients</h3>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img src={img} alt={name} className="w-12 h-12 rounded-4" />
                  <div className=" flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{position}</p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">{Array.from({length: 5}).map((_, i) => <img key={i} src="/assets/star (1).png" alt="star" className="w-4 h-4" />)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
