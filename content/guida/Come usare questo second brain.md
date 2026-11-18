---
title: Come usare questo second brain
description: Guida rapida per scrivere e organizzare le note.
tags:
  - guida
  - metodo
---

# Come usare questo second brain

## Scrivere

- Aggiungi file Markdown (`.md`) nella cartella `content/`.
- Puoi organizzarli in cartelle: diventeranno automaticamente pagine cartella navigabili.
- I metadati in cima al file (frontmatter) possono contenere `title`, `description`, `tags` e `aliases`.

## Collegare

- Un wikilink `[[Nota di esempio]]` collega questa nota a un'altra.
- I collegamenti vengono risolti in modalità `shortest`: basta il nome del file, senza percorso.
- I **backlink** mostrano quali note puntano a quella corrente. Vedi ad esempio [[Nota di esempio]].

## Pubblicare

1. Modifica `quartz.config.yaml` (titolo, `baseUrl`, tema, plugin).
2. Anteprima locale: `npx quartz build --serve` → http://localhost:8080.
3. Pubblica con `npx quartz sync` dopo aver configurato il repository GitHub remoto.
