---
title: Porte e socket
description: Una porta identifica un programma che ascolta su una macchina; un socket è l'handle usato per comunicare con esso.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.1/1-web
---

## Appunti

Ogni computer ha **porte**, punti di comunicazione del livello di trasporto. Se un processo controlla una porta e ascolta, può ricevere dati seguendo un protocollo, cioè un insieme di comandi riconosciuti.

Gli indirizzi IP identificano le macchine in rete; la porta identifica il programma dentro la macchina. Per comunicare, un programma crea un **socket**, un handle simile a un file descriptor da cui leggere e su cui scrivere verso un indirizzo e una porta remoti.

Uno **port scanner** prova a connettersi a un intervallo di porte: se una risponde, c'è un servizio da investigare. Può essere considerata attività preparatoria a un attacco, quindi va fatta solo su sistemi autorizzati.

Con Telnet o netcat si può parlare direttamente con un servizio, per esempio inviando una richiesta HTTP grezza:

```text
GET / HTTP/1.1
Host: f-secure.com
```

Vedi anche [[Web server e web application]] e [[HTTP GET e POST]].
