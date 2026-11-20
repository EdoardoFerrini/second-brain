---
title: Server Actions in Next.js
description: Le Server Actions eseguono sul server richiamate da form o bottoni e possono leggere sessione, scrivere dati e invalidare la cache.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-2
---

## Appunti

Una **Server Action** è una funzione async dichiarata con `"use server"` che può essere chiamata direttamente da un form Next.js tramite `action={...}`. Riceve un `FormData` ed esegue sul server.

Nel corso `createNote` controlla la sessione, valida il contenuto, inserisce la nota nel database, chiama `revalidatePath("/notes")` e poi reindirizza alla lista.

Le azioni sono il modo naturale per mutare dati dall'UI della stessa app: non serve scrivere un endpoint fetch lato client. Vanno comunque protette lato server, perché possono essere invocate anche fuori dall'interfaccia.

Vedi anche [[Validazione con useActionState]], [[NextAuth e sessioni]], [[API routes e Server Actions]] e [[Rendering statico e dinamico]].
