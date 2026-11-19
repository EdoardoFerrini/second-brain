---
title: LIMIT e TOP limitano le righe
description: PostgreSQL usa LIMIT, SQL Server usa TOP per limitare le righe restituite.
topic: programmazione
course: full-stack-open-relational-databases
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-relational-databases/chapter-1
---

Per prendere solo alcune righe la sintassi cambia da database a database.

PostgreSQL / SQLite:

```sql
SELECT * FROM employees LIMIT 10;
```

SQL Server:

```sql
SELECT TOP 10 * FROM employees;
```

È una delle prime differenze da tenere a mente passando dal PostgreSQL del corso a SQL Server.

Vedi anche [[SELECT restituisce un result set]].