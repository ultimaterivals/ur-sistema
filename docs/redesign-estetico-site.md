# Redesign estetico do site publico UR

## Objetivo

Elevar a camada visual publica do Ultimate Rivals de uma estrutura institucional de MVP para uma experiencia mais editorial, esportiva e premium, sem alterar a captacao operacional ja validada.

Nesta etapa foram priorizadas a Fase 1 e a Fase 2:

- Fase 1: sistema visual, biblioteca de imagens e componentes reutilizaveis.
- Fase 2: redesign da Home com ritmo de portal esportivo e ecossistema de liga.

## Identidade visual aplicada

- Preto como base principal.
- Dourado como destaque premium.
- Branco/off-white para leitura.
- Cards escuros com borda sutil.
- Composicoes com overlay, imagens editoriais e paineis de status.
- Linguagem visual de liga, ranking, midia, temporada e comunidade.

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
- `GalleryStrip`: faixa editorial para mostrar o acervo real da liga.
- `AdSlotHorizontal`: slot elegante para midia patrocinada.
- `SponsoredBlock`: bloco comercial para patrocinadores e ativacoes.
- `CTASectionPremium`: chamada final premium para conversao.

## Home redesenhada

A Home foi reorganizada em blocos mais visuais:

1. Hero editorial com imagem/fallback, overlay, CTAs e painel de liga.
2. Slot premium para marca parceira.
3. Resumo do ecossistema.
4. Escolha de caminho por perfil.
5. Jornada UR.
6. Temporada e ranking.
7. Midia/editorial.
8. Acervo visual oficial.
9. Reconhecimento, UR Coins, CT UR e recompensas.
10. Patrocinadores e ativacoes.
11. Comunidade e FAQ.
12. CTA final.

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
