# QA Final Pré-Lançamento — Site Público Ultimate Rivals

Data: 2026-05-19  
Escopo: site público MVP, rotas institucionais, páginas estratégicas, CTAs, SEO básico, sitemap, robots, responsividade e central `/cadastro`.

## Decisão Final

**Recomendação: pronto para lançamento controlado.**

O site está apto para divulgação controlada, captação inicial e validação pública do MVP. Ainda não é recomendada uma divulgação massiva antes de executar testes reais de envio de leads em produção e uma revisão final de conteúdo comercial/mídia.

## Ambiente Validado

- Build: `next build --webpack`
- Servidor de QA visual: `next start` em `http://127.0.0.1:3010`
- Navegador automatizado: Chromium/Chrome via Playwright
- Browser in-app: validado em `/cadastro#patrocinador`

Observação: havia um servidor antigo de desenvolvimento preso na porta `3000`, com falhas de HMR/Turbopack que impediam hidratação confiável. A validação oficial desta rodada foi feita no build de produção local, que passou corretamente.

## Rotas Testadas

Todas responderam `200` no build de produção local:

| Rota | Status |
|------|--------|
| `/` | OK |
| `/ecossistema` | OK |
| `/atletas` | OK |
| `/ur-play` | OK |
| `/ranking` | OK |
| `/equipes` | OK |
| `/temporada` | OK |
| `/eventos` | OK |
| `/ur-market` | OK |
| `/patrocinadores` | OK |
| `/ct-ur` | OK |
| `/midia` | OK |
| `/quadras-parceiras` | OK |
| `/cadastro` | OK |
| `/privacidade` | OK |
| `/termos` | OK |
| `/regulamento` | OK |
| `/contato` | OK |

Também validados:

- `/robots.txt`: OK, aponta para `https://ultimaterivals.org/sitemap.xml`
- `/sitemap.xml`: OK, contém todas as rotas públicas principais

## Viewports Testados

| Viewport | Resultado |
|----------|-----------|
| `390x844` mobile | OK, sem overflow horizontal |
| `768x1024` tablet | OK, sem overflow horizontal |
| `1366x768` desktop | OK, sem overflow horizontal |
| `1920x1080` desktop grande | OK, sem overflow horizontal |

## Header

Status: **aprovado**

- Header presente em todas as rotas públicas.
- CTA `Entrar no UR` aponta para `/cadastro`.
- CTA `Patrocinar` aponta para `/cadastro#patrocinador`.
- Menu desktop permanece enxuto.
- Menu mobile abre e fecha corretamente no build de produção local.
- Sem overflow horizontal nos viewports testados.

## Footer

Status: **aprovado**

Links reais encontrados e validados:

- `/privacidade`
- `/termos`
- `/regulamento`
- `/contato`
- `/ecossistema`
- `/ct-ur`
- `/midia`
- `/quadras-parceiras`

Nenhum link interno público testado retornou `404`.

## CTAs

Status: **aprovado**

Links obrigatórios encontrados no site:

- Atleta: `/cadastro#atleta`
- Equipe: `/cadastro#equipe`
- Patrocinador: `/cadastro#patrocinador`
- Quadra: `/cadastro#quadra`
- Comunidade: `/cadastro#comunidade`
- CT UR: `/ct-ur` e `/cadastro#atleta`, conforme contexto
- Mídia: `/midia`, `/cadastro#comunidade` e `/cadastro#patrocinador`, conforme contexto

## Cadastro

Status: **aprovado sem envio real**

Testes executados em mobile `390x844`:

| URL | Formulário exibido | Overflow |
|-----|--------------------|----------|
| `/cadastro#atleta` | `Cadastro de atleta UR` | Não |
| `/cadastro#equipe` | `Cadastro de equipe UR` | Não |
| `/cadastro#patrocinador` | `Interesse comercial UR` | Não |
| `/cadastro#quadra` | `Quadra parceira UR` | Não |
| `/cadastro#comunidade` | `Comunidade Ultimate Rivals` | Não |

Não foram enviados leads reais nesta rodada. O teste foi limitado à UX, hash, renderização do formulário, legibilidade e ausência de overflow.

## SEO Básico

Status: **aprovado**

- Todas as páginas públicas têm `title`.
- Todas as páginas públicas têm `description`.
- `metadataBase` permanece em `https://ultimaterivals.org`.
- Open Graph global configurado no layout.
- `html lang="pt-BR"` mantido.
- `data-scroll-behavior="smooth"` mantido no `<html>`.
- Sitemap e robots com domínio oficial.

## Copy Pública

Status: **corrigido**

Foram removidas da copy pública do site expressões técnicas/protótipo como:

- `formulário visual`
- `sem envio real`
- `não há cadastro funcional`
- `campo visual`
- `Registrar interesse visual`
- `endpoint`
- `sem backend`
- `sem banco`
- `Tally` como linguagem principal

Linguagem mantida/reforçada:

- `cadastro de interesse aberto`
- `triagem operacional`
- `validação oficial`
- `operação em validação`
- `dados públicos entram após validação`
- `agenda oficial será publicada após confirmação`

Observação técnica: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` permanece apenas como nome interno da variável de ambiente em `lib/lead-submit.ts`, pois faz parte da configuração real da integração. Essa string não aparece mais como texto público no site.

## Placeholders

Status: **aprovado para MVP**

Os placeholders estão posicionados como estados premium de pré-lançamento, não como erro ou sistema vazio. Não foram identificados atletas, equipes, datas, marcas, rankings, premiações, valores ou métricas reais inventadas nas páginas públicas.

## Problemas Encontrados

1. **Copy técnica exposta em `/cadastro`**
   - Havia menções públicas a termos de implementação e fallback.
   - Corrigido com linguagem de captação e triagem operacional.

2. **Fallback externo com rótulo técnico**
   - Botões alternativos citavam explicitamente Tally.
   - Corrigido para `cadastro alternativo` / `alternativa externa`.

3. **Servidor antigo de desenvolvimento na porta 3000**
   - Afetava hidratação no modo dev.
   - Não reproduzido no build de produção local. Registrar como cuidado operacional, não bug de produto.

## Correções Feitas

- Limpeza de linguagem técnica pública em `/cadastro`.
- Remoção de menções públicas a fallback específico.
- Atualização dos rótulos de fallback em `lib/lead-fields.ts`.
- Mensagens de erro amigáveis em `lib/lead-submit.ts`.
- Ajuste preventivo no componente legado `PlaceholderPage`.
- Documento de QA recriado com checklist de lançamento.

## Arquivos Alterados Nesta Rodada

- `app/cadastro/page.tsx`
- `components/cadastro/LeadCaptureSection.tsx`
- `components/cadastro/LeadFormBase.tsx`
- `components/pages/placeholder-page.tsx`
- `lib/lead-fields.ts`
- `lib/lead-submit.ts`
- `lib/links.ts`
- `docs/qa-final-pre-lancamento.md`

## Checklist de Pronto Para Lançamento

| Item | Status |
|------|--------|
| Rotas públicas respondem 200 | OK |
| Header validado | OK |
| Footer validado | OK |
| Links internos sem 404 | OK |
| Sitemap completo | OK |
| Robots correto | OK |
| Metadata por página | OK |
| Domínio oficial configurado | OK |
| Mobile sem overflow | OK |
| Tablet sem overflow | OK |
| Desktop sem overflow | OK |
| Menu mobile abre e fecha | OK |
| `/cadastro` por hash funciona | OK |
| Copy pública sem linguagem de protótipo | OK |
| Placeholders premium | OK |
| Lint | OK |
| Build Webpack | OK |

## Pendências Recomendadas

1. Executar teste real de envio em produção com leads `TESTE QA` para cada perfil.
2. Confirmar entrada dos testes na planilha/CRM e depois arquivar como teste.
3. Revisar copy comercial com foco em patrocinadores antes de divulgação ampla.
4. Fazer uma revisão manual final em celular real.
5. Preparar material de lançamento: mensagem oficial, posts, mídia kit simples e orientação de atendimento.

## Resultado Final

O site está **pronto para lançamento controlado**: liberar para grupo inicial, parceiros próximos e primeiros interessados. Para lançamento público amplo, concluir primeiro o teste real de captação ponta a ponta em produção.
## AtualizaÃ§Ã£o PÃ³s-QA â€” CRM v3 Oficial

Data: 2026-05-20

A camada de captaÃ§Ã£o foi validada apÃ³s a migraÃ§Ã£o do CRM v3 para a planilha oficial Google Sheets `1SvK1dNMnmBCnWRO27-J19RCYE_qJ4VKMwycCXnCVHZ8`.

Resultado:

- CRM oficial confirmado como Google Sheets `1SvK...`.
- Excel v3 mantido como blueprint/backup, nÃ£o fonte diÃ¡ria.
- Planilha `1LFAG38...` marcada como nÃ£o utilizÃ¡vel.
- MigraÃ§Ã£o CRM v3 aplicada com backups ocultos.
- FÃ³rmulas ajustadas para locale `pt_BR`.
- `Status sugerido` corrigido para `Aguardando score` quando `Score` estÃ¡ vazio.
- Bug de `ResponsÃ¡vel` em Patrocinadores e Quadras corrigido para `OperaÃ§Ã£o UR`.
- Testes `TESTE QA ATLETA CRM V3`, `TESTE QA EQUIPE CRM V3`, `TESTE QA PATROCINADOR CRM V3`, `TESTE QA QUADRA CRM V3` e `TESTE QA COMUNIDADE CRM V3` aprovados.
- Leads QA arquivados com observaÃ§Ã£o `Teste QA CRM v3 â€” nÃ£o considerar como lead real`.
- AÃ§Ã£o administrativa temporÃ¡ria removida do Web App final.

DecisÃ£o atualizada: site e captaÃ§Ã£o estÃ£o prontos para lanÃ§amento controlado com CRM operacional oficial.
