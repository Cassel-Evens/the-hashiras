export default class KissTheHashira {
  static async getHashira() {
    try {
      const response = await fetch (`https://api.gfycat.com/v1/gfycats/search?${search_text}=keywords&client_id=${process.env.API_KEY}`);
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}