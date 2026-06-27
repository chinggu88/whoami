// 앱 스토어 계정용 개인정보 처리방침 — 네비게이션에 노출하지 않고 URL(#/privacy)로만 접근
const APP_NAME = 'Rallys'                       // ← 출시 앱 이름으로 교체
const CONTACT_EMAIL = 'Chinggu88@gmail.com'
const EFFECTIVE_DATE = '2026-06-27'         // ← 시행일

export default function Privacy() {
  return (
    <div class="tab-panel active" data-panel="privacy">

      <header class="page-header">
        <div class="eyebrow">Privacy Policy</div>
        <h1 class="serif">개인정보<br/><em>처리방침</em></h1>
        <p class="deck">{APP_NAME}(이하 “본 앱”)은 이용자의 개인정보를 소중하게 생각하며, 개인정보를 <strong>수집·저장·전송하지 않는 것</strong>을 원칙으로 합니다. 본 방침은 본 앱의 개인정보 처리 기준을 안내합니다.</p>
      </header>

      <section class="bio">
        <div class="bio-text">
          <p class="serif">한눈에 보기 — 본 앱은 개인정보를 수집하지 않습니다.</p>

          <p><strong>1. 수집하는 개인정보</strong><br/>본 앱은 이용자의 이름, 이메일, 전화번호, 위치, 사진, 연락처 등 어떠한 개인정보도 수집하거나 서버로 전송하지 않습니다. 앱 이용에 필요한 데이터는 이용자의 <strong>기기 내부에만 저장</strong>되며, 개발자를 포함한 제3자가 접근할 수 없습니다.</p>

          <p><strong>2. 개인정보의 이용 및 보관</strong><br/>수집하는 개인정보가 없으므로 별도의 이용·보관·파기 절차가 존재하지 않습니다. 기기 내에 저장된 데이터는 이용자가 앱을 삭제하거나 앱 내에서 데이터를 초기화하면 함께 삭제됩니다.</p>

          <p><strong>3. 제3자 제공 및 위탁</strong><br/>본 앱은 이용자의 개인정보를 제3자에게 제공하거나 처리를 위탁하지 않습니다.</p>

          <p><strong>4. 제3자 서비스(SDK)</strong><br/>앱 구동에 필요한 운영체제(Apple App Store / Google Play) 기본 기능 외에 개인정보를 수집하는 외부 분석·광고 SDK를 사용하지 않습니다. 향후 분석·광고 등 개인정보를 처리하는 서비스를 도입할 경우, 본 방침을 개정하고 사전에 고지합니다.</p>

          <p><strong>5. 권한(Permissions)</strong><br/>본 앱이 카메라·사진·위치 등 기기 권한을 요청하는 경우, 해당 기능을 제공하기 위한 목적에 한해 <strong>기기 내에서만</strong> 사용되며 외부로 전송되지 않습니다. 권한은 기기 설정에서 언제든 철회할 수 있습니다.</p>

          <p><strong>6. 아동의 개인정보</strong><br/>본 앱은 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다.</p>

          <p><strong>7. 이용자의 권리</strong><br/>본 앱은 개인정보를 수집하지 않으므로 별도의 열람·정정·삭제 요청 대상이 없습니다. 관련 문의는 아래 연락처로 주시면 안내해 드립니다.</p>

          <p><strong>8. 개인정보 처리방침의 변경</strong><br/>본 방침은 법령·정책 또는 앱 기능 변경에 따라 개정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.</p>

          <p><strong>9. 문의처</strong><br/>개인정보 처리에 관한 문의는 <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> 로 연락 주시기 바랍니다.</p>
        </div>

        <aside class="bio-side">
          <div class="contact-block">
            <h3>Summary</h3>
            <div class="row"><span class="l">수집 항목</span><span class="v">없음</span></div>
            <div class="row"><span class="l">서버 전송</span><span class="v">없음</span></div>
            <div class="row"><span class="l">제3자 제공</span><span class="v">없음</span></div>
            <div class="row"><span class="l">시행일</span><span class="v">{EFFECTIVE_DATE}</span></div>
            <div class="row"><span class="l">문의</span><span class="v">{CONTACT_EMAIL}</span></div>
            <div class="row"><span class="l">Support</span><span class="v"><a href="#/support">지원·문의 페이지</a></span></div>
          </div>
        </aside>
      </section>

    </div>
  )
}
