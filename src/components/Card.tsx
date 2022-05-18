import React from "react";
import { Link } from "react-router-dom";
import {Result} from './../types/Interfaces';

interface CardComponentProps {
  album: Result
}

const Card =({album}: CardComponentProps)=>{
    return <Link to={`/details-page/${album.id}`} >
    <div className="our-team m-2" >
    <div className="picture">
      <img className="img-fluid" src={album.album.cover_small} />
    </div>
    <div className="team-content">
      <h3 className="name">{album.title}</h3>
      <h4 className="title">{album.artist.name}</h4>
    </div>
    <ul className="social">
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
    </ul>
  </div>
      </Link>

}

export default Card