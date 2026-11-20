---
title: Validazione con useActionState
description: React 19 permette alla Server Action di restituire errori invece di lanciarli e al form di mostrarli inline.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-4
---

## Appunti

La validazione solo lato browser con `minLength` è comoda ma aggirabile: una richiesta diretta all'endpoint della Server Action può saltarla. Per questo la lunghezza minima del contenuto va controllata anche sul server.

Lanciare un errore nella action porta alla pagina di errore più vicina: esperienza pessima per un errore di form. Il pattern migliore è far restituire alla action uno stato tipo `{ error: "..." }`.

`useActionState(action, initialState)` dà al componente client lo stato aggiornato e l'azione da passare a `<form action={...}>`. In caso di errore il componente mostra il messaggio senza navigare; in caso di successo reindirizza.

Vedi anche [[Server Actions in Next.js]] e [[Client Component in Next.js]].
