---
title: HTTP GET e POST
description: GET recupera dati e deve essere sicuro; POST invia un corpo e può modificare lo stato del server. HTTP è stateless.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.2/3-http
---

## Appunti

HTTP definisce diversi metodi di richiesta. **GET** serve a recuperare risorse: i parametri stanno nell'URL e la specifica dice che GET e HEAD non devono avere effetti collaterali, cioè vanno considerati *safe*.

**POST** può includere un corpo con dati, il cui tipo è dichiarato da `Content-Type`. I parametri non compaiono nella barra degli indirizzi e il browser chiede conferma prima di reinviare un form dopo un reload: segnale che POST può modificare lo stato del server.

HTTP è **stateless**: ogni richiesta viene trattata in modo indipendente. Per riconoscere un utente attraverso più richieste si usano i **cookie**, introdotti con HTTP/1.1: il server li mette nella risposta e il browser li rimanda nelle richieste successive.

Identificare un utente con parametri GET modificabili è una cattiva pratica: possono essere alterati facilmente.

Vedi anche [[Web server e web application]], [[NextAuth e sessioni]] e [[OWASP Top 10]].
