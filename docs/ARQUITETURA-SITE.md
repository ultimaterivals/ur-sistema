# Ultimate Rivals — Arquitetura Oficial do Site

> Documento de referência para design, copy, estrutura e implementação.
> Versão 1.0 | Status: Aprovado para implementação

---

## 1. ARQUITETURA GERAL

```
Ultimate Rivals Site
├── Home                          /
├── UR Play                       /ur-play
├── Temporada                     /temporada
├── Ecossistema                   /ecossistema
├── Ranking                       /ranking
├── Equipes e Duplas              /equipes
├── Atletas                       /atletas
├── UR Market                     /ur-market
├── Polos e Quadras               /polos
├── Mídia                         /midia
├── Blog                          /blog
│   └── [slug]                    /blog/[slug]
├── Metodologia Hunter            /hunter
├── Regulamento                   /regulamento
├── Cadastro                      /cadastro
└── Patrocinadores                /patrocinadores
```

### Princípio de organização

Toda página responde a uma pergunta clara:

| Página | Pergunta que responde |
|---|---|
| Home | O que é o Ultimate Rivals e por que me importar? |
| UR Play | Como eu entro? |
| Temporada | O que está acontecendo agora? |
| Ecossistema | Como tudo se conecta? |
| Ranking | Quem está no topo e qual meu status? |
| Equipes e Duplas | Como funciona jogar em formação? |
| Atletas | Quem está no sistema? |
| UR Market | O que posso acessar dentro do ecossistema? |
| Polos e Quadras | Onde acontece na minha cidade? |
| Mídia | O que aconteceu e como foi? |
| Blog | O que devo saber sobre beach sports? |
| Hunter | Qual mentalidade e método o UR valoriza? |
| Regulamento | Quais são as regras? |
| Cadastro | Como me registro? |
| Patrocinadores | Como minha marca entra no ecossistema? |

---

## 2. MENU

### Menu principal (desktop — 7 itens máximo)

```
[Logo Ultimate Rivals]  Começar  UR Play  Temporada  Ranking  UR Market  Mídia  [Entrar]
```

- **Começar** → âncora para a seção da jornada na Home
- **Entrar** → CTA secundário — estilo outline dourado, sempre visível

### Menu mobile (hambúrguer)

```
Bloco principal:
  Começar
  UR Play
  Temporada
  Ranking
  UR Market
  Mídia

Divisor: "Explorar"
  Ecossistema
  Equipes e Duplas
  Atletas
  Polos e Quadras
  Metodologia Hunter

Divisor: "Institucional"
  Blog
  Regulamento
  Patrocinadores
  Cadastro

[Botão: Entrar no Ultimate Rivals]
```

### Regras de navegação

- Header sempre fixo (sticky), altura 64px mobile / 72px desktop
- Logo à esquerda, CTA "Entrar" à direita sempre visível
- Active state: linha dourada embaixo do item ativo
- Sem dropdown complicado no mobile — itens diretos em lista
- Páginas sempre abrem no topo (`scroll-to-top` automático)

---

## 3. ESTRUTURA DA HOME

A Home usa o padrão **Scroll-Triggered Storytelling** — uma narrativa em capítulos que conduz o visitante pela jornada do atleta.

### Seção 1 — Hero (acima do scroll)

**Função:** impactar, identificar e gerar o primeiro CTA.

```
[Imagem/vídeo de fundo: quadra de areia, atleta em ação]
[Overlay escuro com textura sutil de areia]

EYEBROW: "Temporada em andamento"
HEADLINE: "Eleve o jogo."
SUBHEADLINE: "Supere seus limites."
BODY: "O Ultimate Rivals organiza, valoriza e dá visibilidade
       ao esporte amador de quadra de areia em BH, Betim e Contagem."

CTA primário:  [Quero começar]  →  /ur-play
CTA secundário: [Ver a temporada]  →  /temporada

PROVA SOCIAL (badges inline):
  [Três polos ativos]  [Ranking público]  [UR Coins]  [Temporada ativa]
```

**Regras visuais:**
- Headline em Barlow Condensed 900, uppercase, ~72px mobile / ~120px desktop
- Overlay escuro ≥ 70% para garantir contraste
- CTA primário: fundo dourado `#D4A437`, texto preto, border-radius 0 (estética de liga)
- Sem carousel automático — imagem ou vídeo estático/loop mudo

---

### Seção 2 — O Problema (Capítulo 1)

**Função:** criar identificação com o atleta amador.

```
EYEBROW: "Por que o Ultimate Rivals existe"
HEADLINE: "O esporte amador não precisa ser desorganizado."

GRID DE PROBLEMAS (6 cards, 2 colunas mobile / 3 desktop):
  [Ícone] Sem ranking público
  [Ícone] Sem histórico de desempenho
  [Ícone] Sem calendário contínuo
  [Ícone] Sem visibilidade para atletas
  [Ícone] Sem critério para competir por nível
  [Ícone] Sem métricas para parceiros

TEXTO ÂNCORA: "Atletas que treinam, evoluem e competem
               merecem mais do que um torneio avulso."
```

**Regras visuais:**
- Cards com borda `1px solid rgba(255,255,255,0.08)` — quase invisível, só para definir espaço
- Ícones Lucide, tamanho 20px, cor `#D4A437`
- Não usar emojis

---

### Seção 3 — A Jornada (Capítulo 2 — âncora "Começar")

**Função:** mostrar o caminho do atleta do início ao UR Legends.

```
EYEBROW: "Como funciona"
HEADLINE: "Uma jornada completa começa no UR Play."

TIMELINE HORIZONTAL (scroll snap em mobile):

  [1] UR Play
      Sessão de entrada. Jogar no seu nível.
      Avaliação técnica. Primeiro histórico.
      → Dupla ou individual — você decide.

  [2] UR Sprint
      Torneios rápidos. Pontos no ranking.
      Visibilidade. Construção de trajetória.
      Belo Horizonte, Betim, Contagem.

  [3] UR Series
      Disputas por nível. Equipes e duplas.
      Ranking consolidado. Status no polo.

  [4] UR Legends
      O evento principal da temporada.
      Os melhores. O espetáculo.
      [Badge: EVENTO ASPIRACIONAL]

CTA: [Ver a Temporada]  →  /temporada
```

**Regras visuais:**
- Timeline com linha dourada horizontal conectando as etapas
- Card UR Legends com borda dourada e badge especial — destaque visual diferenciado
- Scroll horizontal com snap em mobile (não carousel com setas)

---

### Seção 4 — Os Polos (Capítulo 3)

**Função:** mostrar que os três polos têm o mesmo peso e criar pertencimento local.

```
EYEBROW: "Onde acontece"
HEADLINE: "Três polos. Uma temporada."

3 CARDS IGUAIS (peso visual idêntico):

  [BELO HORIZONTE]          [BETIM]              [CONTAGEM]
  Polo ativo                Polo ativo            Polo ativo
  [Nome da quadra]          [Nome da quadra]      [Nome da quadra]
  [Modelo visual]           [Modelo visual]       [Modelo visual]
  [Ver polo →]              [Ver polo →]          [Ver polo →]

NOTA: Nenhum polo aparece em primeiro ou maior que outro.
```

**Regras visuais:**
- Grid 1 coluna mobile / 3 colunas desktop
- Cards absolutamente iguais em tamanho e hierarquia
- Badge "Polo ativo" em verde-oliva suave (não verde neon)
- Imagens com aspecto 16:9, todas com mesmo tratamento de cor

---

### Seção 5 — Ranking (Capítulo 4)

**Função:** tornar o ranking aspiracional, mostrar que o sistema é público e real.

```
EYEBROW: "Sistema de mérito"
HEADLINE: "Ranking não é tabela. É trajetória."

PREVIEW DO RANKING (estilo painel de mídia esportiva):
  [Top 3 com tratamento visual de pódio — 1º maior]
  [Posições 4–8 em lista compacta]
  [Badge de nível: N1 Elite / N2 Avançado / N3 Desenvolvimento]
  [Polo de origem de cada atleta]
  [Dado ilustrativo — marcado visualmente]

NOTA INLINE: "Dados ilustrativos. Modelo visual."

CTA: [Ver ranking completo]  →  /ranking
```

**Regras visuais:**
- 1º lugar: badge dourado grande, nome em Barlow Condensed 700
- 2º/3º: prata e bronze discretos
- Polo de origem com ponto colorido (uma cor por polo)
- Não usar tabela HTML simples — painel visual com hierarquia

---

### Seção 6 — UR Market Preview

**Função:** mostrar que existe um mercado de benefícios dentro do ecossistema — sem prometer preço, valor ou retorno.

```
EYEBROW: "UR Market"
HEADLINE: "Produtos, experiências e benefícios possíveis."

VITRINE HORIZONTAL (4 cards, scroll em mobile):
  [Card produto] nome + categoria + badge "UR Coins"
  [Card experiência] nome + categoria + badge "Exclusivo"
  [Card serviço] nome + categoria + badge "Parceiro"
  [Card] "Em breve" — placeholder elegante

COPY ÂNCORA: "Dentro do ecossistema, sua participação
              pode gerar acesso a benefícios reais."

CTA: [Explorar o Market]  →  /ur-market
```

**Regras visuais:**
- Sem R$, sem preços, sem valores monetários
- Cards com estética de vitrine premium — não e-commerce genérico
- Badge "UR Coins" em dourado
- Badge "Em breve" em cinza muted — não deve decepcionar, só contextualizar

---

### Seção 7 — Mídia Preview

**Função:** mostrar que o ecossistema produz conteúdo — o esporte vira história.

```
EYEBROW: "Ultimate Rivals Mídia"
HEADLINE: "O jogo termina na areia. A história continua aqui."

GRID DE CONTEÚDO (estilo feed editorial esportivo):
  [Card grande] Transmissão ao vivo / último evento
  [Card médio] Melhores jogadas — highlights
  [Card médio] Documentário ou bastidor
  [Card pequeno] Quadro fixo (ex.: "Ponto do evento")
  [Cards menores] Preview de outros conteúdos

CTA: [Acessar a mídia]  →  /midia
```

**Regras visuais:**
- Grid assimétrico — card principal ocupa 2 colunas em desktop
- Tags de categoria: TRANSMISSÃO / HIGHLIGHTS / DOCUMENTÁRIO / BASTIDORES
- Thumbnails com overlay escuro e título legível
- Não usar grade uniforme de cards iguais

---

### Seção 8 — Atleta, Equipe ou Dupla? (Entrada para segmentos)

**Função:** deixar claro que qualquer forma de participação tem um caminho próprio.

```
HEADLINE: "Você decide como entrar."

3 CAMINHOS (cards de segmento):

  [ATLETA INDIVIDUAL]
  Comece pelo UR Play.
  Construa seu ranking.
  Forme dupla quando quiser.
  → [Quero começar]

  [DUPLA]
  Dois atletas. Um caminho.
  Ranking de duplas. Modalidade oficial.
  → [Entrar com dupla]

  [QUARTETO / EQUIPE]
  Identidade. Rivalidade. Estratégia.
  Draft e mercado interno.
  → [Montar equipe]
```

**Regras visuais:**
- Cards com ícone de destaque no topo
- Tamanhos iguais — nenhum caminho é mais importante que outro
- Cor de destaque diferente por card: dourado / prata / bronze (não verde/vermelho)

---

### Seção 9 — Metodologia Hunter

**Função:** posicionar a mentalidade UR como diferencial de formação — não como serviço de scout.

```
EYEBROW: "Metodologia"
HEADLINE: "Hunter não é olheiro. É mentalidade."

BODY: "O Ultimate Rivals valoriza atletas que caçam evolução.
       Que leem o jogo. Que buscam o próximo nível.
       A Metodologia Hunter é o padrão de comportamento
       e desenvolvimento do ecossistema."

3 PILARES (ícone + título + 1 linha):
  [Leitura de jogo]  Análise tática e consciência esportiva
  [Mentalidade]      Disciplina, constância e evolução contínua
  [Desenvolvimento]  Treino, feedback e progressão por nível

CTA: [Conhecer a metodologia]  →  /hunter
```

---

### Seção 10 — CTA Final

**Função:** converter quem chegou até aqui.

```
BACKGROUND: dourado escuro / areia quente
HEADLINE: "Sua jornada começa agora."
SUBHEADLINE: "Belo Horizonte. Betim. Contagem."

CTA primário: [Quero entrar no UR Play]  →  /cadastro
CTA secundário: [Falar com o time]  →  /contato
```

---

### Seção 11 — Footer

```
Coluna 1: Logo + tagline + redes sociais
Coluna 2: Navegação principal (links)
Coluna 3: Polos (3 endereços)
Coluna 4: Institucional (Regulamento, Termos, Privacidade, Patrocinadores)

Base: © Ultimate Rivals | Todos os direitos reservados
      Dados ilustrativos — modelo visual em construção
```

---

## 4. PÁGINAS INTERNAS — ESTRUTURA

### /ur-play — UR Play

```
1. Hero: "A porta de entrada do ecossistema."
   Subtítulo: O que é, para quem é, como funciona
   CTA: [Quero participar]

2. O que esperar (3 blocos):
   Sessão organizada / Avaliação técnica / Primeiro histórico

3. Formatos:
   Individual / Dupla / Quarteto — explicação de cada um

4. Níveis (sem hierarquia de valor):
   N1 Elite / N2 Avançado / N3 Desenvolvimento
   Texto claro: "N3 é o começo certo, não o nível inferior."

5. Como funciona a avaliação:
   Critérios técnicos, comportamentais e físicos — sem prometer resultado

6. Próximos passos:
   UR Play → UR Sprint → UR Series → UR Legends (timeline visual)

7. CTA final: [Cadastrar para o próximo UR Play]
```

---

### /temporada — Temporada

```
1. Hero: "Temporada [Nome/Número]. Em andamento."
   Status badge + datas + polos ativos

2. Calendário de eventos (por polo):
   Cards de evento: nome, data, polo, formato, nível
   Status: Próximo / Em andamento / Encerrado

3. Standings / Classificação atual:
   Modelo visual — marcado como ilustrativo

4. UR Legends (destaque especial):
   Card maior, borda dourada, badge "Evento principal"
   "O grande evento da temporada. Os melhores se encontram."

5. Histórico de temporadas anteriores:
   Timeline compacta — "Em breve" se não houver dados

6. CTA: [Participar da temporada]  →  /ur-play
```

---

### /ranking — Ranking

```
1. Hero: "Ranking não é tabela. É trajetória."
   Eyebrow: "Sistema de mérito — atualizado por evento"

2. Filtros:
   [Todos] [N1 Elite] [N2 Avançado] [N3 Desenvolvimento]
   [BH] [Betim] [Contagem]
   [Individual] [Dupla] [Quarteto]

3. Top 3 (pódio visual):
   Tratamento especial — maior, mais destaque, badge de posição

4. Lista completa (posições 4+):
   Posição / Nome / Polo / Nível / Pontos / Variação (+/-)

5. Legenda de pontuação:
   "Como os pontos são calculados — sem prometer resultados"

6. Nota de rodapé:
   "Dados ilustrativos. Modelo visual. Ranking real disponível
    após a primeira temporada validada."
```

---

### /equipes — Equipes e Duplas

```
1. Hero: "Identidade. Rivalidade. Estratégia."
   Dois caminhos: Dupla / Quarteto-Equipe

2. Duplas:
   O que é, como pontua, formato de torneio, ranking de duplas

3. Equipes (Quarteto e acima):
   Draft, formação, identidade visual, mercado interno

4. Como funciona o draft:
   Processo simplificado em 4 passos

5. Exemplos de equipes (modelo visual):
   Cards de equipe: nome fictício, escudo placeholder, polo, nível
   Marcados como "Modelo visual"

6. CTA: [Montar minha formação]  →  /cadastro
```

---

### /atletas — Atletas

```
1. Hero: "No Ultimate Rivals, atleta não é número. É trajetória."

2. Cards de atleta (modelo visual):
   Foto / Nome / Polo / Nível / Pontos / Especialidade
   [Badge de destaque se aplicável]
   Marcado como "Dados ilustrativos"

3. Filtros: Polo / Nível / Modalidade

4. O que o atleta constrói no UR:
   Ranking / Histórico / Visibilidade / UR Coins / Desenvolvimento

5. Atleta sem equipe:
   Seção explícita: "Pode entrar pelo UR Play individualmente.
                     Você não precisa de equipe para começar."

6. CTA: [Criar meu perfil]  →  /cadastro
```

---

### /ur-market — UR Market

```
1. Hero: "A vitrine do ecossistema."
   Copy: "Produtos, serviços, experiências e benefícios
          possíveis dentro do Ultimate Rivals."
   PROIBIDO: R$, preços, "garantido", "cashback"

2. Categorias (filtro por tag):
   [Produtos] [Experiências] [Serviços] [Benefícios] [Em breve]

3. Grid de items (vitrine):
   Card: imagem / nome / categoria / tag de acesso (UR Coins / Parceiro)
   Sem preço. Sem valor monetário.

4. Como funciona o acesso:
   "Acúmulo de UR Coins por participação, presença e desempenho."
   "Benefícios possíveis — disponibilidade sujeita a parceiros."

5. Parceiros do Market:
   Logos dos parceiros (quando existirem) ou "Parceiros em expansão"

6. CTA: [Entrar no ecossistema para acessar o Market]  →  /cadastro
```

---

### /polos — Polos e Quadras

```
1. Hero: "O ecossistema acontece aqui."
   "Três polos. Uma temporada. Sua cidade faz parte."

2. Três cards de polo (peso visual igual):
   [BH] [Betim] [Contagem]
   Nome do polo / Quadras parceiras / Próximos eventos / [Ver polo]

3. Página/seção por polo (accordion ou subpágina):
   Quadras parceiras: nome, endereço, estrutura
   Calendário local de eventos
   Atletas e equipes do polo (modelo visual)

4. "Polo em expansão":
   Seção placeholder elegante para futuras cidades

5. CTA por polo: [Participar em [cidade]]
```

---

### /midia — Mídia

```
1. Hero editorial: "O jogo termina na areia. A história continua."
   Layout de capa de veículo esportivo

2. Categorias (tabs ou filtro):
   [Transmissões] [Highlights] [Documentários]
   [Bastidores] [Quadros fixos] [Registro de partidas]

3. Destaque principal (card grande):
   Último conteúdo publicado ou mais relevante da temporada

4. Grid de conteúdo (assimétrico):
   Card principal (2 cols) + 3-4 cards médios + linha de cards pequenos

5. Quadros fixos (seção dedicada):
   "Ponto do evento" / "Atleta do evento" / etc.
   Cards com identidade visual de quadro de TV esportiva

6. Arquivo / temporadas anteriores:
   Linha do tempo compacta — "Em breve" se vazio

7. CTA: [Seguir o Ultimate Rivals]  →  redes sociais
```

---

### /blog — Blog

```
1. Header simples: "Blog Ultimate Rivals"
   Copy: "Vôlei de areia, futevôlei e beach tennis — técnica,
          estratégia, desenvolvimento e comunidade."
   [FOCO SEO: artigos com keywords de beach sports]

2. Post em destaque (card grande, hero editorial):
   Thumbnail / Título SEO / Categoria / Tempo de leitura
   Resumo do post

3. Grid de posts (3 colunas desktop / 1 mobile):
   Thumbnail / Categoria (tag) / Título / Resumo (2 linhas) / Data

4. Categorias/tags:
   [Técnica] [Tática] [Preparação] [Nutrição] [Equipamentos]
   [Temporada UR] [Notícias] [Atletas]

5. CTA de lead inline (a cada 3-4 posts):
   "Quer competir? Cadastre-se no Ultimate Rivals."
   Input de e-mail + botão

6. Posts individuais (/blog/[slug]):
   Breadcrumb / Título H1 / Meta (autor, data, tempo) /
   Corpo do artigo / CTA de lead inline /
   Posts relacionados / Compartilhar
```

---

### /hunter — Metodologia Hunter

```
1. Hero: "Hunter não é olheiro. É quem não para de evoluir."
   Copy clara sobre o conceito correto

2. O que é ser Hunter:
   3 pilares: Leitura de jogo / Mentalidade / Desenvolvimento
   Cada pilar com descrição rica, sem prometer carreira

3. Como o UR aplica:
   Avaliações / Feedbacks / Sessões de desenvolvimento / CT UR

4. CT UR (Centro de Treinamento):
   O que é, o que oferece, sem prometer resultado específico

5. O atleta Hunter:
   Comportamentos esperados (list visual com ícones)
   Sem linguagem de infoproduto ou coach motivacional

6. CTA: [Quero desenvolver meu jogo]  →  /ur-play
```

---

### /regulamento — Regulamento

```
1. Header limpo: "Regulamento Oficial"
   "Transparência, critérios e regras claras para todos."

2. Índice navegável (âncoras):
   Participação / Níveis / Ranking / UR Coins / Conduta / Premiações

3. Conteúdo em accordions por seção:
   Texto limpo, sem juridiquês desnecessário
   Versão "Em construção" com nota clara

4. Download (quando disponível):
   [Baixar regulamento em PDF]

5. Histórico de versões:
   Tabela simples: versão, data, principais mudanças
```

---

### /cadastro — Cadastro

```
1. Hero compacto:
   "Entre para o ecossistema."
   Tabs: [Atleta] [Dupla] [Equipe] [Quadra] [Patrocinador]

2. Formulário por tipo (conteúdo mínimo):
   Atleta: nome, cidade, polo, nível estimado, contato
   Dupla: dados dos dois atletas + polo
   Quadra: nome da quadra, endereço, responsável, contato
   Patrocinador: empresa, segmento, contato, interesse

3. Mensagem de confirmação:
   Sem prometer resposta imediata garantida
   "Entraremos em contato em breve."

4. Nota de privacidade:
   Link para /privacidade
```

---

### /patrocinadores — Patrocinadores

```
1. Hero: "Sua marca dentro de um ecossistema esportivo real."
   Copy: sem ROI garantido, sem números inflados

2. O que o UR entrega:
   Visibilidade / Ativação / Relatórios / UR Market / Conteúdo

3. Formatos de parceria (não chamar de "pacotes"):
   [Polo parceiro] [Patrocinador de evento] [UR Market]
   Sem preço. Sem valor de cota.

4. Benefícios por formato:
   Lista clara sem prometer métricas absolutas

5. Logos de parceiros atuais (ou "Parceiros em construção")

6. CTA: [Quero conversar]  →  formulário de contato
```

---

## 5. COMPONENTES VISUAIS REUTILIZÁVEIS

### Tipografia

| Elemento | Font | Peso | Tamanho |
|---|---|---|---|
| Hero headline | Barlow Condensed | 900 | clamp(48px, 10vw, 120px) |
| Section headline | Barlow Condensed | 700 | clamp(28px, 5vw, 56px) |
| Card title | Barlow Condensed | 600 | 20–24px |
| Body text | Barlow / Inter | 400 | 16px (min mobile) |
| Label / eyebrow | Barlow Condensed | 600 | 11–12px, uppercase, tracking 0.2em |
| Dados e stats | Barlow Condensed | 700 | 32–48px |

### Tokens de cor

```css
--ur-ink:      #0A0A0B    /* fundo base */
--ur-panel:    #14141A    /* painéis e cards */
--ur-panel-2:  #1C1C25    /* cards elevados */
--ur-gold:     #D4A437    /* destaque principal */
--ur-gold-dim: rgba(212,164,55,0.15)  /* glow suave */
--ur-cream:    #F4F0E6    /* texto principal */
--ur-mute:     #8A8A93    /* texto secundário */
--ur-live:     #FF4D4D    /* status ao vivo / urgente */
--ur-line:     rgba(255,255,255,0.08) /* bordas sutis */
--ur-sand:     #2A1E0E    /* textura de areia (overlay) */

/* Polos — uma cor por polo */
--polo-bh:      #4A7FC1  /* azul BH */
--polo-betim:   #7CB87C  /* verde Betim */
--polo-contagem:#C17A4A  /* terra Contagem */

/* Ranking */
--rank-1: #D4A437   /* ouro */
--rank-2: #A8A8B3   /* prata */
--rank-3: #8B6340   /* bronze */
```

### Componentes principais

**URBadge** — badge reutilizável
- Variantes: `live`, `active`, `gold`, `level-n1`, `level-n2`, `level-n3`, `polo`, `em-breve`, `ilustrativo`
- Tamanho mínimo: 28px altura, padding 6px 10px

**URCard** — card base
- Variantes: atleta, evento, polo, mídia, market, equipe
- Borda `--ur-line`, fundo `--ur-panel`, hover: `--ur-panel-2` + border-gold dim
- `cursor-pointer` obrigatório em todos os cards clicáveis
- Transição `200ms ease` em border-color e background

**URRankingRow** — linha de ranking
- Posição / Nome / Polo dot / Nível badge / Pontos / Variação
- Top 3 com tratamento visual especial (tamanho, cor, ícone)

**URTimeline** — jornada UR Play → UR Legends
- Linha dourada conectando etapas
- Estilo scroll-snap horizontal em mobile

**URHero** — hero de página
- Aceita: título, subtítulo, eyebrow, imagem de fundo, CTAs
- Overlay obrigatório para contraste (mínimo 70% opacidade)

**URSectionHeading** — cabeçalho de seção
- Eyebrow dourado uppercase + headline + subtítulo opcional

**URPoloCard** — card de polo
- Peso visual igual para todos os três polos
- Badge "Polo ativo" / "Em expansão"

**UREventCard** — card de evento
- Data / Nome / Polo / Formato / Nível / Status
- Status: `próximo`, `em andamento`, `encerrado`

**URMediaCard** — card de conteúdo de mídia
- Variantes: transmissão (maior), highlight, documentário, bastidor
- Tag de categoria obrigatória

**URMarketCard** — card do market
- Sem preço. Badge de acesso (UR Coins / Parceiro).

**URSegmentCard** — card de segmento de entrada
- Atleta individual / Dupla / Quarteto-Equipe
- Ícone + título + 3 bullets + CTA

---

## 6. DIREÇÃO DE COPY

### Tom de voz

| Deve ser | Não deve ser |
|---|---|
| Forte e direto | Exagerado ou hypado |
| Esportivo e competitivo | Corporativo e frio |
| Inspirador com base real | Coach de infoproduto |
| De liga, não de academia | De torneio isolado |
| Curto e hierárquico | Parágrafos longos |
| Confiante sem arrogância | Arrogante ou exclusivo |

### Frases oficiais aprovadas (usar ou adaptar)

```
"Eleve o jogo. Supere seus limites."
"Cada jogo conta."
"Ranking não é tabela. É trajetória."
"Sua jornada começa no UR Play."
"Competir é só o começo."
"No Ultimate Rivals, atleta não é número. É trajetória."
"O ecossistema está em movimento."
"Aqui, presença vira histórico."
"Aqui, desempenho vira narrativa."
```

### Regras de copy obrigatórias

**PROIBIDO usar:**
- "Regional" em qualquer contexto
- "carreira profissional" como promessa
- "ganhe dinheiro", "premiação garantida", "benefício garantido"
- "ROI garantido", "retorno assegurado"
- "o melhor torneio", "o maior", "o único"
- "100%", "sempre", "nunca falha"
- Preços, R$, valores monetários no Market

**OBRIGATÓRIO usar:**
- "Ultimate Rivals" como marca principal (não só "UR")
- "UR" apenas nos produtos oficiais: UR Play, UR Sprint, UR Series, UR Legends, UR Market, UR Coins, CT UR
- N3 como "base de entrada, preparação e evolução" — nunca como "nível inferior"
- "Dados ilustrativos" ou "Modelo visual" em todos os placeholders
- "possível" em vez de "garantido" ao falar de benefícios

### Hierarquia de copy por página

```
Hero: 1 headline impactante + 1 subtítulo de contexto + 1 CTA
Seções: eyebrow (contexto) + headline (proposta) + body opcional + CTA
Cards: título + 1–2 linhas descritivas + ação (quando necessário)
Footer: apenas links — sem copy adicional
```

---

## 7. REGRAS DE CTAs

| CTA | Destino | Cor | Contexto |
|---|---|---|---|
| Quero começar / Quero entrar | /ur-play | Dourado | Hero, jornada |
| Ver a temporada | /temporada | Outline branco | Hero secundário |
| Ver ranking completo | /ranking | Outline | Seção ranking |
| Explorar o Market | /ur-market | Outline | Seção market |
| Acessar a mídia | /midia | Outline | Seção mídia |
| Entrar | /cadastro | Outline dourado | Header sempre |
| Falar com o time | /contato | Ghost/outline | Footer, patrocinadores |

**Regras:**
- CTA primário por página: sempre 1, fundo dourado, texto preto
- CTA secundário: sempre outline (borda + texto, sem fundo)
- Texto do CTA: verbo de ação + objeto ("Ver ranking", não "Clique aqui")
- Tamanho mínimo: `min-h-[44px] px-6` (touch target)
- Sem "Saiba mais" genérico

---

## 8. REGRAS DE CONTEÚDO

### Dados fictícios / placeholders

Todo dado que ainda não é real deve ser marcado explicitamente:
- Badge `[Dados ilustrativos]` em cards de atleta, ranking e equipe
- Texto `"Modelo visual — dados reais em breve"` em seções de ranking
- Imagens sem rostos reais de atletas até autorização

### Imagens

- Estilo: vôlei de areia, futevôlei, beach tennis, quadra, areia, rede, atleta em ação
- Tom: dinâmico, suado, competitivo, local
- Tratamento: overlay escuro + saturação reduzida levemente para manter uniformidade
- Sem fotos de estúdio ou stock photo genérico
- Alt text obrigatório em todas as imagens

### Acessibilidade

- Contraste mínimo 4.5:1 para texto normal (usar `--ur-cream` em `--ur-panel` = ✓)
- Foco visível em todos os elementos interativos (ring dourado)
- `aria-label` em botões de ícone
- Todos os formulários com `<label>` associado
- `prefers-reduced-motion` implementado (já está no globals.css)

---

## 9. O QUE EVITAR

### Estrutura
- Home virando manual do ecossistema (mover conteúdo detalhado para /ecossistema)
- Páginas sem CTA claro
- Menus com mais de 7 itens visíveis no desktop
- Dropdown com muitos níveis no mobile

### Visual
- Cards todos idênticos em tamanho e peso (variar intencionalmente)
- Tabela HTML para o ranking (usar painel visual)
- Neon excessivo (só para elementos de status "ao vivo")
- Fontes arredondadas (Poppins, Nunito) — usar Barlow Condensed
- Grid uniform de 3 colunas para mídia (usar assimétrico)
- Ícones de emoji em qualquer lugar

### Copy
- "Regional" em qualquer contexto
- Promessas de garantia
- Linguagem de infoproduto ("transformação", "resultado em X dias")
- Preços no Market

---

## 10. PLANO DE IMPLEMENTAÇÃO

### Etapa 1 — Fundação (Prioridade máxima)

Objetivo: colocar o site funcional com as páginas de maior conversão.

```
[ ] Revisar globals.css e tokens de cor (já existentes — confirmar)
[ ] Revisar componentes base (URBadge, URCard, URHero, URSectionHeading)
[ ] Corrigir issues de copy (remover "Regional", preços, promessas)
[ ] Substituir placeholders ruins por "Dados ilustrativos"
[ ] Home: revisar e ajustar seções conforme esta arquitetura
[ ] /ur-play: página completa e funcional
[ ] /cadastro: formulário funcionando (atleta e quadra ao menos)
[ ] Header/Footer: revisar navegação conforme menu desta arquitetura
[ ] Mobile: testar todas as páginas em 375px
```

### Etapa 2 — Páginas estratégicas

Objetivo: completar as páginas de maior tráfego orgânico e conversão.

```
[ ] /temporada: calendário + UR Legends com destaque visual
[ ] /ranking: painel visual aspiracional com dados ilustrativos
[ ] /polos: três polos com peso igual, quadras listadas
[ ] /equipes: duplas e quartetos com caminho próprio
[ ] /atletas: cards com "dados ilustrativos" marcados
[ ] /hunter: metodologia clara (não olheiro)
[ ] Regulamento: estrutura base com accordions
```

### Etapa 3 — Mídia, Market e Blog

Objetivo: ativar as camadas de conteúdo e mercado.

```
[ ] /midia: grid assimétrico editorial, categorias, quadros
[ ] /ur-market: vitrine sem preços, categorias, como funciona
[ ] /blog: estrutura + 2–3 posts iniciais para SEO
[ ] /blog/[slug]: template de post individual
[ ] /patrocinadores: página institucional para marcas
```

### Etapa 4 — Refinamento

Objetivo: elevar a qualidade visual e experiência.

```
[ ] Animações de entrada nas seções (scroll-triggered, respeitando prefers-reduced-motion)
[ ] Ranking: posições 1–3 com tratamento visual de pódio completo
[ ] UR Legends: componente de destaque máximo na temporada
[ ] Acessibilidade: auditoria completa de contraste e foco
[ ] SEO: meta tags, OG images, sitemap revisado
[ ] Performance: lazy loading em todas as imagens
```

---

## 11. CHECKLIST DE VALIDAÇÃO FINAL

### Estrutura
- [ ] Home clara — não virou manual
- [ ] Todas as 15 páginas existem e abrem no topo
- [ ] Mídia e Blog são páginas separadas
- [ ] UR Market é vitrine, não loja com preço
- [ ] Metodologia Hunter posicionada como mentalidade
- [ ] Ranking aspiracional — não tabela comum
- [ ] UR Legends com destaque visual máximo
- [ ] Três polos com peso visual igual
- [ ] Dupla, Quarteto e individual têm caminhos explícitos

### Copy
- [ ] "Regional" não aparece em nenhum lugar
- [ ] Sem "carreira profissional" como promessa
- [ ] Sem R$, preços ou valores monetários
- [ ] Sem "garantido" ou promessas absolutas
- [ ] Placeholders marcados como "Dados ilustrativos" ou "Em breve"
- [ ] "Ultimate Rivals" usado como marca principal
- [ ] "UR" apenas nos produtos oficiais
- [ ] N3 não descrito como "inferior"

### Visual
- [ ] Preto/grafite/dourado dominam
- [ ] Site parece esportivo e premium
- [ ] Tipografia forte (Barlow Condensed) em headlines
- [ ] Cards não são todos iguais
- [ ] Hierarquia visual clara
- [ ] Ranking com pódio visual
- [ ] UR Legends com borda dourada e badge especial
- [ ] Market sem preço visível

### Mobile
- [ ] Funciona bem em 375px
- [ ] Menu mobile limpo (hambúrguer + lista)
- [ ] CTAs visíveis e com min 44px de altura
- [ ] Cards legíveis
- [ ] Sem overflow horizontal
- [ ] Home não está densa demais

### Acessibilidade e técnica
- [ ] Contraste ≥ 4.5:1 no texto principal
- [ ] Focus ring visível (dourado)
- [ ] aria-label nos botões de ícone
- [ ] Todas as imagens com alt text
- [ ] Formulários com labels associados
- [ ] prefers-reduced-motion respeitado
- [ ] Páginas abrem no topo

---

## 12. INSTRUÇÕES PARA RODAR LOCALMENTE

```bash
# Pré-requisitos: Node.js 18+ e npm

# 1. Instalar dependências (se não instaladas)
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:3000

# 4. Build de produção (verificar erros antes de deploy)
npm run build

# 5. Verificar types
npx tsc --noEmit
```

---

*Documento gerado em: 2026-06-01*
*Versão: 1.0*
*Status: Aprovado para implementação*
