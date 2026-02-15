# Tableau Quest - Phase A 구현 핸드오프 문서

## 현재 진행 상황
- **코드 변경: 0** — 아직 코드를 하나도 수정/생성하지 않았음
- 기존 코드 전체 분석 완료
- 구현 계획 수립 및 태스크 리스트 생성 완료

---

## 프로젝트 위치
`C:\Users\yea90\tableau coding\tableau-survival`

## 기존 기술 스택
- Vite + React 19 + Tailwind CSS 4 + React Router 7
- dnd-kit, Recharts, @uiw/react-codemirror
- localStorage 세이브

---

## 구현해야 할 것 (Phase A 전체 계획)

### Step 1: `src/data/characters.js` (새 파일)
캐릭터 이미지 매핑. 실제 존재하는 이미지 파일 기반:

```js
export const CHARACTERS = {
  seoyeon: {
    name: '박서연', role: '팀장', nameColor: '#5b8df0',
    expressions: {
      default: '/images/characters/seoyeon/seoyeon_default.png',
      smile: '/images/characters/seoyeon/seoyeon_smile.png',
      impressed: '/images/characters/seoyeon/seoyeon_impressed.jpg',
      frown: '/images/characters/seoyeon/seoyeon_frown.jpg',
      sigh: '/images/characters/seoyeon/seoyeon_sigh.jpg',
      serious: '/images/characters/seoyeon/seoyeon_serious.png',
      surprise: '/images/characters/seoyeon/seoyeon_surprise.png',
    }
  },
  junhyung: {
    name: '신준형', role: '선배 분석가', nameColor: '#f0a05b',
    expressions: {
      default: '/images/characters/junhyung/junhyung_default.png',
      smirk: '/images/characters/junhyung/junhyung_smirk.png',
      shy: '/images/characters/junhyung/junhyung_shy.png',
      serious: '/images/characters/junhyung/junhyung_serious.jpg',
      annoyed: '/images/characters/junhyung/junhyung_annoyed.jpg',
      flustered: '/images/characters/junhyung/junhyung_flustered.jpg',
      lookaway: '/images/characters/junhyung/junhyung_lookaway.jpg',
    }
  },
  sohee: {
    name: '한소희', role: '선배 분석가', nameColor: '#f05b8d',
    expressions: {
      default: '/images/characters/sohee/sohee_default.png',
      cheer: '/images/characters/sohee/sohee_cheer.png',
      shy: '/images/characters/sohee/sohee_shy.png',
      pout: '/images/characters/sohee/sohee_pout.png',
      worried: '/images/characters/sohee/sohee_worried.png',
      amazed: '/images/characters/sohee/sohee_amazed.jpg',
      excited: '/images/characters/sohee/sohee_excited.jpg',
    }
  },
}
```

### Step 2: `src/hooks/useGameState.jsx` (리라이트)
기존 5일 생존 시스템 → 20챕터 퀘스트 시스템으로 전면 교체.

**새 상태 모델:**
```js
{
  phase: 'title' | 'setup' | 'playing' | 'chapter_clear' | 'game_over',
  playerName: '',
  playerGender: 'male' | 'female',
  currentChapter: 1,       // 1~20
  chapterPhase: 'opening' | 'briefing' | 'problems' | 'boss' | 'clear' | 'event',
  currentProblemIndex: 0,
  xp: 0,
  level: 1,                // 1~10
  affection: 30,           // 0~100, 시작 30
  solvedProblems: [],
  correctCount: 0,
  incorrectCount: 0,
  currentTitle: 'intern',
  unlockedTitles: ['intern'],
}
```

**XP 레벨 테이블:** `[0, 80, 200, 400, 700, 1100, 1600, 2200, 3000, 4000]`

**주요 액션:**
- `START_NEW_GAME` — 초기 상태 + playerName + playerGender 설정
- `ANSWER_CORRECT` — XP +30~50, affection +2, correctCount++
- `ANSWER_INCORRECT` — XP +5~10, affection -1, incorrectCount++
- `ADVANCE_CHAPTER_PHASE` — chapterPhase 전진
- `NEXT_CHAPTER` — currentChapter++, chapterPhase→'opening'
- `CHOICE_MADE` — 이벤트 선택지 (affection/XP 변동)
- `UNLOCK_TITLE` — 칭호 해금
- `SAVE_GAME` / `LOAD_GAME` — localStorage 키: `'tableau-quest-save'`
- `RESET` — 초기 상태
- `GAME_OVER` — phase→'game_over'

**유지해야 할 export:**
- `GameProvider`, `useGameState`, `useGameDispatch`
- `hasSavedGame`, `getSavedGame`, `clearSavedGame`
- `getPartnerCharacter(gender)` — 성별에 따른 파트너 반환 (새로 추가)
- `getLevelFromXP(xp)` — XP→레벨 변환 (새로 추가)

### Step 3: `src/components/common/CharacterSetup.jsx` (리라이트)
- 이름 입력 (기존 유지)
- **성별 선택 추가**: 남성/여성 카드형 UI
  - 남성 → 파트너: 소희 (이미지 미리보기)
  - 여성 → 파트너: 준형 (이미지 미리보기)
- "시작하기" 버튼 → `START_NEW_GAME` dispatch with `{ name, gender }`

### Step 4: VN 엔진 (3개 새 파일)

#### `src/components/novel/CharacterSprite.jsx`
- props: `characterId, expression, position('left'|'center'|'right'), isActive, className`
- CHARACTERS에서 이미지 경로 가져옴
- isActive=false → `brightness(0.6) grayscale(0.3)`
- CSS transition으로 부드러운 표정 전환
- 등장 애니메이션 (slide-in from bottom)

#### `src/components/novel/DialogueBox.jsx`
- props: `speaker, text, onAdvance, nameColor`
- 하단 고정 대화창 (글래스모피즘 — 기존 .dialogue-box 스타일 활용)
- 화자 이름 표시 (CHARACTERS에서 가져옴)
- 타이핑 이펙트 (30ms/글자, 기존 StoryScene에서 가져옴)
- 클릭으로 스킵/다음
- narrator일 때 이름 없이 이탤릭체
- 'player'일 때는 playerName 표시

#### `src/components/novel/VNScene.jsx`
- props: `background, characters[], dialogues[], onComplete, choices?`
- 배경 이미지 풀스크린
- 캐릭터 최대 2명 (left, right)
- 대화 배열 순차 진행
- 대화 포맷: `{ speaker: 'seoyeon'|'narrator'|'player', expression?: string, text: string }`
- 현재 speaker 캐릭터만 isActive=true
- choices가 있으면 마지막에 선택지 표시

#### `src/index.css` 추가할 CSS:
```css
/* VN 엔진 */
.vn-container { position: relative; width: 100%; height: 100vh; overflow: hidden; }
.vn-background { position: absolute; inset: 0; background-size: cover; background-position: center; }
.vn-background::after { content: ''; position: absolute; inset: 0; background: linear-gradient(transparent 50%, rgba(0,0,0,0.7)); }
.character-sprite { position: absolute; bottom: 0; height: 80vh; transition: all 0.3s ease; }
.character-sprite.left { left: 5%; }
.character-sprite.right { right: 5%; }
.character-sprite.center { left: 50%; transform: translateX(-50%); }
.character-sprite.inactive { filter: brightness(0.6) grayscale(0.3); }
.character-sprite img { height: 100%; width: auto; object-fit: contain; }
/* slide-in animation */
@keyframes sprite-enter { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.sprite-enter { animation: sprite-enter 0.4s ease-out; }
/* 캐릭터별 이름 색상 */
.speaker-seoyeon { color: #5b8df0; }
.speaker-junhyung { color: #f0a05b; }
.speaker-sohee { color: #f05b8d; }
```

### Step 5: `src/data/chapters/chapter1.js` (새 파일)
챕터 1 "첫 출근, 데이터의 세계로" 데이터:
- `opening` — 10~15줄 대화 (narrator + seoyeon)
- `briefing` — Tableau 기본 개념 설명 대화
- `problems` — `['quiz_01', 'quiz_02', 'block_01']` (기존 문제 ID)
- `bossChallenge` — `'quiz_03'` (보스 문제)
- `clear` — 클리어 대화
- `event` — 점심 이벤트 (선택지 포함)

### Step 6: `src/components/chapter/ChapterFlow.jsx` (새 파일)
기존 StoryFlow.jsx 대체. chapterPhase 흐름 관리:
```
opening → briefing → problems → boss → clear → event → (다음 챕터)
```
- `opening/briefing/clear`: VNScene으로 재생
- `problems`: QuestionRouter로 문제 순차 출제 (기존 컴포넌트 재활용)
- `boss`: QuestionRouter로 보스 문제
- `event`: VNScene + 선택지

### Step 7: 페이지/컴포넌트 리라이트

#### `src/pages/GamePlay.jsx`
새 헤더: `[Ch.1 첫 출근] [Lv.3 ⭐] [XP ████░░ 200/400] [♥ 서연 45]`
```
phase === 'title'         → GameStart
phase === 'setup'         → CharacterSetup
phase === 'playing'       → Header + ChapterFlow
phase === 'chapter_clear' → ChapterClear
phase === 'game_over'     → GameOver (간소화)
```

#### `src/components/common/GameStart.jsx`
- 타이틀: "Tableau Quest" (기존 "Tableau Survival" 대체)
- 배경: bg_office_day.jpg 블러 처리
- 새 게임 / 이어하기 버튼

#### `src/components/chapter/ChapterClear.jsx` (새 파일)
- 챕터 클리어 결과 화면
- 획득 XP, 레벨업 여부, 호감도 변화 표시
- "다음 챕터" 버튼

#### `src/components/questions/QuizQuestion.jsx` (수정)
- `import { EXPRESSION_EMOJI } from '../story/VisualNovel'` 제거
- 보스 이모지를 간단한 인라인으로 교체하거나 CharacterSprite 사용

---

## 기존 파일 구조 (참고)
```
src/
├── App.jsx                          # BrowserRouter, Routes: / → GameStart, /play → GamePlay
├── main.jsx                         # StrictMode + createRoot
├── index.css                        # Tailwind + 커스텀 CSS (Tableau workspace + Game UI)
├── hooks/
│   └── useGameState.jsx             # GameProvider + Context + useReducer
├── pages/
│   └── GamePlay.jsx                 # 메인 게임 페이지
├── components/
│   ├── common/
│   │   ├── GameStart.jsx            # 타이틀 화면
│   │   ├── CharacterSetup.jsx       # 이름 입력
│   │   ├── GameOver.jsx             # 게임오버
│   │   ├── GameComplete.jsx         # 5일 완료
│   │   ├── GaugeBar.jsx             # 호감도 게이지바
│   │   └── TransitionScene.jsx      # 날짜 전환 씬
│   ├── story/
│   │   ├── StoryFlow.jsx            # 스토리 오케스트레이터 (→ ChapterFlow로 대체)
│   │   ├── StoryScene.jsx           # 대화 씬 (→ DialogueBox로 대체)
│   │   ├── VisualNovel.jsx          # 이모지 캐릭터 카드 (→ CharacterSprite로 대체)
│   │   └── ChoicePanel.jsx          # 선택지 (→ VNScene 내 흡수)
│   ├── questions/
│   │   ├── QuestionRouter.jsx       # 문제 타입 라우터 (유지)
│   │   ├── QuizQuestion.jsx         # 퀴즈 (수정 필요)
│   │   ├── BlockDragQuestion.jsx    # 드래그앤드롭 (유지)
│   │   └── CalcFieldQuestion.jsx    # 계산필드 (유지)
│   ├── blocks/ ...                  # 블록 드래그 하위 컴포넌트 (유지)
│   └── calcfield/ ...              # 계산필드 하위 컴포넌트 (유지)
├── data/
│   ├── problems/
│   │   ├── quizProblems.js          # quiz_01~quiz_08 (유지)
│   │   ├── blockDragProblems.js     # block_01~block_05 (유지)
│   │   └── calcFieldProblems.js     # calc_01~calc_07 (유지)
│   ├── stories/
│   │   └── insightlabStories.js     # 기존 5일 스토리 (ChapterFlow에서 참조 안 함)
│   └── tableauFunctions.js          # 계산필드 함수 레퍼런스 (유지)
└── utils/ ...                       # quizChecker, blockDragChecker, calcFieldValidator, chartRenderer (모두 유지)
```

## 실제 존재하는 이미지 파일
```
backgrounds/
  bg_bar.jpg, bg_cafe.jpg, bg_meeting_room.jpg, bg_night_walk.jpg,
  bg_office_day.jpg, bg_office_night.jpg, bg_presentation.jpg,
  bg_rainy_street.jpg, bg_restaurant.jpg, bg_rooftop.jpg

characters/seoyeon/
  seoyeon_default.png, seoyeon_smile.png, seoyeon_impressed.jpg,
  seoyeon_frown.jpg, seoyeon_sigh.jpg, seoyeon_serious.png, seoyeon_surprise.png

characters/junhyung/
  junhyung_default.png, junhyung_smirk.png, junhyung_shy.png,
  junhyung_serious.jpg, junhyung_annoyed.jpg, junhyung_flustered.jpg, junhyung_lookaway.jpg

characters/sohee/
  sohee_default.png, sohee_cheer.png, sohee_shy.png,
  sohee_pout.png, sohee_worried.png, sohee_amazed.jpg, sohee_excited.jpg
```

## 기존 문제 ID 목록
- 퀴즈: `quiz_01` ~ `quiz_08`
- 블록드래그: `block_01` ~ `block_05`
- 계산필드: `calc_01` ~ `calc_07`

## 구현 순서
1. `characters.js` + `index.css` CSS 추가
2. `useGameState.jsx` 리라이트
3. `CharacterSetup.jsx` 리라이트
4. VN 엔진 (`CharacterSprite` → `DialogueBox` → `VNScene`)
5. `chapter1.js` 데이터
6. `ChapterFlow.jsx`
7. `GamePlay.jsx` + `GameStart.jsx` 리라이트
8. `ChapterClear.jsx` + `QuizQuestion.jsx` 수정
9. 빌드 확인 & 수정

## 삭제 대상 (구현 완료 후)
- `src/components/story/StoryFlow.jsx`
- `src/components/story/VisualNovel.jsx`
- `src/components/story/StoryScene.jsx`
- `src/components/story/ChoicePanel.jsx`
- `src/components/common/GaugeBar.jsx`
- `src/components/common/GameOver.jsx` (간소화 버전으로 교체)
- `src/components/common/GameComplete.jsx` (20챕터 시스템에서 불필요)

## 주의사항
- 기존 QuestionRouter, BlockDragQuestion, CalcFieldQuestion 및 모든 문제 데이터는 **그대로 유지**
- App.jsx의 라우트 구조 동일 (`/` → GameStart, `/play` → GamePlay)
- Tailwind CSS 4 사용 (v4 문법: `@theme` 블록, `@import "tailwindcss"`)
- localStorage 키 `'tableau-survival-save'` → `'tableau-quest-save'`로 변경
