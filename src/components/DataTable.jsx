const DataTable = ({ activeTab, data }) => {
  const renderRows = () => {
    if (activeTab === 'tracks') {
      return data.tracks.map((track, index) => (
        <Row
          key={track.id}
          index={index}
          title={track.name}
          subtitle={`${track.artists.map((artist) => artist.name).join(', ')} • ${track.album.name}`}
          metric={`${Math.round(track.popularity)} score`}
        />
      ))
    }

    if (activeTab === 'artists') {
      return data.artists.map((artist, index) => (
        <Row
          key={artist.id}
          index={index}
          title={artist.name}
          subtitle={`${artist.followers?.total?.toLocaleString() ?? '—'} followers`}
          metric={`${Math.round(artist.popularity)} score`}
        />
      ))
    }

    return data.genres.map((genre, index) => (
      <Row
        key={genre.name}
        index={index}
        title={genre.name}
        subtitle={`${genre.count} artists • ${genre.percentage}% of your vibe`}
        metric={`${genre.score} pts`}
      />
    ))
  }

  return <div className="space-y-3">{renderRows()}</div>
}

const Row = ({ index, title, subtitle, metric }) => (
  <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center rounded-3xl border border-slate-800 bg-slate-900/60 px-4 py-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm text-slate-300">{index + 1}</div>
    <div className="space-y-1">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="text-xs text-slate-400">{subtitle}</p>
    </div>
    <div className="text-sm font-semibold text-vault-accent">{metric}</div>
  </div>
)

export default DataTable
