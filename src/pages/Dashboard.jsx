import { useEffect, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import apiClient from '../hooks/useApiClient'
import { useAuth } from '../context/AuthContext'
import DataSkeleton from '../components/DataSkeleton'
import DataTable from '../components/DataTable'
import PieChart from '../components/PieChart'
import AdBanner from '../components/AdBanner'
import UpgradeModal from '../components/UpgradeModal'
import TabSwitcher from '../components/TabSwitcher'

const tabs = [
  { id: 'tracks', label: 'Top Tracks (4 Weeks)' },
  { id: 'artists', label: 'Top Artists (6 Months)' },
  { id: 'genres', label: 'Top Genres (4 Weeks)' }
]

const AUTH_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL && /^https?:\/\//i.test(process.env.NEXT_PUBLIC_API_BASE_URL)
    ? process.env.NEXT_PUBLIC_API_BASE_URL.replace(/\/$/, '')
    : '/api'

const DashboardPage = () => {
  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth()
  const [activeTab, setActiveTab] = useState('tracks')
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState({ tracks: [], artists: [], genres: [] })
  const [minutesPlayed, setMinutesPlayed] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const chartRef = useRef(null)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/')
    }
  }, [isLoading, isAuthenticated, router])

  useEffect(() => {
    if (!isAuthenticated) return

    const fetchData = async () => {
      try {
        setIsDataLoading(true)
        const [tracksRes, artistsRes, genresRes, minutesRes] = await Promise.all([
          apiClient.get('/api/top/tracks'),
          apiClient.get('/api/top/artists'),
          apiClient.get('/api/top/genres'),
          apiClient.get('/api/minutes')
        ])

        setData({
          tracks: tracksRes.data.items,
          artists: artistsRes.data.items,
          genres: genresRes.data.items
        })
        setMinutesPlayed(minutesRes.data.minutes)
        setError(null)
      } catch (err) {
        setError('We had trouble loading your vault. Please refresh to try again.')
      } finally {
        setIsDataLoading(false)
      }
    }

    fetchData()
  }, [isAuthenticated])

  const topGenresForChart = useMemo(
    () =>
      data.genres.slice(0, 8).map((genre, index) => ({
        label: genre.name,
        value: genre.score,
        color: `hsl(${(index * 47) % 360} 90% 60%)`
      })),
    [data.genres]
  )

  const handleShare = async () => {
    if (!chartRef.current) return
    const { toPng } = await import('html-to-image')
    const dataUrl = await toPng(chartRef.current)
    const link = document.createElement('a')
    link.download = 'vibevault-vibe.png'
    link.href = dataUrl
    link.click()
  }

  if (isLoading || !isAuthenticated) {
    return (
      <>
        <Head>
          <title>VibeVault Dashboard</title>
        </Head>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
          <p className="text-lg text-slate-400">Loading your vault...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Your VibeVault Dashboard</title>
      </Head>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-vault-accent">Welcome back</p>
              <h2 className="text-2xl font-semibold text-white">{user?.displayName || 'Your Vault'}</h2>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-vault-accent/40 px-4 py-2 text-vault-accent hover:bg-vault-accent/10"
                onClick={() => setShowModal(true)}
              >
                <span role="img" aria-label="plus">🔒</span>
                Unlock Lifetime Insights
              </button>
              <a href={`${AUTH_BASE_URL}/auth/logout`} className="text-slate-400 hover:text-slate-200 transition">
                Sign out
              </a>
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
          <section className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">
                  <button
                    type="button"
                    disabled
                    className="flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-slate-500 cursor-not-allowed"
                  >
                    All Time
                    <span className="inline-flex items-center gap-1 rounded-full bg-vault-accent/20 px-2 py-0.5 text-vault-accent">
                      🔒 Plus
                    </span>
                  </button>
                </div>
              </div>
              {isDataLoading ? (
                <DataSkeleton />
              ) : error ? (
                <p className="text-sm text-rose-300">{error}</p>
              ) : (
                <DataTable activeTab={activeTab} data={data} />
              )}
            </div>
            <aside className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6" ref={chartRef}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">The Vibe Generator</h3>
                  <span className="text-xs uppercase tracking-widest text-slate-500">4 weeks</span>
                </div>
                {isDataLoading ? (
                  <div className="h-64 animate-pulse rounded-2xl bg-slate-800/60" />
                ) : (
                  <PieChart data={topGenresForChart} />
                )}
                <button
                  type="button"
                  onClick={handleShare}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-vault-accent px-4 py-2 text-slate-900 font-semibold hover:bg-vault-primary"
                >
                  Share My Vibe
                </button>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Minutes Played (Last Sync)</h3>
                {isDataLoading ? (
                  <div className="h-16 animate-pulse rounded-2xl bg-slate-800/60" />
                ) : (
                  <p className="text-3xl font-bold text-vault-accent">
                    {minutesPlayed ?? '—'}
                    <span className="text-base text-slate-400 ml-2">minutes</span>
                  </p>
                )}
                <p className="mt-3 text-sm text-slate-400">
                  We sample your recently played tracks to keep an evolving history of your listening sessions.
                </p>
              </div>
              <AdBanner />
            </aside>
          </section>
          <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Lifetime Play Counts</h3>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <span role="img" aria-label="locked">🔒</span>
              <span>Plus members unlock this premium dataset with month-by-month retention charts.</span>
            </div>
          </section>
        </main>
        <footer className="border-t border-slate-800 py-8">
          <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>VibeVault is a third-party tool and is not affiliated with Spotify AB.</p>
            <p>We never store your password or payment details.</p>
          </div>
        </footer>
        <UpgradeModal open={showModal} onClose={() => setShowModal(false)} />
      </div>
    </>
  )
}

export default DashboardPage
