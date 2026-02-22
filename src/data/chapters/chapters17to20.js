// Part 4: 실무 대시보드 (Chapter 17-20)

export const chapter17 = {
  id: 17,
  title: '설계 원칙',
  subtitle: '대시보드 구조화',
  part: 4,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '마지막 파트. 여기서 진짜 실력이 드러난다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: 'Part 4예요. 대시보드 설계, 인터랙션, 스토리텔링, 최종 프로젝트. 이 네 가지로 마무리해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '오늘은 설계 원칙이에요. 좋은 대시보드는 만들기 전에 "누구에게, 무엇을 보여줄 것인가"를 먼저 정의해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '와이어프레임을 먼저 그리고, 시각 계층을 정하고, 그 다음 Tableau로 만드는 거예요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: 'Part 4다!! 드디어 마지막 파트야~!' },
        { speaker: 'sohee', expression: 'default', text: '설계 원칙이라니 왠지 전문가스럽다. 기대돼~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: 'Part 4. 여기가 진짜 레벨 차이 나는 파트야.' },
        { speaker: 'junhyung', expression: 'serious', text: '기술은 다 배웠어. 이제 그걸 어떻게 구조화하느냐가 남은 거야.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '대시보드 설계 5원칙: ①목적 명확화 ②타겟 사용자 정의 ③핵심 질문 3개 선정 ④와이어프레임 ⑤반복 개선.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '시각 계층: 가장 중요한 정보는 크고 진하게, 보조 정보는 작고 연하게. Z자 동선으로 배치.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: 'Tableau 레이아웃 컨테이너: 수직/수평 컨테이너로 반응형 레이아웃을 만들 수 있어요.',
      },
    ],
  },

  problems: ['quiz_24', 'block_11'],

  bossChallenge: 'quiz_25',

  bossIntro: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '"경영진 보고용 대시보드 레이아웃을 설계해봐요."' },
      { speaker: 'seoyeon', expression: 'default', text: '와이어프레임 개념으로 접근해요. 어떤 정보가 어디 가야 할지 먼저 생각해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '설계부터! 와이어프레임 그리듯이 생각해봐~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '구조가 먼저야. 기술은 나중. 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '설계 원칙 완료. 이제 빈 캔버스를 보면 어디서 시작해야 할지 알겠죠?' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 대시보드 액션이에요. 사용자가 직접 탐색하는 경험을 만들어요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '설계부터 하니까 훨씬 체계적인 것 같아~ 나도 이렇게 해야겠다!' },
      female: { speaker: 'junhyung', expression: 'default', text: '이제 진짜 대시보드가 보이는 것 같아. 다음 챕터도 기대돼.' },
    },
  },

  event: {
    type: 'lunch',
    background: 'restaurant',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '점심 시간. Part 4 시작을 맞아 기분이 묘하다.' },
      ],
    },
    choices: [
      {
        text: '동기와 점심 먹으며 최종 프로젝트 얘기',
        affectionChange: 4,
        xpChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '최종 프로젝트 생각해봤어? 나는 뭘 만들지 벌써부터 설레~' },
            { speaker: 'sohee', expression: 'shy', text: '같이 아이디어 얘기하면서 먹자. 네 생각이 항상 도움이 돼.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '최종 프로젝트 뭘 할 것 같아?' },
            { speaker: 'junhyung', expression: 'smirk', text: '나는 이미 아이디어 있어. 근데 뭔지는 나중에 말해줄게. 기대해.' },
          ],
        },
      },
      {
        text: '혼자 점심 먹으며 최종 프로젝트 기획',
        affectionChange: -1,
        xpChange: 7,
        response: {
          male: [
            { speaker: 'narrator', text: '노트에 최종 프로젝트 아이디어를 끄적였다.' },
            { speaker: 'narrator', text: '어떤 데이터, 어떤 스토리. 윤곽이 잡혀가고 있었다.' },
          ],
          female: [
            { speaker: 'narrator', text: '혼자 조용히 먹으며 최종 프로젝트 구상을 했다.' },
            { speaker: 'narrator', text: '지금까지 배운 모든 기술을 하나의 대시보드에 녹여내는 게 목표였다.' },
          ],
        },
      },
      {
        text: '팀장에게 최종 프로젝트 주제 조언',
        affectionChange: 0,
        xpChange: 8,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '최종 프로젝트 주제요? 관심 있는 도메인에서 찾아봐요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '데이터가 풍부하고, 스토리가 있고, 인사이트가 뚜렷한 것. 그 세 가지만 충족하면 좋은 프로젝트예요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '주제 선정이 반이에요. 욕심내지 말고 하나의 인사이트에 집중해요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '"이 데이터로 무엇을 발견했는가." 이 질문에 명확하게 답할 수 있으면 성공이에요.' },
          ],
        },
      },
    ],
  },
}

export const chapter18 = {
  id: 18,
  title: '액션과 인터랙션',
  subtitle: '탐색형 분석 경험',
  part: 4,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '정적인 대시보드를 넘어 사용자가 직접 탐색하는 경험. 그게 오늘의 주제다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '대시보드 액션이에요. 사용자가 차트를 클릭하면 다른 차트가 반응하는 인터랙티브 경험이에요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '필터 액션, 하이라이트 액션, URL 액션, 매개변수 액션. 이 네 가지가 주요 액션 타입이에요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: '인터랙션! 클릭하면 다른 차트가 반응하는 거잖아! 진짜 멋있어~' },
        { speaker: 'sohee', expression: 'default', text: '클라이언트들이 이거 보면 진짜 좋아할 것 같아. 기대돼~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: '액션 액션. 이거 제대로 쓰면 대시보드가 살아있는 것처럼 보여.' },
        { speaker: 'junhyung', expression: 'default', text: '필터 액션이 제일 많이 쓰여. 개념 잘 잡아둬.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '필터 액션: 소스 시트 선택 → 타겟 시트 필터 적용. 드릴다운 분석에 필수예요.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '하이라이트 액션: 관련 마크를 강조. 비교가 목적일 때 써요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '매개변수 액션: 클릭으로 매개변수 값을 바꿔요. 동적 제목이나 계산에 활용해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '이걸 잘 쓰면 Tableau 퍼블릭에 올릴 수 있는 인터랙티브 리포트가 나와요.',
      },
    ],
  },

  problems: ['quiz_26', 'block_12'],

  bossChallenge: 'quiz_27',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '"클릭 한 번으로 지역별 상세 데이터가 보이는 대시보드를 만들어봐요."' },
      { speaker: 'seoyeon', expression: 'default', text: '필터 액션과 드릴다운 구조를 활용해서 완성해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '인터랙티브 대시보드!! 멋있게 만들어봐~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '탐색형 대시보드. 구조 잘 잡아야 해. 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '액션 완료. 이제 진짜 인터랙티브 대시보드를 만들 수 있게 됐네요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 스토리텔링이에요. 인사이트를 어떻게 전달하느냐가 핵심이에요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '클릭하니까 바뀌는 거 진짜 신기하다~!! 나도 이거 만들어야지!!' },
      female: { speaker: 'junhyung', expression: 'default', text: '인터랙션 잘 됐어. 이제 마지막 두 챕터야. 거의 다 왔어.' },
    },
  },

  event: {
    type: 'cafe',
    background: 'cafe',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '카페에서의 짧은 휴식. 동기가 노트북을 옆에 두고 앉아있다.' },
      ],
    },
    choices: [
      {
        text: '동기와 함께 인터랙션 아이디어 공유',
        affectionChange: 4,
        xpChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '나 지금 최종 프로젝트에 어떤 액션 넣을지 고민 중이야. 봐줄 수 있어?' },
            { speaker: 'sohee', expression: 'shy', text: '...네 아이디어 항상 좋더라. 솔직히 좀 의지하게 돼. 괜찮지...?' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '최종 프로젝트에 매개변수 액션 넣으려고 하는데 어떻게 생각해?' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...아 그냥 의견 물어보는 거야. 근데 말이 된다. 고마워.' },
          ],
        },
      },
      {
        text: '조용히 액션 연습',
        affectionChange: -1,
        xpChange: 6,
        response: {
          male: [
            { speaker: 'narrator', text: '카페에서 조용히 다양한 액션을 직접 만들어봤다.' },
            { speaker: 'narrator', text: '필터, 하이라이트, 매개변수 액션. 각각의 느낌이 다르다는 걸 손으로 익혔다.' },
          ],
          female: [
            { speaker: 'narrator', text: '혼자 앉아 액션의 다양한 설정을 실험해봤다.' },
            { speaker: 'narrator', text: '어떤 상황에 어떤 액션이 어울리는지 패턴이 잡혀갔다.' },
          ],
        },
      },
      {
        text: '팀장에게 효과적인 액션 UX 조언',
        affectionChange: 0,
        xpChange: 8,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '액션 UX요? 액션이 많다고 좋은 게 아니에요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '"사용자가 무엇을 탐색하고 싶어할까"를 먼저 생각해요. 액션은 그 경로를 만들어주는 거예요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: 'UX 관점에서 가장 중요한 건 예측 가능성이에요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '"클릭하면 이게 바뀌겠구나" 라는 직관이 있어야 해요. 놀라게 하면 안 돼요.' },
          ],
        },
      },
    ],
  },
}

export const chapter19 = {
  id: 19,
  title: '스토리텔링',
  subtitle: '인사이트 전달력',
  part: 4,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '마지막 챕터 전. 기술이 아닌 언어로 데이터를 말하는 법.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '스토리텔링이에요. 좋은 분석 결과를 갖고 있어도 전달하지 못하면 의미가 없어요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '"이 데이터가 무엇을 말하는가." "그래서 우리는 무엇을 해야 하는가." 이 두 질문에 답하는 게 스토리텔링이에요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: 'Tableau Story Point 기능도 배울 거예요. 슬라이드처럼 분석 흐름을 만들 수 있어요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'excited', text: '스토리텔링! 이거 진짜 중요하잖아. 발표 잘 하는 사람들이 이게 되는 거더라고~' },
        { speaker: 'sohee', expression: 'default', text: '근데 말주변이 없어서 걱정돼... 데이터로 말하는 법 배우면 나도 잘 할 수 있을까?' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: '스토리텔링. 여기가 기술자랑 분석가의 차이야.' },
        { speaker: 'junhyung', expression: 'serious', text: '숫자를 이야기로 만드는 능력. 이게 있어야 진짜 인정받아.' },
      ],
    },
  },

  briefing: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '데이터 스토리의 구조: 상황(Context) → 갈등(Complication) → 해결(Resolution).' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '"매출이 3분기에 급감했어요" (상황), "고객 이탈이 원인이었어요" (갈등), "이 세그먼트를 집중 공략하면 회복 가능해요" (해결).',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: 'Story Point: 뷰를 여러 장 만들어 프레젠테이션처럼 흐름을 설계해요. 각 장에 설명을 추가하면 자체로 완결된 보고서가 돼요.',
      },
    ],
  },

  problems: ['quiz_28', 'quiz_29'],

  bossChallenge: 'calc_17',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '"이 분석 결과를 경영진에게 5분 안에 설명해야 해요." 스토리를 만들어봐요.' },
      { speaker: 'seoyeon', expression: 'default', text: '인사이트를 핵심만. 그리고 다음 행동으로 연결해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '경영진한테 설명이라니!! 할 수 있어, 자신감 있게 해봐~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '스토리가 중요해. 데이터보다 해석이 먼저야. 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '스토리텔링까지 완성됐네요. 이제 정말 다 됐어요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '마지막은 최종 프로젝트예요. 지금까지 배운 모든 걸 하나의 대시보드에 담아요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '자신 있게 해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '스토리텔링까지!! 이제 최종 프로젝트 하나만 남았어!! 같이 끝까지 가자~!' },
      female: { speaker: 'junhyung', expression: 'shy', text: '...마지막 하나 남았어. 여기까지 왔으니까... 잘 마무리하자. 같이.' },
    },
  },

  event: {
    type: 'overtime',
    background: 'rooftop',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '옥상. 야근 도중 잠깐 바람을 쐬러 올라온 동기.' },
        { speaker: 'narrator', text: '밤하늘 아래, 내일이면 최종 프로젝트다.' },
      ],
    },
    choices: [
      {
        text: '동기 옆에 서서 이야기',
        affectionChange: 5,
        xpChange: 0,
        cg: 'nightwalk',
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '내일 최종 프로젝트잖아. 설레기도 하고 긴장되기도 해.' },
            { speaker: 'sohee', expression: 'shy', text: '...있잖아. 여기까지 같이 와줘서 정말 고마워. 네가 없었으면 나 포기했을 것 같아.' },
            { speaker: 'sohee', expression: 'excited', text: '내일도 같이 잘 마무리하자. 파이팅!' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '...왔어. 여기도 올라왔네.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '내일이면 끝이네. 솔직히 좀... 아쉽기도 하다.' },
            { speaker: 'junhyung', expression: 'flustered', text: '아, 그냥 파트가 끝난다는 거야. 아무 의미 없어. 그냥 그렇다고.' },
          ],
        },
      },
      {
        text: '혼자 최종 프로젝트 마무리 준비',
        affectionChange: -2,
        xpChange: 8,
        response: {
          male: [
            { speaker: 'narrator', text: '자리에 돌아와 최종 프로젝트 구상을 정리했다.' },
            { speaker: 'narrator', text: '모든 기술을 하나로 모으는 작업. 설레고 긴장됐다.' },
          ],
          female: [
            { speaker: 'narrator', text: '일찍 자리에 돌아와 최종 프로젝트 설계를 완성했다.' },
            { speaker: 'narrator', text: '내일이면 끝난다. 설렘과 긴장이 뒤섞인 감각이었다.' },
          ],
        },
      },
      {
        text: '팀장에게 최종 프로젝트 체크리스트 확인',
        affectionChange: 0,
        xpChange: 8,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '최종 프로젝트 체크리스트요? 좋아요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '①명확한 인사이트 ②완성된 인터랙션 ③스토리 흐름 ④시각적 완성도. 이 네 가지가 있으면 충분해요. 내일 잘 해봐요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '최종 마무리를 위한 조언이요?' },
            { speaker: 'seoyeon', expression: 'smile', text: '"완벽하게" 보다 "명확하게." 좋은 대시보드는 복잡하지 않아요. 내일 기대할게요.' },
          ],
        },
      },
    ],
  },
}

export const chapter20 = {
  id: 20,
  title: '최종 프로젝트',
  subtitle: '종합 대시보드 완성',
  part: 4,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '최종 챕터. 여기서 모든 것이 결판난다.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '오늘은 최종 프로젝트예요. 지금까지 배운 모든 것을 하나의 대시보드에 담아야 해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: 'KPI, 트렌드, 세분화, 이상값 탐지, 인터랙션, 스토리텔링. 전부 들어가야 해요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '여기서 선보이는 대시보드가 수습 평가의 핵심이에요. 그 동안 잘 따라와줬어요. 마지막까지 잘 해봐요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'worried', text: '드디어 최종이다... 솔직히 좀 떨려.' },
        { speaker: 'sohee', expression: 'cheer', text: '그래도 여기까지 같이 왔잖아! 우리 둘 다 할 수 있어! 파이팅!!!!' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'serious', text: '최종 프로젝트. 긴장은 안 해. 지금까지 다 해왔잖아.' },
        { speaker: 'junhyung', expression: 'smirk', text: '...근데 솔직히 나도 좀 긴장돼. 같이 잘 마무리하자.' },
      ],
    },
  },

  briefing: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '최종 대시보드 요구사항: ①KPI 요약 뷰 ②드릴다운 액션 ③시계열 트렌드 ④세그먼트 분석 ⑤이상값 탐지.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '각 뷰가 하나의 스토리로 연결되어야 해요. "지금 어떤가" → "왜" → "어떻게 할 것인가" 흐름이에요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '자신감 갖고 해봐요. 여기까지 온 사람이 못 할 게 없어요.',
      },
    ],
  },

  problems: ['calc_18', 'block_13', 'quiz_14'],

  bossChallenge: 'quiz_30',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막이에요. 최종 대시보드의 핵심 인사이트를 완성해봐요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이 문제를 풀면 수습 평가 대시보드가 완성돼요. 집중해요.',
      },
    ],
    partnerLine: {
      male: {
        speaker: 'sohee',
        expression: 'cheer',
        text: '마지막 문제야!!! 여기까지 왔어!!! 할 수 있어!!! 파이팅!!!',
      },
      female: {
        speaker: 'junhyung',
        expression: 'serious',
        text: '마지막이야. 지금까지 한 거 다 담아서 끝내봐. 믿어.',
      },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '완성됐네요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '처음 들어왔을 때 기억나요? 인터페이스도 낯설었던 신입이. 이제 KPI부터 코호트까지 전부 만들 수 있는 분석가가 됐어요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '수습 기간 정식으로 통과예요. 앞으로도 잘 부탁해요, 정식 분석가님.',
      },
    ],
    partnerLine: {
      male: {
        speaker: 'sohee',
        expression: 'excited',
        text: '끝났다!!!! 진짜 끝났다!!!!! 같이 해냈어!!! 최고야!!!',
      },
      female: {
        speaker: 'junhyung',
        expression: 'shy',
        text: '...수고했어. 진짜로. 같이 해서... 좋았어.',
      },
    },
  },

  event: {
    type: 'final_celebration',
    background: 'rooftop',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '최종 프로젝트 완료 후, 팀 전체가 옥상에 모였다.' },
        { speaker: 'narrator', text: '박수 소리. 모두가 웃고 있다.' },
        { speaker: 'narrator', text: '그 중에서, 동기가 다가온다.' },
      ],
    },
    choices: [
      {
        text: '동기에게 솔직하게 고마움 전하기',
        affectionChange: 8,
        xpChange: 0,
        cg: 'confession',
        response: {
          male: [
            { speaker: 'sohee', expression: 'shy', text: '...나도 같은 말 하려고 했어.' },
            {
              speaker: 'sohee',
              expression: 'excited',
              text: '여기까지 함께 해줘서 진짜 고마워. 혼자였으면 못 왔을 것 같아.',
            },
            {
              speaker: 'sohee',
              expression: 'cheer',
              text: '앞으로도 같이 일할 수 있으면 좋겠다. 아, 그리고... 사실 처음부터 신경 쓰였어. 이제 말할 수 있을 것 같아서.',
            },
          ],
          female: [
            { speaker: 'junhyung', expression: 'lookaway', text: '...고마워. 나도.' },
            {
              speaker: 'junhyung',
              expression: 'flustered',
              text: '같이 왔으니까 같이 축하해야지. 당연한 거 아니야.',
            },
            {
              speaker: 'junhyung',
              expression: 'shy',
              text: '...있잖아. 할 말이 있는데. 지금은 아니고... 나중에 둘이 있을 때. 그때 얘기하자.',
            },
          ],
        },
      },
      {
        text: '팀장에게 감사 인사',
        affectionChange: 0,
        xpChange: 10,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'smile', text: '잘 해줬어요. 진짜로.' },
            {
              speaker: 'seoyeon',
              expression: 'default',
              text: '솔직히 처음엔 평범한 신입이었어요. 지금은 달라요. 본인이 제일 잘 알겠지만.',
            },
            { speaker: 'seoyeon', expression: 'impressed', text: '앞으로도 이 팀에서 잘 부탁해요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'smile', text: '수고했어요. 정말로.' },
            { speaker: 'seoyeon', expression: 'default', text: '처음부터 잘 따라왔어요. 가르치는 사람으로서 보람 있었어요.' },
            { speaker: 'seoyeon', expression: 'impressed', text: '정식으로 팀원으로 환영해요.' },
          ],
        },
      },
      {
        text: '팀 모두와 함께 마지막을 즐기기',
        affectionChange: 3,
        xpChange: 5,
        response: {
          male: [
            { speaker: 'narrator', text: '팀 전체가 함께 건배했다.' },
            {
              speaker: 'narrator',
              text: '20챕터의 여정이 끝났다. 한 명의 신입 분석가가 실력을 갖춘 팀원으로 성장한 순간이었다.',
            },
          ],
          female: [
            { speaker: 'narrator', text: '팀 모두와 함께 이 순간을 즐겼다.' },
            {
              speaker: 'narrator',
              text: '긴 여정의 끝. 시작할 때는 몰랐던 것들이 이제는 자연스럽게 손에 익어 있었다.',
            },
          ],
        },
      },
    ],
  },
}
