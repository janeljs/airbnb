import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentPositionState } from '../../../Recoil/ReservationState';

const kakao = window.kakao;
console.log(kakao);

const KakaoMap = () => {
  const [position, setPosition] = useRecoilState(currentPositionState);

  useEffect(() => {
    const getCurrentPosition = (pos: any) => {
      const position = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      setPosition(position);
    };

    navigator.geolocation.getCurrentPosition((pos) => getCurrentPosition(pos));
  }, []);

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '1000px' }}></div>
    </div>
  );
};

export default KakaoMap;
