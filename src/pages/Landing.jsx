import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const marketingBullets = [
  'Precision listening analytics updated in real-time.',
  'Your top artists, tracks, and genres in one sleek vault.',
  'Privacy-first design with secure OAuth authentication.'
]

const Landing = () => {
  const location = useLocation()
  const showSuccess = useMemo(() => location.search.includes('connected=true'), [location.search])

  const handleConnect = () => {
    window.location.href = 'https://vibevault-backend.vercel.app/auth/login'
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-2xl font-semibold text-vault-accent">VibeVault</span>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <span>Dashboard Preview</span>
            <span>Security</span>
            <span>Pricing</span>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <span className="inline-flex items-center text-xs tracking-widest uppercase text-vault-accent bg-vault-muted/60 px-3 py-1 rounded-full mb-6">High-Intent Listening Insights</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            VibeVault Spotify Stats: Unlock the real story behind your streaming habits
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            We connect securely via the official Spotify API to surface premium listening trends in seconds. We never store your password or payment details.
          </p>
          <ul className="space-y-3 mb-8">
            {marketingBullets.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 h-2 w-2 rounded-full bg-vault-accent" aria-hidden="true"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleConnect}
              className="inline-flex items-center justify-center rounded-full bg-vault-accent px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-vault-accent/40 transition hover:bg-vault-primary"
            >
              Unlock My Vibe Now (Free)
            </button>
            <span className="text-sm text-slate-400">No credit card required • cancel anytime</span>
          </div>
          {showSuccess && (
            <p className="mt-4 text-sm text-emerald-400">You&apos;re connected! Redirecting to your vault...</p>
          )}
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-slate-900/70">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Live Vault Preview</h2>
            <span className="text-xs uppercase tracking-widest text-vault-accent">Free tier</span>
          </div>
          <div className="space-y-4">
            <div className="animate-pulse rounded-2xl bg-slate-800/60 p-6">
              <div className="h-4 w-1/2 bg-slate-700 rounded mb-3"></div>
              <div className="h-3 w-5/6 bg-slate-800 rounded mb-2"></div>
              <div className="h-3 w-2/3 bg-slate-800 rounded"></div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 p-6 border border-slate-700">
              <p className="text-sm text-slate-300 mb-2">All Time Insights</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span role="img" aria-label="locked">🔒</span>
                <span>Upgrade to Plus to unlock your lifetime play counts</span>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 p-6 border border-slate-700">
              <p className="text-sm text-slate-300 mb-2">Ad-Supported Free Tier</p>
              <div className="h-24 bg-slate-900/60 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-500">
                Display ad placeholder (728x90)
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 space-y-3">
          <p>VibeVault is a third-party tool and is not affiliated with Spotify AB.</p>
          <p>Built for music fans who crave clarity and secure analytics.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
