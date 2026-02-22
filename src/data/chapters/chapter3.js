export const chapter3 = {
  id: 3,
  title: '마크 카드와 차트',
  subtitle: '시각화 감각 익히기',
  part: 1,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '3일차. 드디어 진짜 시각화를 만들 차례다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘은 마크 카드를 다룰 거예요. Tableau에서 차트 모양을 바꾸는 핵심이에요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '색상, 크기, 모양, 레이블, 도구 설명... 마크 카드에 있는 속성들을 잘 쓰면 완전히 다른 차트가 만들어져요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '같은 데이터라도 어떻게 보여주느냐에 따라 인사이트가 달라지거든요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: '오늘 드디어 차트 만드는 거지?! 나 이거 진짜 기대했어~' },
        { speaker: 'sohee', expression: 'default', text: '어제 팀장님 말씀 들어보니까 마크 카드가 엄청 중요하더라고. 잘 배워두면 나중에 완전 편하다고.' },
        { speaker: 'sohee', expression: 'cheer', text: '우리 오늘도 잘해보자! 같이 하면 더 재밌을 것 같아~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'default', text: '오늘 드디어 본격적으로 차트 만들지.' },
        { speaker: 'junhyung', expression: 'smirk', text: '사실 마크 카드가 제일 재밌는 부분이야. 같은 데이터가 완전히 다르게 보이거든.' },
        { speaker: 'junhyung', expression: 'lookaway', text: '...뭐, 어떻게 나오나 봐봐.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '마크 카드에는 여러 속성이 있어요. 색상, 크기, 모양, 레이블, 세부 정보, 도구 설명.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '색상에 차원을 넣으면 색으로 그룹을 나눌 수 있고, 크기에 측정값을 넣으면 버블 차트 같은 게 만들어져요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '표현방식 패널도 기억해야 해요. Tableau가 자동으로 추천해주는 차트 타입을 고를 수 있어요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '하지만 자동 추천에만 의존하면 안 돼요. 데이터 성격을 보고 직접 판단하는 눈을 길러야 해요.',
      },
    ],
  },

  problems: ['block_03', 'quiz_09', 'quiz_10'],

  bossChallenge: 'block_04',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막이에요. 오늘 배운 마크 카드 활용을 직접 보여줘요.' },
      { speaker: 'seoyeon', expression: 'default', text: '어떤 필드가 어떤 마크 속성에 들어가야 할지 잘 생각해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '마지막 하나! 파이팅~! 집중해서 해봐!' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '이 정도면 할 수 있을 거야. 봐봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '잘 했어요. 마크 카드 활용이 생각보다 빠르게 잡히네요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이제 기초 3챕터를 마쳤어요. 데이터 인터페이스, 차원/측정값, 마크 카드. 이 세 가지가 Tableau의 근간이에요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '내일은 조금 다른 걸 해볼 거예요. 실무에서 자주 쓰는 데이터 연결.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '와 완전 멋지다!! 나도 보고 배워야겠다~ 오늘 많이 배웠어!' },
      female: { speaker: 'junhyung', expression: 'shy', text: '...아 음, 잘했어. 확실히 감각이 있네.' },
    },
  },

  event: {
    type: 'overtime',
    background: 'office_night',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '퇴근 시간이 다가왔지만, 몇 명은 아직 남아 있다.' },
        { speaker: 'narrator', text: '동기가 슬쩍 다가와 말을 건넨다.' },
      ],
    },
    choices: [
      {
        text: '동기와 같이 야근하며 추가 연습',
        affectionChange: 4,
        xpChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '정말? 나도 마침 더 해보고 싶었어!' },
            { speaker: 'sohee', expression: 'default', text: '같이 여러 차트 만들어봐요. 막히면 서로 도와주면 되니까.' },
            { speaker: 'sohee', expression: 'shy', text: '...고마워. 혼자 하는 거보다 훨씬 좋다.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '...야근? 뭐, 나도 좀 더 할 거라서.' },
            { speaker: 'junhyung', expression: 'smirk', text: '그럼 잠깐 같이 해보지. 차트 종류 몇 가지 더 만들어봐.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...음, 뭐, 나쁘지 않네.' },
          ],
        },
      },
      {
        text: '집에서 혼자 복습하고 내일 적용',
        affectionChange: -1,
        xpChange: 5,
        response: {
          male: [
            { speaker: 'narrator', text: '오늘 배운 내용을 노트로 정리하며 집에서 혼자 복습했다.' },
            { speaker: 'narrator', text: '마크 카드의 각 속성들이 어느새 머릿속에 자리를 잡아가고 있었다.' },
          ],
          female: [
            { speaker: 'narrator', text: '집에서 Tableau 문서를 다시 열어 오늘 만든 차트들을 다시 만들어봤다.' },
            { speaker: 'narrator', text: '반복이 답이었다. 손에 익기 시작하자 빨라졌다.' },
          ],
        },
      },
      {
        text: '팀장에게 차트 피드백 요청',
        affectionChange: 0,
        xpChange: 8,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'serious', text: '차트 피드백? 보여봐요.' },
            { speaker: 'seoyeon', expression: 'default', text: '색상이 너무 많아요. Tableau는 색상 7개 이하가 기본 원칙이에요. 그 이상은 오히려 혼란을 줘요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '하지만 구조는 잘 잡혔어요. 개선점만 적용하면 충분해요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'serious', text: '피드백? 좋아요, 보여줘봐요.' },
            { speaker: 'seoyeon', expression: 'default', text: '전체적으로 잘 만들었어요. 다만 레이블이 너무 많아서 답답한 느낌이 있어요. 중요한 것만 남기는 용기도 필요해요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '감각이 있네요. 내일도 이 방향으로 가면 빨리 늘 거예요.' },
          ],
        },
      },
    ],
  },
}
