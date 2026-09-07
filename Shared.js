/* ==========================================================
   🌴 BALI 旅遊小書 — 共用互動（四頁通用）
   1. 圖片放大檢視 (Lightbox)：點任何相簿縮圖 → 全螢幕、可左右滑、點圖放大
   2. iOS 主畫面 App 模式：站內連結維持在 App 內開啟
   ========================================================== */

(function () {
  // ---------- 1. Lightbox ----------
  let lbEl = null;

  function buildLightbox() {
    lbEl = document.createElement('div');
    lbEl.className = 'lb-overlay';
    lbEl.innerHTML = `
      <div class="lb-top">
        <div class="lb-count">1 / 1</div>
        <button class="lb-close" aria-label="關閉">✕</button>
      </div>
      <div class="lb-track"></div>
      <div class="lb-caption"></div>
      <div class="lb-hint">左右滑動切換・點圖片放大 / 縮小</div>
    `;
    document.body.appendChild(lbEl);

    const track = lbEl.querySelector('.lb-track');

    lbEl.querySelector('.lb-close').addEventListener('click', closeLightbox);

    // 點圖片本身 → 放大/縮小；點圖片以外的黑底 → 關閉
    track.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        e.target.closest('.lb-slide').classList.toggle('zoomed');
      } else {
        closeLightbox();
      }
    });

    // 滑動時更新張數與說明
    track.addEventListener('scroll', () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      updateMeta(idx);
    }, { passive: true });
  }

  function updateMeta(idx) {
    const slides = lbEl.querySelectorAll('.lb-slide');
    const s = slides[idx];
    if (!s) return;
    lbEl.querySelector('.lb-count').innerText = `${idx + 1} / ${slides.length}`;
    lbEl.querySelector('.lb-caption').innerText = s.dataset.caption || '';
  }

  // images: [{src, caption}], startIdx: 從第幾張開啟
  window.openLightbox = function (images, startIdx = 0) {
    if (!lbEl) buildLightbox();
    const track = lbEl.querySelector('.lb-track');
    track.innerHTML = images.map(img => `
      <div class="lb-slide" data-caption="${(img.caption || '').replace(/"/g, '&quot;')}">
        <img src="${img.src}" alt="">
      </div>
    `).join('');
    lbEl.classList.add('show');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      track.scrollLeft = startIdx * track.clientWidth;
      updateMeta(startIdx);
    });
  };

  function closeLightbox() {
    lbEl.classList.remove('show');
    document.body.style.overflow = '';
  }

  // 自動綁定：點任何 .carousel-track 裡的圖片 → 開啟該相簿的 Lightbox
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.carousel-track img');
    if (!img) return;
    e.stopPropagation();
    const track = img.closest('.carousel-track');
    const slides = [...track.querySelectorAll('.carousel-slide')];
    const images = slides.map(s => ({
      src: s.querySelector('img').getAttribute('src'),
      caption: s.querySelector('.carousel-caption') ? s.querySelector('.carousel-caption').innerText : '',
    }));
    const startIdx = slides.indexOf(img.closest('.carousel-slide'));
    window.openLightbox(images, Math.max(0, startIdx));
  }, true);

  // ---------- 2. iOS 主畫面 App：站內連結不跳出 ----------
  document.addEventListener('click', function (event) {
    let target = event.target;
    while (target && target.tagName !== 'A') target = target.parentNode;
    if (target && target.tagName === 'A' && target.host === window.location.host && !target.target) {
      event.preventDefault();
      window.location.href = target.href;
    }
  });
})();
