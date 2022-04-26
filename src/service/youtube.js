import axios from "axios";

export default class Youtube {
  constructor(key) {
    this.key = key;
  }

  async search(q, callback) {
    let config = {
      method: "get",
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${q}&type=video&key=${this.key}`,
      headers: {},
    };

    try {
      const response = await axios(config);
      console.dir(JSON.stringify(response.data.items.length));
      callback(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  async mostPopular(callback) {
    let config = {
      method: "get",
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      headers: {},
    };

    try {
      const response = await axios(config);
      callback(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }
}
