# JavaScript Tutorial - 12 Lektioner for Danske Blåkraver Iværksættere

**Målgruppe:** Mennesker uden programmerings-erfaring
**Sprog:** Dansk
**Formål:** Praktisk, applicable viden til interaktive websites
**Niveau:** Beginner til mellemstadiet

---

## Lektion 1: JavaScript Grundlæggende (Hvad er JavaScript, Syntax)

### Forklaring

JavaScript er et programmeringssprog, som er specielt lavet til at få websites til at arbejde dynamisk og interaktivt. Hvis HTML er huset og CSS er malingen, så er JavaScript den intelligens, der får huset til at reagere, når du trykker på dørklinker, slukker lys, eller åbner vinduer. Det kører direkte i din browser og kræver ikke, at du uploader kode til serveren hver gang.

Når du sidder på en webside og udfører noget – klikker på en knap, indlaster mere indhold, eller fylder en formular – er det næsten altid JavaScript, der arbejder bag kulisserne. For en blåkrave-iværksætter betyder det, at du kan skabe websites og webapplikationer, der er responsive, brugervenlige og får dine kunder til at blive.

JavaScript-syntaks er relativt enkel. Det er som at skrive instrukser på engelsk, men med særlige regler. Du skriver statements (instrukser), som computeren udfører fra top til bund. Hver linje er typisk adskilt af et semikolon (;), og strukturen er afgørende – hvis du placerer en parentes forkert, fungerer det ikke.

Du kan skrive JavaScript på tre måder: direkte i HTML-filen inden for `<script>`-tags, i en separat `.js`-fil, eller i browserens console (udvikler-værktøjer). For dette tutorial vil vi fokusere på det praktiske.

### Kode Eksempler

**Eksempel 1: Dit første JavaScript**
```javascript
// Dit allerførste JavaScript program
console.log("Hej verden!");
alert("Velkommen til JavaScript!");
```

**Eksempel 2: Kommentarer og struktur**
```javascript
// Dette er en en-linje kommentar

/*
  Dette er en multi-linje kommentar
  Du kan skrive flere linjer her
*/

console.log("Jeg er en instruks");
console.log("Jeg er en anden instruks");
// Hver linje udfører efter hinanden
```

**Eksempel 3: Bruger interaktion**
```javascript
// Spørg brugeren om deres navn
let navn = prompt("Hvad hedder du?");

// Vis det tilbage med alert
alert("Hej " + navn + ", velkommen til mit site!");

// Log det til console for debugging
console.log("Brugeren skrev: " + navn);
```

### Vigtige Takeaways

- **JavaScript gør websites interaktive** – det kører i browserens, ikke på serveren
- **Syntax betyder meget** – kommaer, parenteser og semikoloner skal være på plads
- **console.log() er dit bedste venner** – brug det til at se, hvad din kode gør
- **Du lærer ved at gøre** – åbn udvikler-værktøjerne (F12) og eksperimentér
- **Kommentarer er vigtige** – de hjælper dig (og andre) med at forstå koden senere

---

## Lektion 2: Variabler & Datatyper (let, const, strings, numbers, booleans)

### Forklaring

En variabel er som en beholder, der holder på information. Hvis JavaScript var en butik, ville variabler være hylderne, hvor du gemmer produkterne. Du giver hver hylde (variabel) et navn, så du ved, hvad der er i den. I JavaScript bruger du nøgleordene `let` og `const` til at deklarere variabler.

`let` og `const` er moderne måder at skabe variabler på. `const` betyder "konstant" – når du sætter en værdi, kan du ikke ændre den senere. `let` er fleksibel – du kan ændre værdien så mange gange, du vil. Hovedreglen: Brug `const` som standard, og brug kun `let`, hvis du ved, at værdien skal ændres.

JavaScript har flere datatyper. **Strings** er tekst (`"Hej verden"`), **numbers** er tal (42, 3.14), **booleans** er sand eller falsk (`true` eller `false`). Der er også `null` (ingen værdi), `undefined` (værdi ikke defineret endnu), og senere vil du møde **objects** og **arrays**, som er mere komplekse samlinger af data.

For en iværksætter betyder variabler, at du kan gemme kundedata, produktpriser, brugernavn, antal varer i kurven – alt hvad du har brug for til at drive din forretning digitalt.

### Kode Eksempler

**Eksempel 1: Variabler og datatyper**
```javascript
// String - tekst
const virksomhedsnavn = "Hansen's Elinstallatører";
let kundename = "Ole";

// Numbers - tal
const produktpris = 299.95;
let rabat = 50;
const dagskurs = 825;

// Boolean - sand eller falsk
const isOpen = true;
let harVarerPåLager = false;

// Vis det i console
console.log(virksomhedsnavn);
console.log(produktpris);
console.log(isOpen);
```

**Eksempel 2: Ændring af variabler med let**
```javascript
// const kan IKKE ændres
const fastadd = 500;
// fastadd = 600; // Dette giver fejl!

// let KAN ændres
let salgAug = 12000;
console.log("August salg: " + salgAug);

salgAug = 15000; // Nu opdaterer vi værdien
console.log("August salg (revideret): " + salgAug);

// Du kan også ændre ved at addere
salgAug = salgAug + 2000;
console.log("August salg (efter bonus): " + salgAug);
```

**Eksempel 3: Praksis-eksempel - Priskalkulation**
```javascript
// Virksomheds-omkostninger og priser
const timetakst = 350; // Dansk DKK
const antaltimer = 3;
const materialomkostning = 420;
const moms = 1.25; // 25% moms

// Beregn job-pris
const arbejdsomkostning = timetakst * antaltimer;
const samletomkostning = (arbejdsomkostning + materialomkostning) * moms;

console.log("Timetakst: " + timetakst + " DKK");
console.log("Timer: " + antaltimer);
console.log("Materialomkostning: " + materialomkostning + " DKK");
console.log("Samlet pris (med moms): " + samletomkostning + " DKK");
```

### Vigtige Takeaways

- **const er standard, let når nødvendigt** – dette gør koden mere sikker
- **Navngivning betyder meget** – brug danske ord, der er meningsfulde (`kundenavn`, ikke `k`)
- **Datatyper er vigtige** – tal uden anførselstegn, tekst med anførselstegn
- **Variabler er genbrugelige** – definer dem en gang, brug dem overalt
- **Console.log() er debugging-værktøjet** – hvad er værdien? Tjek i console

---

## Lektion 3: Operatorer & Logik (Matematiske operatorer, sammenligning, logiske)

### Forklaring

Operatorer er værktøjer, der udfører handlinger på dine variabler. Matematiske operatorer (+, -, *, /) er de basale – du kender dem fra folkeskolen. Men JavaScript har også sammenligningsoperatorer (`===`, `>`, `<`) og logiske operatorer (`&&` betyder "og", `||` betyder "eller"), som du bruger til at træffe beslutninger.

Hvis du skal bygge en e-handel-website, skal du kunne sige: "Hvis kunden er fra Danmark OG har købt mere end 500 kroner, giv gratis fragt." Det er præcis det, logiske operatorer gør. De hjælper dig med at skabe betinget logik – "hvis det er tilfældet, så gør det."

Sammenligningsoperatorer svarer på spørgsmål: "Er disse to ting ens?" (`===`), "Er denne værdi større end den anden?" (`>`). Dette er kultigtfor alt fra at tjekke, om en bruger er logget ind, til at afgøre, om et tal er indenfor det forventede interval.

For en blåkrave-iværksætter betyder det, at du kan opbygge intelligente websites: "Hvis prisen er over 1000 DKK, vis ikke gratis fragt-mulighed. Hvis mængden er mindre end 1, varn brugeren." Det er det, der gør sites nyttige.

### Kode Eksempler

**Eksempel 1: Matematiske operatorer**
```javascript
// Grundlæggende matematik
let pris = 100;
let mængde = 3;

let samletPris = pris * mængde;
console.log("Samlet før rabat: " + samletPris); // 300

// Rabat beregning
let rabat = samletPris * 0.1; // 10% rabat
let endeligt = samletPris - rabat;

console.log("Rabat: " + rabat); // 30
console.log("Endelig pris: " + endeligt); // 270

// Modulo - modulus (rest ved division)
let flasker = 17;
let pakker = 6;
let rest = flasker % pakker; // Hvor mange er tilbage?
console.log("Rest: " + rest); // 5
```

**Eksempel 2: Sammenlignings- og logiske operatorer**
```javascript
// Sammenligningsoperatorer
const kundealder = 45;
const minimalAlder = 18;

console.log(kundealder > minimalAlder); // true
console.log(kundealder === 45); // true
console.log(kundealder !== 25); // true (ikke lig med 25)

// Logiske operatorer - AND (&&)
const harUddannelse = true;
const harErfaring = true;

if (harUddannelse && harErfaring) {
  console.log("Kvalificeret kandidat!");
}

// Logiske operatorer - OR (||)
const erDanmark = true;
const erSverige = false;

if (erDanmark || erSverige) {
  console.log("Gratis fragt i Skandinavien!");
}

// Logiske operatorer - NOT (!)
const erLukket = false;

if (!erLukket) {
  console.log("Butikken er åben!");
}
```

**Eksempel 3: Praksis-eksempel - Bestilling validering**
```javascript
// En kunde lægger en ordre
const orderbeløb = 750;
const kundeHarGyldigKort = true;
const lagerBeståndingedmm = 5;

// Besøg-tæller for loyalty program
const besøg = 10;
const loyaltyDiscount = besøg >= 10 ? 0.15 : 0.05; // 15% hvis 10+ besøg, ellers 5%

// Validering
const validOrdre = orderbeløb > 0 && kundeHarGyldigKort && lagerBeståndingedmm > 0;

if (validOrdre) {
  let finalPris = orderbeløb * (1 - loyaltyDiscount);
  console.log("Ordre accepteret! Pris: " + finalPris + " DKK");
} else {
  console.log("Ordre kan ikke gennemføres.");
}
```

### Vigtige Takeaways

- **=== for sammenligning, ikke ==** – brug altid `===` til at sammenligne værdier
- **&& betyder og, || betyder eller** – disse er helt essentielle for logik
- **! betyder ikke** – det omvender sand til falsk og omvendt
- **Matematisk rækkefølge fungerer** – du kan bruge +, -, *, / som normalt
- **Operatorer skaber intelligente programmer** – det er hvordan du bygger beslutninger ind

---

## Lektion 4: Funktioner (Definering, kald, parametre, retur)

### Forklaring

En funktion er en genbrugelig blok kode. Tænk på det som en opskrift: du skriver den en gang, og så kan du følge den igen og igen. Hvis du skal beregne prisen på et job tyve gange om dagen, skriver du funktionen en gang og kalder den tyve gange. Det sparer tid og gør koden ren.

En funktion består af tre dele: definering (skrive den), parametre (input), og retur (output). Du definerer en funktion med `function`, giver den et navn, og siger, hvilke "ingredienser" (parametre) den behøver. Indenfor funktionen udfører du arbejdet, og til sidst returnerer du resultatet.

For en iværksætter betyder det, at du kan skabe små, genbrugelige værktøjer. En funktion til at beregne moms, en til at validere email-adresser, en til at gemme kunde-data. Du bygger biblioteker af små værktøjer, som du kombinerer til større, mere komplekse systemer.

Funktioner gør også din kode lettere at debugge. Hvis noget går galt med prisberegning, ved du nøjagtigt, hvilken funktion der skal undersøges. Uden funktioner har du kode spredt ud overalt, og det er svært at finde fejlen.

### Kode Eksempler

**Eksempel 1: Simpel funktion uden parametre**
```javascript
// Definer funktionen
function hilsen() {
  console.log("Velkommen til min virksomhed!");
  console.log("Vi åbner klokken 08:00");
}

// Kald funktionen
hilsen(); // Udskrives en gang
hilsen(); // Igen
hilsen(); // Og igen - samme kode, uden at skulle skrive det igen
```

**Eksempel 2: Funktion med parametre og retur**
```javascript
// Funktion der beregner job-pris
function beregnjobPris(timer, timetakst, materiale) {
  const arbejde = timer * timetakst;
  const samlet = arbejde + materiale;
  return samlet; // Returner resultatet
}

// Kald funktionen med forskellige værdier
const pris1 = beregnjobPris(3, 350, 420);
console.log("Job 1 pris: " + pris1 + " DKK"); // 1470

const pris2 = beregnjobPris(5, 350, 750);
console.log("Job 2 pris: " + pris2 + " DKK"); // 2500

// Samme funktion, forskelligt output - det er kraft i funktioner!
```

**Eksempel 3: Praksis-eksempel - Rabat-beregner**
```javascript
// Funktion der beregner endelig pris med rabat
function beregEndeliPris(originalPris, rabatProcent) {
  // Input: pris og rabat-procent
  // Output: endelig pris efter rabat

  const rabatBeløb = originalPris * (rabatProcent / 100);
  const endeliPris = originalPris - rabatBeløb;

  return endeliPris;
}

// Praktisk brug
const muremesterRegnig = 5000;
const seniorkunder Rabat = 15; // 15% rabat for loyale kunder

const finalPris = beregEndeliPris(muremesterRegnig, seniorkunder Rabat);
console.log("Original: " + muremesterRegnig + " DKK");
console.log("Rabat: " + seniorkunder Rabat + "%");
console.log("Endelig pris: " + finalPris + " DKK"); // 4250

// Anden kunde, anden rabat
const nykundePris = beregEndeliPris(2000, 5); // 5% for nye kunder
console.log("Ny kunde betaler: " + nykundePris + " DKK");
```

### Vigtige Takeaways

- **Funktioner er genbrugelige værktøjer** – definer en gang, brug mange gange
- **Parametre er input, return er output** – tænk på dem som ingredienser og resultat
- **Funktioner gør koden lettere at vedligeholde** – ændringer et sted, virker overalt
- **Navngiv funktioner klart** – `beregPris` er bedre end `do1`
- **Test dine funktioner** – kald dem med forskellige værdier og se, om de virker

---

## Lektion 5: Arrays & Objekter (Arbejde med samlinger, egenskaber)

### Forklaring

Arrays er lister af ting. Hvis variabler er enkle biler, er arrays parkeringspladser fulde af biler. Du bruger arrays, når du har flere værdier af samme type: liste over produkter, kundenavne, priser, eller bestillinger. Arrays er ordnet – det første element har index 0, det andet har index 1, og så videre.

Objekter er mere komplekse. De holder på egenskaber og værdier sammen. En kunde er ikke bare et navn – det er et navn, adresse, email, telefon, og løste ordrer. Et objekt grupperer alt det sammen på et sted. Du accederer værdier ved at skrive `objekt.egenskab` eller `objekt["egenskab"]`.

For en iværksætter betyder det, at du kan håndtere komplekse data ordentligt. En liste over ordrer (array) hvor hver ordre er et objekt med pris, dato, og kunde-info. Du kan filtrer, søge, og manipulere disse data på sofistikerede måder.

Arrays og objekter er fundamentale for at bygge virkelige applikationer. En to-do liste er et array af opgave-objekter. En kunde-database er et array af kunde-objekter. Lær disse godt, og du kan bygge hvad som helst.

### Kode Eksempler

**Eksempel 1: Arrays - Lister**
```javascript
// Opret et array over produkter
const produkter = ["Hammer", "Søm", "Skrue", "Lim"];

// Accedér elementer ved index
console.log(produkter[0]); // "Hammer" (første element)
console.log(produkter[2]); // "Skrue" (tredje element)

// Længde på array
console.log(produkter.length); // 4

// Tilføj nye produkter
produkter.push("Sandpapir");
console.log(produkter); // ["Hammer", "Søm", "Skrue", "Lim", "Sandpapir"]

// Fjern sidste element
produkter.pop();
console.log(produkter); // ["Hammer", "Søm", "Skrue", "Lim"]

// Gennemgå alle elementer
for (let i = 0; i < produkter.length; i++) {
  console.log("Produkt " + i + ": " + produkter[i]);
}
```

**Eksempel 2: Objekter - Grupperet data**
```javascript
// Opret et kunde-objekt
const kunde = {
  navn: "Lars Hansen",
  email: "lars@email.com",
  telefon: "40123456",
  firmaNavn: "Hansens Snedkeri",
  totaltkøbt: 12500,
  member: true
};

// Accedér egenskaber
console.log("Kunde: " + kunde.navn);
console.log("Email: " + kunde.email);
console.log("Total købt: " + kunde.totaltkøbt + " DKK");

// Opdater egenskaber
kunde.totaltkøbt = 15000;

// Tjek om egenskab eksisterer
if (kunde.member) {
  console.log(kunde.navn + " er medlem!");
}
```

**Eksempel 3: Praksis-eksempel - Ordre-system**
```javascript
// Array af ordre-objekter
const ordrer = [
  {
    ordreNummer: 1001,
    kunde: "Ole Olsen",
    beløb: 3500,
    status: "afsluttet",
    dato: "2026-03-01"
  },
  {
    ordreNummer: 1002,
    kunde: "Birthe Birgitsen",
    beløb: 1200,
    status: "igangværende",
    dato: "2026-03-02"
  },
  {
    ordreNummer: 1003,
    kunde: "Jens Jensen",
    beløb: 5000,
    status: "afsluttet",
    dato: "2026-02-28"
  }
];

// Find summen af alle ordrer
let totalSalg = 0;
for (let i = 0; i < ordrer.length; i++) {
  totalSalg += ordrer[i].beløb;
}
console.log("Samlet salg: " + totalSalg + " DKK"); // 9700

// Find ordrer der er afsluttet
for (let ordre of ordrer) {
  if (ordre.status === "afsluttet") {
    console.log("Afsluttet: " + ordre.kunde + " - " + ordre.beløb + " DKK");
  }
}

// Tilføj ny ordre
ordrer.push({
  ordreNummer: 1004,
  kunde: "Søren Sørenssen",
  beløb: 2800,
  status: "igangværende",
  dato: "2026-03-02"
});

console.log("Antal ordrer: " + ordrer.length); // 4
```

### Vigtige Takeaways

- **Arrays holder lister, index starter ved 0** – første element er [0], ikke [1]
- **Objekter holder relaterede data sammen** – navn, email, telefon i samme objekt
- **push() tilføjer, pop() fjerner fra array** – vigtige metoder
- **for-loops gennemgår arrays** – brugt til at gøre noget med hvert element
- **Kombiner arrays og objekter** – array af objekter er det rigtig virkeligt liv ligner

---

## Lektion 6: DOM Manipulation (Valg af elementer, ændring af HTML/CSS)

### Forklaring

DOM står for "Document Object Model" – det er browserens måde at repræsentere HTML-siden som en struktur, som JavaScript kan interagere med. Når du vil ændre tekst på siden, tilføje en knap dynamisk, eller skifte farve på et element, bruger du DOM manipulation.

DOM manipulation har tre trin: valg af element, ændring af det valgte element, og eventuel tilføjelse af nye elementer. Du vælger elementer ved at bruge `document.getElementById()`, `document.querySelector()`, eller lignende metoder. Når du har elementet, kan du ændre dets indhold, stil, attributter – hvad som helst.

For en blåkrave-iværksætter betyder det, at du kan skabe dynamiske websites uden at skulle laste siden om. Opdater ordrestatus uden at lade siden, vis/skjul sektioner baseret på brugerinput, ændre farver baseret på tid af dag. Det hele uden genopladning.

DOM er kernen i interaktive websites. Lær det godt, og du kan skabe websites, som føles som rigtige applikationer, ikke bare statiske sider.

### Kode Eksempler

**Eksempel 1: Valg af elementer og ændring af tekst**
```javascript
// HTML-side har et element:
// <h1 id="overskrift">Velkommen</h1>
// <p class="besked">Hej verden</p>

// Valg ved ID
const overskrift = document.getElementById("overskrift");
overskrift.innerText = "Velkommen til Hansen's Snedkeri";

// Valg ved klasse (første match)
const besked = document.querySelector(".besked");
besked.innerText = "Vi er åbne mandag-fredag kl 08-17";

// Valg af HTML-tag (alle matches)
const alleAfsnittet = document.querySelectorAll("p");
console.log("Antal afsnit: " + alleAfsnittet.length);

// Ændring af HTML direkte
const container = document.getElementById("container");
container.innerHTML = "<h2>Ny overskrift</h2><p>Nyt indhold</p>";
```

**Eksempel 2: Ændring af CSS-stil**
```javascript
// HTML: <div id="banner">Sommerkampagne</div>

const banner = document.getElementById("banner");

// Ændring af enkelt stil-egenskab
banner.style.backgroundColor = "red";
banner.style.color = "white";
banner.style.padding = "20px";
banner.style.fontSize = "24px";
banner.style.textAlign = "center";

// Eller add klasse (bedre praksis)
// CSS-fil har: .aktiv { background-color: green; color: white; }
banner.classList.add("aktiv");

// Fjern klasse
banner.classList.remove("aktiv");

// Toggle klasse (add hvis ej der, fjern hvis der)
banner.classList.toggle("aktiv");
```

**Eksempel 3: Praksis-eksempel - Dynamisk kundeliste**
```javascript
// HTML har: <div id="kundeliste"></div>

const kunder = [
  { navn: "Ole Olsen", købt: 5000 },
  { navn: "Birthe Birgitsen", købt: 3200 },
  { navn: "Jens Jensen", købt: 8750 }
];

const kundelistElement = document.getElementById("kundeliste");

// Opret liste dynamisk
let html = "<h2>Mine kunder</h2><ul>";

for (let kunde of kunder) {
  html += "<li>" + kunde.navn + " - " + kunde.købt + " DKK købt</li>";
}

html += "</ul>";

kundelistElement.innerHTML = html;

// Skift farve på højtydende kunder (købt mere end 5000)
const listItems = kundelistElement.querySelectorAll("li");

for (let item of listItems) {
  // Hvis teksten indeholder tallet 5 eller 8 (5000, 8750)
  if (item.innerText.includes("5") || item.innerText.includes("8")) {
    item.style.color = "green";
    item.style.fontWeight = "bold";
  }
}
```

### Vigtige Takeaways

- **getElementById() for ID, querySelector() for CSS-selektorer** – både virker, men querySelector er mere fleksibel
- **innerText for tekst, innerHTML for HTML** – pas på med innerHTML fra brugeinput (sikkerhed)
- **style-egenskaber bruger camelCase** – `backgroundColor`, ikke `background-color`
- **classList.add(), .remove(), .toggle()** – bedre end at manipulere style direkte
- **DOM manipulation gør websites levende** – det er hvor magien sker

---

## Lektion 7: Events & Listeners (Klik, submit, change-events)

### Forklaring

Events er ting der sker – en bruger klikker på en knap, skriver i et inputfelt, eller sender en formular. Event listeners er dine "øren" der lytter efter disse ting. Når du tilføjer en event listener til en knap, siger du: "Når denne knap klikkes, skal du udføre denne kode."

Event listeners er fundamentale for interaktive websites. Uden dem ville dit site være fuldstændig statisk – der ville ikke ske noget, når brugeren interagerer med det. Med event listeners kan du reagere på alt: klik, dobbeltklik, musebevægelse, tastetryk, formular-submit, og meget mere.

For en iværksætter betyder det, at du kan bygge responsiv brugergrænseflade. Når en kunde klikker "køb nu", sker noget. Når de udfylder et navn, validerer du det. Når de sender en henvendelse, gemmer du det. Du styrer hele brugeroplevelsen gennem events.

Events har to måder at blive håndteret på: du kan tilknyt en funktion direkte på HTML-elementet (`onclick="min_funktion()"`) eller bruge `addEventListener()`. Anden metode er bedre praksis, fordi den holder HTML og JavaScript adskilt.

### Kode Eksempler

**Eksempel 1: Klik-events**
```javascript
// HTML:
// <button id="myBtn">Klik mig</button>
// <p id="besked"></p>

const knap = document.getElementById("myBtn");
const besked = document.getElementById("besked");

let kliktæller = 0;

// Tilføj event listener
knap.addEventListener("click", function() {
  kliktæller++;
  besked.innerText = "Du har klikket " + kliktæller + " gange!";
});

// Alternativ: dobbeltklik
knap.addEventListener("dblclick", function() {
  besked.innerText = "DOBBELTKLIK registreret!";
  besked.style.color = "red";
});
```

**Eksempel 2: Form-events og input**
```javascript
// HTML:
// <input type="text" id="kundenavn" placeholder="Dit navn">
// <input type="email" id="email" placeholder="Din email">
// <p id="status"></p>

const navnInput = document.getElementById("kundenavn");
const emailInput = document.getElementById("email");
const status = document.getElementById("status");

// Når bruger skriver i navn-feltet
navnInput.addEventListener("input", function() {
  status.innerText = "Du skrev: " + navnInput.value;
});

// Når bruger forlader email-feltet
emailInput.addEventListener("blur", function() {
  if (emailInput.value.includes("@")) {
    status.innerText = "Email ser ud til at være gyldig!";
    status.style.color = "green";
  } else {
    status.innerText = "Email er ikke gyldig!";
    status.style.color = "red";
  }
});
```

**Eksempel 3: Praksis-eksempel - Order form med live validering**
```javascript
// HTML:
// <form id="orderForm">
//   <input type="text" id="navn" placeholder="Dit navn" required>
//   <input type="email" id="email" placeholder="Din email" required>
//   <input type="number" id="mængde" placeholder="Mængde" min="1">
//   <button type="submit">Indsend ordre</button>
// </form>
// <p id="feedback"></p>

const form = document.getElementById("orderForm");
const navnFelt = document.getElementById("navn");
const emailFelt = document.getElementById("email");
const mængdeFelt = document.getElementById("mængde");
const feedback = document.getElementById("feedback");

// Validering mens bruger skriver
navnFelt.addEventListener("input", function() {
  if (navnFelt.value.length < 2) {
    feedback.innerText = "Navn skal være mindst 2 tegn";
    feedback.style.color = "red";
  } else {
    feedback.innerText = "Navn OK";
    feedback.style.color = "green";
  }
});

// Når form sendes
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop normal form-submit

  // Validering
  if (navnFelt.value && emailFelt.value && mængdeFelt.value > 0) {
    feedback.innerText = "Tak, " + navnFelt.value + "! Din ordre er modtaget. Email sendt til " + emailFelt.value;
    feedback.style.color = "green";

    // Ryd form
    form.reset();
  } else {
    feedback.innerText = "Udfyld alle felter korrekt!";
    feedback.style.color = "red";
  }
});
```

### Vigtige Takeaways

- **addEventListener() er bedste praksis** –hold HTML og JavaScript adskilt
- **e.preventDefault() stopper default opførelse** – vigtig ved form-submit
- **event.target giver dig det element der triggede eventet** – brugt til dinamisk kode
- **"click", "change", "input", "submit" er almindelige events** – lær disse først
- **Events er hvor bruger-interaktion sker** – uden events er der ingen app

---

## Lektion 8: Forms & Validering (Hent input, validér data)

### Forklaring

Formularer er hvordan du får input fra brugere. De er kritiske for enhver virksomhed – kundedata, ordrer, henvendelser, tilmeldinger. Men du kan ikke stole på, at brugere indfylder dem rigtigt. En kunde kan skrive "åtte" i stedet for "8" i antal-feltet, eller glemme at tilføje et @ i email-feltet. Det er her validering kommer ind.

Validering er processen med at tjekke, at data er korrekt, før du bruger det. Du kan validere på to måder: client-side (i browserens JavaScript) og server-side (på serveren). Client-side validering giver øjeblikkelig feedback til brugeren – "denne email ser ikke rigtig ud". Server-side validering er sikkerhedsmæssigt vigtig, fordi brugere kan omgå client-side validering.

For en iværksætter betyder det, at du kan sikre dig, at ordrer er komplette, at kundedata er korrekt, at betalinger går gennem. Du reducer fejl, forbedrer brugeroplevelse, og beskytter din virksomhed.

Validering inkluderer typiske checks: Felt er ikke tomt? Email har et @? Tal er et tal? Længde er passende? Disse simple checks kan spare dig for dårlig data og brugerfrustrationer.

### Kode Eksempler

**Eksempel 1: Grundlæggende validering**
```javascript
// HTML: <input type="text" id="telefon" placeholder="Telefonnummer">
// <p id="fejl"></p>

const telefonFelt = document.getElementById("telefon");
const fejlBesked = document.getElementById("fejl");

telefonFelt.addEventListener("blur", function() {
  const telefon = telefonFelt.value.trim(); // Fjern mellemrum

  // Tjek om det er tomt
  if (telefon === "") {
    fejlBesked.innerText = "Telefonnummer må ikke være tomt";
    fejlBesked.style.color = "red";
    return;
  }

  // Tjek længde - danske nummre har omkring 8 tegn
  if (telefon.length < 8 || telefon.length > 12) {
    fejlBesked.innerText = "Telefonnummer skal være 8-12 tegn";
    fejlBesked.style.color = "red";
    return;
  }

  // Tjek om det kun er tal (og evt. + eller -)
  if (!/^[0-9+\-]+$/.test(telefon)) {
    fejlBesked.innerText = "Telefonnummer kan kun indeholde tal, + og -";
    fejlBesked.style.color = "red";
    return;
  }

  // Hvis vi når herop, er det ok
  fejlBesked.innerText = "Telefonnummer OK";
  fejlBesked.style.color = "green";
});
```

**Eksempel 2: Email og password validering**
```javascript
// HTML:
// <input type="email" id="email">
// <input type="password" id="password">
// <p id="emailFejl"></p>
// <p id="passwordFejl"></p>

const emailFelt = document.getElementById("email");
const passwordFelt = document.getElementById("password");
const emailFejl = document.getElementById("emailFejl");
const passwordFejl = document.getElementById("passwordFejl");

function validerEmail(email) {
  // Simpel email check
  return email.includes("@") && email.includes(".");
}

emailFelt.addEventListener("blur", function() {
  if (validerEmail(emailFelt.value)) {
    emailFejl.innerText = "";
  } else {
    emailFejl.innerText = "Email skal indeholde @ og .";
    emailFejl.style.color = "red";
  }
});

// Password skal mindst være 8 tegn
passwordFelt.addEventListener("input", function() {
  if (passwordFelt.value.length < 8) {
    passwordFejl.innerText = "Password skal mindst være 8 tegn";
    passwordFejl.style.color = "red";
  } else {
    passwordFejl.innerText = "Password OK";
    passwordFejl.style.color = "green";
  }
});
```

**Eksempel 3: Praksis-eksempel - Butik-ordre form**
```javascript
// HTML:
// <form id="orderForm">
//   <input type="text" id="navn" placeholder="Dit navn">
//   <input type="email" id="email" placeholder="Din email">
//   <input type="text" id="adresse" placeholder="Leveringsadresse">
//   <input type="number" id="mængde" placeholder="Mængde" min="1">
//   <input type="text" id="betalingsmetode" placeholder="f.eks. Kort, MobilePay">
//   <button type="submit">Gennemfør ordre</button>
// </form>
// <p id="validationBesked"></p>

const orderForm = document.getElementById("orderForm");
const validationBesked = document.getElementById("validationBesked");

// Funktion der validerer hele form
function validerOrdre() {
  const navn = document.getElementById("navn").value.trim();
  const email = document.getElementById("email").value.trim();
  const adresse = document.getElementById("adresse").value.trim();
  const mængde = document.getElementById("mængde").value;
  const betalingsmetode = document.getElementById("betalingsmetode").value.trim();

  // Navn tjek
  if (navn === "") {
    validationBesked.innerText = "Navn er påkrævet";
    return false;
  }
  if (navn.length < 3) {
    validationBesked.innerText = "Navn skal være mindst 3 tegn";
    return false;
  }

  // Email tjek
  if (!email.includes("@")) {
    validationBesked.innerText = "Email skal indeholde @";
    return false;
  }

  // Adresse tjek
  if (adresse === "") {
    validationBesked.innerText = "Adresse er påkrævet";
    return false;
  }

  // Mængde tjek
  if (mængde === "" || mængde < 1) {
    validationBesked.innerText = "Mængde skal være mindst 1";
    return false;
  }

  // Betalingsmetode tjek
  const gyldigeMetoder = ["Kort", "MobilePay", "Overførsel"];
  if (!gyldigeMetoder.includes(betalingsmetode)) {
    validationBesked.innerText = "Vælg gyldig betalingsmetode";
    return false;
  }

  return true; // Alt OK
}

// Form submit handler
orderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  if (validerOrdre()) {
    validationBesked.innerText = "Ordre modtaget! Tak for dit køb!";
    validationBesked.style.color = "green";
    orderForm.reset();
  } else {
    validationBesked.style.color = "red";
  }
});
```

### Vigtige Takeaways

- **Validering på client-side giver øjeblikkelig feedback** – bedre brugeroplevelse
- **Alle vigtige felter skal valideres** – navn, email, telefon, tal osv.
- **Regex (regulære udtryk) kan bruges til kompleks matching** – f.eks. `/^[0-9+\-]+$/` for tal
- **Trim() fjerner mellemrum** – brugere tilføjer ofte uintenderet whitespace
- **Validering forebygger fejl** – sparer tid og frustration længere ned

---

## Lektion 9: Async JavaScript (setTimeout, fetch basics)

### Forklaring

Async betyder "asynkron" – handling som ikke sker med det samme. Normalt kører JavaScript linje for linje, venligt og sekvensielt. Men nogle ting tager tid – at hente data fra nettet, at vente på en bruger-handling, at gemme data i en database. Under denne tid kan du ikke blokere hele programmet. Det er her async JavaScript kommer ind.

`setTimeout()` er den mest grundlæggende async funktion. Den siger: "Venligst udfør denne kode om 2 sekunder" eller hvad som helst. Du bruger det til at forsinke ting, skjule notifikationer efter et par sekunder, eller animere elements på siden.

`fetch()` er hvordan du henter data fra internettet uden at lade siden. Klassisk ville du navigere til en URL og vente på, at siden lades. Med fetch kan du stille en forespørgsel i baggrund og håndtere resultatet når det kommer – siden holder med at fungere hele tiden.

For en blåkrave-iværksætter betyder det, at du kan bygge websites der føles responsiv og moderne. Gemte data uden genladning, vis indlæsnings-animationer mens du venter, hent nye priser uden at afbryde bruger.

### Kode Eksempler

**Eksempel 1: setTimeout - Forsinket kørsel**
```javascript
// HTML: <p id="besked">Starter timer...</p>

const besked = document.getElementById("besked");

// Udfør noget efter 2 sekunder
setTimeout(function() {
  besked.innerText = "2 sekunder er gået!";
}, 2000); // 2000 millisekunder = 2 sekunder

// Udfør noget efter 5 sekunder
setTimeout(function() {
  besked.style.color = "green";
  besked.innerText = "Og nu er det grønt!";
}, 5000);

// Eksempel: Skjul en notifikation efter 3 sekunder
const notifikation = document.getElementById("notifikation");
notifikation.style.display = "block";

setTimeout(function() {
  notifikation.style.display = "none";
}, 3000);

// setInterval - Gentag hver anden anden
let tæller = 0;
const interval = setInterval(function() {
  tæller++;
  console.log("Tæller: " + tæller);

  if (tæller >= 5) {
    clearInterval(interval); // Stop gentagen efter 5 gange
  }
}, 1000); // Hver 1000ms (1 sekund)
```

**Eksempel 2: fetch - Hent data fra API**
```javascript
// Hent JSON data fra en URL
fetch("https://api.example.com/produkter")
  .then(response => response.json()) // Konvertér til JSON
  .then(data => {
    console.log("Data modtaget:", data);

    // Nu kan du arbejde med data
    for (let produkt of data) {
      console.log(produkt.navn + ": " + produkt.pris + " DKK");
    }
  })
  .catch(error => {
    console.log("Fejl ved hentning af data:", error);
  });

// Alternative: POST-request (send data)
const nyProdukt = {
  navn: "Ny Hammer",
  pris: 299.95,
  lager: 50
};

fetch("https://api.example.com/produkter", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(nyProdukt)
})
.then(response => response.json())
.then(data => {
  console.log("Produkt oprettet:", data);
})
.catch(error => {
  console.log("Fejl:", error);
});
```

**Eksempel 3: Praksis-eksempel - Live priser med indlæsnings-animering**
```javascript
// HTML:
// <button id="hentPriserBtn">Hent aktuelle priser</button>
// <div id="indlæsning" style="display:none;">Indlæser...</div>
// <div id="priserContainer"></div>

const btn = document.getElementById("hentPriserBtn");
const indlæsning = document.getElementById("indlæsning");
const priserContainer = document.getElementById("priserContainer");

btn.addEventListener("click", function() {
  // Vis indlæsnings-animator
  indlæsning.style.display = "block";
  priserContainer.innerHTML = "";

  // Simulér hentning af priser fra server
  // (I virkelighed ville du fetch en rigtig API)
  setTimeout(function() {
    // Simuleret data
    const priser = [
      { navn: "Hammer", pris: 149.95 },
      { navn: "Søm (1kg)", pris: 49.95 },
      { navn: "Elektro-slibemaskine", pris: 1299.95 }
    ];

    // Skjul indlæsning
    indlæsning.style.display = "none";

    // Vis priser
    let html = "<h3>Aktuelle priser</h3>";
    for (let produkt of priser) {
      html += "<p>" + produkt.navn + ": " + produkt.pris + " DKK</p>";
    }

    priserContainer.innerHTML = html;
  }, 2000); // Simuleér 2 sekunders indlæsning
});
```

### Vigtige Takeaways

- **setTimeout() forsinkerer kørsel** – brugt til notifikationer, animationer, osv.
- **setInterval() gentager** – pass på med uendelig gentagelse
- **fetch() henter data uden genladning** – asynkron, ikke blokerende
- **.then() håndterer resultat når det kommer** – kæder operationer
- **.catch() håndterer fejl** – vigtig for net-operationer der kan fejle

---

## Lektion 10: Arbejde med APIs (Hent data fra webservices)

### Forklaring

En API (Application Programming Interface) er en måde for programmer til at tale med hinanden. Forestil dig, at en vejrapp ikke selv beregner vejret – den spørger en vejr-tjeneste om data. Det er hvad en API gør – den tilbyder data eller funktioner, som andre programmer kan bruge.

For en blåkrave-iværksætter betyder det, at du kan integrere data fra andre kilder ind i dit website. En E-handel-site kunne integrere med leverandør-APIs for at se lagerbeholdning, priser, eller fragt-muligheder i realtid. En håndværks-site kunne vise vejret, så kunder ved, om det er godt arbejdsvejr.

APIs returnerer typisk data i JSON-format – menneske-læseligt og struktureret. Du bruger `fetch()` til at anmode API'en, får JSON tilbage, og manipulerer det i dit program. De bedste APIs har dokumentation, der forklarer, hvilke data du kan forespørge, og hvad du får tilbage.

Nogle APIs kræver en "API-nøgle" – et token, der beviser, at du er den, du siger du er. Andre er helt offentlige. Når du sender følsomme data (kundeinfo), bruger du HTTPS, ikke HTTP, for kryptering.

### Kode Eksempler

**Eksempel 1: Simpel API-kald - JSONPlaceholder (test API)**
```javascript
// JSONPlaceholder er et gratis test-API med fake data

// Hent en bruger
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(bruger => {
    console.log("Bruger navn: " + bruger.name);
    console.log("Email: " + bruger.email);
    console.log("Firma: " + bruger.company.name);
  });

// Hent alle posts fra bruger 1
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then(response => response.json())
  .then(posts => {
    console.log("Antal posts: " + posts.length);

    for (let post of posts) {
      console.log(post.title); // Hver post har titel
    }
  });
```

**Eksempel 2: API med fejlhåndtering og indlæsning**
```javascript
// HTML:
// <button id="hentDataBtn">Hent bruger</button>
// <div id="indlæsning" style="display:none;">Indlæser...</div>
// <div id="brugerInfo"></div>
// <p id="fejl"></p>

const btn = document.getElementById("hentDataBtn");
const indlæsning = document.getElementById("indlæsning");
const brugerInfo = document.getElementById("brugerInfo");
const fejl = document.getElementById("fejl");

btn.addEventListener("click", function() {
  indlæsning.style.display = "block";
  brugerInfo.innerHTML = "";
  fejl.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response => {
      // Tjek om request var vellykket
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(bruger => {
      indlæsning.style.display = "none";

      // Vis bruger info
      brugerInfo.innerHTML = `
        <h3>${bruger.name}</h3>
        <p>Email: ${bruger.email}</p>
        <p>Firma: ${bruger.company.name}</p>
        <p>Telefon: ${bruger.phone}</p>
      `;
    })
    .catch(error => {
      indlæsning.style.display = "none";
      fejl.innerHTML = "Fejl ved hentning af data: " + error.message;
      fejl.style.color = "red";
    });
});
```

**Eksempel 3: Praksis-eksempel - Virkelig API (vejr eller valuta)**
```javascript
// Eksempel med OpenWeatherMap API (skal have API-nøgle)
// Eller du kan bruge en gratis API uden nøgle

// HTML:
// <input type="text" id="by" placeholder="Skriv byby navn" value="København">
// <button id="vejrBtn">Se vejr</button>
// <div id="vejrInfo"></div>

const byInput = document.getElementById("by");
const vejrBtn = document.getElementById("vejrBtn");
const vejrInfo = document.getElementById("vejrInfo");

vejrBtn.addEventListener("click", function() {
  const by = byInput.value;

  // Eksempel med Open-Meteo (gratis, ingen API-nøgle)
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${by}&language=dk&limit=1`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length === 0) {
        vejrInfo.innerHTML = "By ikke fundet";
        return;
      }

      const sted = data.results[0];
      const bredegrad = sted.latitude;
      const længdegrad = sted.longitude;

      // Nu hent vejr for denne lokation
      return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${bredegrad}&longitude=${længdegrad}&current=temperature_2m,weather_code&timezone=Europe/Copenhagen`);
    })
    .then(response => response.json())
    .then(vejrData => {
      const temp = vejrData.current.temperature_2m;
      const vejrKode = vejrData.current.weather_code;

      vejrInfo.innerHTML = `
        <h3>Vejr i ${byInput.value}</h3>
        <p>Temperatur: ${temp}°C</p>
        <p>Vejr kode: ${vejrKode}</p>
      `;
    })
    .catch(error => {
      vejrInfo.innerHTML = "Fejl: " + error.message;
    });
});
```

### Vigtige Takeaways

- **API'er tilbyder data du ikke skal gemme selv** – vejr, valuta, produktdata fra andre kilder
- **JSON er standard format** – struktureret data som arrays og objekter
- **Altid tjek response.ok** – netværk kan fejle, og API'er kan returnere fejl
- **Dokumentation er vigtig** – læs API-dokumentation for at forstå, hvad du kan anmode
- **API-nøgler holdes private** – aldrig commit API-nøgler til offentlige repositories

---

## Lektion 11: Debugging & Testing (Console, finde fejl)

### Forklaring

Debugging er kunsten at finde og rette fejl i din kode. Selv erfarne programmører skriver fejl – det er en del af processen. Ligegyldigt hvor god du er, skal du kunne finde og rette fejl hurtigt. JavaScript giver dig værktøjer til at gøre dette: browser-console, `console.log()`, breakpoints, og fejlmeddelelser.

`console.log()` er dit primære debug-værktøj. Du skriver dine værdier der, og ser hvad der faktisk sker. Er variablen hvad du tænkte? Bliver funktionen kaldt? Hvad er længden på det array? `console.log()` svarer på alt.

Browser-udvikler-værktøjer (åbn med F12) viser fejl direkte. Hvis din kode krasjer, fortæller console dig præcis hvad der gik galt og på hvilken linje. Læs fejlmeddelelserne – de er dine venner.

For en blåkrave-iværksætter betyder det, at du kan løse dine egne problemer. Du behøver ikke altid hjælp – du kan finde fejlen selv, forstå hvad der gik galt, og rette det. Det gør dig uafhængig og sikker på din kode.

### Kode Eksempler

**Eksempel 1: console.log til debugging**
```javascript
// Eksempel: En funktion der burde virke, men virker ikke

function beregRabat(pris, rabatProcent) {
  console.log("Funktion kaldt med pris=" + pris + ", rabat=" + rabatProcent);

  let rabatBeløb = pris * (rabatProcent / 100);
  console.log("Rabat beløb: " + rabatBeløb);

  let endelig = pris - rabatBeløb;
  console.log("Endelig pris: " + endelig);

  return endelig;
}

// Kald funktionen
const resultat = beregRabat(1000, 10);
console.log("Resultat: " + resultat);

// Åbn console (F12) og se output
// Du kan følge præcis hvad der sker trin for trin
```

**Eksempel 2: Typiske fejl og hvordan du finder dem**
```javascript
// FEJL 1: Brugeligt type
let tal = "50"; // Dette er en STRING, ikke et tal
let resultat = tal + 100; // "50100" - tekst concatenation!
console.log(resultat); // Ser du fejlen?

// FIX:
let talRigtigt = 50; // Tal uden anførselstegn
let resultat2 = talRigtigt + 100; // 150
console.log(resultat2);

// FEJL 2: Undefined variabel
function test() {
  console.log(xy); // xy er ikke defineret!
}
// test(); // Ville give fejl: "ReferenceError: xy is not defined"

// FEJL 3: Array index uden for grænsning
let array = ["A", "B", "C"];
console.log(array[5]); // undefined - index 5 eksisterer ikke!

// Debug med Type-tjek
console.log(typeof resultat); // "string"
console.log(typeof resultat2); // "number"
console.log(typeof array[0]); // "string"
console.log(Array.isArray(array)); // true
```

**Eksempel 3: Praksis-eksempel - Debugging af HTML-generering**
```javascript
// HTML: <div id="produktlist"></div>

// Simuleret data fra API
const produkter = [
  { navn: "Hammer", pris: 149.95, lager: 50 },
  { navn: "Søm", pris: 49.95, lager: 0 }, // lager 0 - kunne være problem
  { navn: "Skrue", pris: 29.95, lager: 150 }
];

const container = document.getElementById("produktlist");

console.log("Antal produkter: " + produkter.length); // Debug: er data der?

let html = "";

for (let i = 0; i < produkter.length; i++) {
  const p = produkter[i];

  console.log("Behandler produkt: " + p.navn + " - Lager: " + p.lager);

  // Tjek om produkt er på lager
  if (p.lager > 0) {
    html += `<div>
      <h4>${p.navn}</h4>
      <p>Pris: ${p.pris} DKK</p>
      <p>Lager: ${p.lager}</p>
      <button>Køb</button>
    </div>`;
  } else {
    console.log("Produkt ikke på lager: " + p.navn);
    html += `<div style="opacity: 0.5;">
      <h4>${p.navn}</h4>
      <p>Udsolgt</p>
    </div>`;
  }
}

console.log("HTML før insert: " + html.substring(0, 100)); // Se første 100 tegn
container.innerHTML = html;

// Åbn console og se debugs
// Du kan følge præcis hvilke produkter der bliver behandlet og hvordan
```

### Vigtige Takeaways

- **console.log() er dit bedste venner** – brug det hyppigt til at forstå hvad der sker
- **Fejl-meddelelser i console fortæller dig præcis hvad der gik galt** – læs dem!
- **Tjek datatyper** – "50" (string) + 100 = "50100", men 50 (tal) + 100 = 150
- **Test med forskellige værdier** – hvad hvis array er tomt? Hvad hvis pris er negativ?
- **Udskiv data på vigtige steder** – før og efter operationer, i loops osv.

---

## Lektion 12: Bygning af Interaktive Projekter (Capstone: Todo-liste eller lignende)

### Forklaring

Nu skal du kombinere alt hvad du har lært til et rigtigt projekt. Et todo-liste app er perfekt – det bruger HTML, CSS (styling), JavaScript (logik), DOM manipulation (ændring af siden), events (brugergrænseflade), og data (gemte todos). Det er lille nok til at være overskueligt, men kompliceret nok til at være realistisk.

Et todo-liste app skal: tillade bruger at tilføje opgaver, vise dem på skærm, tillade sletning af done-opgaver, og ideelt gemme dem (så de er der, selvom siden genvindes). Dette projekt indeholder alle de vigtige koncepter: brugerinput, datastruktur (array af objekter), dynamisk HTML-generering, og event-håndtering.

For en blåkrave-iværksætter betyder det, at du nu kan bygge virkelige applikationer. En todo-liste er blot et eksempel – samme mønster bruges til ordre-systemer, kundebase-apps, priskalkulator, timeseddel-systemer, osv. Når du kan bygge en todo-liste, kan du bygge enhver simpel web-app.

Dette projekt bruges som springbræt. Efter at have bygget den, er du klar til at lære mere avancerede ting: back-end integration (gemme i database), bruger-autentifikation, responsivt design til mobiler, osv.

### Kode Eksempler

**Eksempel 1: HTML struktur**
```html
<!-- Din todo-liste HTML -->
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <title>Min Todo Liste</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background-color: #f5f5f5;
    }

    h1 {
      color: #333;
    }

    #inputContainer {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    #taskInput {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }

    #addBtn {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    #addBtn:hover {
      background-color: #45a049;
    }

    #taskList {
      list-style: none;
      padding: 0;
    }

    .taskItem {
      background: white;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .taskItem.completed {
      opacity: 0.5;
    }

    .taskItem.completed .taskText {
      text-decoration: line-through;
    }

    .taskButtons {
      display: flex;
      gap: 10px;
    }

    .deleteBtn, .completeBtn {
      padding: 5px 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 14px;
    }

    .completeBtn {
      background-color: #2196F3;
      color: white;
    }

    .deleteBtn {
      background-color: #f44336;
      color: white;
    }

    #stats {
      margin-top: 20px;
      padding: 10px;
      background-color: white;
      border-radius: 4px;
      text-align: center;
    }
  </style>
</head>
<body>

<h1>Min Todo Liste</h1>

<div id="inputContainer">
  <input type="text" id="taskInput" placeholder="Hvad skal gøres?">
  <button id="addBtn">Tilføj</button>
</div>

<ul id="taskList"></ul>

<div id="stats">
  <p>Total opgaver: <span id="totalTasks">0</span></p>
  <p>Færdig: <span id="completedTasks">0</span></p>
</div>

<script src="todo.js"></script>

</body>
</html>
```

**Eksempel 2: JavaScript logik - Basis funktionalitet**
```javascript
// Selektér HTML-elementer
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasksSpan = document.getElementById("totalTasks");
const completedTasksSpan = document.getElementById("completedTasks");

// Gemte alle tasks
let tasks = [];

// Funktion: Tilføj ny task
function addTask() {
  const taskText = taskInput.value.trim();

  // Validering
  if (taskText === "") {
    alert("Indtast en opgave!");
    return;
  }

  // Opret task-objekt
  const task = {
    id: Date.now(), // Bruger tid som unik ID
    text: taskText,
    completed: false
  };

  // Tilføj til array
  tasks.push(task);

  // Ryd input
  taskInput.value = "";

  // Opdater display
  renderTasks();
  updateStats();

  console.log("Task tilføjet. Total: " + tasks.length);
}

// Funktion: Marker som færdig/ikke færdig
function toggleTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.completed = !task.completed;
      break;
    }
  }

  renderTasks();
  updateStats();
}

// Funktion: Slet task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  updateStats();

  console.log("Task slettet. Resterende: " + tasks.length);
}

// Funktion: Tegn alle tasks på siden
function renderTasks() {
  taskList.innerHTML = ""; // Ryd listen

  for (let task of tasks) {
    const li = document.createElement("li");
    li.className = "taskItem";

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span class="taskText">${task.text}</span>
      <div class="taskButtons">
        <button class="completeBtn" onclick="toggleTask(${task.id})">
          ${task.completed ? "Ikke færdig" : "Færdig"}
        </button>
        <button class="deleteBtn" onclick="deleteTask(${task.id})">Slet</button>
      </div>
    `;

    taskList.appendChild(li);
  }
}

// Funktion: Opdater statistik
function updateStats() {
  totalTasksSpan.innerText = tasks.length;

  const completed = tasks.filter(task => task.completed).length;
  completedTasksSpan.innerText = completed;
}

// Event listeners
addBtn.addEventListener("click", addTask);

// Tilad Enter-tast i input-felt
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial render
console.log("Todo-app startet!");
renderTasks();
```

**Eksempel 3: Udvidelser - Gemme i local storage**
```javascript
// Tilføj disse funktioner til din JavaScript

// Funktion: Gem tasks i browser-lagerplads
function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  console.log("Tasks gemt til localStorage");
}

// Funktion: Hent gemt tasks fra browser-lagerplads
function loadTasks() {
  const saved = localStorage.getItem("todoTasks");

  if (saved) {
    tasks = JSON.parse(saved);
    console.log("Tasks hentet fra localStorage: " + tasks.length);
  } else {
    console.log("Ingen gemt tasks - starter med tom liste");
  }
}

// Opdater addTask-funktionen til at gemme:
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Indtast en opgave!");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  taskInput.value = "";

  renderTasks();
  updateStats();
  saveTasks(); // GEM efter tilføjelse
}

// Opdater deleteTask til at gemme:
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  updateStats();
  saveTasks(); // GEM efter sletning
}

// Opdater toggleTask til at gemme:
function toggleTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.completed = !task.completed;
      break;
    }
  }

  renderTasks();
  updateStats();
  saveTasks(); // GEM efter ændring
}

// Hent gemt data når siden indlæses
loadTasks();
renderTasks();
updateStats();
```

### Vigtige Takeaways

- **Kombiner alle koncepter fra lektionerne** – variabler, arrays, objekter, eventos, DOM
- **Start simpel** – få det grundlæggende til at virke, og udviid efterfølgende
- **Brug objekter for struktur** – hver task er et objekt med ID, tekst, status
- **localStorage lader dig gemme mellem siden-indlæsninger** – data er ikke væk når siden gentændes
- **Test grundigt** – tilføj tasks, marker færdig, slet, lad siden og genopfriskes - virker det stadig?

---

## Konklusion: Dit næste skridt

Du har nu gennemgået JavaScript fra grundlæggende til at bygge interaktive applikationer. Du kan:

1. **Skrive grundlæggende JavaScript** - variabler, operatorer, funktioner
2. **Håndtere brugerinput** - form-validering, events
3. **Manipulere websider dynamisk** - ændre HTML og CSS
4. **Arbejde med data** - arrays, objekter, API-kald
5. **Debug og teste** - finde og rette fejl
6. **Bygge rigtige applikationer** - som todo-listen

### Næste Natural Trin

**Hvis du vil blive endnu bedre:**
- Lær CSS framework (Bootstrap) - professionelle designs uden CSS fra bunden
- Lær backend (Node.js + Express) - gem data permanent i database
- Lær frontend framework (React) - håndter større applikationer
- Lær mobiludvikling - få dine apps til at virke på telefoner
- Lær database design - hvordan man strukturerer data ordentligt

### Ressourcer

- **MDN Web Docs** (mozilla.org/en-US/docs/Web/JavaScript) - detaljeret dokumentation
- **JavaScript.info** - dansk-venlig tutorial
- **Codecademy** - interaktive øvelser
- **YouTube-kanaler** - mange gratis tutorials på dansk

---

## Praktisk Eksempel: En Håndværker-Website feature

**Scenario:** Du er elektrikker og vil have en side, hvor kunder kan beregne prisen på et job.

```javascript
// HTML:
// <input id="timer" type="number" placeholder="Timer" min="1">
// <input id="materiale" type="number" placeholder="Materialeomkostning" min="0">
// <button id="beregBtn">Beregn pris</button>
// <div id="resultat"></div>

const timerInput = document.getElementById("timer");
const materialeInput = document.getElementById("materiale");
const beregBtn = document.getElementById("beregBtn");
const resultat = document.getElementById("resultat");

const timetakst = 350; // Dit takst
const momsProc = 0.25; // 25% moms

beregBtn.addEventListener("click", function() {
  const timer = parseFloat(timerInput.value);
  const materiale = parseFloat(materialeInput.value);

  // Validering
  if (!timer || timer < 1 || !materiale || materiale < 0) {
    resultat.innerText = "Udfyld positive tal!";
    resultat.style.color = "red";
    return;
  }

  // Beregn
  const arbejdspris = timer * timetakst;
  const subtotal = arbejdspris + materiale;
  const moms = subtotal * momsProc;
  const endelig = subtotal + moms;

  // Vis resultat
  resultat.innerHTML = `
    <h3>Priskalkulation</h3>
    <p>Arbejde (${timer} timer × ${timetakst} DKK): ${arbejdspris} DKK</p>
    <p>Materiale: ${materiale} DKK</p>
    <p>Subtotal: ${subtotal} DKK</p>
    <p>Moms (25%): ${moms} DKK</p>
    <h4>ENDELIG PRIS: ${endelig.toFixed(2)} DKK</h4>
  `;
  resultat.style.color = "green";
});
```

**Dit JavaScript journey er startet. Lyk med implementeringen!** 🚀

---

*Senest opdateret: 2. marts 2026*
*Til danske blåkrave-iværksættere*
