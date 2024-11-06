# Procesverslag

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Marie Janette Haspels

#### Je startniveau:

blauw

#### Je focus:

layout

</details>

## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

mij opdracht is om een nieuwe / betere versie te maken van de website: https://www.lepetitgeorge.nl/

#### Screenshot(s) van de eerste pagina (small screen):

hier de naam van de pagina  
 <img src="![Alt text](readme-images/lepetitgoergepagina2.png)" width="375px" alt="de homepagina die ik ga maken ">

#### Screenshot(s) van de tweede pagina (small screen):

hier de naam van de pagina  
 <img src="![Alt text](readme-images/lepetitgeorgepagina.png)" width="375px" alt="De about pagina word de tweede pagina die ga ik verbeteren.">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen:

De website van Le Petit George ziet er stijlvol en minimalistisch uit, met mooie foto's die de sfeer goed weergeven. Alles staat op één pagina zonder duidelijke kopjes of hoofdstukken, wat het lastig maakt om snel informatie te vinden. Een menu met secties zoals "Over Ons", "Menu", en "Reserveren" zou de gebruiksvriendelijkheid verbeteren. Daarnaast zouden interactieve elementen zoals een reserveringsknop of een dynamische fotogalerij de website aantrekkelijker maken. Door meer structuur en duidelijke call-to-action knoppen toe te voegen, kan de website niet alleen visueel mooi blijven, maar ook functioneler en makkelijker te navigeren worden voor bezoekers.



</details>

## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

### de hele pagina:

  <img src="![Alt text](<readme-images/FireShot Capture 003 - Le Petit George - .png>)" width="375px" alt="breakdown van de hele pagina">
  
  <img src="![Alt text](<readme-images/FireShot Capture 004 - Le Petit George - .png>)" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu):

  <img src="![Alt text](readme-images/lepetitgoergepagina2.png)" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter):

  <img src="![Alt text](readme-images/lepetitgeorgepagina.png)" width="375px" alt="breakdown van nog een dynamisch deel">

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

### Stand van zaken

hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

Tijdens het werken aan de code voor de website kwam ik erachter dat het hamburger menu niet goed functioneerde. Ik had de code voor het menu van een voorbeeldwebsite gebruikt (de bron was CodePen), maar het bleek niet naadloos te passen binnen mijn eigen project. Het menu opende niet altijd zoals ik wilde, en soms bleef het vaststaan, vooral op mobiele schermen. Ik heb verschillende aanpassingen geprobeerd om het probleem op te lossen, zoals het veranderen van de CSS-animaties en het updaten van de JavaScript-functies, maar het bleef lastig om het precies goed te krijgen.
<img src="![Alt text](readme-images/hamburgermenu.png)" width="375px"
alt="hamburgermenu"

<img src="![Alt text](readme-images/dots.png)" width="375px" alt="hamburgermenu"


- ...

</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
<img src="![Alt text](readme-images/lepetitgoergepagina2.png)" width="375px" alt="checklist"



</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

### Stand van zaken

hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
Het was behoorlijk lastig om de foto's netjes naast elkaar te krijgen in de layout. Ik gebruikte de `row` en `column` klassen, maar de foto's bleven steeds onder elkaar staan. Na wat zoeken en proberen kwam ik erachter dat ik `display: flex;` aan de `row`-container moest toevoegen en daarnaast de breedte van de `column`-items goed moest instellen. Toen ik dit eenmaal had aangepast, kwamen de foto's eindelijk mooi naast elkaar, precies zoals ik wilde. Deze kleine wijziging in de code bleek de oplossing te zijn.
<img src="![Alt text](readme-images/afbeeldingtest.png)" width="375px"
alt="afbeelding row"

<img src="![Alt text](readme-images/dots.png)" width="375px" alt="hamburgermenu"




</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

  <img src="![Alt text](readme-images/filmpje.png)" width="375px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

Korte omschrijving met plaatjes
Het filmpje bleef steeds loopen, en dat was eigenlijk precies de bedoeling. Door bewust `pointer-events: none;` toe te voegen in de CSS, zorgde ik ervoor dat het filmpje niet pauzeerbaar was door de gebruiker. Hierdoor kan niemand het per ongeluk stoppen en blijft het automatisch doorlopen op de achtergrond, zonder interactie van de gebruiker. Dit gaf precies het effect dat ik zocht: een continu afspelend filmpje dat niet onderbroken kan worden.

  <img src="![Alt text](readme-images/filmpje.png)" width="375px" alt="film">

### Dit was lastig/Is niet gelukt:

Korte omschrijving met plaatjes
Ik probeerde een animatie te maken waarbij de items in de footer mooi naast elkaar bewegen, maar het wilde maar niet lukken. Ondanks dat ik `display: flex;` had gebruikt, bleven de items steeds onder elkaar staan. Ik heb van alles geprobeerd met `@keyframes` en verschillende CSS-aanpassingen, maar niets hielp om ze netjes naast elkaar te krijgen. Uiteindelijk bleek dat de animatie de `flex`-instellingen in de war stuurde, waardoor het gewoon niet werkte. Dit heeft me echt laten zien hoe lastig het kan zijn als animaties en flexbox elkaar tegenwerken.

  <img src="![Alt text](readme-images/animatie.png)" width="375px" alt="animatie dat niet werkt">
</details>

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).
Nb. ChatGpT en andere AI horen er ook bij.
Nb. Vermeld de bronnen ook in je code.

1. hamburger menu - https://codepen.io/shooft/pen/VwJXNEg 
2. animatie & bronvermelding: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animationsUsing_CSS_animations

3. https://www.codeblocq.com/2016/05/Blur-Image-on-Hover-with-CSS/

</details>
