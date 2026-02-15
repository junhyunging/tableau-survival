export const chapter1 = {
  id: 1,
  title: '태블로와의 첫 만남',
  subtitle: '모든 분석은 도구를 아는 것에서 시작된다',
  part: 1,
  background: 'office_day',

  opening: {
    background: null,
    characters: [],
    dialogues: [
      { speaker: 'narrator', text: '그로우랩. 데이터로 기업의 성장을 설계하는 컨설팅 회사.' },
      { speaker: 'narrator', text: '오늘은 {playerName}의 첫 출근날이다.' },
      { speaker: 'narrator', background: 'office_day', text: '엘리베이터 문이 열리자 넓은 오피스가 눈에 들어온다.' },
      { speaker: 'narrator', text: '깔끔하게 정돈된 데스크, 벽면 가득한 대시보드 모니터들.' },
      {
        speaker: 'seoyeon',
        characters: [{ id: 'seoyeon', position: 'right' }],
        expression: 'default',
        text: '{playerName}님이죠? 박서연입니다. 데이터 분석팀 리드예요.',
      },
      { speaker: 'seoyeon', expression: 'default', text: '우리 팀은 Tableau로 모든 클라이언트 분석을 해요.' },
      { speaker: 'seoyeon', expression: 'serious', text: '수습 기간 동안 기본기를 보여주세요. 실력이 전부인 회사니까.' },
      { speaker: 'seoyeon', expression: 'smile', text: '...너무 겁먹지는 마요. 잘 따라오면 돼요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [
        { id: 'sohee', position: 'right' },
      ],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: '앗, 혹시 오늘 입사하시는 분이에요?' },
        { speaker: 'sohee', expression: 'cheer', text: '저도 오늘 첫날이에요! 같은 날 입사라니!' },
        { speaker: 'sohee', expression: 'default', text: '정소희라고 해요. 잘 부탁해~ 우리 친하게 지내자!' },
        { speaker: 'player', text: '(밝은 에너지가 느껴진다. 든든한 동기가 생겼다.)' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [
        { id: 'junhyung', position: 'right' },
      ],
      dialogues: [
        { speaker: 'junhyung', expression: 'default', text: '...너도 오늘 입사?' },
        { speaker: 'junhyung', expression: 'smirk', text: '같은 날 입사라니, 인연이네. 신준형이야.' },
        { speaker: 'junhyung', expression: 'default', text: '잘 부탁해. 뒤처지지 않게 서로 열심히 하자.' },
        { speaker: 'player', text: '(쿨한 인상이지만 나쁘지 않다. 동기가 생겼다.)' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [
      { id: 'seoyeon', position: 'right' },
    ],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '자, 첫 미션이에요.' },
      { speaker: 'seoyeon', expression: 'default', text: 'Tableau의 기본 인터페이스부터 익혀야 해요.' },
      { speaker: 'seoyeon', expression: 'serious', text: '데이터 패인, 선반, 마크 카드, 표현방식 패널...' },
      { speaker: 'seoyeon', expression: 'default', text: '이 네 가지를 이해하면 Tableau의 절반은 아는 거예요.' },
      { speaker: 'seoyeon', expression: 'smile', text: '간단하죠? 그럼 시작해볼까요.' },
    ],
  },

  problems: ['quiz_01', 'quiz_02', 'block_01'],

  bossChallenge: 'quiz_03',

  bossIntro: {
    background: 'meeting_room',
    characters: [
      { id: 'seoyeon', position: 'right' },
    ],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막 문제예요. 집중하세요.' },
      { speaker: 'seoyeon', expression: 'default', text: '지금까지 배운 걸 종합해서 풀어보세요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '파이팅! 넌 할 수 있어!' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '마지막이라고? 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [
      { id: 'seoyeon', position: 'right' },
    ],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '첫날치고 나쁘지 않네요.' },
      { speaker: 'seoyeon', expression: 'smile', text: '이 정도면 내일부터 실전 데이터도 만져볼 수 있겠어요.' },
      { speaker: 'seoyeon', expression: 'default', text: '오늘은 여기까지. 수고했어요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '우와 첫날부터 잘하네! 나도 열심히 해야겠다~' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '...제법인데? 내일은 나도 안 질 거야.' },
    },
  },

  event: {
    type: 'afterwork_dinner',
    background: 'restaurant',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '업무가 끝나고, 퇴근 전 저녁시간이 찾아왔다.' },
      ],
    },
    choices: [
      {
        text: '동기와 저녁 먹고 같이 퇴근하기',
        affectionChange: 3,
        xpChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '같이 가자! 퇴근 전에 간단히 먹고 들어가자~' },
            { speaker: 'sohee', expression: 'default', text: '첫날 정신없었지? 그래도 잘 버텼다.' },
            { speaker: 'sohee', expression: 'cheer', text: '내일도 같이 잘해보자. 분명 더 쉬워질 거야!' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '퇴근 전에 뭐 좀 먹고 갈래? 내가 괜찮은 곳 알아놨어.' },
            { speaker: 'junhyung', expression: 'smirk', text: '첫날부터 이 정도면 꽤 잘한 거야.' },
            { speaker: 'junhyung', expression: 'default', text: '내일은 더 빡세질 테니까, 오늘은 일찍 쉬어.' },
          ],
        },
      },
      {
        text: '박서연 팀장과 저녁 미팅하기',
        affectionChange: 0,
        xpChange: 5,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '좋아요. 간단히 먹으면서 내일 할 내용을 정리하죠.' },
            { speaker: 'seoyeon', expression: 'default', text: '내일은 차원과 측정값을 깊게 다룰 거예요. 여기서 성능 차이가 나요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '파랑은 차원, 초록은 측정값. 오늘은 이 두 가지만 확실히 기억해요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '좋아요. 저녁 먹으면서 짧게 피드백해줄게요.' },
            { speaker: 'seoyeon', expression: 'default', text: '내일은 차원과 측정값을 다뤄요. 이걸 정확히 알면 실수가 줄어요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '파랑은 차원, 초록은 측정값. 오늘은 이 문장만 머리에 넣고 퇴근해요.' },
          ],
        },
      },
      {
        text: '혼자 복습하고 퇴근하기',
        affectionChange: -1,
        xpChange: 3,
        response: {
          male: [
            { speaker: 'narrator', text: '혼자 남아 조용히 Tableau 문서를 복습한 뒤 늦게 퇴근했다.' },
            { speaker: 'narrator', text: '기본 개념이 조금 더 명확해졌다. 첫날 마무리는 나쁘지 않았다.' },
          ],
          female: [
            { speaker: 'narrator', text: '혼자 남아 조용히 Tableau 문서를 복습한 뒤 늦게 퇴근했다.' },
            { speaker: 'narrator', text: '기본 개념이 조금 더 명확해졌다. 첫날 마무리는 나쁘지 않았다.' },
          ],
        },
      },
    ],
  },
}
