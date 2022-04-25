import axios from "axios";

export function searchYoutube(q, callback) {
  let config = {
    method: "get",
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${q}&key=AIzaSyDIyc2xbtLcAkcmMcJh49f5dy22FgtiFsY`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.dir(JSON.stringify(response.data.items.length));
      callback(response.data.items);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function mostPopularYoutube(callback) {
  var config = {
    method: "get",
    url: "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDIyc2xbtLcAkcmMcJh49f5dy22FgtiFsY",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      callback(response.data.items);
    })
    .catch(function (error) {
      console.log(error);
    });
}
