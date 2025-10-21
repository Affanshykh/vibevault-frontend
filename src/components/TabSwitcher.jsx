const TabSwitcher = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              isActive
                ? 'bg-vault-accent text-slate-900 shadow-lg shadow-vault-accent/30'
                : 'bg-slate-800/70 text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default TabSwitcher
