export const chapter4 = {
  id: 4,
  title: '데이터 연결과 정리',
  subtitle: '실무 데이터 준비의 기술',
  part: 1,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'narrator', text: '4일차. 기초 3챕터를 모두 통과했다. 이제 조금 다른 영역으로.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '오늘은 실무에서 가장 많이 마주치는 상황을 다뤄요. 엑셀이나 CSV 파일 연결이요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '현장에서 받는 데이터는 대부분 지저분해요. 숫자 형식이 뒤죽박죽이거나, 필드 이름이 이상하거나, 합계가 안 맞거나.',
      },
      {
        speaker: 'seoyeon',
        expression: 'frown',
        text: '한번은 클라이언트 데이터를 받았는데 날짜가 텍스트로 저장돼 있었어요. 이런 걸 처리하는 게 실력이에요.',
      },
      { speaker: 'seoyeon', expression: 'default', text: '오늘은 그 기초를 배울 거예요.' },
    ],
  },

  partnerGreeting: {
    male: {
      background: 'office_day',
      characters: [{ id: 'sohee', position: 'right' }],
      dialogues: [
        { speaker: 'sohee', expression: 'worried', text: '데이터 연결이랑 정리... 이거 좀 어렵지 않아?' },
        { speaker: 'sohee', expression: 'default', text: '나 어제 집에서 연습하다가 필드 타입이 자꾸 이상하게 나와서 한참 헤맸어.' },
        { speaker: 'sohee', expression: 'cheer', text: '그래도 오늘은 팀장님이랑 배울 수 있으니까! 같이 잘 해보자~' },
      ],
    },
    female: {
      background: 'office_day',
      characters: [{ id: 'junhyung', position: 'right' }],
      dialogues: [
        { speaker: 'junhyung', expression: 'serious', text: '데이터 정리... 솔직히 이 부분이 제일 귀찮아.' },
        { speaker: 'junhyung', expression: 'default', text: '근데 안 할 수는 없지. 더러운 데이터 그냥 쓰면 분석 결과가 다 망가지거든.' },
        { speaker: 'junhyung', expression: 'smirk', text: '이거 잘하면 팀에서 진짜 쓸모 있어지는 거야. 잘 봐둬.' },
      ],
    },
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'default', text: 'Tableau는 다양한 데이터 소스에 연결할 수 있어요. 엑셀, CSV, 데이터베이스, 웹 API...' },
      {
        speaker: 'seoyeon',
        expression: 'serious',
        text: '연결 후엔 필드 타입을 꼭 확인해야 해요. 숫자가 텍스트로 인식될 수도 있거든요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '데이터 인터프리터 기능도 알아두세요. 복잡한 엑셀 헤더를 자동으로 정리해줘요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '데이터 정리가 탄탄하면 이후 분석이 훨씬 수월해져요. 기초 공사가 중요한 거예요.',
      },
    ],
  },

  problems: ['quiz_07', 'block_05'],

  bossChallenge: 'quiz_08',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'serious', text: 'Part 1 마지막 문제예요. 지금까지 배운 전체 내용이 들어가요.' },
      { speaker: 'seoyeon', expression: 'default', text: '어렵게 느껴지면 기본으로 돌아가요. 차원인지 측정값인지, 연속인지 불연속인지부터.' },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'cheer', text: '마지막이야, 마지막! 할 수 있어!! 나도 응원해!!!' },
      female: { speaker: 'junhyung', expression: 'serious', text: 'Part 1 마지막이네. 잘 마무리해봐. 기대할게.' },
    },
  },

  clear: {
    background: 'office_day',
    characters: [{ id: 'seoyeon', position: 'right' }],
    dialogues: [
      { speaker: 'seoyeon', expression: 'impressed', text: 'Part 1 완료예요. 4챕터 전부.' },
      {
        speaker: 'seoyeon',
        expression: 'default',
        text: '인터페이스, 차원/측정값, 마크 카드, 데이터 연결. 이 네 가지는 Tableau의 뼈대예요.',
      },
      {
        speaker: 'seoyeon',
        expression: 'smile',
        text: '다음 파트부터는 계산 기능으로 넘어가요. 조금 더 재밌어질 거예요.',
      },
    ],
    partnerLine: {
      male: { speaker: 'sohee', expression: 'excited', text: 'Part 1 끝이다!!! 같이 완주했다~ 진짜 잘했어!!!' },
      female: { speaker: 'junhyung', expression: 'default', text: '...Part 1 다 했네. 생각보다 빨리 왔다. 잘 했어.' },
    },
  },

  event: {
    type: 'dinner_party',
    background: 'bar',
    intro: {
      dialogues: [
        { speaker: 'narrator', text: 'Part 1 완주 기념, 팀 회식이 잡혔다.' },
        { speaker: 'narrator', text: '바에 도착해보니 이미 자리가 채워져 있다. 빈 자리를 둘러본다.' },
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
            { speaker: 'sohee', expression: 'excited', text: '어, 여기 와!! 자리 하나 비워뒀어~' },
            { speaker: 'sohee', expression: 'default', text: '오늘 회식 분위기 진짜 좋다. 우리 팀 좋은 것 같지 않아?' },
            { speaker: 'sohee', expression: 'shy', text: '...옆에 앉아줘서 고마워. 낯선 곳에서 아는 사람 있으면 마음이 편하잖아.' },
          ],
          female: [
            { speaker: 'junhyung', expression: 'lookaway', text: '...뭐야, 여기 앉는 거야?' },
            { speaker: 'junhyung', expression: 'default', text: '...맘대로 해. 뭐 마실래? 내가 주문할 테니까.' },
            { speaker: 'junhyung', expression: 'flustered', text: '아, 그냥 물어본 거야. 별 뜻 없어.' },
          ],
        },
      },
      {
        text: '박서연 팀장 옆에 앉기',
        affectionChange: -2,
        xpChange: 10,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'seoyeon', expression: 'default', text: '여기 앉을 거예요? 좋아요.' },
            { speaker: 'seoyeon', expression: 'serious', text: '다음 Part는 계산 필드예요. 수식을 직접 쓸 줄 알아야 진짜 Tableau를 한다고 할 수 있죠.' },
            { speaker: 'seoyeon', expression: 'smile', text: '오늘 수고했어요. 잘 따라오고 있어요.' },
          ],
          female: [
            { speaker: 'seoyeon', expression: 'default', text: '팀장 옆에 앉는 건 용감하네요.' },
            { speaker: 'seoyeon', expression: 'default', text: '다음 파트 시작 전에 한 가지만. 계산 필드는 처음엔 생소하지만 익숙해지면 강력한 도구예요.' },
            { speaker: 'seoyeon', expression: 'smile', text: '기대할게요.' },
          ],
        },
      },
      {
        text: '선배 옆에 앉아 실무 이야기 듣기',
        affectionChange: 0,
        xpChange: 8,
        hintChange: 0,
        response: {
          male: [
            { speaker: 'narrator', text: '선배 분석가 옆에 앉아 실무 이야기를 들었다.' },
            { speaker: 'narrator', text: '"계산 필드는 처음엔 어렵지만 익혀두면 반자동으로 분석이 돌아가." 선배의 말이 머릿속에 남았다.' },
          ],
          female: [
            { speaker: 'narrator', text: '선배 옆에 앉아 다양한 프로젝트 이야기를 들었다.' },
            { speaker: 'narrator', text: '"데이터가 지저분할수록 분석가의 실력이 드러난다." 오늘 배운 내용이 새삼 중요하게 느껴졌다.' },
          ],
        },
      },
    ],
  },
}
