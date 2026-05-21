# Redesign estetico do site publico UR

## Objetivo

Elevar a camada visual publica do Ultimate Rivals de uma estrutura institucional de MVP para uma experiencia mais editorial, esportiva e premium, sem alterar a captacao operacional ja validada.

Nesta etapa foram priorizadas a Fase 1 e a Fase 2:

- Fase 1: sistema visual, biblioteca de imagens e componentes reutilizaveis.
- Fase 2: redesign da Home com ritmo de portal esportivo e ecossistema esportivo.

## Identidade visual aplicada

- Preto como base principal.
- Dourado como destaque premium.
- Branco/off-white para leitura.
- Cards escuros com borda sutil.
- Composicoes com overlay, imagens editoriais e paineis de status.
- Linguagem visual de plataforma esportiva, ranking, midia propria, temporada e comunidade.

## Estrutura de assets

Foram criadas pastas preparadas para receber fotos oficiais:

- `public/images/ur/home`
- `public/images/ur/atletas`
- `public/images/ur/equipes`
- `public/images/ur/eventos`
- `public/images/ur/midia`
- `public/images/ur/comunidade`
- `public/images/ur/patrocinadores`

O mapeamento central fica em:

- `lib/content/site-images.ts`

Nesta etapa tambem foram importadas fotos oficiais reais do acervo UR para as pastas de Home, atletas, equipes, eventos, midia e comunidade.

O arquivo `site-images.ts` tambem organiza imagens por funcao em `homeImageRoles`:

- `hero`
- `urPlay`
- `ranking`
- `eventos`
- `atletas`
- `equipes`
- `midia`
- `comunidade`
- `patrocinadores`
- `galeria`

Para inserir uma imagem real:

1. Coloque o arquivo na pasta correspondente em `public/images/ur/...`.
2. Atualize o campo `src` no item correto de `siteImages`.
3. Mantenha `alt`, `credit`, `category` e `label` preenchidos.
4. Use `EditorialImage`, `ImageFeatureCard` ou `MediaStoryCard` para reutilizar a imagem.

## Componentes criados

- `EditorialImage`: renderiza imagem real com `next/image` ou fallback premium quando o asset ainda nao existe.
- `SectionHeadingPremium`: padroniza titulos editoriais com selo, titulo, descricao e CTA.
- `StatRibbon`: faixa compacta de status para temporada, ranking e agenda.
- `FeatureCard`: card editorial com icone, texto e CTA.
- `ImageFeatureCard`: card visual com imagem, overlay e CTA.
- `MediaStoryCard`: card para destaques editoriais, midia e futuras chamadas de blog.
- `GalleryStrip`: faixa editorial para mostrar o acervo real do ecossistema.
- `MediaPortalSection`: bloco de Home com destaque principal e cards editoriais menores, aproximando a experiencia de portal esportivo.
- `RankingShowcase`: vitrine visual do ranking com top 3 em formacao e tipos de classificacao.
- `EventCalendarShowcase`: secao de calendario esportivo com UR Play, Mini Torneio e Virada de Ranking.
- `CommercialShowcase`: bloco comercial com parceiro oficial, midia, UR Market, ranking e publicidade nativa futura.
- `AdSlotHorizontal`: slot elegante para midia patrocinada.
- `SponsoredBlock`: bloco comercial para patrocinadores e ativacoes.
- `CTASectionPremium`: chamada final premium para conversao.

## Home redesenhada

A Home foi reorganizada em blocos mais visuais:

1. Hero editorial com foto real dominante, overlay escuro, CTAs e painel compacto de status.
2. Faixa de sinais do ecossistema.
3. Bloco visual do ecossistema com UR Play, Ranking e Equipes.
4. Entrada segmentada por perfil.
5. Midia em formato de portal esportivo.
6. Ranking Showcase.
7. Calendario esportivo da temporada.
8. Acervo visual oficial.
9. Jornada UR.
10. Reconhecimento, UR Coins, CT UR e recompensas.
11. Patrocinadores, ads e ativacoes comerciais.
12. Comunidade e FAQ.
13. CTA final.

## Sprint 5.2

A Sprint 5.2 fortaleceu a Home para reduzir aparencia de landing textual e aproximar a experiencia de uma plataforma esportiva com midia propria:

- Hero com imagem real ocupando mais area visual.
- Primeira dobra com menos cards pequenos e mais impacto imediato.
- Bloco de midia com destaque principal e cards por categoria.
- Ranking tratado como produto central do ecossistema.
- Eventos/temporada com estetica de calendario esportivo.
- Secao comercial com parceiro oficial, midia, UR Market e publicidade nativa futura.
- Uso mais forte das fotos reais de comemoracao, premiacao, ataque, publico, defesa e bastidores.

## Sprint 5.2.1: linguagem e imagens

O posicionamento publico correto e:

- Ultimate Rivals e um ecossistema esportivo.
- Ultimate Rivals e uma plataforma esportiva com jornada, ranking, midia, temporada, comunidade e oportunidades.
- UR Play e a porta de entrada, mas nao resume o sistema.
- Ranking, UR Coins, CT UR, equipes, quadras, patrocinadores e midia fazem parte da mesma estrutura continua.

Termos nao recomendados como definicao principal:

- "cara de liga"
- "parecer liga"
- "liga esportiva" como resumo do projeto
- "torneio" ou "campeonato" como definicao do UR

Termos recomendados:

- ecossistema esportivo
- plataforma esportiva
- sistema continuo
- estrutura de evolucao
- jornada esportiva
- midia propria
- ranking continuo
- temporada estruturada
- comunidade competitiva
- mercado de oportunidades
- desenvolvimento de atletas e equipes

Regra de imagens:

- A imagem do Hero nao deve repetir como destaque grande logo abaixo.
- Uma mesma imagem nao deve aparecer mais de duas vezes na Home.
- UR Play deve priorizar jogo real ou recepcao.
- Ranking deve priorizar ataque, defesa ou bloqueio.
- Eventos/temporada devem priorizar premiacao, cumprimento ou quadra em acao.
- Atletas devem usar retrato forte ou acao individual.
- Equipes devem usar abraco, huddle, comemoracao ou cumprimento.
- Comunidade deve usar publico, bastidores e arquibancada.
- Patrocinadores devem usar contexto real de evento, quadra, publico ou premiacao.

## Regras de uso

- Nao inventar atletas, equipes, resultados, ranking, datas, valores ou patrocinadores reais.
- Usar linguagem de operacao em validacao quando o dado ainda nao for publico.
- Preferir fotos oficiais UR quando estiverem disponiveis.
- Se a foto ainda nao existir, usar o fallback premium do componente sem parecer erro de sistema.
- Manter CTAs principais apontando para `/cadastro` ou hashes oficiais da central.

## Proximas fases sugeridas

- Aplicar os mesmos componentes nas paginas internas.
- Criar `/blog` e `/blog/[slug]`.
- Conectar os cards editoriais a conteudo real quando a operacao publicar noticias.
- Inserir assets reais oficiais dos torneios e eventos UR.
