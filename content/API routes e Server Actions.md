---
title: API routes e Server Actions
description: Le Server Actions servono l'UI Next.js; le API routes espongono endpoint HTTP per client esterni.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-4
---

## Appunti

Un **Route Handler** è un file `route.ts` dentro `app/` che esporta funzioni come `GET`, `POST`, `DELETE`. Risponde a normali richieste HTTP e restituisce per esempio JSON con `NextResponse.json()`.

Le **Server Actions** sono pensate per i consumatori interni: form e bottoni della stessa app Next.js. Non richiedono codice fetch lato client e si integrano con cache e revalidazione.

La regola pratica: azioni per l'UI, API routes quando serve un endpoint chiamato da un'app mobile, un webhook o un altro servizio. NextAuth usa route handlers perché il flusso di login richiede redirect e cookie standard HTTP.

Vedi anche [[Server Actions in Next.js]] e [[NextAuth e sessioni]].
