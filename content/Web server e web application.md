---
title: Web server e web application
description: Il web server ascolta le richieste HTTP e le inoltra all'applicazione, che costruisce la risposta.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.1/2-servers
---

## Appunti

Il **web server** è un programma che ascolta le connessioni in ingresso, di solito sulla porta 80, e parla HTTP. L'**applicazione web** gira sopra di esso: riceve la richiesta inoltrata dal server e produce la risposta.

Il flusso tipico è: l'utente clicca un link, il browser invia una richiesta, il server la riceve e costruisce una risposta (HTML, JSON, immagine), il browser la processa e la mostra.

Lato client si lavora con HTML per la struttura, CSS per il layout e JavaScript per la dinamica. Lato server si recuperano i dati, spesso da un database, e si costruisce la risposta.

Ogni risorsa richiesta dal browser è anche una possibile superficie di attacco: se un utente riesce a inserire JavaScript proprio in una pagina, quello script gira sulla macchina degli altri visitatori.

Vedi anche [[Porte e socket]], [[HTTP GET e POST]] e [[Cross-site scripting]].
