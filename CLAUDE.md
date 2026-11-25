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

# Appunti di diritto amministrativo (manuale unico)

L'ambiente serve anche a raccogliere appunti di diritto amministrativo dettati da due manuali diversi (Clarich e Caringella) e a fonderli in un **manuale unico**. Non interessa distinguere da quale manuale provenga ogni parte: non va chiesto né indicato.

## Organizzazione

- `amministrativo/appunti/`: un file per argomento (`NN-argomento.md`, es. `03-provvedimento-amministrativo.md`), con gli appunti dettati e rielaborati secondo le regole sotto.
- `amministrativo/manuale-unico.md`: **file unico** finale, con indice iniziale e tutti i capitoli in sequenza. Si crea **solo alla fine**, quando richiesto espressamente.

## Flusso di lavoro

1. Ogni dettatura viene subito rielaborata e salvata nel file dell'argomento. Se l'argomento esiste già (ad esempio perché dettato dall'altro manuale), il nuovo dettato si **fonde** con quello esistente: si integra al punto giusto ciò che manca, senza duplicazioni.
2. Dopo ogni dettatura si fa commit e push sul branch di lavoro, perché l'ambiente è temporaneo e ciò che non è caricato va perso.
3. Solo su richiesta finale si redige `amministrativo/manuale-unico.md`, riunendo tutti gli argomenti in ordine, con impaginazione e linguaggio uniformi.

## Regole per la dettatura

- Il dettato non si trascrive alla lettera: si **rielabora** in forma di appunto ordinato, mantenendone tutto il contenuto.
- **Grammatica e sintassi** si correggono sempre dove opportuno (periodi spezzati, ripetizioni, costruzioni tipiche del parlato).
- **Correzioni sostanziali**: se il dettato contiene un errore o un'imprecisione (es. articolo sbagliato, norma abrogata o modificata, nozione inesatta), si corregge, ma solo se si è certi della correzione, e la si segnala con `> **Correzione:** …` indicando brevemente cosa è stato modificato e perché. In caso di dubbio non si corregge: si segnala con `> **Da verificare:** …`.
- Le aggiunte proprie (es. aggiornamenti normativi) si segnalano con `> **Nota di integrazione:** …`.
- Se due dettati sullo stesso argomento sono in contrasto (impostazione, tesi, classificazioni), si riportano entrambe le posizioni con `> **Posizioni diverse:** …`.

## Impaginazione e linguaggio (uniformi in tutti i file)

Ogni file segue sempre lo stesso schema:

```
# NN. Titolo dell'argomento

---

## 1. Titolo del paragrafo

### 1.1 Sottoparagrafo

Testo in prosa, paragrafi brevi.
```

- Titoli: `#` per l'argomento, `##` per i paragrafi numerati (1, 2, 3…), `###` per i sottoparagrafi (1.1, 1.2…). Non oltre il terzo livello.
- Ordine logico di ogni argomento: nozione, fondamento normativo, disciplina, questioni controverse, giurisprudenza.
- Prosa continua, in paragrafi brevi; elenchi puntati solo per enumerazioni vere (requisiti, elementi, tipologie, presupposti).
- **Grassetto** solo alla prima comparsa delle nozioni chiave e degli istituti; *corsivo* per le espressioni latine e straniere.
- Articoli citati sempre nella stessa forma: "art. 21-*octies*, comma 2, L. n. 241/1990"; "art. 34 c.p.a."; "art. 97 Cost.".
- Linguaggio tecnico-giuridico, registro uniforme e impersonale, terminologia costante (stesso istituto, stesso nome in tutti i file; sigle sciolte alla prima occorrenza: "pubblica amministrazione (p.a.)").
- Riquadri, sempre in questa forma: `> **Correzione:**`, `> **Da verificare:**`, `> **Nota di integrazione:**`, `> **Posizioni diverse:**`.
- Dottrina e giurisprudenza: si applicano le regole sulle fonti; i nomi degli autori vanno tra parentesi quadre. Gli articoli di legge si verificano, se possibile, sul testo vigente.
