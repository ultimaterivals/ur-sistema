# Checklist QA — CRM de Leads Ultimate Rivals

Use este checklist antes de considerar a operação de leads pronta para uso real.

## 1. Planilha e Apps Script

- [ ] Planilha Google Sheets nativa criada.
- [ ] Apps Script aberto pela própria planilha.
- [ ] Conteúdo de `docs/google-apps-script-webhook-v2.js` colado.
- [ ] `SPREADSHEET_ID` substituído pelo ID correto.
- [ ] Script salvo sem erro.
- [ ] Função `doGet` disponível.
- [ ] Função `setupSheets` disponível.

## 2. Setup das Abas

Executar `setupSheets()`.

Verificar se foram criadas:

- [ ] Dashboard
- [ ] Atletas
- [ ] Equipes
- [ ] Patrocinadores
- [ ] Quadras
- [ ] Comunidade
- [ ] Tarefas de Contato
- [ ] Configurações
- [ ] Origem dos Leads

Em cada aba:

- [ ] Primeira linha congelada.
- [ ] Cabeçalho formatado.
- [ ] Filtro aplicado.
- [ ] Colunas operacionais presentes.

## 3. Validações de Dados

Nas abas de leads, testar:

- [ ] Coluna `Status` aceita apenas status permitidos.
- [ ] Coluna `Prioridade` aceita apenas Alta, Média, Baixa ou A definir.
- [ ] Coluna `Score` aceita número de 0 a 100.
- [ ] Coluna `Responsável` aceita responsáveis configurados.

Na aba `Tarefas de Contato`:

- [ ] `Status atual` tem validação.
- [ ] `Tipo de contato` tem validação.
- [ ] `Responsável` tem validação.

## 4. Testes Manuais do Apps Script

Executar no editor:

- [ ] `testWriteAtleta()`
- [ ] `testWriteEquipe()`
- [ ] `testWritePatrocinador()`
- [ ] `testWriteQuadra()`
- [ ] `testWriteComunidade()`

Para cada teste, validar:

- [ ] Linha caiu na aba correta.
- [ ] ID gerado com prefixo correto.
- [ ] Status = Novo.
- [ ] Prioridade = A definir.
- [ ] Responsável = Operação UR.
- [ ] Próximo passo = Triagem inicial.
- [ ] Tentativas de contato = 0.
- [ ] Data de atualização preenchida.
- [ ] Status sugerido tem fórmula.
- [ ] Lead está identificado como teste em nome ou observação.

## 5. Publicação do Web App

- [ ] Nova implantação criada como App da Web.
- [ ] Executar como: Eu.
- [ ] Quem tem acesso: Qualquer pessoa.
- [ ] Autorização concluída.
- [ ] URL `/exec` copiada.

Teste do `doGet`:

- [ ] Abrir URL `/exec` no navegador.
- [ ] Confirmar resposta JSON com `Webhook Ultimate Rivals CRM operacional v2 ativo.`

## 6. Configuração no Site

Na Vercel:

- [ ] `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` configurada com a URL `/exec`.
- [ ] Ambientes Production, Preview e Development marcados.
- [ ] Redeploy executado.

No site:

- [ ] Acessar `https://ultimaterivals.org/cadastro`.
- [ ] Ver formulário próprio.
- [ ] Ver fallback Tally disponível.

## 7. Teste Real por Perfil

Usar a URL com UTM:

```text
https://ultimaterivals.org/cadastro?utm_source=qa&utm_medium=site&utm_campaign=crm_operacional&utm_content=teste
```

Enviar:

- [ ] TESTE ATLETA UR
- [ ] TESTE EQUIPE UR
- [ ] TESTE PATROCINADOR UR
- [ ] TESTE QUADRA UR
- [ ] TESTE COMUNIDADE UR

Para cada envio:

- [ ] O site mostrou mensagem de processamento.
- [ ] O lead caiu na aba correta.
- [ ] Os campos principais vieram preenchidos.
- [ ] UTMs foram registradas.
- [ ] Origem do lead = Site / Cadastro UR.
- [ ] Status = Novo.
- [ ] Prioridade = A definir.
- [ ] Responsável = Operação UR.
- [ ] Próximo passo = Triagem inicial.

## 8. Teste do Dashboard

Depois de inserir leads de teste:

- [ ] Total de leads aumentou.
- [ ] Contagem por perfil aumentou.
- [ ] Leads novos da semana aumentou.
- [ ] Status Novo aumentou.
- [ ] Prioridade A definir aumentou.
- [ ] Origem com mais leads aparece.
- [ ] Cidade/polo com mais interessados aparece.
- [ ] Modalidade com mais interessados aparece quando houver modalidade.

Alterar manualmente alguns leads:

- [ ] Um lead para `Qualificado`.
- [ ] Um lead para `Aprovado para próximo passo`.
- [ ] Um lead para `Aguardando contato`.

Validar:

- [ ] Dashboard atualizou leads qualificados.
- [ ] Dashboard atualizou aprovados.
- [ ] Dashboard atualizou aguardando contato.
- [ ] Taxas foram recalculadas.

## 9. Teste de Score

Em qualquer aba de leads:

- [ ] Score 90 gera `Qualificado ou Aguardando contato`.
- [ ] Score 65 gera `Em triagem ou Qualificado`.
- [ ] Score 40 gera `Em triagem ou Não prioritário agora`.
- [ ] Score 20 gera `Não prioritário agora ou Arquivado`.
- [ ] Score vazio deixa status sugerido vazio.

## 10. Teste de Tarefas de Contato

Criar uma linha manual:

- [ ] ID do lead preenchido.
- [ ] Perfil preenchido.
- [ ] Nome preenchido.
- [ ] WhatsApp preenchido.
- [ ] Responsável selecionado.
- [ ] Status atual selecionado.
- [ ] Próxima data de contato preenchida.
- [ ] Tipo de contato selecionado.
- [ ] Mensagem enviada registrada.
- [ ] Resultado registrado após contato.
- [ ] Data de conclusão preenchida quando terminar.

## 11. Higiene Pós-Teste

- [ ] Marcar todos os leads de teste em Observações.
- [ ] Arquivar ou remover linhas de teste, conforme decisão da operação.
- [ ] Garantir que nenhum teste ficou misturado com lead real.
- [ ] Registrar no documento da operação se algo falhou.

## 12. Critérios de Aprovação

O CRM está aprovado para uso MVP quando:

- [ ] Todas as abas existem.
- [ ] Leads dos 5 perfis caem corretamente.
- [ ] IDs são gerados corretamente.
- [ ] Validações funcionam.
- [ ] Dashboard atualiza.
- [ ] Tarefas de contato podem ser registradas.
- [ ] Fallback Tally segue disponível.
- [ ] Nenhum dado real foi inventado.
- [ ] A operação sabe como usar status, prioridade e score.

## Limitações Aceitas no MVP

- O navegador não confirma gravação por causa de `no-cors`.
- A planilha é operacional, não banco de dados.
- Score é manual.
- Dashboard depende da estrutura das colunas.
- Não há login, backend próprio, Supabase, CRM externo ou automação de WhatsApp.
