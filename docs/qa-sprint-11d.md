# QA Sprint 11D - Aplicação Global do UR Art Cards System

## Branch

`sprint-11d-global-art-cards`

Base: `sprint-11c-refino-art-cards`

## Commit

`Refina visual global do site com UR Art Cards System`

## Arquivos alterados

- `app/page.tsx`
- `app/temporada/page.tsx`
- `app/ur-play/page.tsx`
- `app/ranking/page.tsx`
- `app/equipes/page.tsx`
- `app/ur-market/page.tsx`
- `app/eventos/page.tsx`
- `app/midia/page.tsx`
- `app/atletas/page.tsx`
- `app/patrocinadores/page.tsx`
- `app/quadras-parceiras/page.tsx`
- `components/layout/header.tsx`
- `components/season/index.ts`
- `components/season/SeasonPageHero.tsx`
- `components/season/SeasonSection.tsx`
- `components/season/SeasonInfoCard.tsx`
- `components/season/SeasonJourney.tsx`
- `lib/navigation.ts`
- `docs/copy-oficial-site-ur.md`
- `docs/mapa-editorial-imagens-ur.md`
- `docs/qa-sprint-11d.md`

## Páginas atualizadas

- `/temporada`
- `/ur-play`
- `/ranking`
- `/equipes`
- `/ur-market`
- `/eventos`
- `/midia`
- `/atletas`
- `/patrocinadores`
- `/quadras-parceiras`

## Componentes criados/reutilizados

Criados:

- `SeasonPageHero`
- `SeasonSection`
- `SeasonInfoCard`
- `SeasonJourney`

Reutilizados:

- `URArtCard`
- `ProductArtCard`
- `RankingBroadcastPanel`
- `TeamFormationArtCard`
- `TerritoryArtCard`
- `AthleteArtCard`
- `RewardArtCard`
- `URBracketPreview`
- `LegendsArtPanel`

## Validação técnica

- `npm run lint`: aprovado com 0 erros e 4 warnings já existentes/esperados (`no-img-element` em SVGs locais e `no-page-custom-font`).
- `npx tsc --noEmit`: aprovado após o build regenerar `.next/types`.
- `set NODE_OPTIONS=--max-old-space-size=8192; npm run build`: aprovado, 22 rotas estáticas geradas.
- Observação: uma execução de `tsc` antes do build acusou tipos `.next/types` ausentes; o build regenerou os tipos e a repetição passou.

## Rotas para testar

Todas retornaram `200` no servidor local `http://localhost:3017`:

- `/`
- `/temporada`
- `/ur-play`
- `/ranking`
- `/equipes`
- `/ur-market`
- `/eventos`
- `/midia`
- `/atletas`
- `/patrocinadores`
- `/quadras-parceiras`
- `/cadastro`
- `/contato`
- `/regulamento`
- `/privacidade`
- `/termos`
- `/robots.txt`
- `/sitemap.xml`

## Hashes preservados

Todos retornaram `200` e tinham elemento de destino no DOM:

- `/cadastro#atleta`
- `/cadastro#equipe`
- `/cadastro#patrocinador`
- `/cadastro#quadra`
- `/cadastro#comunidade`
- `/#recompensas`
- `/#premiacoes`

## Viewports a testar

Testados com Playwright/Chrome headless nas páginas principais:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Resultado:

- 55 combinações página/viewport testadas.
- Sem overflow horizontal detectado.
- Sem `pageerror`.
- Sem erros de console.

Artefatos:

- `output/playwright/qa-sprint-11d-report.json`
- `output/playwright/qa-sprint-11d-hashes.json`
- `output/playwright/sprint-11d-home-1366x768.png`
- `output/playwright/sprint-11d-home-1920x1080.png`
- `output/playwright/sprint-11d-ur-play-390x844.png`
- `output/playwright/sprint-11d-ranking-1366x768.png`
- `output/playwright/sprint-11d-quadras-390x844.png`
- `output/playwright/sprint-11d-midia-430x932.png`

## Escopo preservado

- CRM: não alterado
- Apps Script: não alterado
- Google Sheets: não alterado
- Supabase/backend: não alterado
- Endpoints: não alterado
- Formulários: não alterado
- Nomes de campos: não alterados
- Hashes de cadastro: preservados
- `node_modules`: não alterado
- Arquivos `.patch`: não adicionados ao commit
- `components/season`: preservado e expandido
- `public/season-1`: preservado
- Home Sprint 11C: preservada, apenas recebeu alias `#premiacoes`

## Observações visuais

- As páginas principais agora usam o mesmo vocabulário visual da Home Temporada 1.
- A navegação mobile foi agrupada em Participar, Competir, Benefícios e Parcerias.
- `/#recompensas` e `/#premiacoes` apontam para a seção de recompensas da Home.
- Sprint 10 não foi aplicada inteira.
- A Home da Sprint 11C foi preservada.
- Páginas que estavam no estilo antigo agora usam `SeasonPageHero`, `SeasonSection`, `SeasonInfoCard`, `SeasonJourney` e componentes do UR Art Cards System.
