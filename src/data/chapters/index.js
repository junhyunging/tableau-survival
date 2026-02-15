import { chapter1 } from './chapter1'

const chapters = {
  1: chapter1,
}

export const CHAPTER_META = [
  { id: 1, part: 1, title: '태블로와의 첫 만남', subtitle: '온보딩과 첫 미션' },
  { id: 2, part: 1, title: '차원과 측정값', subtitle: '데이터 분류의 기본' },
  { id: 3, part: 1, title: '마크 카드와 차트', subtitle: '시각화 감각 익히기' },
  { id: 4, part: 1, title: '데이터 연결과 정리', subtitle: '실무 데이터 준비' },
  { id: 5, part: 2, title: '계산된 필드 입문', subtitle: '수식 작성의 시작' },
  { id: 6, part: 2, title: '함수 활용', subtitle: '날짜·문자열·논리 함수' },
  { id: 7, part: 2, title: '매개변수', subtitle: '시나리오 기반 분석' },
  { id: 8, part: 2, title: '테이블 계산', subtitle: '순위와 구성비 계산' },
  { id: 9, part: 2, title: 'LOD 표현식', subtitle: '집계 레벨 제어' },
  { id: 10, part: 3, title: 'KPI 대시보드', subtitle: '지표 중심 리포트' },
  { id: 11, part: 3, title: '퍼널 분석', subtitle: '전환 이탈 지점 찾기' },
  { id: 12, part: 3, title: '파레토 분석', subtitle: '핵심 항목 집중' },
  { id: 13, part: 3, title: '고객 세분화', subtitle: 'RFM 기반 분류' },
  { id: 14, part: 3, title: '코호트 분석', subtitle: '리텐션 구조 이해' },
  { id: 15, part: 3, title: '시계열 분석', subtitle: '추세와 예측' },
  { id: 16, part: 3, title: '분포와 이상값', subtitle: '통계적 관점 강화' },
  { id: 17, part: 4, title: '설계 원칙', subtitle: '대시보드 구조화' },
  { id: 18, part: 4, title: '액션과 인터랙션', subtitle: '탐색형 분석 경험' },
  { id: 19, part: 4, title: '스토리텔링', subtitle: '인사이트 전달력' },
  { id: 20, part: 4, title: '최종 프로젝트', subtitle: '종합 대시보드 완성' },
]

export const PART_META = {
  1: { name: 'Part 1', label: '태블로 기초' },
  2: { name: 'Part 2', label: '계산의 기술' },
  3: { name: 'Part 3', label: '비즈니스 분석' },
  4: { name: 'Part 4', label: '실무 대시보드' },
}

export function getChapter(id) {
  return chapters[id] || null
}

export function getMaxChapter() {
  return CHAPTER_META.length
}

export default chapters
