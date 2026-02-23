// Part 3: 비즈니스 분석 (Chapter 10-16)

export const chapter10 = {
  id: 10,
  title: 'KPI 대시보드',
  subtitle: '지표 중심 리포트 설계',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: 'Part 3. 드디어 실무 분석의 세계다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘부터는 실제 비즈니스 문제를 다뤄요. 첫 번째는 KPI 대시보드예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: 'KPI는 Key Performance Indicator. 핵심 성과 지표예요. 경영진이 매일 보는 숫자들이죠.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '좋은 KPI 대시보드는 "무엇이 중요한가"를 한 눈에 보여줘야 해요. 숫자를 다 보여주는 게 아니라 맥락을 전달하는 거예요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: 'Part 3이다!! 드디어 진짜 실무 분석이네!' },
        { speaker: 'sohee', expression: 'default', text: '나 KPI 대시보드 만들어보고 싶었어. 진짜 보고서처럼 생긴 거 만드는 거잖아~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: 'Part 3. 이제 진짜 실전이야.' },
        { speaker: 'junhyung', expression: 'serious', text: 'KPI 대시보드는 설계가 반이야. 어떤 지표를 보여줄지 먼저 정하는 게 중요해.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: 'KPI 대시보드의 핵심 구성요소: 목표 대비 현재, 트렌드, 분류별 비교.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: 'BANs(Big Ass Numbers)로 핵심 수치를 크게 보여주고, 미니 트렌드 차트로 흐름을 보여줘요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '색상 인코딩도 중요해요. 목표 달성은 초록, 미달은 빨강. 클라이언트가 설명 없이도 이해할 수 있게요.',
      },
    ],
  },

  problems: ['quiz_13', 'block_06'],

  bossChallenge: 'calc_11',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '경영진 보고용 KPI 대시보드예요. 실제 발표 상황이라 생각하고 완성해봐요.' },
      { speaker: 'seoyeon', expression: 'default', text: '간결하고 명확하게. 숫자가 많다고 좋은 게 아니에요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '경영진 보고라니 멋있다! 잘 할 수 있어~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '실전처럼 해봐. 경영진 보고는 깔끔해야 해.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: 'KPI 대시보드 완성. 클라이언트 앞에 내놔도 될 수준이에요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 퍼널 분석이에요. 고객이 이탈하는 지점을 찾아내는 거예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '와 진짜 보고서 같아!! 나도 이런 거 만들고 싶어~' },
      female: { speaker: 'junhyung', expression: 'default', text: '잘 만들었어. 이제 진짜 클라이언트 레벨이네.' },
    },
  },

  event: {
    type: 'cafe',
    background: 'cafe',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '오후. 카페에서 쉬는 시간. 동기가 노트북을 들고 다가온다.' },
      ],
    },
    choices: [
      {
        text: '동기와 대시보드 아이디어 나누기',
        affectionChange: 3,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '나 지금 KPI 레이아웃 고민 중인데 같이 봐줄 수 있어?' },
            { speaker: 'sohee', expression: 'shy', text: '그렇게 배치하면 훨씬 깔끔하겠다! 역시 네 감각이 좋아~' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '내 대시보드 좀 봐줄래? 뭔가 답답한 느낌이 있어.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...아 그러면 되는 거구나. 고마워. 아 뭐, 그냥.' },
          ],
        },
      },
      {
        text: '혼자 대시보드 완성도 높이기',
        affectionChange: -1,
        xpChange: 5,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '카페 한쪽에서 오늘 만든 KPI 대시보드를 개선했다.' },
            { speaker: 'narrator', text: '색상, 폰트, 간격. 작은 디테일이 전체 완성도를 바꾼다는 걸 실감했다.' },
          ],
          female: [
            { speaker: 'narrator', text: '조용히 앉아 오늘 대시보드의 레이아웃을 다시 손봤다.' },
            { speaker: 'narrator', text: '같은 데이터가 배치 하나에 이렇게 달라보인다는 게 흥미로웠다.' },
          ],
        },
      },
      {
        text: '팀장에게 디자인 원칙 조언 구하기',
        affectionChange: 0,
        xpChange: 7,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '대시보드 디자인이요? 가장 중요한 건 시선 이동 경로예요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '좌상단에서 우하단으로. Z자 패턴으로 중요한 정보를 배치하면 자연스럽게 눈이 따라가요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '좋은 질문이에요. 대시보드 디자인의 핵심은 여백이에요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '"줄 수 있는 여백은 다 줘라." 복잡해 보이는 대시보드는 신뢰를 잃어요.' },
          ],
        },
      },
    ],
  },
}

export const chapter11 = {
  id: 11,
  title: '퍼널 분석',
  subtitle: '전환 이탈 지점 찾기',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '오늘의 클라이언트 의뢰: 쇼핑몰 구매 전환율이 낮다. 왜인지 찾아야 한다.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '퍼널 분석이에요. 고객이 "인지 → 방문 → 상품보기 → 장바구니 → 결제"까지 어디서 이탈하는지 보는 거예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이탈이 가장 큰 구간을 찾으면 그게 바로 개선 포인트예요. Tableau에서 bar chart로 시각화하면 한눈에 보여요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'default', text: '퍼널 분석! 이거 마케팅팀이 자주 쓴다던 그거지?' },
        { speaker: 'sohee', expression: 'cheer', text: '나도 이걸 할 수 있게 된다니 기대돼~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'default', text: '퍼널은 단순히 막대 차트인데, 데이터 준비가 관건이야.' },
        { speaker: 'junhyung', expression: 'smirk', text: '각 단계별 사용자 수를 어떻게 구하느냐... 어제 배운 LOD 써야 할 수도 있어.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '퍼널 차트의 핵심: 각 단계 사용자 수 집계 → 비율 계산 → 역방향 정렬 bar chart.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '전환율 = 다음 단계 / 현재 단계. 이탈률 = 1 - 전환율. 이 두 계산 필드가 핵심이에요.',
      },
      { speaker: 'seoyeon', expression: 'default', text: '색상으로 이탈이 높은 구간을 강조하면 클라이언트가 바로 이해해요.' },
    ],
  },

  problems: ['quiz_15', 'block_07'],

  bossChallenge: 'quiz_16',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마케팅 팀장 앞에서 발표하는 상황이에요. 퍼널 분석 결과를 시각화해봐요.' },
      { speaker: 'seoyeon', expression: 'default', text: '이탈 포인트가 어디인지 명확하게 보여주는 게 목표예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '마케팅 팀장 앞이라도 괜찮아! 지금까지 잘 해왔잖아~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '침착하게. 데이터가 말하게 해야 해.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '퍼널 분석 완료. 이탈 구간을 정확하게 짚어냈어요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 파레토 분석이에요. 80-20 법칙을 Tableau로 시각화하는 거예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '와, 어디서 이탈하는지 이렇게 선명하게 보이는 거 처음 봤어! 신기하다~' },
      female: { speaker: 'junhyung', expression: 'default', text: '잘 됐어. 이 정도면 실무에 바로 써도 되겠는데.' },
    },
  },

  event: {
    type: 'overtime',
    background: 'rainy_street',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '야근을 마치고 빌딩을 나서자 비가 쏟아지고 있었다.' },
        { speaker: 'narrator', text: '우산을 챙겨온 동기가 입구에 서서 비를 바라보고 있다.' },
      ],
    },
    choices: [
      {
        text: '동기와 우산 함께 쓰고 귀가',
        affectionChange: 6,
        xpChange: 0,
        hintChange: 0,
        cg: 'umbrella',
        response: {
          male: [
            { speaker: 'sohee', expression: 'worried', text: '어, 우산 없어? 나 하나밖에 없는데...' },
            { speaker: 'sohee', expression: 'shy', text: '...같이 쓰자. 방향이 같은 데까지만.' },
            { speaker: 'narrator', text: '빗소리 속에서, 좁은 우산 안이 조용했다.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '...우산 없어?' },
            { speaker: 'junhyung', expression: 'flustered', text: '어차피 나도 지하철 방향이야. 같이 가.' },
            { speaker: 'narrator', text: '빗속에서 걷는 동안, 말이 없어도 어색하지 않았다.' },
          ],
        },
      },
      {
        text: '먼저 마무리하고 퇴근',
        affectionChange: -2,
        xpChange: 3,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '자신의 작업을 마무리하고 먼저 퇴근했다.' },
            { speaker: 'narrator', text: '소희의 걱정스러운 눈빛이 마음에 걸렸지만, 오늘은 피곤했다.' },
          ],
          female: [
            { speaker: 'narrator', text: '먼저 일어나 짐을 챙겼다. 준형이 조용히 뭔가를 중얼거렸지만 들리지 않았다.' },
            { speaker: 'narrator', text: '집에 오는 길이 왠지 좀 무거웠다.' },
          ],
        },
      },
      {
        text: '팀장에게 도움 요청해서 함께 해결',
        affectionChange: 0,
        xpChange: 8,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '마감 전에 막히면 말해야죠. 뭐가 문제예요?' },
            { speaker: 'seoyeon', expression: 'serious', text: '이건 필터 적용 순서 문제예요. Context Filter를 써야 해요. 이따가 같이 확인해봐요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '야근하면서 막히면 도움 요청해야죠. 어디가 문제예요?' },
            { speaker: 'seoyeon', expression: 'smile', text: '잘 잡아냈어요. 이걸 스스로 발견한 게 중요해요. 해결 방법 같이 보죠.' },
          ],
        },
      },
    ],
  },
}

export const chapter12 = {
  id: 12,
  title: '파레토 분석',
  subtitle: '핵심 항목 집중',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '"상위 20%의 제품이 매출의 80%를 만든다." 이 법칙을 데이터로 증명할 차례다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '파레토 분석이에요. 80/20 법칙이라고도 불리는데, 핵심 항목을 찾는 데 쓰여요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: 'Tableau에서 누적 합계와 비율을 함께 보여주는 이중 축 차트로 표현해요. 이중 축 차트 써봤어요?',
      },
      { speaker: 'seoyeon', expression: 'default', text: '오늘 배워봐요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'default', text: '파레토 분석! 비즈니스 수업에서 들었던 거다~' },
        { speaker: 'sohee', expression: 'cheer', text: '80/20 법칙이잖아! 실제로 Tableau에서 만들어보는 거 기대돼~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: '파레토 차트, 이중 축 쓰는 거잖아. 이거 처음엔 헷갈리는데 패턴 있어.' },
        { speaker: 'junhyung', expression: 'default', text: '누적 비율 라인 + 막대 차트 조합. 한 번 만들어보면 금방이야.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '파레토 차트 구성: ①내림차순 막대 차트 ②누적 합계 테이블 계산 ③이중 축으로 라인 추가.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '누적 합계는 테이블 계산 RUNNING_SUM을 쓰고, 비율로 바꾸려면 Total과 나눠요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이중 축: 두 번째 측정값을 오른쪽 클릭 → 이중 축. 그 다음 축 동기화를 해주면 스케일이 맞아요.',
      },
    ],
  },

  problems: ['quiz_17', 'calc_12'],

  bossChallenge: 'block_08',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '클라이언트가 "핵심 제품 20%를 찾아달라"고 요청했어요. 파레토 차트로 보여줘요.' },
      { speaker: 'seoyeon', expression: 'default', text: '80% 라인을 레퍼런스 라인으로 추가하면 더 명확해요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '클라이언트 요청이라니 진짜야! 잘 할 수 있어~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '실전이야. 깔끔하게 완성해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '파레토 완성. 이중 축 활용이 자연스러워졌네요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 고객 세분화. RFM 분석으로 고객을 나누는 거예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'excited', text: '이중 축 이렇게 쓰는 거였구나!! 나도 연습해야겠다~' },
      female: { speaker: 'junhyung', expression: 'default', text: '잘 됐어. 이제 고객 세분화. 재밌는 파트야.' },
    },
  },

  event: {
    type: 'dinner_party',
    background: 'bar',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: 'Part 3 중간 회식. 팀 모두가 모였다.' },
        { speaker: 'narrator', text: '분위기가 좋다. 어디 앉을까.' },
      ],
    },
    choices: [
      {
        text: '동기 옆 자리',
        affectionChange: 5,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '왔다! 여기 앉아~ 오늘 파레토 차트 완성한 기념으로 건배하자!' },
            { speaker: 'sohee', expression: 'shy', text: '...요즘 회식 자리에서 네 옆에 앉는 게 제일 편해.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'lookaway', text: '...또 여기야. 뭐, 앉아.' },
            { speaker: 'junhyung', expression: 'flustered', text: '오늘 파레토 분석 잘 했어. 진짜로.' },
          ],
        },
      },
      {
        text: '팀장과 심도 있는 대화',
        affectionChange: -2,
        xpChange: 10,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'smile', text: '팀장 옆에 또 왔네요. RFM 분석 미리 설명해줄게요.' },
            { speaker: 'seoyeon', expression: 'default', text: 'Recency, Frequency, Monetary. 고객의 가치를 세 축으로 보는 방법이에요. 내일 해봐요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '팀장 옆이 좋은가봐요. 이다음은 RFM 세분화예요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '세 개의 지표를 결합해서 고객 등급을 만드는 게 핵심이에요. 어제 배운 FIXED LOD가 여기 나와요.' },
          ],
        },
      },
      {
        text: '선배에게 클라이언트 대응 노하우 듣기',
        affectionChange: 0,
        xpChange: 8,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'narrator', text: '선배 분석가에게 클라이언트 요청 대응법을 들었다.' },
            { speaker: 'narrator', text: '"불가능한 요청은 없어. 가능한 방향으로 재해석하는 게 실력이야." 기억해둬야 할 말이었다.' },
          ],
          female: [
            { speaker: 'narrator', text: '선배 옆에서 현장 경험담을 들었다.' },
            { speaker: 'narrator', text: '"데이터보다 해석이 어렵다. 숫자는 거짓말 안 해도 사람이 잘못 읽을 수 있거든." 뼈있는 말이었다.' },
          ],
        },
      },
    ],
  },
}

export const chapter13 = {
  id: 13,
  title: '고객 세분화',
  subtitle: 'RFM 기반 분류',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '오늘은 고객 데이터를 들여다본다. 모든 고객이 같은 가치를 갖지는 않는다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: 'RFM 분석이에요. Recency(최근성), Frequency(빈도), Monetary(금액) 세 가지로 고객을 분류해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '"VIP 고객은 누구인가?" "이탈 위험 고객은 누구인가?" 이런 질문에 데이터로 답하는 거예요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: 'RFM! 마케팅 수업에서 배웠어! 실제로 만들어보는 거 진짜 기대돼~' },
        { speaker: 'sohee', expression: 'default', text: '고객 등급 나누는 거잖아. LOD 쓰면 되는 거지? 복습이다~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: 'RFM. LOD 없이는 못 해. 어제 배운 거 기억나?' },
        { speaker: 'junhyung', expression: 'default', text: 'FIXED로 고객별 최근 구매일, 구매 횟수, 총액 구하고 그걸 조합해야 해.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: 'RFM 계산: FIXED LOD로 각 고객의 R, F, M 값을 구한 뒤, 점수를 매겨 세그먼트를 나눠요.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: 'NTILE 함수로 5분위 점수를 내거나, IF 조건으로 직접 등급을 지정할 수 있어요.',
      },
      { speaker: 'seoyeon', expression: 'default', text: '마지막에 산점도로 세그먼트를 시각화하면 한 눈에 구조가 보여요.' },
    ],
  },

  problems: ['quiz_18', 'calc_13'],

  bossChallenge: 'calc_14',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '"VIP 고객과 이탈 위험 고객을 한 화면에 보여줘" 라는 요청이 들어왔어요.' },
      { speaker: 'seoyeon', expression: 'default', text: 'RFM 세분화로 답해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '할 수 있어! 지금까지 배운 거 다 써봐~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '집약해봐. 여기까지 배운 게 다 들어가.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '고객 세분화 완성. 이걸 만들 수 있다면 마케팅 분석 의뢰는 다 받을 수 있어요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 코호트 분석이에요. 시간에 따른 고객 변화를 추적하는 거예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '이렇게 나누니까 진짜 선명하게 보이네!! 대단하다~' },
      female: { speaker: 'junhyung', expression: 'default', text: '잘 됐어. 이 정도면 클라이언트가 만족할 거야.' },
    },
  },

  event: {
    type: 'lunch',
    background: 'restaurant',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '점심 시간. 오늘은 분위기가 좋다.' },
      ],
    },
    choices: [
      {
        text: '동기와 점심, 분석 얘기',
        affectionChange: 5,
        xpChange: 0,
        hintChange: 0,
        cg: 'gift',
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '오늘 RFM 만들어보면서 고객 데이터가 이렇게 이야기를 담고 있구나 싶었어.' },
            { speaker: 'sohee', expression: 'shy', text: '아, 잠깐... 이거.' },
            { speaker: 'narrator', text: '소희가 조그만 봉투를 내밀었다. "수습 반 왔잖아. 그냥, 고생했다고."' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'smirk', text: '같이 먹자. 오늘 RFM 어땠어?' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...아, 그리고.' },
            { speaker: 'narrator', text: '준형이 슬쩍 작은 봉지를 책상 위에 밀었다. "수습 절반 넘었다고. 아무 의미 없어."' },
          ],
        },
      },
      {
        text: '팀장과 클라이언트 전략 논의',
        affectionChange: 0,
        xpChange: 7,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '세그먼트 나누는 것까지는 쉬워요. 중요한 건 각 세그먼트에 맞는 전략을 제안하는 거예요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '"VIP는 유지, 이탈 위험은 재활성화, 신규는 육성." 데이터가 전략이 되는 거예요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: 'RFM은 분석의 끝이 아니라 전략의 시작이에요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '좋은 분석가는 숫자를 액션으로 연결해요. 그게 컨설팅이고요.' },
          ],
        },
      },
      {
        text: '혼자 다음 챕터 예습',
        affectionChange: -1,
        xpChange: 5,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '혼자 식사를 마치고 코호트 분석을 미리 찾아봤다.' },
            { speaker: 'narrator', text: '"시간에 따른 리텐션 추적." 어떤 시각화가 어울릴지 상상해봤다.' },
          ],
          female: [
            { speaker: 'narrator', text: '빠르게 먹고 코호트 개념을 미리 살펴봤다.' },
            { speaker: 'narrator', text: '히트맵으로 표현하면 되겠다는 생각이 들었다.' },
          ],
        },
      },
    ],
  },
}

export const chapter14 = {
  id: 14,
  title: '코호트 분석',
  subtitle: '리텐션 구조 이해',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '같은 시기에 가입한 고객들은 시간이 지나면서 어떻게 달라질까.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '코호트 분석이에요. 같은 시기에 가입한 사용자 그룹이 시간이 지나면서 얼마나 남는지 추적해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '히트맵으로 시각화해요. 각 셀이 해당 코호트의 N개월 후 리텐션 비율이에요. 색이 진할수록 리텐션이 높은 거예요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'default', text: '코호트 분석... 히트맵으로 만드는 거지? 색깔 그라데이션이 이쁘더라~' },
        { speaker: 'sohee', expression: 'cheer', text: '근데 데이터 준비가 좀 복잡할 것 같은데. 같이 하면 되지! 파이팅~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'serious', text: '코호트는 DATEDIFF랑 FIXED LOD 조합이야. 아는 거 다 쏟아부어야 해.' },
        { speaker: 'junhyung', expression: 'default', text: '히트맵 색상 인코딩이 핵심이야. 어두울수록 이탈이 많은 건지, 리텐션이 높은 건지 명확히 해야 해.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '코호트 기준: 첫 구매 월. 코호트별 사용자 수를 FIXED LOD로 구해요.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '각 월별 리텐션 = 해당 월 구매자 / 코호트 총 인원. DATEDIFF로 코호트 이후 경과 월을 구하면 돼요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '색상 인코딩: 리텐션 % → 연속형 색상 설정. 고부터 저까지 그라데이션이 리텐션 열화를 한 눈에 보여줘요.',
      },
    ],
  },

  problems: ['quiz_19', 'calc_15'],

  bossChallenge: 'block_09',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '팀장이 고개를 끄덕인다. "이번에 코호트 히트맵 완성해봐요."' },
      { speaker: 'seoyeon', expression: 'default', text: '색상 스케일과 레이블 모두 명확하게 설정해야 해요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '히트맵 완성이야!! 해봐, 할 수 있어~' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '여기까지 왔으면 이건 할 수 있어. 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '코호트 히트맵 완성. 리텐션 구조가 한 눈에 보이네요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 시계열 분석이에요. 시간 흐름 속 패턴을 찾는 거예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '히트맵 이렇게 되는 거구나! 색으로 이렇게 많은 걸 볼 수 있다니~' },
      female: { speaker: 'junhyung', expression: 'default', text: '잘 됐어. 이런 거 볼 줄 알면 제품팀이 좋아해.' },
    },
  },

  event: {
    type: 'cafe',
    background: 'cafe',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '오후 잠깐의 휴식. 카페에서 마주친 동기.' },
      ],
    },
    choices: [
      {
        text: '동기와 함께 코호트 결과 복기',
        affectionChange: 4,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '오늘 코호트 히트맵 보면서 진짜 신기했어. 색깔로 이렇게 많은 게 보이다니.' },
            { speaker: 'sohee', expression: 'shy', text: '...요즘 같이 하다 보니까 분석이 재밌어졌어. 덕분인 것 같아.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '오늘 히트맵 어땠어? 나는 색상 스케일 설정하는 게 제일 재밌었어.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...요즘 분석이 점점 재밌어지는 것 같아. 좋은 신호야.' },
          ],
        },
      },
      {
        text: '혼자 시계열 분석 예습',
        affectionChange: -1,
        xpChange: 6,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '조용히 앉아 시계열 분석을 미리 찾아봤다.' },
            { speaker: 'narrator', text: '추세, 계절성, 이동평균. 어떤 차트로 표현할지 벌써부터 아이디어가 떠올랐다.' },
          ],
          female: [
            { speaker: 'narrator', text: '혼자 앉아 다음 챕터를 훑었다.' },
            { speaker: 'narrator', text: '시계열에서 이상값을 찾는 게 흥미로웠다. 어떤 식으로 접근할지 생각해봤다.' },
          ],
        },
      },
      {
        text: '팀장에게 리텐션 개선 전략 묻기',
        affectionChange: 0,
        xpChange: 7,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '리텐션 개선요? 분석이 끝이 아니라 실행이 끝이에요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '코호트에서 이탈이 급격한 구간을 찾고, 그 시기에 어떤 경험을 했는지 정성 데이터로 보완하는 거예요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '리텐션 분석의 가치는 "왜"를 찾는 거예요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '히트맵이 "언제 떠났는지"를 보여주면, 팀이 "왜 떠났는지"를 찾아야 해요. 분석은 질문을 만드는 거예요.' },
          ],
        },
      },
    ],
  },
}

export const chapter15 = {
  id: 15,
  title: '시계열 분석',
  subtitle: '추세와 예측',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '데이터에는 시간이 담겨 있다. 과거를 보면 미래가 보인다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '시계열 분석이에요. 시간 흐름에 따른 트렌드, 계절성, 이상값을 찾는 거예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: 'Tableau에는 내장 예측 기능이 있어요. 분석 → 예측으로 추세선과 예측 구간을 바로 추가할 수 있어요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '예측만 보여줘도 클라이언트 눈이 반짝여요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: '예측 기능! Tableau에 예측이 있는 거야? 완전 신기하다~' },
        { speaker: 'sohee', expression: 'cheer', text: '이거 배우면 내년 매출 예측도 할 수 있는 건가?! 기대돼~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'default', text: '시계열. 이동평균이랑 예측 구간 설정이 포인트야.' },
        { speaker: 'junhyung', expression: 'smirk', text: 'Exponential Smoothing 방식인데... 이해 안 해도 돼. 결과만 잘 해석하면 돼.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '이동평균: 윈도우 계산으로 노이즈를 줄이고 추세를 부드럽게 보여요.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '예측: 분석 패널 → 예측 표시. 예측 길이와 신뢰 구간을 설정할 수 있어요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '계절성 패턴은 MONTH, QUARTER 함수로 분해해서 보세요. 여름에만 올라가는 패턴이면 계절성이에요.',
      },
    ],
  },

  problems: ['quiz_20', 'calc_16'],

  bossChallenge: 'quiz_21',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '"내년 Q1 매출 예측을 보여달라"는 요청이에요.' },
      { speaker: 'seoyeon', expression: 'default', text: '추세선과 예측 구간을 활용해서 설득력 있는 시각화를 만들어봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '예측이야! 신기한 거야! 잘 될 거야~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '예측값 보여주는 게 핵심이야. 신뢰 구간도 같이 보여줘야 해.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '시계열 분석 완성. 예측까지 포함한 완성도 높은 차트네요.' },
      { speaker: 'seoyeon', expression: 'default', text: 'Part 3 마지막은 분포와 이상값이에요. 통계적 관점에서 데이터를 보는 거예요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '예측까지 들어가니까 진짜 전문가 리포트 같아~!!!' },
      female: { speaker: 'junhyung', expression: 'default', text: '좋아. Part 3 거의 다 왔어. 마지막 하나 남았네.' },
    },
  },

  event: {
    type: 'overtime',
    background: 'office_night',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '야근. 마감이 가까워졌다.' },
        { speaker: 'narrator', text: '동기가 창밖을 보며 멍하니 있다.' },
      ],
    },
    choices: [
      {
        text: '동기에게 말 걸기',
        affectionChange: 4,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '아 놀랐어~ 피곤해서 잠깐 멍했어.' },
            { speaker: 'sohee', expression: 'shy', text: '...옆에 있어줘서 좋아. 야근도 덜 힘들어.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'flustered', text: '어, 아 아니야 그냥... 잠깐 바람 쐬려고.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...뭔가 여기서 이렇게 일하고 있다는 게 좀 신기해. 나쁘지 않네.' },
          ],
        },
      },
      {
        text: '묵묵히 각자 작업 마무리',
        affectionChange: 0,
        xpChange: 5,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'narrator', text: '서로 말없이 각자 화면을 바라보며 작업을 마쳤다.' },
            { speaker: 'narrator', text: '말이 없어도 편한 사이가 됐다는 걸 느꼈다.' },
          ],
          female: [
            { speaker: 'narrator', text: '각자 조용히 작업을 마무리했다.' },
            { speaker: 'narrator', text: '침묵이 어색하지 않은 사이가 됐다.' },
          ],
        },
      },
      {
        text: '팀장에게 내일 일정 확인',
        affectionChange: -1,
        xpChange: 4,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '내일은 Part 3 마지막. 분포와 이상값 챕터예요. 박스 플롯이랑 히스토그램 다룰 거예요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '일찍 자요. 피곤한 상태에서 하는 분석은 실수가 많아요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '내일 분포 챕터예요. 이상값 찾는 법이 핵심이에요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '오늘은 여기서 마무리해요. 무리하면 내일 집중력이 떨어져요.' },
          ],
        },
      },
    ],
  },
}

export const chapter16 = {
  id: 16,
  title: '분포와 이상값',
  subtitle: '통계적 관점 강화',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: 'Part 3 마지막. 통계적 시각으로 데이터를 본다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘은 분포와 이상값이에요. 데이터가 어떻게 퍼져있는지, 이상한 값이 있는지 찾는 거예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '박스 플롯, 히스토그램, 산점도. 이 세 가지가 분포 시각화의 핵심이에요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이상값은 레퍼런스 라인이나 레퍼런스 밴드로 구간을 표시해서 찾아낼 수 있어요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'default', text: 'Part 3 마지막이다! 분포랑 이상값이라니... 드디어 통계다~' },
        { speaker: 'sohee', expression: 'cheer', text: '여기까지 왔어! 마지막도 같이 잘 해보자!!' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: 'Part 3 마지막이네. 이상값 찾는 거잖아.' },
        { speaker: 'junhyung', expression: 'default', text: '산점도에서 동기랑 하이파이브 할 준비 해봐. 찾아내면 그 느낌이 진짜 짜릿하거든.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '히스토그램: 분포 패턴 파악. 정규 분포인지, 치우친지, 이봉형인지.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '박스 플롯: Q1, Q3, IQR, 수염, 이상값(outlier)을 한 눈에 볼 수 있어요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '레퍼런스 라인: 평균, 중앙값을 축에 추가해서 기준선을 그을 수 있어요. 이상값이 얼마나 벗어났는지 직관적으로 보여줘요.',
      },
    ],
  },

  problems: ['quiz_22', 'block_10'],

  bossChallenge: 'quiz_23',

  bossIntro: {
    background: 'office_day',
    characters: [
      { id: 'seoyeon', position: 'right' },
    ],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '이상값을 발견하는 순간이에요. 집중해서 끝까지 완성해봐요.' },
      { speaker: 'seoyeon', expression: 'smile', text: 'Part 3 마지막 보스예요. 잘 마무리해줘요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: 'Part 3 마지막!! 여기까지 왔잖아!! 할 수 있어!!!!' },
      female: { speaker: 'junhyung', expression: 'serious', text: 'Part 3 마지막이야. 마무리해봐. 믿어.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: 'Part 3 완주. 비즈니스 분석 전반을 소화해냈네요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: 'KPI부터 이상값까지. 이제 실무 분석은 대부분 할 수 있어요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: 'Part 4는 마지막 파트예요. 대시보드 설계와 최종 프로젝트. 여기까지 온 만큼 끝까지 가봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'excited', text: 'Part 3 끝!!!!! 우리 진짜 여기까지 왔다!! 같이 해서 고마워~!!' },
      female: { speaker: 'junhyung', expression: 'shy', text: '...Part 3 다 했네. 진짜로... 잘 했어. 같이 해서 좋았어.' },
    },
  },

  event: {
    type: 'dinner_party',
    background: 'bar',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: 'Part 3 완주 기념 회식. 팀 전체가 모였다.' },
        { speaker: 'narrator', text: '이번엔 어느 자리를 선택할까.' },
      ],
    },
    choices: [
      {
        text: '동기 옆 자리',
        affectionChange: 5,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '왔어!! 여기 와!! 오늘은 진짜 파트 3 완주 기념이야~!' },
            { speaker: 'sohee', expression: 'shy', text: '...있잖아. 요즘 같이 일하는 거 너무 즐거워. 고마워, 진짜로.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'lookaway', text: '...어, 왔어. 여기 앉아.' },
            { speaker: 'junhyung', expression: 'flustered', text: '오늘 Part 3 끝났으니까 뭔가 자축하는 느낌으로... 건배나 하자.' },
          ],
        },
      },
      {
        text: '팀 전체 건배',
        affectionChange: 0,
        xpChange: 8,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'smile', text: 'Part 3까지 고생들 많았어요. 오늘은 쉬어요.' },
            { speaker: 'narrator', text: '팀 전체가 함께 건배했다. 함께 성장했다는 느낌이 들었다.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'smile', text: 'Part 3 수고 많았어요. 다 같이 건배해요.' },
            { speaker: 'narrator', text: '팀 전체가 함께 잔을 들었다. 이 자리가 어색하지 않았다.' },
          ],
        },
      },
      {
        text: '선배에게 Part 4 조언 듣기',
        affectionChange: 0,
        xpChange: 7,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'narrator', text: '선배에게 Part 4 대시보드 설계의 핵심을 들었다.' },
            { speaker: 'narrator', text: '"설계 없이 만들면 항상 다시 만들어야 해. 처음 10분 설계가 나머지 3시간을 아껴줘."' },
          ],
          female: [
            { speaker: 'narrator', text: '선배 분석가에게 최종 프로젝트에 대한 조언을 들었다.' },
            { speaker: 'narrator', text: '"마지막은 기술이 아니라 스토리야. 데이터가 어떤 이야기를 하는지 먼저 생각해."' },
          ],
        },
      },
    ],
  },
}
