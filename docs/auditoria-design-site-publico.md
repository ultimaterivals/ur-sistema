# Auditoria de Design e Arquitetura do Site Público UR

Data da auditoria: 2026-05-18

Escopo: revisão do site público atual do Ultimate Rivals antes de lançamento oficial, comparando rotas, navegação, componentes, SEO, narrativa e design com os documentos oficiais do ecossistema.

Fora do escopo desta etapa: Apps Script, CRM, formulários, backend, Supabase, lógica de captação, Tally fallback e integração Google Sheets.

## Referências Consultadas

- `Design System Oficial Ur.pdf`
- `Mapa Componentes Site Ur.pdf`
- `Arquitetura Estrutura Site Ur.pdf`
- `Arquitetura Estrutura Site Ur comp.pdf`
- `UR_Arquitetura_Site_Claude.docx`
- `Documento 00 - Arquitetura Oficial Do Ecossistema Ultimate Rivals.pdf`
- `Resumo Executivo Plano UR.pdf`
- `Ecossistema Ultimate Rivals - Pilares e Estratégias.pdf`
- `Prompt Mestre Codex Site Ur Mvp (1).pdf`
- `UR_Documento_Institucional_Mestre.pdf`
- Código atual em `app`, `components`, `lib`, `public` e `docs`

## Critérios Oficiais Usados na Auditoria

Os documentos de referência convergem em alguns critérios centrais:

- O Ultimate Rivals deve ser apresentado como ecossistema esportivo, não como torneio isolado.
- A jornada começa pelo UR Play, passa por nivelamento, ranking, temporada, equipes, mídia, recompensas, CT UR, quadras, patrocinadores e comunidade.
- O site público precisa ser SEO-first, indexável, com páginas públicas claras e URLs semânticas.
- Cada página deve ter uma ação principal dominante.
- O design precisa manter preto como base, dourado como destaque premium e branco como contraste.
- O visual deve parecer liga, ranking, game, mídia e espetáculo, sem cara de site amador ou blog genérico.
- Componentes vêm antes de páginas: cards, hero, ranking preview, CTA, FAQ, timeline, footer e blocos esportivos devem ser reutilizáveis.
- Mobile precisa ser forte, com CTA acessível e leitura rápida.
- Header e footer devem organizar o ecossistema, páginas institucionais, participação, negócios, comunidade e suporte.
- Páginas legais e de governança precisam existir antes de divulgação pública ampla.

## Diagnóstico Geral

O site atual já tem uma base forte para MVP público: Home completa, páginas internas extensas, Design System preto/dourado/branco consistente, CTAs apontando para `/cadastro`, captação operacional e SEO básico por página.

O principal ponto de atenção não é falta de volume de conteúdo. O risco maior é o site parecer em pré-construção por excesso de placeholders visíveis e por algumas contradições de copy herdadas de fases anteriores, como páginas internas dizendo que não há cadastro funcional enquanto `/cadastro` já possui captação real via Google Apps Script e Google Sheets.

Também há uma lacuna arquitetural: documentos oficiais indicam páginas públicas próprias para Ecossistema, CT UR, Mídia, Quadras, Regulamento, Privacidade, Termos e Contato. Hoje parte disso existe apenas como seção da Home ou link para `/cadastro`. Para lançamento oficial, essas páginas devem existir, mesmo que com conteúdo enxuto e sem dados inventados.

Resumo executivo:

- Fundação visual: forte.
- Fundação técnica: coerente para MVP.
- Narrativa de ecossistema: presente na Home e nas páginas internas.
- Conversão: presente e centralizada em `/cadastro`.
- SEO básico: presente nas páginas atuais.
- Arquitetura pública: incompleta para lançamento.
- Governança/legal: pendente.
- Risco de percepção: alto se os placeholders não forem refinados.

## Inventário das Páginas Atuais

| Página | Status para lançamento | Diagnóstico |
| --- | --- | --- |
| `/` | Quase pronta, revisar copy final | Explica o UR como ecossistema, não como torneio. Tem os 20 blocos previstos, Hero forte, ranking preview, temporada, mídia, patrocinadores, quadras, eventos, comunidade, FAQ e CTA final. Precisa reduzir placeholders de lançamento e transformar CT UR, Mídia e Quadras em páginas próprias. |
| `/atletas` | Precisa revisão pontual | Página estratégica e alinhada à Mentalidade Hunter. Tem persona clara e CTA para cadastro. Ponto crítico: ainda há textos como "Não há cadastro funcional" e "Cadastro será liberado após validação", que conflitam com a captação real atual. |
| `/ur-play` | Precisa revisão pontual | Cumpre bem o papel de porta de entrada e deixa claro que UR Play não é rachão. Ponto crítico: mantém formulário visual e copy de etapa anterior, com "campo visual em formação" e "Registrar interesse visual", apesar de existir `/cadastro`. |
| `/ranking` | Boa para pré-lançamento, revisar densidade | Apresenta ranking como narrativa da temporada, não só tabela. Não inventa atletas, pontos ou posições. Ponto de melhoria: reduzir repetição de "ranking em formação" e criar uma política visual mais elegante para ausência de dados reais. |
| `/equipes` | Precisa revisão pontual | Boa narrativa de equipe como ativo competitivo, midiático e comercial. Ponto crítico: formulário visual e textos de "registro será liberado" conflitam com `/cadastro#equipe`. |
| `/temporada` | Boa para pré-lançamento | Explica ciclo trimestral, entrada pelo UR Play, ranking ativo, eventos e virada de ranking. Precisa apenas amarrar melhor com a futura página de regulamento e com eventos confirmados quando existirem. |
| `/ur-market` | Precisa revisão de percepção | Explica a economia e recompensas sem inventar produtos, marcas ou valores. Porém é uma das páginas mais expostas a sensação de "tudo em formação". Precisa transformar placeholders em linguagem de pré-lançamento e vitrine conceitual mais forte. |
| `/patrocinadores` | Forte, mas incompleta sem materiais de suporte | Tem boa proposta comercial: marca entra na jornada do atleta, não compra só logo. Precisa de página de contato, mídia kit ou fluxo comercial claro, além de reduzir "formulário visual" para não parecer simulação. |
| `/eventos` | Boa para pré-lançamento, revisar agenda | Explica evento como função dentro da temporada, não agenda solta. Não inventa datas. Para lançamento, a agenda placeholder precisa virar "pré-agenda" ou "interesse aberto" com CTA mais claro. |
| `/cadastro` | Operacional, revisar copy de estado | É a central de conversão correta. Possui seleção por perfil e formulários próprios. Ponto crítico: ainda há textos condicionais sobre `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` e fallback que são úteis tecnicamente, mas podem enfraquecer a experiência pública. |

## Páginas Prontas ou Quase Prontas

Considerando que "pronta" significa boa base de conteúdo e design para MVP, mas ainda sem afirmar lançamento oficial:

- `/`
- `/ranking`
- `/temporada`
- `/eventos`
- `/patrocinadores`
- `/cadastro`

Essas páginas têm objetivo claro, SEO básico e estrutura visual consistente. Ainda assim, todas devem passar por uma última revisão de copy de lançamento.

## Páginas que Precisam Revisão Antes de Lançamento

- `/atletas`
  - Remover ou atualizar textos que dizem que não há cadastro funcional.
  - Reforçar que cadastro existe, mas validação operacional continua obrigatória.

- `/ur-play`
  - Substituir o bloco de formulário visual por CTA para `/cadastro#atleta` ou por um bloco explicando o fluxo real.
  - Trocar "Registrar interesse visual" por linguagem de ação real.

- `/equipes`
  - Substituir "pré-registro visual" e "campo visual em formação".
  - Direcionar claramente para `/cadastro#equipe`.

- `/ur-market`
  - Melhorar vitrine conceitual sem inventar produtos, marcas ou valores.
  - Reduzir repetição de "market em formação" e "benefícios em formação".

- `/patrocinadores`
  - Atualizar bloco de interesse comercial para refletir o fluxo real por `/cadastro#patrocinador`.
  - Preparar caminho para mídia kit ou contato comercial oficial.

- `/cadastro`
  - Ajustar copy pública para não parecer que a integração ainda é incerta.
  - Manter aviso de validação operacional e Tally como fallback, mas em posição secundária.

## Páginas Faltantes para MVP Público

As páginas abaixo aparecem na arquitetura oficial ou no mapa de componentes, mas ainda não existem como rotas públicas:

| Página faltante | Prioridade | Motivo |
| --- | --- | --- |
| `/ecossistema` ou `/o-ecossistema` | Alta | É a principal página explicativa para atletas, equipes, patrocinadores, quadras e comunidade. Hoje o tema existe na Home, mas não como página compartilhável e indexável. |
| `/ct-ur` | Alta | CT UR é pilar estratégico de desenvolvimento. Hoje aparece em seções, mas não tem página própria. |
| `/midia` | Alta | Mídia é ativo central para atletas, patrocinadores e comunidade. Hoje aparece como seção da Home. |
| `/quadras-parceiras` ou `/quadras` | Alta | Quadras são base operacional e comercial do ecossistema. Hoje o caminho vai para cadastro de quadra, mas falta página de proposta. |
| `/regulamento` | Alta | Necessário para confiança, governança e clareza antes de operação pública. Pode iniciar como regulamento geral em formação, sem regras finais inventadas. |
| `/privacidade` | Alta | Obrigatório para captação real de dados pessoais e confiança pública. |
| `/termos` | Alta | Obrigatório para captação, uso do site, participação e limitações do MVP. |
| `/contato` | Média/alta | Necessário para suporte, imprensa, parcerias e dúvidas fora do cadastro segmentado. |

## Navegação, Header e Footer

### Header

Estado atual:

- Desktop: Atletas, UR Play, Ranking, Equipes, UR Market, Patrocinadores.
- CTAs: Entrar no UR e Patrocinar.
- Mobile: Atletas, Sou atleta, Tenho equipe, Quero patrocinar, Tenho quadra, Ver ranking, Eventos, UR Market.

Pontos positivos:

- CTA principal está visível.
- O menu não está excessivamente carregado no desktop.
- Mobile prioriza conversão e caminhos por perfil.

Pontos a revisar:

- A arquitetura oficial recomenda presença de Ecossistema, Temporada, Ranking, CT UR, Mídia e Patrocinadores no menu público.
- Desktop não mostra Temporada nem Eventos.
- Mobile mostra Eventos, mas não mostra Patrocinadores como página principal nem Temporada.
- Não há acesso direto a Contato, Regulamento, Privacidade ou Termos.
- "Ecossistema" hoje existe como âncora da Home, não como rota pública.

Recomendação:

- Antes do lançamento, criar uma hierarquia de menu mais editorial:
  - Ecossistema
  - UR Play
  - Ranking
  - Temporada
  - Atletas
  - Patrocinadores
  - Entrar no UR
- Mover itens secundários para menu mobile expandido e footer:
  - Equipes
  - UR Market
  - Eventos
  - CT UR
  - Mídia
  - Quadras
  - Contato

### Footer

Pontos positivos:

- Reforça o posicionamento de ecossistema.
- Organiza links por Ultimate Rivals, Participar, Negócios e Comunidade.
- Usa logo e estética consistente.

Pontos a revisar:

- Links legais no rodapé são texto estático, não links reais.
- "Mídia", "Blog" e "YouTube" apontam para âncoras ou cadastro, não páginas/canais finais.
- Falta Contato.
- Falta Política de Privacidade e Termos como rotas reais.
- Falta Regulamento como página real.

## SEO, Sitemap e Robots

Estado atual:

- `metadataBase` usa `https://ultimaterivals.org`.
- `robots.ts` aponta para `https://ultimaterivals.org/sitemap.xml`.
- `sitemap.ts` lista as rotas atuais.
- Todas as páginas existentes possuem `title` e `description`.
- O HTML está em `pt-BR`.

Pontos positivos:

- SEO básico está presente.
- Sitemap e robots estão coerentes com as páginas atuais.
- Build usa Webpack explicitamente, o que estabiliza o ambiente Windows.

Pontos a revisar:

- Páginas faltantes não aparecem no sitemap porque ainda não existem.
- Não há canonical explícito por página.
- Open Graph é global no layout; páginas internas poderiam ter OG mais específico.
- Falta estrutura de páginas legais, o que é crítico para captação pública.
- O princípio "SEO-first em tudo que é público" pede URLs próprias para pilares como Ecossistema, CT UR, Mídia e Quadras.

## Componentes Obrigatórios do MVP

| Componente | Estado atual | Observação |
| --- | --- | --- |
| Hero com CTA | Presente | Forte na Home e páginas internas. |
| Card de problema | Presente | `ProblemCard` usado na Home. |
| Card de pilar | Presente | `PillarCard` usado na Home. |
| CTA segmentado | Presente, mas não padronizado como componente único | Existe em `/cadastro` e Home por composição de cards e botões. |
| Timeline | Presente | `JourneyStep`, `SeasonTimeline` e timelines internas. |
| Ranking preview | Presente | Home e páginas de ranking, com placeholders corretos. |
| Card de atleta | Parcial | Existem cards visuais na página Atletas, mas falta componente reutilizável consolidado para futuro perfil público. |
| Card de equipe | Parcial | Existe preview em Equipes, mas falta componente reutilizável de equipe. |
| Card de evento | Presente | `EventCard` na Home e cards internos em Eventos. |
| Card de recompensa | Parcial | Presente como cards de recompensas, mas não como componente dedicado reutilizável. |
| Card de produto UR Market | Parcial | Vitrine existe, mas ainda conceitual e sem componente de produto dedicado. |
| Card de patrocinador | Parcial | Patrocinadores tem cards comerciais, mas falta card padrão para patrocinador/ativação futura. |
| FAQ | Presente | Todas as páginas principais têm FAQ ou equivalente. |
| CTA final | Presente | Home tem componente dedicado; internas possuem seções finais equivalentes. |
| Footer | Presente | Global e consistente. |

## Consistência Visual do Design System UR

Pontos fortes:

- Preto é base dominante.
- Dourado funciona como destaque premium.
- Branco e off-white dão contraste.
- Cards premium, badges e CTAs seguem a estética de liga/ranking/game.
- Tipografia com títulos condensados cria personalidade esportiva.
- As páginas não parecem templates genéricos.

Inconsistências e riscos:

- Páginas internas usam estruturas parecidas: Hero + muitas seções com `SectionHeader` + 3 cards. Isso cria repetição visual.
- Algumas páginas parecem "documento bonito" em vez de experiência de plataforma, especialmente quando acumulam muitos blocos explicativos.
- O excesso de placeholders visíveis reduz a percepção de produto pronto.
- Falta mais variação visual entre páginas de público diferente: atleta, equipe, patrocinador, quadra e comunidade deveriam ter ritmo próprio.
- CT UR, Mídia e Quadras têm peso estratégico, mas aparecem apenas como seções ou caminhos de cadastro.
- Ainda há pouco uso de assets visuais esportivos reais ou gerados. O visual é forte, mas depende muito de cards e texto.

## Mobile e Responsividade

Pontos positivos:

- O CSS global usa `overflow-x: hidden`.
- Botões mobile são largos e acessíveis.
- Header mobile tem CTA principal fixo na área visível.
- Ranking preview evita tabela larga e usa cards.
- Cards têm `min-w-0` e grids responsivos em boa parte da base.

Pontos de atenção:

- Páginas internas são longas e densas; no mobile, isso pode cansar antes do CTA final.
- Algumas páginas têm CTAs múltiplos com peso parecido, o que pode diluir a ação principal.
- Formulários e cards de `/cadastro` são bons, mas a copy técnica sobre endpoint/fallback pode gerar insegurança no usuário comum.
- Menu mobile é conversion-first, mas não cobre toda a arquitetura pública.

## Placeholders e Dados Reais

Não foram identificados atletas, equipes, datas, valores, marcas, posições, pontuações ou eventos reais inventados nas páginas públicas atuais.

Os placeholders estão explícitos, o que protege o MVP de promessas falsas. Porém, para lançamento oficial, a quantidade e a forma como aparecem enfraquecem a percepção de maturidade.

Placeholders úteis:

- `ranking em formação`
- `temporada em formação`
- `agenda em formação`
- `polo em formação`
- `dados reais entram após validação`
- `sem atletas, números ou posições reais nesta etapa`

Placeholders que devem ser reescritos antes do lançamento:

- `campo visual em formação`
- `Registrar interesse visual`
- `Não há cadastro funcional`
- `sem envio real`
- `cadastro será liberado após validação`
- `formulário visual`

Recomendação de linguagem:

- Trocar placeholders técnicos por linguagem pública de pré-lançamento:
  - "Cadastro de interesse aberto"
  - "Operação em validação"
  - "Agenda oficial será publicada após confirmação"
  - "Dados públicos entram apenas após validação"
  - "Pré-lançamento operacional"

## Inconsistências de Conteúdo e Conversão

Principais inconsistências:

1. `/cadastro` já é central real de captação, mas páginas como `/atletas`, `/ur-play`, `/equipes` e `/patrocinadores` ainda dizem que há formulário apenas visual ou sem envio real.
2. Algumas CTAs ainda usam "visual", termo interno de protótipo que não deve aparecer no lançamento.
3. `/cadastro` menciona configuração de variável pública e fallback de forma técnica. Isso é correto para documentação, mas fraco para público final.
4. Header e footer não refletem todas as páginas estratégicas do ecossistema.
5. Páginas legais estão ausentes apesar de haver captação real de dados.

## Riscos Antes do Lançamento Oficial

| Risco | Severidade | Impacto |
| --- | --- | --- |
| Ausência de Privacidade, Termos e Regulamento | Alta | Captação real de dados sem páginas legais públicas reduz confiança e aumenta risco operacional. |
| Copy contraditória sobre cadastro funcional | Alta | Usuário pode achar que o site ainda é maquete, mesmo com formulário real. |
| Excesso de placeholders técnicos | Alta | Enfraquece percepção premium e maturidade do MVP. |
| Páginas estratégicas ausentes | Alta | Ecossistema, CT UR, Mídia e Quadras ficam difíceis de compartilhar e indexar. |
| Header/footer incompletos | Média | Usuário não entende todo o mapa do ecossistema pelo menu. |
| SEO limitado a páginas atuais | Média | O site perde tráfego orgânico para pilares importantes. |
| Repetição visual em páginas internas | Média | Página parece longa e pesada no mobile. |
| Falta de contato institucional | Média | Patrocinadores, quadras e imprensa podem não encontrar um caminho direto fora do cadastro. |

## Ordem Recomendada de Correção

1. Criar páginas legais e institucionais mínimas:
   - `/privacidade`
   - `/termos`
   - `/regulamento`
   - `/contato`

2. Criar página de arquitetura pública:
   - `/ecossistema` ou `/o-ecossistema`

3. Criar páginas dos pilares ainda sem rota:
   - `/ct-ur`
   - `/midia`
   - `/quadras-parceiras` ou `/quadras`

4. Revisar copy de conversão:
   - Remover "formulário visual", "sem envio real" e "não há cadastro funcional".
   - Manter aviso de validação operacional.
   - Centralizar cadastro real em `/cadastro`.

5. Atualizar header, footer e sitemap:
   - Refletir páginas novas.
   - Transformar links legais do footer em links reais.
   - Ajustar menu desktop e mobile para arquitetura oficial.

6. Refinar placeholders:
   - Manter dados reais protegidos.
   - Trocar excesso de "em formação" por linguagem de pré-lançamento mais premium.

7. Variar ritmo visual das páginas internas:
   - Mais painéis, comparativos, fluxos, previews e CTAs segmentados.
   - Menos sequência de título + texto + 3 cards.

8. QA mobile e conversão:
   - Conferir todos os CTAs.
   - Conferir ausência de overflow.
   - Conferir leitura em 375px, tablet e desktop comum.

9. QA SEO final:
   - Metadata por página.
   - Open Graph por pilar.
   - Sitemap completo.
   - Robots.
   - Canonicals.

## Plano de Sprint para Concluir o Design Público

### Sprint 1 - Segurança de lançamento e governança

Objetivo: deixar o site apto para captação pública sem buracos legais ou inconsistências críticas.

Entregas:

- `/privacidade`
- `/termos`
- `/regulamento`
- `/contato`
- Footer com links legais reais.
- Copy de `/cadastro` ajustada para operação real.
- Remoção de "formulário visual" nas páginas internas.

Critério de aceite:

- Usuário consegue entender como os dados serão usados.
- Cadastro real parece oficial, não experimental.
- Nenhuma página pública contradiz a captação real.

### Sprint 2 - Arquitetura pública do ecossistema

Objetivo: transformar pilares estratégicos em páginas públicas compartilháveis.

Entregas:

- `/ecossistema`
- `/ct-ur`
- `/midia`
- `/quadras-parceiras` ou `/quadras`
- Header e sitemap atualizados.
- Footer reorganizado.

Critério de aceite:

- O site explica o UR como ecossistema completo em rotas próprias.
- Patrocinadores, quadras, atletas e mídia encontram caminho claro.

### Sprint 3 - Refinamento visual e componentes

Objetivo: reduzir repetição e fortalecer aparência de plataforma premium.

Entregas:

- Card de atleta reutilizável.
- Card de equipe reutilizável.
- Card de patrocinador/ativação.
- Card de recompensa/produto UR Market.
- CTA segmentado padronizado.
- Revisão de ritmo visual das páginas internas.

Critério de aceite:

- Cada página tem identidade própria, sem parecer repetição da anterior.
- Cards e CTAs mantêm consistência do Design System.

### Sprint 4 - QA final pré-lançamento

Objetivo: validar site completo antes de divulgação pública.

Entregas:

- QA desktop, tablet e mobile.
- QA de links e CTAs.
- QA SEO.
- QA de sitemap/robots.
- QA de placeholders.
- QA de captação pelo site.

Critério de aceite:

- Nenhum link crítico quebrado.
- Nenhum CTA confuso.
- Nenhum dado real inventado.
- Nenhum placeholder técnico aparecendo como protótipo.
- Site comunica ecossistema, operação em validação e caminho de entrada.

## Checklist de Pronto para Lançamento

### Arquitetura

- [ ] `/ecossistema` publicado.
- [ ] `/ct-ur` publicado.
- [ ] `/midia` publicado.
- [ ] `/quadras-parceiras` ou `/quadras` publicado.
- [ ] `/privacidade` publicado.
- [ ] `/termos` publicado.
- [ ] `/regulamento` publicado.
- [ ] `/contato` publicado.
- [ ] Header atualizado com arquitetura pública final.
- [ ] Footer atualizado com links reais.
- [ ] Sitemap atualizado com todas as páginas públicas.

### Conteúdo

- [ ] Home reforça ecossistema, não torneio.
- [ ] Cada página tem público-alvo e CTA principal claros.
- [ ] Copy não contradiz `/cadastro`.
- [ ] Textos técnicos de protótipo removidos.
- [ ] Placeholders mantidos apenas onde protegem contra dados falsos.
- [ ] Nenhum atleta, equipe, data, valor, marca, posição ou pontuação inventada.

### Design

- [ ] Preto, dourado e branco consistentes.
- [ ] Títulos internos menores que o Hero.
- [ ] Cards padronizados.
- [ ] CTAs com hierarquia clara.
- [ ] Páginas internas com ritmo visual variado.
- [ ] Mobile sem excesso de texto por dobra.
- [ ] Sem overflow horizontal.

### Conversão

- [ ] `/cadastro` é a central oficial de interesse.
- [ ] CTAs de atleta apontam para `/cadastro#atleta`.
- [ ] CTAs de equipe apontam para `/cadastro#equipe`.
- [ ] CTAs de patrocinador apontam para `/cadastro#patrocinador`.
- [ ] CTAs de quadra apontam para `/cadastro#quadra`.
- [ ] CTA de comunidade aponta para `/cadastro#comunidade`.
- [ ] Aviso de validação operacional continua claro.

### SEO e confiança

- [ ] Metadata revisada por página.
- [ ] Open Graph específico para páginas principais.
- [ ] Canonical definido quando necessário.
- [ ] Robots correto.
- [ ] Sitemap completo.
- [ ] Política de Privacidade e Termos acessíveis no footer.
- [ ] Regulamento Geral acessível.
- [ ] Contato institucional acessível.

## Conclusão

O site está tecnicamente e visualmente em um estágio forte de MVP, mas ainda não deve ser tratado como lançamento público oficial sem a próxima camada de arquitetura pública e governança.

O maior ganho imediato vem de três frentes:

1. Criar páginas legais e institucionais.
2. Criar páginas próprias para Ecossistema, CT UR, Mídia e Quadras.
3. Atualizar a copy das páginas internas para refletir que a captação real já existe, mantendo a validação operacional como regra.

Com isso, o site deixa de parecer "MVP em construção" e passa a parecer "plataforma em pré-lançamento operacional", que é uma posição muito mais forte para captação, patrocinadores, quadras e comunidade.
