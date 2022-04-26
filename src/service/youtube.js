export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async search(q, callback) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: q,
        },
      });
      callback(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  async mostPopular(callback) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      });
      callback(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }
}
