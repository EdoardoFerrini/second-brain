---
title: Threat modeling con DFD
description: I diagrammi di flusso dei dati aiutano a vedere attori, confini di sicurezza e dove l'attaccante può controllare i dati.
topic: cybersecurity
course: cybersecurity-base
source: https://cybersecuritybase.mooc.fi/module-2.6/1-threat
---

## Appunti

Per analizzare un sistema complesso conviene disegnarlo: il **Data Flow Diagram** mostra come i dati entrano, attraversano e escono dal sistema. Non serve un modello formale perfetto; meglio iniziare da una lavagna vuota e raffinare con domande su cosa succede esattamente.

Gli elementi da rappresentare sono gli **attori**, compresi utenti, amministratori e attaccanti; le **interfacce**, cioè i punti in cui il flusso attraversa un confine; e i **confini di sicurezza**, barriere imposte dall'esterno, per esempio un processo che non può leggere la memoria di un altro.

Per ogni dato conviene chiedersi: da dove arriva, dove va e che cosa è. Un dato che arriva da fuori è potenzialmente controllato dall'attaccante; dati come chiavi, certificati e file di configurazione vanno trattati come informazioni sensibili al pari dei numeri di carta.

Quando i partecipanti sono molti e i protocolli complessi si può usare un **Message Sequence Chart**, con il tempo che scorre dall'alto verso il basso.

Vedi anche [[Web server e web application]], [[Broken access control]] e [[Sicurezza della business logic]].
