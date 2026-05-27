# QA Sprint 11E-Fix - Menu hamburguer mobile

## Linha de trabalho

- Branch: `sprint-11e-fix-mobile-hamburger`
- Base: `sprint-11e-reconcile-content-home-temporada`
- Commit base: `d14f656 Reconcilia conteúdo histórico e mantém Temporada como Home oficial`
- Commit do hotfix: gerado ao final desta execução

## Arquivos alterados

- `components/layout/header.tsx`

Nenhum conteúdo de página, formulário, endpoint, campo, hash, CRM, Apps Script, Google Sheets ou Supabase foi alterado.

## Investigação

Arquivos verificados:

- `components/layout/header.tsx`
- `lib/navigation.ts`
- `app/globals.css`
- `app/layout.tsx`
- wrappers, z-index, overlays, elementos absolutos e `pointer-events`

Checklist:

- Header é client-side: sim, possui `"use client"`.
- Estado/onClick: sim, usa `useState`.
- Botão tem `type="button"`: sim.
- Botão não está dentro de `Link`: confirmado.
- Painel mobile é renderizado condicionalmente por estado: sim.
- Links mobile são links reais do Next: sim.
- Painel possui rolagem interna: sim, `max-h` e `overflow-y-auto`.
- Não foi identificado wrapper global cobrindo o botão.

## Causa encontrada

O botão dependia apenas do evento `onClick` para alternar o menu. Em ambiente desktop/sintético isso funcionava, mas em cenário mobile real o caminho de toque pode falhar ou ser atrasado por síntese de click do navegador. O header também usava `z-50`, suficiente para a maioria dos casos, mas sem prioridade explícita no botão/painel.

## Correção aplicada

- Adicionado tratamento direto de `onPointerUp` no botão mobile.
- Mantido `onClick` como fallback para acessibilidade e ativações não-pointer.
- Adicionado guard com `useRef` para evitar duplo toggle quando pointer e click são emitidos juntos.
- Adicionado `aria-controls="site-mobile-menu"` e `aria-haspopup="menu"`.
- Adicionado `id="site-mobile-menu"` no painel.
- Elevado o header para `z-[100]`.
- Elevado o botão para `z-[120]`.
- Elevado o painel para `z-[110]`.
- Declarado `pointer-events-auto` no botão e no painel.
- Adicionado `touch-manipulation` e tamanho `h-12 w-12` no botão.

## Rotas testadas

Testadas com Playwright em modo mobile real (`isMobile: true`, `hasTouch: true`) usando `touchscreen.tap`:

- `/`
- `/temporada`
- `/ur-play`
- `/ranking`
- `/cadastro`
- `/midia`
- `/patrocinadores`
- `/quadras-parceiras`

## Viewports testados

- `390x844`
- `430x932`
- `768x1024`

## Teste executado

Para cada rota e viewport:

- abrir rota;
- localizar botão hamburguer;
- tocar no botão com `touchscreen.tap`;
- confirmar que menu abriu;
- confirmar `aria-expanded="true"`;
- confirmar painel visível;
- confirmar grupos visíveis: Participar, Competir, Benefícios, Parcerias;
- confirmar links presentes;
- clicar link do menu;
- confirmar navegação e fechamento do menu;
- reabrir menu;
- tocar no X;
- confirmar `aria-expanded="false"`;
- confirmar remoção do painel;
- confirmar ausência de erro no console;
- confirmar ausência de overflow horizontal.

Resultado:

- 24 checagens mobile.
- 0 falhas.
- Screenshots gerados em `output/playwright/` para os três viewports.

## Validação técnica

- `npm.cmd run lint`: passou com 0 erros e 4 warnings já existentes.
- `npx.cmd tsc --noEmit`: passou.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: passou.
- Build gerou 22 rotas estáticas.

## Escopo preservado

- Home não alterada.
- Conteúdo das páginas não alterado.
- Formulários não alterados.
- Backend não alterado.
- CRM não alterado.
- Apps Script não alterado.
- Google Sheets não alterado.
- Supabase não alterado.
- Endpoints não alterados.
- Nomes de campos não alterados.
- Hashes de cadastro não alterados.
- Patches antigos não aplicados e não adicionados ao commit.
