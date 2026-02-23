import { useEffect, useMemo, useState } from 'react'
const ROUTE_META = {
  social: {
    label: '교류 루트',
    chip: '교류',
    art: '/images/backgrounds/bg_cafe.jpg',
    ring: 'from-rose-400/30 via-rose-300/10 to-transparent',
    panel: 'border-rose-300/50 bg-rose-500/12 text-rose-100',
  },
  mentor: {
    label: '피드백 루트',
    chip: '피드백',
    art: '/images/backgrounds/bg_meeting_room.jpg',
    ring: 'from-cyan-300/30 via-cyan-200/10 to-transparent',
    panel: 'border-cyan-300/50 bg-cyan-500/12 text-cyan-100',
  },
  focus: {
    label: '집중 루트',
    chip: '집중',
    art: '/images/backgrounds/bg_office_night.jpg',
    ring: 'from-violet-300/30 via-violet-200/10 to-transparent',
    panel: 'border-violet-300/50 bg-violet-500/12 text-violet-100',
  },
  dinner: {
    label: '네트워킹 루트',
    chip: '네트워킹',
    art: '/images/backgrounds/bg_restaurant.jpg',
    ring: 'from-amber-300/30 via-amber-200/10 to-transparent',
    panel: 'border-amber-300/50 bg-amber-500/12 text-amber-100',
  },
}

const BG_TO_ROUTE = {
  cafe: 'social',
  restaurant: 'dinner',
  bar: 'dinner',
  office_night: 'focus',
  office_day: 'mentor',
}

export default function BuffSelect({ choices, onSelect, contextBackground = null }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleConfirm = () => {
    if (selectedIndex === null) return
    onSelect(selectedIndex, choices[selectedIndex])
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleConfirm()
        return
      }

      const pressed = Number(event.key)
      if (!Number.isNaN(pressed) && pressed >= 1 && pressed <= choices.length) {
        setSelectedIndex(pressed - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [choices.length, selectedIndex])

  const formatDelta = (value) => `${value > 0 ? '+' : ''}${value}`

  const getRouteType = (choice, idx) => {
    const text = (choice.text || '').toLowerCase()
    const affection = choice.affectionChange || 0
    const xp = choice.xpChange || 0
    const hint = choice.hintChange || 0

    if (/혼자|복습|조용|집에서/.test(text)) return 'focus'
    if (/팀장|질문|피드백|미팅/.test(text)) return 'mentor'
    if (/회식|저녁|식사|밥|바|선배/.test(text)) return 'dinner'
    if (/커피|카페|동기/.test(text)) return 'social'

    if (hint > 0) return 'focus'
    if (affection > 0 && xp <= 0) return 'social'
    if (xp > 0 && affection < 0) return 'mentor'
    if (xp > 0) return 'mentor'

    if (contextBackground && BG_TO_ROUTE[contextBackground]) {
      return BG_TO_ROUTE[contextBackground]
    }

    const fallback = ['social', 'mentor', 'focus']
    return fallback[idx % fallback.length]
  }

  const choiceRoutes = useMemo(
    () => choices.map((choice, idx) => ROUTE_META[getRouteType(choice, idx)]),
    [choices, contextBackground],
  )

  const getRewardBadges = (choice) => {
    const badges = []
    if ((choice.affectionChange || 0) !== 0) {
      badges.push({ label: '호감', value: choice.affectionChange, tone: 'rose' })
    }
    if ((choice.xpChange || 0) !== 0) {
      badges.push({ label: '경험치', value: choice.xpChange, tone: 'amber' })
    }
    if ((choice.hintChange || 0) !== 0) {
      badges.push({ label: '힌트', value: choice.hintChange, tone: 'sky' })
    }
    return badges
  }

  const getBadgeClass = (tone, value) => {
    if (tone === 'rose') {
      return value > 0
        ? 'border-rose-300/35 bg-rose-500/20 text-rose-100'
        : 'border-rose-400/20 bg-rose-500/10 text-rose-200/70'
    }

    if (tone === 'amber') {
      return 'border-amber-300/35 bg-amber-500/18 text-amber-100'
    }

    return 'border-sky-300/35 bg-sky-500/16 text-sky-100'
  }

  return (
    <div className="w-full max-w-6xl mx-auto animate-slide-up px-4 [font-family:var(--font-game-body)]">
      <div className="text-center mb-8">
        <p className="text-[11px] sm:text-[12px] text-cyan-200/70 font-medium tracking-[0.08em] mb-2 [font-family:var(--font-game-display)]">
          Event Select
        </p>
        <h2 className="text-[28px] leading-tight font-semibold text-white/95 [font-family:var(--font-game-body)] tracking-[-0.01em]">
          퇴근 후 활동을 선택하세요
        </h2>
        <p className="text-[13px] text-white/50 mt-2 font-medium">
          하나의 루트만 고를 수 있습니다
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {choices.map((choice, idx) => {
          const isSelected = selectedIndex === idx
          const rewardBadges = getRewardBadges(choice)
          const route = choiceRoutes[idx]

          return (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`
                relative overflow-hidden group text-left rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer
                ${isSelected
                  ? 'border-cyan-200/60 bg-slate-900/88 -translate-y-0.5 shadow-[0_14px_30px_rgba(15,23,42,0.55)]'
                  : 'border-white/12 bg-slate-950/70 hover:border-cyan-200/35 hover:bg-slate-900/76'
                }
              `}
            >
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  isSelected ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className="absolute -inset-x-12 top-0 h-28 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent blur-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_52%)]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.08em] text-cyan-100/75 [font-family:var(--font-game-display)]">
                      선택지 {String(idx + 1).padStart(2, '0')}
                    </p>
                    <p className="text-[11px] text-white/45 mt-1">숫자 {idx + 1} 키로 선택</p>
                  </div>

                  <div className={`text-[10px] font-medium tracking-[0.03em] px-2 py-1 rounded-md border [font-family:var(--font-game-body)] ${
                    isSelected
                      ? 'border-cyan-200/55 text-cyan-50 bg-cyan-500/12'
                      : 'border-white/20 text-white/55 bg-white/5'
                  }`}>
                    {isSelected ? '선택됨' : '대기'}
                  </div>
                </div>

                <div className={`relative mb-4 overflow-hidden rounded-xl border ${route.panel}`}>
                  <img
                    src={route.art}
                    alt={`${route.label} 카드 아트`}
                    className={`w-full h-28 object-cover transition-transform duration-300 ${isSelected ? 'scale-[1.03]' : 'group-hover:scale-[1.03]'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${route.ring}`} />
                  <div className="absolute left-2 top-2 rounded-md border border-white/20 bg-black/35 px-2 py-0.5 text-[10px] font-medium tracking-[0.02em] text-white/90 [font-family:var(--font-game-body)]">
                    {route.chip}
                  </div>
                </div>

                <p className={`text-[19px] font-semibold leading-snug min-h-[88px] tracking-[-0.01em] ${
                  isSelected ? 'text-white' : 'text-white/88'
                }`}>
                  {choice.text}
                </p>

                <div className="mt-6">
                  <p className="text-[11px] tracking-[0.02em] text-white/50 mb-2 [font-family:var(--font-game-body)]">보상 변화</p>
                  <div className="flex flex-wrap gap-2">
                    {rewardBadges.length > 0 ? rewardBadges.map((reward) => (
                      <span
                        key={`${reward.label}-${reward.value}`}
                        className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[12px] font-semibold ${getBadgeClass(reward.tone, reward.value)}`}
                      >
                        <span className="text-white/70">{reward.label}</span>
                        <span>{formatDelta(reward.value)}</span>
                      </span>
                    )) : (
                      <span className="inline-flex rounded-md border border-white/12 bg-white/5 px-2.5 py-1 text-[12px] text-white/60">
                        변화 없음
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex flex-col items-center mt-8 gap-2">
        <p className="text-[12px] text-white/50">
          {selectedIndex === null ? '루트를 선택하세요' : `선택 완료: ${String(selectedIndex + 1).padStart(2, '0')}번`}
        </p>
        <button
          onClick={handleConfirm}
          disabled={selectedIndex === null}
          className="px-12 py-3 rounded-xl text-[15px] font-semibold [font-family:var(--font-game-body)] tracking-[0.01em] transition-all duration-200 cursor-pointer disabled:cursor-not-allowed border border-cyan-100/25 bg-cyan-300/16 text-cyan-50 hover:bg-cyan-200/20 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] disabled:bg-white/[0.04] disabled:text-white/25 disabled:border-white/10"
        >
          선택 확정
        </button>
      </div>
    </div>
  )
}
