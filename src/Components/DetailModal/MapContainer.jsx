import React, { useEffect } from 'react';

const { kakao } = window;

function MapContainer({ diningData }) {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(
      `${diningData['소재지']}`,
      function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${diningData['업 소 명']}</div>`,
          });
          infowindow.open(map, marker);

          map.setCenter(coords);
        }
      },
    );
  }, [diningData]);

  return (
    <>
      <div id="map" style={{ width: '700px', height: '400px' }}></div>
    </>
  );
}

export default MapContainer;
