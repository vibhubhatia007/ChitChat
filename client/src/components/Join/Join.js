import React, { useState } from 'react';
import { Link } from "react-router-dom";
import banner from "../banner.png"
import bannersmall from "../banner-small.png"

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">

      <div className="joinInnerContainer1">
        <img src={banner} alt=""></img>
      </div>

      <div className="joinInnerContainer">
        <h1 className="heading">Chit Chat</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join Chat</button>
        </Link>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null}  to={`/video?room=${room}`}>
          <button className={'button mt-20'} type="submit">Video Call</button>
        </Link>
      </div>

      <div className="joinInnerContainersm">
        <img src={bannersmall} alt=""></img>
      </div>
     
    </div>
  );
}
