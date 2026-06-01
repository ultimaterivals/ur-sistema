# Design System Oficial — Ultimate Rivals

## 1. Posicionamento visual

O Ultimate Rivals deve parecer uma liga de quadra de areia com alma de game, narrativa de temporada e acabamento premium.

A experiência precisa unir esporte real, comunidade local e UI de temporada competitiva. O visual deve comunicar arena noturna, areia, ranking, cards de atletas, transmissão esportiva, progressão e pertencimento sem parecer e-sports puro, fantasia medieval ou template corporativo genérico.

Referências como League of Legends, Riot Games, CBLOL, Kings League e EA Sports podem orientar qualidade visual, ritmo, cards, ranking e senso de espetáculo. Não copiar logos, personagens, layout protegido, identidade visual ou elementos proprietários.

## 2. Princípios de UI

- Mobile-first sem empobrecer desktop.
- Cada página deve ter uma dobra inicial clara.
- Primeiro orientar, depois converter.
- Cada bloco deve ter uma função específica: entrada, contexto, prova, progressão ou ação.
- Se a página começar a parecer manual, mover detalhe para accordion, página interna ou documentação.
- O atleta iniciante deve entender onde começa.
- O atleta competitivo deve sentir desejo de ranking.
- O parceiro deve enxergar organização e consistência.
- O visual deve parecer esportivo, premium e vivo.
- Benefícios aparecem como consequência da jornada, não como promessa principal.

## 3. Paleta oficial

### Base

- Preto profundo: `#050506`
- Grafite arena: `#0A0A0B`
- Grafite card: `#111218`
- Cinza painel: `#181A20`
- Areia escura: `#2A2117`

### Destaques

- Dourado UR: `#D4A437`
- Dourado claro: `#F2C75C`
- Amarelo elétrico controlado: `#F5D547`
- Bronze areia: `#A66A2B`

### Texto

- Off-white: `#F4F0E6`
- Cinza claro: `#D8D1C4`
- Cinza secundário: `#A9A59B`
- Cinza silencioso: `#706C63`

### Feedback

- Sucesso: `#38B778`
- Atenção: `#F2C75C`
- Erro: `#E64F4F`
- Informação: `#6EA8FF`

## 4. Tipografia recomendada

### Direção

A tipografia deve parecer liga esportiva, ranking, transmissão e temporada. Evitar fontes muito arredondadas, infantis, tecnológicas demais ou com estética de fantasia.

### Papéis

- Display: condensada, forte, uppercase, alto impacto.
- Interface: sans legível, neutra, boa em mobile.
- Dados: mono ou semi-mono apenas para placares, rankings, IDs, labels e estatísticas.

### Recomendações

- Headlines: Oswald, Bebas Neue, Anton ou equivalente.
- Interface: Manrope, Inter, Sora ou equivalente.
- Dados: IBM Plex Mono, JetBrains Mono ou equivalente.

### Regras

- Headlines podem usar uppercase, mas textos longos não.
- Evitar letter spacing negativo.
- Usar tracking moderado apenas em badges e labels.
- Mobile precisa priorizar leitura antes de impacto.

## 5. Grid e espaçamento

- Container desktop: `max-width: 1200px` a `1280px`.
- Container editorial: `max-width: 860px`.
- Padding mobile de seção: 48px a 64px vertical.
- Padding desktop de seção: 80px a 112px vertical.
- Gap de cards mobile: 12px a 16px.
- Gap desktop: 20px a 32px.
- Cards de leitura: 1 coluna no mobile.
- Cards compactos similares: carrossel horizontal com snap no mobile.
- Comparações: grid responsivo com 2 a 4 colunas no desktop.

## 6. Sistema de cards

### Card premium

Uso: blocos principais, jornada, polos, ranking, Market.

Características:

- Fundo grafite.
- Borda branca/dourada com transparência.
- Glow dourado sutil.
- Textura leve de areia ou ruído.
- Header com badge ou ícone.
- Título curto e forte.
- Texto de 1 a 3 linhas.
- CTA ou micro-status quando fizer sentido.

### Card editorial

Uso: mídia, blog, bastidores, histórias.

Características:

- Imagem ou área visual no topo.
- Tag de categoria.
- Título narrativo.
- Resumo curto.
- Sinalização de formato: vídeo, artigo, corte, transmissão.

### Card de sistema

Uso: regras, níveis, metodologia, etapas.

Características:

- Mais texto, menos glow.
- Hierarquia clara.
- Ícone funcional.
- Microcopy de segurança quando houver promessa sensível.

## 7. Botões

### Primário

- Fundo dourado.
- Texto preto/grafite.
- Peso alto.
- Área mínima de toque: 44px, preferencialmente 48px.
- Usar para ação principal da página.

### Secundário

- Fundo transparente ou grafite.
- Borda dourada/translúcida.
- Texto off-white ou dourado.
- Usar para exploração: entender temporada, ver ranking, conhecer metodologia.

### Terciário

- Link com seta, underline sutil ou pill discreto.
- Usar para navegação interna ou conteúdo secundário.

## 8. Badges e tags

Badges devem organizar contexto sem criar poluição visual.

Usar para:

- Temporada.
- Nível.
- Polo.
- Modalidade.
- Status.
- Ranking.
- Tipo de conteúdo.
- Critério oficial.

Estilo:

- Uppercase.
- Pequeno.
- Fundo preto/grafite.
- Borda dourada ou branca translúcida.
- Texto dourado ou off-white.

## 9. Painéis de ranking

Ranking deve parecer painel esportivo/broadcast, não tabela administrativa.

Padrões:

- Top 3 com destaque visual.
- Tabs para Atletas, Equipes, Duplas e Polos.
- Filtros por polo, modalidade, nível, período e status.
- Métricas visíveis: posição, pontos, variação, presença, evolução, fair play.
- Dados demonstrativos devem ser marcados como demonstrativos.
- Mobile: cards empilhados ou tabela transformada em cards.
- Desktop: tabela/painel com densidade controlada.

## 10. Cards de atletas, equipes, duplas e polos

### Atleta

- Nome.
- Polo.
- Nível.
- Modalidade.
- Pontos ou status.
- Badge de evolução/fair play quando aplicável.
- Imagem ou avatar editorial quando existir.

### Equipe

- Escudo.
- Nome.
- Polo.
- Capitão.
- Modalidades.
- Ranking/posição.
- Status da campanha.

### Dupla

- Dois atletas.
- Nome da formação ou identificação.
- Polo.
- Modalidade.
- Sintonia/regularidade/evolução.

### Polo

- Nome: Belo Horizonte, Betim ou Contagem.
- Identidade visual.
- Ranking dos Polos.
- Participação da comunidade.
- Eventos, quadras, equipes e atletas vinculados.

## 11. UI do UR Market

UR Market é vitrine de valor possível, não loja de promessa.

Padrões:

- Cards de produtos, serviços, experiências e parceiros.
- Tags: atleta, equipe, polo, parceiro, serviço, experiência.
- Microcopy obrigatória: benefícios dependem de regras, parceiros ativos e disponibilidade.
- Evitar preço como foco principal.
- Destacar utilidade esportiva e conexão com participação.
- Separar itens oficiais, parceiros e experiências.

## 12. UI de mídia

Mídia deve parecer portal esportivo próprio.

Padrões:

- Hero editorial.
- Cards para transmissões, melhores jogadas, bastidores, documentários, cortes e registros.
- Labels de formato: ao vivo, corte, bastidor, documentário, ranking, história.
- Blocos com imagem forte.
- CTA para acompanhar canais ou enviar pauta.
- Evitar aparência de blog genérico.

## 13. UI de blog

Blog deve servir SEO, autoridade e aquisição.

Padrões:

- Lista de artigos por categoria.
- Busca e filtros.
- Cards legíveis, menos cinematográficos que Mídia.
- Captura de lead em pontos estratégicos.
- Categorias: guias, ranking, mentalidade, treinamento, equipes, duplas, polos, quadras, parceiros.
- Conteúdo deve responder dúvidas reais de atletas, equipes, quadras e patrocinadores.

## 14. UI da Metodologia Hunter

Hunter é metodologia de desenvolvimento, não simples olheiro.

Padrões:

- Explicar mentalidade, leitura de jogo, evolução e postura.
- Mostrar aplicação na temporada.
- Cards de pilares: técnica, físico, mental, leitura, postura, consistência.
- Evolução deve parecer acompanhamento, não promessa profissional.
- Evitar linguagem de seleção elitista.

## 15. UI de quadras e polos

Polos e quadras são base física e comunidade.

Padrões:

- Cards grandes com imagem.
- Polo associado.
- Modalidades.
- Status.
- CTA de parceria.
- Benefícios para atletas, equipes, quadras e patrocinadores.
- Mostrar Belo Horizonte, Betim e Contagem com mesmo peso.
- Quadra não é só espaço: é base de calendário, comunidade e operação.

## 16. Motion e microinterações

Usar motion com moderação.

Permitido:

- Hover com glow sutil.
- Cards com leve elevação.
- Transição de tabs.
- Accordion suave.
- Marcação de ranking com microanimação.
- Carrossel com snap.

Evitar:

- Excesso de neon.
- Movimento que prejudica leitura.
- Entrada animada em tudo.
- Parallax pesado.
- Motion que cause instabilidade no layout.

## 17. Responsivo mobile-first

Regras:

- Mobile não pode parecer versão comprimida do desktop.
- Hero deve caber com clareza no primeiro viewport.
- Cards grandes, mas não infinitos.
- Menus e accordions devem reduzir sobrecarga.
- Ranking vira cards quando tabela quebrar.
- Footer mobile deve ser agrupado.
- Sem overflow horizontal.
- CTAs com toque confortável.

Viewports obrigatórios:

- 390x844.
- 430x932.
- 768x1024.
- 1366x768.
- 1920x1080.

## 18. Acessibilidade

- Contraste suficiente entre texto e fundo.
- Botões com área mínima de toque.
- Estados de foco visíveis.
- Componentes interativos com `aria` adequado.
- Não depender apenas de cor para status.
- Texto alternativo para imagens informativas.
- Headings em ordem lógica.
- Links com destino claro.
- Evitar texto pequeno demais em mobile.

## 19. Anti-patterns

Evitar:

- Visual SaaS genérico.
- Site institucional frio.
- Seções longas com cara de documento.
- Cards pequenos e repetitivos demais.
- Benefícios como promessa principal.
- Prêmio garantido.
- Benefício garantido.
- Promessa de dinheiro.
- Promessa de carreira profissional.
- Regional, UR Regional, Torneio Regional, Etapa Regional ou Classificatória Regional.
- Fantasia medieval.
- E-sports puro.
- Excesso de neon.
- Visual infantil.
- Fontes arredondadas demais.

## 20. Checklist de implementação

Antes de aplicar qualquer sprint visual:

- A mudança respeita este `MASTER.md`?
- Existe override específico da página?
- O escopo é pequeno e controlado?
- A Home não foi reorganizada sem necessidade?
- UR Play aparece cedo quando a jornada for explicada?
- A jornada oficial é `UR Play → UR Sprint → UR Series → UR Legends`?
- Belo Horizonte, Betim e Contagem têm mesmo peso?
- N3 é tratado como entrada, preparação, orientação e evolução?
- Benefícios são consequência, não promessa?
- Backend foi preservado?
- Formulários foram preservados?
- Integrações foram preservadas?
- `next-env.d.ts` foi preservado?
- `package.json` e `package-lock.json` foram preservados?
- Nenhum `.patch` foi commitado?
- Lint passou?
- Typecheck passou?
- Build passou?
