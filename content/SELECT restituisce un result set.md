---
title: SELECT restituisce un result set
description: SELECT legge dati e restituisce un result set, senza modificare le tabelle.
topic: programmazione
course: full-stack-open-relational-databases
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-relational-databases/chapter-1
---

`SELECT` produce un **result set**: una tabella temporanea di righe restituite dalla query. Non cambia i dati nelle tabelle.

```sql
SELECT first_name, last_name
FROM employees;
```

Le colonne dopo `SELECT` sono la proiezione; `FROM` indica da dove leggere.

Vedi anche [[WHERE filtra righe, HAVING filtra gruppi]] e [[LIMIT e TOP limitano le righe]].