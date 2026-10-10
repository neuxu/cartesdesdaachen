# cartesdesdaachen — prototip inicial

Un prototip responsive d'un blog personal i acollidor, amb banner, entrada destacada, arxiu d'entrades, cerca i formulari de subscripció visual.

## Veure'l localment
1. Descomprimeix el ZIP.
2. Obre `index.html` al navegador.

No cal instal·lar cap dependència per veure el prototip.

## Què funciona ara
- Disseny adaptable a mòbil i ordinador.
- Banner i imatge d'article substituïbles a `styles.css`.
- Cerca local dins les entrades de mostra.
- Navegació per seccions.

## Abans de publicar-lo
Aquesta és una primera maqueta de front-end. El formulari de subscripció **encara no desa adreces ni envia correus**. Per fer-ho de debò cal connectar un backend/servei de newsletter, implementar confirmació de subscripció i baixa, i configurar el domini d'enviament i els registres SPF/DKIM/DMARC.

Per a un blog amb codi propi, una arquitectura possible és:
- Front-end: aquest HTML/CSS/JS o un tema personalitzat.
- Gestió d'articles i subscriptors: Ghost amb tema personalitzat, o un backend propi.
- Newsletter: servei de correu transaccional/bulk configurat i verificat.
- Domini i allotjament: domini registrat i allotjament amb HTTPS.

## Personalitzar
- Canvia el nom “Un racó per escriure” a `index.html`.
- Canvia les imatges a `styles.css` (cerques `background` de `.hero-banner` i `.featured-image`).
- Edita els articles de mostra a `index.html`.
- Ajusta colors i tipografia a les variables de `:root` de `styles.css`.

Les entrades de mostra són fictícies i s'han de substituir pel teu contingut.
