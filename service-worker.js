/ -------- ANDMED --------

const bodyWords = [
  { et: "pea", it: ["testa", "la testa"] },
  { et: "silm", it: ["occhio", "l'occhio"] },
  { et: "nina", it: ["naso", "il naso"] },
  { et: "suu", it: ["bocca", "la bocca"] },
  { et: "hammas", it: ["dente", "il dente"] },
  { et: "keel", it: ["lingua", "la lingua"] },
  { et: "kõrv", it: ["orecchio", "l'orecchio"] },
  { et: "kael", it: ["collo", "il collo"] },
  { et: "õlg", it: ["spalla", "la spalla"] },
  { et: "käsi (randmest allpool)", it: ["mano", "la mano"] },
  { et: "sõrm", it: ["dito", "il dito"] },
  { et: "rind", it: ["petto", "il petto", "torace", "il torace"] },
  { et: "selg", it: ["schiena", "la schiena"] },
  { et: "kõht", it: ["pancia", "la pancia", "stomaco", "lo stomaco"] },
  { et: "jalg", it: ["gamba", "la gamba"] },
  { et: "põlv", it: ["ginocchio", "il ginocchio"] },
  { et: "varvas", it: ["dito del piede", "il dito del piede"] },
  { et: "tagumik", it: ["sedere", "il sedere", "natiche", "le natiche", "glutei"] },
  { et: "naeratus", it: ["sorriso", "il sorriso"] },
  { et: "ripsmed", it: ["ciglia", "le ciglia"] },
  { et: "huuled", it: ["labbra", "le labbra"] },
  { et: "põsk", it: ["guancia", "la guancia"] },
  { et: "põsed", it: ["guance", "le guance"] },
  { et: "kulm", it: ["sopracciglio", "il sopracciglio"] },
  { et: "kulmud", it: ["sopracciglia", "le sopracciglia"] },
  { et: "meeste suguelund", it: ["pene", "il pene", "pisello"] },
  { et: "naiste suguelund", it: ["vagina", "la vagina", "vulva", "la vulva"] }
];

const daysMonthsDirs = [
  { et: "esmaspäev", it: ["lunedì", "lunedi", "il lunedì", "il lunedi"] },
  { et: "teisipäev", it: ["martedì", "martedi", "il martedì", "il martedi"] },
  { et: "kolmapäev", it: ["mercoledì", "mercoledi", "il mercoledì", "il mercoledi"] },
  { et: "neljapäev", it: ["giovedì", "giovedi", "il giovedì", "il giovedi"] },
  { et: "reede", it: ["venerdì", "venerdi", "il venerdì", "il venerdi"] },
  { et: "laupäev", it: ["sabato", "il sabato"] },
  { et: "pühapäev", it: ["domenica", "la domenica"] },

  { et: "jaanuar", it: ["gennaio", "il mese di gennaio"] },
  { et: "veebruar", it: ["febbraio", "il mese di febbraio"] },
  { et: "märts", it: ["marzo", "il mese di marzo"] },
  { et: "aprill", it: ["aprile", "il mese di aprile"] },
  { et: "mai", it: ["maggio", "il mese di maggio"] },
  { et: "juuni", it: ["giugno", "il mese di giugno"] },
  { et: "juuli", it: ["luglio", "il mese di luglio"] },
  { et: "august", it: ["agosto", "il mese di agosto"] },
  { et: "september", it: ["settembre", "il mese di settembre"] },
  { et: "oktoober", it: ["ottobre", "il mese di ottobre"] },
  { et: "november", it: ["novembre", "il mese di novembre"] },
  { et: "detsember", it: ["dicembre", "il mese di dicembre"] },

  { et: "põhi", it: ["nord", "il nord"] },
  { et: "lõuna", it: ["sud", "il sud"] },
  { et: "ida", it: ["est", "l'est"] },
  { et: "lääs", it: ["ovest", "l'ovest"] },

  { et: "üles", it: ["su", "verso l'alto"] },
  { et: "alla", it: ["giù", "verso il basso"] },
  { et: "vasakule", it: ["a sinistra", "sinistra"] },
  { et: "paremale", it: ["a destra", "destra"] },
  { et: "edasi", it: ["avanti", "dritto", "vai avanti"] },
  { et: "tagasi", it: ["indietro", "torna indietro"] }
];

function italianNumber(n) {
  n = Number(n);
  if (!Number.isInteger(n) || n <= 0 || n > 9999) return String(n);

  const units = ["", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove"];
  const teens = {
    10: "dieci", 11: "undici", 12: "dodici", 13: "tredici", 14: "quattordici", 15: "quindici",
    16: "sedici", 17: "diciassette", 18: "diciotto", 19: "diciannove"
  };
  const tensWords = {
    2: "venti",
    3: "trenta",
    4: "quaranta",
    5: "cinquanta",
    6: "sessanta",
    7: "settanta",
    8: "ottanta",
    9: "novanta"
  };
  const hundredsWords = {
    1: "cento",
    2: "duecento",
    3: "trecento",
    4: "quattrocento",
    5: "cinquecento",
    6: "seicento",
    7: "settecento",
    8: "ottocento",
    9: "novecento"
  };

  if (n <= 9) return units[n];
  if (n >= 10 && n < 20) return teens[n];

  if (n < 100) {
    const t = Math.floor(n / 10);
    const u = n % 10;
    let tensWord = tensWords[t];
    if (u === 1 || u === 8) {
      tensWord = tensWord.slice(0, -1); // venti -> vent, venti -> vent, trenta -> trent
    }
    return u === 0 ? tensWord : tensWord + units[u];
  }

  if (n === 100) return "cento";
  if (n < 200) return "cento" + italianNumber(n - 100);

  if (n < 1000) {
    const h = Math.floor(n / 100);
    const r = n % 100;
    let prefix = hundredsWords[h];
    if (r >= 80 && r < 90) {
      prefix = prefix.replace(/o$/, "");
    }
    return r === 0 ? prefix : prefix + italianNumber(r);
  }

  if (n === 1000) return "mille";
  if (n < 2000) return "mille" + (n === 1000 ? "" : italianNumber(n - 1000));

  const thousands = Math.floor(n / 1000);
  const rem = n % 1000;
  const thousandsPart = italianNumber(thousands) + "mila";
  return rem === 0 ? thousandsPart : thousandsPart + italianNumber(rem);
}

function buildNumberWords() {
  const pool = [];
  for (let i = 1; i <= 100; i++) pool.push(i);
  for (let i = 1; i <= 9; i++) pool.push(i * 100);
  for (let i = 1; i <= 9; i++) pool.push(i * 1000);

  const shuffled = pool.sort(function() { return Math.random() - 0.5; });
  const selected = shuffled.slice(0, 10);

  return selected.map(function(n) {
    const word = italianNumber(n);
    return {
      et: String(n),
      it: [word, String(n)]
    };
  });
}

// -------- MUUTUJAD --------

const MAX_QUESTIONS = 15;
let currentWords = [];
let currentWord = null;
let usedIndices = [];
let results = [];
let currentMode = null;
let lastResult = null; // ainult VIIMANE vastatud küsimus
let questionLimit = 0;
let recognition = null;
let speechSupported = false;

// -------- ABI --------

function normalize(str) {
  // kaitse null/undefined eest
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function speak(text, lang) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  window.speechSynthesis.speak(utterance);
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.lang = "it-IT";
  recognition.interimResults = false;

  recognition.onresult = function(event) {
    if (!event.results || !event.results[0] || !event.results[0][0]) return;
    const transcript = event.results[0][0].transcript;
    answerInput.value = transcript;
    document.getElementById("speech-status").textContent = `Kuuldud: "${transcript}"`;
  };

  recognition.onerror = function(event) {
    document.getElementById("speech-status").textContent = "Hääletuvastus ebaõnnestus: " + event.error;
  };

  recognition.onend = function() {
    voiceBtn.disabled = false;
  };

  speechSupported = true;
}

function startVoiceInput() {
  if (!speechSupported || !recognition) return;
  document.getElementById("speech-status").textContent = "Kuulan ...";
  voiceBtn.disabled = true;
  recognition.start();
}

function showModeSelect() {
  document.getElementById("mode-select").style.display = "block";
  document.getElementById("quiz-area").style.display = "none";
}

function renderLastResult() {
  const div = document.getElementById("last-result");
  if (!lastResult) {
    div.innerHTML = "";
    return;
  }
  const rowClass = lastResult.ok ? "correct-row" : "wrong-row";
  let html = "<h3>Eelmine küsimus</h3>";
  html += '<table><tr><th>Eesti</th><th>Sinu vastus</th><th>Õige(d)</th></tr>';
  html += `<tr class="${rowClass}">
                 <td>${lastResult.et}</td>
                 <td>${lastResult.user}</td>
                 <td>${lastResult.correct}</td>
               </tr>`;
  html += "</table>";
  div.innerHTML = html;
}

function startMode(mode) {
  currentMode = mode;
  usedIndices = [];
  results = [];
  lastResult = null;
  currentWord = null;
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer-input").value = "";
  document.getElementById("summary").innerHTML = "";
  renderLastResult();
  questionLimit = 0;
  document.getElementById("speech-status").textContent = speechSupported
    ? "Saad kirjutamise asemel ka häälega vastata."
    : "Hääletuvastus ei ole selles brauseris toetatud.";
  voiceBtn.disabled = !speechSupported;

  if (mode === "body") {
    currentWords = bodyWords.slice();
    document.getElementById("mode-title").textContent = "Kehaosad";
    document.getElementById("instructions").textContent =
      "Kuvatakse kehaosa eesti keeles. Kirjuta itaaliakeelne vastus (võid kasutada ka häälsisestust). Kõik sõnad küsitakse kuni 15 korra täitumiseni.";
  } else if (mode === "numbers") {
    currentWords = buildNumberWords();
    document.getElementById("mode-title").textContent = "Numbrid";
    document.getElementById("instructions").textContent =
      "Küsitakse 10 juhuslikku numbrit (1–100, sajad, tuhanded). Võid vastata itaalia sõnaga või lihtsalt numbriga.";
  } else if (mode === "days") {
    currentWords = daysMonthsDirs.slice();
    document.getElementById("mode-title").textContent = "Päevad, kuud ja suunad";
    document.getElementById("instructions").textContent =
      "Küsitakse nädalapäevi, 12 kuud, ilmakaari ja suundi (üles, alla, vasakule, paremale, edasi, tagasi). Kirjuta itaaliakeelne vastus.";
  }

  questionLimit = Math.min(MAX_QUESTIONS, currentWords.length);

  document.getElementById("mode-select").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  pickNewWord();
}

function pickNewWord() {
  if (!currentWords.length) return;

  if (usedIndices.length >= questionLimit || usedIndices.length === currentWords.length) {
    showSummary();
    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * currentWords.length);
  } while (usedIndices.includes(index));

  usedIndices.push(index);
  currentWord = currentWords[index];

  document.getElementById("estonian-word").textContent = currentWord.et;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer-input").focus();
  document.getElementById("speech-status").textContent = speechSupported
    ? "Saad vajutada \"Ütle vastus\" ja vastata häälega."
    : "Hääletuvastus ei ole selles brauseris toetatud.";
}

function checkAnswer() {
  if (!currentWord) return;

  const inputRaw = document.getElementById("answer-input").value;
  const input = normalize(inputRaw);
  if (!input) {
    document.getElementById("feedback").textContent =
      "Kirjuta palun vastus enne kontrollimist.";
    return;
  }

  const correctNormalized = currentWord.it.map(normalize);
  const isCorrect = correctNormalized.includes(input);

  const feedback = document.getElementById("feedback");
  const correctText = currentWord.it.join(", ");

  const row = {
    et: currentWord.et,
    user: inputRaw,
    correct: correctText,
    ok: isCorrect
  };

  results.push(row);
  lastResult = row;
  renderLastResult();

  if (isCorrect) {
    feedback.textContent = "ÕIGE! ✅ – " + correctText;
  } else {
    feedback.textContent = "❌ Vale. Õige(d): " + correctText;
  }

  speak(currentWord.it[0], "it-IT");

  if (results.length >= questionLimit) {
    feedback.textContent += " Maksimum 15 küsimust on täis – kuvan kokkuvõtte.";
    setTimeout(showSummary, 500);
  }
}

function renderSummary() {
  const summaryDiv = document.getElementById("summary");
  summaryDiv.innerHTML = "";

  if (!results.length) {
    summaryDiv.innerHTML = "<h2>Kokkuvõte</h2><p>Ühtegi vastust ei jõudnud anda.</p>";
    return;
  }

  const correctCount = results.filter(r => r.ok).length;
  let html = "<h2>Kokkuvõte</h2>" +
             "<p>Õigeid vastuseid: " + correctCount + " / " + results.length + "</p>";

  html += "<table><tr><th>Eesti sõna / number</th><th>Sinu vastus</th><th>Õige(d)</th></tr>";

  results.forEach(function(row) {
    const rowClass = row.ok ? "correct-row" : "wrong-row";
    html += '<tr class="' + rowClass + '">';
    html += "<td>" + row.et + "</td>";
    html += "<td>" + row.user + "</td>";
    html += "<td>" + row.correct + "</td>";
    html += "</tr>";
  });

  html += "</table>";

  summaryDiv.innerHTML = html;
}

function showSummary() {
  // Näita kokkuvõtet seni antud vastustest ja vii kasutaja tagasi blokkide valikusse
  document.getElementById("quiz-area").style.display = "none";
  renderSummary();
  document.getElementById("mode-select").style.display = "block";
}

function restartApp() {
  // Kui soovid kustutada kogu seansi (nt kui kasutaja valib uue blokki),
  // startMode funktsioon teeb selle juba ette kui uus mood alustatakse.
  currentMode = null;
  currentWords = [];
  usedIndices = [];
  results = [];
  lastResult = null;
  currentWord = null;
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer-input").value = "";
  document.getElementById("summary").innerHTML = "";
  document.getElementById("estonian-word").textContent =
    "Vali uuesti blokk ja vajuta “Järgmine”.";
  renderLastResult();
  showModeSelect();
}

// -------- NUPUD --------

const modeBodyBtn = document.getElementById("mode-body");
const modeNumbersBtn = document.getElementById("mode-numbers");
const modeDaysBtn = document.getElementById("mode-days");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const restartBtn = document.getElementById("restart-btn");
const cancelBtn = document.getElementById("cancel-btn");
const answerInput = document.getElementById("answer-input");
const voiceBtn = document.getElementById("voice-btn");
const speechStatus = document.getElementById("speech-status");

modeBodyBtn.onclick = function() { startMode("body"); };
modeNumbersBtn.onclick = function() { startMode("numbers"); };
modeDaysBtn.onclick = function() { startMode("days"); };
nextBtn.onclick = function() { pickNewWord(); };
checkBtn.onclick = function() { checkAnswer(); };
// nüüd: Alusta uuesti näitab kokkuvõtet seni antud vastustest (sama nagu Katkesta)
restartBtn.onclick = function() { showSummary(); };
// Katkesta: näita kokkuvõtet seni antud vastustest
cancelBtn.onclick = function() { showSummary(); };
voiceBtn.onclick = function() { startVoiceInput(); };

answerInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

initSpeechRecognition();
if (!speechSupported) {
  speechStatus.textContent = "Hääletuvastus ei ole selles brauseris toetatud.";
  voiceBtn.disabled = true;
} else {
  speechStatus.textContent = "Saad vajutada \"Ütle vastus\" ja rääkida itaalia keeles.";
}

// PWA service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("service-worker.js").catch(function(e){console.error(e);});
  });
}
