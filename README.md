# Pet Shop É o Bicho

Cuidamos do seu pet com amor.

Landing page independente em HTML semântico, CSS mobile-first e JavaScript sem dependências. Identidade grafite, amarelo e branco; hero assimétrico; serviços em bento grid; WhatsApp contextual.

## Arquivos

- `index.html`: conteúdo real, links acessíveis e mensagens de fallback sem JS.
- `styles.css`: tokens, layouts responsivos, contraste, foco e movimento reduzido.
- `script.js`: mensagens por serviço, entrada da hero e cascata dos cards.
- `assets/`: retrato ilustrativo gerado por IA em WebP, com versão menor para celular.
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

O iframe em `index.html` carrega o Google Maps por busca de Rua Santa Catarina 4079, Alta Floresta D’Oeste - RO, com `loading="lazy"`. O endereço de busca não equivale a um pino comercial verificado; substitua pelo embed oficial se necessário. A CSP permite os hosts Google Maps. A cidade foi corroborada pelos dados de endereço e telefone em https://www.florestaonline.com.br/listing/pet-shop-e-o-bicho/.

Para alterar o número ou as mensagens, mantenha os links de fallback de `index.html` e o mapa de mensagens em `script.js` sincronizados. Todos os links HTTPS externos incluem `rel="noopener noreferrer"`.

## Imagem

`assets/hero-dog.webp` e `assets/hero-dog-480.webp`: imagem ilustrativa criada pelo imagegen integrado, sem fotografia de cliente real. Prompt de criação em `ASSET-NOTES.md`.
