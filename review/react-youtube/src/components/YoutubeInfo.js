import React from 'react';

const YoutubeInfo = (props) => {
  console.log('YoutubeInfo');
  return (
    <div className="content-container">
      <div className="image">
        <a href={`https://www.youtube.com/watch?v=${props.info.videoId}`} target="_blank">
          <img src={props.info.url}></img>
        </a>
      </div>
      <div className="content">
        <p>{props.info.title}</p>
        <p>{props.info.desc}</p>
      </div>

    </div>
  );
};

export default YoutubeInfo;