export const calcFieldProblems = [
  {
    id: 'calc_01',
    type: 'calc_field',
    subcategory: 'logic',
    difficulty: 'intermediate',
    day: 3,
    period: 'morning',
    instruction: '매출이 50만원 이상이면 "VIP", 미만이면 "일반"을 반환하는 계산된 필드를 만드세요.',
    fieldName: 'VIP구분',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Discount', korName: '할인율', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
      { name: 'Category', korName: '카테고리', type: 'string' },
    ],
    correctPatterns: [
      {
        pattern: /IF\s*\[Sales\]\s*>=?\s*500000\s*THEN\s*["']VIP["']\s*ELSE\s*["']일반["']\s*END/i,
        description: 'IF/THEN/ELSE 패턴',
      },
      {
        pattern: /IIF\s*\(\s*\[Sales\]\s*>=?\s*500000\s*,\s*["']VIP["']\s*,\s*["']일반["']\s*\)/i,
        description: 'IIF 함수 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Sales\]\s*>=?\s*500000/i, missing: /THEN/i, message: '조건은 맞았어요! THEN 절을 추가해보세요.' },
      { pattern: /IF.*THEN.*END/i, missing: /ELSE/i, message: 'IF/THEN/END 구조 좋아요! ELSE 절도 추가해보세요.' },
    ],
    sampleAnswer: 'IF [Sales] >= 500000\nTHEN "VIP"\nELSE "일반"\nEND',
    explanation: 'IF 문으로 매출액이 50만원 이상인 경우 "VIP", 미만인 경우 "일반"을 반환합니다.',
    hint: 'IF [조건] THEN [참일 때 값] ELSE [거짓일 때 값] END',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_02',
    type: 'calc_field',
    subcategory: 'logic',
    difficulty: 'intermediate',
    day: 3,
    period: 'morning',
    instruction: '카테고리별 목표 이익률을 반환하는 CASE 문을 만드세요.\n가구: 0.15, 기술: 0.20, 사무용품: 0.10',
    fieldName: '목표이익률',
    availableFields: [
      { name: 'Category', korName: '카테고리', type: 'string' },
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /CASE\s*\[Category\]\s*WHEN\s*["']가구["']\s*THEN\s*0\.15\s*WHEN\s*["']기술["']\s*THEN\s*0\.2[0]?\s*WHEN\s*["']사무용품["']\s*THEN\s*0\.1[0]?\s*(ELSE\s*0\s*)?END/i,
        description: 'CASE/WHEN 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /CASE\s*\[Category\]/i, missing: /WHEN/i, message: 'CASE 시작은 좋아요! WHEN 절을 추가하세요.' },
      { pattern: /WHEN.*가구/i, missing: /기술/i, message: '가구 조건은 맞았어요! 나머지 카테고리도 추가해보세요.' },
    ],
    sampleAnswer: 'CASE [Category]\nWHEN "가구" THEN 0.15\nWHEN "기술" THEN 0.20\nWHEN "사무용품" THEN 0.10\nELSE 0\nEND',
    explanation: 'CASE 문은 하나의 필드에 대해 여러 조건을 깔끔하게 나열할 수 있습니다. ELSE로 기본값을 지정하면 안전합니다.',
    hint: 'CASE [필드] WHEN "값" THEN 결과 ... END',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_03',
    type: 'calc_field',
    subcategory: 'number',
    difficulty: 'intermediate',
    day: 3,
    period: 'afternoon',
    instruction: '매출액을 천원 단위로 반올림하는 계산된 필드를 만드세요.',
    fieldName: '반올림매출',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /ROUND\s*\(\s*\[Sales\]\s*,\s*-3\s*\)/i,
        description: 'ROUND 함수 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /ROUND\s*\(\s*\[Sales\]/i, missing: /-3/i, message: 'ROUND에 Sales 넣은 건 맞아요! 두 번째 인자를 확인하세요. 천원 단위는 -3입니다.' },
    ],
    sampleAnswer: 'ROUND([Sales], -3)',
    explanation: 'ROUND의 두 번째 인자가 음수이면 정수 자릿수로 반올림합니다. -3이면 천 단위, -2이면 백 단위입니다.',
    hint: 'ROUND(숫자, 자릿수) - 음수 자릿수는 정수 자리에서 반올림합니다.',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_04',
    type: 'calc_field',
    subcategory: 'date',
    difficulty: 'intermediate',
    day: 4,
    period: 'morning',
    instruction: '주문일(Order Date)부터 배송일(Ship Date)까지 소요일을 구하는 계산된 필드를 만드세요.',
    fieldName: '배송소요일',
    availableFields: [
      { name: 'Order Date', korName: '주문일', type: 'date' },
      { name: 'Ship Date', korName: '배송일', type: 'date' },
      { name: 'Sales', korName: '매출액', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /DATEDIFF\s*\(\s*["']day["']\s*,\s*\[Order Date\]\s*,\s*\[Ship Date\]\s*\)/i,
        description: 'DATEDIFF 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /DATEDIFF/i, missing: /\[Order Date\]/i, message: 'DATEDIFF 함수를 잘 선택했어요! 시작 날짜에 [Order Date]를 넣어보세요.' },
      { pattern: /\[Order Date\].*\[Ship Date\]/i, missing: /day/i, message: '필드는 맞았어요! 단위를 "day"로 지정해보세요.' },
    ],
    sampleAnswer: 'DATEDIFF("day", [Order Date], [Ship Date])',
    explanation: 'DATEDIFF("day", 시작일, 종료일)는 두 날짜 사이의 일수 차이를 반환합니다.',
    hint: 'DATEDIFF("단위", 시작날짜, 끝날짜)',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_05',
    type: 'calc_field',
    subcategory: 'parameter',
    difficulty: 'intermediate',
    day: 4,
    period: 'morning',
    instruction: '매개변수 [목표매출액]을 기준으로 매출 달성 여부를 반환하는 계산된 필드를 만드세요. ([Sales] >= [목표매출액] 이면 "달성", 아니면 "미달")',
    fieldName: '목표달성여부_매개변수',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: '목표매출액', korName: '목표매출액(매개변수)', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /IF\s*\[Sales\]\s*>=?\s*\[목표매출액\]\s*THEN\s*["']달성["']\s*ELSE\s*["']미달["']\s*END/i,
        description: 'IF + 매개변수 참조 패턴',
      },
      {
        pattern: /IIF\s*\(\s*\[Sales\]\s*>=?\s*\[목표매출액\]\s*,\s*["']달성["']\s*,\s*["']미달["']\s*\)/i,
        description: 'IIF + 매개변수 참조 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[목표매출액\]/i, missing: /\[Sales\]/i, message: '매개변수 참조는 좋아요! [Sales]와 비교 조건을 추가해보세요.' },
      { pattern: /\[Sales\]\s*>=?\s*\[목표매출액\]/i, missing: /THEN/i, message: '조건은 맞았어요! THEN/ELSE 반환값을 완성해보세요.' },
    ],
    sampleAnswer: 'IF [Sales] >= [목표매출액]\nTHEN "달성"\nELSE "미달"\nEND',
    explanation: '매개변수는 사용자가 값을 바꿀 수 있는 변수입니다. [목표매출액]과 [Sales]를 비교하면 목표 달성 여부를 동적으로 판별할 수 있습니다.',
    hint: '핵심 구조: IF [Sales] >= [목표매출액] THEN "달성" ELSE "미달" END',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_06',
    type: 'calc_field',
    subcategory: 'parameter',
    difficulty: 'intermediate',
    day: 4,
    period: 'afternoon',
    instruction: '매개변수 [지표 선택] 값에 따라 표시할 측정값을 바꾸는 계산식을 만드세요.\n"Sales" → SUM([Sales]), "Profit" → SUM([Profit]), "Quantity" → SUM([Quantity])',
    fieldName: '선택지표값',
    availableFields: [
      { name: '지표 선택', korName: '지표 선택(매개변수)', type: 'string' },
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /CASE\s*\[지표 선택\]\s*WHEN\s*["']Sales["']\s*THEN\s*SUM\s*\(\s*\[Sales\]\s*\)\s*WHEN\s*["']Profit["']\s*THEN\s*SUM\s*\(\s*\[Profit\]\s*\)\s*WHEN\s*["']Quantity["']\s*THEN\s*SUM\s*\(\s*\[Quantity\]\s*\)\s*(ELSE\s*SUM\s*\(\s*\[Sales\]\s*\)\s*)?END/i,
        description: 'CASE + 매개변수 패턴',
      },
      {
        pattern: /IF\s*\[지표 선택\]\s*=\s*["']Sales["']\s*THEN\s*SUM\s*\(\s*\[Sales\]\s*\)\s*ELSEIF\s*\[지표 선택\]\s*=\s*["']Profit["']\s*THEN\s*SUM\s*\(\s*\[Profit\]\s*\)\s*ELSEIF\s*\[지표 선택\]\s*=\s*["']Quantity["']\s*THEN\s*SUM\s*\(\s*\[Quantity\]\s*\)\s*(ELSE\s*SUM\s*\(\s*\[Sales\]\s*\)\s*)?END/i,
        description: 'IF/ELSEIF + 매개변수 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[지표 선택\]/i, missing: /Sales/i, message: '매개변수 참조는 좋아요! "Sales"/"Profit"/"Quantity" 분기를 추가해보세요.' },
      { pattern: /CASE|IF/i, missing: /SUM\s*\(\s*\[Sales\]\s*\)/i, message: '분기문은 시작했어요! 각 분기에서 SUM 집계를 반환해야 합니다.' },
    ],
    sampleAnswer: 'CASE [지표 선택]\nWHEN "Sales" THEN SUM([Sales])\nWHEN "Profit" THEN SUM([Profit])\nWHEN "Quantity" THEN SUM([Quantity])\nELSE SUM([Sales])\nEND',
    explanation: '매개변수 값에 따라 다른 측정값을 반환하면 하나의 차트에서 지표를 동적으로 전환할 수 있습니다. 실무 대시보드에서 자주 쓰는 패턴입니다.',
    hint: 'CASE [지표 선택] WHEN "Sales" THEN SUM([Sales]) ... END 형태로 작성해보세요.',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_07',
    type: 'calc_field',
    subcategory: 'comprehensive',
    difficulty: 'advanced',
    day: 5,
    period: 'morning',
    instruction: '할인율이 10% 이상인 주문의 매출만 합산한 후 백원 단위로 반올림하는 계산된 필드를 만드세요.',
    fieldName: '할인매출',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Discount', korName: '할인율', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /ROUND\s*\(\s*IF\s*\[Discount\]\s*>=?\s*0\.1\s*THEN\s*\[Sales\]\s*ELSE\s*0\s*END\s*,\s*-2\s*\)/i,
        description: 'ROUND + IF 패턴',
      },
      {
        pattern: /IF\s*\[Discount\]\s*>=?\s*0\.1\s*THEN\s*ROUND\s*\(\s*\[Sales\]\s*,\s*-2\s*\)\s*ELSE\s*0\s*END/i,
        description: 'IF + 내부 ROUND 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Discount\]\s*>=?\s*0\.1/i, missing: /ROUND/i, message: '할인율 조건은 맞았어요! ROUND로 반올림도 추가해보세요.' },
      { pattern: /ROUND/i, missing: /\[Discount\]/i, message: 'ROUND를 잘 넣었어요! 할인율 조건도 추가해보세요.' },
    ],
    sampleAnswer: 'ROUND(\n  IF [Discount] >= 0.1\n  THEN [Sales]\n  ELSE 0\n  END\n, -2)',
    explanation: 'IF 문으로 할인율 조건을 검사하고, ROUND로 결과를 반올림합니다. 함수를 중첩하여 복합적인 계산을 할 수 있습니다.',
    hint: 'IF 문 안에 ROUND를 넣거나, ROUND 안에 IF를 넣어보세요.',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 8: 테이블 계산 ===
  {
    id: 'calc_08',
    type: 'calc_field',
    subcategory: 'table_calc',
    difficulty: 'intermediate',
    instruction: '월별 매출의 누적합을 계산하는 테이블 계산 필드를 만드세요.',
    fieldName: '누적매출',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /RUNNING_SUM\s*\(\s*SUM\s*\(\s*\[Sales\]\s*\)\s*\)/i,
        description: 'RUNNING_SUM + SUM 패턴',
      },
      {
        pattern: /RUNNING_SUM\s*\(\s*\[Sales\]\s*\)/i,
        description: 'RUNNING_SUM 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Sales\]/i, missing: /RUNNING_SUM/i, message: '[Sales] 참조는 좋아요! 누적 계산 함수 RUNNING_SUM을 적용해보세요.' },
      { pattern: /RUNNING_SUM/i, missing: /SUM/i, message: 'RUNNING_SUM은 맞아요! 집계식 SUM([Sales]) 형태를 함께 써보세요.' },
    ],
    sampleAnswer: 'RUNNING_SUM(SUM([Sales]))',
    explanation: 'RUNNING_SUM은 현재 뷰에서 누적 합계를 계산하는 대표적인 테이블 계산입니다. 계산 방향(Addressing) 설정에 따라 결과가 달라집니다.',
    hint: '누적합 = RUNNING_SUM(집계식). 보통 RUNNING_SUM(SUM([Sales]))를 사용합니다.',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 9: LOD 표현식 ===
  {
    id: 'calc_09',
    type: 'calc_field',
    subcategory: 'lod',
    difficulty: 'advanced',
    instruction: 'LOD 표현식으로 카테고리별 평균 할인율을 구하는 계산된 필드를 만드세요.',
    fieldName: '카테고리평균할인',
    availableFields: [
      { name: 'Category', korName: '카테고리', type: 'string' },
      { name: 'Discount', korName: '할인율', type: 'number' },
      { name: 'Sales', korName: '매출액', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /\{\s*FIXED\s*\[Category\]\s*:\s*AVG\s*\(\s*\[Discount\]\s*\)\s*\}/i,
        description: 'FIXED LOD 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /FIXED/i, missing: /\[Category\]/i, message: 'FIXED 키워드 좋아요! 차원으로 [Category]를 지정해보세요.' },
      { pattern: /\[Category\]/i, missing: /FIXED/i, message: '카테고리 필드가 있네요! {FIXED [Category] : ...} 형태로 만들어보세요.' },
      { pattern: /FIXED.*Category/i, missing: /AVG/i, message: 'FIXED와 Category 좋아요! 집계 함수 AVG를 사용하세요.' },
    ],
    sampleAnswer: '{FIXED [Category] : AVG([Discount])}',
    explanation: '{FIXED [차원] : 집계함수([측정값])} 형태로 뷰 레벨과 관계없이 특정 차원 기준으로 집계합니다. 여기서는 카테고리별 평균 할인율을 구합니다.',
    hint: '{FIXED [차원] : 집계함수([측정값])}',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_10',
    type: 'calc_field',
    subcategory: 'lod',
    difficulty: 'advanced',
    instruction: 'LOD 표현식으로 지역별 총 매출을 구하는 계산된 필드를 만드세요.',
    fieldName: '지역총매출',
    availableFields: [
      { name: 'Region', korName: '지역', type: 'string' },
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Category', korName: '카테고리', type: 'string' },
    ],
    correctPatterns: [
      {
        pattern: /\{\s*FIXED\s*\[Region\]\s*:\s*SUM\s*\(\s*\[Sales\]\s*\)\s*\}/i,
        description: 'FIXED LOD 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /FIXED/i, missing: /\[Region\]/i, message: 'FIXED 좋아요! [Region]을 차원으로 넣어보세요.' },
      { pattern: /FIXED.*Region/i, missing: /SUM/i, message: 'FIXED [Region]까지 됐어요! SUM([Sales])를 추가하세요.' },
    ],
    sampleAnswer: '{FIXED [Region] : SUM([Sales])}',
    explanation: '{FIXED [Region] : SUM([Sales])}는 뷰에 어떤 차원이 있든 항상 지역별 총 매출을 반환합니다. 전체 대비 비율 계산 등에 활용됩니다.',
    hint: '{FIXED [지역] : SUM([매출])}',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 10: KPI 대시보드 ===
  {
    id: 'calc_11',
    type: 'calc_field',
    subcategory: 'kpi',
    difficulty: 'intermediate',
    instruction: '매출이 30만원 이상이면 "목표달성", 미만이면 "미달"을 반환하는 KPI 판별 필드를 만드세요.',
    fieldName: '목표달성여부',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
      { name: 'Region', korName: '지역', type: 'string' },
    ],
    correctPatterns: [
      {
        pattern: /IF\s*\[Sales\]\s*>=?\s*300000\s*THEN\s*["']목표달성["']\s*ELSE\s*["']미달["']\s*END/i,
        description: 'IF/THEN/ELSE 패턴',
      },
      {
        pattern: /IIF\s*\(\s*\[Sales\]\s*>=?\s*300000\s*,\s*["']목표달성["']\s*,\s*["']미달["']\s*\)/i,
        description: 'IIF 함수 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Sales\]\s*>=?\s*300000/i, missing: /THEN/i, message: '조건은 맞았어요! THEN 절을 추가하세요.' },
      { pattern: /IF.*THEN.*END/i, missing: /300000/i, message: 'IF/THEN/END 구조 좋아요! 30만원 조건을 확인하세요.' },
    ],
    sampleAnswer: 'IF [Sales] >= 300000\nTHEN "목표달성"\nELSE "미달"\nEND',
    explanation: 'KPI 대시보드에서는 목표 대비 달성 여부를 판별하는 계산 필드가 핵심입니다. 이 필드를 색상에 넣으면 달성/미달이 시각적으로 구분됩니다.',
    hint: 'IF [Sales] >= 300000 THEN "목표달성" ELSE "미달" END',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 12: 파레토 분석 ===
  {
    id: 'calc_12',
    type: 'calc_field',
    subcategory: 'pareto',
    difficulty: 'intermediate',
    instruction: '매출 대비 이익 비율을 백분율로 계산하는 필드를 만드세요. (이익/매출 * 100)',
    fieldName: '이익비율',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
      { name: 'Category', korName: '카테고리', type: 'string' },
    ],
    correctPatterns: [
      {
        pattern: /\[Profit\]\s*\/\s*\[Sales\]\s*\*\s*100/i,
        description: '이익/매출*100 패턴',
      },
      {
        pattern: /\(\s*\[Profit\]\s*\/\s*\[Sales\]\s*\)\s*\*\s*100/i,
        description: '(이익/매출)*100 괄호 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Profit\]\s*\/\s*\[Sales\]/i, missing: /100/i, message: '이익/매출은 맞아요! *100을 해서 백분율로 만들어보세요.' },
    ],
    sampleAnswer: '[Profit] / [Sales] * 100',
    explanation: '이익 비율 = (이익 / 매출) * 100. 파레토 분석에서 각 항목의 수익성을 비교하는 데 사용됩니다.',
    hint: '[Profit] / [Sales] * 100',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 13: RFM 고객 세분화 ===
  {
    id: 'calc_13',
    type: 'calc_field',
    subcategory: 'rfm',
    difficulty: 'intermediate',
    instruction: '매출 기준으로 고객 등급을 분류하세요. (IF/ELSEIF 또는 CASE TRUE 사용)\n50만 이상: "Gold", 20만 이상: "Silver", 나머지: "Bronze"',
    fieldName: '고객등급',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
      { name: 'Category', korName: '카테고리', type: 'string' },
    ],
    correctPatterns: [
      {
        pattern: /CASE\s*TRUE\s*WHEN\s*\[Sales\]\s*>=?\s*500000\s*THEN\s*["']Gold["']\s*WHEN\s*\[Sales\]\s*>=?\s*200000\s*THEN\s*["']Silver["']\s*ELSE\s*["']Bronze["']\s*END/i,
        description: 'CASE TRUE 패턴',
      },
      {
        pattern: /IF\s*\[Sales\]\s*>=?\s*500000\s*THEN\s*["']Gold["']\s*ELSEIF\s*\[Sales\]\s*>=?\s*200000\s*THEN\s*["']Silver["']\s*ELSE\s*["']Bronze["']\s*END/i,
        description: 'IF/ELSEIF 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Sales\]\s*>=?\s*500000/i, missing: /ELSEIF|WHEN/i, message: '50만 조건은 맞아요! 다음 구간(20만) 조건을 이어서 추가하세요.' },
      { pattern: /Gold/i, missing: /Silver/i, message: 'Gold 등급 좋아요! Silver, Bronze 등급도 추가하세요.' },
    ],
    sampleAnswer: 'CASE TRUE\nWHEN [Sales] >= 500000 THEN "Gold"\nWHEN [Sales] >= 200000 THEN "Silver"\nELSE "Bronze"\nEND',
    explanation: '구간 분류는 IF/ELSEIF와 CASE TRUE 모두 가능합니다. 핵심은 조건 우선순위를 위에서 아래로 올바르게 배치하는 것입니다.',
    hint: 'CASE TRUE WHEN [Sales] >= 500000 THEN "Gold" ... END',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  {
    id: 'calc_14',
    type: 'calc_field',
    subcategory: 'rfm',
    difficulty: 'advanced',
    instruction: '할인율 구간에 따라 할인 등급을 분류하세요.\n20% 이상: "과다할인", 10% 이상: "적정", 미만: "최소할인"',
    fieldName: '할인등급',
    availableFields: [
      { name: 'Discount', korName: '할인율', type: 'number' },
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /IF\s*\[Discount\]\s*>=?\s*0\.2\s*THEN\s*["']과다할인["']\s*ELSEIF\s*\[Discount\]\s*>=?\s*0\.1\s*THEN\s*["']적정["']\s*ELSE\s*["']최소할인["']\s*END/i,
        description: 'IF/ELSEIF 할인 분류',
      },
    ],
    partialFeedback: [
      { pattern: /\[Discount\]\s*>=?\s*0\.2/i, missing: /ELSEIF/i, message: '20% 조건 좋아요! ELSEIF로 10% 조건도 추가하세요.' },
      { pattern: /과다할인/i, missing: /적정/i, message: '과다할인 분류 좋아요! 적정, 최소할인도 추가하세요.' },
    ],
    sampleAnswer: 'IF [Discount] >= 0.2\nTHEN "과다할인"\nELSEIF [Discount] >= 0.1\nTHEN "적정"\nELSE "최소할인"\nEND',
    explanation: '할인 구간을 분류하면 과도한 할인이 이익을 얼마나 갈아먹는지 분석할 수 있습니다. RFM과 함께 고객 수익성 분석에 활용됩니다.',
    hint: 'IF [Discount] >= 0.2 THEN "과다할인" ELSEIF ...',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 14: 코호트 분석 ===
  {
    id: 'calc_15',
    type: 'calc_field',
    subcategory: 'cohort',
    difficulty: 'intermediate',
    instruction: '코호트 분석을 위해 고객별 최초 주문일을 구하는 LOD 계산식을 작성하세요.',
    fieldName: '고객최초주문일',
    availableFields: [
      { name: 'Customer Name', korName: '고객이름', type: 'string' },
      { name: 'Order Date', korName: '주문일', type: 'date' },
      { name: 'Sales', korName: '매출액', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /\{\s*FIXED\s*\[Customer Name\]\s*:\s*MIN\s*\(\s*\[Order Date\]\s*\)\s*\}/i,
        description: '고객별 최초 주문일 FIXED LOD 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /FIXED/i, missing: /\[Customer Name\]/i, message: 'FIXED는 좋아요! 고객 단위로 고정하려면 [Customer Name]을 넣어보세요.' },
      { pattern: /\[Customer Name\]/i, missing: /MIN/i, message: '고객 차원 지정은 맞아요! 최초 주문일을 위해 MIN([Order Date])를 사용하세요.' },
    ],
    sampleAnswer: '{FIXED [Customer Name] : MIN([Order Date])}',
    explanation: '코호트 분석의 첫 단계는 고객별 최초 이벤트 시점을 고정하는 것입니다. FIXED LOD로 고객별 최초 주문일을 만들면 이후 경과 주차/월차 계산이 안정적으로 가능합니다.',
    hint: '{FIXED [Customer Name] : MIN([Order Date])}',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 15: 시계열 분석 ===
  {
    id: 'calc_16',
    type: 'calc_field',
    subcategory: 'timeseries',
    difficulty: 'intermediate',
    instruction: '주문일을 분기(quarter) 단위로 절삭하는 계산된 필드를 만드세요.',
    fieldName: '주문분기',
    availableFields: [
      { name: 'Order Date', korName: '주문일', type: 'date' },
      { name: 'Ship Date', korName: '배송일', type: 'date' },
      { name: 'Sales', korName: '매출액', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /DATETRUNC\s*\(\s*["']quarter["']\s*,\s*\[Order Date\]\s*\)/i,
        description: 'DATETRUNC quarter 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /DATETRUNC/i, missing: /quarter/i, message: 'DATETRUNC 좋아요! 단위를 "quarter"로 지정하세요.' },
      { pattern: /quarter/i, missing: /DATETRUNC/i, message: '"quarter" 단위를 알고 있네요! DATETRUNC 함수를 사용하세요.' },
    ],
    sampleAnswer: 'DATETRUNC("quarter", [Order Date])',
    explanation: 'DATETRUNC("quarter", 날짜)는 날짜를 해당 분기의 첫날로 절삭합니다. 분기별 시계열 분석에 필수적인 함수입니다.',
    hint: 'DATETRUNC("quarter", [Order Date])',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 19: 스토리텔링 ===
  {
    id: 'calc_17',
    type: 'calc_field',
    subcategory: 'storytelling',
    difficulty: 'intermediate',
    instruction: '스토리 포인트 제목에 넣을 문구를 만드세요.\n형식: [Category] + " | 이익률 " + STR(ROUND(([Profit]/[Sales]) * 100, 1)) + "%"',
    fieldName: '스토리포인트제목',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Profit', korName: '이익', type: 'number' },
      { name: 'Category', korName: '카테고리', type: 'string' },
    ],
    correctPatterns: [
      {
        pattern: /\[Category\]\s*\+\s*["']\s*\|\s*이익률\s*["']\s*\+\s*STR\s*\(\s*ROUND\s*\(\s*\(\s*\[Profit\]\s*\/\s*\[Sales\]\s*\)\s*\*\s*100\s*,\s*1\s*\)\s*\)\s*\+\s*["']%["']/i,
        description: '카테고리 + 이익률 문구 패턴',
      },
      {
        pattern: /\[Category\]\s*\+\s*["']\s*\|\s*이익률\s*["']\s*\+\s*STR\s*\(\s*ROUND\s*\(\s*\[Profit\]\s*\/\s*\[Sales\]\s*\*\s*100\s*,\s*1\s*\)\s*\)\s*\+\s*["']%["']/i,
        description: '카테고리 + 이익률 문구 패턴(괄호 생략)',
      },
    ],
    partialFeedback: [
      { pattern: /\[Category\]/i, missing: /STR/i, message: '카테고리 텍스트는 좋아요! 이익률 숫자를 문자열로 바꾸기 위해 STR를 추가하세요.' },
      { pattern: /\[Profit\]\s*\/\s*\[Sales\]/i, missing: /ROUND/i, message: '이익률 계산은 맞아요! ROUND(..., 1)로 자릿수를 정리해보세요.' },
    ],
    sampleAnswer: '[Category] + " | 이익률 " + STR(ROUND(([Profit]/[Sales]) * 100, 1)) + "%"',
    explanation: '스토리텔링에서는 계산 결과를 의사결정자가 바로 읽을 수 있는 문구로 만드는 작업이 중요합니다. 수치 계산과 텍스트 결합을 함께 연습하는 문제입니다.',
    hint: '문자열 결합(+) + ROUND + STR 조합으로 제목 문구를 만드세요.',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
  // === Chapter 20: 종합 ===
  {
    id: 'calc_18',
    type: 'calc_field',
    subcategory: 'comprehensive',
    difficulty: 'advanced',
    instruction: '수량이 20개 이상이고 할인율이 10% 미만인 주문만 매출을 합산하는 계산된 필드를 만드세요. 조건 미충족 시 0을 반환합니다.',
    fieldName: '우수주문매출',
    availableFields: [
      { name: 'Sales', korName: '매출액', type: 'number' },
      { name: 'Quantity', korName: '수량', type: 'number' },
      { name: 'Discount', korName: '할인율', type: 'number' },
    ],
    correctPatterns: [
      {
        pattern: /IF\s*\[Quantity\]\s*>=?\s*20\s*(AND|and)\s*\[Discount\]\s*<\s*0\.1\s*THEN\s*\[Sales\]\s*ELSE\s*0\s*END/i,
        description: 'IF AND 패턴',
      },
      {
        pattern: /IF\s*\[Discount\]\s*<\s*0\.1\s*(AND|and)\s*\[Quantity\]\s*>=?\s*20\s*THEN\s*\[Sales\]\s*ELSE\s*0\s*END/i,
        description: 'IF AND 역순 패턴',
      },
    ],
    partialFeedback: [
      { pattern: /\[Quantity\]\s*>=?\s*20/i, missing: /\[Discount\]/i, message: '수량 조건 좋아요! 할인율 조건도 AND로 추가하세요.' },
      { pattern: /\[Discount\]\s*<\s*0\.1/i, missing: /\[Quantity\]/i, message: '할인율 조건 좋아요! 수량 조건도 AND로 추가하세요.' },
    ],
    sampleAnswer: 'IF [Quantity] >= 20 AND [Discount] < 0.1\nTHEN [Sales]\nELSE 0\nEND',
    explanation: 'AND 연산자로 여러 조건을 결합합니다. 수량이 많고 할인이 적은 "우수 주문"만 집계하면 수익성 높은 거래 패턴을 분석할 수 있습니다.',
    hint: 'IF [Quantity] >= 20 AND [Discount] < 0.1 THEN [Sales] ELSE 0 END',
    gaugeChange: { correct: 5, incorrect: -10 },
  },
]
