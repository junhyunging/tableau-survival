export const insightlabStory = {
  company: 'insightlab',
  companyName: '인사이트랩',
  bossName: '박서연',
  bossTitle: '팀장',
  colleagueName: '정소희',

  days: {
    1: {
      title: '첫 출근',
      subtitle: '데이터, 뭐가 다른 거야?',

      opening: {
        dialogues: [
          { speaker: 'narrator', text: '인사이트랩. 데이터로 세상을 읽는 BI 컨설팅 회사.' },
          { speaker: 'narrator', text: '오늘은 당신의 첫 출근날이다.' },
          { speaker: 'narrator', text: '엘리베이터 문이 열리고, 넓은 오피스가 눈에 들어온다.', background: 'office_day' },
          { speaker: 'seoyeon', expression: 'default', text: '{playerName}님이시죠? 박서연입니다. 데이터 시각화팀 팀장이에요.', characters: [{ id: 'seoyeon', position: 'center' }] },
          { speaker: 'seoyeon', expression: 'smile', text: '우리 팀은 Tableau로 클라이언트 데이터를 시각화하는 일을 해요.' },
          { speaker: 'seoyeon', expression: 'default', text: '수습 기간은 5일. 그 안에 기본기를 보여주세요.' },
          { speaker: 'seoyeon', expression: 'serious', text: '참고로... 저는 실력 없는 사람한테는 관대하지 않아요.' },
        ],
      },

      morningIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '먼저 Tableau의 기본부터 봅시다.' },
          { speaker: 'seoyeon', expression: 'default', text: '데이터에는 크게 두 종류가 있어요.' },
          { speaker: 'seoyeon', expression: 'smile', text: '"차원"은 분류의 기준이 되는 필드입니다. 카테고리, 지역 같은 것들이죠.' },
          { speaker: 'seoyeon', expression: 'default', text: '"측정값"은 숫자로 집계할 수 있는 필드예요. 매출액, 수량 같은 것들.' },
          { speaker: 'seoyeon', expression: 'impressed', text: 'Tableau에서 파란색은 불연속형, 초록색은 연속형을 뜻해요.' },
          { speaker: 'seoyeon', expression: 'serious', text: '이거 구분 못 하면... 뭐, 알아서 하세요.' },
          { speaker: 'seoyeon', expression: 'default', text: '자, 간단한 퀴즈로 확인해봅시다.' },
        ],
      },

      morningProblems: ['quiz_01', 'quiz_02'],

      lunchEvent: {
        dialogues: [
          { speaker: 'narrator', text: '점심시간이 되었다.', background: 'restaurant' },
          { speaker: 'sohee', expression: 'cheer', text: '안녕하세요! 저는 정소희, 같은 팀 동기예요!', characters: [{ id: 'sohee', position: 'center' }] },
          { speaker: 'sohee', expression: 'default', text: '오늘 첫날이시죠? 점심 같이 먹을래요?' },
        ],
        choices: [
          {
            text: '"좋아요! 같이 가요."',
            gaugeChange: 5,
            response: [
              { speaker: 'sohee', expression: 'cheer', text: '좋아요! 회사 근처 맛집 알려드릴게요.' },
              { speaker: 'sohee', expression: 'excited', text: '서연 팀장님, 무서워 보이지만 실력 있으면 인정해주는 분이에요.' },
              { speaker: 'sohee', expression: 'amazed', text: '힌트 하나! Tableau에서 파랑은 불연속형, 초록은 연속형이야!' },
            ],
          },
          {
            text: '"괜찮아요, 혼자 좀 공부할래요."',
            gaugeChange: 0,
            response: [
              { speaker: 'narrator', text: '점심시간 동안 Tableau 문서를 읽었다.', characters: [] },
              { speaker: 'narrator', text: '차원과 측정값의 개념이 조금 더 명확해졌다.' },
            ],
          },
          {
            text: '"서연 팀장님이랑 점심 먹어도 될까요?"',
            gaugeChange: -5,
            response: [
              { speaker: 'seoyeon', expression: 'serious', text: '...점심은 개인 시간입니다.', characters: [{ id: 'seoyeon', position: 'center' }] },
              { speaker: 'narrator', text: '팀장이 차갑게 거절했다. 어색한 공기가 흐른다.' },
            ],
          },
        ],
      },

      afternoonIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '자, 이번엔 직접 해보죠.' },
          { speaker: 'seoyeon', expression: 'default', text: '슈퍼스토어 데이터셋을 분석할 겁니다.' },
          { speaker: 'seoyeon', expression: 'default', text: '블록을 조립해서 차트를 만들어보세요.' },
          { speaker: 'sohee', expression: 'shy', text: '(소근소근) 가로축에 분류 기준, 세로축에 수치를 넣으면 돼요!', characters: [{ id: 'seoyeon', position: 'left' }, { id: 'sohee', position: 'right' }] },
        ],
      },

      afternoonProblems: ['block_01', 'quiz_03'],

      endOfDay: {
        background: 'office_night',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '첫날치고는... 뭐, 나쁘지 않네요.' },
          { speaker: 'seoyeon', expression: 'serious', text: '내일은 연속형과 불연속형을 다룹니다. 예습해 오세요.' },
          { speaker: 'sohee', expression: 'cheer', text: '수고하셨어요! 내일 봐요~', characters: [{ id: 'seoyeon', position: 'left' }, { id: 'sohee', position: 'right' }] },
          { speaker: 'narrator', text: 'Day 1 종료. 아직 갈 길이 멀다...' },
        ],
      },
    },

    2: {
      title: '첫 프로젝트',
      subtitle: '이게 초록이야 파랑이야?',

      opening: {
        dialogues: [
          { speaker: 'narrator', text: '출근 2일차. 어제보다 조금 익숙해진 사무실.', background: 'office_day' },
          { speaker: 'seoyeon', expression: 'default', text: '{playerName}님, 오늘은 클라이언트 미팅 준비가 있습니다.', characters: [{ id: 'seoyeon', position: 'center' }] },
          { speaker: 'seoyeon', expression: 'default', text: '그 전에 연속형과 불연속형 필드에 대해 알아봐야 해요.' },
        ],
      },

      morningIntro: {
        background: 'meeting_room',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: 'Tableau에서 필드는 "연속형"과 "불연속형"으로 나뉩니다.' },
          { speaker: 'seoyeon', expression: 'impressed', text: '연속형은 초록색 알약 모양으로 표시되고, 끊기지 않는 축을 만들어요.' },
          { speaker: 'seoyeon', expression: 'default', text: '불연속형은 파란색 알약이고, 각각 독립된 범주로 나뉘죠.' },
          { speaker: 'seoyeon', expression: 'smile', text: '같은 날짜 필드라도 연속형이면 타임라인, 불연속형이면 카테고리처럼 동작합니다.' },
          { speaker: 'seoyeon', expression: 'serious', text: '헷갈리면 안 돼요. 자, 확인해봅시다.' },
        ],
      },

      morningProblems: ['quiz_04', 'quiz_05'],

      lunchEvent: {
        dialogues: [
          { speaker: 'narrator', text: '점심시간. 오후에 클라이언트 미팅 준비가 남아있다.', background: 'cafe' },
          { speaker: 'sohee', expression: 'default', text: '오후에 미팅 준비 도와드릴까요?', characters: [{ id: 'sohee', position: 'center' }] },
        ],
        choices: [
          {
            text: '"네, 같이 준비해요!"',
            gaugeChange: 5,
            response: [
              { speaker: 'sohee', expression: 'excited', text: '라인차트는 보통 연속형 날짜를 가로축에 쓴다는 거 알죠?' },
              { speaker: 'sohee', expression: 'cheer', text: '색상 구분을 추가하면 카테고리별 비교도 가능해요!' },
            ],
          },
          {
            text: '"혼자 해볼게요."',
            gaugeChange: 0,
            response: [
              { speaker: 'narrator', text: '혼자서 미팅 자료를 준비했다.', characters: [] },
            ],
          },
        ],
      },

      afternoonIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '클라이언트에게 보여줄 시각화를 만들어봅시다.' },
          { speaker: 'seoyeon', expression: 'default', text: '이번에는 색상 구분도 활용해보세요.' },
        ],
      },

      afternoonProblems: ['block_02', 'block_03'],

      endOfDay: {
        background: 'office_night',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '연속형과 불연속형, 이제 좀 감이 오나요?' },
          { speaker: 'seoyeon', expression: 'default', text: '내일부터는 계산된 필드를 다룹니다.' },
          { speaker: 'seoyeon', expression: 'serious', text: '진짜 Tableau 실력은 계산된 필드에서 갈립니다.' },
          { speaker: 'sohee', expression: 'cheer', text: '오늘도 고생했어요! 내일 화이팅!', characters: [{ id: 'seoyeon', position: 'left' }, { id: 'sohee', position: 'right' }] },
        ],
      },
    },

    3: {
      title: '클라이언트 데모',
      subtitle: '계산 좀 해봐',

      opening: {
        dialogues: [
          { speaker: 'narrator', text: '3일차. 이제 본격적인 업무가 시작된다.', background: 'office_day' },
          { speaker: 'seoyeon', expression: 'default', text: '오늘은 "계산된 필드"를 배울 겁니다.', characters: [{ id: 'seoyeon', position: 'center' }] },
          { speaker: 'seoyeon', expression: 'default', text: '클라이언트가 커스텀 지표를 원하거든요.' },
        ],
      },

      morningIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: 'Tableau의 계산된 필드는 IF, CASE 같은 논리 함수를 지원해요.' },
          { speaker: 'seoyeon', expression: 'impressed', text: 'IF [조건] THEN [값] ELSE [값] END - 이게 기본 구조입니다.' },
          { speaker: 'seoyeon', expression: 'default', text: 'CASE도 비슷한데, 여러 조건을 나열할 때 유용하죠.' },
          { speaker: 'seoyeon', expression: 'serious', text: '직접 수식을 작성해보세요. 에디터를 열겠습니다.' },
        ],
      },

      morningProblems: ['calc_01', 'calc_02'],

      lunchEvent: {
        dialogues: [
          { speaker: 'narrator', text: '점심시간. 서연 팀장이 커피를 건넨다.', background: 'cafe' },
          { speaker: 'seoyeon', expression: 'smile', text: '{playerName}님, 커피 한 잔 할래요?', characters: [{ id: 'seoyeon', position: 'center' }] },
        ],
        choices: [
          {
            text: '"네, 감사합니다!"',
            gaugeChange: 10,
            response: [
              { speaker: 'seoyeon', expression: 'smile', text: '오전에 꽤 잘했어요. 계속 이 페이스 유지하면 됩니다.' },
              { speaker: 'seoyeon', expression: 'impressed', text: '오후에 ROUND 함수를 쓸 건데, 두 번째 인자가 핵심이에요.' },
            ],
          },
          {
            text: '"아, 괜찮습니다."',
            gaugeChange: -5,
            response: [
              { speaker: 'seoyeon', expression: 'serious', text: '...그래요.' },
              { speaker: 'narrator', text: '팀장의 호의를 거절해버렸다.' },
            ],
          },
        ],
      },

      afternoonIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '이번엔 숫자 함수입니다.' },
          { speaker: 'seoyeon', expression: 'default', text: 'ROUND, ABS 같은 함수를 써서 데이터를 가공해보세요.' },
        ],
      },

      afternoonProblems: ['calc_03', 'quiz_06'],

      endOfDay: {
        background: 'office_night',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '계산된 필드, 생각보다 어렵죠?' },
          { speaker: 'seoyeon', expression: 'default', text: '내일은 날짜함수와 문자열함수입니다. 더 어려워질 거예요.' },
          { speaker: 'sohee', expression: 'cheer', text: '벌써 3일차! 반이나 왔네요~', characters: [{ id: 'seoyeon', position: 'left' }, { id: 'sohee', position: 'right' }] },
        ],
      },
    },

    4: {
      title: '긴급 요청',
      subtitle: '이거 오늘까지 가능?',

      opening: {
        dialogues: [
          { speaker: 'narrator', text: '4일차 아침. 사무실 분위기가 심상치 않다.', background: 'office_day' },
          { speaker: 'seoyeon', expression: 'sigh', text: '클라이언트에서 긴급 요청이 들어왔어요.', characters: [{ id: 'seoyeon', position: 'center' }] },
          { speaker: 'seoyeon', expression: 'serious', text: '날짜 관련 분석이 필요한데, 오늘 안에 끝내야 합니다.' },
        ],
      },

      morningIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: 'DATEDIFF는 두 날짜 사이의 차이를 구합니다.' },
          { speaker: 'seoyeon', expression: 'default', text: 'DATETRUNC는 날짜를 특정 단위로 절삭해요. 월별, 분기별 분석에 필수죠.' },
          { speaker: 'seoyeon', expression: 'serious', text: '시간이 없으니 빨리 해봅시다.' },
        ],
      },

      morningProblems: ['calc_04', 'calc_05'],

      lunchEvent: {
        dialogues: [
          { speaker: 'narrator', text: '점심시간이지만 일이 많다.', background: 'office_day' },
          { speaker: 'sohee', expression: 'worried', text: '야근할 것 같은데... 같이 남을래요?', characters: [{ id: 'sohee', position: 'center' }] },
        ],
        choices: [
          {
            text: '"네, 같이 야근해요."',
            gaugeChange: 10,
            response: [
              { speaker: 'sohee', expression: 'excited', text: '문자열 함수 중에 LEFT가 자주 쓰여요. 성씨 추출할 때 유용하죠.' },
              { speaker: 'sohee', expression: 'cheer', text: '같이 하니까 든든하네요!' },
            ],
          },
          {
            text: '"저는 정시 퇴근할게요."',
            gaugeChange: -10,
            response: [
              { speaker: 'seoyeon', expression: 'serious', text: '...지금 상황 파악이 되나요?', characters: [{ id: 'seoyeon', position: 'center' }] },
              { speaker: 'narrator', text: '서연 팀장의 표정이 굳었다.' },
            ],
          },
        ],
      },

      afternoonIntro: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '이번에는 문자열 함수입니다.' },
          { speaker: 'seoyeon', expression: 'default', text: 'LEFT, CONTAINS 같은 함수로 텍스트 데이터를 가공하세요.' },
        ],
      },

      afternoonProblems: ['calc_06', 'quiz_07'],

      endOfDay: {
        background: 'office_night',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'smile', text: '오늘 고생 많았어요.' },
          { speaker: 'seoyeon', expression: 'default', text: '내일이 마지막 날입니다. 종합 평가가 있어요.' },
          { speaker: 'seoyeon', expression: 'serious', text: '지금까지 배운 걸 다 보여주세요.' },
          { speaker: 'sohee', expression: 'cheer', text: '내일이면 끝이에요! 할 수 있어요!', characters: [{ id: 'seoyeon', position: 'left' }, { id: 'sohee', position: 'right' }] },
        ],
      },
    },

    5: {
      title: '최종 발표',
      subtitle: '보여줄 때가 됐어',

      opening: {
        dialogues: [
          { speaker: 'narrator', text: '마지막 날. 5일간의 수습이 끝나는 날이다.' },
          { speaker: 'narrator', text: '긴장되는 마음을 안고 회의실로 향한다.', background: 'presentation' },
          { speaker: 'seoyeon', expression: 'default', text: '오늘은 종합 평가입니다.', characters: [{ id: 'seoyeon', position: 'center' }] },
          { speaker: 'seoyeon', expression: 'default', text: '지금까지 배운 모든 것을 활용해서 문제를 풀어보세요.' },
          { speaker: 'seoyeon', expression: 'serious', text: '결과에 따라 수습 통과 여부가 결정됩니다.' },
        ],
      },

      morningIntro: {
        background: 'meeting_room',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '먼저 차트 만들기와 계산된 필드, 둘 다 나옵니다.' },
          { speaker: 'seoyeon', expression: 'serious', text: '실전처럼 해봅시다.' },
        ],
      },

      morningProblems: ['block_04', 'calc_07'],

      lunchEvent: {
        dialogues: [
          { speaker: 'narrator', text: '마지막 점심시간.', background: 'restaurant' },
          { speaker: 'sohee', expression: 'default', text: '오후에 마지막 문제만 남았어요!', characters: [{ id: 'sohee', position: 'center' }] },
          { speaker: 'sohee', expression: 'cheer', text: '뭐 먹으면서 잠깐 쉴까요?' },
        ],
        choices: [
          {
            text: '"마지막이니까 같이 먹어요!"',
            gaugeChange: 5,
            response: [
              { speaker: 'sohee', expression: 'amazed', text: '5일 동안 정말 빠르게 성장했어요!' },
              { speaker: 'sohee', expression: 'excited', text: '마지막 문제, 색상 구분 잊지 마세요!' },
            ],
          },
          {
            text: '"마지막 준비를 좀 더 할래요."',
            gaugeChange: 0,
            response: [
              { speaker: 'narrator', text: '마지막 문제에 대비해서 복습했다.', characters: [] },
            ],
          },
        ],
      },

      afternoonIntro: {
        background: 'presentation',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'default', text: '마지막 과제입니다.' },
          { speaker: 'seoyeon', expression: 'default', text: '종합적인 시각화를 만들어보세요.' },
          { speaker: 'seoyeon', expression: 'serious', text: '이걸로 수습 통과 여부를 판단하겠습니다.' },
        ],
      },

      afternoonProblems: ['block_05', 'quiz_08'],

      endOfDay: {
        background: 'office_day',
        characters: [{ id: 'seoyeon', position: 'center' }],
        dialogues: [
          { speaker: 'seoyeon', expression: 'smile', text: '5일간의 수습 기간이 끝났습니다.' },
          { speaker: 'seoyeon', expression: 'default', text: '{playerName}님의 최종 평가를 발표하겠습니다.' },
        ],
      },
    },
  },
}
