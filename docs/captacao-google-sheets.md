# Captação UR — Google Sheets CRM MVP v2

Fluxo oficial do MVP:

```text
Site UR -> /cadastro -> formulário próprio -> Google Apps Script v2 -> Google Sheets CRM
```

Tally continua preservado como fallback secundário. O CRM operacional no Google Sheets é a base manual para triagem, contato, priorização e acompanhamento dos interessados.

## Estrutura Final da Planilha CRM

A planilha nativa Google Sheets deve ter estas abas:

- `Dashboard`
- `Atletas`
- `Equipes`
- `Patrocinadores`
- `Quadras`
- `Comunidade`
- `Tarefas de Contato`
- `Configurações`
- `Origem dos Leads`

O Apps Script `docs/google-apps-script-webhook-v2.js` cria as abas automaticamente ao executar `setupSheets()`.

## Abas de Leads

As abas `Atletas`, `Equipes`, `Patrocinadores`, `Quadras` e `Comunidade` recebem leads enviados pelo site.

Cada uma delas possui as colunas operacionais padrão:

| Coluna | Função |
|---|---|
| ID do lead | ID sequencial por perfil: ATL, EQP, PAT, QDR ou COM |
| Data de entrada | Data/hora do envio |
| Perfil | Atleta, Equipe, Patrocinador, Quadra ou Comunidade |
| Nome | Nome principal do lead, equipe, marca ou quadra |
| WhatsApp | Canal principal de contato |
| Cidade | Cidade informada |
| Polo de interesse | Polo, região ou cidade de interesse |
| Origem do lead | Fonte principal, geralmente Site / Cadastro UR |
| UTM source | UTM capturada da URL |
| UTM medium | UTM capturada da URL |
| UTM campaign | UTM capturada da URL |
| UTM content | UTM capturada da URL |
| Status | Status operacional do lead |
| Prioridade | Alta, Média, Baixa ou A definir |
| Score | Pontuação manual de 0 a 100 |
| Status sugerido | Fórmula baseada no score |
| Responsável | Pessoa ou área responsável pelo contato |
| Próximo passo | Ação seguinte da operação |
| Próxima data de contato | Data programada para retorno |
| Último contato | Última data de interação |
| Tentativas de contato | Número manual de tentativas |
| Observações | Registro operacional livre |
| Motivo de arquivamento | Motivo quando o lead for arquivado |
| Data de atualização | Data/hora da última gravação inicial |

Depois dessas colunas, cada aba recebe os campos específicos do formulário daquele perfil.

## Status Permitidos

- Novo
- Em triagem
- Qualificado
- Aguardando contato
- Contato feito
- Aguardando retorno
- Aprovado para próximo passo
- Não prioritário agora
- Arquivado

## Prioridades Permitidas

- Alta
- Média
- Baixa
- A definir

## Score e Status Sugerido

O score é manual, de 0 a 100.

Classificação sugerida:

| Score | Status sugerido |
|---:|---|
| 80 a 100 | Qualificado ou Aguardando contato |
| 50 a 79 | Em triagem ou Qualificado |
| 30 a 49 | Em triagem ou Não prioritário agora |
| 0 a 29 | Não prioritário agora ou Arquivado |

O Apps Script insere a fórmula de `Status sugerido` quando o lead é gravado. A decisão final continua sendo humana.

## IDs por Perfil

| Perfil | Aba | Prefixo | Exemplo |
|---|---|---|---|
| atleta | Atletas | ATL | ATL-0001 |
| equipe | Equipes | EQP | EQP-0001 |
| patrocinador | Patrocinadores | PAT | PAT-0001 |
| quadra | Quadras | QDR | QDR-0001 |
| comunidade | Comunidade | COM | COM-0001 |

## Preenchimento Automático no Envio

Ao receber um lead, o Apps Script preenche:

- `Status`: Novo
- `Prioridade`: A definir
- `Responsável`: Operação UR
- `Próximo passo`: Triagem inicial
- `Tentativas de contato`: 0
- `Data de atualização`: data atual
- `Origem do lead`: Site / Cadastro UR, salvo quando enviado pelo site

## Dashboard

O Dashboard é criado por `setupSheets()` com fórmulas para:

- Total de leads
- Leads por perfil
- Leads por status
- Leads por prioridade
- Leads novos da semana
- Leads qualificados
- Leads aprovados para próximo passo
- Leads aguardando contato
- Leads sem resposta
- Origem com mais leads
- Cidade/polo com mais interessados
- Modalidade com mais interessados
- Taxa de qualificação
- Taxa de avanço para próximo passo

### Fórmulas Principais

Total de leads:

```text
=SUM(COUNTA(Atletas!A2:A),COUNTA(Equipes!A2:A),COUNTA(Patrocinadores!A2:A),COUNTA(Quadras!A2:A),COUNTA(Comunidade!A2:A))
```

Leads novos da semana:

```text
=SUM(COUNTIFS(Atletas!B:B,">="&TODAY()-7),COUNTIFS(Equipes!B:B,">="&TODAY()-7),COUNTIFS(Patrocinadores!B:B,">="&TODAY()-7),COUNTIFS(Quadras!B:B,">="&TODAY()-7),COUNTIFS(Comunidade!B:B,">="&TODAY()-7))
```

Leads sem resposta:

```text
=SUM(COUNTIFS(Atletas!M:M,"Aguardando retorno",Atletas!T:T,"<"&TODAY()-7),COUNTIFS(Equipes!M:M,"Aguardando retorno",Equipes!T:T,"<"&TODAY()-7),COUNTIFS(Patrocinadores!M:M,"Aguardando retorno",Patrocinadores!T:T,"<"&TODAY()-7),COUNTIFS(Quadras!M:M,"Aguardando retorno",Quadras!T:T,"<"&TODAY()-7),COUNTIFS(Comunidade!M:M,"Aguardando retorno",Comunidade!T:T,"<"&TODAY()-7))
```

Taxa de qualificação:

```text
Leads Qualificados / Total de Leads
```

Taxa de avanço:

```text
Leads Aprovados para Próximo Passo / Total de Leads
```

Observação: as fórmulas assumem a estrutura criada por `setupSheets()` em uma planilha nativa nova. Se a ordem das colunas for alterada manualmente, ajuste as letras das colunas.

## Tarefas de Contato

A aba `Tarefas de Contato` serve para controlar follow-ups e ações pendentes.

Colunas:

- ID da tarefa
- ID do lead
- Perfil
- Nome
- WhatsApp
- Responsável
- Status atual
- Próxima data de contato
- Tipo de contato
- Mensagem enviada
- Resultado
- Data de conclusão

Tipos de contato:

- Primeiro contato
- Follow-up
- Envio de informação
- Convite UR Play
- Convite reunião
- Proposta comercial
- Validação de dados
- Reativação

## Configurações

A aba `Configurações` guarda as listas usadas para validação:

- Status
- Prioridades
- Perfis
- Responsáveis
- Tipos de contato
- Origens
- Classificação de score

## Origem dos Leads

A aba `Origem dos Leads` registra campanhas e canais.

Colunas:

- ID da campanha
- Nome da campanha
- Canal
- Link usado
- Página de destino
- Público-alvo
- Data de início
- Data de fim
- Leads gerados
- Leads qualificados
- Observações

## Como Configurar do Zero

1. Criar uma planilha Google Sheets nativa.
2. Abrir `Extensões` -> `Apps Script`.
3. Colar o conteúdo de `docs/google-apps-script-webhook-v2.js`.
4. Substituir:

```js
var SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
```

5. Salvar.
6. Executar `setupSheets()`.
7. Autorizar o script.
8. Confirmar que as 9 abas foram criadas.
9. Executar as funções de teste.
10. Publicar como Web App.
11. Configurar `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` na Vercel.

## Como Testar Envio Real

1. Acesse `https://ultimaterivals.org/cadastro`.
2. Adicione UTMs de teste:

```text
?utm_source=qa&utm_medium=site&utm_campaign=crm_operacional
```

3. Envie um lead por perfil:

- TESTE ATLETA UR
- TESTE EQUIPE UR
- TESTE PATROCINADOR UR
- TESTE QUADRA UR
- TESTE COMUNIDADE UR

4. Verifique:

- Caiu na aba correta.
- Gerou ID correto.
- Status veio como `Novo`.
- Prioridade veio como `A definir`.
- Responsável veio como `Operação UR`.
- Próximo passo veio como `Triagem inicial`.
- Tentativas veio como `0`.
- UTMs foram preenchidas.
- Fórmula de status sugerido foi aplicada.

## Limitações

- Google Sheets é o CRM operacional leve, não um banco de dados robusto.
- O envio usa `no-cors`; o navegador não consegue confirmar a gravação lendo a resposta.
- A validação final deve ser feita conferindo a planilha.
- Não há login, backend próprio, Supabase ou pagamento.
- Não há automação nativa de WhatsApp.
- O score é manual.
- O dashboard depende da manutenção da estrutura de colunas.

## Documentos Relacionados

- `docs/crm-operacional-leads.md`
- `docs/checklist-qa-crm-leads.md`
- `docs/playbook-triagem-leads.md`
- `docs/mensagens-primeiro-contato.md`
- `docs/lead-scoring-ur.md`
- `docs/rotina-operacional-leads.md`
