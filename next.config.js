/** @type {import('next').NextConfig} */

// Configuração principal do Next.js
const nextConfig = {
  // Permite carregar imagens de qualquer domínio (opcional, útil para futuras imagens externas)
  images: {
    // Para usar imagens da pasta public, não precisa configurar nada.
    // Esta opção deixa mais fácil adicionar imagens externas no futuro:
    remotePatterns: [],
  },
};

module.exports = nextConfig;
