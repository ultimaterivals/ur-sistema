# QA Sprint 11C — Refinamento Visual UR Art Cards System

## Branch
sprint-11c-refino-art-cards
Base: sprint-11b-ur-art-cards-system

## Arquivos alterados

### Componentes refinados (components/season/)
- URArtCard.tsx — remove hover:scale do base; legends com glow mais forte
- ProductArtCard.tsx — identidade visual por produto, textura, acento radial
- TerritoryArtCard.tsx — rank #01/#02/#03, escudo maior, barra de progresso
- RankingBroadcastPanel.tsx — scoreboard ao vivo, badge de nível, variação +/−
- AthleteArtCard.tsx — monograma sempre visível, vignette, badge nível top-right
- TeamFormationArtCard.tsx — borda ouro para oficial, slots com gradiente
- URBracketPreview.tsx — conectores em L real, destaque do campeão, final dourado
- LegendsArtPanel.tsx — escudos dos polos, texto obrigatório, clamp título
- URBadge.tsx — onError handler para SVGs ausentes

### Páginas
- app/page.tsx — hero scoreboard sidebar, stats (polos/eventos/modalidades),
  carrossel snap mobile na Escalada e Territórios, rank passado ao TerritoryArtCard

### Config
- .gitignore — .claude/ adicionado

## Validação técnica
- npm run lint → 0 erros, 4 warnings (no-img-element para SVGs locais — esperado)
- npx tsc --noEmit → 0 erros
- npm run build → 22 páginas geradas com sucesso

## Correções visuais aplicadas
- [x] Identidade visual por produto (Play/Sprint/Series/Legends)
- [x] Textura específica por ProductArtCard
- [x] Hero com painel scoreboard lateral
- [x] TerritoryArtCard com rank, escudo maior, barra de progresso
- [x] RankingBroadcastPanel estilo transmissão ao vivo
- [x] AthleteArtCard com monograma premium sempre visível
- [x] TeamFormationArtCard com tratamento premium para formação oficial
- [x] URBracketPreview com conectores em L e campeão destacado
- [x] LegendsArtPanel com escudos dos polos e textos obrigatórios preservados
- [x] Mobile: carrossel snap horizontal na Escalada e Territórios
- [x] Slots vazios/quebrados: substituídos por fallback visual

## Textos obrigatórios preservados
- "No Legends, o atleta joga pelo nome, representa o escudo e fortalece seu território."
- "No UR Legends, a pontuação individual e a pontuação das equipes seguem a tabela
   oficial normal do evento. Apenas o Ranking de Força dos Polos recebe multiplicador especial."

## Escopo preservado
- CRM: não alterado
- Apps Script: não alterado
- Google Sheets: não alterado
- Endpoints: não alterado
- Supabase/backend: não alterado
- Tally fallback: não alterado
- Formulários: não alterado
- Hashes cadastro (#atleta, #equipe, etc.): preservados
- Header/Footer: não alterado
- Merge na main: não realizado

## Viewports testados (estrutura)
- 390×844 (iPhone 14 Pro)
- 430×932 (iPhone 14 Plus)
- 1440×900 (desktop padrão)
