# QA Sprint 11E-Fix 2 - Menu hamburguer mobile

## Linha de trabalho

- Branch: `sprint-11e-fix2-mobile-hamburger-real`
- Base: `sprint-11e-fix-mobile-hamburger`
- Commit base: `9d905fa Corrige clique do menu hamburguer mobile`
- Commit da Sprint: gerado ao final desta execucao

## Arquivos alterados

- `components/layout/header.tsx`
- `docs/qa-sprint-11e-fix2-mobile-hamburger-real.md`

Arquivos inspecionados e preservados sem alteracao:

- `lib/navigation.ts`
- `app/globals.css`

## Causa real encontrada

O Header ja era um client component e o botao visual existia, mas o hotfix anterior deixou o fluxo do toque dependente de uma combinacao fragil entre `onPointerUp`, `preventDefault`, `useRef` de guarda contra duplo toggle e `onClick` de fallback. Esse caminho pode falhar em celular real porque o evento pointer pode consumir o gesto, impedir a sintese do click ou acionar a guarda em ordem diferente da esperada.

Tambem havia risco estrutural por manter o painel mobile dentro do fluxo do header sticky. Mesmo sem overlay global confirmado, isso deixava o menu mais sensivel a z-index, overflow e empilhamento de conteudo da Home.

## Diagnostico tecnico

- O botao nao esta dentro de `Link`.
- Nao foi identificado wrapper global cobrindo o botao.
- O botao agora recebe `pointer-events-auto`, `touch-manipulation`, `relative` e `z-[100]`.
- O estado `mobileMenuOpen` muda por um `onClick` simples: `setMobileMenuOpen((value) => !value)`.
- O menu e renderizado apenas quando `mobileMenuOpen === true`.
- O painel agora e `fixed`, fora de containers com possivel `overflow-hidden`.
- O painel abre em `top-[72px]`, com `z-[90]`, abaixo do header `z-[100]` e acima do conteudo.
- Nao ha backdrop sobre o botao.
- O render mobile usa o painel em telas abaixo de `2xl`, mantendo o desktop existente.
- O clique em links do painel fecha o menu.

## Correcao aplicada

- Reimplementado o menu mobile do Header de forma simples e robusta.
- Mantido `"use client"` no topo de `components/layout/header.tsx`.
- Mantido `useState` para controlar `mobileMenuOpen`.
- Removidos `onPointerUp`, `preventDefault`, `PointerEvent` e `useRef` de guarda.
- Botao hamburguer convertido para caminho unico de toggle via `onClick`.
- Adicionados `aria-controls`, `aria-expanded`, `aria-label` e `type="button"`.
- Adicionados `data-testid="mobile-menu-button"`, `data-testid="mobile-menu-close"` e `data-testid="mobile-menu-panel"`.
- Painel mobile renderizado como `fixed`, com `max-h-[calc(100dvh-72px)]`, `overflow-y-auto`, `overscroll-contain`, `pb-[120px]` e `pointer-events-auto`.
- Links do menu fecham o painel ao clicar.
- Desktop preservado visualmente.

## Evidencia Playwright

Servidor local usado no teste:

- `http://127.0.0.1:3020`

Script executado em Chromium com:

- `hasTouch: true`
- `isMobile: true`
- `touchscreen.tap`

Para cada rota e viewport, o teste:

- abriu a rota;
- localizou `data-testid="mobile-menu-button"`;
- tocou no botao;
- confirmou `data-testid="mobile-menu-panel"` visivel;
- confirmou `aria-expanded="true"` no botao de fechar;
- confirmou pelo menos 5 links visiveis;
- clicou no link `/ur-play`;
- confirmou href/navegacao para `/ur-play`;
- confirmou fechamento do painel apos clique em link;
- validou o CTA principal `/cadastro#atleta`;
- voltou para `/`;
- reabriu o menu;
- tocou em `data-testid="mobile-menu-close"`;
- confirmou remocao do painel;
- confirmou ausencia de overflow horizontal.

Resultado:

- 15 cenarios testados.
- 15 cenarios aprovados.
- 3 checks adicionais do CTA `/cadastro#atleta` aprovados.
- 0 falhas.
- Cada painel exibiu 18 links visiveis.
- Relatorio JSON gerado em `output/playwright/sprint-11e-fix2-mobile-hamburger-real-results.json`.
- Screenshots gerados em `output/playwright/sprint-11e-fix2-menu-390x844.png`, `output/playwright/sprint-11e-fix2-menu-430x932.png` e `output/playwright/sprint-11e-fix2-menu-768x1024.png`.

## Viewports testados

- `390x844`
- `430x932`
- `768x1024`

## Rotas testadas

- `/`
- `/temporada`
- `/ur-play`
- `/ranking`
- `/cadastro`

## Validacao tecnica

- `npm.cmd run lint`: passou com 0 erros e 4 warnings ja existentes.
- `npx.cmd tsc --noEmit`: passou.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: passou.
- Build gerou 22 rotas estaticas.

## Escopo preservado

- Home nao alterada.
- Conteudo das paginas nao alterado.
- Layout global fora do header nao alterado.
- Formularios nao alterados.
- Backend nao alterado.
- CRM nao alterado.
- Apps Script nao alterado.
- Google Sheets nao alterado.
- Supabase nao alterado.
- Endpoints nao alterados.
- Nomes de campos nao alterados.
- Hashes nao alterados.
- Patches antigos nao aplicados e nao adicionados ao commit.
