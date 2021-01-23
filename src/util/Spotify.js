const clientId = '3cf7b2682ad0460ab6d80a03e1758b45';
const redirectUri = 'http://localhost:3000/';
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
let userAccesToken = undefined;
let expiresIn= undefined;

const Spotify = {
    getAccessToken() {
        if(userAccesToken) {
            return userAccesToken
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            userAccesToken = urlAccessToken[1];
            expiresIn = urlExpiresIn[1];
            window.setTimeout(() => userAccesToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location = spotifyUrl;
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const urlSpotify = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`
        return fetch (urlSpotify, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) =>{
            if(response.ok){
                return response.json();
            }
        }).then((jsonResponse) =>{
            if(jsonResponse.tracks){
                jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                  }));
            }
        })
    },

    savePlayList(name, trackUris) {
        let accesToken = Spotify.getAccessToken();
        let headers = {Authorization: `Bearer ${accesToken}`};
        let userId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers})
        .then((response)=> response.json())
        .then((jsonResponse)=>{
            userId = jsonResponse.id;

            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ name: name })
            }).then(response => response.json())
              .then(jsonResponse => {
                const playlistId = jsonResponse.id;

            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris })
            }
            );
        });
    });
  }
}




export default Spotify