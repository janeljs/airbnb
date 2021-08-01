import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  currentPositionState,
  // stationRoomState,
} from '../../../Recoil/ReservationState';

const kakao = window.kakao;
console.log(kakao);

const KakaoMap = () => {
  const [position, setPosition] = useRecoilState(currentPositionState);
  // const [roomList, setRoomList] = useRecoilState(stationRoomState);

  useEffect(() => {
    const getCurrentPosition = (pos) => {
      const position = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      setPosition(position);
    };

    navigator.geolocation.getCurrentPosition((pos) => getCurrentPosition(pos));
  }, []);

  useEffect(() => {
    if (!position) return;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(position.lat, position.lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, [position]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default KakaoMap;
