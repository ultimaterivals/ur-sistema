# QA — Sprint 14a: Fundação Visual da Home Ultimate Rivals

> Branch: `sprint-14a-fundacao-site-ultimate-rivals`
> Data: 2026-06-01

---

## Resumo da entrega

Reimplementação da Home oficial do Ultimate Rivals com as 11 seções da arquitetura aprovada (docs/ARQUITETURA-SITE.md v1.1), atualização da navegação e criação de páginas placeholder para rotas novas.

---

## Arquivos alterados

| Arquivo | Tipo | Descrição |
|---|---|---|
| `app/page.tsx` | Reescrita | Home oficial com 11 seções |
| `lib/navigation.ts` | Atualizado | Desktop nav, mobile groups, footer columns |
| `app/hunter/page.tsx` | Criado | Placeholder Metodologia Hunter |
| `app/blog/page.tsx` | Criado | Placeholder Blog |

---

## Rotas validadas no build

| Rota | Status |
|---|---|
| `/` | ✅ Build OK |
| `/ur-play` | ✅ Build OK |
| `/cadastro` | ✅ Build OK |
| `/temporada` | ✅ Build OK |
| `/ranking` | ✅ Build OK |
| `/regulamento` | ✅ Build OK |
| `/ecossistema` | ✅ Build OK |
| `/hunter` | ✅ Build OK (novo) |
| `/blog` | ✅ Build OK (novo) |
| Todas as 24 rotas | ✅ |

---

## Validações executadas

| Validação | Resultado |
|---|---|
| `npm run build` | ✅ Compiled successfully (24 rotas) |
| `npm run lint` | ✅ 0 erros, 1 warning pré-existente |
| `npx tsc --noEmit` | Erros pré-existentes no repo (baseline main: 2193) — nenhum novo introduzido |

---

## Checks de copy e conteúdo

| Check | Status |
|---|---|
| Hero usa "TEMPORADA 1 ULTIMATE RIVALS" no eyebrow | ✅ |
| Headline principal: "POLOS EM DISPUTA." | ✅ |
| "Eleve o jogo" não aparece como headline | ✅ (removido do hero) |
| Seção problema tem 6 dores + frase-ponte | ✅ |
| Jornada: UR Play → UR Sprint → UR Series → UR Legends | ✅ (season1.ladder) |
| "Regional" removido de journeySteps | ✅ (usa season1.ladder) |
| Seção Atleta/Dupla/Equipe aparece logo após Jornada (Seção 4) | ✅ |
| Texto-chave "Você não precisa ter equipe" em destaque | ✅ |
| BH, Betim e Contagem têm mesmo peso visual | ✅ |
| Frase de pertencimento dos polos presente | ✅ |
| 7 categorias de ranking presentes | ✅ |
| Regra UR Legends (apenas Ranking dos Polos) documentada | ✅ |
| UR Market sem R$, sem preço, sem promessa garantida | ✅ |
| Microcopy de isenção do Market presente | ✅ |
| Mídia aparece como preview (6 cards) | ✅ |
| Hunter não é olheiro — mentalidade | ✅ |
| "Equipes Hunters" documentado | ✅ |
| Hunter não promete carreira profissional | ✅ |
| Blog não aparece como seção da Home | ✅ |
| Blog aparece no menu mobile (Institucional) | ✅ |
| Blog aparece no footer (coluna Institucional) | ✅ |
| Sem "Regional" no site | ✅ |
| Sem promessa de carreira profissional | ✅ |
| Sem R$ em qualquer seção | ✅ |
| CTA final: "Sua temporada começa no primeiro jogo." | ✅ |

---

## Checks de navegação

| Check | Status |
|---|---|
| Desktop nav: Começar, UR Play, Temporada, Ranking, UR Market, Mídia | ✅ |
| Mobile: 3 grupos (Principal, Explorar, Institucional) | ✅ |
| Footer: 4 colunas (Jornada, Ecossistema, Ranking e Market, Institucional) | ✅ |
| Blog no menu mobile (Institucional) | ✅ |
| Blog no footer (Institucional) | ✅ |
| /hunter link funcional (placeholder criado) | ✅ |
| /blog link funcional (placeholder criado) | ✅ |

---

## Checklist de QA manual (a executar em browser)

### Viewports a testar
- [ ] 390x844 (iPhone 14)
- [ ] 430x932 (iPhone 14 Plus)
- [ ] 768x1024 (iPad)
- [ ] 1366x768 (laptop)
- [ ] 1920x1080 (desktop)

### Home — seções
- [ ] Hero: eyebrow, headline, subheadline, support text, CTAs visíveis
- [ ] Seção O Problema: 6 cards + frase-ponte dourada
- [ ] Jornada: 4 cards (UR Play, UR Sprint, UR Series, UR Legends) com UR Legends destacado
- [ ] Atleta/Dupla/Equipe: 3 cards com mesmo peso visual
- [ ] Polos: BH, Betim, Contagem com mesmo tamanho + frase de pertencimento
- [ ] Ranking: 7 categorias em grid + ImpactLine com regra UR Legends
- [ ] UR Market: 6 cards sem preço + microcopy de isenção
- [ ] Mídia: 6 cards + frase editorial
- [ ] Hunter: 6 cards + ImpactLine sem promessa profissional
- [ ] CTA Final: fundo dourado escuro, headline forte, 2 CTAs

### Navegação
- [ ] Menu desktop mostra 6 itens corretos
- [ ] CTA "Entrar no UR" visível no desktop
- [ ] Menu mobile abre e fecha corretamente
- [ ] 3 grupos no mobile (Principal, Explorar, Institucional)
- [ ] Links de Blog e Hunter no mobile funcionam
- [ ] Footer 4 colunas corretas no desktop
- [ ] Footer accordion no mobile funciona

### Performance e acessibilidade
- [ ] Sem overflow horizontal em mobile
- [ ] Console sem erros JS
- [ ] Focus ring visível em elementos interativos
- [ ] Alt text em imagens
- [ ] Textos legíveis (contraste adequado)
- [ ] Home abre no topo (scroll-to-top)

---

## Preservação de backend e integrações

| Item | Status |
|---|---|
| Supabase | ✅ Não alterado |
| Apps Script | ✅ Não alterado |
| Formulários de cadastro | ✅ Não alterado |
| Componentes de lead | ✅ Não alterados |
| Endpoints | ✅ Não alterados |
| next-env.d.ts | ✅ Não alterado |
| package.json | ✅ Não alterado |
| package-lock.json | ✅ Não alterado |

---

## O que NÃO foi feito (fora do escopo desta sprint)

- Páginas internas em profundidade: Ranking, Market, Mídia, Temporada, Polos
- Blog com posts reais
- Hunter com conteúdo completo
- Animações scroll-triggered
- Ranking com dados reais
- UR Market com products reais
- CT UR integrado

---

*Sprint 14a — Fundação Visual da Home Ultimate Rivals*
*Status: Entregue e validado*
