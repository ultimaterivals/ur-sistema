# QA Sprint 11K - Auditoria estrutural e compactacao da Home UR

## Branch

- `sprint-11k-home-structure-audit-mobile-conversion`

## Arquivos alterados

- `app/page.tsx`
- `lib/navigation.ts`
- `docs/audit-home-structure-sprint-11k.md`
- `docs/qa-sprint-11k-home-structure-audit-mobile-conversion.md`
- `docs/qa-sprint-11j-home-order-anchor-ecosystem-polish.md`

## Auditoria previa

- Relatorio criado antes da compactacao: `docs/audit-home-structure-sprint-11k.md`.
- A auditoria confirmou que nao havia Hero duplicado nem CTA final duplicado.
- O problema real era estrutural: a Home tinha 15 secoes principais dentro de `app/page.tsx`, mais o Footer global.
- A auditoria identificou repeticao conceitual entre `polos` e `territorios`, entre `ur-sprint` e `regional`, e entre `beneficios` e `regulamento`.

## O que foi duplicado ou repetitivo

- `polos` e `territorios` explicavam a mesma area da jornada em dois blocos consecutivos.
- `ur-sprint` e `regional` funcionavam como paginas internas abertas dentro da Home.
- `beneficios` e `regulamento` apareciam como blocos separados, criando peso operacional demais.
- A ideia de entrada pelo UR Play aparecia em Hero, UR Play e CTA final com muito texto.

## O que foi removido ou compactado

- Home reduzida de 15 secoes principais para 12 blocos principais.
- `polos` e `territorios` foram unidos em uma unica secao de polos.
- `ur-sprint` e `regional` foram compactados em `Jornada da Temporada`.
- `beneficios`, `recompensas`, `ur-market`, `premiacoes` e `regulamento` foram reunidos em `Beneficios com regra e criterio`.
- Textos longos de Regional, Legends, beneficios e regulamento foram reduzidos a cards e microcopy.
- O card de `Diversao competitiva` deixou de ser bloco aberto na Home.

## O que foi movido conceitualmente para paginas internas

- Detalhes de pontuacao e desempate: `/ranking` e `/regulamento`.
- Regras completas de ranking: `/ranking`.
- Exemplos completos de recompensas: `/ur-market`.
- Documento oficial dos polos: docs oficiais e `/quadras-parceiras`.
- Regulamento detalhado: `/regulamento`.
- UR Market completo: `/ur-market`.
- Etapas completas da temporada: `/temporada` e `/eventos`.

## Estrutura final da Home

1. `hero` - Hero
2. `ur-play` - UR Play
3. `ecossistema` - Ecossistema UR
4. `participacao` - Como participar
5. `modalidades` - Modalidades
6. `polos` - Polos
7. `jornada` - Jornada da Temporada
8. `niveis` - Niveis
9. `rankings` - Ranking
10. `legends` - Legends
11. `beneficios` - Beneficios e Regulamento
12. `comecar` - CTA final

Aliases preservados sem criar novas secoes:

- `territorios`
- `ur-sprint`
- `regional`
- `ranking-atletas`
- `ranking-equipes`
- `ranking-polos`
- `recompensas`
- `ur-market`
- `premiacoes`
- `regulamento`

## Navegacao

- `Temporada` passou a apontar para `/#jornada`.
- `UR Sprint` e `Regional` no menu mobile apontam para `/#jornada`.
- `Regulamento` aponta para o alias `/#regulamento` dentro do bloco de beneficios e criterios.
- `Recompensas` e `UR Market` apontam para `/#beneficios`.
- `Comecar` continua apontando para `/`, evitando scroll inicial indesejado.

## Validações técnicas

- `git grep -n "^<<<<<<<\|^=======$\|^>>>>>>>"`: sem marcadores de conflito.
- `git diff --check`: aprovado.
- Checagem local de ids: nenhum id duplicado encontrado em `app/page.tsx`.
- `npm.cmd run lint`: aprovado com 1 warning existente em `app/layout.tsx` sobre fonte customizada.
- `npx.cmd tsc --noEmit`: aprovado.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: aprovado.

## QA Playwright

- Ambiente: `next start` em build de producao, `http://127.0.0.1:3044`.
- Evidencia: `output/playwright/sprint-11k-home-structure-summary.json`.
- Screenshots:
  - `output/playwright/sprint-11k-home-390x844.png`
  - `output/playwright/sprint-11k-menu-390x844.png`

Rotas testadas:

- `/`
- `/ur-play`
- `/ecossistema`
- `/ranking`
- `/regulamento`
- `/cadastro`

Viewports testados:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Resultado:

- Home checks: `5`.
- Route checks: `30`.
- Anchor checks mobile: `27`.
- Console errors: `0`.

## Checks obrigatorios confirmados

- `/` abre no Hero.
- Primeiro bloco visivel da Home e o Hero.
- Ordem textual validada:
  - `POLOS EM DISPUTA`
  - `A TEMPORADA COMECA NO UR PLAY`
  - `O UR E MAIS QUE UM TORNEIO`
  - `ENTRE COMO ATLETA, EQUIPE OU POLO`
  - `DUAS FORMAS DE COMECAR`
  - `POLOS: SUA COMUNIDADE NA TEMPORADA`
  - `DA ENTRADA AO ESPETACULO`
  - `NIVEIS PARA JOGOS MAIS JUSTOS`
  - `TRES RANKINGS`
  - `UR LEGENDS`
  - `BENEFICIOS COM REGRA E CRITERIO`
  - `COMECE PELO UR PLAY`
- Cada titulo principal aparece apenas uma vez.
- Sem Hero duplicado.
- Sem CTA final duplicado.
- Footer aparece depois do CTA final.
- Menu mobile abre e fecha.
- Links do menu ancoram corretamente.
- Sem overflow horizontal.
- Sem erro de console.

## Confirmacao de escopo preservado

- Backend nao alterado.
- Formularios nao alterados.
- Logica de cadastro nao alterada.
- Supabase nao alterado.
- Apps Script nao alterado.
- Google Sheets nao alterado.
- CRM nao alterado.
- Endpoints nao alterados.
- Hashes de formulario nao alterados.
- Nomes de campos nao alterados.
- Integracoes nao alteradas.
- `next-env.d.ts` nao foi alterado.
- Arquivos `.patch` nao foram commitados.

## Resolucao de conflitos com main

Conflitos resolvidos nesta etapa:

- `app/page.tsx`
- `lib/navigation.ts`
- `docs/qa-sprint-11j-home-order-anchor-ecosystem-polish.md`

Decisao aplicada:

- Em `app/page.tsx`, foi preservada a versao da Sprint 11K com 12 blocos principais.
- Em `lib/navigation.ts`, foi preservada a navegacao da Sprint 11K, apontando `Temporada`, `UR Sprint` e `Regional` para `/#jornada`, e mantendo beneficios/regulamento na estrutura compactada.
- Em `docs/qa-sprint-11j-home-order-anchor-ecosystem-polish.md`, foi preservado o historico da 11J com a observacao posterior da Sprint 11K.
- A resolucao nao restaurou a Home longa da 11J, nao separou novamente `Polos + Tres polos`, nao separou `UR Sprint + Regional` e nao reabriu `Recompensas`, `UR Market` e `Regulamento` como secoes extensas.

Validacoes executadas apos esta resolucao:

- `git grep -n "^<<<<<<<\|^=======$\|^>>>>>>>"`: sem marcadores de conflito.
- `npm.cmd run lint`: aprovado com 1 warning existente em `app/layout.tsx` sobre fonte customizada.
- `npx.cmd tsc --noEmit`: aprovado.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: aprovado.
- QA Playwright em production build: aprovado.

Resultado do QA Playwright apos merge:

- Ambiente: `next start` em build de producao, `http://127.0.0.1:3045`.
- Rotas: `/`, `/ur-play`, `/ecossistema`, `/ranking`, `/regulamento`, `/cadastro`.
- Viewports: `390x844`, `430x932`, `768x1024`, `1366x768`, `1920x1080`.
- Home checks: `5`.
- Route checks: `30`.
- Anchor checks mobile: `27`.
- Console errors: `0`.
- Evidencia: `output/playwright/sprint-11k-merge-main-summary.json`.
- Screenshots:
  - `output/playwright/sprint-11k-merge-home-390x844.png`
  - `output/playwright/sprint-11k-merge-menu-390x844.png`
