// 앱 스토어 계정용 지원/문의 페이지 — 네비게이션에 노출하지 않고 URL(#/support)로만 접근
const APP_NAME = 'Rallys'                       // ← 출시 앱 이름으로 교체
const SUPPORT_EMAIL = 'Chinggu88@gmail.com'

export default function Support() {
  return (
    <div class="tab-panel active" data-panel="support">

      <header class="page-header">
        <div class="eyebrow">Support</div>
        <h1 class="serif"><em>{APP_NAME}</em> 지원·문의</h1>
        <p class="deck">{APP_NAME} 사용 중 궁금한 점이나 불편한 점이 있으면 언제든 알려주세요. 보통 <strong>영업일 기준 24시간 이내</strong>에 답변드립니다.</p>
      </header>

      <section style={{ marginBottom: 96 }}>
        <div class="sec-num">01 / Contact</div>
        <h2 class="sec-title serif"><em>문의</em> 채널.</h2>
        <ul class="quick-links">
          <li>
            <span class="l">Email</span>
            <a class="v" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </li>
          <li>
            <span class="l">Response</span>
            <span class="v">영업일 기준 ~ 24시간 이내</span>
          </li>
          <li>
            <span class="l">Language</span>
            <span class="v">한국어 · English</span>
          </li>
        </ul>
      </section>

      <section>
        <div class="sec-num">02 / FAQ</div>
        <h2 class="sec-title serif"><em>자주</em> 묻는 질문.</h2>
        <div class="bio">
          <div class="bio-text">
            <p class="serif">문의 전에 확인해 보세요.</p>
            <p><strong>Q. 오류가 발생했어요.</strong><br/>앱을 최신 버전으로 업데이트한 뒤 다시 시도해 주세요. 그래도 동일하다면 사용 중인 기기 모델·OS 버전·발생 화면을 위 이메일로 보내주시면 빠르게 도와드리겠습니다.</p>
            <p><strong>Q. 계정/데이터를 삭제하고 싶어요.</strong><br/>앱 내 설정에서 데이터를 삭제할 수 있으며, 추가 요청이 필요하면 위 이메일로 연락 주세요.</p>
            <p><strong>Q. 기능 제안이나 개선 요청을 하고 싶어요.</strong><br/>언제든 환영합니다. 이메일로 자유롭게 의견을 보내주세요.</p>
          </div>
          <aside class="bio-side">
            <div class="contact-block">
              <h3>Quick Info</h3>
              <div class="row"><span class="l">Email</span><span class="v">{SUPPORT_EMAIL}</span></div>
              <div class="row"><span class="l">Response</span><span class="v">~ 24시간</span></div>
              <div class="row"><span class="l">Privacy</span><span class="v"><a href="#/privacy">개인정보 처리방침</a></span></div>
            </div>
          </aside>
        </div>
      </section>

    </div>
  )
}
