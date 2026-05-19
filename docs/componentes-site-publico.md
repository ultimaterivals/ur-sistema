# Componentes — Site Público Ultimate Rivals

**Sprint 3 — Refinamento visual e componentes reutilizáveis**  
Criados em: 2026-05-18  
Diretório: `components/site/`

---

## Visão geral

Todos os componentes abaixo foram criados para eliminar duplicação entre páginas e padronizar o Design System UR no site público.

**Design System UR:**
- Fundo: `#030405`
- Dourado: `#ffd84d` / `#ffe98b`
- Off-white: `#f5efdd`
- Tipografia: `font-black uppercase` para títulos, `text-white/70` para descritivos

---

## Componentes criados

### `PageSection`
**Arquivo:** `components/site/page-section.tsx`

Wrapper de seção padrão. Substitui a definição inline `PageSection` que estava duplicada em todos os arquivos de página (8+ instâncias idênticas).

```tsx
import { PageSection } from "@/components/site/page-section";

<PageSection id="minha-secao" className="bg-[#07080c]">
  {/* conteúdo */}
</PageSection>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | `string?` | — | Anchor de scroll |
| `className` | `string?` | `""` | Classes adicionais (ex: cor de fundo) |
| `children` | `ReactNode` | — | Conteúdo da seção |

---

### `IconCard`
**Arquivo:** `components/site/icon-card.tsx`

Card padrão com ícone Lucide + título + descrição. Substitui `IconCard` inline duplicado em 5 páginas (atletas, equipes, patrocinadores, ur-market, eventos).

```tsx
import { IconCard } from "@/components/site/icon-card";
import type { IconCardItem } from "@/components/site/icon-card";

const item: IconCardItem = { icon: Trophy, title: "Ranking", description: "..." };

<IconCard item={item} premium={true} />
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `item` | `{ icon: LucideIcon; title: string; description: string }` | — | Dados do card |
| `premium` | `boolean?` | `false` | Fundo dourado/gradiente premium |
| `className` | `string?` | — | Classes adicionais |

---

### `SegmentCtaPanel`
**Arquivo:** `components/site/segment-cta-panel.tsx`

Seção de CTA final usada no rodapé de todas as páginas de conteúdo. Substitui o bloco `<section class="overflow-hidden border-t border-[#ffd84d]/15...">` duplicado em 5+ páginas.

```tsx
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";

<SegmentCtaPanel
  eyebrow="CTA Atletas UR"
  title="Comece pelo UR Play."
  description="A jornada está pronta enquanto validação acontece."
  actions={
    <>
      <Button href="/cadastro#atleta">Começar</Button>
      <Button href="/ranking" variant="secondary">Ranking</Button>
    </>
  }
/>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `eyebrow` | `string` | — | Badge no topo (ex: "CTA Atletas UR") |
| `title` | `string` | — | Título principal do CTA |
| `description` | `string` | — | Parágrafo descritivo |
| `actions` | `ReactNode` | — | Botões CTA (grid gap-3 aplicado automaticamente) |
| `className` | `string?` | `""` | Classes adicionais na seção |

---

### `EcosystemFlowPanel`
**Arquivo:** `components/site/ecosystem-flow-panel.tsx`

Painel de fluxo numerado com arrows entre etapas. Usado para mostrar jornadas ou ciclos com 3–6 passos.

```tsx
import { EcosystemFlowPanel } from "@/components/site/ecosystem-flow-panel";

<EcosystemFlowPanel
  items={performanceBenefitFlow}
  cols={4}
/>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `readonly { label: string; description: string }[]` | — | Itens do fluxo |
| `cols` | `3 \| 4 \| 5 \| 6?` | `4` | Colunas no layout desktop |
| `showArrows` | `boolean?` | `true` | Mostrar setas entre etapas |

**Usado em:** `/patrocinadores` (market relationship), `/ur-market` (performance benefit)

---

### `PremiumEmptyState`
**Arquivo:** `components/site/premium-empty-state.tsx`

Card premium para estados de "em formação" — substitui o padrão repetido de `<Card premium flex-col>` com ícone + eyebrow badge + heading grande + descrição + footer.

```tsx
import { PremiumEmptyState } from "@/components/site/premium-empty-state";

<PremiumEmptyState
  icon={Building2}
  eyebrow="polo em validação"
  title="Polo em formação."
  description="Espaços esportivos poderão virar centros vivos de competição."
  footer="operação regional validada antes da expansão"
/>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `icon` | `LucideIcon?` | — | Ícone no canto superior esquerdo |
| `eyebrow` | `string?` | — | Badge de status (canto superior direito) |
| `title` | `string` | — | Heading principal |
| `description` | `string` | — | Texto descritivo |
| `footer` | `string?` | — | Linha de status ao rodapé do card |
| `className` | `string?` | — | Classes adicionais |

---

### `AthletePreviewCard`
**Arquivo:** `components/site/athlete-preview-card.tsx`

Painel de preview de perfis de atleta. Mostra lista numerada com label/status/note à esquerda e 4 cards menores à direita.

```tsx
import { AthletePreviewCard } from "@/components/site/athlete-preview-card";

<AthletePreviewCard
  eyebrow="Perfis de atleta"
  rows={athleteProfilePlaceholders}
  sideCards={athleteHeroBadges.slice(0, 4).map((title) => ({ title }))}
/>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `eyebrow` | `string` | — | Badge do card principal |
| `rows` | `readonly { label; status; note }[]` | — | Itens da lista numerada |
| `sideCards` | `readonly { title; note? }[]` | — | Cards pequenos à direita |
| `emptyNote` | `string?` | "sem dados reais de atleta nesta etapa" | Texto padrão dos side cards |

**Usado em:** `/atletas`

---

### `TeamPreviewCard`
**Arquivo:** `components/site/team-preview-card.tsx`

Painel de preview de equipes. Estrutura similar ao `AthletePreviewCard` com coluna value em vez de status.

```tsx
import { TeamPreviewCard } from "@/components/site/team-preview-card";

<TeamPreviewCard
  eyebrow="Preview visual"
  rows={teamPreviewRows}
  sideLabels={["identidade em validação", "elenco em validação", ...]}
/>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `eyebrow` | `string` | — | Badge do card principal |
| `rows` | `readonly { label; value; note }[]` | — | Itens da lista numerada |
| `sideLabels` | `readonly string[]` | — | Títulos dos cards menores (ícone Shield) |

**Usado em:** `/equipes`

---

### `PartnerActivationCard`
**Arquivo:** `components/site/partner-activation-card.tsx`

Card de cota ou ativação comercial. Mostra ícone, status badge, título, descrição e lista de itens.

```tsx
import { PartnerActivationCard } from "@/components/site/partner-activation-card";

<PartnerActivationCard
  item={{
    label: "Cota Temporada",
    status: "cotas em formação",
    description: "Modelo para conectar marca a ranking e mídia.",
    items: ["temporada em formação", "métricas após validação"],
  }}
  premium={true}
/>
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `item` | `PartnerActivationItem` | — | Dados do card |
| `premium` | `boolean?` | `false` | Estilo premium dourado |

**Tipo `PartnerActivationItem`:**
```ts
{
  icon?: LucideIcon;     // padrão: Building2
  label: string;
  status: string;
  description: string;
  items?: readonly string[];
}
```

**Usado em:** `/patrocinadores` (quota models)

---

### `RewardPreviewCard`
**Arquivo:** `components/site/reward-preview-card.tsx`

Item de vitrine de recompensa. Mostra número + título + categoria + status em layout compacto.

```tsx
import { RewardPreviewCard } from "@/components/site/reward-preview-card";

{marketShowcaseItems.map((item, index) => (
  <RewardPreviewCard index={index} item={item} key={item.title} />
))}
```

**Props:**
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `item` | `{ title; category; status }` | — | Dados do item |
| `index` | `number` | — | Índice para número formatado (01, 02...) |

**Usado em:** `/ur-market` (showcase panel)

---

## Páginas refatoradas

| Página | `PageSection` | `IconCard` | `SegmentCtaPanel` | Componente especializado |
|--------|:---:|:---:|:---:|---|
| `/atletas` | ✓ | ✓ | ✓ | `AthletePreviewCard` |
| `/equipes` | ✓ | ✓ | ✓ | `TeamPreviewCard` |
| `/patrocinadores` | ✓ | ✓ | ✓ | `EcosystemFlowPanel`, `PartnerActivationCard` |
| `/ur-market` | ✓ | ✓ | ✓ | `EcosystemFlowPanel`, `RewardPreviewCard` |
| `/eventos` | ✓ | ✓ | ✓ | — |
| `/ecossistema` | ✓ | — | — | — |
| `/ct-ur` | ✓ | — | — | — |
| `/midia` | ✓ | — | — | — |
| `/quadras-parceiras` | ✓ | — | — | — |

---

## Melhorias de linguagem aplicadas

- Hero cards: "sem X real nesta etapa" → "disponível após validação oficial"
- Equipes: `TeamPreviewCard` side labels → "estrutura pronta para equipes reais"
- Atletas: preview card eyebrow → "perfil ativo após validação"
- ur-market: "sem produto real" → "disponível após validação oficial"
- Equipes: adicionado tagline `"Toda rivalidade tem nome..."` na seção de mídia
- Atletas: adicionado tagline `"No UR, cada jogo registrado é um passo..."` na seção de níveis
- Patrocinadores: adicionado tagline `"O patrocinador certo não aparece apenas no evento..."` na seção não é só logo
- ur-market: adicionado tagline `"No UR, resultado não acaba no apito final..."` na seção desempenho → benefício

---

## Regras do Design System

- Nunca inventar atletas, equipes, dados ou métricas reais
- Nunca criar Supabase, login, pagamento ou banco de dados
- Não alterar formulários, captação, Tally, Apps Script ou Google Sheets
- Manter linguagem "em formação" / "após validação" como estado honesto do MVP
- Premium cards usam `bg-[radial-gradient(circle_at_18%_0%,rgba(255,216,77,0.13)...)]` via prop `premium`
