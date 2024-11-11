import { useState } from "react";
import "../styles/landing.css";
import { Link } from "react-router-dom";
import { profile } from "../assets/data";
const LandingPage = () => {
  const cardInfo = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/71/0a/b9/710ab99fb322326c8b4d04fb89ce372c.jpg",
      title: "Notebooks",
    },
    {
      id: 2,
      img: "https://static.wixstatic.com/media/a613c3_78a4b9b035c6450ba843c753b6fefb5d~mv2.png/v1/fill/w_263,h_325,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/notepads.png",
      title: "Notepads",
    },
    {
      id: 3,
      img: "https://static.wixstatic.com/media/a613c3_a3c3343c2cbf48f9abcd0213708e4afe~mv2.jpg/v1/fill/w_263,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Weekly%20planner.jpg",
      title: "Daily Planners ",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/42/fb/76/42fb76254a2a72a771124e83a4fcc802.jpg",
      title: "Sticky Note",
    },
  ];

  const [card, setCard] = useState(cardInfo);

  return (
    <>
      <img className="landing-img" src="/bg.avif" alt="" />
      <div>
        <div>
          <div className="header">
            <h1>New Arrivals</h1>
            <h4>Choose Your Favourite Products!</h4>
          </div>

          <div className="card-container">
            {card.map((ele) => (
              <Link to={`/shop/${ele.title}`} key={ele.id}>
                <div className="landing-card">
                  <div className="landing-card-info">
                    <img src={ele.img} alt={ele.title} />
                    <h3 className="title">{ele.title} </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="profile-container">
        <h2>Meet our mentor</h2>

        <div className="profiles">
          {profile.map((ele) => (
            <div key={ele.id} className="profiles-card">
              <img src={ele.img} className="profiles-image" />
              <div className="card-info">
                <span>{ele.name}</span>
                <p>{ele.p}</p>
              </div>
              <a href="#" className="button">
                Folow
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
