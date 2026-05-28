# QA Sprint 11H - Copy progressiva para atletas

## Branch

- `sprint-11h-copy-progressiva-atletas`
- Base: `main` atualizada apos Sprint 11F (`f6a14b2`)

## Arquivos alterados

- `app/page.tsx`
- `app/temporada/page.tsx`
- `app/ur-play/page.tsx`
- `app/atletas/page.tsx`
- `app/equipes/page.tsx`
- `app/ranking/page.tsx`
- `app/eventos/page.tsx`
- `app/ur-market/page.tsx`
- `app/patrocinadores/page.tsx`
- `app/quadras-parceiras/page.tsx`
- `app/ct-ur/page.tsx`
- `app/midia/page.tsx`
- `app/ecossistema/page.tsx`
- `app/layout.tsx`
- `components/editorial/cta-section-premium.tsx`
- `lib/content/season1.ts`

## Frase principal aplicada

`Entre na temporada. Evolua no seu ritmo.`

A Home passou a apresentar a chamada principal em duas linhas:

- `ENTRE NA TEMPORADA.`
- `EVOLUA NO SEU RITMO.`

## Paginas revisadas

- `/`: Home oficial da Temporada 1 com copy mais progressiva, microcopy para iniciantes, nova secao "Para quem e" e beneficios reposicionados como consequencia da jornada.
- `/temporada`: reforco da temporada como jornada para diferentes niveis, com entrada pelo UR Play.
- `/ur-play`: reposicionado como primeiro passo da temporada, com etapas de cadastro, participacao, observacao, pontuacao e evolucao.
- `/atletas`: reforco da trajetoria individual a partir do primeiro jogo.
- `/equipes`: copy ajustada para escudo, pertencimento, formacao e historia coletiva.
- `/ranking`: ranking apresentado como organizacao e clareza de evolucao, nao como barreira.
- `/eventos`: eventos descritos como etapas progressivas da temporada.
- `/ur-market`: recompensas descritas como consequencia de participacao, merito e validacao.
- `/patrocinadores`: marca posicionada dentro da jornada do atleta.
- `/quadras-parceiras`: quadra posicionada como polo ativo da temporada.
- `/ct-ur`: desenvolvimento tecnico, fisico, mental e comportamental com direcao.
- `/midia`: midia oficial como narrativa da temporada, dos jogos, atletas e bastidores.
- `/ecossistema`: sistema continuo para dar caminho ao esporte amador.

## Termos removidos ou suavizados

- A expressao competitiva principal anterior foi removida das headlines principais.
- Linguagens como "so os melhores", "dominar", "elite" como barreira de entrada e promessas garantidas foram evitadas no escopo revisado.
- O termo "elite" foi suavizado onde aparecia como nivel aspiracional, priorizando "competitivo" e "referencia".

## Validacao de promessas

- Beneficios, produtos, recompensas e UR Coins foram tratados como consequencia da jornada, nao como motivo principal de entrada.
- A copy inclui condicionantes de disponibilidade, parceiros ativos, regras oficiais e validacao operacional.
- Nao foram adicionadas promessas de premio garantido, oportunidade garantida, beneficio garantido ou retorno comercial garantido.

## QA de copy

- UR Play aparece como porta de entrada.
- Ranking aparece como organizacao, nivelamento e evolucao.
- A Home explica que o atleta nao precisa chegar pronto.
- As paginas internas possuem subtitulos mais claros para orientar atleta, equipe, parceiro, patrocinador e quadra.
- Busca local em `app`, `lib` e `components` nao encontrou os termos proibidos definidos para esta Sprint.

## QA responsivo

Arquivo de evidencia:

- `output/playwright/sprint-11h-playwright-summary.json`

Viewports testados:

- `390x844`
- `430x932`
- `768x1024`
- `1366x768`
- `1920x1080`

Rotas testadas:

- `/`
- `/temporada`
- `/ur-play`
- `/ranking`
- `/cadastro`
- `/atletas`
- `/equipes`
- `/eventos`
- `/midia`
- `/patrocinadores`
- `/quadras-parceiras`
- `/ur-market`
- `/ct-ur`
- `/ecossistema`

Resultados do script visual:

- Sem overflow horizontal nas rotas e viewports testados.
- Menu mobile abriu e fechou nos viewports mobile/tablet.
- Header desktop continuou com navegacao e CTAs em `1366x768` e `1920x1080`.
- Footer mobile manteve os grupos em accordion.
- Nenhum erro de console registrado pelo script.

## Validacao tecnica

- `npm.cmd run lint`: aprovado, mantendo apenas warnings existentes de fonte customizada em `app/layout.tsx` e uso de `<img>` em `app/page.tsx`.
- `npx.cmd tsc --noEmit`: aprovado.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: aprovado.

## Escopo preservado

- Backend nao alterado.
- Formularios nao alterados.
- Supabase, Apps Script, Sheets, CRM, endpoints, hashes e nomes de campos nao alterados.
- `next-env.d.ts` nao alterado.
- Arquivos `.patch` nao foram adicionados ao commit.
- Home da Temporada 1 preservada como pagina principal.
- Menu mobile, footer accordion e responsividade da Sprint 11F preservados.
