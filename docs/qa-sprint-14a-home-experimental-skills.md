# QA — Sprint 14A — Home experimental com skills

## Branch

`sprint-14a-home-experimental-skills`

## Objetivo

Criar uma Home experimental do zero para o Ultimate Rivals, testando uma abordagem mais editorial, premium, esportiva, aspiracional e mobile-first.

## Skills e referências

- `UI/UX Pro Max`: localizada em `.codex/skills/ui-ux-pro-max/SKILL.md` e usada como referência de leitura.
- `frontend-design`: não localizada neste ambiente.
- `copy-lp-queiroz.skill`: não localizada neste ambiente.
- `playwright`: usada para QA visual e responsivo.
- `design-system/MASTER.md`: usado como base visual.
- `design-system/pages/home.md`: usado como override da Home.

Observação: o script da `UI/UX Pro Max` depende de Python, que não está disponível no PATH do Windows neste ambiente. Por isso a skill foi usada como guia documental, sem execução do script.

## Arquivos alterados

- `app/page.tsx`
- `app/eventos/page.tsx`
- `app/temporada/page.tsx`
- `docs/qa-sprint-14a-home-experimental-skills.md`

## Observação sobre páginas internas

A sprint não redesenhou páginas internas. Houve apenas ajuste textual mínimo em `app/eventos/page.tsx` e `app/temporada/page.tsx` para substituir o termo proibido `Regional` por `UR Series`, permitindo cumprir o checklist global de termos oficiais nas rotas testadas.

## Decisões de design

- Home construída do zero, sem reaproveitar a ordem visual da Sprint 13B.
- Hero com narrativa: `A temporada começa na areia.`
- Mini placar de polos no Hero.
- Timeline de jornada do atleta.
- Painel de polos com leitura de mapa/comunidade.
- Painel de entrada para atleta individual, dupla e equipe/quarteto.
- Ranking preview premium com Top 3 demonstrativo e `Dados ilustrativos`.
- Ecossistema como diagrama de camadas.
- UR Market como vitrine, sem preço e sem promessa automática.
- Mídia com linguagem de transmissão esportiva.
- Metodologia Hunter como desenvolvimento, não olheiro.
- UR Legends como bloco aspiracional.
- Regulamento como confiança e critério.

## Screenshots gerados

- `output/previews/sprint-14a/home-390x844.png`
- `output/previews/sprint-14a/home-430x932.png`

Os screenshots foram gerados como artefatos locais de QA e não foram adicionados ao commit.

## Validações técnicas

### `npm.cmd run lint`

Resultado: aprovado.

Observação: permanece 1 warning já existente em `app/layout.tsx` sobre fonte customizada (`@next/next/no-page-custom-font`). A Sprint 14A não alterou esse arquivo.

### `npx.cmd tsc --noEmit`

Resultado: aprovado.

### `npm.cmd run build`

Resultado: aprovado.

## QA Playwright

Servidor usado:

`http://127.0.0.1:3055`

Rotas testadas:

- `/`
- `/ur-play`
- `/temporada`
- `/ranking`
- `/regulamento`
- `/cadastro`
- `/ecossistema`

Viewports testados:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Checks executados:

- Home abre no topo.
- Sem overflow horizontal.
- Menu mobile abre e fecha.
- Console Playwright sem erros.
- Hero experimental aparece com `A TEMPORADA COMEÇA NA AREIA`.
- UR Play aparece cedo.
- Atleta sem equipe aparece na copy.
- Dupla e Quarteto aparecem.
- Belo Horizonte, Betim e Contagem aparecem com mesmo peso.
- Ranking tem visual premium com Top 3 e `Dados ilustrativos`.
- UR Market não usa preço em dinheiro.
- Mídia aparece como transmissão/conteúdo separado.
- Metodologia Hunter não é tratada como olheiro.
- UR Legends aparece como evento aspiracional.
- Não existe `Regional` nas rotas testadas.
- Não existe promessa de dinheiro, prêmio garantido, benefício garantido, ROI garantido ou conversão em dinheiro.

## Escopo preservado

- Backend não alterado.
- Formulários não alterados.
- Supabase não alterado.
- Apps Script não alterado.
- Sheets não alterado.
- CRM não alterado.
- Endpoints não alterados.
- Hashes não alterados.
- Nomes de campos não alterados.
- Lógica de cadastro não alterada.
- `next-env.d.ts` não alterado.
- `package.json` não alterado.
- `package-lock.json` não alterado.
- Arquivos `.patch` não commitados.
