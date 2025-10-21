const UpgradeModal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm px-6">
      <div className="max-w-md w-full rounded-3xl border border-vault-accent/30 bg-slate-900/90 p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Upgrade to VibeVault Plus</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-slate-300 mb-6">
          Unlock lifetime play counts, historical retention charts, and VIP support. Secure checkout powered by Stripe keeps your details safe.
        </p>
        <ul className="space-y-3 text-sm text-slate-200 mb-6">
          <li className="flex items-start gap-3">
            <span className="mt-1">✨</span>
            <span>Month-by-month listening timelines with smart alerts.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1">📈</span>
            <span>Export-ready CSV reports for super fans and curators.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1">🔐</span>
            <span>Priority refresh intervals with audit logging.</span>
          </li>
        </ul>
        <button
          type="button"
          className="w-full rounded-full bg-vault-accent px-4 py-2 text-slate-900 font-semibold hover:bg-vault-primary"
        >
          Join Plus for $6.99/mo
        </button>
      </div>
    </div>
  )
}

export default UpgradeModal
