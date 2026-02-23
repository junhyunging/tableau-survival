export const chapter2 = {
  id: 2,
  title: '차원과 측정값',
  subtitle: '데이터 분류의 기본 원리',
  part: 1,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '이튿날 아침. 어제보다 조금 익숙해진 오피스.' },
      { speaker: 'narrator', text: '{playerName}은 책상에 앉자마자 Tableau를 켰다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '어제 기본 인터페이스는 다 봤죠? 오늘은 차원과 측정값을 제대로 다룰 거예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '이게 헷갈리면 어떤 분석도 제대로 못 해요. 신입들이 가장 많이 걸리는 지점이거든요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '겁먹지 말아요. 원리만 이해하면 단순해요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: '어, 일찍 왔네! 나도 방금 왔어~' },
        { speaker: 'sohee', expression: 'worried', text: '오늘 차원이랑 측정값이라던데... 솔직히 나 아직 좀 헷갈려.' },
        { speaker: 'sohee', expression: 'cheer', text: '그래도 같이 하면 금방이지! 모르는 거 있으면 서로 물어보자~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: '오늘도 일찍 왔네. 열심히네.' },
        { speaker: 'junhyung', expression: 'default', text: '차원이랑 측정값은 생각보다 간단해. 파랑=불연속, 초록=연속 이거부터 기억하면 돼.' },
        { speaker: 'junhyung', expression: 'lookaway', text: '...뭐, 모르는 거 있으면 물어봐. 아는 건 말해줄게.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '자, 데이터 패널을 보면 두 가지 색깔이 보이죠?' },
      { speaker: 'seoyeon', expression: 'serious', text: '색상은 연속/불연속을 뜻해요. 파란색은 불연속형, 초록색은 연속형이에요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '차원은 "누가, 어디서, 언제"처럼 데이터를 분류하는 기준. 측정값은 "얼마나"라는 숫자예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '차원은 불연속, 측정값은 연속으로 시작하는 경우가 많지만 필요하면 언제든 전환할 수 있어요. 연속형은 축이, 불연속형은 헤더가 생깁니다.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '이론은 여기까지. 직접 해봐요.' },
    ],
  },

  problems: ['quiz_04', 'quiz_05'],

  bossChallenge: 'block_02',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막 문제예요. 오늘 배운 걸 직접 적용해보는 거예요.' },
      { speaker: 'seoyeon', expression: 'default', text: '차원과 측정값을 올바른 선반에 배치해보세요. 집중해요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '할 수 있어! 파랑=불연속, 초록=연속 기억하면서 해봐~' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '봐봐, 생각보다 쉬울 거야. 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '잘 했어요. 차원과 측정값 구분, 이제 감이 왔죠?' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이게 익숙해지면 데이터를 보는 눈이 달라져요. 어떤 필드가 어디 가야 할지 직관적으로 알게 되거든요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '내일은 마크 카드로 넘어갈 거예요. 오늘 복습 잘 해둬요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'excited', text: '야 잘했다~! 나도 겨우 다 맞혔어 ㅋㅋ 오늘 뭔가 통한 것 같지 않아?' },
      female: { speaker: 'junhyung', expression: 'default', text: '...오늘도 잘하네. 내일도 기대할게.' },
    },
  },

  event: {
    type: 'cafe',
    background: 'cafe',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '오후 중반, 잠깐 휴식 시간. 사내 카페에서 동기가 말을 걸어온다.' },
      ],
    },
    choices: [
      {
        text: '동기와 함께 커피 마시며 이야기하기',
        affectionChange: 3,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '어 같이 마시자! 오늘 내용 좀 정리됐어?' },
            { speaker: 'sohee', expression: 'shy', text: '나는 연속형이랑 불연속형이 헷갈려서... 근데 네 설명 들으니까 이해됐어. 고마워~' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '...커피 한 잔 할래? 잠깐 쉬어도 될 것 같아서.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '오늘 뭐 더 헷갈리는 거 있어? ...그냥 혹시나 해서.' },
          ],
        },
      },
      {
        text: '박서연 팀장에게 추가 질문하기',
        affectionChange: 0,
        xpChange: 5,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '질문이 있다고요? 좋아요, 말해봐요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '연속형 날짜를 쓸 때는 데이터 밀도가 낮으면 축이 늘어지는 문제가 있어요. 실무에선 상황에 따라 불연속형이 더 깔끔할 때도 있고요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '추가 질문? 좋아요. 무엇이든 물어봐요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '실무에서 연속형 vs 불연속형 선택 기준은 "시간 흐름을 보여줄 건가"예요. 추세 보려면 연속, 카테고리 비교하려면 불연속.' },
          ],
        },
      },
      {
        text: '혼자 조용히 복습하기',
        affectionChange: -1,
        xpChange: 3,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '조용한 구석 자리에서 혼자 노트를 펼쳤다.' },
            { speaker: 'narrator', text: '파랑=불연속, 초록=연속. 단순하지만 강력한 원리가 조금씩 정리되어 갔다.' },
          ],
          female: [
            { speaker: 'narrator', text: '잠깐 자리를 벗어나 노트를 정리했다.' },
            { speaker: 'narrator', text: '차원과 측정값, 연속형과 불연속형. 아직 어색하지만 조금씩 윤곽이 잡혀간다.' },
          ],
        },
      },
    ],
  },
}
