---
title: WHERE filtra righe, HAVING filtra gruppi
description: WHERE agisce sulle righe prima di GROUP BY, HAVING sui gruppi dopo.
topic: programmazione
course: full-stack-open-relational-databases
source: https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-relational-databases/chapter-1
---

`WHERE` scarta **righe** prima dell'aggregazione. `HAVING` scarta **gruppi** dopo `GROUP BY`.

```sql
SELECT customer_id, COUNT(*) AS orders
FROM orders
WHERE status = 'paid'
GROUP BY customer_id
HAVING COUNT(*) > 2;
```

Se la condizione usa una colonna aggregata, deve stare in `HAVING`.

Vedi anche [[SELECT restituisce un result set]].