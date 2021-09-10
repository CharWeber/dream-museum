export default class MetId {
  //returns array
  static getId(search) {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${search}&isHighlight=true`)
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

  static getArt(id) {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
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