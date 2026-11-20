---
title: sync crea le tabelle, le migration le versionano
description: sequelize.sync() crea le tabelle dai modelli; le migration registrano i cambiamenti dello schema.
topic: programmazione
course: full-stack-open-relational-databases
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-relational-databases/chapter-2
---

## Appunti

`sequelize.sync()` crea le tabelle a partire dai modelli. Ãˆ comodo all'inizio, ma non tiene traccia dei cambiamenti.

```js
await sequelize.sync({ force: true }) // cancella e ricrea le tabelle
```

Le **migration** invece sono file versionati: descrivono ogni modifica dello schema e possono essere applicate o annullate.

Regola pratica: `sync` in sviluppo, migration quando lo schema deve evolvere in modo ripetibile.

Vedi anche [[Sequelize Model definisce una tabella]].