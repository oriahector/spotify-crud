export function SongsList({album}) {
  return (
    <div className="album">
      <img src={album.coverArt.sources[0].url} alt={album.name} />
      <h2>{album.name}</h2>
      <p>Artista: {album.artists.items[0].profile.name}</p>
      <p>Año: {album.date.year}</p>
    </div>
  )
}