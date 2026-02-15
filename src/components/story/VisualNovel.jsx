// Legacy emoji mappings - used by question components for boss reaction display
const CHARACTER_NAMES = {
  seoyeon: '박서연',
  sohee: '정소희',
  junhyung: '신준형',
}

const EXPRESSION_EMOJI = {
  seoyeon: {
    default: '😐',
    smile: '😊',
    serious: '😠',
    impressed: '🤔',
    frown: '😣',
    sigh: '😩',
    surprise: '😲',
  },
  sohee: {
    default: '😊',
    cheer: '🎉',
    excited: '🤩',
    shy: '😳',
    worried: '😟',
    amazed: '😲',
    pout: '😤',
  },
  junhyung: {
    default: '😐',
    smirk: '😏',
    shy: '😳',
    serious: '😠',
    annoyed: '😤',
    flustered: '😅',
    lookaway: '🙄',
  },
}

export { CHARACTER_NAMES, EXPRESSION_EMOJI }
