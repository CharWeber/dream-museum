import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import anime from 'animejs/lib/anime.es.js'
import ArtId from './getID';
import MetId from './metArt';

function clearFields() {
  $('#searchArtInstitueBar').empty();
  $('#searchMetBar').empty();
}

function compileId(response) {
  if (response.data) {
    for (const object of response.data) {
      if (object.image_id != null) {
        $("#artlist").html("");
        $("#artList").append(`
      <li><img src='https://www.artic.edu/iiif/2/${object.image_id}/full/843,/0/default.jpg'</li>
      <li> Title: ${object.title}</li>`);
      }
    }
  }
  else {
    console.log(error);
  }
}
function compileArt(response) {
  if (response) {
    console.log(response)
        $("#artlist").html("");
        $("#artList").append(`
      <li><img src='${response.primaryImage}'</li>
      <li> Title: ${response.title}</li>
      <li>Artist: ${response.artistDisplayName}`);
  }
  else {
    console.log(error);
  }
}
// function getObj(search) {
//   MetId.getObj(search)
//     .then(function (response) {
//       console.log(response)
//       return response
//     })
// }


$(document).ready(function () {
  $('#searchAIBtn').click(function () {
    let search = $('#searchArtInstituteBar').val();
    clearFields();
    ArtId.getID(search)
      .then(function (response) {
        compileId(response);
      });
  });



  $('#searchMetBtn').click(function () {
    let search = $('#searchMetBar').val();
    clearFields();
    MetId.getId(search)
      .then(function (response) {
        const arrayId = response.objectIDs;
        console.log(arrayId);
        arrayId.forEach(function (id) {
          const artObject = MetId.getArt(id);
          console.log(artObject);
          compileArt(artObject);
          // return MetId.getArt(array)
        })
        // .then(function(array) {
        //   array.forEach(function (id) {
        //     MetId.getArt(id)
        //     compileArt(metResponse);
        // })
        // const idObj = getObj(search);
        // console.log(idObj)
        // idObj.objectIDs.forEach(function (id) {
        //   MetId.getArt(id)
        //     .then(function (metResponse) {
        //       compileArt(metResponse);
        //     });
      })
  });
});
