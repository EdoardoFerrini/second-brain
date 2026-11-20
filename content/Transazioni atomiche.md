---
title: Transazioni atomiche
description: Una transazione garantisce che un gruppo di operazioni sul database riesca tutto o non riesca affatto.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.2/2-data
---

## Appunti

Una **transazione** raggruppa più operazioni sul database in un'unica unità: o vengono eseguite tutte, o nessuna. Serve a evitare stati intermedi incoerenti quando più utenti o thread agiscono sugli stessi dati.

L'esempio del corso è il bonifico: leggere i due conti, sottrarre a uno e sommare all'altro. Se due thread leggono gli stessi valori e poi scrivono in sequenza, il saldo di uno dei due può essere sovrascritto.

Django offre `transaction.atomic`, usabile come decoratore o context manager, per racchiudere l'intera operazione. Lo stesso principio si ritrova nei database relazionali usati da Next.js con Drizzle.

Vedi anche [[Drizzle ORM e migrazioni]] e [[Query parametrizzate e SQL injection]].
