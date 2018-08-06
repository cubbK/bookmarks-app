import { CLIENT_ID } from 'globals.js'

function loadGapi() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/client.js";
  console.log('set script src')
  // script.onload = () => {
  //   console.log('triggered script onload')
  //   gapi.load('client:auth2', this.initClient);
  // }
  script.addEventListener('load', initClient)
  document.body.appendChild(script)
}

function initClient() {
  window.gapi.client.init({
    discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
    clientId: CLIENT_ID,
    scope: 'profile'
  }).then(function () {
    console.log('initialized')
  });
}


export default loadGapi