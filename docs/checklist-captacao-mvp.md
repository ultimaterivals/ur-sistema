# Checklist — Captação MVP v2

Execute este checklist sempre que configurar do zero ou suspeitar de falha na integração.

---

## Fase 1 — Planilha e Apps Script

- [ ] **Planilha nativa criada** — `Leads Ultimate Rivals — Captação MVP v2` no Google Sheets (não importada de .xlsx)
- [ ] **SPREADSHEET_ID copiado** da URL da planilha (`/d/SEU_ID/edit`)
- [ ] **Script v2 colado** — conteúdo de `docs/google-apps-script-webhook-v2.js` no editor Apps Script
- [ ] **SPREADSHEET_ID substituído** no topo do script (`var SPREADSHEET_ID = "SEU_ID"`)
- [ ] **Script salvo** (Ctrl+S, sem erros de sintaxe)

---

## Fase 2 — Setup das abas

- [ ] **`setupSheets()` executado** — sem erros no log
- [ ] **5 abas criadas na planilha:** Atletas, Equipes, Patrocinadores, Quadras, Comunidade
- [ ] **Cabeçalhos presentes** na linha 1 de cada aba

---

## Fase 3 — Testes manuais no script

Cada função deve gravar UMA linha real na aba correspondente.

- [ ] **`testWriteAtleta()` executado** → linha `TESTE Atleta v2` na aba Atletas
  - [ ] ID gerado: `ATL-0001`
  - [ ] Status: `Novo`
  - [ ] Prioridade: `A definir`
  - [ ] Responsável: `Operação UR`
  - [ ] Próximo passo: `Triagem inicial`

- [ ] **`testWriteEquipe()` executado** → linha `TESTE Equipe v2` na aba Equipes
  - [ ] ID gerado: `EQP-0001`

- [ ] **`testWritePatrocinador()` executado** → linha `TESTE Marca v2` na aba Patrocinadores
  - [ ] ID gerado: `PAT-0001`

- [ ] **`testWriteQuadra()` executado** → linha `TESTE Arena v2` na aba Quadras
  - [ ] ID gerado: `QDR-0001`

- [ ] **`testWriteComunidade()` executado** → linha `TESTE Comunidade v2` na aba Comunidade
  - [ ] ID gerado: `COM-0001`

---

## Fase 4 — Publicação como Web App

- [ ] **Nova implantação criada** (Implantar → Nova implantação → App da Web)
- [ ] **Configurado:** Executar como: Eu | Quem tem acesso: Qualquer pessoa
- [ ] **Autorização concluída** (conta da operação UR)
- [ ] **URL `/exec` copiada**

---

## Fase 5 — Verificação do doGet

- [ ] **URL `/exec` aberta no browser** → resposta:
  ```json
  {"ok":true,"message":"Webhook Ultimate Rivals v2 ativo.","ts":"..."}
  ```

---

## Fase 6 — Configuração na Vercel

- [ ] **Variável de ambiente atualizada:**
  ```
  NEXT_PUBLIC_GOOGLE_SCRIPT_URL = https://script.google.com/macros/s/SEU_ID/exec
  ```
- [ ] **Ambientes marcados:** Production, Preview, Development
- [ ] **Redeploy executado** na Vercel (ou push para `main`)
- [ ] **Build concluído sem erros**

---

## Fase 7 — Teste ponta a ponta no site

Para cada perfil, preencha e envie um lead de teste pelo site:

- [ ] **Atleta** — site mostra mensagem âmbar "Cadastro enviado para processamento..."
  - [ ] Linha apareceu na aba Atletas da planilha
  - [ ] ID sequencial correto (ATL-0002 se ATL-0001 já existia dos testes do script)
  - [ ] Campo `status` = Novo
  - [ ] Campo `prioridade` = A definir
  - [ ] Campo `responsável` = Operação UR
  - [ ] Campo `próximo passo` = Triagem inicial
  - [ ] UTMs capturados (adicionar `?utm_source=teste&utm_medium=checklist` na URL antes de enviar)

- [ ] **Equipe** → linha na aba Equipes
- [ ] **Patrocinador** → linha na aba Patrocinadores
- [ ] **Quadra** → linha na aba Quadras
- [ ] **Comunidade** → linha na aba Comunidade

---

## Fase 8 — Validações adicionais

- [ ] **Honeypot:** preencher o campo oculto `website` via DevTools antes de enviar → lead descartado silenciosamente, sem linha na planilha
- [ ] **Campos obrigatórios:** tentar enviar sem preencher Nome ou WhatsApp → mensagem de erro exibida, sem envio ao GAS
- [ ] **Endpoint não configurado:** remover temporariamente a variável do `.env.local` → aviso âmbar aparece no formulário, botão Tally visível
- [ ] **Fallback Tally visível** no estado "processamento" após envio bem-sucedido
- [ ] **UTMs gravados corretamente** na coluna UTMs da planilha

---

## Fase 9 — Limpeza pós-checklist

- [ ] **Marcar linhas de teste** na planilha (Status = "Teste — deletar" ou deletar as linhas)
- [ ] **Confirmar que 0 leads de teste** permanecem misturados com leads reais

---

## Problemas comuns e soluções rápidas

| Problema | O que verificar |
|----------|----------------|
| doGet retorna 404 ou erro | Script não publicado — criar nova implantação |
| doPost "Concluído" mas sem linha | SPREADSHEET_ID errado ou planilha não é nativa — verificar URL da planilha |
| "Perfil inválido" no log do GAS | Site ainda está usando a URL do GAS v1 — atualizar NEXT_PUBLIC_GOOGLE_SCRIPT_URL |
| Campo vazio na planilha | Nome do campo no payload não bate com `config.fields` — verificar log do GAS |
| Site não mostra mensagem âmbar | NEXT_PUBLIC_GOOGLE_SCRIPT_URL não está configurada na Vercel — verificar env vars |
| Erro de rede no browser | Endpoint configurado mas GAS offline — verificar doGet, reimplantar |
| Linha aparece mas sem cabeçalho | Aba não estava vazia quando setupSheets() rodou — limpar aba e rodar novamente |
| Build Vercel com erro de TypeScript | Executar `npm run lint` e `npm run build` localmente antes do push |

---

## Comandos de validação local

```bash
# Na raiz do ur-sistema-repo:
npm run lint
npm run build
npm run dev
# Acessar localhost:3000/cadastro e testar
```

---

## Referências

- Script atual: `docs/google-apps-script-webhook-v2.js`
- Documentação completa: `docs/captacao-google-sheets.md`
- Links Tally: `lib/links.ts`
- Envio do formulário: `lib/lead-submit.ts`
- Configuração dos campos: `lib/lead-fields.ts`
- Componente do formulário: `components/cadastro/LeadFormBase.tsx`
