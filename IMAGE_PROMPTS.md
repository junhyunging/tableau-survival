# Tableau Quest - 이미지 에셋 프롬프트 가이드

> GenSpark에서 사용. 모든 프롬프트는 영어로 작성 (AI 모델 최적화)
> 총 필요 이미지: **약 90~100장**

---

## 공통 스타일 프리픽스

모든 캐릭터 프롬프트 앞에 아래 스타일을 붙인다:

```
STYLE PREFIX (캐릭터용):
"High quality Japanese visual novel CG illustration, modern anime art,
semi-realistic cel-shading with detailed soft lighting, clean sharp linework,
beautiful character design, studio-quality rendering like Fate or Blue Archive,
three-quarter body shot (head to mid-thigh), transparent background PNG,
detailed eyes with light reflections, professional anime game art"

STYLE PREFIX (배경용):
"Anime visual novel background art, detailed environment painting,
atmospheric lighting, cinematic composition, high quality game CG,
realistic Korean location and interior design, no characters,
wide aspect ratio 16:9, high detail"
```

---

# Section 1: 캐릭터 스프라이트 (GPT Image 1.5)

> **모델: GPT Image 1.5**
> 이유: 레퍼런스 이미지 업로드 후 표정만 변경 가능 → 캐릭터 일관성 최고
>
> **작업 순서:**
> 1. 기본 이미지를 먼저 생성 (가장 공들여서)
> 2. 기본 이미지를 업로드하고 표정만 변경 요청
> 3. 일관성이 안 맞으면 기본 이미지를 다시 업로드하고 재시도
>
> **중요:** 모든 캐릭터는 **머리~허벅지 중간 (three-quarter body)** 까지 보이게.
> 표정 변형 시에도 "Keep same three-quarter body framing" 을 붙여줄 것.
> 스타일은 **일본 비주얼노벨 CG** (Fate, Blue Archive, 프린세스 커넥트 느낌)

---

## 1-1. 박서연 팀장 (Park Seoyeon) — 7장

**캐릭터 설정:**
- 여성, 30세, 데이터 분석팀 리드
- 숏 블랙 밥 헤어 (목 위 길이, 깔끔한 컷)
- 네이비 블레이저 + 화이트 블라우스
- 날카로운 눈매, 자신감 있는 인상
- 슬림한 체형, 약간의 귀걸이 (심플한 실버)

### 기본 (default) — ⭐ 가장 먼저, 가장 공들여서
```
High quality Japanese visual novel CG illustration, modern anime art,
semi-realistic cel-shading with detailed soft lighting, clean sharp linework,
beautiful character design, studio-quality rendering like Fate or Blue Archive,
three-quarter body shot (head to mid-thigh), transparent background.

A woman, age 30, team leader at a consulting firm.
Short black bob haircut just above the neck, clean sharp cut.
Wearing a tailored navy blazer over a crisp white blouse,
dark pencil skirt to the knee. Small simple silver earrings.
Sharp confident eyes with detailed light reflections,
composed neutral expression, slight air of authority.
Slim build, professional posture with one hand lightly on hip.
Soft studio lighting from the left, subtle rim light on hair.
Detailed anime eyes, professional beauty.
```
**파일명:** `seoyeon_default.png`

### 미소 (smile)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: gentle confident smile, slightly raised lip corners, warm approving eyes.
Body: head tilted slightly to one side, one hand holding a tablet/folder
against her hip, relaxed open posture. Weight shifted to one leg.
She looks pleased with someone's work — cool but warm approval.
```
**파일명:** `seoyeon_smile.png`

### 감탄 (impressed)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: genuinely impressed, slightly widened eyes, eyebrows raised,
mouth slightly open in a small "oh".
Body: one hand raised near her chin in a thinking gesture,
other hand holding her elbow. Leaning slightly forward with interest.
Her body language says "I didn't expect that" — pleasantly surprised.
```
**파일명:** `seoyeon_impressed.png`

### 찡그림 (frown)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: slight frown, eyebrows furrowed, lips pressed thin,
looking critically with mild disapproval.
Body: arms crossed firmly over her chest, weight on one leg,
chin slightly raised. Closed-off authoritative stance.
Not angry, but clearly unimpressed and scrutinizing.
```
**파일명:** `seoyeon_frown.png`

### 한숨 (sigh)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: tired sigh, eyes half-closed looking slightly downward,
exhaling with mild exasperation.
Body: one hand pressing against her temple/forehead,
other hand on her hip. Shoulders slightly dropped.
Whole body says "here we go again" — weary but not giving up.
```
**파일명:** `seoyeon_sigh.png`

### 진지 (serious)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: very serious and focused, sharp intense gaze directly at the viewer,
slightly narrowed eyes, firm jaw.
Body: standing straight with perfect posture, both hands at her sides
or one hand gesturing forward as if giving an order/briefing.
Commanding presence, full authority mode — about to assign a critical mission.
```
**파일명:** `seoyeon_serious.png`

### 놀람 (surprise)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: genuinely surprised, eyes wide open, eyebrows raised high,
mouth slightly open in shock.
Body: upper body leaning back slightly, one hand raised near her chest
in a startled gesture, other hand holding papers that she almost dropped.
She rarely shows this much emotion — her composure is visibly cracked.
```
**파일명:** `seoyeon_surprise.png`

---

## 1-2. 신준형 (Shin Junhyung) — 오토메풍 남주, 7장

**캐릭터 설정:**
- 남성, 25세, 신입 데이터 분석가 (동기)
- 약간 긴 앞머리, 다크 브라운 헤어 (한쪽 눈이 살짝 가려짐)
- 슬랙스 + 화이트 셔츠 (칼같이 다림질), 소매 살짝 걷음
- 한쪽 귀에 무선 이어폰
- 날카롭지만 부드러운 눈매, 깔끔남 비주얼
- 키 크고 슬림한 체형

### 기본 (default) — 여유로운 미소
```
High quality Japanese visual novel CG illustration, modern anime art,
semi-realistic cel-shading with detailed soft lighting, clean sharp linework,
beautiful character design, studio-quality rendering like Fate or Blue Archive,
three-quarter body shot (head to mid-thigh), transparent background.

A man, age 27, new data analyst at a consulting firm.
Slightly long dark brown hair with bangs partially covering one eye.
Wearing a crisp well-ironed white dress shirt with sleeves slightly rolled up,
dark charcoal slacks with a slim belt. One wireless earbud in his left ear.
Sharp but soft facial features, defined jawline, tall and slim build.
Expression: relaxed confident smirk, one corner of his mouth slightly up,
one hand casually in his pocket, looking effortlessly cool.
Detailed anime eyes with light reflections showing quiet intelligence.
Soft studio lighting, subtle rim light from the right.
Handsome ikemen visual novel male lead design.
```
**파일명:** `junhyung_default.png`

### 씩 웃음 (smirk)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: playful smirk, one eyebrow slightly raised,
looking amused and competitive, teasing someone.
Body: leaning back casually with arms loosely crossed,
weight on one leg, chin slightly tilted up. Cocky relaxed stance.
Radiating "I could do that too" confident energy.
```
**파일명:** `junhyung_smirk.png`

### 당황 (flustered)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: caught off guard, eyes slightly wider, a tiny sweat drop near temple.
Trying to play it cool but clearly flustered.
Body: one hand awkwardly scratching the back of his neck,
other hand half-raised in a defensive gesture. Shoulders slightly hunched.
His usual cool posture is completely disrupted — stiff and uneasy.
```
**파일명:** `junhyung_flustered.png`

### 찡그림 (annoyed)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: mildly annoyed, slight frown, lips pressed together,
looking away with mild irritation.
Body: one hand shoved deep in pocket, other hand loosely holding
his phone at his side. Body turned slightly away, shoulder facing viewer.
Competitive frustration — not angry, more like "tch, whatever."
```
**파일명:** `junhyung_annoyed.png`

### 진지 (serious)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: intensely focused, sharp direct gaze, eyes slightly narrowed,
jaw set firmly. All playfulness completely gone.
Body: standing perfectly straight, arms at his sides with fists
slightly clenched. Squared shoulders, tall posture fully extended.
His genuinely capable and reliable side showing — dependable aura.
```
**파일명:** `junhyung_serious.png`

### 시선 회피 (looking away)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: deliberately looking away to the side, avoiding eye contact,
lips slightly pursed, tension in his jaw — self-conscious.
Body: both hands in pockets, body turned 30 degrees away from viewer.
One shoulder raised slightly as if shielding himself.
Trying to look indifferent but his stiff posture betrays nervousness.
```
**파일명:** `junhyung_lookaway.png`

### 귀 빨개짐 (ears red / shy)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: looking slightly downward, ears visibly reddened/blushing,
slight bite on lower lip. Cool facade cracking. Pink blush on ear tips.
Body: one hand covering his mouth/lower face trying to hide embarrassment,
other arm crossed over his stomach. Shoulders drawn inward, slightly hunched.
His whole body is trying to shrink and hide — the cool guy is gone.
```
**파일명:** `junhyung_shy.png`

---

## 1-3. 정소희 (Jeong Sohee) — 갈게/에로게풍 여주, 7장

**캐릭터 설정:**
- 여성, 25세, 신입 데이터 분석가 (동기)
- 부드러운 웨이브 미디엄 헤어, 밝은 갈색 (어깨 아래 길이)
- 블라우스 + 크림색 카디건
- 동글동글한 큰 눈, 둥근 얼굴형
- 밝고 사근사근한 인상
- 보통 체형, 부드러운 분위기

### 기본 (default) — 밝은 미소
```
High quality Japanese visual novel CG illustration, modern anime art,
semi-realistic cel-shading with detailed soft lighting, clean sharp linework,
beautiful character design, studio-quality rendering like Fate or Blue Archive,
three-quarter body shot (head to mid-thigh), transparent background.

A woman, age 25, new data analyst at a consulting firm.
Soft wavy medium-length light brown hair falling just past shoulders.
Wearing a light pink blouse under a cream-colored open cardigan,
beige pleated skirt to just above the knee.
Round face with large expressive round eyes, soft features.
Expression: bright warm genuine smile, eyes slightly squinting from smiling,
hands held together in front of skirt, radiating friendliness and warmth.
Detailed anime eyes with sparkling light reflections, approachable and cute.
Soft warm lighting, gentle and inviting atmosphere.
Cute visual novel heroine design, naturally pretty.
```
**파일명:** `sohee_default.png`

### 감탄 (star eyes / amazed)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: wide eyes sparkling with genuine amazement, visible star/sparkle in eyes,
mouth open in a delighted "wahhh~!"
Body: both hands clasped together near her chin, leaning forward eagerly,
standing on her toes slightly. Whole body radiating excitement.
Like a kid seeing fireworks — pure genuine wonder and admiration.
```
**파일명:** `sohee_amazed.png`

### 부끄러움 (blushing / shy)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: cheeks visibly blushing deep pink, eyes looking downward shyly,
small embarrassed smile trying to hide.
Body: one hand touching her own cheek feeling the warmth,
other hand fidgeting with the hem of her cardigan.
Knees slightly turned inward (pigeon-toed), shrinking into herself.
Clearly flustered — her whole body is saying "this is embarrassing."
```
**파일명:** `sohee_shy.png`

### 걱정 (worried)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: worried and concerned, eyebrows tilted upward,
eyes showing genuine concern, lips slightly pursed.
Body: both hands clasped together tightly in front of her chest
almost like praying, shoulders raised and tense.
Leaning slightly toward the viewer — wants to help but doesn't know how.
Anxious energy, like she's watching someone struggle.
```
**파일명:** `sohee_worried.png`

### 삐짐 (pouting)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: cheeks slightly puffed out in a cute pout, eyebrows furrowed,
lips pushed out, looking away with mock annoyance.
Body: arms crossed over her chest, body turned slightly away,
one foot tapping. Head turned away but eyes slightly glancing back.
It's more adorable than actually angry — she wants attention.
```
**파일명:** `sohee_pout.png`

### 설렘 (excited / heart flutter)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: eyes bright and slightly dreamy, subtle blush on cheeks,
a shy hopeful smile — her heart is clearly racing.
Body: both hands pressed together against her chest over her heart,
fingers interlaced. Shoulders drawn up with nervous excitement,
knees slightly together, slight lean forward.
Her whole body is contained excitement — trying not to show it but failing.
```
**파일명:** `sohee_excited.png`

### 응원 (cheering)
```
[기본 이미지를 업로드하고]
Keep the exact same character, same clothes, same hair, same art style.
Same three-quarter body framing. Change expression AND pose:
Face: determined encouraging smile, eyes bright and fired up,
radiating positive energy.
Body: one fist raised high in a "fighting!" (화이팅!) pose,
other hand on her hip confidently. Standing wide and energetic,
leaning forward with enthusiasm. Whole body full of spirit.
Like she's cheering someone on with every fiber of her being.
```
**파일명:** `sohee_cheer.png`

---

# Section 2: 배경 일러스트 (Flux 2 Pro)

> **모델: Flux 2 Pro**
> 이유: 포토리얼 환경 렌더링 최강, 조명/분위기 표현 뛰어남
>
> **모든 배경: 16:9 비율, 캐릭터 없음, 게임 배경으로 사용**

---

### 2-1. 사무실 (낮) — 가장 많이 쓰이는 기본 배경
```
Japanese visual novel background art, anime game environment painting,
detailed illustration with atmospheric warm lighting.

Modern Korean startup open-plan office interior during daytime.
Clean desks with dual monitors, ergonomic chairs, Kakao Talk open on screens.
Large windows letting in warm natural daylight, view of Korean city buildings.
Light wood desks, gray carpet, motivational Korean quotes on the wall.
Potted plants, Starbucks takeout cups on desks, Post-it notes everywhere.
A shared whiteboard with Korean text scribbles near the window.
Depth of field effect with background slightly soft.
No people. Wide 16:9 composition. Feels like a real 강남/판교 tech office.
Cinematic lighting, morning golden hour feel.
```
**파일명:** `bg_office_day.png`

### 2-2. 사무실 (야간) — 야근 씬
```
Same Korean startup office as bg_office_day but during late-night overtime (야근).
Overhead fluorescent lights on, windows showing dark Korean city skyline
with apartment lights and 한강 bridge lights visible in distance.
One desk lamp creating a warm pool of light on a messy workstation.
Cup ramyeon (컵라면) and empty coffee cans on the desk.
Most desks empty with monitors off, jackets draped over chairs.
Slightly blue-tinted ambient light mixed with warm desk lamp glow.
Quiet, focused 야근 atmosphere. No people.
Wide 16:9, cinematic, relatable Korean overtime mood.
```
**파일명:** `bg_office_night.png`

### 2-3. 회의실 — 브리핑/미션 설명 씬
```
Japanese visual novel background art, anime game CG style,
detailed environment, professional atmosphere.

Korean corporate meeting room (회의실) in a modern office.
Long table with 8 chairs, large whiteboard with Korean text and diagrams,
wall-mounted Samsung/LG TV screen showing a Tableau dashboard.
Clean design, frosted glass partitions with company logo.
Warm overhead lighting, natural light from side windows.
Whiteboard markers, Post-it notes, printed handouts on the table.
Water bottles and a conference phone in the center.
Professional Korean meeting room. No people.
Wide 16:9, looking from one end of the table.
```
**파일명:** `bg_meeting_room.png`

### 2-4. 카페/휴게실 — 카페 이벤트 (Ch 2,6,10,14,18)
```
Japanese visual novel background art, warm cozy atmosphere,
modern digital art style, detailed environment painting.

Korean startup office break room / pantry area.
Nespresso coffee machine on counter, a mini fridge with stickers,
snack basket with Pepero and choco pies visible, water dispenser.
Small round table with 2-3 chairs, a low couch with cushions.
Warm pendant lighting, company bulletin board on the wall with
team photos and Post-it notes. Indoor plants on the windowsill.
A window showing Korean city buildings. Casual relaxing vibe.
No people. Wide 16:9, relatable Korean office pantry feel.
```
**파일명:** `bg_cafe.png`

### 2-5. 식당 — 점심 이벤트 (Ch 1,5,9,13,17)
```
Japanese visual novel background art, anime game CG style,
detailed environment painting, lunchtime atmosphere.

Korean 백반집 or 분식집 style restaurant during lunch hour.
Wooden tables with metal chopsticks and spoons already set,
banchan plates, Korean menu on the wall with handwritten prices.
Warm lighting from fluorescent + pendant lamps mix.
Large windows showing a busy Korean street with office workers outside.
Water purifier in the corner, small TV playing news.
Bright, cheerful Korean lunchtime mood. No people.
Wide 16:9, authentic Korean office worker lunch spot.
```
**파일명:** `bg_restaurant.png`

### 2-6. 술집/회식장 — 회식 이벤트 (Ch 4,8,12,16,20)
```
Japanese visual novel background art, anime game CG style,
detailed environment painting, evening social atmosphere.

Korean-style 고깃집 (Korean BBQ restaurant) for company dinner (회식).
Warm dim amber lighting, wooden tables with built-in grills,
typical Korean booth seating. Soju bottles and green glasses on tables,
tongs and scissors near the grill, side dish plates (반찬).
Ventilation hoods above each table, Korean beer posters on walls.
Cozy atmosphere with exposed bulb pendant lights.
Evening 회식 vibe, social and warm. No people.
Wide 16:9, authentic Korean company dinner atmosphere.
```
**파일명:** `bg_bar.png`

### 2-7. 비 오는 거리 — 특별 이벤트 (우산 이벤트, 호감도 40)
```
Japanese visual novel background art, anime game CG style,
detailed environment painting, romantic rainy mood.

Korean city street near Gangnam/Yeoksam office district at dusk during rainfall.
Wet asphalt reflecting warm streetlights and Korean neon signs (한글 간판).
Rain falling steadily, visible raindrops and puddle reflections.
A Korean bus stop shelter (유리 버스정류장) where someone could wait.
CU or GS25 convenience store glowing in the background.
Blurred Korean city lights, taxi headlights in the rain.
Moody but romantic atmosphere, warm color grading.
No people. Wide 16:9, cinematic Korean rainy evening mood.
```
**파일명:** `bg_rainy_street.png`

### 2-8. 야경 거리 — 특별 이벤트 (야근 후 같이 걷기, 호감도 60)
```
Japanese visual novel background art, anime game CG style,
detailed environment painting, quiet nighttime walk.

Korean city sidewalk at night near 한강 (Han River) or quiet office district.
Street lamps casting warm pools of light on the sidewalk.
Quiet area with a nearby convenience store (편의점) glow in background.
Vending machine with warm drinks, ginkgo trees lining the path.
Distant view of Korean apartment buildings (아파트) with lit windows.
Peaceful, romantic atmosphere for a late night walk after overtime.
No people. Wide 16:9, serene Korean nighttime mood.
```
**파일명:** `bg_night_walk.png`

### 2-9. 프레젠테이션 룸 — 클라이언트 발표 씬
```
Japanese visual novel background art, anime game CG style,
detailed environment painting, professional presentation.

Korean corporate presentation room in a 대기업 or 컨설팅 firm.
Podium with Samsung laptop, large projection screen showing KPI charts.
Rows of executive chairs, subtle blue-white lighting.
Korean corporate atmosphere, slightly dim ambient lighting
with the screen being the brightest light source.
Company logo on the podium, water and laser pointer on the desk.
Feels like a real client presentation in 여의도 or 강남.
No people. Wide 16:9, high-stakes Korean corporate setting.
```
**파일명:** `bg_presentation.png`

### 2-10. 옥상/테라스 — 특별 이벤트, 감정적인 대화 씬
```
Japanese visual novel background art, anime game CG style,
detailed environment painting, emotional rooftop scene.

Korean office building rooftop (옥상) during golden hour sunset.
Simple bench, a few potted plants, green safety railing.
Panoramic view of Korean city skyline — 아파트 단지, 남산타워 silhouette,
distant 한강 reflecting the sunset. Orange and purple sky.
Wind gently moving someone's forgotten laundry rack nearby.
Vending machine in the corner, cigarette butt bin near the door.
Peaceful, emotional atmosphere with realistic Korean rooftop details.
No people. Wide 16:9, golden hour warmth, 고백 or 진심 대화 장면용.
```
**파일명:** `bg_rooftop.png`

---

# Section 3: 챕터 썸네일 (Seedream v4.5)

> **모델: Seedream v4.5**
> 이유: 구도 + 텍스트 렌더링 강점, 포스터/카드 형식에 최적
>
> **모든 썸네일: 3:4 세로 비율 (챕터 카드용), 캐릭터 포함 가능**
> **스타일: 배경 + 실루엣/뒷모습 위주 (캐릭터 일관성 부담 줄이기)**

---

### Part 1: 태블로 기초

#### Ch1 — 태블로와의 첫 만남
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A young professional seen from behind, standing at the entrance of
a modern Korean office building on their first day.
Morning sunlight streaming in, glass doors ahead.
A confident woman in navy blazer (seen partially) extends her hand
for a handshake. Fresh start atmosphere, hopeful mood.
Warm golden lighting, cinematic composition.
Text at bottom: "Chapter 1" in clean modern font.
```
**파일명:** `thumb_ch01.png`

#### Ch2 — 차원과 측정값
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A woman in navy blazer drawing on a large whiteboard in a meeting room.
The whiteboard shows "Dimension" and "Measure" with diagrams.
Seen from a student's perspective, slightly looking up.
Professional teaching moment, focused atmosphere.
Clean bright meeting room lighting.
```
**파일명:** `thumb_ch02.png`

#### Ch3 — 마크 카드와 차트의 세계
```
Japanese visual novel CG style, vertical 3:4 poster composition.
Close-up of a computer monitor displaying a colorful bar chart.
A person's face reflected in the screen, eyes wide with wonder.
Multiple chart types floating/overlaid artistically around the screen.
Discovery and amazement mood, blue and orange data visualization colors.
```
**파일명:** `thumb_ch03.png`

#### Ch4 — 데이터 준비의 기술
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A laptop screen showing a messy Excel spreadsheet with red error cells.
A person's hands on the keyboard, looking overwhelmed.
Coffee cup nearby, sticky notes scattered. Papers with data.
Slight comedic stress mood, warm office lighting.
```
**파일명:** `thumb_ch04.png`

### Part 2: 계산의 기술

#### Ch5 — 계산된 필드 입문
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A person staring intensely at a code editor on screen,
chin resting on hand in a thinking pose. The screen shows
formula-like text glowing softly. Dark background around screen.
Focused concentration mood, the glow of knowledge.
```
**파일명:** `thumb_ch05.png`

#### Ch6 — 날짜와 문자열 함수
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A team of two people (man and woman) at a desk, looking at a screen
showing shipping/delivery data with dates highlighted.
Collaborative analysis mood, afternoon office lighting.
Calendar and timeline graphics floating artistically.
```
**파일명:** `thumb_ch06.png`

#### Ch7 — 매개변수와 시나리오 분석
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A person confidently presenting to a group of blurred figures,
large screen behind showing an interactive dashboard with sliders.
Confident presenter mood, professional presentation lighting.
The screen glows with dynamic chart elements.
```
**파일명:** `thumb_ch07.png`

#### Ch8 — 테이블 계산
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A person with head in hands surrounded by floating mathematical formulas,
arrows pointing in different directions (table calculation directions).
Slight overwhelm but determination mood, dramatic lighting.
Complex formulas dissolving into organized patterns.
```
**파일명:** `thumb_ch08.png`

#### Ch9 — LOD 표현식
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A dramatic "eureka" moment — person looking up with wide eyes as
a complex LOD formula { FIXED : } materializes in glowing text above.
Light bursting from the formula, enlightenment mood.
Dark background with a single bright source of inspiration.
```
**파일명:** `thumb_ch09.png`

### Part 3: 비즈니스 분석 기법

#### Ch10 — KPI 대시보드
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A person standing before executives in a boardroom,
presenting a large screen showing KPI dashboard with green arrows up.
Important presentation mood, professional confidence.
The dashboard glows prominently, executives shown as silhouettes.
```
**파일명:** `thumb_ch10.png`

#### Ch11 — 퍼널 분석과 AARRR
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A large funnel visualization floating in space, each layer labeled,
with a person pointing at the narrowest bottleneck section.
Investigative detective mood, analytical focus.
Red highlight on the problem area of the funnel.
```
**파일명:** `thumb_ch11.png`

#### Ch12 — 파레토 분석
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A dramatic dual-axis chart (bar + line) on a screen,
the 80% line highlighted with a golden glow.
A person's hand pointing at the key insight point.
Discovery mood, the moment of finding the vital few.
```
**파일명:** `thumb_ch12.png`

#### Ch13 — 고객 세분화와 RFM
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A team meeting scene, a person presenting customer segments
on a screen showing colored customer groups/clusters.
Collaborative analysis mood, team is engaged.
Multiple customer profile icons floating around.
```
**파일명:** `thumb_ch13.png`

#### Ch14 — 코호트 분석
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A large heatmap on screen showing cohort retention data,
colors graduating from dark blue to bright red.
A senior woman (team lead silhouette) nodding approvingly.
Validation mood, the satisfaction of solid analysis.
```
**파일명:** `thumb_ch14.png`

#### Ch15 — 시계열 분석
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A person giving a presentation, behind them a large screen showing
a time series line chart with a forecast line extending into the future.
The forecast area has a soft glow (uncertainty zone).
Futuristic analytical mood, confident prediction.
```
**파일명:** `thumb_ch15.png`

#### Ch16 — 분포와 이상값
```
Japanese visual novel CG style, vertical 3:4 poster composition.
Two people high-fiving in front of a screen showing a scatter plot
with a red-circled outlier point. Celebration of discovery.
Energy and teamwork mood, office background.
The outlier glows red dramatically.
```
**파일명:** `thumb_ch16.png`

### Part 4: 실무 대시보드

#### Ch17 — 대시보드 설계 원칙
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A person sketching wireframes on a large sheet of paper or tablet,
pencil in hand, surrounded by rough layout sketches.
Creative planning mood, design thinking atmosphere.
Wireframe sketches have a slight blue glow.
```
**파일명:** `thumb_ch17.png`

#### Ch18 — 대시보드 액션
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A close-up of a hand clicking on an interactive dashboard,
and the connected charts visually reacting with glowing connection lines.
Amazement at interactivity, "wow it works!" expression on face reflection.
Technology magic mood, dynamic UI elements.
```
**파일명:** `thumb_ch18.png`

#### Ch19 — 인사이트 도출과 스토리텔링
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A confident person at a podium, presenting insights to an audience.
Behind them a screen shows key findings with arrow flow.
Confidence and growth mood, the person looks transformed from Ch1.
Spotlight on the presenter, audience in soft bokeh.
```
**파일명:** `thumb_ch19.png`

#### Ch20 — 최종 프로젝트
```
Japanese visual novel CG style, vertical 3:4 poster composition.
A wide shot of a team celebration — the main character surrounded by
colleagues, team lead, and partner, everyone clapping.
Confetti or subtle light particles floating.
Achievement and completion mood, warm emotional lighting.
The final moment of triumph and belonging.
```
**파일명:** `thumb_ch20.png`

---

# Section 4: 특별 이벤트 CG (GPT Image 1.5)

> **모델: GPT Image 1.5**
> 이유: 기존 캐릭터 레퍼런스를 업로드해서 일관성 유지
>
> **풀스크린 CG (16:9), 특별한 순간의 한 장면**
> **신준형/정소희 각각 별도 생성 (총 2배)**

---

### 4-1. 우산 이벤트 (호감도 40 도달) — 2장

#### 신준형 버전
```
[junhyung_default.png + bg_rainy_street.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same male character (reference), standing at a bus stop in the rain.
He's holding out an umbrella to the viewer's direction without looking,
slightly turned away, ears slightly red. Rain falling around them.
Korean bus stop (버스정류장) and convenience store lights in background.
Rainy evening lighting, reflective wet Korean street, romantic atmosphere.
His expression is trying to look indifferent but his ears are red.
Visual novel CG scene quality, intimate moment.
```
**파일명:** `cg_umbrella_junhyung.png`

#### 정소희 버전
```
[sohee_default.png + bg_rainy_street.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same female character (reference), holding an umbrella and leaning close
to share it with the viewer. Bright smile despite the rain.
One hand pulling the viewer closer by the arm.
Korean street with 한글 signs in background, warm streetlight glow.
Her hair slightly wet, cheeks slightly pink from closeness.
Visual novel CG scene quality, sweet moment.
```
**파일명:** `cg_umbrella_sohee.png`

### 4-2. 야근 후 같이 걷기 (호감도 60) — 2장

#### 신준형 버전
```
[junhyung_default.png + bg_night_walk.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same male character (reference), walking side by side with the viewer
on a quiet Korean nighttime street near 편의점 and 가로수길.
Hands in pockets, looking up at the sky.
Peaceful quiet mood, Korean streetlamp glow, slight breeze on hair.
He looks contemplative and unusually open/vulnerable.
Warm nighttime color grading, intimate Korean 퇴근길 walking scene.
```
**파일명:** `cg_nightwalk_junhyung.png`

#### 정소희 버전
```
[sohee_default.png + bg_night_walk.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same female character (reference), walking close to the viewer
on a quiet Korean nighttime street. Holding a warm 캔커피 in both hands.
Looking at the viewer with a gentle, affectionate smile.
Peaceful intimate mood, Korean streetlamp and 편의점 warm lighting.
Hair gently moving in the breeze, soft bokeh Korean city lights behind.
```
**파일명:** `cg_nightwalk_sohee.png`

### 4-3. 선물/메모 이벤트 (호감도 80) — 2장

#### 신준형 버전 — 커피 + 메모 "수고했다"
```
[junhyung_default.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same male character (reference), placing a coffee cup and a small note
on the viewer's desk in a Korean office.
Starbucks or 이디야 takeout cup and a small Post-it note that reads "수고했다."
He's looking away, hand on the back of his neck, ears red.
Morning Korean office lighting, monitors and Post-its visible in background.
Tsundere caring moment, trying to act casual but clearly nervous.
```
**파일명:** `cg_gift_junhyung.png`

#### 정소희 버전 — 손편지 전달
```
[sohee_default.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same female character (reference), extending a handwritten letter
toward the viewer with both hands, eyes slightly teary but smiling.
Standing in the Korean office pantry (휴게실), warm afternoon lighting.
Emotional genuine moment, her cheeks are pink.
The letter has cute Korean stickers and careful 손글씨 handwriting.
Coffee machine and snack shelf slightly visible in the blurred background.
```
**파일명:** `cg_gift_sohee.png`

### 4-4. 고백 엔딩 CG (호감도 81~100) — 2장

#### 신준형 고백
```
[junhyung_default.png + bg_rooftop.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same male character (reference), on a Korean office rooftop (옥상) at sunset.
Seoul skyline and 남산타워 silhouette visible in the golden background.
He's looking directly at the viewer with intense serious eyes,
one hand slightly reaching forward. Wind blowing his hair.
Golden hour sunset behind him, dramatic orange-purple sky.
His expression: "I need to tell you something" — vulnerable but determined.
Most emotional CG in the game. Cinematic visual novel confession scene, beautiful anime art.
```
**파일명:** `cg_confession_junhyung.png`

#### 정소희 고백
```
[sohee_default.png + bg_rooftop.png 를 레퍼런스로 업로드]

High quality Japanese visual novel CG, 16:9 cinematic illustration.
Same female character (reference), on a Korean office rooftop (옥상) at sunset.
Seoul skyline with warm evening lights in the background.
Eyes glistening with tears, hands clasped to chest, looking at viewer.
Wind gently blowing her wavy hair, golden sunset backlighting.
Her expression: loving, nervous, brave. Small tears forming.
Most emotional CG in the game. Cinematic visual novel confession scene, beautiful anime art.
Cherry blossom petals (벚꽃) floating in the warm evening air.
```
**파일명:** `cg_confession_sohee.png`

---

# Section 5: 칭호 테두리 프레임 (Recraft V3)

> **모델: Recraft V3**
> 이유: 디자인/벡터/로고/프레임 작업에 특화, HuggingFace 벤치마크 1위
>
> **메이플스토리식 칭호 네임플레이트 — 6등급 시스템**
> **모든 프레임: 투명 배경 PNG, 가로형 (약 300×60px 비율)**
> **가운데 텍스트 영역은 비워두기 (코드에서 텍스트 삽입)**

---

## 등급 시스템

| 등급 | 이름 | 색상 테마 | 해당 칭호 |
|------|------|----------|----------|
| **Tier 1** | 일반 (Common) | 회색/실버 | 수습 분석가, 데이터 루키, 첫 걸음, 반짝이 루키 |
| **Tier 2** | 고급 (Uncommon) | 파란색 | 차트 메이커, 분석 전사, 별 사냥꾼, 기초 졸업생, 관심의 시작, 불굴의 도전자 |
| **Tier 3** | 희귀 (Rare) | 보라색 | 인사이트 헌터, 데이터 마법사, 스타 컬렉터, 계산의 달인, 분석 전문가, 두근두근, 야근의 왕 |
| **Tier 4** | 영웅 (Epic) | 금색 | 시니어 분석가, 분석 챔피언, 별의 지배자, 대시보드 아키텍트, 완벽주의자, 사내 연애 주의보, 스피드 러너, 힌트? 그게 뭐죠?, 회식의 달인 |
| **Tier 5** | 전설 (Legendary) | 레인보우/오렌지 | 데이터 레전드, 태블로 마스터, 은하수 정복자, 천재 분석가, 해피엔딩, 철벽남/녀, LOD 해독가 |
| **Tier 6** | 신화 (Mythic) | 빛나는 골드+화이트 | 그로우랩의 에이스 |

---

### Tier 1: 일반 (Common) — 심플한 실버 프레임
```
Game UI design, fantasy RPG title nameplate frame.
Simple thin silver/gray metallic border, rectangular with
slightly rounded corners. Minimal decoration, clean and basic.
Small subtle shine on the edges. Empty center for text.
Transparent background PNG. Horizontal badge shape (5:1 ratio).
Style: MapleStory / Korean MMO title plate.
Understated, beginner-level achievement feel.
```
**파일명:** `frame_common.png`

### Tier 2: 고급 (Uncommon) — 블루 글로우 프레임
```
Game UI design, fantasy RPG title nameplate frame.
Blue metallic border with soft blue glow/aura effect.
Slightly more ornate than basic, with small crystal-like decorations
at the corners. Subtle blue particle effects around edges.
Empty center for text. Transparent background PNG.
Horizontal badge shape (5:1 ratio).
Style: MapleStory / Korean MMO title plate.
Noticeable upgrade from common, intermediate achievement.
```
**파일명:** `frame_uncommon.png`

### Tier 3: 희귀 (Rare) — 퍼플 엘레강스 프레임
```
Game UI design, fantasy RPG title nameplate frame.
Elegant purple/violet metallic border with swirling purple aura.
Ornate vine-like decorations along the edges,
small amethyst gem accents at corners and center top.
Soft purple glow emanating outward. Empty center for text.
Transparent background PNG. Horizontal badge shape (5:1 ratio).
Style: MapleStory / Korean MMO title plate.
Distinctly prestigious, mid-tier rare achievement.
```
**파일명:** `frame_rare.png`

### Tier 4: 영웅 (Epic) — 골드 오네이트 프레임
```
Game UI design, fantasy RPG title nameplate frame.
Ornate golden metallic border with intricate filigree patterns.
Wings or laurel wreath decorations extending from the sides.
Golden particles/sparkles floating around the frame.
Ruby or amber gem at the center top. Rich gold glow effect.
Empty center for text. Transparent background PNG.
Horizontal badge shape (5:1 ratio).
Style: MapleStory / Korean MMO title plate.
Impressive and prestigious, high-tier achievement, clearly elite.
```
**파일명:** `frame_epic.png`

### Tier 5: 전설 (Legendary) — 레인보우 오라 프레임
```
Game UI design, fantasy RPG title nameplate frame.
Magnificent border with shifting rainbow/iridescent metallic sheen.
Elaborate dragon or phoenix wing motifs extending from the sides.
Multiple gems embedded (diamond, sapphire, ruby).
Intense glowing aura with rainbow color shift effect.
Ethereal light particles and small star effects surrounding it.
Empty center for text. Transparent background PNG.
Horizontal badge shape (5:1 ratio).
Style: MapleStory / Korean MMO legendary title plate.
Awe-inspiring, clearly the mark of a legend.
```
**파일명:** `frame_legendary.png`

### Tier 6: 신화 (Mythic) — 신성한 빛의 프레임 (1개 칭호 전용)
```
Game UI design, ultimate fantasy RPG title nameplate frame.
Divine golden-white frame radiating intense holy/celestial light.
Elaborate angel wing motifs spreading wide from both sides.
A crown or halo element at the top center.
Multiple layered borders: inner gold, outer white light rays.
Cascading divine particles, lens flare effects, ethereal glow.
The most ornate and spectacular frame possible.
Empty center for text. Transparent background PNG.
Horizontal badge shape (5:1 ratio).
Style: MapleStory / Korean MMO mythic-grade title plate.
The ultimate achievement, only the best of the best.
```
**파일명:** `frame_mythic.png`

---

# Section 6: UI 에셋 (Recraft V3)

> **모델: Recraft V3**
> 이유: 아이콘/로고/UI 디자인 특화

---

### 6-1. 게임 로고
```
Game logo design, "Tableau Quest" text in stylish modern font.
Korean subtitle "태블로 퀘스트" below in smaller text.
Data visualization elements subtly integrated (bar chart, line graph).
Blue and orange color scheme (Tableau brand colors).
Clean vector style, suitable for both dark and light backgrounds.
Transparent background PNG. Professional game title logo.
```
**파일명:** `logo_tableau_quest.png`

### 6-2. 파트 배너 — 4장

#### Part 1
```
Game UI banner design, horizontal wide rectangle.
"Part 1: 태블로 기초" text in clean bold font.
Subtitle "Foundations" in English below.
Background: soft blue gradient with subtle grid pattern.
Small icon of a bar chart. Clean modern game UI style.
Transparent background PNG, wide 6:1 ratio.
```
**파일명:** `banner_part1.png`

#### Part 2
```
Same style banner. "Part 2: 계산의 기술"
Subtitle "Calculations". Background: green gradient.
Small icon of a formula/calculator.
```
**파일명:** `banner_part2.png`

#### Part 3
```
Same style banner. "Part 3: 비즈니스 분석 기법"
Subtitle "Business Analytics". Background: purple gradient.
Small icon of a magnifying glass over a chart.
```
**파일명:** `banner_part3.png`

#### Part 4
```
Same style banner. "Part 4: 실무 대시보드"
Subtitle "Dashboard Mastery". Background: gold gradient.
Small icon of a dashboard layout.
```
**파일명:** `banner_part4.png`

### 6-3. 별점 아이콘 — 2장
```
Game UI star icon, single five-pointed star.
Version 1: Filled bright golden star with subtle glow. (star_filled.png)
Version 2: Empty/outline star, gray with slight transparency. (star_empty.png)
Clean vector style, transparent background, square 1:1 ratio.
```
**파일명:** `star_filled.png`, `star_empty.png`

### 6-4. 자물쇠 아이콘
```
Game UI padlock icon, locked state.
Stylish metallic padlock with subtle blue glow.
Clean modern design, not too cartoonish.
Transparent background PNG, square 1:1 ratio.
```
**파일명:** `icon_lock.png`

### 6-5. 하트 게이지 아이콘 — 5단계
```
Game UI heart icons for affection gauge, set of 5:
1. Empty gray heart outline (heart_0.png)
2. Quarter-filled pink heart (heart_1.png)
3. Half-filled pink heart (heart_2.png)
4. Three-quarter filled red heart (heart_3.png)
5. Full glowing red heart with sparkle (heart_4.png)
Clean vector style, transparent background, square 1:1 ratio each.
```
**파일명:** `heart_0.png` ~ `heart_4.png`

### 6-6. 개념 카드 아이콘 — 4장
```
Flat design icon set for learning concept cards:
1. Lightbulb icon (idea/concept) — warm yellow (icon_concept.png)
2. Wrench/gear icon (practice) — blue (icon_practice.png)
3. Trophy icon (boss challenge) — gold (icon_boss.png)
4. Book icon (review) — green (icon_review.png)
Modern flat design, subtle gradients, transparent background, 1:1 ratio.
```
**파일명:** `icon_concept.png`, `icon_practice.png`, `icon_boss.png`, `icon_review.png`

---

# Section 7: 엔딩 씬 배경 (Flux 2 Pro)

> **모델: Flux 2 Pro**
> 이유: 분위기 있는 배경 최적

---

### 7-1. 승급 씬 배경 (공통 엔딩)
```
Japanese visual novel background art, cinematic wide shot.
Korean office with all lights on, desks decorated with
small congratulatory elements — 축하 banner in Korean,
small cake on a desk, balloons, team photo wall visible.
Warm celebratory lighting, golden hour through windows.
Feels like a Korean 정식 승급 ceremony in a warm startup office.
No people, wide 16:9. Achievement and pride atmosphere.
```
**파일명:** `bg_promotion.png`

### 7-2. 엔딩 크레딧 배경
```
Japanese visual novel background art, serene and reflective mood.
Korean city skyline (서울) at sunset transitioning to starry night.
남산타워 silhouette, 한강 reflecting the gradient sky,
아파트 lights turning on one by one. Beautiful sky from warm orange to deep blue.
Recognizably Seoul but stylized in anime background art.
Peaceful, bittersweet "수고했어, 이 여정" atmosphere.
Wide 16:9, panoramic view. Perfect for rolling credits.
```
**파일명:** `bg_ending_credits.png`

---

# 총 이미지 체크리스트

| 카테고리 | 모델 | 수량 |
|---------|------|------|
| 박서연 팀장 스프라이트 | GPT Image 1.5 | 7장 |
| 신준형 스프라이트 | GPT Image 1.5 | 7장 |
| 정소희 스프라이트 | GPT Image 1.5 | 7장 |
| 배경 일러스트 | Flux 2 Pro | 10장 |
| 챕터 썸네일 | Seedream v4.5 | 20장 |
| 특별 이벤트 CG | GPT Image 1.5 | 8장 |
| 칭호 프레임 | Recraft V3 | 6장 |
| UI 에셋 (로고/배너/아이콘) | Recraft V3 | ~16장 |
| 엔딩 배경 | Flux 2 Pro | 2장 |
| **총합** | | **~83장** |

---

# 작업 순서 추천

```
[1순위] 캐릭터 3명 기본 (GPT Image 1.5)     — 3장, 가장 중요
    ↓
[2순위] 캐릭터 표정 변형 (GPT Image 1.5)     — 18장
    ↓
[3순위] 메인 배경 5장 (Flux 2 Pro)           — 사무실, 회의실, 카페, 식당, 술집
    ↓
[4순위] 칭호 프레임 6장 (Recraft V3)          — UI 개발과 병행
    ↓
[5순위] 나머지 배경 + UI (Flux 2 Pro/Recraft) — 특수 배경, 아이콘
    ↓
[6순위] 챕터 썸네일 20장 (Seedream v4.5)      — 스토리 완성 후
    ↓
[7순위] 특별 이벤트 CG 8장 (GPT Image 1.5)   — 마지막 폴리시
```

> **팁:** 1~2순위를 끝내면 바로 코드 개발 시작 가능!
> 배경은 개발하면서 하나씩 추가해도 됨 (단색 배경으로 임시 대체)
