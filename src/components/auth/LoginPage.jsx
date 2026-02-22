import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { BACKGROUNDS } from '../../data/characters'

export default function LoginPage() {
  const { signIn, signUp } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setSubmitting(true)

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password)
        if (error) {
          setError(error.message)
        } else {
          setMessage('가입 완료! 이메일을 확인해 주세요.')
        }
      } else {
        const { error } = await signIn(email, password)
        if (error) {
          setError(error.message)
        }
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060d1a] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUNDS.office_day})`,
          filter: 'brightness(0.2) saturate(0.5)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-[#060d1a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-transparent to-[#060d1a]/40" />

      {/* Accent glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-accent/6 blur-[120px]" />

      {/* Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center w-full max-w-sm">

          {/* Title */}
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3 justify-center">
              <div className="h-px w-6 bg-white/30" />
              <span className="text-[10px] font-semibold tracking-[0.35em] text-white/40 uppercase">
                Growlab Interactive
              </span>
              <div className="h-px w-6 bg-white/30" />
            </div>
            <h1>
              <span className="block text-4xl font-black tracking-[0.12em] leading-none bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                TABLEAU
              </span>
              <span className="block text-3xl font-black tracking-[0.25em] leading-none mt-1 bg-gradient-to-b from-accent via-accent to-accent/50 bg-clip-text text-transparent">
                QUEST
              </span>
            </h1>
          </div>

          {/* Login card */}
          <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
            <h2 className="text-lg font-bold mb-1 text-white/90">
              {isSignUp ? '회원가입' : '로그인'}
            </h2>
            <p className="text-[13px] text-white/40 mb-6">
              {isSignUp ? '새 계정을 만들어 모험을 시작하세요' : '계정에 로그인하여 모험을 이어가세요'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.06]"
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.06]"
              />

              {error && (
                <p className="text-[13px] text-red-400 bg-red-400/10 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
              {message && (
                <p className="text-[13px] text-green-400 bg-green-400/10 rounded-lg px-3 py-2">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 w-full rounded-xl bg-accent px-4 py-3 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,141,240,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting
                  ? '처리 중...'
                  : isSignUp ? '가입하기' : '로그인'
                }
              </button>
            </form>

            {/* Toggle sign up / sign in */}
            <div className="mt-5 text-center">
              <button
                onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage('') }}
                className="text-[13px] text-white/40 hover:text-white/70 transition-colors cursor-pointer"
              >
                {isSignUp
                  ? '이미 계정이 있으신가요? 로그인'
                  : '계정이 없으신가요? 회원가입'
                }
              </button>
            </div>

            {/* Future OAuth section */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-[11px] text-white/25 mb-3">소셜 로그인</p>
              <div className="flex gap-2">
                <button
                  disabled
                  className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] py-2.5 text-[13px] text-white/25 cursor-not-allowed"
                >
                  Google
                </button>
                <button
                  disabled
                  className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] py-2.5 text-[13px] text-white/25 cursor-not-allowed"
                >
                  Kakao
                </button>
              </div>
              <p className="text-[10px] text-white/15 mt-2">준비 중</p>
            </div>
          </div>

        </div>
      </main>

      {/* Version */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="text-[10px] text-white/20 tracking-wider">v0.1</span>
      </div>
    </div>
  )
}
