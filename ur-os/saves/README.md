# UR OS — Checkpoints de recuperação
Data: 2026-10-23

Este ramo contém cópias **do código HTML publicado** (não são backups do banco de dados, nem pacote completo de dependências de CDN). Não altera main nem Produção da Vercel.

## Saves de código
- v36: mapa espacial anterior, snapshot de deploy Vercel.
- v47: câmera contextual, snapshot de deploy Vercel.
- v51: câmera/composição, snapshot de deploy Vercel (**não aprovado**).

## Referências de projeto
- Conceito visual V49: composição orbital com globos premium na área superior.
- Ajuste aprovado: ícones de área em vez de mini-globos nos cartões inferiores.
- Animação aprovada: rotação suave das esferas.
- **Nenhuma V49–V51 foi aprovada como implementação fiel ao conceito.**
- V49 está pendente de snapshot de código: o download do deployment foi bloqueado na tentativa de recuperação.

## Política para novas versões
1. Criar save do código executável existente e registrar URL/commit.
2. Gerar nova versão em Preview distinto, sem substituir produção.
3. Comparar no Safari com referência visual.
4. Registrar aprovação/reprovação antes de mudar a baseline.
5. Salvar tag/commit do aprovado, além dos assets e fontes.
6. Dados reais: backups e restauração testada separados do frontend.
