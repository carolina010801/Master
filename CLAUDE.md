# Temi per il concorso in magistratura

Questo ambiente serve esclusivamente alla redazione dei temi assegnati settimanalmente dal corso di preparazione al concorso in magistratura.

## Regola fondamentale sulle fonti

- Scrivere **solo ciò di cui si è certi**: dottrina, giurisprudenza e riferimenti normativi.
- Gli estremi delle sentenze (numero, data, sezione) si indicano **solo se si è sicuri**. Se il numero non è certo ma l'anno sì, si cita la pronuncia con l'anno (es. "le Sezioni Unite del 2020", "la giurisprudenza del 2020"). Se non è certo neanche l'anno, non si cita alcun estremo.
- Mai inventare o ricostruire a memoria estremi, nomi di autori o tesi dottrinali.
- Preferire la descrizione dell'orientamento ("secondo l'orientamento consolidato della giurisprudenza di legittimità…") alla citazione puntuale, quando quest'ultima non è certa.
- I testi normativi vanno citati in modo corretto e, se possibile, verificati su fonti ufficiali (es. Normattiva).

## Stile dei temi

- I temi sono destinati all'invio al corso e vanno scritti **come all'esame**.
- **Giurisprudenza**: si richiama in forma descrittiva, indicando al più l'anno della pronuncia (es. "le Sezioni Unite del 2020 hanno chiarito…"), secondo la regola sulle fonti.
- **Dottrina**: nel testo si cita solo come "dottrina" (es. "secondo una parte della dottrina…"), con il nome dell'autore tra parentesi quadre come promemoria per lo studio (es. "una parte della dottrina [Gazzoni]…"). Il nome si indica solo se è certo; in bella copia non va ricopiato.
- Gli articoli di legge si citano normalmente.
- **Lunghezza**: circa 6 pagine (indicativamente 2.000–2.500 parole), salvo diversa indicazione per la singola traccia.
- I temi servono anche per lo studio: devono essere completi e accurati nel contenuto, pur senza citazioni puntuali.

## Organizzazione dei file

- Un file Markdown per tema, in una cartella per materia: `civile/`, `penale/`, `amministrativo/`.
- Nome file: `AAAA-MM-GG-titolo-breve.md`, con la traccia riportata in testa.

---

# Appunti di diritto amministrativo (manuale integrato)

L'ambiente serve anche a raccogliere appunti dettati da **due manuali diversi** di diritto amministrativo: **A = Clarich**, **B = Caringella** e a fonderli in un **manuale unico integrato**.

## Organizzazione

- `amministrativo/appunti/clarich/` (Manuale A: Clarich) e `amministrativo/appunti/caringella/` (Manuale B: Caringella): appunti grezzi, così come dettati, un file per argomento (`NN-argomento.md`, es. `03-provvedimento-amministrativo.md`). Ogni file indica in testa il manuale e il capitolo di riferimento.
- `amministrativo/manuale-integrato/`: un file per capitolo (`NN-argomento.md`) che fonde i due manuali; `00-indice.md` contiene l'indice aggiornato.

## Regole per la dettatura

- All'inizio di ogni dettatura va chiarito **da quale manuale** proviene (A o B) e **quale argomento/capitolo**; se non è indicato, chiederlo.
- Il dettato non si trascrive alla lettera: si **rielabora** in forma di appunto ordinato, mantenendone tutto il contenuto.
- **Grammatica e sintassi** si correggono sempre dove opportuno (periodi spezzati, ripetizioni, costruzioni tipiche del parlato).
- **Correzioni sostanziali**: se il dettato contiene un errore o un'imprecisione (es. articolo sbagliato, norma abrogata o modificata, nozione inesatta), si corregge, ma solo se si è certi della correzione, e la si segnala con `> **Correzione:** …` indicando brevemente cosa è stato modificato e perché. In caso di dubbio non si corregge: si segnala con `> **Da verificare:** …`.

## Impaginazione e linguaggio (uniformi in tutti i file)

Ogni file, sia negli appunti sia nel manuale integrato, segue sempre lo stesso schema:

```
# NN. Titolo dell'argomento

**Fonte:** Clarich, cap. … | Caringella, cap. … | Integrato (Clarich + Caringella)

---

## 1. Titolo del paragrafo

### 1.1 Sottoparagrafo

Testo in prosa, paragrafi brevi.
```

- Titoli: `#` per l'argomento, `##` per i paragrafi numerati (1, 2, 3…), `###` per i sottoparagrafi (1.1, 1.2…). Non oltre il terzo livello.
- Prosa continua, in paragrafi brevi; elenchi puntati solo per enumerazioni vere (requisiti, elementi, tipologie, presupposti).
- **Grassetto** solo alla prima comparsa delle nozioni chiave e degli istituti; *corsivo* per le espressioni latine e straniere.
- Articoli citati sempre nella stessa forma: "art. 21-*octies*, comma 2, L. n. 241/1990"; "art. 34 c.p.a."; "art. 97 Cost.".
- Linguaggio tecnico-giuridico, registro uniforme e impersonale, terminologia costante (stesso istituto, stesso nome in tutti i file; sigle sciolte alla prima occorrenza: "pubblica amministrazione (p.a.)").
- Riquadri, sempre in questa forma: `> **Correzione:**`, `> **Da verificare:**`, `> **Divergenza Clarich/Caringella:**`, `> **Nota di integrazione:**`.

## Regole per l'integrazione

- Il capitolo integrato segue un ordine logico unico (nozione, fondamento normativo, disciplina, questioni controverse, giurisprudenza), non la giustapposizione dei due manuali.
- Dove i manuali coincidono, si scrive una versione unica, la più completa e chiara.
- Dove uno dei due aggiunge qualcosa, lo si integra nel punto pertinente.
- Dove i manuali **divergono** (impostazione, tesi, classificazioni), si riportano entrambe le posizioni, segnalando la divergenza con `> **Divergenza Clarich/Caringella:** …`.
- Le aggiunte non presenti in nessuno dei due manuali (es. aggiornamenti normativi) si segnalano con `> **Nota di integrazione:** …` e valgono le regole sulle fonti sopra indicate.
- Dottrina e giurisprudenza: si applicano le regole sulle fonti; i nomi degli autori citati dai manuali vanno tra parentesi quadre.
- Gli articoli di legge si verificano, se possibile, sul testo vigente (es. per la L. 241/1990 e il c.p.a., spesso modificati).
