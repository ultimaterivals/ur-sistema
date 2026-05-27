# Mapa Editorial de Imagens e Assets UR - Sprint 11D

## Fonte visual principal

A Sprint 11D usa dois grupos de ativos:

1. Imagens reais/editoriais em `public/images/ur`.
2. Sistema visual da Temporada 1 em `public/season-1`.

## Imagens editoriais

| Uso | Key | Arquivo |
| --- | --- | --- |
| Home hero | `homeImageRoles.hero` | `/images/ur/home/ur-celebracao-rede-noite.jpg` |
| UR Play | `siteImages.urPlayAction` | `/images/ur/eventos/ur-recepcao-jogo-noite.jpg` |
| Ranking | `siteImages.attackBlock` | `/images/ur/eventos/ur-ataque-bloqueio-noite.jpg` |
| Atletas | `siteImages.athletePortrait` | `/images/ur/atletas/ur-atleta-ataque-noite.jpg` |
| Equipes | `siteImages.teamHuddle` | `/images/ur/equipes/ur-roda-equipe-dia.jpg` |
| UR Market/Mídia | `siteImages.mediaCoverage` | `/images/ur/equipes/ur-premiacao-trofeu.jpg` |
| Patrocinadores | `siteImages.sponsorActivation` | `/images/ur/eventos/ur-circulacao-quadra-dia.jpg` |
| Quadras/Temporada | `siteImages.wideServe` | `/images/ur/eventos/ur-saque-amplo-dia.jpg` |
| Eventos | `siteImages.fairPlayLine` | `/images/ur/eventos/ur-fair-play-rede-dia.jpg` |

## Assets Temporada 1

| Pasta | Uso |
| --- | --- |
| `public/season-1/symbols` | símbolos de produtos, modalidades, UR Coins, polos e Legends |
| `public/season-1/badges` | badges N1/N2/N3, destaque, polo ativo, formação oficial |
| `public/season-1/poles` | escudos BH, Betim e Contagem |
| `public/season-1/textures` | texturas de arena, areia, broadcast, energia e Legends |
| `public/season-1/cards-preview` | referências visuais e previews editoriais |

## Componentes visuais

| Componente | Função |
| --- | --- |
| `SeasonPageHero` | hero escuro premium por página |
| `SeasonSection` | seção global com fundo e espaçamento da liga |
| `SeasonInfoCard` | card editorial com textura, ícone e meta |
| `SeasonJourney` | trilha visual de progressão |
| `ProductArtCard` | cards Play/Sprint/Series/Legends |
| `RankingBroadcastPanel` | painel de ranking estilo transmissão |
| `TeamFormationArtCard` | card de formação/equipe |
| `TerritoryArtCard` | card de polo/território |
| `AthleteArtCard` | card editorial de atleta |
| `RewardArtCard` | card de benefício/recompensa |
| `URBracketPreview` | bracket visual |
| `LegendsArtPanel` | painel premium UR Legends |

## Uso por página

| Página | Hero | Componentes-chave |
| --- | --- | --- |
| `/` | Home Temporada 1 | `ProductArtCard`, `RankingBroadcastPanel`, `TerritoryArtCard`, `URBracketPreview`, `LegendsArtPanel` |
| `/temporada` | `SeasonPageHero` | `SeasonJourney`, `ProductArtCard`, `URBracketPreview`, `TerritoryArtCard`, `LegendsArtPanel` |
| `/ur-play` | `SeasonPageHero` | `SeasonJourney`, `SeasonInfoCard`, `RankingBroadcastPanel`, `ProductArtCard` |
| `/ranking` | `SeasonPageHero` | `RankingBroadcastPanel`, `TerritoryArtCard`, `LegendsArtPanel` |
| `/equipes` | `SeasonPageHero` | `TeamFormationArtCard`, `TerritoryArtCard`, `SeasonInfoCard` |
| `/ur-market` | `SeasonPageHero` | `SeasonInfoCard`, `RewardArtCard` |
| `/eventos` | `SeasonPageHero` | `ProductArtCard`, `URBracketPreview`, `SeasonInfoCard` |
| `/midia` | `SeasonPageHero` | `AthleteArtCard`, `TeamFormationArtCard`, `RankingBroadcastPanel` |
| `/atletas` | `SeasonPageHero` | `SeasonJourney`, `AthleteArtCard`, `RankingBroadcastPanel` |
| `/patrocinadores` | `SeasonPageHero` | `SeasonInfoCard`, `RewardArtCard` |
| `/quadras-parceiras` | `SeasonPageHero` | `TerritoryArtCard`, `SeasonInfoCard` |

## Próximos assets desejáveis

- Fotos reais de quadras parceiras por cidade.
- Fotos de atletas com uniforme/placar/premiação.
- Imagens reais de mídia em operação.
- Assets específicos para patrocinadores no UR Market.
- Versões oficiais dos cards com dados reais quando a temporada iniciar.
