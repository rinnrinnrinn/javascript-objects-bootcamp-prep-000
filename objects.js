var playlist = {'Slowdive':"single ladies", 'My Bloody Valentine':"song", 'Phil Ochs':"yellow submarine"};

Object.assign({}, playlist, {Beyonce: "lemonade"})

function updatePlaylist(playlist, ArtistName, SongTitle) {
  return Object.assign({}, playlist, {[ArtistName]:SongTitle})
}

function removeFromPlaylist(playlist, artistName){
  
}