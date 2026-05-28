# QA Sprint 11F — Mobile Experience, Hierarquia Visual e Reorganização de Benefícios

## Branch

- `sprint-11f-mobile-experience-polish`

## Arquivos Alterados

- `app/page.tsx`
- `app/ur-market/page.tsx`
- `components/layout/footer.tsx`
- `components/season/ProductArtCard.tsx`
- `components/season/RankingBroadcastPanel.tsx`
- `components/season/RewardArtCard.tsx`
- `components/season/SeasonBenefitGrid.tsx`
- `components/season/SeasonInfoCard.tsx`
- `components/season/SeasonJourney.tsx`
- `components/season/SeasonPageHero.tsx`
- `components/season/SeasonSection.tsx`
- `components/season/TeamFormationArtCard.tsx`
- `components/season/URBracketPreview.tsx`
- `lib/navigation.ts`

## Decisões de Hierarquia Mobile

- A navegação foi reorganizada para priorizar a jornada esportiva: Temporada, UR Play, Ranking, Eventos, Atletas, Equipes e Mídia antes de UR Market.
- O menu mobile foi mantido funcional e passou a usar grupos com progressão mais clara: Participar, Competir, Evoluir, Benefícios, Negócios e Comunidade.
- Cards de jornada e grids com muitos itens passaram a usar scroll horizontal com snap no mobile, reduzindo a sensação de documento longo sem remover conteúdo.
- Heros e seções compartilhadas receberam mais presença visual no mobile: títulos maiores, texto com melhor respiro, painéis compactos e CTAs fáceis de tocar.
- A Home manteve a Temporada 1 como página principal e ganhou painel compacto de resumo no mobile.
- O footer mobile passou a usar grupos compactos em accordion nativo, evitando uma lista longa solta.

## Benefícios e Premiações

- Benefícios, UR Coins, recompensas e UR Market foram reposicionados como consequência da temporada, não como entrada principal.
- A página `/ur-market` passou a chamar primeiro para `Entrar na temporada` e `Conhecer UR Play`.
- A linguagem continua segura: benefícios dependem de regra oficial, disponibilidade, validação, parceiros e operação sustentável.
- Links de `/#recompensas` e alias `/#premiacoes` foram preservados na Home.

## Rotas Testadas

- `/`
- `/temporada`
- `/ur-play`
- `/ranking`
- `/cadastro`
- `/atletas`
- `/equipes`
- `/eventos`
- `/midia`
- `/patrocinadores`
- `/quadras-parceiras`
- `/ur-market`
- `/ct-ur`
- `/ecossistema`

## Viewports Testados

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

## Playwright

- Servidor local: `npm.cmd run start -- -p 3026`
- Evidência: `output/playwright/sprint-11f-playwright-summary.json`
- Screenshots gerados:
  - `output/playwright/sprint-11f-home-390x844.png`
  - `output/playwright/sprint-11f-home-768x1024.png`
  - `output/playwright/sprint-11f-home-1366x768.png`

Resultados:

- Sem overflow horizontal nas rotas obrigatórias.
- Menu mobile abre e fecha nos viewports mobile/tablet.
- Links do menu mobile navegam corretamente para `/ur-play`.
- `elementFromPoint` no centro do botão mobile retorna o próprio botão.
- Desktop em `1366x768` e `1920x1080` exibe navegação e CTAs desktop; botão mobile fica oculto.
- Nenhum erro de console foi registrado no teste automatizado.

## Validação Técnica

- `npm.cmd run lint`: aprovado com 4 warnings existentes (`next/font` no layout e uso de `<img>` na Home).
- `npx.cmd tsc --noEmit`: aprovado.
- `$env:NODE_OPTIONS='--max-old-space-size=8192'; npm.cmd run build`: aprovado.

## Escopo Preservado

- Backend não foi alterado.
- Formulários não foram alterados.
- Hashes de cadastro não foram alterados.
- Supabase, Apps Script, Google Sheets, CRM, endpoints e nomes de campos não foram alterados.
- `next-env.d.ts` não foi alterado.
- Arquivos `.patch` não foram adicionados.
- Home da Temporada 1 foi preservada como página principal.
- Header/menu mobile funcional foi preservado.

## Resolução de conflitos com main

Arquivos resolvidos:

- `app/page.tsx`
- `app/ur-market/page.tsx`
- `components/season/ProductArtCard.tsx`
- `components/season/RankingBroadcastPanel.tsx`
- `components/season/RewardArtCard.tsx`
- `components/season/SeasonBenefitGrid.tsx`
- `components/season/SeasonInfoCard.tsx`
- `components/season/SeasonJourney.tsx`
- `components/season/SeasonPageHero.tsx`
- `components/season/SeasonSection.tsx`
- `components/season/TeamFormationArtCard.tsx`
- `components/season/URBracketPreview.tsx`
- `lib/navigation.ts`

Decisões tomadas:

- A versão da Sprint 11F foi preservada nos conflitos de layout mobile, espaçamento, cards, carrossel/snap, footer e navegação.
- A Home continuou como Temporada 1, com o painel compacto mobile e hierarquia mais respirável.
- `/ur-market` continuou posicionado como consequência de participação, mérito e validação, com CTA principal para entrada na temporada.
- A navegação mobile manteve os grupos Participar, Competir, Evoluir, Benefícios, Negócios e Comunidade.
- O footer em accordion foi preservado também no viewport tablet/mobile `768x1024`, acompanhando o breakpoint mobile do header.
- Não havia ajuste funcional novo da `origin/main` nesses blocos conflitantes que justificasse reverter o refino mobile da 11F.

Validação executada após a resolução:

- Checagem ancorada de marcadores reais de conflito: sem ocorrências.
- Checagem restrita aos arquivos resolvidos: sem ocorrências.
- `npm.cmd run lint`: aprovado com os mesmos warnings já registrados.
- `npx.cmd tsc --noEmit`: aprovado.
- `$env:NODE_OPTIONS='--max-old-space-size=8192'; npm.cmd run build`: aprovado.
- QA Playwright responsivo: rotas e viewports obrigatórios aprovados.
- Evidência pós-merge: `output/playwright/sprint-11f-merge-playwright-summary.json`.

Confirmação:

- A Sprint 11F foi preservada.
- Desktop continuou com header, navegação e CTAs em `1366x768` e `1920x1080`.
- Mobile continuou com menu abrindo/fechando, footer em accordion e sem overflow horizontal nas rotas testadas.
- Backend, formulários, hashes, endpoints e integrações permaneceram fora do escopo.
