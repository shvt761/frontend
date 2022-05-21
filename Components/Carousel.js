import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "https://thodkyaatghadamodi.in/wp-content/uploads/2021/01/blood-donate.jpg",
  "https://media.istockphoto.com/vectors/blood-donation-concept-vector-id1256555401?k=20&m=1256555401&s=612x612&w=0&h=We4Ckw72r8-RSK_TOVG2jWtui1ntlQNgYeDo1lLi1qg=",
  "https://stanfordbloodcenter.org/wp-content/uploads/2020/06/Blood-facts_10-illustration-graphics__canteen.png"
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
  arrows: true
}

function Carousel() {
  return (
    <div className="">
      <Fade {...fadeProperties}>
      {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Fade>
    </div>
  );
}

export default Carousel