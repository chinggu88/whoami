export default function Projects() {
  return (
     <div class="tab-panel active" data-panel="projects">
 
    <header class="page-header">
      <div class="eyebrow">Projects</div>
      <h1 class="serif">출시한 제품으로<br/><em>증명합니다.</em></h1>
      <p class="deck">다운로드 10만+ 야구단 앱부터 일거래액 670억의 환전 앱, 그리고 <strong>AI 에이전트와 함께 만드는 다음 제품</strong>까지 — 매일 사용자의 손에 닿는 코드를 씁니다.</p>
    </header>
 
    <section>
      <div class="sec-num">01 / Featured Projects</div>
      <h2 class="sec-title serif"><em>Three</em> products in production.</h2>
      <div class="featured-list">
 
        <article class="featured-row">
          <div class="featured-num serif">01</div>
          <div class="featured-content">
            <h3 class="serif"><em>cuunit</em> — 환테크 환전 앱</h3>
            <div class="role-line">개발 PM · 2025.01 — 재직중 · Flagship Product</div>
            <p>안드로이드 <strong>네이티브 위젯</strong>, 신규 아이템 타임프리즈, 휴대폰 본인인증, 농협 자동 입출금, 그리고 <strong>LLM 기반 자연어 매수/매도 및 CS</strong>까지 — 환전을 넘어 환테크라는 카테고리를 만든 제품에 직접 기여한 핵심 기능들.</p>
            <div class="featured-stack"><span>Flutter</span><span>Native (Android)</span><span>LLM</span><span>LangGraph</span></div>
          </div>
          <aside class="featured-impact">
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">670</span><em>억</em></div>
              <div class="impact-lbl">월거래액 (30억 → 22배)</div>
            </div>
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">1</span><em>만+</em></div>
              <div class="impact-lbl">사용자 (5천 → 2배)</div>
            </div>
          </aside>
        </article>
 
        <article class="featured-row">
          <div class="featured-num serif">02</div>
          <div class="featured-content">
            <h3 class="serif">야구단 <em>공식</em> 앱</h3>
            <div class="role-line">1인 개발 · 2022.12 — 2024.07 · 1년 6개월</div>
            <p>티켓링크 API 결제와 효율적 호출 로직, <strong>Phone·Tablet·Flip·Fold 멀티디바이스</strong> 최적화 UI, Firebase Remote Config로 위젯 동적 관리. Method Channel(Android)·UiKitView(iOS) 기반 WebView 구현, Deeplink로 결제 후 앱 복귀까지 — 야구단 공식 앱 전반을 혼자 빌드.</p>
            <div class="featured-stack"><span>Flutter</span><span>Dart</span><span>GetX</span><span>Firebase</span></div>
          </div>
          <aside class="featured-impact">
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">10</span><em>만+</em></div>
              <div class="impact-lbl">다운로드 (AOS·iOS each)</div>
            </div>
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">2.5</span><em>만</em></div>
              <div class="impact-lbl">DAU (일 접속 5만)</div>
            </div>
          </aside>
        </article>

        <article class="featured-row">
          <div class="featured-num serif">03</div>
          <div class="featured-content">
            <h3 class="serif">코어닥스 <em>거래소</em> 앱</h3>
            <div class="role-line">모바일팀 팀장 · 2022.04 — 2022.12 · 국내 최초 Flutter 거래소</div>
            <p><strong>국내 최초로 Flutter로 구현한 암호화폐 거래소 앱.</strong> 당시 거래소 앱은 네이티브가 표준이라는 통념이 있었지만, <strong>Flutter로도 거래소 수준의 퀄리티가 가능함을 증명</strong>한 작업. 핵심인 <strong>실시간 차트는 호가·체결·지표를 네이티브에 뒤지지 않는 부드러움</strong>으로 구현했고, 모바일에 그치지 않고 <strong>데스크탑 거래소 프로그램</strong>까지 같은 코드 기반으로 확장. <strong>모바일팀 팀장</strong>으로 소스 관리와 업무 분담을 함께 책임졌다.</p>
            <div class="featured-stack"><span>Flutter</span><span>Dart</span><span>GetX</span><span>Desktop</span></div>
          </div>
          <aside class="featured-impact">
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">국내 최초</span></div>
              <div class="impact-lbl">Flutter 기반 거래소 앱</div>
            </div>
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">Mobile</span><em> + Desktop</em></div>
              <div class="impact-lbl">단일 코드, 두 플랫폼</div>
            </div>
          </aside>
        </article>
 
      </div>
    </section>
 
    <section>
      <div class="sec-num">02 / Side Projects</div>
      <h2 class="sec-title serif"><em>Experiments</em> in AI-era development.</h2>
      <div class="side-projects">
        <div class="side-card has-icon-corner">
          <div class="app-icon app-icon-corner" aria-label="AI Agent 아이콘">
            <span class="icon-placeholder">ICON</span>
          </div>
          <span class="status">◆ Building · 진행중</span>
          <h4 class="serif">My-Style Coding Agent</h4>
          <p>나의 사고 흐름을 <strong>크론(clone)</strong>해 앱을 만드는 AI 에이전트. 단순 코드 생성이 아니라 <strong>내 손에 익은 코드 규칙·네이밍·폴더 구조</strong>를 그대로 따르는 것이 핵심. 새 프로젝트마다 같은 결의 <strong>일관된 보일러플레이트</strong>를 자동 생성해, <strong>눈에 익은 코드</strong> 위에서 바로 작업할 수 있도록 만드는 실험.</p>
        </div>
        <div class="side-card has-icon-left">
          <div class="app-icon app-icon-lg" aria-label="돈터치 앱 아이콘">
            <span class="icon-placeholder">ICON</span>
          </div>
          <div class="side-card-body">
            <div class="side-status-row">
              <span class="status released">● Released · AOS &amp; iOS</span>
              <div class="side-links">
                <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" class="side-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                </a>
                <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" class="side-link" aria-label="Google Play">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M3.6 1.7c-.3.3-.5.8-.5 1.4v17.8c0 .6.2 1.1.5 1.4l9.7-10.6L3.6 1.7zm11.2 9.4l2.6-2.8L5.4 1.4c-.3-.2-.6-.2-.9-.1l10.3 9.8zM4.5 22.7c.3.1.6.1.9-.1l12-6.9-2.6-2.8-10.3 9.8zm15.7-10.6l-3 1.7 2.8 3 3-1.7c.9-.5.9-1.9.1-2.4l-2.9-1.6 2.9-1.6c.8-.5.8-1.9-.1-2.4l-3-1.7-2.8 3 3 1.7z"/>
                  </svg>
                </a>
                <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" class="side-link" aria-label="App Store">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </a>
              </div>
            </div>
            <h4 class="serif">돈터치</h4>
            <p>기획자의 예전 아이디어를 <strong>바이브코딩</strong>으로 개발·배포·운영까지 가능한지 테스트한 사이드 프로젝트. 개발·배포까지 단 <strong>7일</strong>. 운영 중 예측하지 못한 오류를 마주하며 일관된 문서 양식과 개발 문서화의 중요성을 체감.</p>
          </div>
        </div>
        <div class="side-card has-icon-corner">
          <div class="app-icon app-icon-corner" aria-label="커런시드롭 앱 아이콘">
            <span class="icon-placeholder">ICON</span>
          </div>
          <span class="status">◆ Experiment · 미배포</span>
          <h4 class="serif">커런시드롭</h4>
          <p>바이브코딩을 넘어 <strong>Claude Code 팀 에이전트</strong>를 구성해 진행한 실험. 기획·디자인·개발 <strong>3인 체제</strong>로 한 달간 게임 앱 개발. 코드는 완성했으나 디자인→개발 자동화의 한계를 체감.</p>
          <div class="side-actions">
            <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" class="side-action">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        <div class="side-card">
          <div class="side-status-row">
            <span class="status released">● Released · AOS &amp; iOS</span>
            <div class="side-links">
              <a href="https://github.com/chinggu88/unnung" target="_blank" rel="noopener noreferrer" class="side-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
              <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" class="side-link" aria-label="Google Play">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 1.7c-.3.3-.5.8-.5 1.4v17.8c0 .6.2 1.1.5 1.4l9.7-10.6L3.6 1.7zm11.2 9.4l2.6-2.8L5.4 1.4c-.3-.2-.6-.2-.9-.1l10.3 9.8zM4.5 22.7c.3.1.6.1.9-.1l12-6.9-2.6-2.8-10.3 9.8zm15.7-10.6l-3 1.7 2.8 3 3-1.7c.9-.5.9-1.9.1-2.4l-2.9-1.6 2.9-1.6c.8-.5.8-1.9-.1-2.4l-3-1.7-2.8 3 3 1.7z"/>
                </svg>
              </a>
              <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" class="side-link" aria-label="App Store">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </a>
            </div>
          </div>
          <h4 class="serif has-icon-inline">
            <span class="app-icon app-icon-sm" aria-label="언눙 앱 아이콘">
              <span class="icon-placeholder">ICON</span>
            </span>
            언눙 (unnung)
          </h4>
          <p><strong>위치 기반 + Gemini AI</strong>를 결합한 Flutter 사이드 프로젝트. 약 <strong>7개월간</strong> Firebase·Supabase·Isar로 백엔드와 로컬DB를 함께 다루며 출시까지 완주. 개인정보처리방침·이용약관 호스팅, 빌드 13회 — 사이드 프로젝트도 <strong>운영 가능한 수준</strong>으로 마무리 짓는 경험을 쌓은 작업.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="sec-num">03 / Other Projects</div>
      <h2 class="sec-title serif"><em>Other</em> works.</h2>
      <div class="other-projects">
        <div class="other-card">
          <div class="o-cat">FX Automation</div>
          <h4>FX 자동거래 시스템</h4>
          <p>5개 통화(USD·JPY·EUR·CNY·CAD)의 상관관계를 분석해 직접 헷지 전략을 수립하고, 24시간 무중단 매매 로직으로 옮긴 작업.</p>
          <div class="mini-stack"><span>Python</span><span>Selenium</span><span>PyAutoGUI</span></div>
        </div>
        <div class="other-card">
          <div class="o-cat">Web Dashboard</div>
          <h4>cuunit 사용자 대시보드</h4>
          <p>앱 운영·CS 안정화를 위한 웹 대시보드 구현.</p>
          <div class="mini-stack"><span>Flutter Web</span></div>
        </div>
        <div class="other-card">
          <div class="o-cat">IoT App</div>
          <h4>스마트팜 (반려식물 관리)</h4>
          <p>BLE 다중 기기 데이터 연동, 식물 환경·성장 기록 앱. 일정관리·BLE·백엔드 통신 담당.</p>
          <div class="mini-stack"><span>Flutter</span><span>Bluetooth</span></div>
        </div>
        <div class="other-card">
          <div class="o-cat">IoT Backend</div>
          <h4>AI 스마트하우징</h4>
          <p>공기질 측정기 IoT 모니터링, MQTT 데이터 파이프라인 — 데이터 수집·저장·표출 담당.</p>
          <div class="mini-stack"><span>Spring</span><span>FastAPI</span><span>MQTT</span></div>
        </div>
        <div class="other-card">
          <div class="o-cat">Service Maintenance</div>
          <h4>오토오아시스 차량정비</h4>
          <p>인수인계 받아 유지보수 + 신규 기능 개발 (Spring·MSSQL·CentOS).</p>
          <div class="mini-stack"><span>Spring</span><span>MSSQL</span><span>CentOS</span></div>
        </div>
        <div class="other-card">
          <div class="o-cat">Government System</div>
          <h4>여의도연구원 선거지역관리</h4>
          <p>PM 역할, 문자인증·대용량 batch·Admin·통계·서버셋팅 등 핵심 기능 담당.</p>
          <div class="mini-stack"><span>Spring</span><span>MySQL</span><span>Python</span></div>
        </div>
      </div>
    </section>

  </div>
  )
}
