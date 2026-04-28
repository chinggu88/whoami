export default function Projects() {
  return (
     <div class="tab-panel active" data-panel="projects">
 
    <header class="page-header">
      <div class="eyebrow">Projects</div>
      <h1 class="serif">출시한 제품으로<br/><em>증명합니다.</em></h1>
      <p class="deck">실제 사용자가 매일 쓰고 있는 앱들 — 다운로드 10만+ 야구단 앱부터 일거래액 670억의 환전 앱까지.</p>
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
            <div class="featured-stack"><span>Flutter</span><span>Native (Android)</span><span>LLM</span></div>
          </div>
          <aside class="featured-impact">
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">670</span><em>억</em></div>
              <div class="impact-lbl">일거래액 (30억 → 22배)</div>
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
            <h3 class="serif"><em>FX</em> 자동거래 시스템</h3>
            <div class="role-line">5개 통화 24시간 무중단 자동매매 + 헷지전략</div>
            <p>Selenium 기반 <strong>5개 통화(USD·JPY·EUR·CNY·CAD)</strong> 매수/매도 자동화. XPath와 이미지 인식을 병행한 안정적 운영, Decimal 타입으로 금융 정확도 보장, Slack 실시간 알림과 자동 일일 보고서. <strong>Fernet 대칭키 암호화</strong>와 자동 재로그인으로 24시간 무중단.</p>
            <div class="featured-stack"><span>Python</span><span>Selenium</span><span>PyAutoGUI</span><span>OpenCV</span></div>
          </div>
          <aside class="featured-impact">
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">24</span><em>/7</em></div>
              <div class="impact-lbl">무중단 운영</div>
            </div>
            <div class="impact-item">
              <div class="impact-num serif"><span class="hl">5</span><em>종</em></div>
              <div class="impact-lbl">USD · JPY · EUR · CNY · CAD</div>
            </div>
          </aside>
        </article>
 
        <article class="featured-row">
          <div class="featured-num serif">03</div>
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
 
      </div>
    </section>
 
    <section>
      <div class="sec-num">02 / Other Projects</div>
      <h2 class="sec-title serif"><em>Other</em> works.</h2>
      <div class="other-projects">
        <div class="other-card">
          <div class="o-cat">Web Dashboard</div>
          <h4>cuunit 사용자 대시보드</h4>
          <p>앱 운영·CS 안정화를 위한 웹 대시보드 구현.</p>
          <div class="mini-stack"><span>Flutter Web</span></div>
        </div>
        <div class="other-card">
          <div class="o-cat">Crypto Exchange</div>
          <h4>코어닥스 거래소 앱</h4>
          <p>모바일팀 팀장으로 소스 관리, 차트 기능 메인 담당, 데스크탑 거래소 프로그램 진행.</p>
          <div class="mini-stack"><span>Flutter</span><span>GitHub</span></div>
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
 
    <section>
      <div class="sec-num">03 / Side Projects</div>
      <h2 class="sec-title serif"><em>Experiments</em> in AI-era development.</h2>
      <div class="side-projects">
        <div class="side-card">
          <span class="status released">● Released · AOS &amp; iOS</span>
          <h4 class="serif">돈터치</h4>
          <p>기획자의 예전 아이디어를 <strong>바이브코딩</strong>으로 개발·배포·운영까지 가능한지 테스트한 사이드 프로젝트. 개발·배포까지 단 <strong>7일</strong>. 운영 중 예측하지 못한 오류를 마주하며 일관된 문서 양식과 개발 문서화의 중요성을 체감.</p>
        </div>
        <div class="side-card">
          <span class="status">◆ Experiment · 미배포</span>
          <h4 class="serif">커런시드롭</h4>
          <p>바이브코딩을 넘어 <strong>Claude Code 팀 에이전트</strong>를 구성해 진행한 실험. 기획·디자인·개발 <strong>3인 체제</strong>로 한 달간 게임 앱 개발. 코드는 완성했으나 디자인→개발 자동화의 한계를 체감.</p>
        </div>
      </div>
    </section>
 
  </div>
  )
}
