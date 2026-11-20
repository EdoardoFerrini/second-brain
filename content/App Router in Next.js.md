---
title: App Router in Next.js
description: "Il routing di Next.js si basa sulla struttura della cartella app: page, layout e percorsi sono definiti dai file."
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-2
---

## Appunti

Con l'**App Router** ogni cartella dentro `app/` rappresenta un segmento dell'URL. Il file `page.tsx` rende la pagina di quella route, mentre `layout.tsx` definisce una struttura condivisa che avvolge le pagine figlie.

Per l'app Notes del corso, ad esempio, `app/notes/page.tsx` gestisce la lista delle note e `app/notes/[id]/page.tsx` la singola nota. Il layout principale `app/layout.tsx` contiene `<html>`, `<body>` e i componenti comuni come la navbar.

I componenti del layout e delle page sono Server Components per impostazione predefinita: possono leggere dati lato server senza inviare JavaScript al browser.

Vedi anche [[Server Components e SSR]], [[Client Component in Next.js]] e [[Server Actions in Next.js]].
