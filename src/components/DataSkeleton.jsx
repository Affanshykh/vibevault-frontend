const DataSkeleton = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 animate-pulse"
        >
          <div className="h-6 w-6 rounded-full bg-slate-800" />
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-slate-800" />
            <div className="h-3 w-1/2 rounded bg-slate-800" />
          </div>
          <div className="h-4 w-12 rounded bg-slate-800" />
        </div>
      ))}
    </div>
  )
}

export default DataSkeleton
