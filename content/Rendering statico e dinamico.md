---
title: Rendering statico e dinamico
description: Next.js può prerenderare una pagina al build o costruirla a ogni richiesta; la scelta cambia cached, dati e tempi di risposta.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-2
---

## Appunti

Nel **rendering statico** la pagina viene generata una volta durante la build e riutilizzata per tutte le richieste: è il caso più veloce, ma i dati sono quelli del momento della build.

Nel **rendering dinamico** la pagina viene costruita per ogni richiesta sul server, per esempio quando dipende da una sessione utente o da dati che cambiano spesso.

Dopo una mutazione, `revalidatePath("/notes")` invalida la versione cached della rotta e fa rigenerare la lista con i dati aggiornati. `redirect("/notes")` invece sposta l'utente dopo l'operazione.

Vedi anche [[Server Components e SSR]], [[Server Actions in Next.js]] e [[Suspense e streaming]].
