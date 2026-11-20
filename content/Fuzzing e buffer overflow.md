---
title: Fuzzing e buffer overflow
description: Il fuzzing cerca difetti con input anomali; un buffer overflow può sovrascrivere l'indirizzo di ritorno e dirottare l'esecuzione.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.4/1-finding
---

## Appunti

Il **fuzzing** consiste nel sottoporre un programma a input improvvisati o generati per scoprire comportamenti inattesi. Quello “semplice” manda input casuali a una scatola nera; quello “intelligente” usa un harness e conosce meglio la struttura del target.

Un difetto può essere un bug implementativo, un errore di progettazione o un problema nella logica di business. Più il software è complesso e ha dipendenze, più grande è la superficie di attacco.

Nel caso dei linguaggi con gestione manuale della memoria, un **buffer overflow** può scrivere oltre la zona allocata nello stack e sovrascrivere l'indirizzo di ritorno: quando la funzione torna, l'instruction pointer finisce in codice scelto dall'attaccante. I **NOP slide** aumentano la probabilità di arrivare al codice malevolo.

Validare l'input con whitelist, per esempio accettando solo caratteri attesi, e usare linguaggi con gestione sicura della memoria riducono il rischio.

Vedi anche [[OWASP Top 10]] e [[Sicurezza della business logic]].
