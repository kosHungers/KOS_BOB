import axios from 'axios';

export default async function GetDataAPI() {
  return axios
    .get(
      `https://api.odcloud.kr/api/15103411/v1/uddi:efd2cc22-353c-47f0-83e5-abc6dca54f6f?page=1&perPage=66&serviceKey=u4fYi1HGYU9hSz8WINOWYKy2JYZ3hkboNiVoSu5tIOqSGvAJEUOJutQfg8WuE7S2uf0RRdWGMK6OrhwL1ijZ3g%3D%3D`,
    )
    .then((res) => res.data);
}
