# Pet Shop É o Bicho

Cuidamos do seu pet com amor.

Landing page independente em HTML semântico, CSS mobile-first e JavaScript sem dependências. Identidade grafite, amarelo e branco; hero assimétrico; serviços em bento grid; WhatsApp contextual.

## Arquivos

- `index.html`: conteúdo real, links acessíveis e mensagens de fallback sem JS.
- `styles.css`: tokens, layouts responsivos, contraste, foco e movimento reduzido.
- `script.js`: mensagens por serviço e entrada suave dos cards.
- `assets/`: retrato ilustrativo gerado por IA em WebP, com versão menor para celular.
- `map-placeholder.html` e `map-placeholder.css`: placeholder local do mapa.
- `vercel.json`: headers opcionais se hospedado na Vercel; GitHub Pages ignora este arquivo.

## Uso

Abra `index.html` ou sirva esta pasta por um servidor HTTP estático. Não há build, npm, analytics, cookies ou backend. Os CTAs abrem o WhatsApp; nenhuma mensagem é enviada automaticamente.

No GitHub Pages, selecione a branch `main` e a pasta `/ (root)` em Settings > Pages.

## Dados confirmados

- Nome: Pet Shop É o Bicho.
- Endereço: Rua Santa Catarina 4079 - AFO.
- WhatsApp: +5569999976279.
- Serviços: banho, tosa, vacinação, produtos e acessórios.

Não foram inventados preços, horários, depoimentos ou perfis sociais. A vacinação é apresentada como consulta de disponibilidade e orientação profissional.

## Integrações

Substitua o `src` do iframe em `index.html` pelo URL oficial de incorporação do Google Maps quando o pino for confirmado. Remova o atributo `sandbox` do placeholder ao integrar o Maps, que requer scripts. A CSP já permite os hosts Google Maps. Não há cidade/UF presumida a partir da sigla AFO.

Para alterar o número ou as mensagens, mantenha os links de fallback de `index.html` e o mapa de mensagens em `script.js` sincronizados. Todos os links HTTPS externos incluem `rel="noopener noreferrer"`.

## Imagem

`assets/hero-dog.webp` e `assets/hero-dog-480.webp`: imagem ilustrativa criada pelo imagegen integrado, sem fotografia de cliente real. Prompt de criação em `ASSET-NOTES.md`.
