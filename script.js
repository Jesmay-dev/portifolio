/* =========================================================
   1) LIENS DES RÉSEAUX — Mettez ici vos liens (url) pour qu'ils
   soient visibles par TOUS les visiteurs. Exemple :
   url: 'https://facebook.com/votre.page'
   (Vous pouvez aussi les changer avec le bouton « Modifier les liens »,
   mais ceux-là ne restent que dans VOTRE navigateur.)
   ========================================================= */
const SOCIALS = [
  { id:'facebook',  name:'Facebook',  icon:'fa-brands fa-facebook-f',  color:'#1877f2', url:'' },
  { id:'instagram', name:'Instagram', icon:'fa-brands fa-instagram',   color:'#e1306c', url:'' },
  { id:'whatsapp',  name:'WhatsApp',  icon:'fa-brands fa-whatsapp',    color:'#25d366', url:'' },
  { id:'linkedin',  name:'LinkedIn',  icon:'fa-brands fa-linkedin-in', color:'#0a66c2', url:'' },
  { id:'github',    name:'GitHub',    icon:'fa-brands fa-github',      color:'#8b5cf6', url:'' },
  { id:'x',         name:'X',         icon:'fa-brands fa-x-twitter',   color:'#111827', url:'' },
  { id:'youtube',   name:'YouTube',   icon:'fa-brands fa-youtube',     color:'#ff0000', url:'' },
  { id:'tiktok',    name:'TikTok',    icon:'fa-brands fa-tiktok',      color:'#fe2c55', url:'' },
  { id:'telegram',  name:'Telegram',  icon:'fa-brands fa-telegram',    color:'#229ed9', url:'' }
];

/* Votre adresse email (visible par TOUS les visiteurs). Exemple :
   const CONTACT_EMAIL = 'votre.nom@gmail.com';
   Sinon, utilisez le bouton ✎ à côté de l'email dans la section Contact. */
const CONTACT_EMAIL = 'nihorimberejesusmarie5@gmail.com';
/* Votre CV (ex : 'cv.pdf' placé à côté de index.html) et votre numéro WhatsApp
   avec l'indicatif du pays, sans « + » (ex : '25779000000'). Ou utilisez les boutons ✎. */
const CV_URL = '';
const WHATSAPP = '+25765899834';

/* =========================================================
   2) TRADUCTIONS — FR / EN / RN (Kirundi) / SW (Swahili)
   ========================================================= */
const DICT = {
  fr: {
    logo:"Jej.", chip1:"HTML", chip2:"CSS", chip3:"JavaScript",
    nav_profile:"Profil", nav_photos:"Photos", nav_graphics:"Graphismes", nav_projects:"Projets", nav_follow:"Suivez-moi", nav_contact:"Contact",
    avatar_hint:"+ Photo", tag:"Bonjour, je suis", name:"Votre nom", role:"Étudiant en Génie Informatique",
    bio:"Écrivez ici une courte présentation : vos études, vos compétences et ce que vous aimez. Cliquez sur ce texte pour le modifier.",
    photos_title:"Mes photos", add_photo:"+ Ajouter une photo",
    p1t:"Titre de la photo 1", p1d:"Description de la première photo.",
    p2t:"Titre de la photo 2", p2d:"Description de la deuxième photo.",
    p3t:"Titre de la photo 3", p3d:"Description de la troisième photo.",
    gfx_title:"Mes graphismes", gfx_add:"+ Ajouter une image", gfx_hint:"Vous pouvez en choisir plusieurs à la fois.", gfx_cap:"Description…",
    projects_title:"Mes projets", proj_add:"+ Ajouter un projet", proj_title_def:"Titre du projet", proj_desc_def:"Décrivez votre projet ici.",
    proj_view:"Voir le projet", proj_img:"+ Image",
    follow_title:"Suivez-moi", follow_hint:"Cliquez sur un logo pour ouvrir ma page.",
    follow_edit:"✎ Modifier les liens", follow_done:"✔ Terminer",
    prompt_url:"Collez le lien de votre page :", confirm_del:"Supprimer ?", storage_full:"Stockage plein. Utilisez des images plus petites.",
    nav_langs:"Langues", langs_title:"Mes langues", langs_hint:"Niveau de maîtrise", langs_edit:"✎ Modifier les niveaux", langs_edit_done:"✔ Terminer",
    lang_add:"+ Ajouter une langue", lang_new:"Nouvelle langue",
    lvl1:"Débutant", lvl2:"Élémentaire", lvl3:"Intermédiaire", lvl4:"Avancé", lvl5:"Courant / Natif",
    nav_prog:"Programmation", prog_title:"Langages de programmation", prog_hint:"Niveau de maîtrise", prog_add:"+ Ajouter un langage", prog_new:"Nouveau langage",
    mail_send:"Écrire par Gmail", mail_set:"Cliquez sur ✎ pour ajouter votre email", mail_prompt:"Entrez votre adresse email :", mail_invalid:"Adresse email invalide.",
    owner_mode:"Mode propriétaire", owner_export:"⬇ Exporter (content.js)", owner_changepw:"🔑 Mot de passe", owner_lock:"🔒 Verrouiller", owner_pw:"Mot de passe propriétaire", owner_new:"Créez votre mot de passe (4 caractères min.)", owner_repeat:"Répétez le mot de passe", owner_wrong:"Mot de passe incorrect.", owner_mismatch:"Les mots de passe ne correspondent pas.", owner_short:"Mot de passe trop court.", owner_saved:"Mot de passe enregistré. Exportez à nouveau content.js pour le publier.", owner_exported:"content.js téléchargé. Placez-le à côté de index.html sur votre hébergement.", owner_media_warn:"fichier(s) audio/vidéo local(aux) non exporté(s). Utilisez des liens pour les rendre publics.",
    nav_serv:"Services", serv_title:"Ce que je peux faire pour vous", serv_add:"+ Ajouter un service", nav_path:"Parcours", path_title:"Mon parcours", path_add:"+ Ajouter une étape", new_title:"Titre", new_place:"Établissement", new_desc:"Description courte.", cta_contact:"Me contacter", cta_cv:"Télécharger mon CV", cv_set:"✎ Ajouter le CV", cv_prompt:"Lien ou nom du fichier de votre CV (ex : cv.pdf) :", cnt_projects:"Projets", cnt_prog:"Langages de programmation", cnt_langs:"Langues parlées", form_name:"Votre nom", form_msg:"Votre message", form_send:"Envoyer par Gmail", wa_prompt:"Numéro WhatsApp avec l'indicatif du pays (ex : 25779000000) :",
    owner_hint:"Du contenu non publié existe sur cet appareil (invisible pour les visiteurs).", owner_unlock:"🔒 Déverrouiller",
    owner_show:"Afficher le mot de passe",
    nav_media:"Média", media_title:"Audio & vidéo", media_add_file:"+ Ajouter audio / vidéo", media_add_link:"+ Lien (YouTube, MP3, MP4…)",
    media_hint:"Les fichiers restent dans votre navigateur. Pour le site public, utilisez un lien.", media_cap:"Description…",
    prompt_media_link:"Collez le lien (YouTube, Vimeo, .mp3, .mp4) :",
    contact_title:"Contact", mail:"Email : votre.email@exemple.com", tel:"Tél : +257 00 00 00 00", loc:"Burundi", foot:"NJM"
  },
  en: {
    nav_profile:"Profile", nav_photos:"Photos", nav_graphics:"Graphics", nav_projects:"Projects", nav_follow:"Follow me", nav_contact:"Contact",
    avatar_hint:"+ Photo", tag:"Hello, I'm", name:"Your name", role:"Computer Engineering Student",
    bio:"Write a short introduction here: your studies, your skills and what you love. Click this text to edit it.",
    photos_title:"My photos", add_photo:"+ Add a photo",
    p1t:"Photo 1 title", p1d:"Description of the first photo.",
    p2t:"Photo 2 title", p2d:"Description of the second photo.",
    p3t:"Photo 3 title", p3d:"Description of the third photo.",
    gfx_title:"My graphics", gfx_add:"+ Add an image", gfx_hint:"You can select several at once.", gfx_cap:"Description…",
    projects_title:"My projects", proj_add:"+ Add a project", proj_title_def:"Project title", proj_desc_def:"Describe your project here.",
    proj_view:"View project", proj_img:"+ Image",
    follow_title:"Follow me", follow_hint:"Click a logo to open my page.",
    follow_edit:"✎ Edit links", follow_done:"✔ Done",
    prompt_url:"Paste the link of your page:", confirm_del:"Delete?", storage_full:"Storage full. Use smaller images.",
    nav_langs:"Languages", langs_title:"My languages", langs_hint:"Proficiency level", langs_edit:"✎ Edit levels", langs_edit_done:"✔ Done",
    lang_add:"+ Add a language", lang_new:"New language",
    lvl1:"Beginner", lvl2:"Elementary", lvl3:"Intermediate", lvl4:"Advanced", lvl5:"Fluent / Native",
    nav_prog:"Programming", prog_title:"Programming languages", prog_hint:"Proficiency level", prog_add:"+ Add a language", prog_new:"New language",
    mail_send:"Write via Gmail", mail_set:"Click ✎ to add your email", mail_prompt:"Enter your email address:", mail_invalid:"Invalid email address.",
    owner_mode:"Owner mode", owner_export:"⬇ Export (content.js)", owner_changepw:"🔑 Password", owner_lock:"🔒 Lock", owner_pw:"Owner password", owner_new:"Create your password (min. 4 characters)", owner_repeat:"Repeat the password", owner_wrong:"Wrong password.", owner_mismatch:"Passwords do not match.", owner_short:"Password too short.", owner_saved:"Password saved. Export content.js again to publish it.", owner_exported:"content.js downloaded. Put it next to index.html on your hosting.", owner_media_warn:"local audio/video file(s) not exported. Use links to make them public.",
    nav_serv:"Services", serv_title:"What I can do for you", serv_add:"+ Add a service", nav_path:"Journey", path_title:"My journey", path_add:"+ Add a step", new_title:"Title", new_place:"Institution", new_desc:"Short description.", cta_contact:"Contact me", cta_cv:"Download my CV", cv_set:"✎ Add your CV", cv_prompt:"Link or file name of your CV (e.g. cv.pdf):", cnt_projects:"Projects", cnt_prog:"Programming languages", cnt_langs:"Spoken languages", form_name:"Your name", form_msg:"Your message", form_send:"Send via Gmail", wa_prompt:"WhatsApp number with country code (e.g. 25779000000):",
    owner_hint:"There is unpublished content on this device (hidden from visitors).", owner_unlock:"🔒 Unlock",
    owner_show:"Show password",
    nav_media:"Media", media_title:"Audio & video", media_add_file:"+ Add audio / video", media_add_link:"+ Link (YouTube, MP3, MP4…)",
    media_hint:"Files stay in your browser. For the public site, use a link.", media_cap:"Description…",
    prompt_media_link:"Paste the link (YouTube, Vimeo, .mp3, .mp4):",
    contact_title:"Contact", mail:"Email: your.email@example.com", tel:"Phone: +257 00 00 00 00", loc:"Burundi", foot:"NJM"
  },
  rn: {
    nav_profile:"Umwirondoro", nav_photos:"Amafoto", nav_graphics:"Ibishushanyo", nav_projects:"Imishinga", nav_follow:"Nkurikira", nav_contact:"Tuvugane",
    avatar_hint:"+ Ifoto", tag:"Mwaramutse, nitwa", name:"Izina ryawe", role:"Umunyeshuri muri Génie Informatique",
    bio:"Andika hano ibikuranga: ivyo wiga, ivyo uzi gukora n'ivyo ukunda. Kanda kuri iyi nyandiko kugira uyihindure.",
    photos_title:"Amafoto yanje", add_photo:"+ Shiramwo ifoto",
    p1t:"Umutwe w'ifoto ya 1", p1d:"Ibisobanuro vy'ifoto ya mbere.",
    p2t:"Umutwe w'ifoto ya 2", p2d:"Ibisobanuro vy'ifoto ya kabiri.",
    p3t:"Umutwe w'ifoto ya 3", p3d:"Ibisobanuro vy'ifoto ya gatatu.",
    gfx_title:"Ibishushanyo vyanje", gfx_add:"+ Ongeraho ishusho", gfx_hint:"Urashobora guhitamwo amashusho menshi icarimwe.", gfx_cap:"Ibisobanuro…",
    projects_title:"Imishinga yanje", proj_add:"+ Ongeraho umushinga", proj_title_def:"Umutwe w'umushinga", proj_desc_def:"Andika hano ivyerekeye umushinga wawe.",
    proj_view:"Raba umushinga", proj_img:"+ Ishusho",
    follow_title:"Nkurikira", follow_hint:"Kanda ku kirango (logo) kugira ushike ku rupapuro rwanje.",
    follow_edit:"✎ Hindura links", follow_done:"✔ Birangiye",
    prompt_url:"Shiramwo link y'urupapuro rwawe:", confirm_del:"Urashaka kubisiba?", storage_full:"Ububiko bwuzuye. Koresha amafoto mato.",
    nav_langs:"Indimi", langs_title:"Indimi zanje", langs_hint:"Urugero nzi ururimi", langs_edit:"✎ Hindura urugero", langs_edit_done:"✔ Birangiye",
    lang_add:"+ Ongeraho ururimi", lang_new:"Ururimi rushasha",
    lvl1:"Ndatangura", lvl2:"Hasi gato", lvl3:"Hagati", lvl4:"Hejuru", lvl5:"Ndarwuzi neza / Kavukire",
    nav_prog:"Porogaramu", prog_title:"Indimi za porogaramu", prog_hint:"Urugero nzi ururimi", prog_add:"+ Ongeraho ururimi", prog_new:"Ururimi rushasha",
    mail_send:"Andikire kuri Gmail", mail_set:"Kanda ✎ kugira ushiremwo email yawe", mail_prompt:"Andika adresi ya email yawe:", mail_invalid:"Email si yo.",
    owner_mode:"Admin", owner_export:"⬇ Sohora (content.js)", owner_changepw:"🔑 Ijambo ry'ibanga", owner_lock:"🔒 Funga", owner_pw:"Ijambo ry'ibanga rya admin", owner_new:"Rema ijambo ry'ibanga (nibura inyuguti 4)", owner_repeat:"Subiramwo ijambo ry'ibanga", owner_wrong:"Ijambo ry'ibanga si ryo.", owner_mismatch:"Amajambo ntaruye.", owner_short:"Ijambo ry'ibanga ni rigufi.", owner_saved:"Ijambo ry'ibanga ribitswe. Subira usohore content.js kugira urishire ahabona.", owner_exported:"content.js yamanutse. Yishire iruhande ya index.html ku hosting yawe.", owner_media_warn:"audio/video zo mu mudasobwa ntizasohowe. Koresha links kugira zibonwe na bose.",
    nav_serv:"Serivisi", serv_title:"Ivyo nshobora kugukorera", serv_add:"+ Ongeraho serivisi", nav_path:"Urugendo", path_title:"Urugendo rwanje", path_add:"+ Ongeraho intambwe", new_title:"Umutwe", new_place:"Ikigo", new_desc:"Ibisobanuro bigufi.", cta_contact:"Nandikire", cta_cv:"Manura CV yanje", cv_set:"✎ Shiramwo CV", cv_prompt:"Link cangwa izina rya dosiye ya CV yawe (nka cv.pdf):", cnt_projects:"Imishinga", cnt_prog:"Indimi za porogaramu", cnt_langs:"Indimi mvuga", form_name:"Izina ryawe", form_msg:"Ubutumwa bwawe", form_send:"Rungika kuri Gmail", wa_prompt:"Numero ya WhatsApp hamwe n'indicatif y'igihugu (nka 25779000000):",
    owner_hint:"Hari ivyo wahinduye bitarashirwa ahabona kuri iki gikoresho (abasuye ntibabibona).", owner_unlock:"🔒 Fungura",
    owner_show:"Erekana ijambo ry'ibanga",
    nav_media:"Audio/Video", media_title:"Audio na Video", media_add_file:"+ Ongeraho audio / video", media_add_link:"+ Link (YouTube, MP3, MP4…)",
    media_hint:"Amadosiye abikwa muri browser yawe gusa. Ku rubuga rusangiwe, koresha link.", media_cap:"Ibisobanuro…",
    prompt_media_link:"Shiramwo link (YouTube, Vimeo, .mp3, .mp4):",
    contact_title:"Tuvugane", mail:"Email: email.yawe@exemple.com", tel:"Tél: +257 00 00 00 00", loc:"Burundi", foot:"NJM"
  },
  sw: {
    nav_profile:"Wasifu", nav_photos:"Picha", nav_graphics:"Michoro", nav_projects:"Miradi", nav_follow:"Nifuate", nav_contact:"Mawasiliano",
    avatar_hint:"+ Picha", tag:"Habari, mimi ni", name:"Jina lako", role:"Mwanafunzi wa Uhandisi wa Kompyuta",
    bio:"Andika hapa utangulizi mfupi: masomo yako, ujuzi wako na unachopenda. Bofya maandishi haya ili kuyabadilisha.",
    photos_title:"Picha zangu", add_photo:"+ Weka picha",
    p1t:"Kichwa cha picha ya 1", p1d:"Maelezo ya picha ya kwanza.",
    p2t:"Kichwa cha picha ya 2", p2d:"Maelezo ya picha ya pili.",
    p3t:"Kichwa cha picha ya 3", p3d:"Maelezo ya picha ya tatu.",
    gfx_title:"Michoro yangu", gfx_add:"+ Ongeza picha", gfx_hint:"Unaweza kuchagua picha nyingi kwa mara moja.", gfx_cap:"Maelezo…",
    projects_title:"Miradi yangu", proj_add:"+ Ongeza mradi", proj_title_def:"Jina la mradi", proj_desc_def:"Eleza mradi wako hapa.",
    proj_view:"Tazama mradi", proj_img:"+ Picha",
    follow_title:"Nifuate", follow_hint:"Bofya nembo ili kufungua ukurasa wangu.",
    follow_edit:"✎ Badilisha viungo", follow_done:"✔ Maliza",
    prompt_url:"Bandika kiungo cha ukurasa wako:", confirm_del:"Unataka kufuta?", storage_full:"Hifadhi imejaa. Tumia picha ndogo zaidi.",
    nav_langs:"Lugha", langs_title:"Lugha zangu", langs_hint:"Kiwango cha ufasaha", langs_edit:"✎ Badilisha viwango", langs_edit_done:"✔ Maliza",
    lang_add:"+ Ongeza lugha", lang_new:"Lugha mpya",
    lvl1:"Mwanzo", lvl2:"Msingi", lvl3:"Wastani", lvl4:"Juu", lvl5:"Fasaha / Lugha ya asili",
    nav_prog:"Programu", prog_title:"Lugha za programu", prog_hint:"Kiwango cha ufasaha", prog_add:"+ Ongeza lugha", prog_new:"Lugha mpya",
    mail_send:"Andika kupitia Gmail", mail_set:"Bofya ✎ kuongeza barua pepe yako", mail_prompt:"Weka anwani yako ya barua pepe:", mail_invalid:"Barua pepe si sahihi.",
    owner_mode:"Msimamizi", owner_export:"⬇ Hamisha (content.js)", owner_changepw:"🔑 Nenosiri", owner_lock:"🔒 Funga", owner_pw:"Nenosiri la msimamizi", owner_new:"Tengeneza nenosiri (angalau herufi 4)", owner_repeat:"Rudia nenosiri", owner_wrong:"Nenosiri si sahihi.", owner_mismatch:"Manenosiri hayalingani.", owner_short:"Nenosiri ni fupi mno.", owner_saved:"Nenosiri limehifadhiwa. Hamisha content.js tena ili kulichapisha.", owner_exported:"content.js imepakuliwa. Iweke karibu na index.html kwenye hosting yako.", owner_media_warn:"faili za sauti/video za ndani hazikuhamishwa. Tumia viungo ili zionekane na wote.",
    nav_serv:"Huduma", serv_title:"Ninachoweza kukufanyia", serv_add:"+ Ongeza huduma", nav_path:"Safari", path_title:"Safari yangu", path_add:"+ Ongeza hatua", new_title:"Kichwa", new_place:"Taasisi", new_desc:"Maelezo mafupi.", cta_contact:"Wasiliana nami", cta_cv:"Pakua CV yangu", cv_set:"✎ Ongeza CV", cv_prompt:"Kiungo au jina la faili ya CV yako (mfano cv.pdf):", cnt_projects:"Miradi", cnt_prog:"Lugha za programu", cnt_langs:"Lugha ninazozungumza", form_name:"Jina lako", form_msg:"Ujumbe wako", form_send:"Tuma kupitia Gmail", wa_prompt:"Namba ya WhatsApp pamoja na msimbo wa nchi (mfano 25779000000):",
    owner_hint:"Kuna maudhui yasiyochapishwa kwenye kifaa hiki (wageni hawayaoni).", owner_unlock:"🔒 Fungua",
    owner_show:"Onyesha nenosiri",
    nav_media:"Sauti/Video", media_title:"Sauti na Video", media_add_file:"+ Ongeza sauti / video", media_add_link:"+ Kiungo (YouTube, MP3, MP4…)",
    media_hint:"Faili zinabaki kwenye kivinjari chako. Kwa tovuti ya umma, tumia kiungo.", media_cap:"Maelezo…",
    prompt_media_link:"Bandika kiungo (YouTube, Vimeo, .mp3, .mp4):",
    contact_title:"Mawasiliano", mail:"Barua pepe: barua.yako@mfano.com", tel:"Simu: +257 00 00 00 00", loc:"Burundi", foot:"NJM"
  }
};

/* =========================================================
   3) OUTILS
   ========================================================= */
let lang = 'fr';
const t = k => (DICT[lang] && DICT[lang][k]) ?? DICT.fr[k] ?? '';

/* Contenu publié (fichier content.js) + mode propriétaire.
   Visiteur  : lit uniquement content.js, ne peut rien modifier.
   Propriétaire (après mot de passe) : modifie, puis exporte content.js. */
const PUB = window.PORTFOLIO_CONTENT || {};
const PREF = ['lang','theme','langview','progview'];   // préférences du visiteur (langue, thème, vue)
let owner = false;
try{ owner = sessionStorage.getItem('pf_owner') === '1' }catch(e){}
document.body.classList.toggle('owner', owner);
const lsGet = k=>{ try{ return localStorage.getItem('pf_'+k) }catch(e){ return null } };
const store = {
  get(k){
    if(PREF.includes(k)) return lsGet(k);
    const v = owner ? lsGet(k) : null;
    return v ?? (PUB[k] ?? null);
  },
  set(k,v){
    if(!owner && !PREF.includes(k)) return false;
    try{ localStorage.setItem('pf_'+k,v); return true }catch(e){ alert(t('storage_full')); return false }
  }
};
lang = store.get('lang');
if(!DICT[lang]) lang = 'fr';

// Réduit la taille des images pour qu'elles se sauvegardent bien
function readImage(file, max = 1200){
  return new Promise(res=>{
    const r = new FileReader();
    r.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        const s = Math.min(1, max/Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = img.width*s; c.height = img.height*s;
        c.getContext('2d').drawImage(img,0,0,c.width,c.height);
        let u = c.toDataURL('image/webp',.8);
        if(!u.startsWith('data:image/webp')) u = c.toDataURL('image/jpeg',.8);
        res(u);
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  });
}
function loadJSON(key){ try{ return JSON.parse(store.get(key) || '[]') }catch(e){ return [] } }

/* =========================================================
   4) LANGUES + TEXTES MODIFIABLES (sauvegardés par langue)
   ========================================================= */
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    const saved = el.hasAttribute('contenteditable') ? store.get(`t_${lang}_${k}`) : null;
    el.textContent = saved ?? t(k);
  });
  document.querySelectorAll('#langs button').forEach(b=>b.classList.toggle('on', b.dataset.lang===lang));
  renderSocialsUI();
  renderProjects();
  renderLangs();
  renderProg();
  renderMail();
  renderLists();
  renderCounters();
  renderCV();
  renderWA();
  document.querySelectorAll('[data-ph]').forEach(el=>{ el.placeholder = t(el.dataset.ph) });
  updateVisibility();
}
document.getElementById('langs').addEventListener('click', e=>{
  const b = e.target.closest('button[data-lang]'); if(!b) return;
  lang = b.dataset.lang; store.set('lang', lang); applyLang();
});
document.addEventListener('input', e=>{
  const el = e.target;
  if(el.dataset && el.dataset.i18n && el.hasAttribute('contenteditable')){
    store.set(`t_${lang}_${el.dataset.i18n}`, el.textContent);
  }
});

/* =========================================================
   5) PROFIL + 3 PHOTOS
   ========================================================= */
const targets = {
  avatar: document.getElementById('avatarImg'),
  photo1: document.querySelector('[data-slot="photo1"]'),
  photo2: document.querySelector('[data-slot="photo2"]'),
  photo3: document.querySelector('[data-slot="photo3"]')
};
function show(img, src){ img.decoding = 'async'; img.src = src; img.classList.add('has'); }
Object.entries(targets).forEach(([k,img])=>{
  const saved = store.get('i_'+k);
  if(saved) show(img, saved);
});
document.querySelectorAll('input[data-img]').forEach(inp=>{
  inp.addEventListener('change', async e=>{
    const f = e.target.files[0]; if(!f) return;
    const k = inp.dataset.img;
    const data = await readImage(f, k==='avatar' ? 400 : 900);
    show(targets[k], data);
    store.set('i_'+k, data);
  });
});

/* =========================================================
   6) GRAPHISMES (plusieurs images)
   ========================================================= */
const gfxGrid = document.getElementById('gfxGrid');
let gfx = loadJSON('gfx');
function saveGfx(){ store.set('gfx', JSON.stringify(gfx)) }
function renderGfx(){
  gfxGrid.innerHTML = '';
  gfx.forEach((g,i)=>{
    const d = document.createElement('div');
    d.className = 'glass gfx';
    d.innerHTML = `<img alt=""><button type="button" class="del">✕</button><p contenteditable="true"></p>`;
    d.querySelector('img').src = g.src;
    d.querySelector('p').textContent = g.cap;
    d.querySelector('img').onclick = ()=>openBox(g.src);
    d.querySelector('.del').onclick = ()=>{ if(confirm(t('confirm_del'))){ gfx.splice(i,1); saveGfx(); renderGfx(); } };
    d.querySelector('p').oninput = e=>{ gfx[i].cap = e.target.textContent; saveGfx(); };
    gfxGrid.appendChild(d);
  });
}
document.getElementById('gfxInput').addEventListener('change', async e=>{
  for(const f of e.target.files){
    gfx.push({ src: await readImage(f, 800), cap: t('gfx_cap') });
  }
  saveGfx(); renderGfx(); e.target.value = '';
});

/* =========================================================
   7) PROJETS (ajoutez-en autant que vous voulez)
   ========================================================= */
const projGrid = document.getElementById('projGrid');
let projects = loadJSON('projects');
function saveProjects(){ store.set('projects', JSON.stringify(projects)) }
function fixUrl(u){
  u = (u||'').trim();
  if(!u) return '';
  return /^(https?:|mailto:|tel:)/i.test(u) ? u : 'https://' + u;
}
function renderProjects(){
  projGrid.innerHTML = '';
  projects.forEach((p,i)=>{
    const d = document.createElement('article');
    d.className = 'glass proj';
    d.innerHTML = `
      <label class="slot">
        <img alt="">
        <span class="slot-hint"></span>
        <input type="file" accept="image/*" hidden>
        <button type="button" class="zoom">⤢</button>
      </label>
      <div class="proj-body">
        <h4 contenteditable="true"></h4>
        <p contenteditable="true"></p>
        <div class="proj-actions">
          <a class="btn sm" target="_blank" rel="noopener"></a>
          <button type="button" class="ico" data-a="link" title="Link">🔗</button>
          <button type="button" class="ico" data-a="del" title="✕">🗑</button>
        </div>
      </div>`;
    const img = d.querySelector('img');
    if(p.img) show(img, p.img);
    d.querySelector('.slot-hint').textContent = t('proj_img');
    d.querySelector('h4').textContent = p.title;
    d.querySelector('p').textContent = p.desc;
    const a = d.querySelector('a');
    a.textContent = t('proj_view');
    if(p.url){ a.href = p.url } else { a.style.display = 'none' }

    d.querySelector('input').onchange = async e=>{
      const f = e.target.files[0]; if(!f) return;
      projects[i].img = await readImage(f, 800); saveProjects(); renderProjects();
    };
    d.querySelector('h4').oninput = e=>{ projects[i].title = e.target.textContent; saveProjects(); };
    d.querySelector('p').oninput  = e=>{ projects[i].desc  = e.target.textContent; saveProjects(); };
    d.querySelector('[data-a="link"]').onclick = ()=>{
      const v = prompt(t('prompt_url'), p.url || '');
      if(v === null) return;
      projects[i].url = fixUrl(v); saveProjects(); renderProjects();
    };
    d.querySelector('[data-a="del"]').onclick = ()=>{
      if(confirm(t('confirm_del'))){ projects.splice(i,1); saveProjects(); renderProjects(); }
    };
    projGrid.appendChild(d);
  });
}
document.getElementById('addProject').addEventListener('click', ()=>{
  projects.push({ img:'', title:t('proj_title_def'), desc:t('proj_desc_def'), url:'' });
  saveProjects(); renderProjects();
});

/* =========================================================
   8) SUIVEZ-MOI (logos réseaux sociaux)
   ========================================================= */
const socialsBox = document.getElementById('socials');
const followSec  = document.getElementById('follow');
const editBtn    = document.getElementById('editSocials');
let editing = false;
const socialUrl = s => store.get('s_'+s.id) ?? s.url;

function renderSocialsUI(){
  editBtn.textContent = editing ? t('follow_done') : t('follow_edit');
  followSec.classList.toggle('editing', editing);
  socialsBox.innerHTML = '';
  SOCIALS.forEach(s=>{
    const url = socialUrl(s);
    const a = document.createElement('a');
    a.className = 'soc' + (url ? '' : ' empty');
    a.style.setProperty('--c', s.color);
    a.title = s.name;
    a.setAttribute('aria-label', s.name);
    a.innerHTML = `<i class="${s.icon}"></i>`;
    if(url){ a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    a.addEventListener('click', e=>{
      if(editing){
        e.preventDefault();
        const v = prompt(`${s.name} — ${t('prompt_url')}`, url || '');
        if(v === null) return;
        store.set('s_'+s.id, fixUrl(v));
        renderSocialsUI();
      } else if(!url){
        e.preventDefault();
      }
    });
    socialsBox.appendChild(a);
  });
}
editBtn.addEventListener('click', ()=>{ editing = !editing; renderSocialsUI(); });

/* =========================================================
   9) LIGHTBOX + DÉMARRAGE
   ========================================================= */
const box = document.getElementById('lightbox');
function openBox(src){ box.querySelector('img').src = src; box.classList.add('on'); }
box.onclick = ()=>box.classList.remove('on');
document.addEventListener('click', e=>{
  const z = e.target.closest('.zoom');
  if(z){ e.preventDefault(); e.stopPropagation(); openBox(z.parentElement.querySelector('img').src); }
});

document.getElementById('year').textContent = new Date().getFullYear();
/* =========================================================
   10) AUDIO & VIDÉO (fichiers gardés dans IndexedDB + liens)
   ========================================================= */
const idb = {
  db:null,
  open(){
    return new Promise((res,rej)=>{
      if(this.db) return res(this.db);
      const r = indexedDB.open('portfolio',1);
      r.onupgradeneeded = ()=> r.result.createObjectStore('media',{keyPath:'id'});
      r.onsuccess = ()=>{ this.db = r.result; res(this.db) };
      r.onerror = ()=> rej(r.error);
    });
  },
  async run(mode, fn){
    const db = await this.open();
    return new Promise((res,rej)=>{
      const tx = db.transaction('media', mode);
      const req = fn(tx.objectStore('media'));
      tx.oncomplete = ()=> res(req && req.result);
      tx.onerror = tx.onabort = ()=> rej(tx.error);
    });
  },
  all(){ return this.run('readonly', s=>s.getAll()) },
  put(item){ return this.run('readwrite', s=>s.put(item)) },
  del(id){ return this.run('readwrite', s=>s.delete(id)) }
};
const uid = ()=> Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const AUDIO_RE = /\.(mp3|wav|ogg|m4a|aac|flac)(\?|#|$)/i;
function embedFor(url){
  let m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/i);
  if(m) return 'https://www.youtube.com/embed/' + m[1];
  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if(m) return 'https://player.vimeo.com/video/' + m[1];
  return '';
}
function mediaUrl(u){
  u = (u||'').trim();
  if(/^https?:/i.test(u)) return u;
  if(/^(www\.|youtu\.be|youtube\.com|vimeo\.com)/i.test(u)) return 'https://' + u;
  return u; // chemin relatif, ex : videos/intro.mp4
}
const mediaGrid = document.getElementById('mediaGrid');
let mediaURLs = [];
async function renderMedia(){
  let items = [];
  if(owner){
    try{
      // premier lancement sur cet appareil : récupère les liens déjà publiés
      if(PUB.media && PUB.media.length && !lsGet('mediaSeeded')){
        const have = (await idb.all()).map(m=>m.id);
        for(const m of PUB.media) if(!have.includes(m.id)) await idb.put(m);
        localStorage.setItem('pf_mediaSeeded','1');
      }
    }catch(e){}
    try{ items = (await idb.all()).sort((a,b)=>a.t-b.t) }catch(e){}
  } else {
    items = (PUB.media || []).slice().sort((a,b)=>a.t-b.t);
  }
  mediaURLs.forEach(u=>URL.revokeObjectURL(u)); mediaURLs = [];
  mediaGrid.innerHTML = '';
  items.forEach(it=>{
    const d = document.createElement('figure');
    d.className = 'glass card mcard';
    let src = it.blob ? URL.createObjectURL(it.blob) : it.url;
    if(it.blob) mediaURLs.push(src);
    let kind = it.kind;
    if(kind === 'link'){
      const emb = embedFor(it.url);
      if(emb){ kind = 'embed'; src = emb }
      else kind = AUDIO_RE.test(it.url) ? 'audio' : 'video';
    }
    if(kind === 'embed'){
      const f = document.createElement('iframe');
      f.src = src; f.loading = 'lazy'; f.allowFullscreen = true; f.title = 'media';
      f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      d.appendChild(f);
    } else if(kind === 'video'){
      const v = document.createElement('video');
      v.controls = true; v.playsInline = true; v.preload = 'metadata'; v.src = src;
      d.appendChild(v);
    } else {
      const box = document.createElement('div');
      box.className = 'aud';
      box.innerHTML = '<div class="eq"><i></i><i></i><i></i><i></i><i></i></div>';
      const a = document.createElement('audio');
      a.controls = true; a.preload = 'metadata'; a.src = src;
      a.onplay = ()=>box.classList.add('playing');
      a.onpause = a.onended = ()=>box.classList.remove('playing');
      box.appendChild(a);
      d.appendChild(box);
    }
    const body = document.createElement('div');
    body.className = 'mbody';
    body.innerHTML = '<p contenteditable="true"></p><button type="button" class="ico">🗑</button>';
    const p = body.querySelector('p');
    p.textContent = store.get('mc_'+it.id) ?? (it.name || t('media_cap'));
    p.oninput = ()=>store.set('mc_'+it.id, p.textContent);
    body.querySelector('button').onclick = async ()=>{
      if(!confirm(t('confirm_del'))) return;
      await idb.del(it.id);
      try{ localStorage.removeItem('pf_mc_'+it.id) }catch(e){}
      renderMedia();
    };
    d.appendChild(body);
    mediaGrid.appendChild(d);
  });
}
document.getElementById('mediaInput').addEventListener('change', async e=>{
  for(const f of e.target.files){
    const kind = f.type.startsWith('audio') ? 'audio' : 'video';
    try{ await idb.put({ id:uid(), t:Date.now(), kind, blob:f, name:f.name.replace(/\.[^.]+$/,'') }) }
    catch(err){ alert(t('storage_full')) }
  }
  e.target.value = '';
  renderMedia();
});
document.getElementById('mediaLink').addEventListener('click', async ()=>{
  const v = prompt(t('prompt_media_link'), '');
  if(!v || !v.trim()) return;
  try{ await idb.put({ id:uid(), t:Date.now(), kind:'link', url:mediaUrl(v) }) }
  catch(err){ alert(t('storage_full')) }
  renderMedia();
});

/* =========================================================
   11) DÉCOR ANIMÉ : formes qui flottent et tournent + parallaxe
   ========================================================= */
const decor = document.getElementById('decor');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const shapeKinds = ['ring','square','tri','plus','dot','hex'];
const shapeCols  = ['var(--accent)','var(--text)','var(--b2)','var(--b3)'];
const LITE = document.documentElement.classList.contains('lite');
for(let i=0; i<(LITE ? 8 : 18); i++){
  const s = document.createElement('span');
  s.className = 'shape s-' + shapeKinds[i % shapeKinds.length];
  s.style.cssText =
    `left:${Math.random()*100}%;top:${Math.random()*100}%;` +
    `--z:${16 + Math.random()*64}px;--c:${shapeCols[i % shapeCols.length]};` +
    `--d:${6 + Math.random()*8}s;--r:${14 + Math.random()*26}s;--dl:-${Math.random()*10}s;` +
    `--dir:${Math.random() < .5 ? 'normal' : 'reverse'}`;
  s.dataset.depth = (0.2 + Math.random()*0.8).toFixed(2);
  s.innerHTML = '<i></i>';
  decor.appendChild(s);
}
// 2 grands anneaux qui tournent lentement dans le fond
(LITE ? [] : [['-8%','8%'],['78%','62%']]).forEach(([l,tp],n)=>{
  const s = document.createElement('span');
  s.className = 'shape s-ring big';
  s.style.cssText = `left:${l};top:${tp};--z:${360 + n*120}px;--c:var(--accent);--d:22s;--r:${70 + n*30}s;--dl:0s;--dir:${n ? 'reverse' : 'normal'}`;
  s.dataset.depth = '0.3';
  s.innerHTML = '<i></i>';
  decor.appendChild(s);
});
if(!reduceMotion && !LITE && matchMedia('(hover:hover)').matches){
  const glow = document.getElementById('glow');
  const shapes = [...decor.querySelectorAll('.shape')];
  let mx = 0, my = 0, raf = 0;
  addEventListener('mousemove', e=>{
    mx = e.clientX; my = e.clientY;
    if(raf) return;
    raf = requestAnimationFrame(()=>{
      raf = 0;
      glow.style.left = mx + 'px'; glow.style.top = my + 'px';
      const nx = mx/innerWidth - .5, ny = my/innerHeight - .5;
      shapes.forEach(s=>{
        const k = s.dataset.depth * 60;
        s.style.translate = `${-nx*k}px ${-ny*k}px`;
      });
    });
  });
}

// Apparition des sections quand on défile
if('IntersectionObserver' in window && !reduceMotion){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target) } });
  }, { threshold:.12 });
  document.querySelectorAll('main > section').forEach(s=>{ s.classList.add('reveal'); io.observe(s) });
}

/* =========================================================
   12) STATISTIQUES (cercles + barres animés) :
   langues parlées ET langages de programmation.
   Les niveaux par défaut sont des exemples : modifiez-les avec
   le bouton « Modifier les niveaux ».
   ========================================================= */
const LANG_DEFAULT = [
  { name:'Français',  pct:80 },
  { name:'English',   pct:60 },
  { name:'Kirundi',   pct:100 },
  { name:'Kiswahili', pct:70 }
];
const PROG_DEFAULT = [
  { name:'HTML',       pct:90 },
  { name:'CSS',        pct:85 },
  { name:'JavaScript', pct:75 },
  { name:'PHP',        pct:65 },
  { name:'Java',       pct:60 },
  { name:'C#',         pct:55 }
];
const CIRC = 2 * Math.PI * 52;
const levelKey = p => p < 25 ? 'lvl1' : p < 50 ? 'lvl2' : p < 70 ? 'lvl3' : p < 90 ? 'lvl4' : 'lvl5';

function makeStats(cfg){
  let items = loadJSON(cfg.key);
  if(!items.length && store.get(cfg.key) === null) items = cfg.defaults.map(x=>({...x}));
  let editing = false;
  let view = store.get(cfg.viewKey) === 'bar' ? 'bar' : 'ring';
  const grid = document.getElementById(cfg.grid);
  const editBtn = document.getElementById(cfg.edit);
  const addBtn = document.getElementById(cfg.add);
  const sw = document.getElementById(cfg.sw);
  const save = ()=> store.set(cfg.key, JSON.stringify(items));

  function paint(card, p, animate){
    card.querySelector('.val').style.strokeDashoffset = CIRC * (1 - p/100);
    card.querySelector('.bar span').style.width = p + '%';
    card.querySelector('.lvl').textContent = t(levelKey(p));
    const num = card.querySelector('.pct');
    if(!animate || reduceMotion){ num.textContent = p + '%'; return; }
    const t0 = performance.now(), dur = 1200;
    (function step(now){
      const k = Math.min(1, (now - t0) / dur);
      num.textContent = Math.round(p * (1 - Math.pow(1 - k, 3))) + '%';
      if(k < 1) requestAnimationFrame(step);
    })(t0);
  }

  function render(){
    grid.className = 'lgrid ' + view + (editing ? ' editing' : '');
    editBtn.textContent = editing ? t('langs_edit_done') : t('langs_edit');
    addBtn.hidden = !editing;
    sw.querySelectorAll('button').forEach(b=>b.classList.toggle('on', b.dataset.view === view));
    grid.innerHTML = '';
    const io = ('IntersectionObserver' in window && !reduceMotion)
      ? new IntersectionObserver(entries=>{
          entries.forEach(en=>{
            if(!en.isIntersecting) return;
            const idx = [...grid.children].indexOf(en.target);
            if(idx > -1) paint(en.target, items[idx].pct, true);
            io.unobserve(en.target);
          });
        }, { threshold:.3 })
      : null;
    items.forEach((s,i)=>{
      const d = document.createElement('div');
      d.className = 'glass lcard';
      d.innerHTML = `
        <div class="ringw">
          <svg viewBox="0 0 120 120"><circle class="trk" cx="60" cy="60" r="52"/><circle class="val" cx="60" cy="60" r="52"/></svg>
          <b class="pct">0%</b>
        </div>
        <div class="linfo">
          <h4 contenteditable="true"></h4>
          <small class="lvl"></small>
          <div class="bar"><span></span></div>
          <div class="ledit">
            <input class="rng" type="range" min="0" max="100" step="5">
            <button type="button" class="ico">🗑</button>
          </div>
        </div>`;
      const val = d.querySelector('.val');
      val.style.strokeDasharray = CIRC;
      val.style.strokeDashoffset = CIRC;
      const h4 = d.querySelector('h4'), rng = d.querySelector('.rng');
      h4.textContent = s.name;
      rng.value = s.pct;
      h4.oninput = ()=>{ s.name = h4.textContent; save(); };
      rng.oninput = ()=>{ s.pct = +rng.value; paint(d, s.pct, false); save(); };
      d.querySelector('.ico').onclick = ()=>{
        if(confirm(t('confirm_del'))){ items.splice(i,1); save(); render(); }
      };
      grid.appendChild(d);
      if(io) io.observe(d); else paint(d, s.pct, false);
    });
  }

  editBtn.addEventListener('click', ()=>{ editing = !editing; render(); });
  addBtn.addEventListener('click', ()=>{ items.push({ name:t(cfg.newKey), pct:50 }); save(); render(); });
  sw.addEventListener('click', e=>{
    const b = e.target.closest('button[data-view]'); if(!b) return;
    view = b.dataset.view; store.set(cfg.viewKey, view); render();
  });
  return Object.assign(render, { count: ()=>items.length });
}
const renderLangs = makeStats({ key:'langstats', viewKey:'langview', defaults:LANG_DEFAULT,
  grid:'langGrid', edit:'langEdit', add:'langAdd', sw:'viewSw', newKey:'lang_new' });
const renderProg = makeStats({ key:'progstats', viewKey:'progview', defaults:PROG_DEFAULT,
  grid:'progGrid', edit:'progEdit', add:'progAdd', sw:'progSw', newKey:'prog_new' });

/* =========================================================
   13) EMAIL : un clic ouvre Gmail (nouveau message) vers votre adresse
   ========================================================= */
const mailLink = document.getElementById('mailLink');
const mailText = document.getElementById('mailText');
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const currentEmail = ()=> store.get('email') ?? CONTACT_EMAIL;
function renderMail(){
  const em = currentEmail();
  mailLink.parentElement.hidden = !em && !owner;
  document.getElementById('cform').hidden = !em;
  if(em){
    mailLink.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(em);
    mailLink.title = t('mail_send');
    mailText.textContent = em;
  } else {
    mailLink.removeAttribute('href');
    mailLink.removeAttribute('title');
    mailText.textContent = t('mail_set');
  }
}
function editMail(){
  const v = prompt(t('mail_prompt'), currentEmail());
  if(v === null) return;
  const em = v.trim();
  if(em && !isEmail(em)){ alert(t('mail_invalid')); return; }
  store.set('email', em);
  renderMail();
}
mailLink.addEventListener('click', e=>{ if(!currentEmail()){ e.preventDefault(); editMail(); } });
document.getElementById('mailEdit').addEventListener('click', editMail);

/* =========================================================
   14) MODE PROPRIÉTAIRE : seul vous pouvez modifier le site.
   - Les visiteurs voient le contenu publié (content.js) en lecture seule.
   - Vous : cliquez sur 🔒 en bas de page, entrez votre mot de passe,
     modifiez, puis « Exporter » → placez content.js à côté de index.html.
   ========================================================= */
async function sha(s){
  s = 'pf::' + s;
  if(window.crypto && crypto.subtle){
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  }
  let h = 5381; for(const c of s) h = ((h*33) ^ c.charCodeAt(0)) >>> 0;   // repli (navigateur sans crypto)
  return 'x' + h.toString(16);
}
const getHash = ()=> lsGet('ownerhash') || PUB.ownerHash || '';

function askPw(msg, again){
  return new Promise(res=>{
    const d = document.createElement('dialog');
    d.className = 'glass pwdlg';
    const attrs = 'autocapitalize="off" autocorrect="off" spellcheck="false"';
    d.innerHTML = '<form method="dialog"><h4></h4>' +
      '<input type="password" class="p1" autocomplete="' + (again ? 'new-password' : 'current-password') + '" ' + attrs + '>' +
      '<input type="password" class="p2" autocomplete="new-password" ' + attrs + ' hidden>' +
      '<label class="pwshow"><input type="checkbox"><span></span></label><p class="pwerr" role="alert"></p>' +
      '<div class="pwbtn"><button class="btn" value="ok">OK</button><button class="btn alt" value="x" formnovalidate>✕</button></div></form>';
    d.querySelector('h4').textContent = msg;
    d.querySelector('.pwshow span').textContent = t('owner_show');
    const p1 = d.querySelector('.p1'), p2 = d.querySelector('.p2'), err = d.querySelector('.pwerr');
    if(again){ p2.hidden = false; p2.placeholder = t('owner_repeat'); }
    // Entrée dans le 1er champ → passe au 2e (au lieu d'envoyer le formulaire trop tôt)
    p1.addEventListener('keydown', e=>{ if(again && e.key === 'Enter'){ e.preventDefault(); p2.focus(); } });
    d.querySelector('.pwshow input').addEventListener('change', e=>{
      p1.type = p2.type = e.target.checked ? 'text' : 'password';
    });
    d.querySelector('form').addEventListener('submit', e=>{
      if(e.submitter && e.submitter.value === 'x') return;
      const v = p1.value.trim();
      if(!v){ e.preventDefault(); p1.focus(); return; }
      if(again){
        if(v !== p2.value.trim()){ e.preventDefault(); err.textContent = t('owner_mismatch'); p2.focus(); return; }
        if(v.length < 4){ e.preventDefault(); err.textContent = t('owner_short'); p1.focus(); return; }
      }
    });
    d.addEventListener('close', ()=>{
      const ok = d.returnValue === 'ok', v = p1.value.trim();
      d.remove();
      res(ok ? v : null);
    });
    document.body.appendChild(d); d.showModal(); p1.focus();
  });
}
function setOwner(on){
  try{ on ? sessionStorage.setItem('pf_owner','1') : sessionStorage.removeItem('pf_owner') }catch(e){}
  location.reload();
}
async function newPassword(){
  const p = await askPw(t('owner_new'), true);
  if(p === null) return false;
  if(p === false){ alert(t('owner_mismatch')); return false; }
  if(p.length < 4){ alert(t('owner_short')); return false; }
  try{ localStorage.setItem('pf_ownerhash', await sha(p)) }catch(e){ return false }
  return true;
}
async function unlock(){
  if(!getHash()){ if(await newPassword()) setOwner(true); return; }
  const p = await askPw(t('owner_pw'));
  if(p === null) return;
  if(await sha(p) === getHash()) setOwner(true); else alert(t('owner_wrong'));
}

// Seuls les éléments éditables du propriétaire restent éditables
function syncEditable(root){
  if(!root.querySelectorAll) return;
  const set = el=>el.setAttribute('contenteditable', owner ? 'true' : 'false');
  if(root.matches && root.matches('[contenteditable]')) set(root);
  root.querySelectorAll('[contenteditable]').forEach(set);
}
syncEditable(document);
new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{ if(n.nodeType === 1) syncEditable(n) })))
  .observe(document.body, { childList:true, subtree:true });

// Visiteur : pas de sélecteur de fichier, mais on peut agrandir les images
document.addEventListener('click', e=>{
  if(owner) return;
  const lab = e.target.closest('label.slot, label.avatar, label.btn');
  if(!lab) return;
  e.preventDefault();
  const im = lab.querySelector('img.has');
  if(im && !e.target.closest('.zoom')) openBox(im.src);
}, true);

const ownerBar = document.getElementById('ownerBar');
const ownerBtn = document.getElementById('ownerBtn');
ownerBar.hidden = !owner;
ownerBtn.textContent = owner ? '🔓' : '🔒';
ownerBtn.addEventListener('click', ()=>{ owner ? setOwner(false) : unlock() });
document.getElementById('lockBtn').addEventListener('click', ()=>setOwner(false));
document.getElementById('pwBtn').addEventListener('click', async ()=>{
  if(await newPassword()) alert(t('owner_saved'));
});
document.getElementById('exportBtn').addEventListener('click', async ()=>{
  const out = { ...PUB };
  delete out.media;
  try{
    for(let i=0; i<localStorage.length; i++){
      const k = localStorage.key(i);
      if(!k.startsWith('pf_')) continue;
      const n = k.slice(3);
      if(PREF.includes(n) || n === 'ownerhash' || n === 'mediaSeeded') continue;
      out[n] = localStorage.getItem(k);
    }
  }catch(e){}
  out.ownerHash = getHash();
  let skipped = 0;
  try{
    out.media = (await idb.all()).filter(m=>{ if(m.kind === 'link') return true; skipped++; return false })
      .map(({id,t,kind,url})=>({id,t,kind,url}));
  }catch(e){ out.media = PUB.media || [] }
  const blob = new Blob(['window.PORTFOLIO_CONTENT = ' + JSON.stringify(out) + ';\n'], { type:'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'content.js';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
  alert(t('owner_exported') + (skipped ? `\n\n⚠ ${skipped} ${t('owner_media_warn')}` : ''));
});
if(location.hash === '#admin' && !owner) unlock();

// Rappel : du contenu modifié sur cet appareil mais pas encore publié (visible seulement par vous)
if(!owner){
  let pending = false;
  try{
    for(let i=0; i<localStorage.length && !pending; i++){
      const k = localStorage.key(i);
      if(!k.startsWith('pf_')) continue;
      const n = k.slice(3);
      if(PREF.includes(n) || n === 'ownerhash' || n === 'mediaSeeded') continue;
      if(localStorage.getItem(k) !== PUB[n]) pending = true;
    }
  }catch(e){}
  if(pending){
    const hint = document.createElement('div');
    hint.className = 'glass ownerhint';
    hint.innerHTML = '<span data-i18n="owner_hint"></span><button type="button" class="btn sm" data-i18n="owner_unlock"></button><button type="button" class="xbtn" title="✕">✕</button>';
    hint.querySelector('.btn').onclick = unlock;
    hint.querySelector('.xbtn').onclick = ()=>hint.remove();
    document.body.appendChild(hint);
  }
}

/* =========================================================
   15) SERVICES, PARCOURS, COMPTEURS, CV, WHATSAPP, FORMULAIRE
   + visibilité (les visiteurs ne voient pas les sections vides)
   ========================================================= */
function makeList(cfg){
  let items = loadJSON(cfg.key);
  const grid = document.getElementById(cfg.grid);
  const save = ()=> store.set(cfg.key, JSON.stringify(items));
  function render(){
    grid.innerHTML = '';
    items.forEach((it,i)=>{
      const d = document.createElement('article');
      d.className = 'glass ' + cfg.cls;
      d.innerHTML = cfg.tpl;
      d.querySelectorAll('[data-f]').forEach(el=>{
        el.textContent = it[el.dataset.f] ?? '';
        el.oninput = ()=>{ it[el.dataset.f] = el.textContent; save(); };
      });
      d.querySelector('.ico').onclick = ()=>{
        if(confirm(t('confirm_del'))){ items.splice(i,1); save(); render(); }
      };
      grid.appendChild(d);
    });
  }
  document.getElementById(cfg.add).addEventListener('click', ()=>{ items.push(cfg.def()); save(); render(); });
  return Object.assign(render, { count: ()=>items.length });
}
const DEL_BTN = '<button type="button" class="ico del2" title="✕">🗑</button>';
const renderServices = makeList({ key:'services', grid:'servGrid', add:'servAdd', cls:'svc',
  tpl:'<div class="sv-ico" data-f="icon" contenteditable="true"></div><h4 data-f="title" contenteditable="true"></h4><p data-f="desc" contenteditable="true"></p>' + DEL_BTN,
  def:()=>({ icon:'💻', title:t('new_title'), desc:t('new_desc') }) });
const renderPath = makeList({ key:'path', grid:'pathGrid', add:'pathAdd', cls:'tl',
  tpl:'<small class="tl-per" data-f="period" contenteditable="true"></small><h4 data-f="title" contenteditable="true"></h4><em class="tl-pl" data-f="place" contenteditable="true"></em><p data-f="desc" contenteditable="true"></p>' + DEL_BTN,
  def:()=>({ period:'2024 — 2026', title:t('new_title'), place:t('new_place'), desc:t('new_desc') }) });
const renderLists = ()=>{ renderServices(); renderPath(); };

// Compteurs : calculés automatiquement (jamais de faux chiffres)
let countersDone = false;
function runCounters(animate){
  document.querySelectorAll('#counters [data-n]').forEach(el=>{
    const n = +el.dataset.n;
    if(!animate || reduceMotion || !n){ el.textContent = n; return; }
    const t0 = performance.now();
    (function step(now){
      const k = Math.min(1, (now - t0) / 1000);
      el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3)));
      if(k < 1) requestAnimationFrame(step);
    })(t0);
  });
}
function renderCounters(){
  const vals = { projects: projects.length, prog: renderProg.count(), langs: renderLangs.count() };
  document.querySelectorAll('#counters [data-c]').forEach(el=>{
    const n = vals[el.dataset.c];
    el.dataset.n = n;
    el.parentElement.hidden = !owner && !n;
  });
  runCounters(!countersDone);
  countersDone = true;
}

// Bouton CV
const fileOrUrl = u=>{
  u = (u || '').trim();
  return (!u || /^https?:|^\.{0,2}\//i.test(u) || /^[\w%\-]+(\.[\w%\-]+)*\.(pdf|docx?)$/i.test(u)) ? u : fixUrl(u);
};
const cvLink = document.getElementById('cvLink');
const curCV = ()=> store.get('cv') ?? CV_URL;
function renderCV(){
  const u = curCV();
  cvLink.hidden = !u && !owner;
  if(u){ cvLink.href = u; cvLink.textContent = t('cta_cv'); }
  else { cvLink.removeAttribute('href'); cvLink.textContent = t('cv_set'); }
}
function editCV(){
  const v = prompt(t('cv_prompt'), curCV());
  if(v === null) return;
  store.set('cv', fileOrUrl(v)); renderCV();
}
cvLink.addEventListener('click', e=>{ if(!curCV()){ e.preventDefault(); editCV(); } });
document.getElementById('cvEdit').addEventListener('click', editCV);

// WhatsApp
const waLink = document.getElementById('waLink');
const curWA = ()=> String(store.get('wa') ?? WHATSAPP).replace(/\D/g,'');
function renderWA(){
  const n = curWA();
  waLink.hidden = !n && !owner;
  if(n){ waLink.href = 'https://wa.me/' + n; waLink.title = 'WhatsApp'; }
  else { waLink.removeAttribute('href'); waLink.title = t('wa_prompt'); }
}
function editWA(){
  const v = prompt(t('wa_prompt'), curWA());
  if(v === null) return;
  store.set('wa', v.replace(/\D/g,'')); renderWA();
}
waLink.addEventListener('click', e=>{ if(!curWA()){ e.preventDefault(); editWA(); } });
document.getElementById('waEdit').addEventListener('click', editWA);

// Formulaire : ouvre Gmail avec le message déjà écrit
const cform = document.getElementById('cform');
cform.addEventListener('submit', e=>{
  e.preventDefault();
  const em = currentEmail();
  const name = document.getElementById('cfName').value.trim();
  const msg = document.getElementById('cfMsg').value.trim();
  if(!em || !name || !msg) return;
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(em) +
    '&su=' + encodeURIComponent('Portfolio — ' + name) +
    '&body=' + encodeURIComponent(msg + '\n\n— ' + name), '_blank', 'noopener');
  cform.reset();
});

// Les visiteurs ne voient pas les sections vides (ni leur lien dans le menu)
function updateVisibility(){
  const show = (id, ok)=>{
    const sec = document.getElementById(id);
    if(!sec) return;
    const hide = !owner && !ok;
    if(sec.hidden !== hide) sec.hidden = hide;
    const a = document.querySelector('.nav nav a[href="#' + id + '"]');
    if(a && a.hidden !== hide) a.hidden = hide;
  };
  show('services', renderServices.count() > 0);
  show('projects', projGrid.children.length > 0);
  show('path', renderPath.count() > 0);
  show('photos', ['photo1','photo2','photo3'].some(k=>targets[k].classList.contains('has')));
  show('graphics', gfxGrid.children.length > 0);
  show('media', mediaGrid.children.length > 0);
  show('follow', SOCIALS.some(s=>socialUrl(s)));
}
let visRaf = 0;
new MutationObserver(()=>{
  if(visRaf) return;
  visRaf = requestAnimationFrame(()=>{ visRaf = 0; updateVisibility(); });
}).observe(document.querySelector('main'), { childList:true, subtree:true });

// Économie de batterie : on met les animations en pause quand l'onglet est caché
document.addEventListener('visibilitychange', ()=>document.documentElement.classList.toggle('paused', document.hidden));

/* Thèmes de couleurs 2026 */
const themeBox = document.getElementById('themes');
function setTheme(th){
  document.documentElement.dataset.theme = th;
  themeBox.querySelectorAll('button').forEach(b=>b.classList.toggle('on', b.dataset.theme===th));
}
let theme = store.get('theme');
if(!['teal','cloud','damson'].includes(theme)) theme = 'teal';
setTheme(theme);
themeBox.addEventListener('click', e=>{
  const b = e.target.closest('button[data-theme]'); if(!b) return;
  setTheme(b.dataset.theme); store.set('theme', b.dataset.theme);
});

renderGfx();
renderMedia();
applyLang();
