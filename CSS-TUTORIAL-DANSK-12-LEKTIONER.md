# CSS-TUTORIAL: 12 LEKTIONER FOR DANSKE BLÅRAKKEMAND UNDERNEMERE

**Målgruppe:** Håndværkere, bygmestre, installatører og andre praktiske virksomhedsledere uden webdesign-erfaring
**Mål:** Lær at bygge professionelle websites uden at være grafiker
**Tid:** ~2-3 timer per lektion
**Værktøj:** Blot en teksteditor og en browser

---

## LEKTION 1: SELEKTORER & EGENSKABER (Grundlæggende CSS-syntaks)

### Forklaring

CSS (Cascading Style Sheets) er sproget, der gør websider pæne. Hvis HTML er "huset", er CSS "maling og møbler". Du skriver CSS-regler, som fortæller browser'en, hvordan dine HTML-elementer skal se ud.

En CSS-regel består af tre dele: **selektor** (hvad skal styles?), **egenskab** (hvad ændrer vi?) og **værdi** (hvad skal det være?). Syntaksen er: `selektor { egenskab: værdi; }`

De vigtigste selektorer er: **type-selektorer** (tag-navne som `p` eller `div`), **class-selektorer** (start med `.`) og **ID-selektorer** (start med `#`). Classes bruges til at style grupper af elementer, ID'er til at style præcis ét element. Du bruger classes i 99% af tilfældene.

Et eksempel: Hvis du vil have alle overskrifter til at være blå, skriver du `h1 { color: blue; }`. Hvis du kun vil have nogle afgørelser til at være røde, giver du dem en class `class="vigtig"` i HTML og skriver så `p.vigtig { color: red; }` i CSS.

Det vigtigste at forstå er "cascade" - CSS læses fra top til bund, og senere regler tilsidesætter tidligere regler. Hvis du definerer en farve to gange, vinder den nederste. Også, specificitets regel: ID-selektorer slår class-selektorer, som slår type-selektorer.

### Eksempel 1: Grundlæggende selektorer

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* Type-selektor: alle <p> får denne stil */
  p {
    color: #333333;
    font-size: 16px;
  }

  /* Class-selektor: elementer med class="highlight" */
  .highlight {
    background-color: #ffff00;
    padding: 10px;
  }

  /* ID-selektor: elementet med id="banner" */
  #banner {
    background-color: #0066cc;
    color: white;
    padding: 20px;
  }
</style>
</head>
<body>

<div id="banner">
  <h1>Velkommen til Hansens Byggefirma</h1>
</div>

<p>Vi har over 20 år erfaring i byggeri.</p>
<p class="highlight">Ring os på 40 50 60 70 for et gratis tilbud!</p>
<p>Vi arbejder hele Danmark rundt.</p>

</body>
</html>
```

### Eksempel 2: Kombination af selektorer

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* Alle <h2> elementer */
  h2 {
    color: #333333;
  }

  /* Kun <h2> med class="section-title" */
  h2.section-title {
    border-bottom: 3px solid #0066cc;
    padding-bottom: 10px;
  }

  /* Alle elementer i en container */
  .container p {
    margin: 10px 0;
  }
</style>
</head>
<body>

<h2>Normale overskrifter ser sådan ud</h2>

<h2 class="section-title">Sektion-overskrifter ser anderledes ud</h2>

<div class="container">
  <p>Denne tekst ligger i en container og har margin.</p>
  <p>Denne også.</p>
</div>

</body>
</html>
```

### Eksempel 3: Cascading (stavefejl? Nej - det er designet!)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* Alle <p> starter som blå */
  p {
    color: blue;
  }

  /* Alle <p> med class="danger" bliver røde (tilsidesætter blue) */
  p.danger {
    color: red;
  }

  /* Alle elementer med id="special" vinder over alt */
  #special {
    color: green;
    font-weight: bold;
  }
</style>
</head>
<body>

<p>Denne er blå.</p>
<p class="danger">Denne er rød (vigtigt!).</p>
<p id="special">Denne er grøn og fed (vinder over alt).</p>

</body>
</html>
```

### Vigtigste punkter

- **Selektor → Egenskab: Værdi** - Det er syntaksen for alle CSS-regler
- **Classes (`.`) bruges 99% af tiden** - De er lette at forstå og genbrue
- **ID'er (`#`) bruges når du har PRÆCIS ét element** - Brug ikke ID'er til styling hvis du kan bruge classes
- **Cascade betyder senere regler vinder** - Jo længere ned, jo vigtigere
- **Specificity vinder over cascade** - ID > class > type
- **Alle farver kan skrives som navne (`red`), hex (`#ff0000`) eller RGB (`rgb(255,0,0)`)**

---

## LEKTION 2: FARVER & TYPOGRAFI (Skrifttyper, størrelser, farver)

### Forklaring

Farver og skrifttyper er det første folk ser på din website. En god typografi og farvevalg gør siden både pæn og let at læse. Dårlig typografi får selv pæne designs til at se billige ud.

I CSS arbejder du med tre typografi-egenskaber: `font-family` (hvilken skrifttype?), `font-size` (hvor stor?) og `font-weight` (hvor fed?). `font-family` skal altid have backup-skrifttyper - hvis browserens computer ikke har din præfererede skrift, bruger den den næste. Standard sikre skrifttyper er: `Arial, Helvetica, sans-serif` for sans-serif, eller `Georgia, serif` for serif. Web-safe skrifttyper er ikke så mange længere - i dag bruger de fleste web fonts fra Google Fonts.

For farver bruger du `color` til tekst og `background-color` til baggrundsfarver. Hex-farver (som `#0066cc`) er mest normale - `#` betyder hex, og så kommer seks tal/bogstaver. Du kan også bruge RGB (`rgb(0, 102, 204)`) eller nye farver-navne i CSS. Husk kontrast: hvis teksten skal være læsbar, må tekst-farven og baggrunds-farven være mørk nok adskilt.

Google Fonts giver dig hundredvis af gratis, professionelle skrifttyper du kan bruge. Du importerer dem øverst i din CSS-fil med `@import` og bruger dem så som normal `font-family`.

### Eksempel 1: Basis typografi og farver

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #333333;
    background-color: #ffffff;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #0066cc;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
  }

  p {
    font-size: 16px;
    line-height: 1.6; /* Afstand mellem linjer - gør tekst lettere at læse */
    color: #555555;
  }

  .emphasize {
    font-weight: bold;
    color: #cc0000;
  }
</style>
</head>
<body>

<h1>Andersens Egetræs-Snedkeri</h1>
<h2>Håndlavede møbler siden 1995</h2>

<p>Vi specialiserer os i <span class="emphasize">bæredygtige</span> møbler lavet af dansk egetræ. Hver stol, bord og reol laves med omsorg og tradition.</p>

</body>
</html>
```

### Eksempel 2: Google Fonts integration

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* Importér professionelle skrifttyper fra Google */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333333;
  }

  h1, h2, h3 {
    font-family: 'Merriweather', serif;
    font-weight: 700;
  }

  h1 {
    font-size: 48px;
    color: #1a1a1a;
  }

  h2 {
    font-size: 32px;
    color: #404040;
  }

  .tagline {
    font-style: italic;
    color: #666666;
    font-size: 18px;
  }
</style>
</head>
<body>

<h1>Svendsen Installationsfirma</h1>
<p class="tagline">Elektricitet • Varme • VVS • Energi</p>

<h2>Vi løser dine tekniske udfordringer</h2>
<p>Fra små reparationer til store projekter - vi er her for dig.</p>

</body>
</html>
```

### Eksempel 3: Farve-kontrast og læsbarhed

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .good-contrast {
    background-color: #ffffff;
    color: #000000;
    padding: 20px;
    margin: 10px 0;
  }

  .bad-contrast {
    background-color: #cccccc;
    color: #bbbbbb;
    padding: 20px;
    margin: 10px 0;
  }

  .professional {
    background-color: #0066cc;
    color: #ffffff;
    padding: 20px;
    margin: 10px 0;
  }

  .warning {
    background-color: #ffcc00;
    color: #333333;
    padding: 20px;
    margin: 10px 0;
    font-weight: bold;
  }
</style>
</head>
<body>

<div class="good-contrast">
  ✓ Dette er let at læse (hvid baggrund, sort tekst)
</div>

<div class="bad-contrast">
  ✗ Dette er svært at læse (svag kontrast mellem grå og grå-brun)
</div>

<div class="professional">
  ✓ Professionelt udseende (blå baggrund, hvid tekst)
</div>

<div class="warning">
  ⚠ Vigtige beskeder skal være kraftige farver
</div>

</body>
</html>
```

### Vigtigste punkter

- **`font-family` skal altid have backup-skrifttyper** - Eksempel: `font-family: Arial, Helvetica, sans-serif;`
- **Google Fonts giver dig tusinder af professionelle skrifttyper gratis**
- **`font-size` måles normalt i `px` (pixels) eller `rem` (relative enheder)**
- **`line-height: 1.6` gør tekst meget lettere at læse** - Brug det altid for store tekstblokke
- **Kontrast mellem tekst og baggrund er vigtig for læsbarhed**
- **Hex-farver: `#` + 6 tegn** - `#000000` er sort, `#ffffff` er hvid
- **Web-safe kombinationer:** Sort på hvid, hvid på mørkblå, mørk grå på hvid

---

## LEKTION 3: BOX MODEL (Polstring, marginer, kanter)

### Forklaring

Alt på en website består af "kasser" (boxes). Hver box har fire lag: **content** (selve teksten/billede), **padding** (luft inden i boxen omkring content), **border** (grænse omkring padding), og **margin** (luft uden for boxen). Det er vigtig at forstå denne model, fordi den kontrollerer afstande på hele websiden.

**Padding** er afstanden inden i boxen - mellem tekst og kanten. **Margin** er afstanden uden for boxen - mellem denne box og naboboksene. Hvis du vil have luft omkring en knap, bruger du padding. Hvis du vil have luft mellem to knapper, bruger du margin på den ene eller anden (eller begge).

**Border** er en linje omkring boxen. Du specificerer: tykkelse (`border-width`), stil (`border-style`: solid, dashed, dotted), og farve (`border-color`). Eller en shorthand: `border: 2px solid #0066cc;`

Der er også `box-sizing: border-box;` - det er vigtig at vide! Det ændrer hvordan boxene beregnes, så en box med `width: 200px` faktisk er 200px bred selv med padding og border. Brug `box-sizing: border-box;` på alle elementer (eller på `body` så arver alle det).

### Eksempel 1: Padding, margin, og border

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }

  .card {
    background-color: #ffffff;
    padding: 20px;           /* Luft inden i boxen */
    margin: 20px;            /* Luft uden for boxen */
    border: 2px solid #0066cc;
  }

  .card h2 {
    margin-top: 0;           /* Fjern top-margin fra overskrift */
  }

  .card p {
    margin-bottom: 0;        /* Fjern bottom-margin fra sidste paragraph */
  }

  .button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px 20px;      /* 10px top/bottom, 20px left/right */
    border: none;
    margin: 5px;
  }
</style>
</head>
<body>

<div class="card">
  <h2>Tjeneste 1: Totalentreprises</h2>
  <p>Vi håndterer hele projektet fra start til slut.</p>
</div>

<div class="card">
  <h2>Tjeneste 2: Reparationer</h2>
  <p>Hurtige og pålidelige reparationer hele året.</p>
</div>

<button class="button">Ring til os</button>
<button class="button">Send email</button>

</body>
</html>
```

### Eksempel 2: Border og box-sizing

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* Vigtigt: Denne regel skal være på de fleste websites */
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
  }

  .box-old {
    width: 300px;
    padding: 20px;
    border: 3px solid #cc0000;
    background-color: #ffeeee;
    margin: 20px 0;
  }

  .box-new {
    width: 300px;
    padding: 20px;
    border: 3px solid #00cc00;
    background-color: #eeffee;
    margin: 20px 0;
    box-sizing: border-box;
  }
</style>
</head>
<body>

<div class="box-old">
  Uden `box-sizing: border-box;` bliver denne box bredere end 300px på grund af padding og border.
</div>

<div class="box-new">
  Med `box-sizing: border-box;` er denne box præcis 300px bred selv med padding og border.
</div>

</body>
</html>
```

### Eksempel 3: Avanceret box model med forskellige sider

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
  }

  .box {
    background-color: #ffffff;
    border: 2px solid #333333;
    margin: 20px;
    padding: 20px;
  }

  .left-border {
    border-left: 5px solid #0066cc;
    padding-left: 15px;
  }

  .top-border {
    border-top: 5px solid #cc0000;
    padding-top: 15px;
  }

  .alert {
    background-color: #fff3cd;
    border-left: 5px solid #ffc107;
    padding: 15px;
    padding-left: 20px;
    margin: 20px 0;
  }
</style>
</head>
<body>

<div class="box left-border">
  Denne box har kun en blå venstre-kant.
</div>

<div class="box top-border">
  Denne box har kun en rød top-kant.
</div>

<div class="alert">
  ⚠ Vigtig information: Vi har nye åbningstider fra næste mandag.
</div>

</body>
</html>
```

### Vigtigste punkter

- **Content → Padding → Border → Margin** - Læs det op ad flere gange til du kan det
- **Padding** er luft inden i, **margin** er luft uden for
- **`box-sizing: border-box;` skal være på næsten alle websites** - Tilføj det til `*` selektor
- **Shorthand-notation: `margin: 20px;` betyder 20px på alle sider**
- **Shorthand-notation: `padding: 10px 20px;` betyder 10px top/bottom, 20px left/right**
- **Shorthand-notation: `border: 2px solid #0066cc;` betyder tykkelse, stil, farve**
- **Fjern margin fra første/sidste elementer i boxe** - Det giver bedre kontrol

---

## LEKTION 4: POSITIONERING (Statisk, relativ, absolut, fast)

### Forklaring

Normalt følger HTML-elementer en "normal flow" - de stilles under hinanden fra top til bund. Men nogle gange vil du placere elementer forskellige steder. Det gør du med `position` egenskaben.

**`position: static;`** (standard) - Elementet følger normal flow. Hvis du bruger `top`, `bottom`, `left`, `right`, bliver de ignoreret.

**`position: relative;`** - Elementet følger normal flow, men du kan flytte det med `top`, `left` osv. Det vigtige er at andre elementer gør ikke plads til det - de stiller sig som om elementet stadig er på sin oprindelige plads.

**`position: absolute;`** - Elementet fjernes helt fra normal flow og placeres i forhold til sin nærmeste "positioned" parent (hvis ingen parent er positioned, bruger det dokumentets top-venstre hjørne). Brug dette sparsomt.

**`position: fixed;`** - Elementet placeres i forhold til browserens viewport (skærmen) og bevæger sig ikke når siden scrolles. Perfekt til navigationsbarer eller floating chat-bokse.

**`z-index`** kontrollerer hvilket lag elementer ligger på (hvilke går foran/bag). Højere tal = foran. Kun vigtig når elementer overlapper.

### Eksempel 1: Position relative

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
  }

  .normal {
    background-color: #cccccc;
    padding: 20px;
    margin: 10px 0;
  }

  .moved {
    background-color: #0066cc;
    color: #ffffff;
    padding: 20px;
    margin: 10px 0;
    position: relative;
    top: 10px;      /* Flyt 10px ned */
    left: 20px;     /* Flyt 20px til højre */
  }
</style>
</head>
<body>

<div class="normal">
  Element 1 (normalt)
</div>

<div class="moved">
  Element 2 (moved relative)
</div>

<div class="normal">
  Element 3 (normalt) - bemærk at element 2 ikke tog plads væk
</div>

</body>
</html>
```

### Eksempel 2: Position fixed (navigation bar)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    padding-top: 70px; /* Giv plads til fixed navbar */
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0066cc;
    color: #ffffff;
    padding: 15px 20px;
    z-index: 1000; /* Sikr at navbar er foroven */
  }

  .navbar h1 {
    font-size: 24px;
    margin: 0;
  }

  .content {
    padding: 20px;
  }

  .section {
    background-color: #f5f5f5;
    padding: 20px;
    margin: 20px 0;
  }
</style>
</head>
<body>

<div class="navbar">
  <h1>Jensen & Co. Byggefirma</h1>
</div>

<div class="content">
  <div class="section">
    <h2>Sektion 1</h2>
    <p>Scroll ned for at se mere indhold. Navbaren bliver ved med at være synlig øverst.</p>
    <p style="margin-top: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>

  <div class="section">
    <h2>Sektion 2</h2>
    <p>Navbaren kan ses hele tiden.</p>
  </div>

  <div class="section">
    <h2>Sektion 3</h2>
    <p>Dette er meget praktisk til navigationsbarer.</p>
  </div>
</div>

</body>
</html>
```

### Eksempel 3: Position absolute (overlay badge)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .product-card {
    width: 250px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    position: relative; /* Vigtig: parent skal være positioned */
  }

  .product-image {
    width: 100%;
    height: 200px;
    background-color: #cccccc;
  }

  .product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #cc0000;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 20px;
    font-weight: bold;
  }

  .product-info {
    padding: 15px;
  }
</style>
</head>
<body>

<div class="product-card">
  <div class="product-image">
    [Billede af produkt]
  </div>
  <div class="product-badge">NYT!</div>
  <div class="product-info">
    <h3>Premium Håndværksstøj</h3>
    <p>Stabil og pålidelig kvalitet</p>
  </div>
</div>

</body>
</html>
```

### Vigtigste punkter

- **`position: static;`** (standard) - Følg normal flow, ignorer top/left/right/bottom
- **`position: relative;`** - Flyt element uden at påvirke andre elementer omkring det
- **`position: absolute;`** - Fjern fra normal flow, placer i forhold til nærmeste positioned parent
- **`position: fixed;`** - Fjern fra normal flow, placer i forhold til viewport (følg ikke med ved scroll)
- **Parent skal være `position: relative;` hvis du bruger `position: absolute;` på børn**
- **`z-index`** kontrollerer lag-orden (vigtig når elementer overlapper)
- **Brug `position: fixed;` til navigations-barer og floating elementer**

---

## LEKTION 5: DISPLAY & FLOW (Blok, inline, flex basics)

### Forklaring

Hver HTML-element har en standard `display` værdi der kontrollerer hvordan den opfører sig. Det vigtigste at forstå er tre display-typer: **block**, **inline**, og **flex**.

**`display: block;`** betyder elementet tager hele bredden (100%) og starter på ny linje. Eksempler: `<div>`, `<p>`, `<h1>`. Du kan sætte width og height på block-elementer.

**`display: inline;`** betyder elementet tager kun plads som det behøver og flyder med teksten. Eksempler: `<span>`, `<a>`, `<strong>`. Du kan IKKE sætte width og height på inline elementer (de bliver ignoreret).

**`display: inline-block;`** er en hybrid - elementet flyder som inline men du kan sætte width/height på den. Nyttigt til at have elementer på samme linje som kan have bestemte størrelser.

**`display: flex;`** gør en container til en "flexbox" hvor børn-elementer kan arrangeres fleksibelt. Det er værktøjet til moderne layouts. Vi går dybere ned i lektion 6.

### Eksempel 1: Block vs inline

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .block-element {
    display: block;
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
  }

  .inline-element {
    display: inline;
    background-color: #cccc00;
    padding: 10px;
    margin: 10px;
  }

  .inline-block-element {
    display: inline-block;
    background-color: #00cc00;
    color: #ffffff;
    padding: 10px;
    margin: 10px;
    width: 150px;
    height: 50px;
  }
</style>
</head>
<body>

<div class="block-element">
  Block - tager hele bredden
</div>

<div class="block-element">
  Block 2 - starter på ny linje
</div>

<span class="inline-element">Inline 1</span>
<span class="inline-element">Inline 2</span>
<span class="inline-element">Inline 3</span>

<br><br>

<div class="inline-block-element">Inline-block 1</div>
<div class="inline-block-element">Inline-block 2</div>
<div class="inline-block-element">Inline-block 3</div>

</body>
</html>
```

### Eksempel 2: Skjule og vise elementer

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .hidden-display-none {
    display: none; /* Element fjernes helt - tager ingen plads */
    background-color: #ff0000;
    padding: 20px;
  }

  .hidden-visibility {
    visibility: hidden; /* Element er usynligt men tager stadig plads */
    background-color: #ff0000;
    padding: 20px;
  }

  .visible {
    background-color: #00cc00;
    padding: 20px;
  }
</style>
</head>
<body>

<div class="visible">Element 1</div>

<div class="hidden-display-none">
  Denne er helt skjult (display: none;) - tager ingen plads
</div>

<div class="visible">Element 2</div>

<div class="hidden-visibility">
  Denne er usynlig (visibility: hidden;) - men tager stadig plads
</div>

<div class="visible">Element 3</div>

</body>
</html>
```

### Eksempel 3: Introduktion til flexbox (næste lektion i detalje)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
  }

  .button-group {
    display: flex;      /* Gør børn-elementerne flexible */
    gap: 10px;         /* Afstand mellem elementer */
    margin: 20px 0;
  }

  .button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    flex: 1;           /* Tag lige meget plads */
  }

  .navbar {
    display: flex;
    gap: 20px;
    background-color: #333333;
    padding: 15px;
    color: #ffffff;
  }

  .navbar .logo {
    flex: 1; /* Logo tager venstre side */
  }

  .navbar a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
</head>
<body>

<div class="button-group">
  <button class="button">Knap 1</button>
  <button class="button">Knap 2</button>
  <button class="button">Knap 3</button>
</div>

<div class="navbar">
  <div class="logo">LOGO</div>
  <a href="#">Hjem</a>
  <a href="#">Tjenester</a>
  <a href="#">Om os</a>
  <a href="#">Kontakt</a>
</div>

</body>
</html>
```

### Vigtigste punkter

- **`display: block;`** - Tager hele bredden, kan have width/height
- **`display: inline;`** - Flyder med tekst, kan IKKE have width/height
- **`display: inline-block;`** - Flyder med tekst, men KAN have width/height
- **`display: flex;`** - Moderne layout værktøj (læs næste lektion!)
- **`display: none;`** - Fjerner element helt (tager ingen plads)
- **`visibility: hidden;`** - Gør element usynligt men tager plads
- **`gap`** - Afstand mellem elementer i flexbox (meget praktisk)

---

## LEKTION 6: FLEXBOX MASTERY (Komplet flexbox guide)

### Forklaring

Flexbox er det vigtigste layout-værktøj i moderne CSS. Det løser 80% af alle layout-problemer uden at være svært. En flexbox-container kan arrangere dens børn-elementer på næsten enhver måde: horizontalt, vertikalt, lige fordelt, med afstand osv.

Du laver en flexbox ved at sætte `display: flex;` på parent-elementet. Så kan du kontrollere børnene med egenskaber som `gap` (afstand), `justify-content` (fordel elementer horisontalt), `align-items` (fordel elementer vertikalt), og `flex-direction` (lav de lodret i stedet for vandret).

**`justify-content`** handler om at fordele plads horisontalt: `flex-start` (fra venstre), `flex-end` (fra højre), `center` (centrum), `space-between` (plads imellem), `space-around` (plads omkring).

**`align-items`** handler om at justere elementer vertikalt: `flex-start` (top), `center` (midt), `flex-end` (bund), `stretch` (stræk til at fylde højden).

**`flex-direction`** er enten `row` (vandret, standard) eller `column` (lodret).

Børn-elementer kan have `flex` egenskaben som fortæller hvor meget plads de skal have. `flex: 1;` betyder "tag en tredjedel hvis der er tre elementer med flex: 1".

### Eksempel 1: Basis flexbox layout

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
  }

  /* Simpel horizontal flexbox */
  .container {
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .item {
    background-color: #0066cc;
    color: #ffffff;
    padding: 20px;
    flex: 1; /* Alle tager lige meget plads */
  }

  /* Fordel elementer - justify-content */
  .space-between {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f5f5f5;
    margin: 20px 0;
  }

  .space-between button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
</style>
</head>
<body>

<h2>Tre lige stor kolonner</h2>
<div class="container">
  <div class="item">Kolonne 1</div>
  <div class="item">Kolonne 2</div>
  <div class="item">Kolonne 3</div>
</div>

<h2>Knapper med plads mellem</h2>
<div class="space-between">
  <button>Annuller</button>
  <button>Gem</button>
</div>

</body>
</html>
```

### Eksempel 2: Flexbox med align-items (centrer vertikalt)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
  }

  .card {
    display: flex;
    align-items: center; /* Centrer vertikalt */
    gap: 20px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    margin: 20px 0;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    background-color: #0066cc;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 30px;
    flex-shrink: 0; /* Forhindrer at blive komprimeret */
  }

  .card-content {
    flex: 1; /* Tag resten af plads */
  }
</style>
</head>
<body>

<div class="card">
  <div class="card-icon">📐</div>
  <div class="card-content">
    <h3>Målinger & Design</h3>
    <p>Professionelle målinger og 3D-design af dit projekt.</p>
  </div>
</div>

<div class="card">
  <div class="card-icon">🔨</div>
  <div class="card-content">
    <h3>Installation</h3>
    <p>Hurtig og professionel installation af højeste kvalitet.</p>
  </div>
</div>

<div class="card">
  <div class="card-icon">⭐</div>
  <div class="card-content">
    <h3>Kvalitet</h3>
    <p>10 års garanti på alt arbejde - vi står bag det.</p>
  </div>
</div>

</body>
</html>
```

### Eksempel 3: Kompleks flexbox layout (responsiv footer)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  .footer {
    display: flex;
    gap: 40px;
    padding: 40px;
    background-color: #333333;
    color: #ffffff;
  }

  .footer-section {
    flex: 1;
  }

  .footer-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
  }

  .footer-section ul {
    list-style: none;
  }

  .footer-section li {
    margin-bottom: 10px;
  }

  .footer-section a {
    color: #cccccc;
    text-decoration: none;
  }

  .footer-section a:hover {
    color: #ffffff;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
</head>
<body>

<div class="footer">
  <div class="footer-section">
    <h3>Om os</h3>
    <p>Vi er Danmarks mest pålidelige byggefirma siden 1985.</p>
  </div>

  <div class="footer-section">
    <h3>Tjenester</h3>
    <ul>
      <li><a href="#">Renovering</a></li>
      <li><a href="#">Nybyggeri</a></li>
      <li><a href="#">Reparationer</a></li>
    </ul>
  </div>

  <div class="footer-section">
    <h3>Kontakt</h3>
    <div class="contact-info">
      <a href="tel:+4540506070">40 50 60 70</a>
      <a href="mailto:info@example.com">info@example.com</a>
      <p>Vejs 123, 3000 Helsingør</p>
    </div>
  </div>
</div>

</body>
</html>
```

### Vigtigste punkter

- **`display: flex;`** på parent gør børnene flexible
- **`gap: 20px;`** - Afstand mellem elementer (meget praktisk!)
- **`justify-content`** fordeler elementer horisontalt (space-between, center osv.)
- **`align-items`** fordeler elementer vertikalt (center, flex-start osv.)
- **`flex: 1;`** på børn betyder "tag lige meget plads som andre med flex: 1"
- **`flex-direction: column;`** laver layout lodret i stedet for vandret
- **`flex-shrink: 0;`** forhindrer elementer i at blive komprimeret (nyttigt!)
- **Flexbox løser 80% af layout-problemer uden at være svært**

---

## LEKTION 7: CSS GRID BASICS (Grid layout introduktion)

### Forklaring

Hvis flexbox er "en-dimensionel" (enten rækker eller kolonner), er CSS Grid "to-dimensionel" (både rækker OG kolonner). Grid er kraftfuldt når du vil lave komplekse layouts med flere rækker og kolonner, som f.eks. dashboards eller side-layouts med header, navigation, content, sidebar, og footer.

Du laver en grid ved at sætte `display: grid;` på parent-elementet. Så definerer du kolonner med `grid-template-columns` og rækker med `grid-template-rows`. For eksempel: `grid-template-columns: 1fr 2fr 1fr;` betyder tre kolonner hvor den midterste er dobbelt så bred som de andre to.

`1fr` betyder "en andel af fri plads" - hvis du har `1fr 1fr 1fr` har hver kolonne lige meget plads. `gap` virker på samme måde som i flexbox - afstand mellem elementer.

Du kan også give børn-elementer eksplicitte grid-posisjoner med `grid-column` og `grid-row`, men ofte kan du bare lade grid'et automatisk placere dem. Grid gør det bare muligt at bygge meget komplekse layouts med relativ simple CSS.

### Eksempel 1: Basis grid layout

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
  }

  /* Simpel 3-kolonne grid */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }

  .grid-item {
    background-color: #0066cc;
    color: #ffffff;
    padding: 20px;
    text-align: center;
  }

  /* Portfolio-lignende grid */
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }

  .portfolio-item {
    background-color: #f0f0f0;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
</style>
</head>
<body>

<h2>3-kolonne grid</h2>
<div class="grid-container">
  <div class="grid-item">Projekt 1</div>
  <div class="grid-item">Projekt 2</div>
  <div class="grid-item">Projekt 3</div>
  <div class="grid-item">Projekt 4</div>
  <div class="grid-item">Projekt 5</div>
  <div class="grid-item">Projekt 6</div>
</div>

<h2>Portfolio eksempel</h2>
<div class="portfolio-grid">
  <div class="portfolio-item">Tilbygning</div>
  <div class="portfolio-item">Renovering</div>
  <div class="portfolio-item">Nybyggeri</div>
  <div class="portfolio-item">Beslagarbejde</div>
  <div class="portfolio-item">Maling</div>
  <div class="portfolio-item">Tagarbejde</div>
</div>

</body>
</html>
```

### Eksempel 2: Kompleks grid med benævnte områder

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  .page {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 80px 1fr 100px;
    gap: 0;
    height: 100vh;
  }

  header {
    grid-column: 1 / -1; /* Span alle kolonner */
    background-color: #0066cc;
    color: #ffffff;
    padding: 20px;
  }

  nav {
    background-color: #f5f5f5;
    padding: 20px;
  }

  main {
    background-color: #ffffff;
    padding: 20px;
  }

  aside {
    background-color: #f5f5f5;
    padding: 20px;
  }

  footer {
    grid-column: 1 / -1;
    background-color: #333333;
    color: #ffffff;
    padding: 20px;
  }
</style>
</head>
<body>

<div class="page">
  <header>
    <h1>Jensen Byggefirma</h1>
  </header>

  <nav>
    <h3>Navigation</h3>
    <ul style="list-style: none;">
      <li>Hjem</li>
      <li>Tjenester</li>
      <li>Projekter</li>
      <li>Kontakt</li>
    </ul>
  </nav>

  <main>
    <h2>Velkommen</h2>
    <p>Her er hovedindholdet af siden.</p>
  </main>

  <aside>
    <h3>Seneste projekter</h3>
    <ul style="list-style: none;">
      <li>Tilbygning, Åbylille</li>
      <li>Renovering, Humlebæk</li>
      <li>Nybyggeri, Hornbæk</li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2026 Jensen Byggefirma</p>
  </footer>
</div>

</body>
</html>
```

### Eksempel 3: Auto-responsive grid uden media queries

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  /* Auto-fit: lav så mange kolonner som muligt, min 250px bred hver */
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
  }

  .card h3 {
    margin-bottom: 10px;
  }
</style>
</head>
<body>

<h1>Vores tjenester</h1>

<div class="auto-grid">
  <div class="card">
    <h3>Tilbygninger</h3>
    <p>Professionelle tilbygninger i høj kvalitet.</p>
  </div>

  <div class="card">
    <h3>Renovering</h3>
    <p>Vi renoverer hele huse fra kælder til tag.</p>
  </div>

  <div class="card">
    <h3>Nybygning</h3>
    <p>Nybyggeri fra grundkoncept til færdiggørelse.</p>
  </div>

  <div class="card">
    <h3>Reparationer</h3>
    <p>Hurtige og pålidelige reparationer hele året.</p>
  </div>
</div>

</body>
</html>
```

### Vigtigste punkter

- **`display: grid;`** på parent gør børnene til grid-elementer
- **`grid-template-columns: 1fr 1fr 1fr;`** definerer tre lige brede kolonner
- **`1fr`** betyder "en andel af fri plads"
- **`gap: 20px;`** virker samme som flexbox - afstand mellem elementer
- **`repeat(3, 1fr);`** er shorthand for `1fr 1fr 1fr`
- **`grid-column: 1 / -1;`** betyder span fra første til sidste kolonne
- **`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`** er magisk for responsiv grid**
- **Grid er bedst til komplekse 2D layouts; flexbox til 1D layouts**

---

## LEKTION 8: RESPONSIVE DESIGN (Media queries, mobile-first)

### Forklaring

En responsiv website ser godt ud på både små skærme (mobiltelefoner), medium skærme (tablets) og store skærme (computere). Du laver responsiv design med **media queries** - CSS regler der kun gælder når bestemte betingelser er opfyldt (som f.eks. "når bredden er mindre end 768px").

**Mobile-first tilgang** betyder at du først designer for små skærme (mobil), og så gør siden større/bedre for større skærme. Det er lettere end at designe for stor skærm og prøve at gøre det mindre.

Media queries starter med `@media` og en betingelse. For eksempel: `@media (max-width: 768px) { }` betyder "hvis skærmen er 768px bred eller mindre". `max-width` betyder "under denne størrelse"; `min-width` betyder "over denne størrelse".

Responsive design handler også om flexibel billeder, tekststørrelser der kan skaleres med skærm, og elementer der skjules på små skærme. `max-width: 100%;` på billeder gør dem responsiv.

### Eksempel 1: Media queries basis

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  /* Mobile først: design for små skærme */
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sidebar {
    display: none; /* Skjult på mobil */
  }

  h1 {
    font-size: 24px;
  }

  /* Tablet og større: 768px eller mere */
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }

    main {
      flex: 3;
    }

    .sidebar {
      display: block;
      flex: 1;
      background-color: #f5f5f5;
      padding: 20px;
    }

    h1 {
      font-size: 32px;
    }
  }

  /* Desktop: 1024px eller mere */
  @media (min-width: 1024px) {
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      font-size: 48px;
    }
  }
</style>
</head>
<body>

<h1>Andersens Byggefirma</h1>

<div class="container">
  <main>
    <h2>Velkommen</h2>
    <p>Vi specialiserer os i høj-kvalitets byggeri og renovering. Med over 20 års erfaring leverer vi resultater der taler for sig selv.</p>
    <p>Fra små reparationer til store totalentreprises - vi kan det hele.</p>
  </main>

  <aside class="sidebar">
    <h3>Seneste projekter</h3>
    <ul style="list-style: none;">
      <li>Tilbygning, Humlebæk</li>
      <li>Renovering, Fredensborg</li>
      <li>Nybyggeri, Hornbæk</li>
    </ul>
  </aside>
</div>

</body>
</html>
```

### Eksempel 2: Responsive grid og billeder

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  /* Mobile: 1 kolonne */
  .gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .gallery img {
    max-width: 100%;
    height: auto;
  }

  /* Tablet: 2 kolonner */
  @media (min-width: 768px) {
    .gallery {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Desktop: 3 kolonner */
  @media (min-width: 1024px) {
    .gallery {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* Stor desktop: 4 kolonner */
  @media (min-width: 1400px) {
    .gallery {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
</head>
<body>

<h1>Vores projekter</h1>

<div class="gallery">
  <img src="https://via.placeholder.com/300x200?text=Projekt+1" alt="Projekt 1">
  <img src="https://via.placeholder.com/300x200?text=Projekt+2" alt="Projekt 2">
  <img src="https://via.placeholder.com/300x200?text=Projekt+3" alt="Projekt 3">
  <img src="https://via.placeholder.com/300x200?text=Projekt+4" alt="Projekt 4">
  <img src="https://via.placeholder.com/300x200?text=Projekt+5" alt="Projekt 5">
  <img src="https://via.placeholder.com/300x200?text=Projekt+6" alt="Projekt 6">
</div>

</body>
</html>
```

### Eksempel 3: Mobile-first menu (hamburger)

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0066cc;
    color: #ffffff;
    padding: 15px 20px;
  }

  .navbar-menu {
    display: none; /* Skjult på mobil */
    flex-direction: column;
    gap: 10px;
  }

  .navbar-menu a {
    color: #ffffff;
    text-decoration: none;
  }

  .menu-toggle {
    display: block; /* Synligt på mobil */
    background: none;
    border: none;
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
  }

  /* Tablet og større */
  @media (min-width: 768px) {
    .navbar-menu {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }

    .menu-toggle {
      display: none; /* Skjul hamburger menu */
    }
  }
</style>
</head>
<body>

<nav class="navbar">
  <div>LOGO</div>
  <button class="menu-toggle">☰</button>
  <div class="navbar-menu">
    <a href="#">Hjem</a>
    <a href="#">Tjenester</a>
    <a href="#">Projekter</a>
    <a href="#">Kontakt</a>
  </div>
</nav>

<main style="padding: 20px;">
  <h1>Velkommen</h1>
  <p>Se menuen på mobil (☰) og større skærme.</p>
</main>

</body>
</html>
```

### Vigtigste punkter

- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** skal være i `<head>` for responsiv design
- **`@media (min-width: 768px) { }`** betyder "hvis bredde er 768px eller større"
- **`@media (max-width: 767px) { }`** betyder "hvis bredde er 767px eller mindre"
- **Mobile-først tilgang: design for mobil først, så forbedre for større skærme**
- **`max-width: 100%;` på billeder gør dem responsiv**
- **Fælles breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1400px (stor desktop)**
- **`grid-template-columns: 1fr;` på mobil bliver `1fr 1fr` på tablet osv.**

---

## LEKTION 9: ANIMATIONER & TRANSITIONS (Grundlæggende CSS animationer)

### Forklaring

Animationer gør websites levende. CSS har to måder: **transitions** (glat ændring fra en tilstand til anden) og **animations** (komplekse bevægelser defineret trin-for-trin).

**Transitions** er enkleste. Du siger "når noget ændres, ændres det glat over 0.3 sekunder i stedet for øjeblikkeligt". For eksempel: `transition: all 0.3s ease;` betyder "alle egenskaber skal ændres glat over 0.3 sekunder". Du kombinerer det ofte med `:hover` pseudo-class - "når musekursor er over elementet".

**Animations** er mere komplekse. Du definerer "keyframes" (trin) med `@keyframes` og siger "play denne animation over 2 sekunder". Brug animationer til effekter som spinning loading-icons eller fade-in ved page-load.

**Timing functions** kontrollerer hastighed: `ease` (langsomst i start og slut), `linear` (konstant), `ease-in` (langsomt start), `ease-out` (langsomt slut).

### Eksempel 1: Transitions med hover

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 40px;
  }

  .button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 15px 30px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 10px;
  }

  .button:hover {
    background-color: #0052a3;
    transform: scale(1.05);
  }

  .button:active {
    transform: scale(0.98);
  }

  /* Knap med farveændring */
  .button-color {
    background-color: #00cc00;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .button-color:hover {
    background-color: #008800;
    color: #ffff00;
  }

  /* Knap med shadow */
  .button-shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .button-shadow:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
</style>
</head>
<body>

<h1>Transitions Demo</h1>

<button class="button">Normal knap (hover over mig)</button>
<button class="button button-color">Farve-ændring</button>
<button class="button button-shadow">Shadow & hæv</button>

</body>
</html>
```

### Eksempel 2: Keyframe animationer

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 40px;
    background-color: #f5f5f5;
  }

  /* Fade-in animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 1s ease;
  }

  /* Spin animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ddd;
    border-top: 5px solid #0066cc;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px 0;
  }

  /* Bounce animation */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .bounce {
    animation: bounce 0.6s ease infinite;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: #0066cc;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
</style>
</head>
<body>

<h1>Keyframe Animationer</h1>

<div class="box fade-in">Fade In</div>

<h3>Loading spinner:</h3>
<div class="spinner"></div>

<h3>Bounce animation:</h3>
<div class="box bounce">Bounce!</div>

</body>
</html>
```

### Eksempel 3: Combination transitions + animations

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 40px;
  }

  /* Slide in animation */
  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px 0;
    animation: slideInFromLeft 0.5s ease;
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  /* Pulse effect */
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(0, 102, 204, 0);
    }
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .cta-button {
    background-color: #ff6600;
    color: #ffffff;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    animation: pulse 2s infinite;
  }
</style>
</head>
<body>

<h1>Kombineret Animationer</h1>

<div class="card">
  <h2>Kort 1</h2>
  <p>Denne kort slides ind og får shadow ved hover.</p>
</div>

<div class="card">
  <h2>Kort 2</h2>
  <p>Og denne også.</p>
</div>

<button class="cta-button">Kontakt os nu!</button>

</body>
</html>
```

### Vigtigste punkter

- **`transition: all 0.3s ease;`** gør ændringer glat
- **`transition` virker ofte best med `:hover`**
- **`@keyframes` definerer trin-for-trin animationer**
- **`animation: fadeIn 1s ease;`** starter en keyframe animation
- **`infinite` betyder animationen gentager sig for evigt**
- **Timing functions: `ease`, `linear`, `ease-in`, `ease-out`**
- **`transform: scale()`, `rotate()`, `translateX()`, `translateY()` kan animeres**
- **Shadow og farve kan også animeres med transitions**

---

## LEKTION 10: PSEUDO-KLASSER & TILSTANDE (Hover, focus, active)

### Forklaring

Pseudo-klasser er CSS-selektorer der matcher elementer baseret på deres tilstand eller position i HTML. De starter med `:` (enkelt kolon). De vigtigste er `:hover` (når musekursor er over), `:focus` (når element er fokuseret, f.eks. input felt), og `:active` (når element klikkes på).

`:hover` bruges typisk på links og knapper for at give feedback når brugeren peger på dem. `:focus` er vigtig for keyboard-brugere - når de trykker Tab for at navigere, kan du se hvilken knap der er fokuseret.

`:first-child` og `:last-child` matcher første/sidste barn i en parent. `:nth-child(2)` matcher barn nummer 2. `:not(selector)` matcher alt undtagen noget specifikt. `:disabled` matcher deaktiverede form-elementer.

Det vigtigste at huske er at pseudo-klasser handler om bruger-interaktion og element-position - de handler IKKE om at tilføje indhold (det er `:before` og `:after` for, som vi ikke går i dybden med her).

### Eksempel 1: Hover, focus, active

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 40px;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 5px;
  }

  a:hover {
    color: #ff6600;
    text-decoration: underline;
  }

  a:active {
    color: #cc0000;
  }

  a:visited {
    color: #666666;
  }

  input {
    padding: 10px;
    border: 2px solid #cccccc;
    font-size: 16px;
    transition: all 0.3s ease;
    margin: 10px 0;
    display: block;
    width: 300px;
  }

  input:focus {
    border-color: #0066cc;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.3);
  }

  button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
  }

  button:hover {
    background-color: #0052a3;
  }

  button:active {
    transform: scale(0.98);
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>
</head>
<body>

<h1>Pseudo-klasser Demo</h1>

<h2>Links</h2>
<a href="#">Hover over mig</a><br>
<a href="#">Og mig også</a>

<h2>Form elementer</h2>
<label>Navn:</label>
<input type="text" placeholder="Klik her og begynd at skrive">

<label>Email:</label>
<input type="email" placeholder="Email">

<button>Normal knap</button>
<button disabled>Deaktiveret knap</button>

</body>
</html>
```

### Eksempel 2: First-child, last-child, nth-child

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  /* Første element får ingen top-margin */
  li:first-child {
    margin-top: 0;
  }

  /* Sidste element får ingen border-bottom */
  li:last-child {
    border-bottom: none;
  }

  /* Hvert andet element får anden baggrundsfarve */
  li:nth-child(odd) {
    background-color: #f5f5f5;
  }

  /* Kun 3. barn */
  li:nth-child(3) {
    background-color: #ffffcc;
    font-weight: bold;
  }
</style>
</head>
<body>

<h1>List Demo</h1>

<ul>
  <li>Punkt 1 (første)</li>
  <li>Punkt 2 (lige)</li>
  <li>Punkt 3 (ulige + special)</li>
  <li>Punkt 4 (lige)</li>
  <li>Punkt 5 (sidste)</li>
</ul>

</body>
</html>
```

### Eksempel 3: :not() pseudo-klasse og :checked

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 40px;
  }

  /* Alle labels undtagen dem med class="error" */
  label:not(.error) {
    color: #333333;
  }

  label.error {
    color: #cc0000;
  }

  input[type="checkbox"] {
    margin-right: 10px;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    accent-color: #0066cc;
  }

  /* Show/hide baseret på checkbox */
  .hidden-unless-checked {
    display: none;
    padding: 20px;
    background-color: #ffffcc;
    margin-top: 10px;
  }

  /* Dette virker ikke uden JavaScript, men her er CSS-delen */
  /* Med HTML structure som den er, kan vi ikke ændre visibility med CSS alene */
</style>
</head>
<body>

<h1>Pseudo-klasser Avanceret</h1>

<h2>Labels</h2>
<label>Navn:</label><br>
<label class="error">Email (fejl!):</label>

<h2>Checkboxes</h2>
<input type="checkbox" id="agree">
<label for="agree">Jeg accepterer betingelserne</label>

</body>
</html>
```

### Vigtigste punkter

- **`:hover`** - når musekursor er over elementet
- **`:focus`** - når element er fokuseret (f.eks. input felt)
- **`:active`** - når element klikkes på
- **`:visited`** - links der er besøgt
- **`:first-child`** - første barn i en parent
- **`:last-child`** - sidste barn
- **`:nth-child(n)`** - barn nummer n
- **`:nth-child(odd)`** og `:nth-child(even)`** - ulige/lige elementer
- **`:disabled`** - deaktiverede form-elementer
- **`:not(selector)`** - alt undtagen matcher
- **`:checked`** - markerede checkboxes/radio buttons

---

## LEKTION 11: CSS BEST PRACTICES (Organisation, navngivning)

### Forklaring

God CSS-organisation betyder din kode er nem at vedligeholde, nem at udvide, og nem for andre at forstå. Der er flere metoder til at organisere CSS, men vi fokuserer på praktisk best practices som små håndværker-virksomheder kan bruge uden at blive overvedt af teori.

**Navngivning:** Brug beskrivende class-navne. `button-primary` er bedre end `btn1`. `card-service` er bedre end `box`. Hvis du kan læse class-navnet og forstå hvad det gør, er du på rette spor. Undgå at bruge HTML-struktur som navn (f.eks. `div-paragraph` - hvad hvis du ændrer HTML?).

**File-organisation:** Hold CSS i en separat fil (ikke inline i HTML). Hvis siden har mere end ~200 linjer CSS, overvej at dele det op i flere filer: `base.css` (globale styles), `components.css` (genbrugelige dele), `layout.css` (side-struktur).

**Specificity:** Undgå at løbe ud i specificiter-kampe. Hvis du skal bruge `!important`, er noget galt. Skriv CSS så specificitet stiger naturligt fra top til bund (globale styles først, så komponenter, så sider-specifikke styles).

**Kommentarer:** Comentér komplekse regler. `/* Gør billeder responsive */` er godt. `/* Dette er blåt */` er ikke nødvendigt (klassen `color-blue` siger allerede det).

### Eksempel 1: Velorganiseret CSS-fil

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* ============================================
     RESET & GLOBALE STYLES
     ============================================ */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    color: #333333;
    background-color: #ffffff;
    line-height: 1.6;
  }

  /* ============================================
     TYPOGRAFI
     ============================================ */

  h1, h2, h3 {
    font-weight: bold;
    margin: 20px 0 10px 0;
  }

  h1 { font-size: 48px; }
  h2 { font-size: 32px; }
  h3 { font-size: 24px; }

  p {
    margin-bottom: 15px;
  }

  a {
    color: #0066cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* ============================================
     KOMPONENTER
     ============================================ */

  /* Button component */
  .button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #0052a3;
  }

  .button--secondary {
    background-color: #666666;
  }

  .button--secondary:hover {
    background-color: #444444;
  }

  /* Card component */
  .card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .card__description {
    color: #666666;
  }

  /* ============================================
     LAYOUT
     ============================================ */

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
</head>
<body>

<div class="container">
  <h1>Velorganiseret CSS</h1>

  <div class="grid">
    <div class="card">
      <h2 class="card__title">Tjeneste 1</h2>
      <p class="card__description">Beskrivelse af tjeneste 1.</p>
      <button class="button">Læs mere</button>
    </div>

    <div class="card">
      <h2 class="card__title">Tjeneste 2</h2>
      <p class="card__description">Beskrivelse af tjeneste 2.</p>
      <button class="button">Læs mere</button>
    </div>

    <div class="card">
      <h2 class="card__title">Tjeneste 3</h2>
      <p class="card__description">Beskrivelse af tjeneste 3.</p>
      <button class="button">Læs mere</button>
    </div>
  </div>
</div>

</body>
</html>
```

### Eksempel 2: BEM naming convention (Block Element Modifier)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* BEM: Block__Element--Modifier */

  /* Block: .user-card */
  .user-card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 20px;
  }

  /* Element: .user-card__image */
  .user-card__image {
    width: 100%;
    max-width: 200px;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  /* Element: .user-card__name */
  .user-card__name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  /* Element: .user-card__title */
  .user-card__title {
    color: #666666;
    margin-bottom: 15px;
  }

  /* Element: .user-card__bio */
  .user-card__bio {
    color: #888888;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  /* Modifier: .user-card--featured */
  .user-card--featured {
    border-color: #0066cc;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }

  /* Modifier applied to element: .user-card__image--large */
  .user-card__image--large {
    max-width: 300px;
  }
</style>
</head>
<body>

<div class="user-card">
  <img src="https://via.placeholder.com/200" alt="Profil" class="user-card__image">
  <h3 class="user-card__name">Jensen Hansen</h3>
  <p class="user-card__title">Administrerende direktør</p>
  <p class="user-card__bio">Over 25 års erfaring i byggeri og renovering.</p>
</div>

<div class="user-card user-card--featured">
  <img src="https://via.placeholder.com/300" alt="Profil" class="user-card__image user-card__image--large">
  <h3 class="user-card__name">Andersen Andersen</h3>
  <p class="user-card__title">Arkitekt & designer</p>
  <p class="user-card__bio">Specialiseret i moderne og bæredygtig design.</p>
</div>

</body>
</html>
```

### Eksempel 3: CSS-variabler for konsistens

```html
<!DOCTYPE html>
<html>
<head>
<style>
  /* CSS-variabler (custom properties) for consistency */
  :root {
    /* Farver */
    --color-primary: #0066cc;
    --color-secondary: #ff6600;
    --color-dark: #333333;
    --color-light: #f5f5f5;

    /* Spacing */
    --spacing-xs: 5px;
    --spacing-sm: 10px;
    --spacing-md: 20px;
    --spacing-lg: 40px;

    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;

    /* Skygge */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  body {
    font-family: Arial, sans-serif;
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  .button {
    background-color: var(--color-primary);
    color: #ffffff;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
  }

  .button:hover {
    box-shadow: var(--shadow-md);
  }

  .card {
    background-color: #ffffff;
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
  }

  .card h3 {
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }

  /* Nem at tilpasse hele siden - skift blot variabler ovenfor */
</style>
</head>
<body>

<div class="card">
  <h3>Bruger CSS-variabler</h3>
  <p>Du kan nemt ændre alle farver, spacing osv. ved at ændre variabler øverst.</p>
  <button class="button">Se mere</button>
</div>

<div class="card">
  <h3>Konsistens</h3>
  <p>Alle farver og afstande bruger variabler, så siden bliver konsistent.</p>
  <button class="button">Kontakt</button>
</div>

</body>
</html>
```

### Vigtigste punkter

- **Navngivning:** Brug beskrivende, forståelige class-navne (`card-service`, ikke `box1`)
- **Organisering:** Del CSS op i sektor (reset, typografi, komponenter, layout)
- **Specificity:** Undgå at løbe ud i specificiter-kampe; skriv CSS så specificitet stiger naturligt
- **BEM naming:** `Block__Element--Modifier` gør CSS-struktur tydelig
- **CSS-variabler:** Brug `:root` og `var()` for konsistente farver og spacing
- **Kommentarer:** Comenter komplekse regler; ikke åbenlyst stuffe
- **DRY-princippet:** "Don't Repeat Yourself" - genbrug classes i stedet for at kopiere styles
- **Hold styles i separat fil** - gør HTML renere

---

## LEKTION 12: BYGNING AF EN KOMPLET WEBSITE (Capstone projekt guide)

### Forklaring

Nu er det tid til at bygge en rigtig website - en komplet, responsiv side for en fingeret byggefirma "Jensen Byggefirma". Vi skal samle alt vi har lært: HTML-struktur, CSS-selektorer, flexbox, responsive design, animationer, og god organisation.

Projektet har: en header med navigation, hero-sektion, tjeneste-kort, portfolio-galleri, testimonial-sektion, og en footer. Vi bruger flexbox og grid til layout, media queries til responsiv design, og transitions til interaktivitet.

**Plan:**
1. Struktur HTML med semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
2. Skid CSS op i sektioner (reset, typografi, komponenter, layout, responsive)
3. Brug classes for styling (ingen inline styles)
4. Test på både mobil (380px) og desktop (1200px)
5. Tilføj transitions/animations for polish

Dette er et stort projekt (~600 linjer), men det er den bedste måde at lære CSS på - ved at bygge noget rigtig.

### Komplet Website Project

```html
<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jensen Byggefirma - Professionel Renovering & Byggeri</title>
<style>
  /* ============================================
     1. RESET & GLOBALE STYLES
     ============================================ */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: #333333;
    background-color: #ffffff;
    line-height: 1.6;
  }

  /* ============================================
     2. CSS-VARIABLER
     ============================================ */

  :root {
    --primary-color: #0066cc;
    --secondary-color: #ff6600;
    --dark-color: #333333;
    --light-color: #f5f5f5;
    --light-gray: #cccccc;
    --spacing-xs: 8px;
    --spacing-sm: 15px;
    --spacing-md: 25px;
    --spacing-lg: 40px;
    --border-radius: 4px;
    --transition: all 0.3s ease;
  }

  /* ============================================
     3. TYPOGRAFI
     ============================================ */

  h1, h2, h3, h4 {
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: var(--spacing-md);
  }

  h1 {
    font-size: 48px;
    color: var(--dark-color);
  }

  h2 {
    font-size: 36px;
    color: var(--dark-color);
  }

  h3 {
    font-size: 24px;
    color: var(--dark-color);
  }

  p {
    margin-bottom: var(--spacing-sm);
    color: #666666;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
  }

  a:hover {
    color: var(--secondary-color);
  }

  /* ============================================
     4. KOMPONENTER
     ============================================ */

  /* Button styles */
  .button {
    display: inline-block;
    background-color: var(--primary-color);
    color: #ffffff;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius);
    font-size: 16px;
    cursor: pointer;
    transition: var(--transition);
  }

  .button:hover {
    background-color: #0052a3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  }

  .button--secondary {
    background-color: var(--secondary-color);
  }

  .button--secondary:hover {
    background-color: #e55a00;
  }

  /* Card styles */
  .card {
    background-color: #ffffff;
    border: 1px solid var(--light-gray);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    transition: var(--transition);
  }

  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  .card__image {
    width: 100%;
    height: 200px;
    background-color: var(--light-color);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #999999;
  }

  .card__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: var(--spacing-sm);
  }

  .card__description {
    color: #666666;
    margin-bottom: var(--spacing-md);
  }

  /* ============================================
     5. LAYOUT
     ============================================ */

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  /* Grid layout */
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* ============================================
     6. HEADER & NAVIGATION
     ============================================ */

  header {
    background-color: #ffffff;
    border-bottom: 1px solid var(--light-gray);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md) 0;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
  }

  .nav-menu {
    display: none;
    flex-direction: row;
    list-style: none;
    gap: var(--spacing-lg);
  }

  .nav-menu a {
    color: var(--dark-color);
    transition: var(--transition);
  }

  .nav-menu a:hover {
    color: var(--primary-color);
  }

  .menu-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--dark-color);
  }

  @media (min-width: 768px) {
    .nav-menu {
      display: flex;
    }

    .menu-toggle {
      display: none;
    }
  }

  /* ============================================
     7. HERO SECTION
     ============================================ */

  .hero {
    background: linear-gradient(135deg, var(--primary-color), #0052a3);
    color: #ffffff;
    padding: 80px var(--spacing-md) 60px;
    text-align: center;
    animation: fadeIn 1s ease;
  }

  .hero h1 {
    color: #ffffff;
    font-size: 36px;
    margin-bottom: var(--spacing-md);
  }

  .hero p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin-bottom: var(--spacing-lg);
  }

  @media (min-width: 768px) {
    .hero {
      padding: 120px var(--spacing-md) 80px;
    }

    .hero h1 {
      font-size: 48px;
    }
  }

  /* ============================================
     8. SERVICES SECTION
     ============================================ */

  .section {
    padding: var(--spacing-lg) 0;
  }

  .section-title {
    text-align: center;
    margin-bottom: var(--spacing-lg);
  }

  .section-title h2 {
    margin-bottom: var(--spacing-md);
  }

  .section-title p {
    color: #666666;
    max-width: 600px;
    margin: 0 auto;
  }

  /* ============================================
     9. TEAM SECTION
     ============================================ */

  .team-member {
    text-align: center;
  }

  .team-member__avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: var(--light-color);
    margin: 0 auto var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }

  .team-member__name {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .team-member__role {
    color: var(--primary-color);
    font-size: 14px;
  }

  /* ============================================
     10. TESTIMONIALS SECTION
     ============================================ */

  .testimonial {
    background-color: var(--light-color);
    padding: var(--spacing-md);
    border-left: 4px solid var(--primary-color);
    margin-bottom: var(--spacing-md);
  }

  .testimonial__quote {
    font-style: italic;
    margin-bottom: var(--spacing-sm);
    color: var(--dark-color);
  }

  .testimonial__author {
    font-weight: bold;
    color: var(--primary-color);
  }

  .testimonial__role {
    font-size: 14px;
    color: #666666;
  }

  /* ============================================
     11. FOOTER
     ============================================ */

  footer {
    background-color: var(--dark-color);
    color: #ffffff;
    padding: var(--spacing-lg) 0;
    margin-top: var(--spacing-lg);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }

  @media (min-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .footer-section h3 {
    color: #ffffff;
    margin-bottom: var(--spacing-md);
  }

  .footer-section ul {
    list-style: none;
  }

  .footer-section li {
    margin-bottom: var(--spacing-sm);
  }

  .footer-section a {
    color: rgba(255, 255, 255, 0.7);
  }

  .footer-section a:hover {
    color: #ffffff;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--spacing-md);
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  /* ============================================
     12. ANIMATIONS
     ============================================ */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.8s ease;
  }

  .slide-in {
    animation: slideInUp 0.8s ease;
  }
</style>
</head>
<body>

<!-- HEADER & NAVIGATION -->
<header>
  <div class="container">
    <nav>
      <div class="logo">Jensen AS</div>
      <button class="menu-toggle">☰</button>
      <ul class="nav-menu">
        <li><a href="#services">Tjenester</a></li>
        <li><a href="#portfolio">Projekter</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- HERO SECTION -->
<section class="hero">
  <div class="container">
    <h1>Professionel Byggeri & Renovering</h1>
    <p>Over 25 år erfaring i at bygge Danmarks fremtid</p>
    <button class="button">Ring for tilbud</button>
  </div>
</section>

<!-- SERVICES SECTION -->
<section class="section" id="services">
  <div class="container">
    <div class="section-title">
      <h2>Vores Tjenester</h2>
      <p>Vi tilbyder et komplet spektrum af byggeri- og renoveringstjenester</p>
    </div>

    <div class="grid">
      <div class="card slide-in">
        <div class="card__image">🏗️</div>
        <h3 class="card__title">Nybyggeri</h3>
        <p class="card__description">Fra grundlæggelse til færdigstillelse. Vi håndterer alt fra design til kvalitetssikring.</p>
      </div>

      <div class="card slide-in">
        <div class="card__image">🔧</div>
        <h3 class="card__title">Renovering</h3>
        <p class="card__description">Modernisering af eksisterende ejendomme med fokus på energieffektivitet.</p>
      </div>

      <div class="card slide-in">
        <div class="card__image">⚒️</div>
        <h3 class="card__title">Reparationer</h3>
        <p class="card__description">Hurtige og pålidelige reparationer året rundt med professionel hjælp.</p>
      </div>
    </div>
  </div>
</section>

<!-- PORTFOLIO SECTION -->
<section class="section" id="portfolio" style="background-color: var(--light-color);">
  <div class="container">
    <div class="section-title">
      <h2>Vores Projekter</h2>
      <p>Se nogle af vores seneste og mest stolte projekter</p>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card__image">Tilbygning, Helsingør</div>
        <p class="card__description">2500 kvm tilbygning til moderne kontorbygning.</p>
      </div>

      <div class="card">
        <div class="card__image">Renovering, Fredensborg</div>
        <p class="card__description">Komplet renovering af historisk villa fra 1892.</p>
      </div>

      <div class="card">
        <div class="card__image">Nybyggeri, Hornbæk</div>
        <p class="card__description">Miljøvenligt nybyggeri med fokus på bæredygtighed.</p>
      </div>

      <div class="card">
        <div class="card__image">Tilbygning, Hørsholm</div>
        <p class="card__description">Moderne tilbygning til familie-villa.</p>
      </div>

      <div class="card">
        <div class="card__image">Renovering, Jægerspris</div>
        <p class="card__description">Totalrenovering af landsted.</p>
      </div>

      <div class="card">
        <div class="card__image">Reparationer, Diverse</div>
        <p class="card__description">Løbende vedligeholdelse og reparationer verden rundt.</p>
      </div>
    </div>
  </div>
</section>

<!-- TEAM SECTION -->
<section class="section" id="team">
  <div class="container">
    <div class="section-title">
      <h2>Vores Team</h2>
      <p>Dedikerede håndværkere med passion for kvalitet</p>
    </div>

    <div class="grid">
      <div class="team-member">
        <div class="team-member__avatar">👨</div>
        <h3 class="team-member__name">Henrik Jensen</h3>
        <p class="team-member__role">Administrerende direktør</p>
        <p>30 års erfaring i byggeri</p>
      </div>

      <div class="team-member">
        <div class="team-member__avatar">👨</div>
        <h3 class="team-member__name">Lars Andersen</h3>
        <p class="team-member__role">Teknisk leder</p>
        <p>Eksperte i moderne teknologier</p>
      </div>

      <div class="team-member">
        <div class="team-member__avatar">👨</div>
        <h3 class="team-member__name">Peter Nielsen</h3>
        <p class="team-member__role">Projektstyrer</p>
        <p>Sikrer timing og kvalitet</p>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS SECTION -->
<section class="section" style="background-color: var(--light-color);">
  <div class="container">
    <div class="section-title">
      <h2>Hvad vores kunder siger</h2>
    </div>

    <div class="testimonial">
      <p class="testimonial__quote">"Jensen Byggefirma leverede præcis hvad de lovede. Professionelt team og høj kvalitet. Jeg anbefaler dem til alle!"</p>
      <p class="testimonial__author">Søren Larsen</p>
      <p class="testimonial__role">Ejer af villa, Helsingør</p>
    </div>

    <div class="testimonial">
      <p class="testimonial__quote">"Fra første møde til færdiggørelse var alt veltilrettelagt og problemfrit. De overholdt budget og deadline."</p>
      <p class="testimonial__author">Mette Johnson</p>
      <p class="testimonial__role">Erhvervsejer, Fredensborg</p>
    </div>

    <div class="testimonial">
      <p class="testimonial__quote">"Dedikeret team, høj faglig standard og gode mennesker. Bedre kan man ikke få!"</p>
      <p class="testimonial__author">Jens Christensen</p>
      <p class="testimonial__role">Administrerende direktør, Hornbæk</p>
    </div>
  </div>
</section>

<!-- CALL TO ACTION -->
<section class="section" style="background-color: var(--primary-color); color: #ffffff; text-align: center;">
  <div class="container">
    <h2 style="color: #ffffff;">Klar til at starte dit projekt?</h2>
    <p style="color: rgba(255, 255, 255, 0.9); font-size: 18px;">Kontakt os i dag for et gratis tilbud</p>
    <button class="button button--secondary">Ring os: 40 50 60 70</button>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-section">
        <h3>Om Jensen AS</h3>
        <p>Vi specialiserer os i høj-kvalitets byggeri, renovering og reparationer. Over 25 års erfaring til at hjælpe dig med dine drømme.</p>
      </div>

      <div class="footer-section">
        <h3>Tjenester</h3>
        <ul>
          <li><a href="#services">Nybyggeri</a></li>
          <li><a href="#services">Renovering</a></li>
          <li><a href="#services">Reparationer</a></li>
          <li><a href="#services">Tilbygninger</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Kontakt</h3>
        <ul>
          <li><a href="tel:+4540506070">40 50 60 70</a></li>
          <li><a href="mailto:info@jensen.dk">info@jensen.dk</a></li>
          <li>Vejs 123, 3000 Helsingør</li>
          <li><a href="#">Se kort</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Jensen Byggefirma. Alle rettigheder forbeholdt.</p>
    </div>
  </div>
</footer>

</body>
</html>
```

### Vigtigste punkter

- **Struktur først:** Skelettet er HTML, krydret er CSS
- **Responsive design:** Tester på mobil (380px), tablet (768px), desktop (1200px)
- **Reusable components:** `.button`, `.card`, `.grid` bruges flere steder
- **CSS-variabler:** `:root` gør konsistens nem
- **Animationer:** Fade-in og slide-up giver polished feel
- **Navigation:** Hamburger menu på mobil, horisontalt på desktop
- **Flexbox + Grid:** Brugt til layout - fleksibel og responsiv
- **Sticky header:** Navigation bliver ved øverst når du scroller
- **Call-to-action:** Kraftige farver for at trække opmærksomhed
- **Footer:** Informativt og struktureret

---

## OPSUMMERING: DIT NÆSTE SKRIDT

Du har nu 12 komplette lektioner med praktiske eksempler som du kan køre øjeblikkelig i din browser. Start med lektion 1 og arbejd dig gennem. Byg hver gang med dine egne variationer - det er sådan man lærer.

**Praktisk øvelse:** Tag et projekt fra dit eget byggefirma (website, visuel branding, osv.) og build det ved hjælp af disse lektioner. Med kun HTML + CSS kan du lave en professionel, responsiv website uden at være designer.

**Næste niveau:** Når du føler dig sikker med CSS, læs JavaScript - det gør websites interaktive (formular-validering, menu-toggle osv.).

**Pro-tip:** Chrome DevTools (F12 på Windows/Linux, Cmd+Option+I på Mac) er din bedste ven. Brug "Inspect Element" til at se hvad der sker med dine styles.

Lykke til med dine websites! Du kan nu bygge professionelle sider helt på egen hånd. 💪

---

**Senest opdateret:** 2. marts 2026
**Sprog:** Dansk
**Målgruppe:** Håndværkere uden webdesign-baggrund
**Alle eksempler:** Fuldt runnable - bare copy/paste ind i en `.html` fil og åbn i browser
