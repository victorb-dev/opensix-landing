export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">OpenSix</div>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Começar Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
        <h1 className="text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
          Inteligência que<br />transforma vendas
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Recupere carrinhos abandonados, preveja tendências e automatize seu e-commerce com IA.
        </p>
        
        {/* Form de Captura */}
        <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Comece gratuitamente
          </h3>
          <iframe
            src="https://tally.so/r/688EJP"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulário de Contato"
            className="rounded-lg"
          ></iframe>
          <p className="text-xs text-gray-500 mt-4">
            Sem cartão de crédito. Sem compromisso.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">de recuperação média de carrinhos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">atendimento automatizado</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">3x</div>
              <div className="text-gray-600">mais conversões com IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Simples assim
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Conecte sua loja
            </h3>
            <p className="text-gray-600">
              Integração com Shopify, Nuvemshop, WooCommerce e outras plataformas em minutos.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              IA aprende seu negócio
            </h3>
            <p className="text-gray-600">
              Nossa inteligência analisa padrões, comportamentos e oportunidades únicas da sua loja.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Veja resultados
            </h3>
            <p className="text-gray-600">
              Carrinhos recuperados, vendas aumentadas e insights acionáveis toda semana.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
            Tudo que você precisa
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🔄 Recuperação Inteligente
              </h3>
              <p className="text-gray-600">
                WhatsApp automático com cupons personalizados para cada cliente que abandona o carrinho.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📊 Previsões Semanais
              </h3>
              <p className="text-gray-600">
                Relatórios com tendências, oportunidades geográficas e melhores momentos para campanhas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🎯 Otimização de Anúncios
              </h3>
              <p className="text-gray-600">
                IA analisa seus criativos e sugere ajustes para reduzir CPA e aumentar ROAS.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🤖 Chatbot Inteligente
              </h3>
              <p className="text-gray-600">
                Atendimento automático 24/7 no WhatsApp com respostas personalizadas por IA.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📈 Dashboard Completo
              </h3>
              <p className="text-gray-600">
                Acompanhe KPIs, conversões e ROI em tempo real em uma interface limpa e intuitiva.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🔗 Integrações Nativas
              </h3>
              <p className="text-gray-600">
                Conecte com Meta Ads, Google Ads, plataformas de e-commerce e muito mais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Pronto para vender mais?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de e-commerces que já aumentaram suas vendas com OpenSix.
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
          Começar Agora Gratuitamente
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-semibold mb-4">OpenSix</div>
              <p className="text-gray-400 text-sm">
                Inteligência para e-commerce que realmente funciona.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Recuperação de Carrinho</li>
                <li>Previsões com IA</li>
                <li>Chatbot WhatsApp</li>
                <li>Integrações</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sobre</li>
                <li>Blog</li>
                <li>Carreiras</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacidade</li>
                <li>Termos de Uso</li>
                <li>LGPD</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 OpenSix. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}