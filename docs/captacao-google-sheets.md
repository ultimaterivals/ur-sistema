# Captação UR com Google Sheets

Este documento descreve o fluxo MVP de captação do Ultimate Rivals:

```text
Site UR -> formulário próprio em /cadastro -> Google Apps Script -> Google Sheets
```

O Tally continua preservado em `lib/links.ts` como fallback temporário para atleta, equipe, patrocinador, quadra e comunidade.

## Estrutura no site

- Página principal de captação: `/cadastro`
- Formulários próprios: atleta, equipe, patrocinador, quadra e comunidade
- Endpoint configurável: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
- Origem automática enviada: `Site / Cadastro UR`
- Status inicial enviado: `Novo`
- Prioridade inicial enviada: `A definir`
- Responsável inicial enviado: `Operação UR`
- Próximo passo inicial enviado: `Triagem inicial`

O formulário também envia:

- `profile`
- `source`
- `page`
- `createdAt`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- dados preenchidos pelo visitante

## Abas necessárias no Google Sheets

A planilha deve ter estas abas principais:

- `Atletas`
- `Equipes`
- `Patrocinadores`
- `Quadras`
- `Comunidade`

O modelo em `docs/google-apps-script-webhook.js` cria a linha de cabeçalho se a aba estiver vazia. Se você já estiver usando a planilha CRM criada para o MVP, mantenha os nomes das abas acima.

## Como criar o Apps Script

1. Abra a planilha de leads no Google Sheets.
2. Vá em `Extensões` -> `Apps Script`.
3. Apague o conteúdo inicial do editor.
4. Cole o conteúdo de `docs/google-apps-script-webhook.js`.
5. Copie o ID da planilha pela URL do Google Sheets:

```text
https://docs.google.com/spreadsheets/d/ID_DA_PLANILHA/edit
```

6. Substitua no script:

```js
const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
```

7. Salve o projeto.

## Como publicar como Web App

1. No Apps Script, clique em `Implantar` -> `Nova implantação`.
2. Escolha o tipo `App da Web`.
3. Configure:
   - Executar como: `Eu`
   - Quem pode acessar: `Qualquer pessoa`
4. Clique em `Implantar`.
5. Autorize o acesso à planilha.
6. Copie a URL final terminada em `/exec`.

## Como configurar o site

Crie ou atualize o arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID_DE_IMPLANTACAO/exec
```

Depois rode:

```bash
npm run lint
npm run build
npm run dev
```

Em produção, a mesma variável deve ser configurada no painel da hospedagem.

## Como testar

1. Acesse `/cadastro`.
2. Escolha um perfil.
3. Preencha os campos obrigatórios.
4. Marque a autorização de contato.
5. Envie.
6. Confirme se a mensagem de sucesso apareceu.
7. Abra o Google Sheets e confira se a linha caiu na aba correta.

Teste recomendado por perfil:

- `TESTE ATLETA UR`
- `TESTE EQUIPE UR`
- `TESTE PATROCINADOR UR`
- `TESTE QUADRA UR`
- `TESTE COMUNIDADE UR`

Depois do teste, marque as linhas como teste ou arquive para não misturar com leads reais.

## UTM e origem

Os parâmetros UTM são capturados automaticamente pela URL:

```text
/cadastro?utm_source=instagram&utm_medium=bio&utm_campaign=lancamento_mvp
```

Os campos enviados ao Apps Script são:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`

## Fallback Tally

Se `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` não estiver configurada, o formulário mostra um erro amigável e orienta o uso do fallback Tally. Os links seguem centralizados em:

```text
lib/links.ts
```

## Observação sobre CORS

Google Apps Script pode receber POST de sites externos com `Content-Type: text/plain`, evitando preflight. Em alguns ambientes, o navegador não consegue ler a resposta por limitação de CORS, mesmo quando a linha é gravada. Por isso o site possui fallback `no-cors`: quando necessário, ele considera sucesso se a requisição foi despachada.

Na validação operacional, sempre confirme a linha no Google Sheets.

## Limitações atuais

- Sem backend próprio.
- Sem banco de dados próprio.
- Sem Supabase.
- Sem login.
- Sem pagamento.
- Sem validação antifraude avançada.
- Sem painel administrativo.
- Sem confirmação automática por WhatsApp ou e-mail.

## Próximos passos recomendados

- Publicar o Apps Script e configurar `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
- Testar os cinco perfis com leads de teste.
- Ajustar cabeçalhos finais da planilha conforme a operação real.
- Criar rotina semanal de revisão dos leads.
- Conectar automação de WhatsApp ou e-mail apenas depois da validação operacional.
