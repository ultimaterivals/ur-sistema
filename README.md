# Ultimate Rivals Site MVP

Fundação técnica do site público Ultimate Rivals criada manualmente com Next.js, TypeScript e Tailwind CSS.

Esta etapa entrega a base visual, estrutural e técnica do MVP público. Não há backend, login, Supabase, pagamento, ranking real, painel administrativo ou integrações externas.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS v4
- ESLint flat config compatível com Next atual
- Componentização em `components/`
- Conteúdo estático em `lib/content/`

## Como instalar

O ambiente usado para criar este scaffold não tinha `npm`, `npx`, `pnpm` ou `yarn` disponíveis no shell. Por isso, as dependências não foram instaladas aqui.

Em uma máquina com Node.js instalado:

```bash
npm install
```

## Como rodar

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Como validar

```bash
npm run lint
npm run build
```

## Estrutura principal

```text
app/
  page.tsx
  layout.tsx
  globals.css
  robots.ts
  sitemap.ts
  ur-play/page.tsx
  ranking/page.tsx
  equipes/page.tsx
  temporada/page.tsx
  ur-market/page.tsx
  patrocinadores/page.tsx
  eventos/page.tsx
components/
  home/
  layout/
  pages/
  ui/
lib/
  content/
  navigation.ts
  utils/
public/
  brand/
  images/
legacy/
  static-site/
```

## Rotas criadas

- `/`
- `/ur-play`
- `/ranking`
- `/equipes`
- `/temporada`
- `/ur-market`
- `/patrocinadores`
- `/eventos`

As rotas internas são placeholders estruturais. Elas usam textos como `temporada em formação`, `ranking em formação` e `polo em formação` para evitar dados reais falsos.

## Como criar um novo componente

1. Crie o arquivo dentro do grupo correto:
   - UI genérico: `components/ui/`
   - Layout global: `components/layout/`
   - Blocos da Home: `components/home/`
   - Páginas reutilizáveis: `components/pages/`
2. Exporte uma função React nomeada.
3. Receba dados por props.
4. Reutilize `Button`, `Card`, `Badge` e `SectionHeader` antes de criar novos padrões visuais.
5. Se o componente precisar de conteúdo fixo, coloque os dados em `lib/content/`.

Exemplo:

```tsx
import { Card } from "@/components/ui/card";

type ExampleCardProps = {
  title: string;
  description: string;
};

export function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-black uppercase text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/62">{description}</p>
    </Card>
  );
}
```

## Como criar uma nova rota pública

1. Crie uma pasta em `app/nova-rota/`.
2. Adicione `page.tsx`.
3. Para placeholder, reutilize `PlaceholderPage` de `components/pages/placeholder-page.tsx`.
4. Adicione o link em `lib/navigation.ts` se a rota fizer parte do menu.
5. Adicione a rota em `app/sitemap.ts`.

## Assets

Assets legados foram preservados em `legacy/static-site`.

Assets de marca úteis foram copiados para:

```text
public/brand/logo-ur.png
public/brand/logo-ur-3d.png
public/brand/logo-hunter.png
public/images/hero-ur-emblem.png
```

## Regras desta fase

- Não criar backend.
- Não criar login.
- Não integrar Supabase.
- Não integrar pagamento.
- Não criar ranking real.
- Não criar painel administrativo.
- Não inventar atletas, números, rankings, eventos ou polos reais.
- Usar placeholders explícitos até os dados serem validados.

## Referências técnicas

- Next.js App Router e instalação: https://nextjs.org/docs/app/getting-started/installation
- Next.js CSS e Tailwind: https://nextjs.org/docs/app/getting-started/css
- Tailwind CSS com Next.js: https://tailwindcss.com/docs/guides/nextjs
- ESLint no Next.js atual: https://nextjs.org/docs/app/api-reference/config/eslint
