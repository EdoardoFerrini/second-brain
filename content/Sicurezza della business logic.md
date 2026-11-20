---
title: Sicurezza della business logic
description: I framework coprono molti attacchi noti, ma non impediscono all'utente di fare qualcosa che la logica di business non dovrebbe permettere.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.5/1-framework
---

## Appunti

I framework moderni risolvono molte vulnerabilità ricorrenti: query parametrizzate, template che fanno escape, gestione delle sessioni, token CSRF e controlli di accesso. Non però per automatica: la protezione dipende dalla versione e dalla configurazione del framework e delle sue dipendenze.

Il punto cieco resta la **business logic**. Un sistema può essere tecnicamente ben configurato e permettere comunque un'azione che l'utente non dovrebbe poter compiere, per esempio manipolando i passaggi di un flusso o i parametri di una transazione.

Per questo nei requisiti si possono aggiungere **evil user stories**: storie scritte dal punto di vista di un utente malevolo, che descrivono cosa si vuole impedire, non solo cosa si vuole abilitare.

Vedi anche [[OWASP Top 10]], [[Threat modeling con DFD]] e [[Fuzzing e buffer overflow]].
