# 🌱 El meu hort

App personal per al mòbil per gestionar l’hort: croquis dels bancals, cultius, regs, tractaments, pluja i collites. Funciona com una app instal·lable (PWA) i, un cop carregada, també **sense connexió**.

## Què fa

- **Croquis a escala:** dibuixa els bancals dins de l’hort, amb les dimensions en metres. S’arrosseguen per moure’ls i es poden canviar de mida.
- **Cultius per bancal:** més de 110 cultius, cadascun amb la data de sembra o marcat com a "vull plantar". Es poden barrejar diversos cultius al mateix bancal.
- **Simbiosi:** indica si la combinació de cultius és molt bona, bona, neutra o convé evitar-la.
- **Collites:** calcula automàticament quan collir cada cultiu a partir de la data de sembra.
- **Regs i tractaments:** historial per bancal, botó "Regar tot" i avís 💧! quan un bancal necessita aigua.
- **Pluja:** consulta automàtica de la pluja i la previsió (Open-Meteo), amb opció d’anotar-la a mà.
- **Rotació de cultius:** guarda els cultius retirats i avisa si repeteixes família botànica.
- **Catàleg de cultius:** foto, definició, nom científic, família i dies fins a la collita.
- **Còpia de seguretat:** exportació i importació de totes les dades en un fitxer JSON.

## Instal·lació al mòbil

1. Obre l’adreça de l’app amb Chrome.
2. Menú ⋮ → **Instal·la l’aplicació** (o **Afegeix a la pantalla d’inici**).

## Dades i privadesa

Les dades es guarden **només al navegador del mòbil**. No hi ha servidor ni comptes. Fes còpies de tant en tant des d’**Ajustos → Exportar dades**.

## Fitxers

| Fitxer | Funció |
|---|---|
| `index.html` | L’app completa |
| `sw.js` | Permet l’ús sense connexió |
| `manifest.json` | Dades per instal·lar-la com a app |
| `icon-192.png`, `icon-512.png` | Icones de l’app |

## Crèdits

- Previsió i pluja: [Open-Meteo](https://open-meteo.com)
- Fotos dels cultius: [Viquipèdia](https://ca.wikipedia.org)
