import { useEffect, useRef } from "react";


//browser의 모든 것을 다룰 수 있는 객체 window
const { kakao } = window;
const { cloud } = window;
let mapRef = null;

function MapContainer() {
  mapRef = useRef();
  //mount할 때,
  useEffect(() => {
    console.log(cloud);
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.45, 126.57), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    mapRef.current = map;

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  })
  return (<div id="map" style={{ width: "500px", height: "400px" }}></div>);
}

function App() {
  return (
    <div className="App">
      <MapContainer></MapContainer>
      <button onClick={() => {
        var position = new kakao.maps.LatLng(33.45, 126.5);
        mapRef.current.setCenter(position);
      }}>좌표 이동</button>
    </div>
  );
}

export default App;
