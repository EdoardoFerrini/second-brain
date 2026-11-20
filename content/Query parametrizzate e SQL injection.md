---
title: Query parametrizzate e SQL injection
description: Costruire SQL con input utente concatenato permette injection; le query parametrizzate separano codice e dati.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.2/2-data
---

## Appunti

Una **SQL injection** avviene quando dati non sanitizzati finiscono dentro una query SQL e vengono interpretati come codice. Per esempio concatenare il nome utente direttamente in una `WHERE` permette di alterare la condizione.

La difesa sono le **query parametrizzate**: il codice SQL resta fisso e i valori arrivano come parametri separati, che il driver tratta sempre come dati. ORM e query builder moderni lo fanno di default se usati correttamente.

Il corso invita a provare a scrivere prima la query in modo sbagliato, costruendo la stringa direttamente, per vedere come cambia il risultato; poi a correggerla con i placeholder.

Vedi anche [[SELECT restituisce un result set]], [[OWASP Top 10]] e [[Drizzle ORM e migrazioni]].
