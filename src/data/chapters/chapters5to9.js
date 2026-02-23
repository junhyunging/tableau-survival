// Part 2: 계산의 기술 (Chapter 5-9)

export const chapter5 = {
  id: 5,
  title: '계산된 필드 입문',
  subtitle: '수식 작성의 시작',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: 'Part 2 시작. 이제 본격적인 계산이다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘부터 계산된 필드를 다뤄요. 원래 데이터에 없는 새 필드를 수식으로 만드는 거예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '예를 들어 매출액에서 원가를 뺀 이익률, 전월 대비 성장률 같은 것들. 이런 게 없으면 분석이 반쪽이에요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '수식이 익숙하지 않아도 괜찮아요. 하나씩 해봐요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'worried', text: '계산된 필드... 혹시 코딩이랑 비슷한 거야?' },
        { speaker: 'sohee', expression: 'default', text: '나 수학이랑 코딩 둘 다 좀 약해서... 잘 따라갈 수 있을지 걱정돼.' },
        { speaker: 'sohee', expression: 'cheer', text: '그래도 같이 하면 어떻게든 되겠지! 막히면 알려줘~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'default', text: 'Part 2 시작이네. 여기서부터가 진짜야.' },
        { speaker: 'junhyung', expression: 'smirk', text: '계산 필드 잘 쓰면 엑셀 없이도 웬만한 분석은 다 돼. 나 요즘 완전 빠졌어.' },
        { speaker: 'junhyung', expression: 'lookaway', text: '...뭐, 먼저 배워놨다고 자랑하는 건 아니야. 그냥 알아두면 좋다고.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '계산된 필드는 [분석] 메뉴 또는 데이터 패널 빈 공간 우클릭으로 만들 수 있어요.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '기본 형태는 `[필드명] + 연산자 + [필드명]`이에요. IF, THEN, ELSE, END로 조건문도 만들 수 있고요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘은 기본 산술과 IF 조건문만 다룰 거예요. 이것만 해도 실무에서 엄청 쓸모 있어요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '시작해볼까요.' },
    ],
  },

  problems: ['calc_01'],

  bossChallenge: 'calc_02',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '보스 문제예요. 조건을 잘 읽고 IF문을 완성해봐요.' },
      { speaker: 'seoyeon', expression: 'default', text: '에러가 나면 닫는 괄호와 END를 확인하세요. 실수의 90%가 거기서 나와요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '할 수 있어! 천천히 읽고 풀어봐~' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '이 정도면 충분히 할 수 있어. 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '잘 했어요. 계산 필드 기초가 잡혔네요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이제 함수들을 익히면 거의 모든 계산이 가능해져요. 다음은 주요 함수들을 배울 거예요.',
      },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '와, 수식이 만들어지는 거 보니까 신기하다~ 나도 좀 더 연습해야겠어!' },
      female: { speaker: 'junhyung', expression: 'default', text: '좋아. 기초는 다 됐네. 이제 함수 쪽 가면 더 강력해질 거야.' },
    },
  },

  event: {
    type: 'lunch',
    background: 'restaurant',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '점심시간. 오늘은 어디서, 누구와 먹을까.' },
      ],
    },
    choices: [
      {
        text: '동기와 함께 점심 먹기',
        affectionChange: 3,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '같이 가자!! 나 오늘 먹고 싶은 거 있었어~' },
            { speaker: 'sohee', expression: 'default', text: '계산 필드 오늘 어떤 것 같아? 나는 IF문이 좀 헷갈리던데.' },
            { speaker: 'sohee', expression: 'shy', text: '밥 먹으면서 얘기하자. 이런 거 같이 얘기하는 게 좋더라고.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '점심 같이 먹을래? ...마침 나도 같이 먹을 사람이 없었어.' },
            { speaker: 'junhyung', expression: 'smirk', text: '아, 네가 없었다는 게 아니라 그냥 마침 시간이 딱 맞았다고.' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...뭐, 가자.' },
          ],
        },
      },
      {
        text: '박서연 팀장과 점심 미팅',
        affectionChange: 0,
        xpChange: 5,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '같이 먹자고요? 좋아요.' },
            { speaker: 'seoyeon', expression: 'default', text: '다음에 다룰 함수들 중에 특히 날짜 함수가 실무에서 자주 써요. DATETRUNC, DATEDIFF 이 두 개는 꼭 외워요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '오늘은 나랑 먹는 거예요? 좋아요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '계산 필드 잘 됐어요. 다음엔 문자열 함수도 배울 거예요. 텍스트 데이터 정리할 때 필수예요.' },
          ],
        },
      },
      {
        text: '혼자 빠르게 먹고 연습',
        affectionChange: -1,
        xpChange: 3,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '편의점에서 간단히 해결하고 빠르게 자리로 돌아왔다.' },
            { speaker: 'narrator', text: 'IF문을 다시 만들어보며 패턴을 익혔다. 손에 익는 것이 느껴졌다.' },
          ],
          female: [
            { speaker: 'narrator', text: '빠르게 먹고 돌아와 계산 필드를 더 연습했다.' },
            { speaker: 'narrator', text: '집중하니까 오히려 더 빨리 이해됐다. 오늘은 이게 정답이었다.' },
          ],
        },
      },
    ],
  },
}

export const chapter6 = {
  id: 6,
  title: '함수 활용',
  subtitle: '날짜·문자열·논리 함수',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '계산 필드의 심화. 오늘은 함수 편이다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘은 Tableau에서 자주 쓰는 함수들을 다뤄요. 날짜 함수, 문자열 함수, 논리 함수 세 가지예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '함수를 알면 계산 필드의 가능성이 몇 배로 늘어요. 하지만 외울 필요는 없어요. 패턴을 이해하는 게 중요해요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'default', text: '함수 오늘 배우는 거지? 엑셀 함수랑 비슷할까?' },
        { speaker: 'sohee', expression: 'cheer', text: '엑셀은 좀 했거든! 비슷하면 나 잘 할 수 있을 것 같아~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'default', text: '오늘 함수 챕터네. DATETRUNC 쓸 줄 알면 월별 집계가 한 줄이야.' },
        { speaker: 'junhyung', expression: 'smirk', text: '내가 먼저 익혀놨으니까... 뭐, 막히면 물어봐도 돼.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '날짜 함수: DATETRUNC, DATEDIFF, DATEPART. 기간 계산과 날짜 그룹화에 필수예요.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '문자열 함수: LEFT, RIGHT, MID, CONTAINS, REPLACE. 텍스트 데이터 정제할 때 써요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '논리 함수: IF, IIF, CASE, ZN. 조건 분기를 만들 때 필요해요. ZN은 NULL을 0으로 바꿔주는 편리한 함수고요.',
      },
    ],
  },

  problems: ['calc_03'],

  bossChallenge: 'calc_04',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막 문제. 날짜 함수를 조합해서 풀어야 해요.' },
      { speaker: 'seoyeon', expression: 'default', text: '어떤 함수가 필요한지 먼저 생각해보고 시작해요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '화이팅!! 찬찬히 읽으면 할 수 있어~' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '마지막이라고 긴장할 필요 없어. 그냥 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '함수 활용 완료. 이제 본격적인 계산이 가능해졌네요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '다음은 매개변수예요. 사용자가 직접 값을 바꿀 수 있는 동적 분석이에요.',
      },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'excited', text: '함수 이제 좀 친해진 것 같아! 나도 엑셀 함수랑 비교하면서 이해됐어~' },
      female: { speaker: 'junhyung', expression: 'default', text: '잘 됐네. 이제 매개변수 배우면 분석이 훨씬 유연해질 거야.' },
    },
  },

  event: {
    type: 'cafe',
    background: 'cafe',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '잠깐의 휴식. 사내 카페에서 동기와 마주쳤다.' },
      ],
    },
    choices: [
      {
        text: '동기와 카페에서 함수 복습',
        affectionChange: 3,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'default', text: '같이 앉자! DATETRUNC 설명해줄 수 있어? 좀 헷갈려서.' },
            { speaker: 'sohee', expression: 'shy', text: '아 이해됐다! 역시 직접 설명해주니까 바로 들어오네. 고마워~' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '마침 잘 됐다. ZN 함수 쓸 때 주의할 점 알아?' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...뭐, 그냥 같이 확인해보는 거야. 별거 아니야.' },
          ],
        },
      },
      {
        text: '혼자 카페에서 노트 정리',
        affectionChange: -1,
        xpChange: 5,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '혼자 오늘 배운 함수들을 노트에 정리했다.' },
            { speaker: 'narrator', text: '날짜, 문자열, 논리. 각 함수의 사용 상황을 직접 써보자 점점 윤곽이 잡혔다.' },
          ],
          female: [
            { speaker: 'narrator', text: '조용히 앉아 함수 레퍼런스를 정리했다.' },
            { speaker: 'narrator', text: '언제 어떤 함수를 써야 할지 패턴이 보이기 시작했다.' },
          ],
        },
      },
      {
        text: '팀장에게 실무 활용 사례 물어보기',
        affectionChange: 0,
        xpChange: 7,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '실무에서요? 날짜 함수는 거의 매 프로젝트에 써요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '특히 DATEDIFF로 구매 주기 계산, DATETRUNC으로 월별 집계. 이 두 가지는 거의 공식처럼 써요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '좋은 질문이에요. 문자열 함수는 데이터 정제에 많이 써요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '특히 CONTAINS로 카테고리 분류, REPLACE로 이상한 특수문자 제거. 클라이언트 데이터는 항상 지저분하거든요.' },
          ],
        },
      },
    ],
  },
}

export const chapter7 = {
  id: 7,
  title: '매개변수',
  subtitle: '시나리오 기반 동적 분석',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '계산의 기술, 세 번째 챕터. 오늘은 사용자와 분석이 만나는 지점이다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '매개변수는 사용자가 직접 값을 입력하거나 선택해서 분석 결과를 바꿀 수 있게 해줘요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '"목표 매출액 이상인 것만 강조해서 보여줘" 같은 요청이 들어올 때. 매개변수 없이는 매번 수식을 수동으로 바꿔야 해요.',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '오늘 배우면 그런 요청에 5분 안에 답할 수 있어요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'default', text: '매개변수가 뭔지 감이 잘 안 와... 그냥 필터 같은 거야?' },
        { speaker: 'sohee', expression: 'cheer', text: '팀장님이 설명해주시면 이해될 것 같아! 오늘도 잘 해봐~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'smirk', text: '매개변수. 이거 클라이언트들이 제일 좋아해.' },
        { speaker: 'junhyung', expression: 'default', text: '슬라이더 하나 달아주면 "대박이다!" 하거든. 근데 구현은 별거 없어. 해봐.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '매개변수는 세 단계로 만들어요. 매개변수 생성 → 계산된 필드에서 참조 → 뷰에 적용.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '예를 들어 "목표 매출액" 매개변수를 만들고, [매출] >= [목표 매출액] 이면 "달성"으로 표시하는 계산 필드를 만들면 돼요.',
      },
      { speaker: 'seoyeon', expression: 'default', text: '매개변수 컨트롤을 뷰에 표시하면 사용자가 직접 값을 바꿀 수 있어요.' },
    ],
  },

  problems: ['calc_05'],

  bossChallenge: 'calc_06',

  bossIntro: {
    background: 'presentation',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막 문제는 클라이언트 시연 상황이에요. 집중해요.' },
      { speaker: 'seoyeon', expression: 'default', text: '매개변수와 계산 필드를 조합해서 동적 분석을 완성해봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '클라이언트 시연이라니 긴장되겠다~ 그래도 할 수 있어! 파이팅~' },
      female: { speaker: 'junhyung', expression: 'serious', text: '이건 진짜 실전이야. 침착하게 해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '매개변수까지 완료됐네요. 이제 분석이 훨씬 유연해졌어요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 테이블 계산이에요. 조금 더 복잡하지만 실무에서 많이 써요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '와~ 동적으로 바뀌는 거 보니까 진짜 멋있다!! 나도 만들어봐야지!' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '...생각보다 빨리 마쳤네. 역시.' },
    },
  },

  event: {
    type: 'overtime',
    background: 'office_night',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '오늘도 야근. 사무실에 몇 명 남아있다.' },
        { speaker: 'narrator', text: '동기가 모니터 앞에서 고민하는 표정을 짓고 있다.' },
      ],
    },
    choices: [
      {
        text: '동기의 고민을 도와주기',
        affectionChange: 4,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'worried', text: '이거 매개변수가 계산 필드에 안 먹히는 것 같은데...' },
            { speaker: 'sohee', expression: 'excited', text: '아, 맞아! 참조 순서가 잘못된 거구나! 해결됐어!! 고마워~' },
            { speaker: 'sohee', expression: 'shy', text: '...매번 도와줘서 미안하기도 하고 고맙기도 해.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'flustered', text: '아 이거 왜 안 되지... 어, 봐줄 수 있어?' },
            { speaker: 'junhyung', expression: 'lookaway', text: '...아 됐다. 감사. 아니 뭐, 그냥 고마워.' },
          ],
        },
      },
      {
        text: '먼저 퇴근하기',
        affectionChange: -1,
        xpChange: 2,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '먼저 퇴근하며 오늘 배운 내용을 머릿속으로 정리했다.' },
            { speaker: 'narrator', text: '매개변수와 계산 필드의 조합. 이게 익숙해지면 클라이언트 앞에서도 당당할 수 있을 것 같았다.' },
          ],
          female: [
            { speaker: 'narrator', text: '짐을 챙겨 나왔다. 오늘 배운 매개변수 패턴을 곱씹으며 걸었다.' },
            { speaker: 'narrator', text: '동적 분석의 느낌이 조금씩 잡혀가는 것 같았다.' },
          ],
        },
      },
      {
        text: '나도 야근하며 매개변수 더 연습',
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'narrator', text: '동기 옆에서 각자 화면을 보며 연습을 이어갔다.' },
            { speaker: 'sohee', expression: 'default', text: '야, 이거 봐봐. 슬라이더가 움직이면서 차트가 바뀌는 거 진짜 신기하지 않아?' },
          ],
          female: [
            { speaker: 'narrator', text: '집에 가려다가 다시 앉았다. 매개변수를 더 응용해보고 싶었다.' },
            { speaker: 'narrator', text: '조건 조합을 바꿔가며 여러 케이스를 만들어보다 보니 한 시간이 훌쩍 지났다.' },
          ],
        },
      },
    ],
  },
}

export const chapter8 = {
  id: 8,
  title: '테이블 계산',
  subtitle: '순위와 구성비 계산',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: 'Part 2 네 번째. 테이블 계산이다. 많은 신입들이 여기서 막힌다.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '테이블 계산은 뷰 내에서 상대적인 계산을 해요. 순위, 누적 합계, 전월 대비 변화율 같은 것들이요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '일반 집계 함수와 다르게, 테이블 계산은 이미 집계된 데이터를 기준으로 계산해요. 범위 설정이 중요해요.',
      },
      { speaker: 'seoyeon', expression: 'frown', text: '어렵긴 해요. 하지만 이걸 이해하면 실력 차가 확 나요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'worried', text: '테이블 계산... 선배들이 어렵다고 했던 그거지?' },
        { speaker: 'sohee', expression: 'cheer', text: '겁먹지 말자! 우리가 여기까지 왔잖아. 할 수 있어!' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'serious', text: '테이블 계산 조심해. 여기서 방향이 헷갈리면 완전 다른 값이 나와.' },
        { speaker: 'junhyung', expression: 'default', text: '파티션이랑 어드레싱 개념만 잘 잡으면 돼. 집중해서 들어봐.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: '테이블 계산에는 두 가지 핵심 개념이 있어요. 파티션(Partition)과 어드레싱(Addressing).' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '파티션은 "무엇으로 리셋할 것인가", 어드레싱은 "어떤 방향으로 계산할 것인가"예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '예를 들어 지역별 순위를 구할 때, 파티션을 지역으로 설정하면 각 지역 안에서 순위가 나와요. 파티션 없이 하면 전체 순위가 나오고요.',
      },
    ],
  },

  problems: ['quiz_11'],

  bossChallenge: 'calc_08',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: '마지막 문제예요. 테이블 계산의 개념 이해를 확인할 거예요.' },
      { speaker: 'seoyeon', expression: 'default', text: '어드레싱 방향과 파티션을 헷갈리지 말고 풀어봐요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '거의 다 왔어! 파이팅!!' },
      female: { speaker: 'junhyung', expression: 'smirk', text: '여기까지 왔으면 다 됐어. 마무리해봐.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: '테이블 계산 완료. 정말 어려운 걸 통과했네요.' },
      { speaker: 'seoyeon', expression: 'default', text: '다음은 LOD예요. 이것도 난관이에요. 하지만 알면 알수록 강력해요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'amazed', text: '끝났다!!!! 테이블 계산 진짜 어렵더니... 우리 둘 다 해냈다!!' },
      female: { speaker: 'junhyung', expression: 'default', text: '좋아. 테이블 계산까지 됐으면 이제 LOD만 남았어. 거의 다 왔어.' },
    },
  },

  event: {
    type: 'dinner_party',
    background: 'bar',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: 'Part 2 절반 기념 회식. 팀이 다 같이 모였다.' },
        { speaker: 'narrator', text: '자리를 고를 시간이다.' },
      ],
    },
    choices: [
      {
        text: '동기 옆에 앉기',
        affectionChange: 5,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '왔다! 여기 여기~ 자리 맡아놨어!' },
            { speaker: 'sohee', expression: 'shy', text: '오늘 테이블 계산 완전 어려웠는데 같이 해서 버텼던 것 같아.' },
            { speaker: 'sohee', expression: 'default', text: '고마워. 진짜로.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'lookaway', text: '...어, 왔어. 뭐야, 여기 앉는 거야?' },
            { speaker: 'junhyung', expression: 'flustered', text: '...그래. 앉아. 뭐 마실 거야.' },
          ],
        },
      },
      {
        text: '팀장 옆 자리 선택',
        affectionChange: -2,
        xpChange: 10,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '또 팀장 옆이에요? 열정적이네요.' },
            { speaker: 'seoyeon', expression: 'smile', text: 'LOD 표현식. 다음 챕터인데, 이건 정말 강력한 기능이에요. 집계 레벨을 직접 제어하거든요. 기대해요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '팀장 옆에 자주 앉는 신입이네요. 좋아요.' },
            { speaker: 'seoyeon', expression: 'default', text: 'LOD는 처음엔 문법이 낯설어요. FIXED, INCLUDE, EXCLUDE. 이 세 키워드의 차이만 알면 반은 된 거예요.' },
          ],
        },
      },
      {
        text: '동기에게 다가가 기술적인 얘기 나누기',
        affectionChange: 2,
        xpChange: 5,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '오 왔어! 나 테이블 계산 어드레싱이 아직도 좀 헷갈리는데 간단히 설명해줄 수 있어?' },
            { speaker: 'sohee', expression: 'shy', text: '아 이해됐다~ 역시 네가 설명해주면 쉽게 이해돼. 고마워.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '오늘 테이블 계산 어땠어? 나는 파티션 설정이 제일 애매하더라고.' },
            { speaker: 'junhyung', expression: 'smirk', text: '...아 맞아, 그렇게 생각하면 되는 거구나. 나쁘지 않네.' },
          ],
        },
      },
    ],
  },
}

export const chapter9 = {
  id: 9,
  title: 'LOD 표현식',
  subtitle: '집계 레벨 제어',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: 'Part 2 마지막. 가장 강력하고 어려운 기능이다.' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: 'LOD는 Level of Detail의 약자예요. 직역하면 "집계 상세 레벨" 제어예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '뷰의 집계 레벨과 관계없이 원하는 레벨에서 집계 값을 구할 수 있어요. 이게 왜 강력하냐고요?',
      },
      {
        speaker: 'seoyeon',
        expression: 'impressed',
        text: '"고객별 첫 구매 날짜" 같은 걸 뷰에서 바로 구할 수 있어요. LOD 전에는 이런 계산이 엄청 복잡했거든요.',
      },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'worried', text: 'LOD... 선배들이 제일 어렵다고 한 거잖아.' },
        { speaker: 'sohee', expression: 'cheer', text: '그래도 팀장님이 잘 설명해주실 거야! 우리 어디까지 왔나봐. Part 2 마지막이잖아!' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'serious', text: 'LOD. 이게 처음엔 말이 안 되는 것처럼 느껴질 거야.' },
        { speaker: 'junhyung', expression: 'default', text: 'FIXED, INCLUDE, EXCLUDE. 이 세 개가 핵심인데, 차이를 직접 뷰에서 보면서 이해하는 게 빠르더라.' },
        { speaker: 'junhyung', expression: 'smirk', text: '...잘 들어봐. 이거 이해하면 진짜 레벨 업이야.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: 'FIXED: 뷰 레벨 무시하고 지정한 차원으로만 집계.' },
      { speaker: 'seoyeon', expression: 'serious', text: 'INCLUDE: 뷰 차원에 더해 추가 차원을 집계에 포함.' },
      { speaker: 'seoyeon', expression: 'default', text: 'EXCLUDE: 뷰 차원 중 일부를 제외하고 집계.' },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '처음엔 헷갈려요. 직접 해보면서 결과를 눈으로 확인하는 게 제일 빠른 이해법이에요.',
      },
    ],
  },

  problems: ['quiz_12', 'calc_09'],

  bossChallenge: 'calc_10',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: 'Part 2 마지막 보스예요. LOD와 테이블 계산을 통합적으로 써야 해요.' },
      { speaker: 'seoyeon', expression: 'default', text: '어려우면 FIXED부터 시작해요. 가장 직관적이에요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: 'Part 2 마지막이야!! 여기까지 왔어!! 할 수 있어!!!!!' },
      female: { speaker: 'junhyung', expression: 'serious', text: 'Part 2 마지막이네. 집중해봐. 할 수 있어.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: 'Part 2 완주. LOD까지 마쳤네요. 솔직히 놀랐어요.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '이제 Part 3에선 실제 비즈니스 분석을 다뤄요. KPI 대시보드, 퍼널 분석, 고객 세분화...',
      },
      { speaker: 'seoyeon', expression: 'smile', text: '지금까지 배운 걸 진짜 데이터에 써먹을 차례예요. 기대해도 좋아요.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'excited', text: 'Part 2 다 했다!!!!! 너랑 같이 해서 버텼어. 고마워 진짜로~' },
      female: { speaker: 'junhyung', expression: 'shy', text: '...Part 2 끝이네. 같이 해서 잘 됐어. 아, 그냥... 수고했다고.' },
    },
  },

  event: {
    type: 'lunch',
    background: 'restaurant',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: 'Part 2 완주 기념. 오늘 점심은 특별히 좋은 데 가기로 했다.' },
      ],
    },
    choices: [
      {
        text: '동기와 특별한 점심',
        affectionChange: 5,
        xpChange: 0,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'sohee', expression: 'excited', text: '우리 Part 2 다 했으니까 특별한 거 먹자! 내가 쏠게~' },
            { speaker: 'sohee', expression: 'default', text: 'LOD 이해하는 거 엄청 힘들었는데... 너랑 같이 얘기하다보니까 뭔가 해결됐어.' },
            { speaker: 'sohee', expression: 'shy', text: '있어줘서 고마워. 진짜로.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'default', text: '같이 먹으러 가자. 내가 괜찮은 곳 알아.' },
            { speaker: 'junhyung', expression: 'smirk', text: 'Part 2 완주 기념이야. 둘 다 고생했으니까. ...내가 사줄게.' },
            { speaker: 'junhyung', expression: 'flustered', text: '아, 그냥 이 정도는 돼야지. 별거 아니야.' },
          ],
        },
      },
      {
        text: '팀 전체 점심 모임',
        affectionChange: 0,
        xpChange: 8,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'smile', text: '팀 전체 같이 먹는 건 좋죠. 이런 시간이 팀워크를 만들어요.' },
            { speaker: 'seoyeon', expression: 'default', text: 'Part 3부터는 실제 클라이언트 케이스가 들어가요. 오늘 같은 에너지로 해봐요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'smile', text: '다 같이 먹는 거 좋아요. Part 2 수고들 했어요.' },
            { speaker: 'seoyeon', expression: 'default', text: 'Part 3은 지금까지 배운 걸 실제 문제에 적용하는 거예요. 자신감 갖고 해봐요.' },
          ],
        },
      },
      {
        text: '혼자 점심 먹으며 Part 3 예습',
        affectionChange: -1,
        xpChange: 5,
        hintChange: 1,
        response: {
          male: [
            { speaker: 'narrator', text: '혼자 식사를 마치고 Part 3 첫 챕터인 KPI 대시보드를 미리 훑었다.' },
            { speaker: 'narrator', text: '실무 프레임이 보이기 시작했다. 배운 기술들이 어떻게 쓰이는지 윤곽이 잡혔다.' },
          ],
          female: [
            { speaker: 'narrator', text: '혼자 조용히 식사를 하며 앞으로 배울 내용을 미리 생각했다.' },
            { speaker: 'narrator', text: 'KPI, 퍼널, 파레토. 이제 이 단어들이 낯설지 않았다.' },
          ],
        },
      },
    ],
  },
}
