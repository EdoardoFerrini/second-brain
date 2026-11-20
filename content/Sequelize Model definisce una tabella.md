---
title: Sequelize Model definisce una tabella
description: Un Model Sequelize descrive la struttura di una tabella e i suoi campi.
topic: programmazione
course: full-stack-open-relational-databases
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-relational-databases/chapter-2
---

## Appunti

Un `Model` Sequelize Ã¨ la definizione di una tabella: nome, colonne, tipi e vincoli. Le istanze del modello sono righe.

```js
class Note extends Model {}

Note.init({
  content: { type: DataTypes.TEXT, allowNull: false },
  important: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { sequelize, modelName: 'note' })
```

`allowNull: false` diventa un vincolo `NOT NULL` nel database.

Vedi anche [[sync crea le tabelle, le migration le versionano]].