// Title (칭호) system — all 25 collectible titles

export const TITLES = [
  // ⭐ 별 수집 (Star Collection) — 5 titles
  {
    id: 'star_1',
    name: '별빛 수습생',
    desc: '별 10개 이상 수집',
    category: 'star',
    icon: '⭐',
    rarity: 'common',
    secret: false,
  },
  {
    id: 'star_2',
    name: '빛나는 분석가',
    desc: '별 20개 이상 수집',
    category: 'star',
    icon: '🌟',
    rarity: 'uncommon',
    secret: false,
  },
  {
    id: 'star_3',
    name: '별 폭격기',
    desc: '별 40개 이상 수집',
    category: 'star',
    icon: '💫',
    rarity: 'rare',
    secret: false,
  },
  {
    id: 'star_4',
    name: '완벽주의자',
    desc: '별 50개 이상 수집',
    category: 'star',
    icon: '✨',
    rarity: 'epic',
    secret: false,
  },
  {
    id: 'star_5',
    name: '별 수집 완료',
    desc: '모든 챕터 60성 달성',
    category: 'star',
    icon: '🌠',
    rarity: 'legendary',
    secret: false,
  },

  // 🏆 실력 (Skill) — 4 titles
  {
    id: 'skill_streak',
    name: '연속 무결',
    desc: '5문제 연속 정답',
    category: 'skill',
    icon: '🔥',
    rarity: 'common',
    secret: false,
  },
  {
    id: 'skill_nohint',
    name: '독립적 분석가',
    desc: '힌트 없이 5챕터 클리어',
    category: 'skill',
    icon: '🧠',
    rarity: 'uncommon',
    secret: false,
  },
  {
    id: 'skill_perfect',
    name: '퍼펙트 클리어',
    desc: '힌트 없이 챕터 100% 정답 클리어',
    category: 'skill',
    icon: '💯',
    rarity: 'rare',
    secret: false,
  },
  {
    id: 'skill_elite',
    name: '분석 엘리트',
    desc: '전체 정확도 80% 이상 (20문제 이상)',
    category: 'skill',
    icon: '🎯',
    rarity: 'epic',
    secret: false,
  },

  // 📚 파트 클리어 (Part Clear) — 5 titles
  {
    id: 'part_1',
    name: '기초 마스터',
    desc: 'Part 1 클리어 (Ch.1~5)',
    category: 'part',
    icon: '📊',
    rarity: 'common',
    secret: false,
  },
  {
    id: 'part_2',
    name: '중급 분석가',
    desc: 'Part 2 클리어 (Ch.6~10)',
    category: 'part',
    icon: '📈',
    rarity: 'uncommon',
    secret: false,
  },
  {
    id: 'part_3',
    name: '숙련 시각화가',
    desc: 'Part 3 클리어 (Ch.11~15)',
    category: 'part',
    icon: '🎨',
    rarity: 'rare',
    secret: false,
  },
  {
    id: 'part_4',
    name: '고급 인사이터',
    desc: 'Part 4 클리어 (Ch.16~20)',
    category: 'part',
    icon: '💡',
    rarity: 'epic',
    secret: false,
  },
  {
    id: 'part_all',
    name: '태블로 완주자',
    desc: '전체 20챕터 클리어',
    category: 'part',
    icon: '🏁',
    rarity: 'legendary',
    secret: false,
  },

  // 💕 호감도 (Affection) — 5 titles
  {
    id: 'aff_1',
    name: '동기의 시작',
    desc: '호감도 20 달성',
    category: 'affection',
    icon: '👥',
    rarity: 'common',
    secret: false,
  },
  {
    id: 'aff_2',
    name: '친한 동기',
    desc: '호감도 40 달성',
    category: 'affection',
    icon: '🤝',
    rarity: 'uncommon',
    secret: false,
  },
  {
    id: 'aff_3',
    name: '신뢰의 관계',
    desc: '호감도 60 달성',
    category: 'affection',
    icon: '💙',
    rarity: 'rare',
    secret: false,
  },
  {
    id: 'aff_4',
    name: '썸의 시작',
    desc: '호감도 80 달성',
    category: 'affection',
    icon: '💜',
    rarity: 'epic',
    secret: false,
  },
  {
    id: 'aff_5',
    name: '특별한 우리',
    desc: '호감도 100 달성',
    category: 'affection',
    icon: '❤️',
    rarity: 'legendary',
    secret: false,
  },

  // 🎮 히든 (Hidden) — 5 secret titles
  {
    id: 'hidden_firstday',
    name: '신입의 열정',
    desc: '첫 번째 챕터 클리어',
    category: 'hidden',
    icon: '🌅',
    rarity: 'common',
    secret: true,
  },
  {
    id: 'hidden_umbrella',
    name: '비 오는 날의 우산',
    desc: '비 오는 날, 함께 우산을 썼다.',
    category: 'hidden',
    icon: '☂️',
    rarity: 'rare',
    secret: true,
  },
  {
    id: 'hidden_gift',
    name: '선물의 의미',
    desc: '마음을 담은 선물을 받았다.',
    category: 'hidden',
    icon: '🎁',
    rarity: 'rare',
    secret: true,
  },
  {
    id: 'hidden_nightwalk',
    name: '우리의 밤 산책',
    desc: '옥상 아래, 함께 걷는 밤.',
    category: 'hidden',
    icon: '🌙',
    rarity: 'epic',
    secret: true,
  },
  {
    id: 'hidden_confession',
    name: '고백의 순간',
    desc: '마지막 밤, 솔직해진 마음.',
    category: 'hidden',
    icon: '🌸',
    rarity: 'legendary',
    secret: true,
  },
]

export const CATEGORY_META = {
  star:      { label: '별 수집',  color: '#ffd261' },
  skill:     { label: '실력',    color: '#48A868' },
  part:      { label: '파트',    color: '#5b8df0' },
  affection: { label: '호감도',  color: '#f05b8d' },
  hidden:    { label: '히든',    color: '#b07aa1' },
}

export const RARITY_META = {
  common:    { label: 'Common',    color: 'rgba(255,255,255,0.5)' },
  uncommon:  { label: 'Uncommon',  color: '#48A868' },
  rare:      { label: 'Rare',      color: '#5b8df0' },
  epic:      { label: 'Epic',      color: '#b07aa1' },
  legendary: { label: 'Legendary', color: '#ffd261' },
}

export function getTitleById(id) {
  return TITLES.find((t) => t.id === id) || null
}

function getTotalStars(state) {
  return Object.values(state.chapterStars || {}).reduce((a, b) => a + b, 0)
}

/**
 * Returns array of newly-unlocked title IDs given the current game state.
 * Skips titles already in state.unlockedTitles.
 */
export function checkTitleUnlocks(state) {
  const already = state.unlockedTitles || []
  const newTitles = []

  const totalStars = getTotalStars(state)
  const cleared = Object.keys(state.chapterStars || {}).map(Number)
  const total = (state.correctCount || 0) + (state.incorrectCount || 0)
  const accuracy = total >= 20 ? (state.correctCount || 0) / total : 0

  const part1 = [1, 2, 3, 4, 5].every((c) => cleared.includes(c))
  const part2 = [6, 7, 8, 9, 10].every((c) => cleared.includes(c))
  const part3 = [11, 12, 13, 14, 15].every((c) => cleared.includes(c))
  const part4 = [16, 17, 18, 19, 20].every((c) => cleared.includes(c))

  const cgSeen = state.cgSeen || []

  const check = (id, condition) => {
    if (!already.includes(id) && condition) newTitles.push(id)
  }

  // Star
  check('star_1', totalStars >= 10)
  check('star_2', totalStars >= 20)
  check('star_3', totalStars >= 40)
  check('star_4', totalStars >= 50)
  check('star_5', totalStars >= 60)

  // Skill
  check('skill_streak', (state.maxConsecutiveCorrect || 0) >= 5)
  check('skill_nohint', (state.hintFreeChapters || 0) >= 5)
  check('skill_perfect', state.hadPerfectChapter || false)
  check('skill_elite', accuracy >= 0.8)

  // Part
  check('part_1', part1)
  check('part_2', part2)
  check('part_3', part3)
  check('part_4', part4)
  check('part_all', part1 && part2 && part3 && part4)

  // Affection
  check('aff_1', (state.affection || 0) >= 20)
  check('aff_2', (state.affection || 0) >= 40)
  check('aff_3', (state.affection || 0) >= 60)
  check('aff_4', (state.affection || 0) >= 80)
  check('aff_5', (state.affection || 0) >= 100)

  // Hidden
  check('hidden_firstday', cleared.includes(1))
  check('hidden_umbrella', cgSeen.includes('umbrella'))
  check('hidden_gift', cgSeen.includes('gift'))
  check('hidden_nightwalk', cgSeen.includes('nightwalk'))
  check('hidden_confession', cgSeen.includes('confession'))

  return newTitles
}
