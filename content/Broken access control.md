---
title: Broken access control
description: Un controllo accessi difettoso permette di leggere o eseguire cose che l'utente non dovrebbe poter fare.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.3/1-security
---

## Appunti

Il **broken access control** si verifica quando l'applicazione permette di accedere a risorse o funzionalità che dovrebbero essere vietate all'utente.

Un caso tipico è l'**IDOR**: i dati di un utente sono raggiungibili tramite un parametro nell'URL o nel corpo della richiesta. Se il parametro viene modificato, si può leggere un altro account. Un altro errore frequente è una funzione administrativa senza controllo di autenticazione, oppure un controllo che verifica solo che l'utente sia loggato senza verificare i permessi necessari.

La difesa richiede controlli lato server su ogni richiesta, non solo nascondere pulsanti nell'interfaccia.

Vedi anche [[OWASP Top 10]], [[NextAuth e sessioni]] e [[Threat modeling con DFD]].
