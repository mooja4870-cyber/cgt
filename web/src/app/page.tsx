"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* GNB */}
      <nav className="sticky top-0 z-40 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-accent font-black text-base relative">
            <span className="absolute top-[8px] block w-[14px] h-[3px] bg-accent rounded"></span>
            <span className="absolute top-[16px] block w-[20px] h-[3px] bg-white rounded"></span>
            <span className="absolute top-[24px] block w-[10px] h-[3px] bg-accent rounded"></span>
          </div>
          <span className="font-black text-[17px] text-primary">CGT Lab</span>
        </a>
        <div className="hidden md:flex gap-9">
          <a href="#features" className="text-sm text-muted font-medium hover:text-primary transition-colors">주요 기능</a>
          <a href="#proof" className="text-sm text-muted font-medium hover:text-primary transition-colors">도입 효과</a>
          <a href="#how" className="text-sm text-muted font-medium hover:text-primary transition-colors">작동 방식</a>
          {/* <a href="#pricing" className="text-sm text-accent font-bold">요금제</a> */}
        </div>
        {/* <button className="btn-primary" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>요금제 보기</button> */}
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-[90px] px-10 max-w-[1140px] mx-auto flex flex-col md:flex-row items-center gap-[72px]">
        <div className="flex-1">
          <div className="inline-block bg-border text-primary py-1 px-3.5 rounded-full text-xs font-semibold mb-5">
            ✨ v2.1.0 최신 업데이트 — 비과세 자동 판독 + 시뮬레이션
          </div>
          <h1 className="text-[40px] md:text-[52px] font-black leading-[1.2] mb-5">
            복잡한 양도소득세,<br />
            <span className="text-primary">조건만 입력하면</span><br />
            1초 만에 완성합니다.
          </h1>
          <p className="text-[17px] text-muted leading-[1.8] mb-9">
            매번 헷갈리는 비과세 판정·가산세 계산...<br />
            CGT Lab에 맡기고 안전하게 절세하세요.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="/calculator"
              className="btn-cta-large inline-flex items-center justify-center no-underline"
            >
              🚀 바로 시작하기
            </a>
            <a 
              href="/calculator"
              className="inline-flex items-center gap-2 bg-[#10B981] text-white font-bold text-[15px] py-3.5 px-6 rounded-xl no-underline whitespace-nowrap hover:bg-[#059669] transition-colors shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
            >
              📊 계산기 바로가기
            </a>
          </div>
          <p className="text-muted text-xs mt-3 opacity-70">
            ✓ 최신 세법 반영 &nbsp;·&nbsp; ✓ 회원가입 없이 즉시 테스트
          </p>
          <div className="flex gap-9 mt-9 pt-7 border-t border-border">
            <div>
              <div className="text-[28px] font-black text-primary">15,000+</div>
              <div className="text-xs text-muted mt-0.5">누적 계산 완료</div>
            </div>
            <div>
              <div className="text-[28px] font-black text-primary">★ 4.9</div>
              <div className="text-xs text-muted mt-0.5">평균 만족도</div>
            </div>
            <div>
              <div className="text-[28px] font-black text-primary">100%</div>
              <div className="text-xs text-muted mt-0.5">최신 세법 반영률</div>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="flex-1 w-full relative">
          <div className="bg-[#1A1A2E] rounded-2xl p-[18px] shadow-[0_24px_64px_rgba(30,58,138,0.18)] animate-[float_4s_ease-in-out_infinite]">
            <div className="flex gap-1.5 mb-3.5">
              <div className="w-[11px] h-[11px] rounded-full bg-[#EF4444]"></div>
              <div className="w-[11px] h-[11px] rounded-full bg-[#F59E0B]"></div>
              <div className="w-[11px] h-[11px] rounded-full bg-[#10B981]"></div>
            </div>
            <div className="bg-[#0F172A] rounded-[10px] p-5 font-mono text-[13px] leading-loose">
              <div className="text-[#10B981]">✓ 대상 물건: 영덕동 상가주택</div>
              <div className="text-[#10B981]">✓ 양도가액: 12억 원 적용 확인</div>
              <div className="text-[#10B981]">✓ 1세대 1주택 비과세 요건: 충족</div>
              <div className="text-[#10B981]">✓ 장기보유특별공제: 80% 적용</div>
              <div className="text-[#3B82F6] mt-1.5">⚡ 산출세액 계산 중...</div>
              <div className="bg-[#1E293B] rounded-md h-2 mt-3.5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#10B981] to-[#3B82F6] rounded-md animate-[grow_2s_ease-out_forwards]"></div>
              </div>
              <div className="text-[#64748B] text-[11px] mt-1.5">세액 시뮬레이션 진행률 100%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section id="pain" className="bg-[#EEF2F7] py-[90px] px-10">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-center text-[36px] font-black mb-[52px] leading-[1.3]">
            양도소득세 신고, 아직도<br />
            <span className="text-[#EF4444]">가산세 위험을 안고 계신가요?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white rounded-[18px] p-[30px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(30,58,138,0.12)] transition-all">
              <div className="text-4xl mb-3.5">😓</div>
              <h3 className="text-lg font-bold mb-2.5">끝없는 세법 개정</h3>
              <p className="text-sm text-muted leading-relaxed">
                매년, 매달 바뀌는 누더기 세법. 전문가들도 헷갈리는 비과세 요건을 직접 찾고 계신가요?
              </p>
              <div className="inline-block mt-3.5 bg-[#FEF2F2] text-[#EF4444] px-3 py-1 rounded-lg text-xs font-bold">오류 시 가산세 20%</div>
            </div>
            <div className="flex-1 bg-white rounded-[18px] p-[30px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(30,58,138,0.12)] transition-all">
              <div className="text-4xl mb-3.5">💸</div>
              <h3 className="text-lg font-bold mb-2.5">비싼 상담 비용</h3>
              <p className="text-sm text-muted leading-relaxed">
                간단한 시뮬레이션 한 번 돌리려 해도 세무사 상담 비용이 부담되어 망설이셨나요?
              </p>
              <div className="inline-block mt-3.5 bg-[#FEF2F2] text-[#EF4444] px-3 py-1 rounded-lg text-xs font-bold">회당 10~30만원 지출</div>
            </div>
            <div className="flex-1 bg-white rounded-[18px] p-[30px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(30,58,138,0.12)] transition-all">
              <div className="text-4xl mb-3.5">⏳</div>
              <h3 className="text-lg font-bold mb-2.5">시간 낭비</h3>
              <p className="text-sm text-muted leading-relaxed">
                엑셀 파일에 수식 넣어가며 며칠을 고민하고 계산해도, 결과에 대한 확신이 안 서시죠?
              </p>
              <div className="inline-block mt-3.5 bg-[#FEF2F2] text-[#EF4444] px-3 py-1 rounded-lg text-xs font-bold">계산에 수일 소요</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-[90px] px-10">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-center text-[36px] font-black mb-[52px] leading-[1.3]">
            <span className="text-primary">CGT Lab</span> 하나면,<br />
            양도세 계산의 모든 고민이 해결됩니다.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFB] border-[1.5px] border-[#E5E7EB] rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,138,0.1)] transition-all relative">
              <div className="text-[44px] mb-3.5">🔍</div>
              <div className="inline-flex items-center gap-2 bg-[#EEF2F7] px-3 py-1 rounded-full text-[11px] font-bold text-primary mb-3.5">
                ⚡ 핵심 기능 01
              </div>
              <h3 className="text-[20px] font-black mb-3 text-[#1A1A2E] leading-relaxed">
                1세대 1주택 비과세<br /><span className="text-primary">자동 판독기</span>
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                거주 요건, 보유 요건, 조정대상지역 여부 등 복잡한 조건들을 체크리스트 형태로 입력하면 AI가 비과세 대상인지 즉시 판정합니다.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">비과세 판정</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">세법 최신화</span>
              </div>
            </div>

            <div className="bg-[#F8FAFB] border-[1.5px] border-[#E5E7EB] rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,138,0.1)] transition-all relative">
              <div className="text-[44px] mb-3.5">📊</div>
              <div className="inline-flex items-center gap-2 bg-[#F0FDF4] px-3 py-1 rounded-full text-[11px] font-bold text-[#10B981] mb-3.5">
                💬 핵심 기능 02
              </div>
              <h3 className="text-[20px] font-black mb-3 text-[#1A1A2E] leading-relaxed">
                증여 후 양도<br /><span className="text-[#10B981]">절세 시뮬레이션</span>
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                상가주택 등을 자녀에게 증여한 후 양도할 때와 직접 양도할 때의 세액을 비교하여 최적의 절세 전략을 제시합니다.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-bold">시나리오 비교</span>
                <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-bold">이월과세 검증</span>
              </div>
            </div>
            
            <div className="bg-[#F8FAFB] border-[1.5px] border-[#E5E7EB] rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,138,0.1)] transition-all relative">
              <div className="absolute top-5 right-5">
                <span className="inline-block bg-[#FFF7ED] text-[#C2410C] text-[11px] font-bold px-2.5 py-[3px] rounded-full">프로 전용</span>
              </div>
              <div className="text-[44px] mb-3.5">🖨️</div>
              <div className="inline-flex items-center gap-2 bg-[#EEF2F7] px-3 py-1 rounded-full text-[11px] font-bold text-primary mb-3.5">
                🔒 핵심 기능 03
              </div>
              <h3 className="text-[20px] font-black mb-3 text-[#1A1A2E] leading-relaxed">
                결과 보고서<br /><span className="text-primary">PDF 자동 생성</span>
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                계산된 세액 산출 근거와 요약 내역을 깔끔한 형태의 PDF 리포트로 다운로드하여 보관하거나 클라이언트에게 제공할 수 있습니다.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">PDF 출력</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">산출 근거 포함</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section (도입 효과) */}
      <section id="proof" className="bg-[#F8FAFB] py-[90px] px-10">
        <div className="max-w-[1140px] mx-auto text-center">
          <h2 className="text-[36px] font-black mb-[52px] leading-[1.3]">
            업무 방식의 혁신,<br />
            <span className="text-primary">압도적인 도입 효과</span>를 경험하세요
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-[40px] font-black text-primary mb-2">90%</div>
              <h3 className="text-lg font-bold mb-3">계산 시간 단축</h3>
              <p className="text-sm text-muted">수기로 작성하고 검증하던 몇 시간의 작업을 단 1분 내외로 단축합니다.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-[40px] font-black text-[#10B981] mb-2">0%</div>
              <h3 className="text-lg font-bold mb-3">가산세 리스크</h3>
              <p className="text-sm text-muted">최신 세법이 100% 반영된 알고리즘으로 계산 오류로 인한 가산세 위험을 원천 차단합니다.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-[40px] font-black text-accent mb-2">100%</div>
              <h3 className="text-lg font-bold mb-3">고객 신뢰도 향상</h3>
              <p className="text-sm text-muted">깔끔한 PDF 보고서를 즉시 제공하여 고객의 신뢰도와 만족도를 극대화합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section (작동 방식) */}
      <section id="how" className="bg-white py-[90px] px-10">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-center text-[36px] font-black mb-[52px] leading-[1.3]">
            누구나 쉽게 사용할 수 있는<br />
            <span className="text-primary">3단계 작동 방식</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0"></div>
            <div className="flex-1 text-center relative z-10">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">1</div>
              <h3 className="text-xl font-bold mb-3">기본 정보 입력</h3>
              <p className="text-sm text-muted">취득/양도일, 주택 수, 조정대상지역 여부 등 체크리스트를 클릭하여 정보를 입력합니다.</p>
            </div>
            <div className="flex-1 text-center relative z-10">
              <div className="w-16 h-16 bg-[#10B981] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">2</div>
              <h3 className="text-xl font-bold mb-3">가액 및 경비 입력</h3>
              <p className="text-sm text-muted">양도가액과 취득가액을 입력하면 중개수수료 및 취득세 등 필요경비가 자동 계산됩니다.</p>
            </div>
            <div className="flex-1 text-center relative z-10">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">3</div>
              <h3 className="text-xl font-bold mb-3">결과 및 리포트 확인</h3>
              <p className="text-sm text-muted">비과세 판정 결과와 최종 납부 세액을 즉시 확인하고 PDF 보고서로 다운로드합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-center py-[100px] px-10 relative overflow-hidden">
        <h2 className="text-white text-[40px] font-black leading-tight mb-4 relative z-10">
          지금 바로 절세를 경험하세요
        </h2>
        <p className="text-white/70 text-[17px] mb-10 relative z-10">
          가입 즉시 7일간 모든 기능을 무료로 사용할 수 있습니다.
        </p>
        <button 
          className="btn-cta-large relative z-10"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          무료로 계산기 시작하기
        </button>
      </section>

      <footer className="bg-[#0F172A] p-9 text-center text-white/40 text-[13px] leading-loose">
        <div className="font-black text-white/70 text-base mb-2">CGT Lab</div>
        <p>Copyright © 2026 CGT Lab. All rights reserved.</p>
        <p className="mt-2">본 사이트의 계산 결과는 참고용이며, 실제 세액은 관할 세무서나 전문가와 상담하시기 바랍니다.</p>
      </footer>
    </main>
  );
}
