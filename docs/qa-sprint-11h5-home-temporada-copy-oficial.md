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
