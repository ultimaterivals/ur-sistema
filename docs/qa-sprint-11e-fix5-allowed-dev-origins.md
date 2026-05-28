# QA Sprint 11E-Fix 5 - allowedDevOrigins para QA mobile local

## Linha de trabalho

- Branch: `sprint-11e-fix5-allowed-dev-origins`
- Base: `sprint-11e-fix4-header-responsive-final`
- Commit base: `9c93382 Corrige header responsivo desktop e menu mobile`
- Commit da Sprint: gerado ao final desta execucao

## Causa provavel

O problema observado no celular real via IP de rede pode nao estar mais no botao do Header. A pagina carrega, mas a interatividade React pode falhar em ambiente de desenvolvimento se o Next bloquear recursos internos ou conexoes de dev server vindas de uma origem de rede nao autorizada.

O aviso do Next indicava a necessidade de adicionar o host de rede em `allowedDevOrigins` no `next.config`.

## Aviso do Next observado

Conforme contexto da Sprint, o CMD do Next solicitou adicionar o host de rede em `allowedDevOrigins`.

Apos a alteracao e reinicio com `npm run dev -- -H 0.0.0.0`, os logs foram verificados e nao apareceram mensagens:

- `Blocked cross-origin`
- `allowedDevOrigins`
- `Unauthorized`
- `Cross-origin`

## Alteracao aplicada

Arquivo alterado:

- `next.config.ts`

Configuracao adicionada:

```ts
allowedDevOrigins: ["192.168.18.153", "*.local"],
```

Configs existentes preservadas:

- `experimental.webpackBuildWorker`
- `outputFileTracingRoot`
- `reactStrictMode`
- `typescript.ignoreBuildErrors`

## IP local detectado

- `192.168.18.153` na interface `Wi-Fi 3`

## Instrucao para reiniciar servidor

Encerrar qualquer servidor dev antigo e iniciar:

```powershell
npm run dev -- -H 0.0.0.0
```

No celular conectado na mesma rede, acessar:

```text
http://192.168.18.153:3000/?fix5=1
```

## Rotas e recursos testados

Servidor local usado:

- `npm run dev -- -H 0.0.0.0`

URL testada por IP:

- `http://192.168.18.153:3000/?fix5=1` -> HTTP `200`

Recurso interno de desenvolvimento testado:

- `http://192.168.18.153:3000/_next/static/chunks/app_globals_0jn8.0u.css` -> HTTP `200`

O recurso interno foi chamado com `Referer: http://192.168.18.153:3000/?fix5=1` e headers de fetch cross-site para validar que o host autorizado nao era bloqueado pelo Next.

## Validacao tecnica

- `npm.cmd run lint`: passou com 0 erros e 4 warnings ja existentes.
- `npx.cmd tsc --noEmit`: passou.
- `set NODE_OPTIONS=--max-old-space-size=8192` + `npm.cmd run build`: passou.
- Build gerou 22 rotas estaticas.

## Confirmacao de escopo preservado

- Header nao alterado.
- Conteudo nao alterado.
- Home nao alterada.
- Paginas internas nao alteradas.
- Formularios nao alterados.
- Backend nao alterado.
- CRM nao alterado.
- Apps Script nao alterado.
- Google Sheets nao alterado.
- Supabase nao alterado.
- Endpoints nao alterados.
- Nomes de campos nao alterados.
- Hashes nao alterados.
- Patches antigos nao aplicados e nao adicionados ao commit.

## Observacao de QA fisico

Esta Sprint remove o bloqueio de origem de desenvolvimento para o host `192.168.18.153`. A confirmacao final do toque no hamburguer em aparelho fisico deve ser feita acessando a URL com `?fix5=1` apos reiniciar o servidor dev, porque o aparelho real nao esta disponivel no ambiente automatizado.
