# QA Sprint 11H5 - Home Temporada 1 copy oficial

## Branch

- `sprint-11h5-home-temporada-copy-oficial`

## Commit

- `6ae1fcd Aplica copy oficial da Home Temporada 1`

## Arquivos alterados na Sprint 11H5

- `app/page.tsx`
- `lib/navigation.ts`

## Documentacao complementar criada

- `docs/copy-home-temporada-1-polos-em-disputa.md`
- `docs/polos-ur-documento-oficial.md`
- `docs/qa-sprint-11h5-home-temporada-copy-oficial.md`

## Resumo da implementacao validada

- Home reposicionada como `UR Temporada 1 - Polos em Disputa`.
- Hero aplicado com `TEMPORADA 1 UR` e `POLOS EM DISPUTA.`
- UR Play comunicado como porta obrigatoria para atletas e equipes.
- Atletas individuais incluidos como caminho claro para quem ainda nao tem equipe.
- Modalidades oficiais da Home preservadas como `Dupla` e `Quarteto`.
- Polos oficiais comunicados como Belo Horizonte, Betim e Contagem.
- UR Sprint, UR Regional e UR Legends incluidos na narrativa da temporada.
- Ranking dos Atletas, Ranking das Equipes e Ranking dos Polos separados.
- Regra do Legends documentada: pontuacao especial apenas para Ranking dos Polos.
- Regra de seguranca preservada: Ranking dos Atletas e Ranking das Equipes nao recebem multiplicador.
- Recompensas, UR Market e beneficios tratados sem promessa automatica.
- Regulamento e criterios aparecem como seguranca da temporada.

## Validacoes executadas

### Lint

Comando:

`npm.cmd run lint`

Resultado:

- Aprovado.
- Warnings mantidos:
  - fonte customizada em `app/layout.tsx`;
  - uso de `<img>` em `app/page.tsx`.

### TypeScript

Comando:

`npx.cmd tsc --noEmit`

Resultado:

- Aprovado.

### Build

Comando:

`set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`

Resultado:

- Aprovado.
- Next build gerou 22 paginas estaticas.

## QA Playwright

Ambiente:

- Build production local com `npm.cmd run start`.
- Porta local usada no QA: `3036`.

Arquivo de evidencia:

- `output/playwright/home-temporada-copy-oficial-summary.json`

Screenshots:

- `output/playwright/home-temporada-copy-oficial-390x844.png`
- `output/playwright/home-temporada-copy-oficial-menu-390x844.png`

Resultado:

- Aprovado.
- 20 checagens de rota.
- 65 checagens de ancora.
- Sem overflow horizontal.
- Menu mobile abre e fecha.
- Desktop preserva navegacao principal.
- Anchors principais existem e nao ficam escondidas sob o header.

## Rotas testadas

- `/`
- `/ur-play`
- `/cadastro`
- `/regulamento`

## Viewports testados

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

## Anchors testadas

- `/#como-funciona`
- `/#modalidades`
- `/#polos`
- `/#ur-sprint`
- `/#regional`
- `/#rankings`
- `/#ranking-atletas`
- `/#ranking-equipes`
- `/#ranking-polos`
- `/#recompensas`
- `/#ur-market`
- `/#legends`
- `/#regulamento`

## Confirmacoes de escopo

- `next-env.d.ts` ficou limpo e nao foi incluido no commit.
- Arquivos `.patch` nao foram commitados.
- Backend nao alterado.
- Formularios nao alterados.
- Logica de cadastro nao alterada.
- Supabase nao alterado.
- Apps Script nao alterado.
- Google Sheets nao alterado.
- CRM nao alterado.
- Endpoints nao alterados.
- Hashes nao alterados.
- Nomes de campos nao alterados.

## Observacoes

- A documentacao complementar desta etapa nao altera Home, navegacao, componentes, formularios ou integracoes.
- Os documentos oficiais consolidam a copy da Home Temporada 1 e a definicao dos Polos UR para orientar proximas sprints.

## Resolucao de conflitos com main

Conflitos resolvidos:

- `app/page.tsx`
- `lib/navigation.ts`

Decisao aplicada:

- Em `app/page.tsx`, foi preservada a Home oficial da Temporada 1 - Polos em Disputa da branch `sprint-11h5-home-temporada-copy-oficial`.
- A resolucao manteve o hero `TEMPORADA 1 UR / POLOS EM DISPUTA.`, UR Play como porta obrigatoria para atletas e equipes, atletas individuais como participantes possiveis, modalidades `Dupla` e `Quarteto`, polos BH, Betim e Contagem com mesmo peso, UR Sprint por polo, classificacao para Regional, rankings separados, recompensas, UR Market, atividades extras, Legends, diversao competitiva, regulamento e CTA final pelo UR Play.
- O trecho de niveis foi alinhado ao criterio oficial do PR: `N1 - Elite`, `N2 - Avancado` e `N3 - Desenvolvimento`.
- Em `lib/navigation.ts`, foi preservada a navegacao da branch com desktop em `Comecar`, `UR Play`, `Temporada`, `Polos`, `Ranking`, `Legends`, `Regulamento` e `Cadastro`.
- No mobile, foram preservados os grupos `Comecar`, `Temporada`, `Ranking`, `Beneficios` e `Apoio`, com anchors da Home mantidas.

Validacoes apos resolucao:

- `git grep -n "^<<<<<<<\|^=======$\|^>>>>>>>"`: sem marcadores de conflito.
- `npm.cmd run lint`: aprovado, mantendo apenas warnings existentes.
- `npx.cmd tsc --noEmit`: aprovado.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: aprovado.
- QA minimo Playwright executado nas rotas `/`, `/ur-play`, `/cadastro`, `/ranking`, `/regulamento` e `/ecossistema`.
- Viewports testados: `390x844`, `430x932`, `768x1024`, `1366x768` e `1920x1080`.
- Resultado do QA minimo: aprovado com 30 checagens.
- Evidencia: `output/playwright/merge-11h5-home-temporada-summary.json`.
- Screenshots: `output/playwright/merge-11h5-home-390x844.png` e `output/playwright/merge-11h5-menu-390x844.png`.
- Critérios confirmados no QA: Home abre no topo, sem overflow horizontal, menu mobile abre e fecha, desktop mantem nav, Hero `TEMPORADA 1 UR / POLOS EM DISPUTA.`, UR Play como porta obrigatoria, atletas individuais incluidos, BH/Betim/Contagem presentes, niveis `N1 - Elite`, `N2 - Avancado` e `N3 - Desenvolvimento`, rankings separados, Legends pontuando especialmente apenas Ranking dos Polos e recompensas sem promessa garantida.

Confirmacao de escopo:

- Backend nao alterado.
- Formularios nao alterados.
- Supabase, Apps Script, Sheets, CRM, endpoints, hashes e nomes de campos nao alterados.
- `next-env.d.ts` nao foi incluido no commit.
- Arquivos `.patch` nao foram incluidos no commit.

## Polish posterior recomendado

A Sprint 11J (`sprint-11j-home-order-anchor-ecosystem-polish`) corrigiu a ordem real da Home Temporada 1, revisou as ancoras do menu mobile, reposicionou o Ecossistema UR logo apos o UR Play e compactou blocos longos para reduzir a extensao mobile sem reescrever a copy oficial.

Decisoes preservadas:

- Hero oficial `TEMPORADA 1 UR / POLOS EM DISPUTA.` como primeiro bloco.
- UR Play como porta obrigatoria para atletas e equipes.
- Atletas individuais incluidos na entrada da temporada.
- Modalidades oficiais `Dupla` e `Quarteto`.
- Polos BH, Betim e Contagem com mesmo peso.
- Niveis `N1 - Elite`, `N2 - Avancado` e `N3 - Desenvolvimento`.
- Ranking dos Atletas, Ranking das Equipes e Ranking dos Polos separados.
- Legends pontuando especialmente apenas o Ranking dos Polos.
- Recompensas e UR Market como consequencia da jornada, sem promessa garantida.

Arquivos de referencia:

- `docs/qa-sprint-11j-home-order-anchor-ecosystem-polish.md`
- `output/playwright/sprint-11j-home-order-anchor-ecosystem-polish-summary.json`
