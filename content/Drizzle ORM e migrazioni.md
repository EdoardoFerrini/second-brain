---
title: Drizzle ORM e migrazioni
description: Drizzle collega schema TypeScript e PostgreSQL; le migrazioni versionano i cambiamenti del database.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-3
---

## Appunti

Drizzle ORM permette di definire tabelle e colonne in TypeScript, generare query tipizzate e replicare lo schema nel database. Le relazioni tra tabelle, per esempio `users` e `notes`, si dichiarano una volta e l'API relazionale costruisce i join automaticamente.

Le **migrazioni** registrano i cambiamenti dello schema in file versionati: si generano con `drizzle-kit generate` e si applicano con `migrate`. In questo modo database locale e di produzione restano allineati senza ricreare i dati da zero.

Oltre all'API relazionale, Drizzle espone una SQL query builder più vicina al SQL, utile quando serve controllo esplicito su `select`, `where` e `leftJoin`.

Vedi anche [[Server Actions in Next.js]], [[Query parametrizzate e SQL injection]] e [[Transazioni atomiche]].
