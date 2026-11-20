---
title: NextAuth e sessioni
description: NextAuth gestisce login, JWT firmati e cookie HTTP-only; le azioni protette verificano la sessione sul server.
topic: programmazione
course: full-stack-open-nextjs
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-4
---

## Appunti

NextAuth (Auth.js) copre l'intero flusso di autenticazione: provider `credentials`, callback `authorize`, sessioni e integrazione con i route handler.

Dopo il login, le credenziali vengono verificate confrontando la password con l'hash salvato. NextAuth crea un **JWT** firmato con `AUTH_SECRET` e lo invia come cookie **HTTP-only**: il browser lo rimanda a ogni richiesta, ma JavaScript non può leggerlo.

Sul client `SessionProvider` espone la sessione tramite context e `useSession()`. Sul server, dove gli hook non esistono, si usa `auth()` e un helper `getCurrentUser()` per recuperare l'utente dal database.

Le azioni che scrivono dati chiamano `auth()` all'inizio e reindirizzano a `/login` se non c'è sessione.

Vedi anche [[Server Actions in Next.js]], [[Client Component in Next.js]] e [[HTTP GET e POST]].
