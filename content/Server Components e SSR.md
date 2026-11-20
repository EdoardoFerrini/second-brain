---
title: Server Components e SSR
description: "Next.js riporta il rendering sul server: HTML pronto, React Server Components e streaming invece di una SPA quasi vuota."
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-1
---

## Appunti

Nella SPA classica il browser riceve una pagina HTML quasi vuota, scarica il bundle JavaScript e solo dopo le chiamate API mostra i contenuti. Il rendering lato server produce invece HTML già pronto, migliorando la percezione di velocità e l'indicizzazione da parte dei motori di ricerca.

I **React Server Components** eseguono sul server e producono HTML che viene inviato al browser, mantenendo la possibilità di avere interattività client dove serve. Il confine tra codice server e client è gestito da React, non da un livello API separato.

Next.js integra in un unico progetto routing, data fetching, form, autenticazione e deploy: frontend e backend convivono nella stessa codebase.

Vedi anche [[App Router in Next.js]], [[Client Component in Next.js]] e [[Rendering statico e dinamico]].
