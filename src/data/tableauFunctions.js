export const tableauFunctions = {
  date: {
    label: '날짜 함수',
    icon: '📅',
    functions: [
      { name: 'DATETRUNC', syntax: 'DATETRUNC("unit", date)', description: '날짜를 지정 단위로 절삭' },
      { name: 'DATEDIFF', syntax: 'DATEDIFF("unit", start_date, end_date)', description: '두 날짜 사이의 차이' },
      { name: 'DATEPART', syntax: 'DATEPART("unit", date)', description: '날짜의 특정 부분 추출' },
      { name: 'DATEADD', syntax: 'DATEADD("unit", number, date)', description: '날짜에 값 추가' },
      { name: 'TODAY', syntax: 'TODAY()', description: '오늘 날짜' },
      { name: 'YEAR', syntax: 'YEAR(date)', description: '연도 추출' },
      { name: 'MONTH', syntax: 'MONTH(date)', description: '월 추출' },
      { name: 'DAY', syntax: 'DAY(date)', description: '일 추출' },
    ],
  },
  number: {
    label: '숫자 함수',
    icon: '🔢',
    functions: [
      { name: 'ROUND', syntax: 'ROUND(number, decimals)', description: '반올림' },
      { name: 'ABS', syntax: 'ABS(number)', description: '절대값' },
      { name: 'CEILING', syntax: 'CEILING(number)', description: '올림' },
      { name: 'FLOOR', syntax: 'FLOOR(number)', description: '내림' },
      { name: 'POWER', syntax: 'POWER(base, exponent)', description: '거듭제곱' },
      { name: 'SQRT', syntax: 'SQRT(number)', description: '제곱근' },
    ],
  },
  string: {
    label: '문자열 함수',
    icon: '📝',
    functions: [
      { name: 'CONTAINS', syntax: 'CONTAINS(string, substring)', description: '포함 여부 확인' },
      { name: 'LEFT', syntax: 'LEFT(string, length)', description: '왼쪽에서 추출' },
      { name: 'RIGHT', syntax: 'RIGHT(string, length)', description: '오른쪽에서 추출' },
      { name: 'LEN', syntax: 'LEN(string)', description: '문자열 길이' },
      { name: 'UPPER', syntax: 'UPPER(string)', description: '대문자 변환' },
      { name: 'LOWER', syntax: 'LOWER(string)', description: '소문자 변환' },
      { name: 'REPLACE', syntax: 'REPLACE(string, old, new)', description: '문자열 치환' },
      { name: 'TRIM', syntax: 'TRIM(string)', description: '공백 제거' },
    ],
  },
  logic: {
    label: '논리 함수',
    icon: '🔀',
    functions: [
      { name: 'IF', syntax: 'IF condition THEN value ELSE value END', description: '조건부 분기' },
      { name: 'CASE', syntax: 'CASE field WHEN value THEN result END', description: '다중 조건 분기' },
      { name: 'IIF', syntax: 'IIF(condition, true_value, false_value)', description: '인라인 조건' },
      { name: 'ZN', syntax: 'ZN(expression)', description: 'NULL을 0으로' },
      { name: 'IFNULL', syntax: 'IFNULL(expression, replacement)', description: 'NULL 대체' },
      { name: 'ISNULL', syntax: 'ISNULL(expression)', description: 'NULL 여부' },
    ],
  },
  aggregate: {
    label: '집계 함수',
    icon: '📊',
    functions: [
      { name: 'SUM', syntax: 'SUM(expression)', description: '합계' },
      { name: 'AVG', syntax: 'AVG(expression)', description: '평균' },
      { name: 'MIN', syntax: 'MIN(expression)', description: '최소값' },
      { name: 'MAX', syntax: 'MAX(expression)', description: '최대값' },
      { name: 'COUNT', syntax: 'COUNT(expression)', description: '개수' },
      { name: 'COUNTD', syntax: 'COUNTD(expression)', description: '고유값 개수' },
    ],
  },
}

export const allFunctionNames = Object.values(tableauFunctions)
  .flatMap((cat) => cat.functions.map((f) => f.name))
