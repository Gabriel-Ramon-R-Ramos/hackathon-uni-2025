# Landing page — Hackathon Universitário 2025

Breve descrição
-----------------
Esta é a landing page do Hackathon Universitário 2025 — uma página responsiva construída para divulgar o evento, explicar as etapas, benefícios e incentivar inscrições.

Seções principais
-----------------
- Hero: título chamativo com subtítulo e botão de CTA.
- About: cards explicando propósito, metodologia, impacto social e inovação (com ícones SVG temáticos).
- Benefits: vantagens do evento (networking, formação, empregabilidade etc.) com ícones SVG estilizados.
- Timeline / Etapas: apresentação das fases (Inscrições, Formação de Times, Desenvolvimento, Avaliação) com marcadores visuais.
- CTA: área para chamada final e link para inscrições.

Diferenciais técnicos
---------------------
- Frontend: React + TypeScript + Vite
- Estilos: Tailwind CSS + utilities customizadas em `src/index.css`
- UI: componentes organizados em `src/components`
- Comportamento:
	- `use-gradient-hover` (hook) para gradientes dinâmicos aplicados ao texto (usa CSS vars e background-clip para evitar bloquear o conteúdo).
	- `use-inview` (hook) para revelar elementos ao rolar a página de forma performática (requestAnimationFrame + unobserve para evitar retriggers).
- Ícones: SVGs inlined nos componentes para permitir gradientes via `<defs>` e uso de variáveis CSS do tema.

Como rodar localmente
---------------------
1. Instale dependências:

```powershell
npm install
```

2. Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

3. Abra o navegador em `http://localhost:5173` (ou a porta indicada pelo Vite).

Notas rápidas para desenvolvedores
---------------------------------
- Os componentes estão em `src/components` (Ex.: `HeroSection.tsx`, `AboutSection.tsx`, `BenefitsSection.tsx`, `TimelineSection.tsx`, `CTASection.tsx`).
- Hooks úteis:
	- `src/hooks/use-gradient-hover.ts` — controlar gradiente que segue o mouse sobre elementos de texto.
	- `src/hooks/use-inview.ts` — centraliza a lógica de IntersectionObserver.
- Estilos globais e utilitários estão em `src/index.css`.
- Ícones originais estão em `public/icons/` mas muitos foram inlined para permitir gradientes dinâmicos.

Próximos passos sugeridos
------------------------
- Validar visual em Chrome e Firefox (especialmente comportamento do gradiente no hover).
- Opcional: extrair SVGs para componentes reutilizáveis e gerar IDs dinâmicos para `<defs>` se os mesmos SVGs forem usados várias vezes.
- Escrever um pequeno PR/CHANGELOG descrevendo as mudanças de UI e acessibilidade.

Contato
-------
Para dúvidas sobre a implementação, abra uma issue ou PR no repositório.

— Equipe de desenvolvimento
