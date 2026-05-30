# Auditoria Sprint 11L — Heroes, campanha e âncoras

Branch auditada: `sprint-11l-separate-season-campaign-page-heroes`

## Diagnóstico geral

A Home da Sprint 11K está compactada e renderiza o Hero como primeiro bloco real. O problema principal encontrado não é duplicação estrutural do Hero na Home, mas mistura editorial entre campanha e páginas internas: a navegação principal ainda aponta várias entradas para âncoras da Home e diversas páginas internas começam com copy genérica de temporada, em vez de hero próprio da área.

## Respostas obrigatórias

1. Páginas que usam “Polos em Disputa”:
   - `/` usa a campanha no Hero da Home.
   - `lib/navigation.ts` usa “Polos em Disputa” no footer apontando para `/`.
   - `/temporada` ainda não usa a campanha como headline principal, embora seja a página correta para aprofundar esse tema.

2. Páginas que usam o mesmo Hero da Home:
   - Nenhuma página interna reutiliza o bloco customizado da Home.
   - Muitas páginas reutilizam o componente visual `SeasonPageHero`, o que é correto como sistema visual, mas a copy de algumas páginas ainda está genérica demais.

3. Páginas que repetem “A temporada começa no UR Play”:
   - A Home usa essa frase no bloco `#ur-play`, como esperado.
   - As páginas internas não repetem a frase exata no hero, mas várias começam com linguagem genérica de temporada e UR Play.

4. Páginas que começam com copy genérica de temporada:
   - `/temporada`, `/ur-play`, `/eventos`, `/ur-market`, `/midia`, `/patrocinadores`, `/quadras-parceiras`, `/atletas`, `/equipes` e `/ranking` ainda carregam tom amplo de temporada/ecossistema no hero.
   - `/ecossistema` já está próximo do objetivo, mas precisa deixar explícitos entrada, nivelamento, jogos, ranking, polos, mídia, recompensas e desenvolvimento.
   - `/cadastro` e `/regulamento` têm hero próprio, mas precisam ser alinhados à copy oficial solicitada na Sprint 11L.

5. IDs duplicados com a Home:
   - Há ids iguais em rotas diferentes, como `jornada`, `polos`, `legends`, `beneficios`, `regulamento` e `cta`.
   - Como aparecem em páginas diferentes, isso não duplica ids no mesmo DOM.
   - Na Home, há aliases internos como `territorios`, `ur-sprint`, `regional`, `recompensas`, `ur-market`, `premiacoes` e `regulamento`; eles são válidos para compatibilidade, mas a navegação global não deve depender deles como rota principal.

6. Hash/âncora que pode causar scroll inicial incorreto:
   - `RouteScrollManager` já força topo quando a rota abre sem hash.
   - O risco atual vem de `lib/navigation.ts`: menu principal, menu mobile e footer apontam muitas entradas para `/#...`, fazendo a experiência iniciar em seções da Home quando o usuário esperava página própria.
   - O logo/home não deve apontar para hash; deve permanecer em `/`.

7. Reaproveitamento excessivo de componentes globais de temporada:
   - `SeasonPageHero` é usado em `/temporada`, `/ur-play`, `/ecossistema`, `/ranking`, `/eventos`, `/ur-market`, `/atletas`, `/equipes`, `/patrocinadores`, `/quadras-parceiras`, `/midia` e `/ct-ur`.
   - O componente pode permanecer; o problema é editorial, não de componente.

8. Páginas que deveriam ser específicas e ainda não são o bastante:
   - `/ur-play`, `/ranking`, `/eventos`, `/ur-market`, `/atletas`, `/equipes`, `/midia`, `/patrocinadores`, `/quadras-parceiras`, `/cadastro` e `/regulamento`.

9. Hero único recomendado por página:
   - `/ur-play`: `COMECE JOGANDO. EVOLUA COM CRITÉRIO.`
   - `/ecossistema`: `O ESPORTE AMADOR PRECISA DE CAMINHO.`
   - `/ranking`: `SUA EVOLUÇÃO VIRA HISTÓRICO.`
   - `/regulamento`: `REGRAS CLARAS PARA JOGAR MELHOR.`
   - `/cadastro`: `ESCOLHA COMO VOCÊ QUER COMEÇAR.`
   - `/eventos`: `A TEMPORADA ACONTECE EM JOGOS, ETAPAS E HISTÓRIAS.`
   - `/ur-market`: `BENEFÍCIOS COMO CONSEQUÊNCIA DA JORNADA.`
   - `/atletas`: `TODO ATLETA TEM UM CAMINHO PARA EVOLUIR.`
   - `/equipes`: `SUA EQUIPE PODE CONSTRUIR UMA CAMPANHA.`
   - `/midia`: `A JORNADA DO ATLETA TAMBÉM PRECISA SER CONTADA.`
   - `/ct-ur`: `TREINO PARA EVOLUIR COM DIREÇÃO.`
   - `/patrocinadores`: `SUA MARCA ENTRA NA JORNADA DO ATLETA.`
   - `/quadras-parceiras`: `SUA QUADRA PODE VIRAR BASE DE UMA COMUNIDADE.`
   - `/temporada`: página oficial da campanha `Temporada 1 — Polos em Disputa`.

10. Blocos que devem ficar apenas em `/temporada`:
    - Copy completa da campanha `Polos em Disputa`.
    - Explicação detalhada de BH, Betim e Contagem.
    - Jornada completa `UR Play → UR Sprint → Regional → Legends`.
    - Detalhes de níveis, ranking, recompensas, UR Market e regulamento resumido da campanha.

## Matriz de decisão

| Página | Estado atual | Decisão |
| --- | --- | --- |
| `/` | Home compactada da Temporada 1, 12 blocos, Hero primeiro | Manter como landing resumida |
| `/temporada` | Página de temporada ainda genérica e sem campanha como headline | Transformar em página oficial da campanha |
| `/ur-play` | Copy de porta de entrada, mas hero ainda genérico | Ajustar hero próprio |
| `/ecossistema` | Próximo do alvo, mas subheadline curta demais | Ajustar hero próprio |
| `/ranking` | Central de evolução genérica | Ajustar hero próprio |
| `/regulamento` | Hero próprio, mas não alinhado à Sprint 11L | Ajustar hero/copy topo |
| `/cadastro` | Hero próprio, mas genérico | Ajustar hero sem alterar formulário |
| `/eventos` | Hero de calendário genérico | Ajustar hero próprio |
| `/ur-market` | Hero correto em intenção, mas copy antiga | Ajustar hero próprio |
| `/atletas` | Hero de jornada antigo | Ajustar hero próprio |
| `/equipes` | Hero de escudo/formação antigo | Ajustar hero próprio |
| `/patrocinadores` | Hero comercial antigo | Ajustar hero próprio |
| `/quadras-parceiras` | Hero confunde quadra com polo da campanha | Ajustar hero próprio |
| `/midia` | Hero editorial antigo | Ajustar hero próprio |
| `/ct-ur` | Hero quase alinhado | Ajustar eyebrow/copy |

## Navegação

`lib/navigation.ts` deve deixar de mandar a navegação principal para âncoras da Home. A navegação principal deve priorizar páginas:

- `Começar` → `/`
- `UR Play` → `/ur-play`
- `Temporada` → `/temporada`
- `Ecossistema` → `/ecossistema`
- `Ranking` → `/ranking`
- `Regulamento` → `/regulamento`
- `Cadastro` → `/cadastro`

No mobile, os grupos devem priorizar páginas internas e usar âncoras apenas para pontos específicos dentro de `/temporada`.

## Escopo preservado

Nenhuma alteração deve tocar backend, formulários, Supabase, Apps Script, Sheets, CRM, endpoints, hashes de formulário, nomes de campos, `next-env.d.ts`, arquivos `.patch` ou `package.json`.
