# QA Sprint 11H-3 - Home mobile cleanup

## Branch

- `sprint-11h3-home-mobile-cleanup`
- Base: `main` atualizada com Sprint 11H e Sprint 11H-2

## Arquivos alterados

- `app/page.tsx`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/season/TerritoryArtCard.tsx`
- `lib/navigation.ts`

## Nova ordem do menu mobile

O menu mobile foi reorganizado para reduzir peso visual e conduzir o atleta iniciante por entendimento antes da acao:

- `Comecar`: Como funciona, UR Play, Cadastro
- `Temporada`: Modalidades, Polos, Eventos, Ranking, Equipes
- `Evolucao`: Atletas, CT UR, Midia
- `Beneficios`: UR Market, Patrocinadores, Quadras
- `Apoio`: Regulamento, Ecossistema

Alteracoes aplicadas:

- Grupo separado `Participacao` removido.
- `Modalidades` e `Polos` incorporados em `Temporada`.
- Painel mobile compactado com menor espacamento vertical, preservando area de toque.
- Menu continua fechando ao clicar em link.
- Painel continua iniciando logo abaixo do header em mobile.

## Home limpa e compactada

A Home foi reduzida para seguir a jornada essencial:

1. Hero
2. Como funciona
3. Modalidades
4. Polos
5. Proximo passo
6. Evolucao
7. Beneficios
8. CTA final
9. Footer

Secoes removidas ou compactadas:

- Hero teve texto de apoio reduzido e manteve apenas as metricas compactas `3 Polos`, `4 Eventos` e `2 Modalidades`.
- `Como funciona` virou 3 cards curtos.
- `Modalidades` ficou restrita a 2 cards.
- `Proximo passo` virou bloco compacto com 4 entradas diretas.
- `Evolucao` foi reduzida para 3 cards: Ranking, Eventos e Midia.
- `Beneficios` foi reduzida para 3 cards: UR Coins, Recompensas e Parceiros.
- A secao grande de `Apoio` foi removida da Home; apoio fica concentrado no menu/footer.

## Hero

- Headline preservada: `Escolha seu primeiro passo no UR.`
- Subheadline aplicada: `Entenda como funciona a jornada, escolha sua modalidade, conheca os polos e comece no seu ritmo.`
- CTA primario: `Como funciona`
- CTA secundario: `Fazer cadastro`

A Home nao voltou para `Quem manda na regiao?` e nao inicia com `Entrar na temporada` como primeiro contato.

## Modalidades

Confirmacao: a Home exibe somente:

- `Dupla`
- `Quarteto`

Copy aplicada:

- `Dupla`: Entrada simples, dinamica e ideal para comecar a construir ritmo.
- `Quarteto`: Formato coletivo para quem quer jogar em grupo e representar uma formacao.

## Polos

Os polos continuam com destaque visual, area reservada para imagem, escudo/monograma, texto curto e CTA `Ver polo`.

Polos exibidos:

- `Belo Horizonte`: Polo central para entrada, jogos e evolucao da comunidade UR.
- `Betim`: Polo em expansao para atletas que querem comecar e ganhar ritmo.
- `Contagem`: Polo estrategico para fortalecer equipes, eventos e presenca regional.

O card destacado de polo foi compactado em altura para reduzir a sensacao de pagina longa sem remover area visual.

## Beneficios

Beneficios permanecem como consequencia da jornada, nao como promessa principal.

Cards finais:

- `UR Coins`: Camada de engajamento conforme criterios oficiais.
- `Recompensas`: Reconhecimento sujeito a regras e disponibilidade.
- `Parceiros`: Produtos, servicos e ativacoes com validacao.

## Footer

O footer mobile manteve o accordion e foi compactado:

- Texto institucional reduzido.
- Grupos com menor altura percebida.
- Links de apoio preservados sem transformar o footer em uma segunda navegacao pesada.

## Correcoes de abertura e deslocamento

Foi validado que a Home abre no topo real da pagina:

- `scrollY` inicial em `/`: `0`
- Ao abrir e fechar o menu mobile, a pagina permaneceu em `scrollY: 0`
- O painel mobile abriu com `panelTop: 72`, consistente com a altura do header.

## QA responsivo

Arquivo de evidencia:

- `output/playwright/sprint-11h3-home-mobile-cleanup-summary.json`

Screenshots gerados:

- `output/playwright/sprint-11h3-home-390x844.png`
- `output/playwright/sprint-11h3-home-430x932.png`
- `output/playwright/sprint-11h3-home-768x1024.png`
- `output/playwright/sprint-11h3-home-1366x768.png`
- `output/playwright/sprint-11h3-menu-390x844.png`

Rotas testadas:

- `/`
- `/equipes`
- `/temporada`
- `/ur-play`
- `/cadastro`
- `/ranking`
- `/eventos`
- `/ur-market`

Viewports testados:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Resultados:

- Sem overflow horizontal nas rotas e viewports testados.
- Menu mobile abre e fecha.
- Menu mobile ficou mais curto e organizado.
- Home abre no topo correto.
- Home nao apresenta secao grande de apoio.
- Modalidades exibem apenas `Dupla` e `Quarteto`.
- Polos exibem `Belo Horizonte`, `Betim` e `Contagem` com CTA `Ver polo`.
- Beneficios aparecem como bloco curto e consequencia da jornada.
- Desktop preserva nav visivel e nao exibe hamburger.
- Nenhum erro de console registrado pelo script.

## Validacao tecnica

- `npm.cmd run lint`: aprovado, mantendo apenas warnings existentes de fonte customizada em `app/layout.tsx` e uso de `<img>` em `app/page.tsx`.
- `npx.cmd tsc --noEmit`: aprovado.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: aprovado.

## Escopo preservado

- Backend nao alterado.
- Formularios nao alterados.
- Logica de cadastro nao alterada.
- Supabase, Apps Script, Sheets, CRM, endpoints, hashes e nomes de campos nao alterados.
- `next-env.d.ts` restaurado e nao incluido no commit.
- Arquivos `.patch` nao incluidos no commit.
- Home da Temporada 1 preservada como pagina principal.
- Menu mobile funcional preservado.
- Desktop sem regressao nos breakpoints testados.
