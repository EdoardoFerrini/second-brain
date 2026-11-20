---
title: Client Component in Next.js
description: La direttiva use client rende un componente interattivo nel browser; va usata solo quando serve.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-2
---

## Appunti

Un componente diventa **Client Component** quando inizia con la direttiva `"use client"`. Serve quando il componente usa stato, effetti, hook o gestori di eventi come `onClick`, che non possono esistere in un Server Component.

Nel corso sono client component la navbar, che mostra lo stato della sessione e chiama `signOut()`, e il form di creazione nota, che usa `useActionState` per mostrare errori inline.

La regola pratica è mantenere server i componenti che leggono dati e spostare sul client solo il sottoalbero che realmente richiede interattività. Un provider che usa React context, come `SessionProvider`, deve essere un Client Component.

Vedi anche [[Server Components e SSR]], [[App Router in Next.js]] e [[Validazione con useActionState]].
