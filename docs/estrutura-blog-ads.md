# Estrutura futura de blog, midia e ads

## Objetivo

Preparar o site publico do Ultimate Rivals para evoluir como ecossistema esportivo com midia propria, conteudo editorial e plataforma de monetizacao, sem integrar AdSense, backend ou CMS nesta etapa.

## Blog e midia

Nesta fase a Home ja recebeu uma area editorial que deve funcionar como extensao da midia propria UR, com cards preparados para conteudos como:

- O que e o Ultimate Rivals.
- Como funciona o UR Play.
- Como o atleta entra no ranking.
- Midia oficial, bastidores e cobertura.
- Ativacoes comerciais e comunidade.

## Estrutura recomendada para a proxima sprint

Criar:

- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `lib/content/blog.ts`

Modelo sugerido de post:

```ts
type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  imageKey?: keyof typeof siteImages;
  tags: string[];
  body: string[];
};
```

Regras editoriais:

- Nao publicar resultados, numeros ou nomes como se fossem oficiais sem validacao.
- Usar categorias como `Ecossistema`, `UR Play`, `Ranking`, `Equipes`, `Midia`, `Patrocinadores` e `Comunidade`.
- Cada artigo deve ter CTA para `/cadastro` ou para uma pagina pilar.
- Cada imagem deve vir de `lib/content/site-images.ts`.

## Ads e patrocinadores

Componentes disponiveis:

- `AdSlotHorizontal`
- `SponsoredBlock`

Uso recomendado:

- Abaixo do hero da Home.
- Entre blocos editoriais.
- Em futuras paginas de blog, entre o conteudo principal e a sidebar.
- Em secoes comerciais de patrocinadores.

Prioridade comercial:

1. Ativacoes proprias de patrocinadores UR.
2. Blocos nativos de marca dentro de conteudo editorial.
3. Espacos de parceiro oficial por temporada, evento ou polo.
4. Ads programaticos apenas em etapa futura, quando fizer sentido para audiencia e experiencia.

## Como manter elegante

- Nao transformar a Home em pagina poluida de banners.
- Usar poucos slots, bem posicionados e com hierarquia clara.
- Diferenciar midia patrocinada de conteudo editorial.
- Manter contraste, legibilidade e experiencia mobile.

## Integrações futuras

Podem entrar em sprint propria:

- Google AdSense ou Google Ad Manager.
- CMS ou MDX para posts.
- Tags/categorias dinamicas.
- Relatorios comerciais.
- Blocos nativos patrocinados por campanha.

Nada disso foi integrado nesta etapa para preservar a estabilidade do MVP.
