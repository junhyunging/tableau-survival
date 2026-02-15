export const CHARACTERS = {
  seoyeon: {
    name: '박서연',
    role: '팀장',
    nameColor: '#5b8df0',
    expressions: {
      default: '/images/characters/seoyeon/seoyeon_default.png',
      smile: '/images/characters/seoyeon/seoyeon_smile.png',
      impressed: '/images/characters/seoyeon/seoyeon_impressed.png',
      frown: '/images/characters/seoyeon/seoyeon_frown.png',
      sigh: '/images/characters/seoyeon/seoyeon_sigh.png',
      serious: '/images/characters/seoyeon/seoyeon_serious.png',
      surprise: '/images/characters/seoyeon/seoyeon_surprise.png',
    },
  },
  junhyung: {
    name: '신준형',
    role: '동기',
    nameColor: '#f0a05b',
    expressions: {
      default: '/images/characters/junhyung/junhyung_default.png',
      smirk: '/images/characters/junhyung/junhyung_smirk.png',
      shy: '/images/characters/junhyung/junhyung_shy.png',
      serious: '/images/characters/junhyung/junhyung_serious.png',
      annoyed: '/images/characters/junhyung/junhyung_annoyed.png',
      flustered: '/images/characters/junhyung/junhyung_flustered.png',
      lookaway: '/images/characters/junhyung/junhyung_lookaway.png',
    },
  },
  sohee: {
    name: '정소희',
    role: '동기',
    nameColor: '#f05b8d',
    expressions: {
      default: '/images/characters/sohee/sohee_default.png',
      cheer: '/images/characters/sohee/sohee_cheer.png',
      shy: '/images/characters/sohee/sohee_shy.png',
      pout: '/images/characters/sohee/sohee_pout.png',
      worried: '/images/characters/sohee/sohee_worried.png',
      amazed: '/images/characters/sohee/sohee_amazed.png',
      excited: '/images/characters/sohee/sohee_excited.png',
    },
  },
}

export const BACKGROUNDS = {
  office_day: '/images/backgrounds/bg_office_day.jpg',
  office_night: '/images/backgrounds/bg_office_night.jpg',
  meeting_room: '/images/backgrounds/bg_meeting_room.jpg',
  cafe: '/images/backgrounds/bg_cafe.jpg',
  restaurant: '/images/backgrounds/bg_restaurant.jpg',
  bar: '/images/backgrounds/bg_bar.jpg',
  rainy_street: '/images/backgrounds/bg_rainy_street.jpg',
  presentation: '/images/backgrounds/bg_presentation.jpg',
  rooftop: '/images/backgrounds/bg_rooftop.jpg',
  night_walk: '/images/backgrounds/bg_night_walk.jpg',
}

export function getPartnerCharacter(gender) {
  return gender === 'female' ? 'junhyung' : 'sohee'
}

export function getCharacterName(id, playerName) {
  if (id === 'player') return playerName || '나'
  if (id === 'narrator') return ''
  return CHARACTERS[id]?.name || id
}

export function getCharacterImage(id, expression = 'default') {
  const char = CHARACTERS[id]
  if (!char) return null
  return char.expressions[expression] || char.expressions.default
}
