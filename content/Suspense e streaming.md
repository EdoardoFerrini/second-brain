---
title: Suspense e streaming
description: Suspense invia subito un fallback e fa arrivare le parti lente della pagina quando sono pronte.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-4
---

## Appunti

Quando un Server Component attende dati lenti, senza accorgimenti il browser resta vuoto finché la risposta non è pronta. **Suspense** permette di inviare immediatamente un fallback e sostituirlo con il contenuto reale quando arriva.

Il modo più semplice è creare `loading.tsx` nella stessa cartella di `page.tsx`: Next.js avvolge automaticamente la route in un confine Suspense. Per controlli più fini si usano più `<Suspense fallback={...}>` attorno a componenti indipendenti, così una sezione lenta non blocca le altre.

Questo si sposa con il modello dei Server Components: ogni blocco può fare il proprio data fetching e fare streaming del proprio HTML.

Vedi anche [[Rendering statico e dinamico]] e [[Server Components e SSR]].
