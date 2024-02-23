export function SongsList({songs}) {
  return (
    <div className="albumes">
      {songs.albums?.items.map((album, index) => (
        <div key={index} className="album">
          <img src={album.data.coverArt.sources[0].url} alt={album.data.name} />
          <h2>{album.data.name}</h2>
          <p>Artista: {album.data.artists.items[0].profile.name}</p>
          <p>Año: {album.data.date.year}</p>
        </div>
      ))}
    </div>
  )
}