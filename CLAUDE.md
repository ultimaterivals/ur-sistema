# CLAUDE.md — Ultimate Rivals Sistema

## Idioma
Sempre responder em **português brasileiro**. Sem exceções.

## Respostas — Padrão Obrigatório

Toda resposta após uma alteração de código deve incluir:

### 1. Resumo do que foi feito
Lista completa dos arquivos alterados com descrição da mudança em cada um.

### 2. Causa raiz encontrada
Explicar tecnicamente por que o problema existia.

### 3. Correção aplicada
Descrever exatamente o que foi mudado (antes → depois).

### 4. Comandos para aplicar no Windows
Sempre incluir o bloco completo:
```bash
git pull origin claude/sleepy-bardeen-fL6Ck
rmdir /s /q .next
npm run dev
```

### 5. Validações realizadas
- npm run build: passou / falhou
- npm run lint: passou / falhou
- Erros encontrados e corrigidos

### 6. Prints gerados
Listar os prints tirados e o que mostram.

### 7. Riscos e limitações
O que ainda pode ter problema e por quê.

---

## Regras de Negócio — Nunca Violar

- Não usar "Regional" ou "UR Regional"
- Não usar R$ ou preços
- Não prometer prêmio garantido
- Não prometer benefício garantido
- Não prometer carreira profissional
- Hunter **não é olheiro** — é mentalidade
- N3 **não é inferior** — é entrada, preparação, orientação e evolução
- Todos os polos têm o mesmo peso, formato e oportunidade
- Não usar dinheiro no UR Market

## Branch de desenvolvimento
`claude/sleepy-bardeen-fL6Ck` no repositório `ultimaterivals/ur-sistema`

## Stack
- Next.js 16.2.6 (App Router)
- Tailwind CSS v4
- TypeScript strict
- Fontes: Barlow + Barlow Condensed

## Cores principais
- `--ur-black: #0A0A0B`
- `--ur-graphite: #141416`
- `--ur-gold: #D4A437`
- `--ur-sand: #C8B99A`
- `--ur-white: #FAFAFA`

## Comportamento esperado
- Sempre commitar e fazer push após alterações
- Sempre rodar `npm run build` para validar antes do push
- Sempre gerar prints mobile após alterações visuais
- Sempre explicar a causa raiz, não apenas a correção
- Nunca deixar alterações sem commit
- Nunca deixar resposta incompleta sem os comandos de atualização
