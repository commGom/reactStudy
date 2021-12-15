import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import YoutubeInfo from './components/YoutubeInfo';
import Header from './components/Header';



function App() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const KEY = "AIzaSyCN4zsJVUK4WX_GZwf4ELMHp4KgrrKLBfA";
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=10&key=${KEY}`;
  console.log(URL);
  useEffect(() => {
    const data = axios({
      url: URL,
      method: 'get'
    });
    data.then((result) => {
      const videoInfo = [];
      for (let item of result.data.items) {

        const title = item.snippet.title;
        const desc = item.snippet.description;
        const url = item.snippet.thumbnails.default.url;
        const videoId = item.id.videoId;
        // console.log(title, desc, url, videoId);
        videoInfo.push({ title: title, desc: desc, url: url, videoId: videoId })
      }
      console.log(videoInfo);
      setInfo(videoInfo);
    });
  }, [search]);

  console.log(info);
  function onSearch(newSearch) {
    setSearch(newSearch);
  }
  return (
    <>
      <Header onSearch={onSearch}></Header>
      <div className="container">
        {info.map((v) => {
          return <YoutubeInfo info={v} key={v.videoId} />
        })}
      </div>
    </>
  );
}

export default App;
