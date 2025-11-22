import React from "react";
import aboutImg from "../assests/images/about.png";

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>About Us</h3>
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-md-7  ">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </div>
        <div className="col-md-5  text-center">
          <img src={aboutImg} alt="about" className="img-fluid about-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
