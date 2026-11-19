---
title: hasMany e belongsTo definiscono un'associazione
description: hasMany e belongsTo collegano due modelli e generano la chiave esterna.
topic: programmazione
course: full-stack-open-relational-databases
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-relational-databases/chapter-2
---

`User.hasMany(Note)` e `Note.belongsTo(User)` dichiarano una relazione 1:N. Sequelize aggiunge da solo la colonna `userId` nella tabella `notes`.

```js
User.hasMany(Note)
Note.belongsTo(User)
```

L'associazione crea anche i metodi per recuperare le note di un utente o l'utente di una nota.

Vedi anche [[Sequelize Model definisce una tabella]].