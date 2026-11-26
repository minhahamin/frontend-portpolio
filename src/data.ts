export interface Project {
  no: string
  name: string
  proves: string
  description: string
  highlights: string[]
  stack: string[]
  live: string
  repo: string
  image: string
  alt: string
}

export const projects: Project[] = [
  {
    no: '01',
    name: '칸반 보드',
    proves: '복잡한 상태 관리',
    description:
      '드래그 앤 드롭, undo/redo, 키보드 조작까지 되는 칸반 보드입니다. 백엔드 없이 localStorage 로 상태를 유지합니다.',
    highlights: [
      '드래그 한 번을 undo 한 단계로 묶는 트랜잭션 처리',
      '마우스, 터치, 키보드(Space, Alt+방향키) 이동',
      '리듀서, 이동 로직, 영속화 테스트 42개',
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'dnd-kit', 'Tailwind CSS', 'Vitest'],
    live: 'https://minhahamin.github.io/kanban-board/',
    repo: 'https://github.com/minhahamin/kanban-board',
    image: '/shots/kanban.png',
    alt: '칸반 보드 화면. 할 일, 진행 중, 완료 컬럼에 카드가 놓여 있다.',
  },
  {
    no: '02',
    name: 'TV 작품 탐색',
    proves: '서버 데이터 패칭과 캐싱',
    description:
      'TVmaze 공개 API 로 작품을 검색하고 탐색합니다. 검색어와 필터가 URL 에 동기화되어 링크를 공유해도 같은 화면이 열립니다.',
    highlights: [
      '검색 디바운스, 무한스크롤, 장르 및 평점 필터',
      'TanStack Query 캐시 전략과 hover 프리패치',
      '스켈레톤, 에러 재시도, 빈 상태 처리',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'React Router', 'Tailwind CSS', 'Vitest'],
    live: 'https://minhahamin.github.io/show-explorer/',
    repo: 'https://github.com/minhahamin/show-explorer',
    image: '/shots/show-explorer.png',
    alt: 'TV 작품 탐색 앱의 목록 화면. 포스터 카드가 격자로 놓여 있다.',
  },
  {
    no: '03',
    name: '날씨 · 대기질 대시보드',
    proves: '시각화와 렌더링 성능',
    description:
      'Open-Meteo 데이터를 차트와 표로 보여 줍니다. 여러 도시를 겹쳐 비교하고, 수천 행의 시간별 데이터는 가상화로 그립니다.',
    highlights: [
      '10,080행 표 렌더링 3,777ms 에서 12ms 로 단축 (직접 측정)',
      '색에만 의존하지 않는 차트 구분: 선 스타일, 마커, 해치 패턴',
      '2~4개 도시 비교, 섭씨와 화씨 전환, 다크모드',
    ],
    stack: ['React', 'TypeScript', 'Recharts', 'TanStack Query', 'TanStack Virtual', 'Tailwind CSS'],
    live: 'https://minhahamin.github.io/air-weather-dashboard/',
    repo: 'https://github.com/minhahamin/air-weather-dashboard',
    image: '/shots/dashboard.png',
    alt: '날씨와 대기질 대시보드. 현재 기온 카드와 시간별 예보 차트가 보인다.',
  },
]

export const facts = [
  { value: '3', label: '배포된 프로젝트' },
  { value: '114', label: '단위, 통합 테스트' },
  { value: '12ms', label: '10,080행 표 렌더링' },
  { value: 'strict', label: 'TypeScript 설정' },
]

export const stack = [
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS v4',
  'Zustand',
  'TanStack Query',
  'TanStack Virtual',
  'dnd-kit',
  'Recharts',
  'Vitest',
  'Testing Library',
  'GitHub Actions',
]
