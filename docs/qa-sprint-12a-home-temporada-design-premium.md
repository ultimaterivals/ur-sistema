# QA Sprint 12A — Home Temporada 1 com design premium

## Branch

`sprint-12a-home-temporada-design-premium`

## Referência visual

O arquivo solicitado `horizons-export-ultimate-rivals-home-copy-aplicada-com-abridor.zip` não foi localizado no workspace nem em Downloads.

Foi usado como referência visual o export mais próximo encontrado:

`C:\Users\Usuário\Downloads\horizons-export-ultimate-rivals-home-copy-aplicada.zip`

O export Horizons foi usado apenas como benchmark visual. O projeto oficial continuou em Next.js e nenhum código Vite foi importado.

## Arquivos alterados

- `app/page.tsx`
- `app/eventos/page.tsx`
- `app/temporada/page.tsx`
- `docs/audit-horizons-reference-sprint-12a.md`
- `docs/qa-sprint-12a-home-temporada-design-premium.md`

## Decisões aplicadas

- A Home foi redesenhada com direção mobile-first, visual preto/dourado, cards grandes, glow moderado, textura, ritmo de temporada e estética gamificada controlada.
- A Home mantém a campanha `Temporada 1 Ultimate Rivals — Polos em Disputa`.
- A jornada oficial foi ajustada para `UR Play → UR Sprint → UR Series → UR Legends`.
- `Regional` foi removido do site em `app`, `components` e `lib`.
- `/eventos` e `/temporada` receberam ajustes mínimos de termo oficial para trocar `Regional` por `UR Series`.
- Não houve importação do projeto Horizons, troca de stack, alteração de dependências ou migração para Vite.

## Conteúdo validado na Home

- Hero com `TEMPORADA 1 ULTIMATE RIVALS / POLOS EM DISPUTA`.
- UR Play aparece como entrada obrigatória.
- Atletas sem equipe aparecem claramente na copy.
- Belo Horizonte, Betim e Contagem aparecem com mesmo peso.
- Modalidades oficiais: Dupla e Quarteto.
- Uniformes por polo aparecem como identidade e pertencimento.
- Níveis aparecem como `N1 — Elite`, `N2 — Avançado` e `N3 — Desenvolvimento`.
- Ranking do Atleta, Ranking da Equipe e Ranking dos Polos aparecem separados.
- UR Legends informa que a pontuação especial vale apenas para o Ranking dos Polos.
- Benefícios não são apresentados como garantidos.

## Validações técnicas

### Lint

Comando:

`npm.cmd run lint`

Resultado: aprovado.

Observação: permaneceu 1 warning já existente em `app/layout.tsx` sobre fonte customizada (`@next/next/no-page-custom-font`). Não foi alterado nesta sprint.

### TypeScript

Comando:

`npx.cmd tsc --noEmit`

Resultado: aprovado.

### Build

Comando:

`set NODE_OPTIONS=--max-old-space-size=8192`

`npm.cmd run build`

Resultado: aprovado.

## QA Playwright

Servidor usado:

`http://127.0.0.1:3052`

Rotas testadas:

- `/`
- `/ur-play`
- `/temporada`
- `/ranking`
- `/regulamento`
- `/cadastro`
- `/ecossistema`

Viewports testados:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Resultado:

- Todas as rotas sem hash abriram no topo.
- Todas as rotas ficaram sem overflow horizontal.
- Nenhuma rota testada exibiu `Regional`.
- Home abriu com `Polos em disputa.` como primeiro heading.
- A ordem interna da Home foi validada.
- Cada título principal da Home apareceu uma vez.
- Menu mobile abriu, fechou e navegou para `/ur-play`.
- Console Playwright: 0 erros.

## Prints mobile

- `output/playwright/sprint-12a-home-390.png`
- `output/playwright/sprint-12a-home-430.png`

Os prints foram gerados como artefatos locais de QA e não foram adicionados ao commit.

## Confirmação de escopo preservado

- Backend não foi alterado.
- Formulários não foram alterados.
- Supabase não foi alterado.
- Apps Script não foi alterado.
- Google Sheets não foi alterado.
- CRM não foi alterado.
- Endpoints não foram alterados.
- Hashes de formulário não foram alterados.
- Nomes de campos não foram alterados.
- Lógica de cadastro não foi alterada.
- `next-env.d.ts` não foi alterado.
- `package.json` não foi alterado.
- Arquivos `.patch` não foram adicionados ao commit.
