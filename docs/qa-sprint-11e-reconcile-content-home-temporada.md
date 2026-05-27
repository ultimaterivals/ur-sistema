# QA Sprint 11E - Reconciliação de conteúdo + Home Temporada

## Linha de trabalho

- Branch: `sprint-11e-reconcile-content-home-temporada`
- Base: `sprint-11d-global-art-cards`
- Commit base: `3055837 Refina visual global do site com UR Art Cards System`
- Commit Sprint 11E: gerado ao final desta execução
- Patches não aplicados: `sprint10temporadagamificada.patch` e `sprint11b.patch`

## Branches comparadas

Todas as branches solicitadas existem localmente e foram consultadas:

- `main`
- `sprint-9-copy-oficial`
- `sprint-9-2-mobile-menu`
- `sprint-10-temporada-gamificada`
- `sprint-11b-ur-art-cards-system`
- `sprint-11c-refino-art-cards`
- `sprint-11d-global-art-cards`

Resultado da auditoria:

- `main`, Sprint 9, Sprint 9.2 e Sprint 10 tinham o conteúdo institucional mais completo nas páginas internas.
- Sprint 11B/11C introduziram a Home Temporada 1 e os Art Cards, principalmente em Home, Temporada, Ranking, Equipes e Eventos.
- Sprint 11D aplicou o visual global, mas simplificou conteúdo em várias páginas internas.
- Sprint 10 não foi aplicada inteira e continua inadequada para aplicação direta neste estado.

## Arquivos alterados

- `app/page.tsx`
- `app/ecossistema/page.tsx`
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
- `app/ct-ur/page.tsx`
- `components/layout/header.tsx`
- `components/season/SeasonAccordion.tsx`
- `components/season/SeasonBenefitGrid.tsx`
- `components/season/index.ts`
- `lib/navigation.ts`
- `docs/qa-sprint-11e-reconcile-content-home-temporada.md`

## Componentes criados/reutilizados

Criados:

- `SeasonBenefitGrid`: grid reutilizável para restaurar conteúdo histórico em cards compactos com ícones.
- `SeasonAccordion`: accordion sem estado client para FAQs e regras longas.

Reutilizados:

- `SeasonPageHero`
- `SeasonSection`
- `SeasonInfoCard`
- `SeasonJourney`
- `ProductArtCard`
- `TerritoryArtCard`
- `RankingBroadcastPanel`
- `TeamFormationArtCard`
- `AthleteArtCard`
- `RewardArtCard`
- `URBracketPreview`
- `LegendsArtPanel`

## Conteúdo restaurado por página

- `/`: Home oficial da Temporada 1 preservada com “QUEM MANDA NA REGIÃO?”, Territórios em Disputa, ladder Play/Sprint/Series/Legends, polos, ranking, bracket, Legends, recompensas e caminhos de entrada. Apenas ajustes de copy segura em premiações/repasses e Força dos Polos.
- `/ecossistema`: convertido para página institucional completa do sistema UR, restaurando plataforma contínua, atletas, equipes, ranking, mídia, UR Coins, Market, CT UR, patrocinadores, quadras, comunidade e expansão.
- `/temporada`: reforçada com ciclo trimestral, novo começo, ranking ativo, eventos conectados, status oficial e FAQ.
- `/ur-play`: restaurados porta de entrada, observação, jornada, nivelamento, públicos atendidos, benefícios do atleta, radar para equipes, UR Coins, FAQ e ligação com Sprint/Series/Legends.
- `/ranking`: restaurados contexto do ranking, tipos de ranking, critérios de pontuação, ranking individual, ranking de equipes, engajamento, mídia e FAQ.
- `/equipes`: restaurados identidade competitiva, ativo esportivo/midiático, entrada por capitão, validação de elenco, ranking coletivo, UR Coins coletivas, Draft/radar e rivalidade.
- `/ur-market`: restaurados vitrine do ecossistema, fluxo participação-critério-UR Coins-benefícios, categorias de recompensas, benefícios por público, relação com ranking/temporada/UR Play/CT UR e FAQ.
- `/eventos`: restaurados função de ciclo, memória competitiva, formatos possíveis, segmentação por nível/modalidade/categoria/polo, alimentação do ecossistema e FAQ.
- `/midia`: restaurados bastidores, atletas em destaque, equipes/rivalidades, conteúdo oficial, fluxo editorial, transmissões, cortes, Rivais em Jogo, documentários e valor para patrocinadores.
- `/atletas`: restaurados protagonismo, histórico validado, conexão com equipes, mentalidade Hunter, ranking por nível, visibilidade, oportunidades, CT UR, recompensas e FAQ.
- `/patrocinadores`: restaurados posicionamento comercial, acesso ao ecossistema, ativações, fluxo do UR Market, mídia/dados, cotas em formação, relatórios futuros e FAQ.
- `/quadras-parceiras`: restaurados movimento qualificado, calendário recorrente, visibilidade local, potencial comercial, fluxo de ativação, ativos do polo, convivência/estrutura e FAQ.
- `/ct-ur`: convertido para o visual da temporada, preservando desenvolvimento técnico, físico, mental, liderança, jornada de evolução e conexão com UR Play/ranking/equipes/mídia.
- `/cadastro` e `/regulamento`: preservados sem alteração para manter hashes, formulários e regras.

## Conteúdo não restaurado

- Layouts antigos com `PlatformHero`, `PageSection`, painéis editoriais legados e blocos longos foram substituídos por Art Cards e accordions.
- A Home institucional genérica anterior não voltou; o conteúdo institucional foi movido para `/ecossistema`.
- Sprint 10 não foi aplicada inteira.
- Copies com promessa forte de prêmio, repasse, benefício garantido, ROI, audiência ou vaga automática foram evitadas ou reescritas com critério oficial.
- Seções repetitivas ou excessivamente textuais foram resumidas em grids, jornadas e FAQs.

## Correção mobile

- `components/layout/header.tsx` segue como client component para controlar `useState`.
- Menu agrupado aparece para todos os viewports abaixo de `2xl`.
- Grupos mobile: Participar, Competir, Benefícios, Parcerias.
- Links críticos preservados: `/cadastro#atleta`, `/cadastro#equipe`, `/cadastro#patrocinador`, `/cadastro#quadra`, `/cadastro#comunidade`, `/#premiacoes`, `/#recompensas`, `/ur-market#coins`.
- Menu recebeu área rolável com `max-height`, `overscroll-contain`, fundo próprio, sombra e padding inferior com `env(safe-area-inset-bottom)`.
- Header desktop completo aparece apenas em `2xl`; em 1366 usa hamburger para evitar sobreposição com a marca.
- Auditoria de retângulos confirmou sem overlap no header:
  - `1366x768`: nav completo oculto, hamburger visível.
  - `1920x1080`: nav completo visível, sem sobreposição com a marca.

## Navegação

Menu principal:

- Temporada
- UR Play
- Ranking
- Eventos
- Mídia
- UR Market
- Atletas
- Equipes
- Patrocinadores
- Quadras

Mobile agrupado:

- Participar: Entrar na Temporada, Cadastro, Atletas, Equipes, UR Play
- Competir: Temporada, Ranking, Eventos, Regulamento, CT UR
- Benefícios: UR Market, Premiações, UR Coins, Mídia
- Parcerias: Patrocinadores, Quadras Parceiras, Contato

## Validação técnica

- `npm.cmd run lint`: passou com 0 erros e 4 warnings já existentes.
- Warnings existentes:
  - `app/layout.tsx`: fonte custom no app.
  - `app/page.tsx`: três usos de `<img>` para assets SVG/temporada.
- `npx.cmd tsc --noEmit`: passou.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: passou.
- Build gerou 22 rotas estáticas.

## Rotas testadas

Testadas via Playwright em `http://127.0.0.1:3018`:

- `/`
- `/ecossistema`
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

Hashes testados:

- `/cadastro#atleta`
- `/cadastro#equipe`
- `/cadastro#patrocinador`
- `/cadastro#quadra`
- `/cadastro#comunidade`
- `/#premiacoes`
- `/#recompensas`
- `/ur-market#coins`

## Viewports testados

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Resultado Playwright:

- 95 checagens de rota/viewport.
- 7 checagens de hash.
- 3 checagens de menu mobile.
- 7 screenshots de referência.
- `uiErrorCount`: 0.

Observações não-UI:

- `/robots.txt` retornou 200; o browser registrou um 404 de recurso ao renderizar texto puro.
- `/sitemap.xml` retornou 200; o renderer XML padrão do Chrome gera overflow visual de 20px em `390x844`, fora da UI do site.

## Confirmação de escopo preservado

- Não houve alteração em backend.
- Não houve alteração em CRM.
- Não houve alteração em Apps Script.
- Não houve alteração em Google Sheets.
- Não houve alteração em Supabase.
- Não houve alteração em endpoints.
- Não houve alteração em formulários.
- Não houve alteração em nomes de campos.
- Não houve alteração em hashes de cadastro.
- Arquivos `.patch` permaneceram não rastreados e não foram adicionados ao commit.
- `components/season` e `public/season-1` foram preservados.
- A Home da Temporada 1 foi mantida como Home oficial.

## Observações finais

A Sprint 11E reconcilia conteúdo histórico sem voltar ao layout antigo. A Home permanece competitiva e emocional como Temporada 1, enquanto `/ecossistema` assume o papel institucional completo. As páginas internas agora sustentam mais contexto estratégico, com copy segura e visual consistente com o UR Art Cards System.
