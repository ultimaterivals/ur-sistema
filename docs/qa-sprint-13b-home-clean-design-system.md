# QA — Sprint 13B — Home limpa com Design System Ultimate Rivals

## Branch

`sprint-13b-home-clean-design-system`

## Objetivo

Recriar apenas a Home do site Ultimate Rivals como vitrine principal da Temporada 1 — Polos em Disputa, usando o Design System Oficial criado na Sprint 13A.

## Referências utilizadas

- `design-system/MASTER.md`
- `design-system/pages/home.md`
- `docs/references/horizons-base-visual/base-visual-aprovada.md`

## Arquivos alterados

- `app/page.tsx`
- `docs/qa-sprint-13b-home-clean-design-system.md`

## Escopo preservado

- Páginas internas não foram recriadas.
- Backend não alterado.
- Formulários não alterados.
- Supabase não alterado.
- Apps Script não alterado.
- Sheets não alterado.
- CRM não alterado.
- Endpoints não alterados.
- Hashes não alterados.
- Nomes de campos não alterados.
- Lógica de cadastro não alterada.
- `next-env.d.ts` não alterado.
- `package.json` não alterado.
- `package-lock.json` não alterado.
- Arquivos `.patch` não commitados.

## Home criada

A nova Home foi organizada como vitrine mobile-first da Temporada 1, com as seguintes seções:

1. Hero — `TEMPORADA 1 ULTIMATE RIVALS / POLOS EM DISPUTA`
2. Como funciona
3. Ecossistema
4. UR Play
5. Modalidades
6. Polos
7. Ranking resumido
8. Equipes e Duplas
9. UR Market resumido
10. Mídia
11. Metodologia Hunter
12. UR Legends
13. Regulamento
14. CTA final

## Decisões de UI

- Visual preto/grafite com dourado como destaque.
- Cards premium com borda, glow moderado e textura.
- Hero com imagem de arena/quadra de areia e copy curta.
- Seções compactas para evitar aparência de manual.
- Ranking, UR Market, Mídia e Metodologia Hunter aparecem apenas como chamadas resumidas.
- Polos Belo Horizonte, Betim e Contagem aparecem com mesmo peso visual.
- Mídia e Blog são diferenciados na copy: Mídia mostra e narra; Blog aprofunda e trabalha SEO.
- Metodologia Hunter é apresentada como desenvolvimento e mentalidade, não como olheiro.

## Validações técnicas

### `npm.cmd run lint`

Resultado: aprovado.

Observação: permanece 1 warning já existente em `app/layout.tsx` sobre fonte customizada (`@next/next/no-page-custom-font`). A Sprint 13B não alterou esse arquivo.

### `npx.cmd tsc --noEmit`

Resultado: aprovado.

### `npm.cmd run build`

Resultado: aprovado.

## QA Playwright

Servidor usado:

`http://127.0.0.1:3053`

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

Checks executados:

- Home abre no topo.
- Hero mostra `POLOS EM DISPUTA`.
- UR Play aparece cedo.
- Dupla e Quarteto aparecem.
- Polos Belo Horizonte, Betim e Contagem aparecem com mesmo peso na Home.
- Ranking aparece resumido.
- UR Market aparece como vitrine.
- Mídia aparece separada de Blog.
- Metodologia Hunter não aparece como olheiro.
- UR Legends aparece como evento aspiracional.
- Não existe `Regional` visível na Home e nas rotas testadas.
- Não existe promessa de dinheiro, prêmio garantido ou benefício garantido na Home.
- Sem overflow horizontal nos viewports testados.
- Menu mobile abre e fecha.
- Console Playwright: 0 erros.

## Observações finais

A Sprint 13B alterou somente a Home e a documentação de QA. As páginas internas foram usadas apenas para checagem de rota/topo/overflow, sem recriação de conteúdo ou layout.
