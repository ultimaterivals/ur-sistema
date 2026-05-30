# QA Sprint 11L — Separação de campanha e heroes por página

Branch: `sprint-11l-separate-season-campaign-page-heroes`

## Objetivo validado

A campanha `Temporada 1 — Polos em Disputa` ficou restrita à Home e à página `/temporada`. As páginas internas passaram a abrir com hero próprio, focado na função de cada área do ecossistema, sem repetir o hero completo da Home.

## Arquivos alterados

- `app/page.tsx`: preservado sem alteração estrutural nesta sprint.
- `app/layout.tsx`: metadata global atualizada para `Temporada 1 — Polos em Disputa`.
- `app/temporada/page.tsx`: hero ajustado para campanha oficial e id de polos ajustado para `#polos`.
- `app/ur-play/page.tsx`
- `app/ecossistema/page.tsx`
- `app/ranking/page.tsx`
- `app/regulamento/page.tsx`
- `app/cadastro/page.tsx`
- `app/eventos/page.tsx`
- `app/ur-market/page.tsx`
- `app/atletas/page.tsx`
- `app/equipes/page.tsx`
- `app/midia/page.tsx`
- `app/ct-ur/page.tsx`
- `app/patrocinadores/page.tsx`
- `app/quadras-parceiras/page.tsx`
- `lib/navigation.ts`
- `lib/content/season1.ts`
- `docs/audit-page-heroes-sprint-11l.md`
- `docs/qa-sprint-11l-separate-season-campaign-page-heroes.md`

## Auditoria

Relatório criado antes das alterações:

- `docs/audit-page-heroes-sprint-11l.md`

Principais achados:

- A Home 11K já renderizava o Hero como primeiro bloco.
- O problema principal estava na navegação global usando muitas âncoras `/#...`.
- Várias páginas internas usavam copy genérica de temporada no hero.
- `RouteScrollManager` já força topo em rotas sem hash; a correção necessária era reduzir links globais com hash indevido.

## Heroes específicos aplicados

- `/ur-play`: `COMECE JOGANDO. EVOLUA COM CRITÉRIO.`
- `/ecossistema`: `O ESPORTE AMADOR PRECISA DE CAMINHO.`
- `/ranking`: `SUA EVOLUÇÃO VIRA HISTÓRICO.`
- `/regulamento`: `REGRAS CLARAS PARA JOGAR MELHOR.`
- `/cadastro`: `ESCOLHA COMO VOCÊ QUER COMEÇAR.`
- `/eventos`: `A TEMPORADA ACONTECE EM JOGOS, ETAPAS E HISTÓRIAS.`
- `/ur-market`: `BENEFÍCIOS COMO CONSEQUÊNCIA DA JORNADA.`
- `/atletas`: `TODO ATLETA TEM UM CAMINHO PARA EVOLUIR.`
- `/equipes`: `SUA EQUIPE PODE CONSTRUIR UMA CAMPANHA.`
- `/midia`: `A JORNADA DO ATLETA TAMBÉM PRECISA SER CONTADA.`
- `/ct-ur`: `TREINO PARA EVOLUIR COM DIREÇÃO.`
- `/patrocinadores`: `SUA MARCA ENTRA NA JORNADA DO ATLETA.`
- `/quadras-parceiras`: `SUA QUADRA PODE VIRAR BASE DE UMA COMUNIDADE.`

## Navegação

Menu principal atualizado para priorizar páginas:

- `Começar` → `/`
- `UR Play` → `/ur-play`
- `Temporada` → `/temporada`
- `Ecossistema` → `/ecossistema`
- `Ranking` → `/ranking`
- `Regulamento` → `/regulamento`
- `Cadastro` → `/cadastro`

Menu mobile atualizado:

- Começar: Home, UR Play, Cadastro
- Temporada: Temporada 1, Eventos, Polos, Legends
- Ecossistema: Visão geral, Atletas, Equipes, Quadras
- Ranking: Ranking, Regulamento
- Benefícios: UR Market, Patrocinadores

## Rotas testadas

- `/`
- `/temporada`
- `/ur-play`
- `/ecossistema`
- `/ranking`
- `/regulamento`
- `/cadastro`
- `/eventos`
- `/ur-market`
- `/atletas`
- `/equipes`
- `/midia`
- `/ct-ur`
- `/patrocinadores`
- `/quadras-parceiras`

## Viewports testados

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

## QA Playwright

Executado em production build via `next start -p 3050`.

Checks aprovados:

- Cada rota sem hash abriu no topo.
- Home abriu com `POLOS EM DISPUTA`.
- `/temporada` abriu com campanha `Polos em Disputa`.
- Páginas internas abriram com hero próprio.
- Nenhuma página interna repetiu `Polos em Disputa` como H1.
- Sem overflow horizontal nas rotas testadas.
- Sem erros de console ou `pageerror`.
- Menu mobile abriu e fechou em `/`, `/temporada`, `/ur-play`, `/ranking` e `/cadastro`.
- Desktop exibiu nav e CTAs em `1366x768` e `1920x1080`.
- Link mobile `UR Play` navegou para `/ur-play`.
- Link mobile `Polos` navegou para `/temporada#polos`.
- Footer apareceu depois do CTA final da Home.

Resultados Playwright:

- Bloco 1: `/`, `/temporada`, `/ur-play`, `/ecossistema`, `/ranking` — aprovado em 5 viewports.
- Bloco 2: `/regulamento`, `/cadastro`, `/eventos`, `/ur-market`, `/atletas` — aprovado em 5 viewports.
- Bloco 3: `/equipes`, `/midia`, `/ct-ur`, `/patrocinadores`, `/quadras-parceiras` — aprovado em 5 viewports.
- Menu/âncoras: aprovado em mobile/tablet e desktop.

## Validações técnicas

- `npm.cmd run lint`: aprovado com 1 warning existente de fonte customizada em `app/layout.tsx`.
- `npx.cmd tsc --noEmit`: aprovado.
- `$env:NODE_OPTIONS='--max-old-space-size=8192'; npm.cmd run build`: aprovado.

## Escopo preservado

- Backend não alterado.
- Formulários não alterados.
- Supabase não alterado.
- Apps Script não alterado.
- Sheets não alterado.
- CRM não alterado.
- Endpoints não alterados.
- Hashes de formulário preservados.
- Nomes de campos preservados.
- `next-env.d.ts` não alterado.
- Arquivos `.patch` não adicionados.
- `package.json` não alterado.
