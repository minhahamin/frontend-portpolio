import { useEffect } from 'react'
import { facts, projects, stack, type Project } from './data'

const EMAIL = 'hlkm1667haha@naver.com'
const GITHUB = 'https://github.com/minhahamin'

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-pink-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          홍민하
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#work" className="link-line hover:text-ink">프로젝트</a>
          <a href="#stack" className="link-line hover:text-ink">스택</a>
          <a href="#contact" className="link-line hover:text-ink">연락</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="dot-shimmer absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-rose">
          Frontend Developer / Busan
        </p>
        <h1 className="reveal mt-6 text-[2.6rem] font-semibold leading-[1.12] tracking-[-0.035em] md:text-[4.25rem]" style={{ ['--i' as string]: 1 }}>
          보이지 않는 부분까지
          <br />
          직접 만들고 측정하는
          <br />
          프론트엔드 개발자 홍민하
        </h1>
        <p className="reveal mt-8 max-w-xl text-[17px] text-muted" style={{ ['--i' as string]: 2 }}>
          버벅이지 않는 화면, 새로고침해도 그대로인 화면, 오류가 나도 길을 알려 주는 화면을 만듭니다.
          아래 세 프로젝트가 그 기록입니다.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center gap-6" style={{ ['--i' as string]: 3 }}>
          <a
            href="#work"
            className="inline-flex items-center rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-[#44373b] active:scale-[0.98]"
          >
            프로젝트 보기
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1.5 text-sm font-medium">
            GitHub <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}

function Facts() {
  return (
    <section aria-label="요약 수치" className="border-y border-pink-line bg-surface/60">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 px-6 md:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className="reveal flex flex-col border-pink-line py-8 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
            style={{ ['--i' as string]: i }}
          >
            <dt className="order-2 text-sm text-muted">{f.label}</dt>
            <dd className="order-1 mb-1 font-serif text-5xl leading-none tracking-tight">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function WindowFrame({ project }: { project: Project }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} 라이브 데모 열기`}
      className="block overflow-hidden rounded-xl border border-pink-line bg-surface transition-shadow duration-200 hover:shadow-[0_2px_14px_rgba(168,72,106,0.10)]"
    >
      <div className="flex items-center gap-2 border-b border-pink-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f2a7a7]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4d08c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a9d4b2]" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted">
          {project.live.replace('https://', '')}
        </span>
      </div>
      <img src={project.image} alt={project.alt} loading="lazy" className="block w-full" />
    </a>
  )
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
      <div className={`reveal min-w-0 md:col-span-5 ${flip ? 'md:order-2' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted">{project.no}</span>
          <span className="rounded-full bg-pink-soft px-3 py-1 text-[11px] font-medium uppercase tracking-[0.05em] text-rose">
            {project.proves}
          </span>
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-[2.1rem]">
          {project.name}
        </h3>
        <p className="mt-4 text-[15px] text-muted">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm">
              <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 bg-pink" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md border border-pink-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6 text-sm font-medium">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1.5">
            라이브 데모 <ArrowUpRight />
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1.5 text-muted hover:text-ink">
            코드와 README <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className={`reveal min-w-0 md:col-span-7 ${flip ? 'md:order-1' : ''}`} style={{ ['--i' as string]: 1 }}>
        <WindowFrame project={project} />
      </div>
    </article>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 pt-24">
      <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-rose">Selected Work</p>
      <h2 className="reveal mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl" style={{ ['--i' as string]: 1 }}>
        세 가지 질문에 코드로 답한 프로젝트
      </h2>
      <div className="mt-6 divide-y divide-pink-line">
        {projects.map((p, i) => (
          <ProjectRow key={p.no} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="border-t border-pink-line bg-surface/60">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-rose">Stack</p>
        <h2 className="reveal mt-3 text-3xl font-semibold tracking-[-0.03em]" style={{ ['--i' as string]: 1 }}>
          이 프로젝트들에 실제로 쓴 도구
        </h2>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {stack.map((s, i) => (
            <li
              key={s}
              className="reveal rounded-md border border-pink-line bg-bg px-4 py-2 text-sm"
              style={{ ['--i' as string]: i % 6 }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-rose">Contact</p>
      <h2 className="reveal mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl" style={{ ['--i' as string]: 1 }}>
        이야기를 나누고 싶다면
      </h2>
      <div className="reveal mt-10 flex flex-col gap-4 text-lg md:flex-row md:items-center md:gap-10" style={{ ['--i' as string]: 2 }}>
        <a href={`mailto:${EMAIL}`} className="link-line inline-flex w-fit items-center gap-2 font-medium">
          {EMAIL} <ArrowUpRight />
        </a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link-line inline-flex w-fit items-center gap-2 text-muted hover:text-ink">
          github.com/minhahamin <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-pink-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 font-mono text-xs text-muted">
        <span>2026 Hong Minha</span>
        <a href="#top" className="link-line hover:text-ink">맨 위로</a>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Facts />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
