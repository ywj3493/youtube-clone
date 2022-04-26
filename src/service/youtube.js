import axios from "axios";

export default class Youtube {
  constructor(key) {
    this.key = key;
  }

  search(q, callback) {
    let config = {
      method: "get",
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${q}&type=video&key=${this.key}`,
      headers: {},
    };

    return axios(config)
      .then(function (response) {
        console.dir(JSON.stringify(response.data.items.length));
        callback(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  mostPopular(callback) {
    var config = {
      method: "get",
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      headers: {},
    };

    return axios(config)
      .then(function (response) {
        callback(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
