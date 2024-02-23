export function SongsList({deleteAlbum, album}) {
  return (
    <div className="album">
      <img src={album.coverArt.sources[0].url} alt={album.name} />
      <h2>{album.name}</h2>
      <p>Artist: {album.artists.items[0].profile.name}</p>
      <p>Year: {album.date.year}</p>
      <button onClick={() => deleteAlbum}>Delete</button>
    </div>
  )
}