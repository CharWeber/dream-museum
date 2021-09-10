export default class ArtId {
  static async getID(search) {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id&limit=10`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}