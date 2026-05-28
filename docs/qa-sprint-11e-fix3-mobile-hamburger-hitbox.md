# QA Sprint 11E-Fix 3 - Hitbox real do menu hamburguer mobile

## Linha de trabalho

- Branch: `sprint-11e-fix3-mobile-hamburger-hitbox`
- Base: `sprint-11e-fix2-mobile-hamburger-real`
- Commit base: `ac24956 Corrige definitivamente o menu hamburguer mobile`
- Commit da Sprint: gerado ao final desta execucao

## Arquivos alterados

- `components/layout/header.tsx`
- `docs/qa-sprint-11e-fix3-mobile-hamburger-hitbox.md`

Arquivos verificados e preservados sem alteracao:

- `app/globals.css`
- `lib/navigation.ts`

## Causa real encontrada

O teste `elementFromPoint` na fix2 nao apontou uma camada HTML interceptando o centro do botao: no Chromium mobile/headless, o ponto central retornava o `path` do icone, que e filho do botao, e o toque abria o menu.

Mesmo assim, o comportamento no celular real indicava que o evento de toque nao chegava de forma confiavel ao botao. A fragilidade estrutural estava em manter o botao dentro do header `sticky` com `backdrop-blur`, no mesmo empilhamento visual do topo. Em mobile real, essa combinacao pode criar comportamento de hitbox/composicao diferente do Playwright.

A correcao remove essa variavel: o botao mobile agora fica em uma camada fixa propria, fora do header, fora de containers com blur/overflow/transform e acima de qualquer painel ou conteudo.

## Resultado de elementFromPoint antes

Viewport: `390x844`, rota `/`.

- Botao encontrado: sim.
- Rect: `left=322`, `top=12`, `width=48`, `height=48`.
- Centro: `x=346`, `y=36`.
- `document.elementFromPoint(centerX, centerY)`: `path`.
- O elemento retornado era filho do botao: sim.
- Classe do botao antes: `relative z-[100] ... pointer-events-auto 2xl:hidden`.
- Tap no centro abriu menu no Playwright: sim.

Arquivo de evidencia:

- `output/playwright/sprint-11e-fix3-hitbox-before.json`
- `output/playwright/sprint-11e-fix3-hitbox-before-390x844.png`

## Resultado de elementFromPoint depois

Viewport: `390x844`, rota `/`.

- Botao encontrado: sim.
- Rect: `left=326`, `top=12`, `width=48`, `height=48`.
- Centro: `x=350`, `y=36`.
- `document.elementFromPoint(centerX, centerY)`: `path`.
- O elemento retornado era filho do botao: sim.
- Position computado: `fixed`.
- Z-index computado: `9999`.
- Pointer-events computado: `auto`.
- Top computado: `12px`.
- Right computado: `16px`.
- Tap no centro abriu menu no Playwright: sim.
- Com o menu aberto, o centro do botao continuou retornando filho do botao: sim.

Arquivo de evidencia:

- `output/playwright/sprint-11e-fix3-hitbox-after.json`
- `output/playwright/sprint-11e-fix3-hitbox-after-390x844.png`

## Correcao aplicada

- Botao mobile movido para fora do header.
- Botao renderizado como `fixed`, `right-4`, `z-[9999]`, `pointer-events-auto`, `touch-manipulation`, `h-12`, `w-12`, `min-h-[48px]`, `min-w-[48px]`.
- Posicao superior usa `top: max(0.75rem, env(safe-area-inset-top))`.
- `onClick` mantido simples: `setMobileMenuOpen((open) => !open)`.
- Sem `preventDefault`.
- Sem `onPointerUp`.
- Sem guarda por `useRef`.
- Mantidos `type="button"`, `aria-expanded`, `aria-controls` e `aria-label`.
- Painel mobile renderizado como `fixed`, `top-0`, `inset-x-0`, `z-[9990]`, `max-h-[100dvh]`, `overflow-y-auto`, `pointer-events-auto`, `pb-[120px]`.
- Painel recebe padding superior para nao cobrir o botao.
- Links do painel fecham o menu ao clicar.

## Testes mobile executados

Script Playwright executado com:

- `hasTouch: true`
- `isMobile: true`
- `touchscreen.tap` no centro fisico do botao
- `document.elementFromPoint(centerX, centerY)` antes de cada toque

Para cada rota e viewport:

- confirmou botao visivel;
- confirmou que `elementFromPoint` no centro do botao retorna o botao ou filho do botao;
- tocou no centro fisico do botao;
- confirmou menu visivel;
- tocou novamente no centro fisico do botao;
- confirmou menu fechado;
- abriu o menu novamente;
- clicou em `/ur-play`;
- confirmou navegacao ou href correto;
- confirmou ausencia de erro de console relevante;
- confirmou ausencia de overflow horizontal.

Resultado:

- 15 cenarios testados.
- 15 cenarios aprovados.
- 0 falhas.
- Cada painel exibiu 18 links visiveis.

Arquivo de evidencia:

- `output/playwright/sprint-11e-fix3-mobile-hamburger-hitbox-results.json`
- `output/playwright/sprint-11e-fix3-menu-390x844.png`
- `output/playwright/sprint-11e-fix3-menu-430x932.png`
- `output/playwright/sprint-11e-fix3-menu-768x1024.png`

## Viewports

- `390x844`
- `430x932`
- `768x1024`

## Rotas

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

- Conteudo nao alterado.
- Home nao alterada.
- Paginas internas nao alteradas.
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
