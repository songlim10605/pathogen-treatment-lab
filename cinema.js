const pathogens={
 bacteria:{badge:'세포성 생물',title:'세균은 스스로 분열합니다',intro:'하나의 세포로 이루어져 있으며, 적절한 환경에서는 숙주세포의 복제 장치 없이 증식할 수 있습니다.',color:'bacteria',steps:[['인체로 들어오기','호흡기·소화기·상처 등 다양한 경로로 들어옵니다.','🫁'],['조직에 부착하기','표면 구조를 이용해 적합한 조직에 자리 잡습니다.','🔗'],['세포분열로 증식','스스로 세포분열하여 개체 수를 늘립니다.','🦠  🦠'],['독소·염증 유발','일부는 독소를 만들거나 강한 면역반응을 일으킵니다.','⚠️'],['조직 손상','증식, 독소, 염증으로 세포와 조직이 손상될 수 있습니다.','💥'],['면역·치료 반응','면역계가 대응하며, 일부 감염에는 적절한 항생제가 사용됩니다.','🛡️']]},
 virus:{badge:'숙주 의존 감염성 입자',title:'바이러스는 세포를 빌려 복제합니다',intro:'핵산과 단백질로 이루어진 입자로, 새로운 바이러스를 만들려면 반드시 숙주세포의 장치가 필요합니다.',color:'virus',steps:[['숙주에 들어오기','호흡기·체액 등 바이러스에 따라 다른 경로로 들어옵니다.','🫁'],['특정 세포에 결합','표면 단백질이 맞는 수용체를 가진 세포에 결합합니다.','🔐'],['유전물질 침투','바이러스의 DNA 또는 RNA가 세포 안으로 전달됩니다.','🧬'],['숙주 장치로 복제','세포의 합성 장치를 이용해 바이러스 성분을 만듭니다.','🏭'],['조립과 방출','새 입자가 조립되어 밖으로 나오고 주변 세포로 퍼집니다.','✦ ✦ ✦'],['세포 손상·증상','세포 기능 방해와 면역반응이 함께 증상을 일으킬 수 있습니다.','🤒']]},
 prion:{badge:'비정상 단백질',title:'프리온은 단백질 구조를 바꿉니다',intro:'핵산이 없는 비정상 단백질입니다. 정상 단백질의 접힘 구조를 비정상 형태로 바꾸도록 유도합니다.',color:'prion',steps:[['비정상 접힘','정상과 다른 입체 구조로 접힌 프리온 단백질이 존재합니다.','〰️'],['정상 단백질과 접촉','비정상 단백질이 정상 프리온 단백질 가까이에 놓입니다.','⌁  ∿'],['구조 변화 유도','정상 단백질도 비정상적인 접힘 구조로 바뀝니다.','⌁  ⌁'],['연쇄적 전파','새로 변형된 단백질이 또 다른 정상 단백질을 변화시킵니다.','⌁⌁⌁'],['뇌 조직에 축적','분해되기 어려운 비정상 단백질이 점차 쌓입니다.','🧠'],['신경 기능 저하','신경세포가 손상되어 인지·운동 기능 등에 문제가 생깁니다.','📉']]}
};
const myths=[
 ['감기에는 항생제를 먹어야 한다.',false,'감기의 대부분은 바이러스가 원인입니다. 항생제는 바이러스에 작용하지 않으며, 세균성 합병증 등 의사가 필요하다고 판단한 경우에만 사용합니다.'],
 ['바이러스는 사람의 세포를 이용해 증식한다.',true,'바이러스는 독립적인 복제 장치가 없어 숙주세포의 기능을 이용합니다.'],
 ['모든 세균은 사람에게 질병을 일으킨다.',false,'많은 세균은 무해하거나 장내 미생물처럼 우리 몸에 도움을 줍니다.'],
 ['프리온에는 DNA나 RNA가 없다.',true,'프리온은 핵산 없이 비정상적으로 접힌 단백질로 이루어져 있습니다.'],
 ['항생제를 부적절하게 사용하면 내성균 증가에 영향을 줄 수 있다.',true,'필요하지 않은 사용이나 잘못된 복용은 내성균이 선택되어 살아남을 가능성을 높입니다.'],
 ['세균·바이러스·프리온은 모두 같은 방법으로 치료한다.',false,'구조와 증가 방식, 공격 가능한 표적이 다르기 때문에 치료 전략도 다릅니다.']
];
const questions=[
 {q:'숙주세포의 복제 장치를 반드시 이용하는 것은?',a:['세균','바이러스','프리온'],c:1,e:'바이러스는 숙주세포 없이는 스스로 복제할 수 없습니다.'},
 {q:'DNA나 RNA 없이 질병을 일으킬 수 있는 것은?',a:['세균','바이러스','프리온'],c:2,e:'프리온은 비정상적으로 접힌 단백질입니다.'},
 {q:'세균이 개체 수를 늘리는 대표적인 방법은?',a:['세포분열','정상 단백질 변형','숙주세포 조립'],c:0,e:'세균은 적절한 환경에서 세포분열로 증식합니다.'},
 {q:'항생제가 일반적인 바이러스 감염에 효과가 없는 핵심 이유는?',a:['바이러스가 너무 작아서','바이러스에는 항생제의 세균성 표적이 없어서','바이러스가 항상 뇌에 있어서'],c:1,e:'항생제는 세균의 세포벽·리보솜 등 특정 구조와 기능을 표적으로 합니다.'},
 {q:'프리온의 질병 발생 기전을 가장 잘 설명한 것은?',a:['독소만 방출한다','정상 단백질의 비정상 접힘을 유도한다','숙주 DNA를 복제한다'],c:1,e:'비정상 접힘이 연쇄적으로 전파되고 단백질이 축적됩니다.'},
 {q:'다음 중 과학적으로 옳은 설명은?',a:['모든 세균은 해롭다','모든 바이러스에 같은 약을 쓴다','병원성 인자의 특성에 따라 치료법이 달라진다'],c:2,e:'치료는 각 병원성 인자의 구조와 증식·전파 방식에 맞춰야 합니다.'},
 {q:'이 교육 모델에 대한 올바른 해석은?',a:['모든 감염 과정을 완벽히 재현한다','대표 원리를 단순화해 비교한다','개인 진단에 사용할 수 있다'],c:1,e:'모델은 이해를 돕기 위한 단순화이며 진단 도구가 아닙니다.'}
];
let current='bacteria',step=0,mythIndex=0,answeredMyths=0,quizMode='pre',quizIndex=0,quizScore=0;
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function updateProgress(){const learned=JSON.parse(localStorage.getItem('learned')||'[]').length;const p=Math.min(100,learned*20+(answeredMyths?20:0)+(localStorage.preScore?10:0)+(localStorage.postScore?10:0));$('#progressText').textContent=p+'%'}
function renderPathogen(){const p=pathogens[current],s=p.steps[step];$('#typeBadge').textContent=p.badge;$('#pathogenTitle').textContent=p.title;$('#pathogenIntro').textContent=p.intro;$('#stepNumber').textContent=step+1;$('#stepTitle').textContent=s[0];$('#stepBody').textContent=s[1];$('#stage').className=`stage ${p.color}-stage`;$('#stage').innerHTML=`<div class="stage-icon">${s[2]}</div><div class="stage-label">${s[0]}</div>`;$('#stepDots').innerHTML=p.steps.map((_,i)=>`<button class="step-dot ${i===step?'active':''}" data-step="${i}" aria-label="${i+1}단계"></button>`).join('');$$('.step-dot').forEach(b=>b.onclick=()=>{step=+b.dataset.step;renderPathogen()});if(step===p.steps.length-1){let a=JSON.parse(localStorage.getItem('learned')||'[]');if(!a.includes(current)){a.push(current);localStorage.setItem('learned',JSON.stringify(a));updateProgress()}}}
$$('.tab').forEach(b=>b.onclick=()=>{$$('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');current=b.dataset.pathogen;step=0;renderPathogen()});$('#prevStep').onclick=()=>{step=(step+5)%6;renderPathogen()};$('#nextStep').onclick=()=>{step=(step+1)%6;renderPathogen()};
function renderMyth(){const m=myths[mythIndex];$('#mythCount').textContent=`${mythIndex+1} / ${myths.length}`;$('#mythStatement').textContent=m[0];$('#mythFeedback').hidden=true;$$('.ox-buttons button').forEach(b=>b.disabled=false)}
$$('.ox-buttons button').forEach(b=>b.onclick=()=>{const m=myths[mythIndex],pick=b.dataset.answer==='true',ok=pick===m[1];$('#mythFeedback').hidden=false;$('#mythFeedback').innerHTML=`<strong>${ok?'정답입니다':'다시 확인해 보세요'}</strong><br>${m[2]}`;$$('.ox-buttons button').forEach(x=>x.disabled=true);setTimeout(()=>{mythIndex=(mythIndex+1)%myths.length;answeredMyths++;renderMyth();updateProgress()},2600)});
function startQuiz(mode){quizMode=mode;quizIndex=0;quizScore=0;$('#quizStart').hidden=true;$('#resultBox').hidden=true;$('#quizBox').hidden=false;renderQuestion()}
function renderQuestion(){const q=questions[quizIndex];$('#quizBox').innerHTML=`<div class="quiz-progress"><i style="width:${(quizIndex/questions.length)*100}%"></i></div><p>${quizMode==='pre'?'사전':'사후'} 퀴즈 · ${quizIndex+1}/${questions.length}</p><h3>${q.q}</h3><div class="answers">${q.a.map((a,i)=>`<button data-i="${i}">${a}</button>`).join('')}</div>`;$$('.answers button').forEach(b=>b.onclick=()=>answerQuiz(+b.dataset.i))}
function answerQuiz(i){if(i===questions[quizIndex].c)quizScore++;quizIndex++;if(quizIndex<questions.length)renderQuestion();else finishQuiz()}
function finishQuiz(){const pct=Math.round(quizScore/questions.length*100);localStorage.setItem(quizMode+'Score',pct);$('#quizBox').hidden=true;$('#resultBox').hidden=false;const pre=Number(localStorage.preScore),post=Number(localStorage.postScore);const gain=localStorage.preScore&&localStorage.postScore?post-pre:null;$('#resultBox').innerHTML=`<div class="result-ring" style="--score:${pct}%"><strong>${pct}점</strong></div><h3>${quizMode==='pre'?'학습 전 기준점이 저장되었습니다':'학습 후 결과입니다'}</h3><p>${questions.length}문항 중 ${quizScore}문항을 맞혔습니다.</p>${gain!==null?`<p class="gain">사전보다 ${gain>=0?'+':''}${gain}%p ${gain>=0?'변화했습니다':'변화했습니다'}</p>`:'<p>기전 학습을 마친 뒤 사후 퀴즈에 도전해 보세요.</p>'}<button class="primary" id="resultNext">${quizMode==='pre'?'기전 학습하기':'결과 닫기'}</button>`;$('#resultNext').onclick=()=>{if(quizMode==='pre')location.hash='learn';$('#resultBox').hidden=true;$('#quizStart').hidden=false;updateScores()};updateScores();updateProgress()}
function updateScores(){$('#prePreview').textContent=localStorage.preScore?localStorage.preScore+'점':'—';$('#postPreview').textContent=localStorage.postScore?localStorage.postScore+'점':'—'}
$$('[data-quiz]').forEach(b=>b.onclick=()=>startQuiz(b.dataset.quiz));$$('[data-go]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.go;if(b.dataset.mode)startQuiz(b.dataset.mode)});$('#chainBtn').onclick=()=>{$('#chainResult').hidden=!$('#chainResult').hidden};
renderPathogen();renderMyth();updateScores();updateProgress();
