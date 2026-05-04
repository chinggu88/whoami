export default function About() {
  return (
     <div class="tab-panel active" data-panel="about">
 
    <section class="hero">
      <div>
        <div class="hero-eyebrow"><span class="pulse"></span>Flutter Developer · Seoul · Open</div>
        <h1 class="serif">어쩌면<br/>지금 당신도,<br/><em>제가 만든 앱</em><br/>보고 있을지도요.</h1>
        <p class="tagline">환테크부터 야구단까지 — Flutter 한 가지로 결제·본인인증·차트·IoT·LLM 매매까지 다양한 도메인의 모바일 제품을 출시·운영해 온 9년차 앱 개발자.</p>
      </div>
      <aside class="hero-side">
        {/* <!-- 프로필 사진: src에 본인 사진 경로(예: "profile.jpg")를 넣으면 자동으로 placeholder가 사라집니다 --> */}
        <div class="hero-portrait">
          <img src="profile.jpg" alt="이강훈 프로필 사진" onerror="this.parentElement.classList.add('no-image'); this.remove();"/>
          <div class="portrait-placeholder">
            <span class="ph-initial serif">이</span>
            <span class="ph-caption">PHOTO PLACEHOLDER</span>
            <span class="ph-text">아래 코드의 <code>profile.jpg</code> 부분에<br/>본인 사진 파일명을 넣어주세요.</span>
          </div>
        </div>
 
        <div class="meta-block">
          <span class="lbl">Currently</span>
          <span class="val serif">커런시유나이티드<br/>개발 PM</span>
        </div>
        <div class="meta-block"><span class="lbl">Experience</span><span class="val">9년 3개월</span></div>
        <div class="meta-block"><span class="lbl">Education</span><span class="val">경북대학교 대학원 (석사)</span></div>
        <div class="meta-block"><span class="lbl">Email</span><span class="val">Chinggu88@gmail.com</span></div>
        <div class="meta-block"><span class="lbl">Location</span><span class="val">서울 강서구</span></div>
      </aside>
    </section>
 
   <section style={{ marginBottom: 120 }}>
      <div class="sec-num">01 / Numbers</div>
      <h2 class="sec-title serif"><em>Impact</em>, in numbers.</h2>
      <div class="metrics">
        <div class="metric"><div class="num serif">22<em>×</em></div><div class="lbl">cuunit 일거래액 성장</div><div class="sub">30억 → 670억</div></div>
        <div class="metric"><div class="num serif">10<em>K+</em></div><div class="lbl">cuunit MAU</div><div class="sub">5천 → 1만</div></div>
        <div class="metric"><div class="num serif">100<em>K+</em></div><div class="lbl">야구단 앱 다운로드</div><div class="sub">AOS · iOS each</div></div>
        <div class="metric"><div class="num serif">25<em>K</em></div><div class="lbl">DAU</div><div class="sub">일 접속 5만</div></div>
      </div>
    </section>
 
    <section class="keywords-section">
      <div class="sec-num">02 / Keywords</div>
      <h2 class="sec-title serif"><em>What</em> defines me.</h2>
      <div class="keywords">
        <span class="hl">Flutter</span>
        <span>·</span><span>9년차</span>
        <span>·</span><span class="hl">앱개발 PM</span>
        <span>·</span><span>환테크</span>
        <span>·</span><span>야구단 앱</span>
        <span>·</span><span>거래소</span>
        <span>·</span><span class="hl">일거래액 670억</span>
        <span>·</span><span>다운로드 10만+</span>
        <span>·</span><span>LLM 매매</span>
        <span>·</span><span>Native 위젯</span>
        <span>·</span><span>FX 자동거래</span>
        <span>·</span><span>클로드코드</span>
        <span>·</span><span>바이브코딩</span>
        <span>·</span><span>석사</span>
      </div>
    </section>
 
    <section>
      <div class="sec-num">03 / About</div>
      <h2 class="sec-title serif"><em>About</em> me.</h2>
      <div class="bio">
        <div class="bio-text">
          <p class="serif">제품을 만들고, 운영하고, 성장시킵니다.</p>
          <p>2016년 첫 커리어를 시작한 이래로 <strong>9년 3개월</strong> 동안 한 번도 개발 현장을 떠난 적이 없습니다. 지노시스템에서 SI로 시작해 거래소 모바일팀 팀장, 야구 구단 공식 앱 1인 개발자를 거쳐 지금은 커런시유나이티드의 개발 PM으로 cuunit을 운영하고 있습니다.</p>
          <p>출시 시점 일거래액 30억이던 cuunit은 현재 <strong>670억(22배)</strong>까지 성장했고, 사용자도 두 배가 되었습니다. 안드로이드 네이티브 위젯, 본인인증, 농협 자동입출금, <strong>LLM 자연어 매매</strong>까지 제품 핵심에 직접 기여하는 코드를 씁니다.</p>
          <p>최근에는 Claude Code 에이전트로 기획·디자인·개발 3인 체제의 바이브코딩을 실험하며, AI 시대의 개발 방식을 앞서 검증하고 있습니다.</p>
        </div>
        <aside class="bio-side">
          <div class="contact-block">
            <h3>Quick Info</h3>
            <div class="row"><span class="l">Email</span><span class="v">Chinggu88@gmail.com</span></div>
            <div class="row"><span class="l">Phone</span><span class="v">010-2204-9564</span></div>
            <div class="row"><span class="l">Location</span><span class="v">서울 강서구</span></div>
            <div class="row"><span class="l">Status</span><span class="v">재직중</span></div>
          </div>
        </aside>
      </div>
    </section>
 
    {/* <!-- ===== Contact Section ===== --> */}
    <section class="contact-section" id="contact">
      <div class="sec-num">04 / Contact</div>
      <h2 class="sec-title serif"><em>Let&apos;s</em> talk.</h2>
      <div class="contact-intro">
          <h3 class="serif">새로운 <em>제안</em>이나<br/>커피챗 모두 환영합니다.</h3>
          <p>현재 커런시유나이티드에서 재직 중이지만, 흥미로운 프로젝트나 기회는 언제든 듣고 있어요. 가벼운 메시지부터 채용 제안까지 모두 환영합니다. 보통 24시간 이내에 답변드립니다.</p>
          <ul class="quick-links">
            <li><span class="l">Email</span><a class="v" href="mailto:Chinggu88@gmail.com">Chinggu88@gmail.com</a></li>
            <li><span class="l">Phone</span><a class="v" href="tel:01022049564">010-2204-9564</a></li>
            <li><span class="l">Location</span><span class="v">서울 강서구</span></li>
            <li><span class="l">Response</span><span class="v">~ 24시간 이내</span></li>
          </ul>
        </div>
    </section>
  </div>
  )
}
