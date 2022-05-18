import React from "react";

const Card =()=>{
    return <div className="our-team">
    <div className="picture">
      <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
    </div>
    <div className="team-content">
      <h3 className="name">Michele Miller</h3>
      <h4 className="title">Web Developer</h4>
    </div>
    <ul className="social">
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
    </ul>
  </div>

}

export default Card