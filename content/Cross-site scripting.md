---
title: Cross-site scripting
description: XSS permette di far eseguire JavaScript malevolo nel browser di un altro utente, rubando per esempio la sessione.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.3/1-security
---

## Appunti

Con **XSS** un utente riesce a inserire contenuto malevolo in una pagina che verrà eseguito sulla macchina di un altro utente. Il contenuto può essere memorizzato nel database e quindi essere *stored*, oppure arrivare temporaneamente da un parametro della richiesta, quindi essere *reflected*.

Se l'input non viene trattato correttamente, uno script può leggere `document.cookie` e inviare il cookie di sessione a un server attaccante, permettendo di impersonare la vittima.

Le difese passano dall'escape dell'output e da framework che non renderizzano HTML arbitrario, ma la regola di fondo è trattare ogni input dell'utente come potenzialmente ostile.

Vedi anche [[HTTP GET e POST]], [[OWASP Top 10]] e [[NextAuth e sessioni]].
