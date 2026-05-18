# Captação UR — Google Sheets MVP v2

Fluxo:
```
Site UR → /cadastro (formulário próprio) → Apps Script v2 → Google Sheets nativo
Tally preservado como fallback secundário
```

---

## O que mudou na v2

| Item | v1 (anterior) | v2 (atual) |
|------|--------------|------------|
| Planilha | Importada de .xlsx (causa problemas de estrutura) | **Nova planilha nativa Google Sheets** |
| Apps Script | `docs/google-apps-script-webhook.js` | `docs/google-apps-script-webhook-v2.js` |
| Chaves de perfil | Inglês (`athlete`, `team`...) | **Português** (`atleta`, `equipe`...) |
| Formato de envio | JSON + text/plain | **URLSearchParams** (application/x-www-form-urlencoded) |
| Campos no payload | Nested `{ profile, data: { ... } }` | **Flat** (todos no nível raiz) |
| CORS | Tentativa redirect + fallback no-cors | **no-cors direto** (sem tentativa que sempre falha) |
| Estado após envio | "success" verde mesmo quando opaco | **"processing" âmbar** + Tally como comprovante |
| Logging no script | Básico | **Logger.log** detalhado em todos os pontos críticos |
| Teste manual | Não existia | **5 funções testWrite** que gravam linhas reais |
| Setup de abas | Manual | **setupSheets()** cria as 5 abas formatadas automaticamente |

---

## Por que a planilha antiga não funcionava

A planilha foi criada por importação de um arquivo `.xlsx`. Isso pode causar:

- Nomes de abas diferentes dos esperados (espaços extras, encoding diferente).
- `sheet.getLastRow()` retornando valores inesperados (linhas fantasmas do Excel).
- Problemas de permissão no `SpreadsheetApp.openById()`.

A solução é usar uma **planilha Google Sheets criada nativamente** (nunca importada).  
A planilha .xlsx pode ser mantida como referência visual/histórica — não apague.

---

## Por que o fetch falhava silenciosamente

O fetch do site usava `redirect: "follow"` tentando ler a resposta. O Google Apps Script
redireciona POSTs para `script.googleusercontent.com`, que não tem headers CORS. O browser
lança CORS error e o código caía no fallback `no-cors`. Resultado: o request **chegava** ao
GAS (por isso `doPost` mostrava "Concluído"), mas o código de confirmação no browser falhava.

Na v2, usamos **`no-cors` direto** sem tentativa de leitura. Limitação aceita e comunicada
claramente ao usuário: "Confirme na planilha antes de considerar o lead validado."

---

## Passo a passo — configurar do zero

### 1. Criar a planilha nativa

1. Acesse [sheets.google.com](https://sheets.google.com) com a conta Google da operação UR.
2. Clique em **+ Novo** → **Planilha em branco**.
3. Renomeie para: **`Leads Ultimate Rivals — Captação MVP v2`**
4. Copie o ID da URL:
   ```
   https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit
   ```
   O ID é a sequência longa entre `/d/` e `/edit`.

### 2. Colar o Apps Script v2

1. Na planilha, acesse **Extensões → Apps Script**.
2. Apague o conteúdo inicial do editor.
3. Copie todo o conteúdo de `docs/google-apps-script-webhook-v2.js` e cole.
4. No topo do script, substitua:
   ```js
   var SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
   ```
   pelo ID copiado no passo anterior.
5. Salve (**Ctrl+S** ou ícone de disquete). Nome do projeto: `UR Webhook v2`.

### 3. Rodar setupSheets()

1. No editor do Apps Script, selecione a função `setupSheets` no dropdown.
2. Clique em **Executar**.
3. Autorize o acesso quando solicitado (conta Google da operação UR).
4. Verifique nos logs: deve aparecer "Criando/verificando aba" para as 5 abas.
5. Abra a planilha — deve ter 5 abas: **Atletas, Equipes, Patrocinadores, Quadras, Comunidade**.

### 4. Rodar testWriteAtleta()

1. Selecione `testWriteAtleta` no dropdown.
2. Clique em **Executar**.
3. Verifique nos logs: `Lead gravado com ID: ATL-0001`.
4. Abra a aba **Atletas** na planilha — deve ter uma linha com `TESTE Atleta v2`.

Se a linha apareceu: o script está funcionando. Repita para os outros 4 perfis.

### 5. Publicar como Web App

1. Clique em **Implantar → Nova implantação**.
2. Tipo: **App da Web**.
3. Configure:
   - **Executar como:** Eu (conta da operação UR)
   - **Quem tem acesso:** Qualquer pessoa
4. Clique em **Implantar**.
5. Autorize novamente se solicitado.
6. Copie a **URL de implantação** (termina em `/exec`).

> **Atenção:** A URL de implantação é diferente a cada nova implantação. Sempre atualize a variável na Vercel após reimplantar.

### 6. Testar o doGet

Abra a URL `/exec` no browser. Deve retornar:
```json
{"ok":true,"message":"Webhook Ultimate Rivals v2 ativo.","ts":"..."}
```

### 7. Configurar NEXT_PUBLIC_GOOGLE_SCRIPT_URL na Vercel

1. Acesse o dashboard da Vercel → projeto `ur-sistema` → **Settings → Environment Variables**.
2. Adicione ou atualize:
   ```
   Name:  NEXT_PUBLIC_GOOGLE_SCRIPT_URL
   Value: https://script.google.com/macros/s/SEU_ID_DE_IMPLANTACAO/exec
   ```
3. Selecione os ambientes: Production, Preview, Development.
4. Salve.

### 8. Reimplantar na Vercel

1. Na Vercel, vá em **Deployments → Redeploy** (ou faça um push para o branch `main`).
2. Aguarde o build completar.

### 9. Testar ponta a ponta no site

1. Acesse `https://ultimaterivals.org/cadastro`.
2. Escolha o perfil **Atleta**.
3. Preencha todos os campos obrigatórios com dados de teste.
4. Envie o formulário.
5. O site deve mostrar a mensagem âmbar: "Cadastro enviado para processamento..."
6. Abra a planilha — deve ter aparecido uma nova linha na aba **Atletas**.
7. Repita para os outros 4 perfis.

---

## Estrutura do payload enviado pelo site

O site envia como `application/x-www-form-urlencoded` (sem preflight CORS):

```
profile=atleta
source=site
sourceLabel=Site+%2F+Cadastro+UR
page=%2Fcadastro
createdAt=2026-05-18T10%3A00%3A00.000Z
utm_source=instagram
utm_medium=bio
utm_campaign=mvp_lancamento
utm_content=
statusInicial=Novo
prioridadeInicial=A+definir
responsavelInicial=Opera%C3%A7%C3%A3o+UR
proximoPassoInicial=Triagem+inicial
nomeCompleto=Jo%C3%A3o+Silva
whatsapp=31999990000
cidade=Belo+Horizonte
...demais campos do perfil
```

O Apps Script v2 lê via `e.parameter` (flat, direto).

---

## Abas e IDs gerados automaticamente

| Perfil | Aba | Prefixo | Exemplo de ID |
|--------|-----|---------|---------------|
| atleta | Atletas | ATL | ATL-0001 |
| equipe | Equipes | EQP | EQP-0001 |
| patrocinador | Patrocinadores | PAT | PAT-0001 |
| quadra | Quadras | QDR | QDR-0001 |
| comunidade | Comunidade | COM | COM-0001 |

---

## Fallback Tally

O Tally continua preservado em `lib/links.ts`. Em qualquer estado do formulário:
- Se o endpoint não estiver configurado: aparece aviso + botão Tally proeminente.
- Se o envio for processado (estado âmbar): aparece link Tally para o usuário confirmar.
- Se der erro de rede: aparece botão Tally como alternativa.

Links Tally atuais:
- Atleta: `https://tally.so/r/RGb84l`
- Equipe: `https://tally.so/r/2ElxKg`
- Patrocinador: `https://tally.so/r/Y5JoVN`
- Quadra: `https://tally.so/r/vGJ0zD`
- Comunidade: `https://tally.so/r/WOKlpQ`

---

## Quando reimplantar o Apps Script

Reimplantar sempre que:
- Alterar qualquer função no script.
- Adicionar ou remover campos.
- Trocar a conta Google proprietária.

Depois de reimplantar: copiar a nova URL `/exec` e atualizar `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` na Vercel.

---

## Limitações conhecidas

- Sem backend próprio: não é possível confirmar a gravação no browser (resposta opaca).
- Sem banco de dados: Google Sheets é o CRM operacional leve.
- Sem Supabase, login ou pagamento.
- Sem validação antifraude avançada.
- Sem envio automático de confirmação por WhatsApp ou e-mail.
- Honeypot básico (campo oculto `website`).

---

## Problemas comuns

| Sintoma | Causa provável | Solução |
|---------|---------------|---------|
| doPost "Concluído" mas linha não cai | Planilha importada de .xlsx ou SPREADSHEET_ID errado | Criar planilha nativa + rodar setupSheets() |
| Erro de permissão no script | Script não foi autorizado | Executar qualquer função e autorizar |
| "Perfil inválido" no log | Profile em inglês chegando ao GAS v1 | Migrar para GAS v2 (aceita português) |
| URL /exec retorna 404 | Script não publicado ou nova implantação não aplicada | Criar nova implantação e copiar URL |
| Planilha não aparece no script | SPREADSHEET_ID incorreto | Conferir URL da planilha |
| Linha gravada mas sem cabeçalhos | Aba já tinha linhas quando setupSheets() rodou | Limpar a aba e rodar setupSheets() novamente |
