import React, { useState } from 'react';
import axios from 'axios';

const YoutubeData = () => {
  const dataList = [];
  const search = "슬기로운";
  const key = "AIzaSyAOhDH_jhl6cmZN9Sf2yhfvGhZQ0yI6HvE";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&maxResults=50&q=${search}`;
  const data = axios({
    url: url,
    method: 'get',
  });
  data.then(function (result) {
    console.log(result);
    console.log(result.data);
    const totalData = result.data.items;
    totalData.forEach((data) => {
      const title = data.snippet.title;
      const description = data.snippet.description;
      const thumbnailURL = data.snippet.thumbnails.default.url;
      const videoId = data.id.videoId;
      console.log(`제목 : ${title}`);
      console.log(`영상소개 : ${description}`);
      console.log(`썸네일 url ${thumbnailURL}`);
      console.log(`영상 고유 번호 : ${videoId}`);
      const element =
        <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{thumbnailURL}</td>
          <td>{videoId}</td>
        </tr>;
      dataList.push(element);
    });
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>URL</th>
          <th>VideoID</th>
        </tr>
      </thead>
      <tbody>
        {dataList}
      </tbody>
    </table>
  );
};



function App() {
  return (
    <div>
      <YoutubeData></YoutubeData>
    </div>
  );
}

export default App;
