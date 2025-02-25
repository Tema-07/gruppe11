# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

<!-- Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.
- Hvordan organiserer I billeder, fonte og andre ressourcer?
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning? -->

Vi vil organisere vores projekt og struktur, ved at lave forskellige mapper til alt CSS, HTMl, JS og billeder. Vi vil lave en base.css, hvor alle de fonte, farver osv som er gennemgående for hele sitet bliver samlet på samme sted.

Vores boilerplate hedder bare "main" i git.

## Navngivning:

<!-- Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen? -->

Vi vil navngive de projekter/sektioner som hænger sammen det samme fx burger.html og burger.css, så man kan forstå hvilke projekter der hører sammen. Vi vil kun bruge små bogstaver og undgå at bruge mellemrum, istedet vil vi bruge \_ til at vise mellemrum mellem tekst.

## Link til scripts:

<!--
- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>) -->

Vi vil placere alle vores script øverst i head, hvilket skal være gennemgående for hele projektet. Fx

   <script src="./JS/base.js" defer></script>

## Git branches:

<!-- - Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular) -->

Vi vil lave branches med vores egne navne i fx emmas-branch, og så vil vi fortsætte med at have en god kommunikation omkring hvem der arbejder med hvad. Istedet for at arbejde på main vil vi lave nye filer til at arbejde videre med nye funktioner m.m.

## Arbejdsflow:

<!--
- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
- Hvordan sikrer I, at commit-beskeder er beskrivende?
- Hvordan kommunikerer i om ændringer i main branchen når feature merges? -->

Når vi commiter vil vi sørge for at beskrive hvad der er blevet arbejdet på, så alle kan forstå.

## Kode:

<!-- - Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions): -->

Vi har skrevet funktioner flere forskellige steder og på to forskellige måder.
Her er et eksempl:

function addToBasket(id) {
alert(`Produkt er blevet tilføjet til kurven!`);
}
Her bruges funktionen til at lave en alarm på skærmen når en knap er klikket.

<!-- - Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS) -->

Vi har benyttet classes til CSS og id'er enektle steder til JS.

<!--
- Skal filer have korte forklaringer som kommentarer? -->

Vi har forsøgt at bruge korte kommentarer så meget som muligt, især i CSS og JavaScript. Dette giver et meget bedre overblik over hvad der er hvad, samt gør det nemmere når at orienterer sig, når man skal samarbejde.

# Funktionalitet

<!-- Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover -->

1. Websitet henter produkter dynamisk fra dummyjson API, baseret på den valgte kategori.
2. Brugeren kan filtre produkter via. klassik dropdownmenu (udsolgt, på tilbud, osv.)
3. Produkter vises alle dynamisk med titel, billede, pris og rabat. Dette gør det nemt og overskueligt at opsætte websitet så hvert produkt ikke skal have en manueltskrevet html.
4. Når brugeren klikker på produktet kommer de til en dynamisk hentet produktside.
5. På denne side kan brugeren læse anmeldelser af produktet samt rating. Disse er hentet fra API'et.
6. Øverst på alle sider findes en dynamisk opsat brødkrummesti.
7. på produktside kan produkt tilføjes til kurv og brugeren får en besked på skærmen om at det er registreret.
8. På alle produktsider kan brugeren tilgå en filter-funktion hvor de kan filtrere i deres søgning
9. Brugeren kan vælge at se alle produkter eller:
   - produkter på udsalg
   - produkter som er udsolgte
   - produkter som på er udsalg, men hvor de udsolgte produkter ikke medtages
10. Filtreringen er implementeret via en <select> dropdown-menu.
11. Dataen hentes fra API'et baseret på den valgte kategori.

# API endpoints

<!-- Dette afsnit skal liste de endpoints fra API'et i har benyttet: -->

- (fx. https://dummyjson.com/products)

https://dummyjson.com/products/category/{category}
https://dummyjson.com/products/category/beauty
https://dummyjson.com/products/category/skin-care
https://dummyjson.com/products/category/fragrances
https://dummyjson.com/products/{id}

# Dokumentation af Funktion

<!-- Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes: -->

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```

// her gør jeg sådan at den "poster" anmeldelsen til hjemmesiden ved brug af en funktion
function addReview() {
const reviewerName = document.getElementById("reviewer-name").value;
const reviewRating = document.getElementById("review-rating").value;
const reviewComment = document.getElementById("new-comment").value;
// her henter jeg reviewerName, rating og kommentar via id

const reviewList = document.getElementById("reviews-list");
// her bestemmer jeg hvor anmeldelserne skal vises
const newReview = document.createElement("div");
// her laver jeg en ny div hvori review-card skal placeres
newReview.classList.add("review-card");
// tilføjer klassen så der kan komme css på
newReview.innerHTML = `    <p class="review-date"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
    <p class="review-name"><strong>Reviewer:</strong> ${reviewerName}</p>
    <p class="review-rating"><strong>Rating:</strong> ${reviewRating} ⭐️</p>
    <p class="review-comment"><strong>Comment:</strong> ${reviewComment}</p>
 `;

// her laver et card der dynamisk henter dato, navn, rating og kommentar

reviewList.append(newReview);
// ved brug af append kan vi tilføje elementer eller tekst på én gang

// her tilføjes den nye anmeldelse til listen over anmeldelser

// Nulstil inputfelterne
document.getElementById("reviewer-name").value = "";
document.getElementById("review-rating").value = "5";
document.getElementById("new-comment").value = "";
}
// her nulstilles imputfelterne så man kan skrive et nyt review

// her har jeg en alarm, der tilføjer produkt til kurv
function addToBasket(id) {
a
