/* ══════════════════════════════════════════
   متجري — app.js
   Full JS: Animations, Form, Algeria Data, Email
══════════════════════════════════════════ */

// ══════════════════════════════════════════
// 58 ولاية جزائرية مع البلديات
// ══════════════════════════════════════════
const ALGERIA = {
  "01 - أدرار": ["أدرار","أولف","تيميمون","رقان","برج باجي مختار","فنوغيل","تسابيت","زاوية كنتة"],
  "02 - الشلف": ["الشلف","تنس","بني حواء","بوقادير","بني راشد","تاوقريت","وادي قوسين","الحرشة"],
  "03 - الأغواط": ["الأغواط","أفلو","قصر الحيران","حاسي الدلاعة","حاسي الرمل","عين ماضي","تاجموت","سبقاق"],
  "04 - أم البواقي": ["أم البواقي","عين البيضاء","عين مليلة","سيقوس","مسكيانة","عين الفكرون","سوق نعمان","الرحمانية"],
  "05 - باتنة": ["باتنة","عين التوتة","بريكة","مروانة","تيمقاد","ڤيس","نقاوس","أريس","تازولت","رأس العيون","لمسان"],
  "06 - بجاية": ["بجاية","عكبو","خراطة","سيدي عيش","القصر","أميزور","تازمالت","أوقاس","تيشي","سوق الإثنين"],
  "07 - بسكرة": ["بسكرة","طولقة","أولاد جلال","سيدي عقبة","زريبة الوادي","الحاجب","عين الناقة","شتمة","لوطاية"],
  "08 - بشار": ["بشار","عبادلة","بني ونيف","القنادسة","لهمار","إيقلي","تاغيت","مريجة"],
  "09 - البليدة": ["البليدة","بوفاريك","بوقرة","مفتاح","لاربعاء","شفة","بوينان","بني مراد","شريعة","موزاية"],
  "10 - البويرة": ["البويرة","لخضارية","سور الغزلان","عين بسام","المشدالة","الأصنام","حيزر","بودربالة"],
  "11 - تمنراست": ["تمنراست","إن صالح","إن قزام","أبلسة","تازروك","إدلس"],
  "12 - تبسة": ["تبسة","بئر العاتر","الشريعة","العوينات","نقرين","حمام دباغ","الونزة","بئر مقدم"],
  "13 - تلمسان": ["تلمسان","مغنية","الغزوات","ندرومة","رمشي","باب العسة","صبدو","هنين","بني مستر"],
  "14 - تيارت": ["تيارت","قصر الشلالة","سوقر","فرندة","مهدية","عين الذهب","مشرع الصفا","رحوية"],
  "15 - تيزي وزو": ["تيزي وزو","عزازقة","دلس","لربعاء ناث إراثن","درعة البيضاء","بوغني","تيقزيرت","واضية","أقبيل"],
  "16 - الجزائر": ["الجزائر العاصمة","باب الوادي","حسين داي","الحراش","دار البيضاء","بئر خادم","قوبة","دراريا","الشراقة","بوزريعة","بئر توتة","رويبة","براقي","عين الطاية","برج الكيفان","رقاية","المحمدية","الرغاية","بن عكنون"],
  "17 - الجلفة": ["الجلفة","عين وسارة","مسعد","حاسي بحبح","بيرين","الإدريسية","عين أعرس"],
  "18 - جيجل": ["جيجل","الميلية","الطاهير","زيامة منصورية","ستارة","سيدي معروف","العوانة","بني بلعيد"],
  "19 - سطيف": ["سطيف","العلمة","عين الكبيرة","عين أرنات","عين أولمان","بوقاعة","صالح باي","درع قبيلة","أميان","إن الشير"],
  "20 - سعيدة": ["سعيدة","عين الحجر","يوب","سيدي أحمد","الحساسنة","رباهية","المعمورة"],
  "21 - سكيكدة": ["سكيكدة","عزابة","القل","الحروش","عين الشارق","بن عزوز","تمالوس","رمضان جمال"],
  "22 - سيدي بلعباس": ["سيدي بلعباس","تلاغ","مصطفى بن إبراهيم","تسالة","حاسي زهانة","سفيزف","عين ثريد","بن باديس"],
  "23 - عنابة": ["عنابة","البوني","الحجار","عين الباردة","برحال","سرايدي","شيتابي"],
  "24 - قالمة": ["قالمة","بوشقوف","هيليوبوليس","وادي الزناتي","حمام دباغ","عين بن بيضاء","خزارة"],
  "25 - قسنطينة": ["قسنطينة","عين سمارة","الخروب","حامة بوزيان","ديدوش مراد","ابن زياد","زيغود يوسف"],
  "26 - المدية": ["المدية","بوعيش البراقي","قصر البخاري","بني سليمان","تابلاط","عين بوسيف","أولاد عنتر"],
  "27 - مستغانم": ["مستغانم","عين تادلس","عين النويصي","مسرة","سيدية","بوقيرات","سيرات"],
  "28 - المسيلة": ["المسيلة","بوسعادة","سيدي عيسى","مقرة","عين الملح","حمام ضلعة","ولاد خبانة"],
  "29 - معسكر": ["معسكر","سيق","بوهنية","وادي العبطة","عين فكان","غريس","تيزي"],
  "30 - ورقلة": ["ورقلة","حاسي مسعود","تقرت","ڤمار","روڤاس","النقوسة","عين البيضاء"],
  "31 - وهران": ["وهران","السانية","بئر الجير","عين الترك","أرزيو","بتيوة","مرسى الكبير","الكرمة","حاسي بن عقة"],
  "32 - البيض": ["البيض","روڤاصة","بريزينة","بوعلام","الأبيض سيدي الشيخ","ستيتن","آريق"],
  "33 - إليزي": ["إليزي","جانت","إن أمناس","برج الحواس"],
  "34 - برج بو عريريج": ["برج بو عريريج","رأس الوادي","المنصورة","الأنصر","مجانة","جعافرة","بئر القصب"],
  "35 - بومرداس": ["بومرداس","خميس الخشنة","زموري","بودواو","تهانيا","إيسر","قورصو","دلس"],
  "36 - الطارف": ["الطارف","القالة","بن مهيدي","بوقوص","دريان","بسباس","الشيحاني"],
  "37 - تندوف": ["تندوف","أم العسل"],
  "38 - تيسمسيلت": ["تيسمسيلت","ثنية الحد","برج الأمير عبد القادر","ولاد بسام","الأربعاء"],
  "39 - الوادي": ["الوادي","ڤمار","الرباح","الرقيبة","مقران","حمراية","دوار العش"],
  "40 - خنشلة": ["خنشلة","عين توتة","قايس","شيشار","الولجة","ببار","خيران"],
  "41 - سوق أهراس": ["سوق أهراس","سدراتة","تاورة","عين الزانة","م'داورش","وادي الكبريت"],
  "42 - تيبازة": ["تيبازة","قليعة","بواسماعيل","شرشال","حجوط","عين تاقروايت","فوكة","الدامو"],
  "43 - ميلة": ["ميلة","شلغوم العيد","فرجيوة","عين مليلة","سيدي خليفة","تلرغمة","أميرة أروا"],
  "44 - عين الدفلى": ["عين الدفلى","مليانة","خميس مليانة","العطاف","العبادية","برج الأمير خالد"],
  "45 - النعامة": ["النعامة","مشرية","عين الصفراء","صفيصيفة","تيوت","أسلا","قصدير"],
  "46 - عين تموشنت": ["عين تموشنت","حمام بوحجر","العامرية","بني صاف","المالح","ولحاجة الغرابة"],
  "47 - غرداية": ["غرداية","بريان","ڤرارة","متليلي","العطف","زلفانة","داية بن ضحوة"],
  "48 - غليزان": ["غليزان","عين تاريك","جديوية","وادي رهيو","مندس","مازونة","يلل"],
  "49 - تيميمون": ["تيميمون","أوقروت","أولاد سعيد","شاروين","تينركوك"],
  "50 - برج باجي مختار": ["برج باجي مختار","تيميياوين"],
  "51 - أولاد جلال": ["أولاد جلال","سيدي خالد","رأس الميعاد","الحاجرة"],
  "52 - بني عباس": ["بني عباس","إقلي","قصابي","كرزاز","تيمودي"],
  "53 - إن صالح": ["إن صالح","فڤارة الزوا","إن ڤار"],
  "54 - إن قزام": ["إن قزام","تين زاواتين"],
  "55 - تقرت": ["تقرت","تماسين","نزلة","مڤارين","بن عاصور"],
  "56 - جانت": ["جانت","برج الحواس"],
  "57 - المغير": ["المغير","جامعة","سيدي خالد"],
  "58 - المنيعة": ["المنيعة","حاسي ڤارة","برياي"]
};

const UNIT_PRICE = 5490;
let selectedRating = 0;

// ══════════════════════════════════════════
// LOADER
// ══════════════════════════════════════════
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('out');
    setTimeout(() => loader.style.display = 'none', 700);
  }, 2300);
});

// ══════════════════════════════════════════
// NAVBAR SCROLL
// ══════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ══════════════════════════════════════════
// HAMBURGER
// ══════════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// ══════════════════════════════════════════
// SMOOTH SCROLL
// ══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

// ══════════════════════════════════════════
// PRODUCT IMAGE GALLERY
// ══════════════════════════════════════════
document.querySelectorAll('.hero-img-thumbs .thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const main = document.getElementById('hero-main-img');
    main.style.opacity = '0';
    main.style.transform = 'scale(.97)';
    main.style.transition = 'all .25s ease';
    setTimeout(() => {
      main.src = thumb.dataset.src;
      main.style.opacity = '1';
      main.style.transform = 'scale(1)';
    }, 250);
  });
});

// ══════════════════════════════════════════
// FAQ ACCORDION
// ══════════════════════════════════════════
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ══════════════════════════════════════════
// ANIMATE ON SCROLL (بسيط بدون مكتبة)
// ══════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .review-card, .faq-item, .warranty-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

// ══════════════════════════════════════════
// STAR RATING (عملاء يقيّمون)
// ══════════════════════════════════════════
const starPicks = document.querySelectorAll('.star-pick');
starPicks.forEach(star => {
  star.addEventListener('mouseenter', () => {
    const val = parseInt(star.dataset.val);
    starPicks.forEach((s, i) => s.classList.toggle('active', i < val));
  });
  star.addEventListener('mouseleave', () => {
    starPicks.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
  });
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.val);
    starPicks.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
  });
});

// إرسال التقييم
document.getElementById('submit-review').addEventListener('click', () => {
  if (selectedRating === 0) {
    alert('الرجاء اختيار عدد النجوم أولاً');
    return;
  }
  const name = document.getElementById('review-name').value.trim() || 'عميل';
  const text = document.getElementById('review-text').value.trim();
  if (!text) {
    alert('الرجاء كتابة رأيك في المنتج');
    return;
  }

  // إضافة التقييم للصفحة
  const stars = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);
  const initials = name.slice(0, 2);
  const card = document.createElement('div');
  card.className = 'review-card';
  card.style.border = '1px solid var(--gold-border)';
  card.innerHTML = `
    <div class="review-stars">${stars}</div>
    <p>"${text}"</p>
    <div class="reviewer">
      <div class="rev-av">${initials}</div>
      <div><strong>${name}</strong><span>منذ لحظات</span></div>
    </div>`;
  document.getElementById('reviews-grid').prepend(card);
  setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);

  // إعادة تعيين
  document.getElementById('review-name').value = '';
  document.getElementById('review-text').value = '';
  selectedRating = 0;
  starPicks.forEach(s => s.classList.remove('active'));

  alert('شكراً! تم إضافة تقييمك بنجاح 🌟');
});

// ══════════════════════════════════════════
// POPULATE WILAYAS
// ══════════════════════════════════════════
function populateWilayas() {
  const sel = document.getElementById('f-wilaya');
  Object.keys(ALGERIA).forEach(w => {
    const opt = document.createElement('option');
    opt.value = w; opt.textContent = w;
    sel.appendChild(opt);
  });
}
populateWilayas();

document.getElementById('f-wilaya').addEventListener('change', function () {
  const bSel = document.getElementById('f-baladia');
  bSel.innerHTML = '<option value="">— اختر البلدية —</option>';
  if (!this.value) { bSel.disabled = true; return; }
  (ALGERIA[this.value] || []).forEach(m => {
    const o = document.createElement('option');
    o.value = m; o.textContent = m; bSel.appendChild(o);
  });
  bSel.disabled = false;
  document.getElementById('err-wilaya').textContent = '';
});

// ══════════════════════════════════════════
// DELIVERY METHOD TOGGLE
// ══════════════════════════════════════════
document.querySelectorAll('input[name="delivery"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const ag = document.getElementById('address-group');
    if (this.value === 'home') {
      ag.style.display = '';
    } else {
      ag.style.display = 'none';
      document.getElementById('f-address').value = '';
      document.getElementById('err-address').textContent = '';
      document.getElementById('f-address').classList.remove('invalid');
    }
  });
});

// ══════════════════════════════════════════
// ORDER POPUP
// ══════════════════════════════════════════
function openOrder() {
  updateTotal();
  const ov = document.getElementById('order-overlay');
  ov.classList.remove('hidden');
  requestAnimationFrame(() => ov.classList.add('visible'));
  document.body.style.overflow = 'hidden';
}
function closeOrder() {
  const ov = document.getElementById('order-overlay');
  ov.classList.remove('visible');
  setTimeout(() => { ov.classList.add('hidden'); document.body.style.overflow = ''; }, 350);
}

['hero-order-btn', 'nav-order-btn', 'warranty-order-btn', 'cta-order-btn'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', openOrder);
});
document.getElementById('popup-close').addEventListener('click', closeOrder);
document.getElementById('order-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('order-overlay')) closeOrder();
});

// QUANTITY
const qtyInput = document.getElementById('f-qty');
document.getElementById('qty-minus').addEventListener('click', () => {
  if (parseInt(qtyInput.value) > 1) { qtyInput.value = parseInt(qtyInput.value) - 1; updateTotal(); }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  if (parseInt(qtyInput.value) < 99) { qtyInput.value = parseInt(qtyInput.value) + 1; updateTotal(); }
});
function updateTotal() {
  const qty = Math.max(1, parseInt(qtyInput.value) || 1);
  const total = (UNIT_PRICE * qty).toLocaleString('fr-DZ') + ' DA';
  document.getElementById('total-val').textContent = total;
}

// ══════════════════════════════════════════
// FORM VALIDATION
// ══════════════════════════════════════════
function validateField(id, errId, fn, msg) {
  const el = document.getElementById(id);
  const val = el.tagName === 'SELECT' ? el.value : el.value.trim();
  if (!fn(val)) {
    el.classList.add('invalid');
    document.getElementById(errId).textContent = msg;
    el.animate([{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}], {duration:300});
    return false;
  }
  el.classList.remove('invalid');
  document.getElementById(errId).textContent = '';
  return true;
}

// SUBMIT
document.getElementById('submit-btn').addEventListener('click', async () => {
  const isHome = document.querySelector('input[name="delivery"]:checked').value === 'home';

  const ok1 = validateField('f-fname', 'err-fname', v => v.length >= 2, 'أدخل الاسم الأول');
  const ok2 = validateField('f-lname', 'err-lname', v => v.length >= 2, 'أدخل اسم العائلة');
  const ok3 = validateField('f-phone', 'err-phone', v => /^(05|06|07)\d{8}$/.test(v.replace(/\s/g,'')), 'أدخل رقم هاتف جزائري صحيح (05x/06x/07x)');
  const ok4 = validateField('f-wilaya', 'err-wilaya', v => v !== '', 'اختر الولاية');
  const ok5 = validateField('f-baladia', 'err-baladia', v => v !== '', 'اختر البلدية');
  const ok6 = !isHome || validateField('f-address', 'err-address', v => v.length >= 5, 'أدخل عنوان المنزل كاملاً');

  if (!ok1 || !ok2 || !ok3 || !ok4 || !ok5 || !ok6) {
    document.querySelector('.invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const fname = document.getElementById('f-fname').value.trim();
  const lname = document.getElementById('f-lname').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const wilaya = document.getElementById('f-wilaya').value;
  const baladia = document.getElementById('f-baladia').value;
  const delivery = document.querySelector('input[name="delivery"]:checked').value === 'home' ? 'توصيل للمنزل' : 'أقرب مكتب';
  const address = document.getElementById('f-address').value.trim() || '—';
  const qty = document.getElementById('f-qty').value;
  const total = document.getElementById('total-val').textContent;

  const btn = document.getElementById('submit-btn');
  btn.textContent = '⏳ جاري الإرسال...';
  btn.disabled = true;

  try {
    await fetch('https://formspree.io/f/xwvzjeoq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        '👤 الاسم': fname + ' ' + lname,
        '📞 الهاتف': phone,
        '📍 الولاية': wilaya,
        '🏙️ البلدية': baladia,
        '🚚 طريقة التوصيل': delivery,
        '🏠 العنوان': address,
        '📦 الكمية': qty,
        '💰 المجموع': total,
        '_subject': `🛒 طلب جديد من ${fname} ${lname} — ${wilaya}`
      })
    });
  } catch (e) {
    console.error(e);
  }

  btn.textContent = '✅ تأكيد الطلب';
  btn.disabled = false;
  closeOrder();
  resetForm();

  // شاشة الشكر
  document.getElementById('thank-details').innerHTML = `
    <strong>الاسم:</strong> ${fname} ${lname}<br/>
    <strong>الهاتف:</strong> ${phone}<br/>
    <strong>الولاية:</strong> ${wilaya}<br/>
    <strong>البلدية:</strong> ${baladia}<br/>
    <strong>طريقة التوصيل:</strong> ${delivery}<br/>
    ${isHome ? `<strong>العنوان:</strong> ${address}<br/>` : ''}
    <strong>الكمية:</strong> ${qty} — <strong>المجموع:</strong> ${total}`;

  const to = document.getElementById('thank-overlay');
  to.classList.remove('hidden');
  requestAnimationFrame(() => to.classList.add('visible'));
  document.body.style.overflow = 'hidden';
});

document.getElementById('thank-close').addEventListener('click', () => {
  const to = document.getElementById('thank-overlay');
  to.classList.remove('visible');
  setTimeout(() => { to.classList.add('hidden'); document.body.style.overflow = ''; }, 350);
});

function resetForm() {
  ['f-fname','f-lname','f-phone','f-address'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('invalid'); }
  });
  ['f-wilaya','f-baladia'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('invalid'); }
  });
  document.getElementById('f-baladia').disabled = true;
  document.getElementById('f-baladia').innerHTML = '<option value="">— اختر الولاية أولاً —</option>';
  document.querySelectorAll('.ferr').forEach(e => e.textContent = '');
  qtyInput.value = 1; updateTotal();
  document.querySelector('input[name="delivery"][value="home"]').checked = true;
  document.getElementById('address-group').style.display = '';
}

console.log('%c متجري ','background:#C9A84C;color:#000;font-size:1.2rem;padding:.3rem .8rem;border-radius:4px;font-weight:bold;', '\n🛒 One Product Store — Algeria 🇩🇿');
