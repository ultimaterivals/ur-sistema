# Auditoria Sprint 12A — Referência visual Horizons

Branch: `sprint-12a-home-temporada-design-premium`

## Arquivo analisado

Arquivo solicitado:

- `horizons-export-ultimate-rivals-home-copy-aplicada-com-abridor.zip`

Arquivo encontrado e usado como referência:

- `C:\Users\Usuário\Downloads\horizons-export-ultimate-rivals-home-copy-aplicada.zip`

Observação: o ZIP com sufixo `com-abridor` não foi localizado no workspace nem em Downloads. O export encontrado tem estrutura e conteúdo compatíveis com a referência visual descrita e foi usado apenas como benchmark.

## Estrutura do export

O export é um projeto Vite/React, com `apps/web/src/pages/HomePage.jsx`, componentes React próprios, `framer-motion`, `react-router-dom`, Tailwind e componentes UI gerados. Essa estrutura não deve ser importada para o projeto oficial.

## Elementos visuais aproveitáveis

- Cards grandes com bordas douradas, fundo preto/grafite e glow moderado.
- Hero alto, com imagem esportiva escurecida, textura e destaque tipográfico.
- Ritmo mobile mais respirável, com blocos maiores e menos aparência de manual.
- Seções com cards de jornada e progressão.
- Métricas compactas no Hero.
- Cards de polos com sensação de escudo/território.
- Cards de ranking e regras em painéis premium.
- Estética gameficada: etapas, badges, progressão, missão, ranking e pertencimento.
- Preto/dourado com amarelo elétrico em CTAs e detalhes.
- Textura sutil de areia e luz de arena.

## Elementos que não devem ser importados

- Stack Vite.
- `react-router-dom`.
- `framer-motion` como dependência nova.
- Código completo do projeto Horizons.
- Header/Footer do export.
- Lógica fake de formulário.
- Números fictícios apresentados como reais.
- Promessas de carreira profissional.
- Promessas de dinheiro, benefício garantido ou recompensa automática.
- Termos desalinhados com a direção oficial.
- Qualquer cópia de assets, logos, marcas ou composição que substitua o projeto oficial.

## Componentes oficiais que podem ser adaptados

- `app/page.tsx`: principal arquivo de aplicação da referência visual.
- `components/season/*`: referência de textura, cards e tokens já existentes, sem necessidade obrigatória de alteração.
- `components/layout/header.tsx`: não alterado nesta sprint.
- `lib/navigation.ts`: não alterado nesta sprint; a navegação 11L já separa Home, campanha e páginas internas.
- `app/globals.css`: não alterado nesta sprint; os tokens existentes já suportam preto/grafite/dourado.

## Decisão de implementação

A Home oficial será mantida no Next.js, usando os assets e componentes locais. A referência Horizons orienta o ritmo visual, o tamanho dos cards, o Hero premium, a textura, o glow e o uso de blocos gamificados. O código do export não será copiado integralmente nem a stack será migrada.

## Critérios de proteção editorial

- A jornada oficial passa a ser `UR Play → UR Sprint → UR Series → UR Legends`.
- O termo `Regional` não deve aparecer na Home oficial.
- `Ultimate Rivals` deve ser a marca principal.
- `UR` fica reservado aos nomes oficiais: `UR Play`, `UR Sprint`, `UR Series`, `UR Legends`, `UR Market`, `UR Coins` e `CT UR`.
- Benefícios e recompensas devem ser apresentados como possíveis e condicionados a regras, parceiros ativos e disponibilidade.
