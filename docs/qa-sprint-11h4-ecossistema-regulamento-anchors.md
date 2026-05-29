# QA Sprint 11H-4 - Ecossistema, regulamento e ancoras mobile

## Branch

- `sprint-11h4-ecossistema-regulamento-anchors`
- Base: `origin/main` com Sprint 11H-3 mergeada (`23ccb00`)

## Arquivos alterados

- `app/page.tsx`
- `app/globals.css`
- `lib/navigation.ts`

## Nova ordem da Home

A Home foi reorganizada para apresentar mais cedo o valor estrategico do Ultimate Rivals:

1. Hero
2. Como funciona
3. UR Play
4. Ecossistema UR
5. Modalidades
6. Polos
7. Proximo passo
8. Evolucao
9. Beneficios
10. Regulamento e apoio
11. CTA final
12. Footer

Confirmacoes:

- A Home continua com `Escolha seu primeiro passo no UR.` como entrada principal.
- A Home nao voltou para `Quem manda na regiao?`.
- A Home nao inicia com `Entrar na temporada`.
- Modalidades continuam limitadas a `Dupla` e `Quarteto`.
- Beneficios continuam compactos e posicionados como consequencia da jornada.

## UR Play reforcado

Foi criado um bloco compacto `UR Play e a porta de entrada` logo apos `Como funciona`.

O bloco responde:

- o que e: entrada inicial para participar;
- para quem serve: atleta que precisa comecar, ser observado e entender seu nivel;
- por que comecar por ele: permite formar historico antes de avancar para etapas maiores.

Cards adicionados:

- `Jogar`
- `Ser observado`
- `Comecar historico`

CTA:

- `Conhecer UR Play` -> `/ur-play`

## Ecossistema UR

Foi criado o bloco `O ecossistema UR organiza sua jornada` logo apos UR Play.

Copy aplicada:

`O Ultimate Rivals conecta jogos, ranking, niveis, equipes, midia, polos, beneficios e desenvolvimento para que o atleta tenha caminho, historico e clareza.`

Cards compactos:

- `Caminho claro`
- `Nivel mais justo`
- `Historico do atleta`
- `Visibilidade`
- `Comunidade`
- `Oportunidades`

CTA:

- `Entender o ecossistema` -> `/ecossistema`

## Regulamento e apoio

Foi criado um bloco compacto perto do final da Home para posicionar regra como seguranca e confianca.

Titulo:

- `Regras claras para jogar com seguranca.`

Cards:

- `Regulamento`: Entenda regras, criterios e funcionamento oficial.
- `Fair Play`: Postura, respeito e conduta fazem parte da evolucao.
- `Criterios`: Pontuacao, presenca e participacao seguem regras claras.

CTA:

- `Ver regulamento` -> `/regulamento`

## Nova ordem do menu mobile

O menu mobile foi atualizado para dar mais forca ao Ecossistema e ao Regulamento:

- `Comecar`: Como funciona, UR Play, Cadastro
- `Ecossistema`: Visao geral, Modalidades, Polos, Equipes
- `Temporada`: Eventos, Ranking, Regulamento
- `Evolucao`: Atletas, CT UR, Midia
- `Beneficios`: UR Market, Patrocinadores, Quadras

Confirmacoes:

- Ecossistema aparece cedo.
- Regulamento fica dentro de Temporada.
- O grupo `Participacao` nao voltou.
- O menu continua compacto, com 5 grupos e 16 links.
- Em mobile, o menu abre, fecha e os links de ancora fecham o painel apos clique.

## Solucao para ancoras e scroll

Causa tecnica identificada:

- A Home usava `scroll-mt-24` nas secoes.
- O CSS global tambem usava `scroll-padding-top`.
- As duas compensacoes eram somadas pelo navegador em navegacao por hash, empurrando as secoes abaixo do ponto ideal.

Correcao aplicada:

- As secoes da Home agora usam `scroll-mt-0`.
- O `scroll-padding-top` global foi ajustado para `80px` no mobile e `96px` em tablet/desktop.
- Aliases internos como `#territorios` e `#premiacoes` tambem deixaram de somar `scroll-mt-24`.

Resultado validado:

- `Como funciona`, `UR Play`, `Ecossistema`, `Modalidades`, `Polos` e `Regulamento` abrem com o titulo visivel abaixo do header.
- O header nao cobre o titulo.
- A pagina nao cai no meio do card.
- O menu fecha depois do clique.
- Sem salto de scroll ao abrir/fechar menu.

## QA responsivo

Arquivo de evidencia:

- `output/playwright/sprint-11h4-ecossistema-regulamento-anchors-summary.json`

Screenshots:

- `output/playwright/sprint-11h4-home-390x844.png`
- `output/playwright/sprint-11h4-menu-390x844.png`

Rotas testadas:

- `/`
- `/ecossistema`
- `/regulamento`
- `/ur-play`
- `/cadastro`
- `/ranking`
- `/eventos`

Viewports testados:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Testes de ancora executados na Home:

- `Como funciona`
- `UR Play`
- `Ecossistema`
- `Modalidades`
- `Polos`
- `Regulamento`

Resultados principais:

- 35 checagens de rota aprovadas.
- 30 checagens de ancora aprovadas.
- Sem overflow horizontal.
- Menu mobile abre e fecha nos viewports mobile/tablet.
- Desktop preserva navegacao principal e nao exibe hamburger.
- Nenhum erro de console registrado no QA production.
- Home abre no topo correto (`scrollY: 0`).

Observacao de ambiente:

- O QA visual foi executado em build production com `npm.cmd run build` + `npm.cmd run start`, na porta local `3035`.

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
- Menu mobile, footer accordion e desktop preservados.
