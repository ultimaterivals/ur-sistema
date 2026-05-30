# Auditoria estrutural da Home - Sprint 11K

## Escopo auditado

- `app/page.tsx`
- `app/layout.tsx`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/layout/route-scroll-manager.tsx`
- `components/ui/button.tsx`
- `components/editorial/editorial-image.tsx`
- `lib/navigation.ts`
- `lib/content/season1.ts`
- `lib/content/site-images.ts`

## Ordem real renderizada antes da compactacao

| Ordem | Secao | ID | Componente | Funcao | Decisao |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero | `hero` | `<section>` + `EditorialImage` + `Button` | Apresentar `TEMPORADA 1 UR / POLOS EM DISPUTA.` | Manter e compactar texto de apoio |
| 2 | UR Play | `ur-play` | `S`, `SectionHeading`, `InfoCard`, `ImpactLine` | Explicar porta de entrada obrigatoria | Manter e reduzir repeticao |
| 3 | Ecossistema UR | `ecossistema` | `S`, `SectionHeading`, `InfoCard`, `Button` | Explicar que o UR e mais que torneio | Manter |
| 4 | Como participar | `participacao` | `S`, `SectionHeading`, `InfoCard` | Atleta individual, equipe e polo | Manter e encurtar textos |
| 5 | Modalidades | `modalidades` | `S`, `SectionHeading`, cards com `season1.modalities` | Exibir Dupla e Quarteto | Manter e compactar |
| 6 | Polos UR | `polos` | `S`, `SectionHeading`, `ImpactLine` | Explicar polos como comunidade | Unir com `territorios` |
| 7 | Tres polos | `territorios` | `S`, `SectionHeading`, cards com `season1.poles` | Exibir BH, Betim e Contagem | Unir com `polos` |
| 8 | UR Sprint | `ur-sprint` | `S`, `SectionHeading`, `InfoCard` | Primeira disputa do polo | Compactar dentro de Jornada da Temporada |
| 9 | Niveis | `niveis` | `S`, `SectionHeading`, `InfoCard` | N1, N2 e N3 | Manter e encurtar textos |
| 10 | Regional | `regional` | `S`, `SectionHeading`, `InfoCard` | Caminho competitivo | Compactar dentro de Jornada da Temporada |
| 11 | Rankings | `rankings` | `S`, `SectionHeading`, `InfoCard`, `ImpactLine` | Rankings de atleta, equipe e polo | Manter e encurtar |
| 12 | Legends | `legends` | `S`, `SectionHeading`, `InfoCard`, `ImpactLine` | Espetaculo dos polos e regra de multiplicador | Manter e compactar |
| 13 | Beneficios | `beneficios` | `S`, aliases `recompensas`, `ur-market`, `premiacoes`, `InfoCard` | Recompensas e Market | Unir com Regulamento |
| 14 | Regulamento | `regulamento` | `S`, `SectionHeading`, `InfoCard`, `Button` | Regras claras | Unir com Beneficios |
| 15 | Como comecar | `comecar` | `S`, `SectionHeading`, `InfoCard`, `ImpactLine`, `Button` | CTA final pelo UR Play | Manter e compactar |
| 16 | Footer | sem id | `Footer` em `app/layout.tsx` | Rodape global | Manter apenas depois do CTA final |

## Respostas da auditoria

1. **Quais componentes/secoes sao renderizados na Home, na ordem real?**  
   A Home renderiza 15 secoes principais dentro de `app/page.tsx`, seguidas pelo `Footer` global no `app/layout.tsx`. A ordem atual e: Hero, UR Play, Ecossistema, Participacao, Modalidades, Polos, Territorios, UR Sprint, Niveis, Regional, Rankings, Legends, Beneficios, Regulamento, Comecar, Footer.

2. **Existe Hero duplicado?**  
   Nao. Existe apenas um `<h1>` e um bloco `id="hero"`. A expressao `Polos em Disputa` tambem aparece no footer como link, mas nao como Hero duplicado.

3. **Existe "Como comecar" duplicado?**  
   Nao ha secao duplicada, mas a ideia de entrada pelo UR Play aparece no Hero, UR Play e CTA final. A recomendacao e manter a mensagem no Hero e no CTA final, e reduzir repeticao intermediaria.

4. **Existe conteudo de abas sendo renderizado como secao aberta?**  
   Nao ha componente de tabs na Home atual. A sensacao de abas abertas vem da sequencia de secoes completas com funcao parecida.

5. **Existem arrays de conteudo repetidos em mais de um bloco?**  
   Sim, por conceito. `season1.poles` aparece nos cards de territorios enquanto o bloco anterior de polos tambem fala dos mesmos polos. `urPlayCards`, `participationCards` e `startCards` repetem a ideia de entrada pelo UR Play. `benefitCards` e `regulationCards` aparecem separados, embora possam virar um unico bloco de decisao/criterio.

6. **Existem versoes mobile e desktop renderizadas simultaneamente sem hidden correto?**  
   Nao foi encontrado problema estrutural. O header usa `hidden lg:flex` para desktop e `lg:hidden` para mobile. O footer usa `lg:hidden` para accordions e `hidden lg:grid` para desktop. No Hero ha um painel lateral desktop com `hidden lg:block`, correto.

7. **Existem cards de polos aparecendo em mais de uma secao?**  
   Os cards visuais dos polos aparecem apenas em `territorios`, mas o conteudo de polos aparece em duas secoes consecutivas: `polos` e `territorios`. Deve virar uma unica secao.

8. **Existem cards de modalidades aparecendo em mais de uma secao?**  
   Nao. Os cards de Dupla e Quarteto aparecem apenas em `modalidades`.

9. **Existem blocos antigos da Sprint 11H/11I ainda presentes?**  
   Nao ha blocos antigos completos como `Escolha seu primeiro passo no UR` ou `Quem manda na regiao`. Ainda ha excesso herdado do documento oficial 11I, principalmente em blocos separados para Sprint, Regional, Beneficios e Regulamento.

10. **Existe conteudo da pagina `/temporada` sendo reaproveitado dentro da Home de forma excessiva?**  
    Sim, conceitualmente. A Home explica UR Sprint, Regional, Rankings, Legends, Beneficios e Regulamento em secoes separadas. Isso se aproxima de uma pagina operacional de temporada e deve ser compactado em jornada/resumo, deixando detalhes para paginas internas.

11. **Existe conteudo de regulamento, ranking, beneficios ou market longo demais para Home?**  
    Sim. Ranking ainda tem metadados detalhados, Beneficios tem tres publicos e Regulamento vem como secao propria. Eles devem virar blocos curtos de orientacao e levar detalhes para paginas internas.

12. **Existe anchor/hash causando scroll ou repeticao?**  
    `RouteScrollManager` so rola para o topo quando nao ha hash. Links com hash sao acionados pelo usuario. Nao ha `scrollIntoView` automatico no carregamento inicial. O menu mobile aponta para ids existentes.

13. **O footer aparece apenas no final?**  
    Sim. O `Footer` e renderizado pelo `app/layout.tsx` depois de `{children}` e, portanto, depois da Home.

14. **O menu mobile aponta para ids unicos?**  
    Sim, na versao auditada os links apontam para ids existentes ou paginas internas. Alguns links distintos apontam para a mesma secao (`Recompensas` e `UR Market` para `#beneficios`), o que e aceitavel, mas pode ser simplificado.

15. **Ha ids duplicados no DOM?**  
    Na Home auditada, nao foram encontrados ids duplicados. Existem aliases unicos dentro de `beneficios`: `recompensas`, `ur-market` e `premiacoes`.

## Diagnostico principal

A Home nao esta tecnicamente duplicando Hero ou CTA final. O problema real e estrutural: muitos blocos completos explicam partes da mesma jornada. No mobile, isso cria a percepcao de que as abas estao abertas em sequencia e transforma a Home em documento operacional.

## Decisao de arquitetura para a compactacao

A Home deve ser reduzida para 12 blocos principais:

1. Hero
2. UR Play
3. Ecossistema UR
4. Como participar
5. Modalidades
6. Polos
7. Jornada da Temporada
8. Niveis
9. Ranking
10. Legends
11. Beneficios e Regulamento
12. CTA final

## Conteudos a mover conceitualmente para paginas internas

- Detalhes de pontuacao e desempate: `/ranking` e `/regulamento`.
- Regras completas de ranking: `/ranking`.
- Exemplos completos de recompensas: `/ur-market`.
- Documento oficial dos polos: docs oficiais e `/quadras-parceiras`.
- Regulamento detalhado: `/regulamento`.
- UR Market completo: `/ur-market`.
- Etapas completas da temporada: `/temporada` e `/eventos`.
