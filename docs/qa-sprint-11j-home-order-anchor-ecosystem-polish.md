# QA Sprint 11J - Home order, anchors e ecosystem polish

## Branch

- `sprint-11j-home-order-anchor-ecosystem-polish`

## Arquivos alterados

- `app/page.tsx`
- `lib/navigation.ts`
- `docs/qa-sprint-11j-home-order-anchor-ecosystem-polish.md`
- `docs/qa-sprint-11h5-home-temporada-copy-oficial.md`

## Ordem final da Home

1. `hero` - Hero `TEMPORADA 1 UR / POLOS EM DISPUTA.`
2. `ur-play` - porta de entrada obrigatoria
3. `ecossistema` - `O UR e mais que um torneio`
4. `participacao` - atleta individual, equipe e polo
5. `modalidades` - Dupla e Quarteto
6. `polos` - comunidade, identidade e mesmo peso
7. `territorios` - Belo Horizonte, Betim e Contagem
8. `ur-sprint` - primeira disputa do polo
9. `niveis` - N1 Elite, N2 Avancado e N3 Desenvolvimento
10. `regional` - caminho competitivo
11. `rankings` - Ranking dos Atletas, Ranking das Equipes e Ranking dos Polos
12. `legends` - espetaculo dos polos
13. `beneficios` - recompensas e UR Market como consequencia
14. `regulamento` - seguranca e criterio
15. `comecar` - CTA final pelo UR Play

## Ajustes aplicados

- Hero mantido como primeiro bloco renderizado em `app/page.tsx`.
- Ecossistema UR reposicionado logo depois do UR Play.
- Blocos longos de recompensas, UR Market, atividades extras e Legends foram compactados.
- `Como comecar` ficou como ultimo bloco antes do footer e nao contem cards de polos.
- Ranking foi ajustado para `TRES RANKINGS. UMA TEMPORADA MAIS ORGANIZADA.`
- Legends deixa visivel que a pontuacao especial vale apenas para Ranking dos Polos.
- Ranking dos Atletas e Ranking das Equipes continuam sem multiplicador.
- Niveis atualizados para N1 Elite, N2 Avancado e N3 Desenvolvimento.
- Alias antigos `#recompensas`, `#ur-market` e `#premiacoes` continuam apontando para o bloco de beneficios.

## Navegacao e ancoras

- `Comecar` no desktop aponta para `/`, evitando abertura inicial no meio da Home.
- Menu mobile usa os ids atuais da Home.
- Links de beneficios no menu apontam para `/#beneficios`.
- `Regulamento` e `Ecossistema` no mobile apontam para as secoes da Home.
- A rota `/` sem hash foi validada abrindo no topo real, com o Hero visivel primeiro.

## Rotas testadas

- `/`
- `/ur-play`
- `/ecossistema`
- `/ranking`
- `/regulamento`
- `/cadastro`

## Viewports testados

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

## Resultado lint

- `npm.cmd run lint`: aprovado.
- Warnings mantidos:
  - `app/layout.tsx`: aviso existente de fonte customizada.
  - `app/page.tsx`: aviso de uso de `<img>` nos simbolos das modalidades.

## Resultado TypeScript

- `npx.cmd tsc --noEmit`: aprovado.

## Resultado build

- `set NODE_OPTIONS=--max-old-space-size=8192`
- `npm.cmd run build`: aprovado.

## Resultado QA Playwright

- Ambiente: `next start` em build de producao, `http://127.0.0.1:3041`.
- Home checks: `5`.
- Route checks: `30`.
- Anchor checks mobile: `18`.
- Desktop checks: `2`.
- Console errors: `0`.
- Evidencia: `output/playwright/sprint-11j-home-order-anchor-ecosystem-polish-summary.json`.
- Screenshots:
  - `output/playwright/sprint-11j-home-390x844.png`
  - `output/playwright/sprint-11j-menu-390x844.png`

## Checks obrigatorios confirmados

- `/` sem hash abre no topo.
- Primeiro H1 da Home e `POLOS EM DISPUTA.`
- `A TEMPORADA COMECA NO UR PLAY` aparece depois do Hero.
- `O UR E MAIS QUE UM TORNEIO` aparece depois do UR Play.
- Nao ha Hero duplicado.
- Nao ha `Como comecar agora` duplicado.
- `Tres polos. Uma temporada.` vem depois do bloco explicativo dos polos.
- N1, N2 e N3 aparecem com textos corretos.
- Recompensas nao aparecem como garantidas.
- Menu mobile abre, fecha e ancora corretamente.
- Sem overflow horizontal nos viewports testados.
- Footer aparece depois do CTA final.

## Confirmacao de escopo preservado

- Backend nao alterado.
- Formularios nao alterados.
- Logica de cadastro nao alterada.
- Supabase nao alterado.
- Apps Script nao alterado.
- Google Sheets nao alterado.
- CRM nao alterado.
- Endpoints nao alterados.
- Hashes de formulario nao alterados.
- Nomes de campos nao alterados.
- Integracoes nao alteradas.
- `next-env.d.ts` nao foi alterado.
- Arquivos `.patch` nao foram commitados.
