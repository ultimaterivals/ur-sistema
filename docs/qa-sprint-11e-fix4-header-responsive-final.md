# QA Sprint 11E-Fix 4 - Header responsivo final

## Linha de trabalho

- Branch: `sprint-11e-fix4-header-responsive-final`
- Base: `sprint-11e-fix3-mobile-hamburger-hitbox`
- Commit base: `07f57f9 Corrige hitbox real do menu hamburguer mobile`
- Commit da Sprint: gerado ao final desta execucao

## Causa encontrada

O Header da linha fix3 mantinha `2xl:flex` para a navegacao principal e `2xl:hidden` para o hamburguer. Como `1366x768` fica abaixo de `2xl`, o site continuava exibindo comportamento mobile em desktop comum.

Tambem havia uma separacao excessiva criada no fix3: o botao mobile tinha sido movido para fora do header. A Sprint 11E-Fix 4 restaurou a estrutura responsiva esperada, com desktop no breakpoint `lg` e mobile/tablet abaixo de `lg`.

## Arquivos alterados

- `components/layout/header.tsx`
- `docs/qa-sprint-11e-fix4-header-responsive-final.md`

Arquivos verificados e preservados sem alteracao:

- `app/globals.css`
- `lib/navigation.ts`

## Desktop restaurado

- Navegacao principal voltou para `hidden lg:flex`.
- CTAs desktop permanecem em `hidden lg:flex`.
- Botao hamburguer fica dentro de `lg:hidden`.
- Painel mobile fica em `lg:hidden`.
- Header desktop foi validado em `1366x768` e `1920x1080`.
- Em desktop, `mobile-menu-button` nao fica visivel.

## Mobile corrigido

- Header continua client component com `"use client"`.
- Estado simples: `useState(false)`.
- Botao real com `type="button"`.
- `onClick` simples: `setMobileMenuOpen((open) => !open)`.
- Sem `preventDefault`.
- Sem `onPointerUp`.
- Sem guarda por `useRef`.
- `aria-controls="mobile-menu-panel"`.
- `aria-expanded` e `aria-label` atualizados conforme estado.
- `data-testid="mobile-menu-button"` mantido estavel no botao.
- Botao com `relative`, `z-[10000]`, `pointer-events-auto`, `touch-manipulation`, `min-h-[48px]`, `min-w-[48px]`.
- SVG interno com `pointer-events-none`, fazendo o hit-test voltar no proprio botao.
- Painel mobile com `id="mobile-menu-panel"`, `data-testid="mobile-menu-panel"`, `fixed`, `top-[72px]`, `z-[9990]`, `max-h-[calc(100dvh-72px)]`, `overflow-y-auto`, `pb-[120px]` e `pointer-events-auto`.
- Links do menu fecham o painel ao clicar.

## Evidencia de breakpoint

Resultados do Playwright:

- `390x844`: mobile button visivel, desktop nav oculto, desktop CTAs ocultos, sem overflow.
- `430x932`: mobile button visivel, desktop nav oculto, desktop CTAs ocultos, sem overflow.
- `768x1024`: comportamento tablet/mobile, mobile button visivel, desktop nav oculto, desktop CTAs ocultos, sem overflow.
- `1366x768`: desktop nav visivel, desktop CTAs visiveis, mobile button oculto, sem overflow.
- `1920x1080`: desktop nav visivel, desktop CTAs visiveis, mobile button oculto, sem overflow.

Screenshots:

- `output/playwright/sprint-11e-fix4-breakpoint-390x844.png`
- `output/playwright/sprint-11e-fix4-breakpoint-430x932.png`
- `output/playwright/sprint-11e-fix4-breakpoint-768x1024.png`
- `output/playwright/sprint-11e-fix4-breakpoint-1366x768.png`
- `output/playwright/sprint-11e-fix4-breakpoint-1920x1080.png`

## Resultado do elementFromPoint

Viewport principal: `390x844`, rota `/`.

- Botao encontrado: sim.
- Rect: `left=322`, `top=12`, `width=48`, `height=48`.
- Centro: `x=346`, `y=36`.
- `document.elementFromPoint(centerX, centerY)`: `BUTTON`.
- `data-testid`: `mobile-menu-button`.
- `aria-controls`: `mobile-menu-panel`.
- `pointer-events`: `auto`.
- `min-width`: `48px`.
- `min-height`: `48px`.
- Resultado: o centro fisico do botao retorna o proprio botao, sem camada interceptando.

Arquivo de evidencia:

- `output/playwright/sprint-11e-fix4-header-responsive-final-results.json`

## Rotas testadas

Em `390x844`, com `hasTouch: true`, `isMobile: true` e toque no centro fisico do botao:

- `/`
- `/temporada`
- `/ur-play`
- `/ranking`
- `/cadastro`

Para cada rota:

- clicou em `data-testid="mobile-menu-button"`;
- confirmou painel visivel;
- confirmou pelo menos 5 links visiveis;
- clicou no link `/ur-play`;
- confirmou navegacao ou href correto;
- voltou;
- abriu o menu novamente;
- clicou no mesmo botao para fechar;
- confirmou painel fechado;
- confirmou ausencia de erro de console relevante;
- confirmou ausencia de overflow horizontal.

Resultado:

- 5 rotas mobile testadas.
- 5 rotas aprovadas.
- 18 links visiveis no painel mobile.
- 0 falhas.

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
