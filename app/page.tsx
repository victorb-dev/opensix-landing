'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, ShoppingCart, TrendingUp, Zap, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    alert('Obrigado! Você entrou na lista de espera. Te avisaremos quando abrir as vagas de acesso antecipado.')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* Glow Sutil no Topo */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-indigo-100/40 blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] h-[300px] w-[300px] rounded-full bg-purple-100/30 blur-[80px]" />
      </div>

      {/* Header com Glassmorphism Sutil */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">OpenSix</span>
            </div>
            <button className="rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg">
              Acesso Antecipado
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section com Mockup */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <div className="mx-auto max-w-6xl">
          
          {/* Badge com Animação */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Recuperação Inteligente de Vendas
            </div>
          </div>
          
          {/* Headline com tracking-tight */}
          <h1 className="mb-6 text-center text-5xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            70% dos Clientes Abandonam o Carrinho.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              E Se Você Recuperasse 1 em Cada 3?
            </span>
          </h1>
          
          <p className="mb-8 text-center text-xl text-slate-600 md:text-2xl">
            Nossa IA envia mensagens personalizadas via WhatsApp no momento certo, 
            transformando carrinhos abandonados em vendas reais.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02]"
            >
              Entrar na Lista de Espera
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-500">
            🔥 Vagas limitadas para acesso antecipado • Coloque um e-mail e veja sua taxa de conversão aumentar
          </p>

          {/* MOCKUP DE CELULAR */}
          <div className="mt-20 flex justify-center">
            <div className="relative">
              {/* Glow atrás do celular */}
              <div className="absolute -inset-8 rounded-[4rem] bg-gradient-to-b from-indigo-200 to-purple-200 opacity-20 blur-3xl"></div>
              
              {/* Celular */}
              <div className="relative mx-auto h-[620px] w-[300px] rounded-[3rem] border-[12px] border-slate-900 bg-slate-950 shadow-2xl">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-7 w-36 -translate-x-1/2 rounded-b-2xl bg-slate-900"></div>
                
                {/* Tela - Fundo WhatsApp */}
                <div className="h-full w-full overflow-hidden rounded-[2.2rem] bg-[#ECE5DD] pt-10">
                  
                  {/* Header do Chat WhatsApp */}
                  <div className="bg-[#075E54] px-4 py-3 text-white">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 rotate-180" />
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold">
                        OS
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Sua Loja</div>
                        <div className="text-xs text-white/80">online</div>
                      </div>
                    </div>
                  </div>

                  {/* Área de Mensagens */}
                  <div className="h-full overflow-y-auto p-4 pb-20">
                    
                    {/* Data */}
                    <div className="mb-4 flex justify-center">
                      <span className="rounded-lg bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
                        HOJE
                      </span>
                    </div>

                    {/* Mensagens da Loja (IA) */}
                    <div className="mb-3 flex justify-end">
                      <div className="max-w-[85%] space-y-2">
                        <div className="rounded-2xl rounded-tr-md bg-[#DCF8C6] p-3 shadow-sm">
                          <p className="text-xs leading-relaxed text-slate-800">
                            Olá Maria! 👋 Notei que você deixou o <strong>Vestido Floral Primavera</strong> no carrinho.
                          </p>
                          <p className="mt-1 text-[10px] text-slate-500 text-right">14:42</p>
                        </div>
                        
                        <div className="rounded-2xl rounded-tr-md bg-[#DCF8C6] p-3 shadow-sm">
                          <p className="text-xs leading-relaxed text-slate-800">
                            Consegui um cupom especial de <strong>10% OFF</strong> válido só até hoje! 🎉
                          </p>
                          <p className="mt-2 text-xs font-mono bg-white/80 text-indigo-700 px-2 py-1 rounded inline-block">
                            MARIA10
                          </p>
                          <p className="mt-1 text-[10px] text-slate-500 text-right">14:42</p>
                        </div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="mb-3 flex justify-start">
                      <div className="rounded-2xl rounded-tl-md bg-white p-3 shadow-sm">
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></div>
                          <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce delay-100"></div>
                          <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>

                    {/* Mensagem do Cliente */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white p-3 shadow-sm">
                        <p className="text-xs leading-relaxed text-slate-800">
                          Perfeito! Vou finalizar agora mesmo 😊
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500 text-right">14:45</p>
                      </div>
                    </div>

                  </div>

                  {/* Barra de Input Inferior */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white/95 p-2 backdrop-blur">
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <span className="flex-1 text-xs text-slate-400">Digite uma mensagem</span>
                      <MessageCircle className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Resultado da Conversa */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-6 py-4 shadow-sm">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-sm font-semibold text-green-900">
                  Venda Recuperada: R$ 289,90
                </p>
                <p className="text-xs text-green-700">
                  Tempo total: 19 minutos • ROI: 100%
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Logo Bar - SEM WHATSAPP */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-slate-500">
            Integra com as principais plataformas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-40 grayscale">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-slate-600" />
              <span className="text-lg font-semibold text-slate-600">Shopify</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-slate-600" />
              <span className="text-lg font-semibold text-slate-600">VTEX</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-slate-600" />
              <span className="text-lg font-semibold text-slate-600">Nuvemshop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { label: 'Taxa de Abandono Média', value: '70%', icon: TrendingUp, desc: 'no e-commerce brasileiro' },
            { label: 'Potencial de Recuperação', value: '35%', icon: Zap, desc: 'com IA personalizada' },
            { label: 'Tempo de Setup', value: '5 min', icon: ShoppingCart, desc: 'integração rápida' },
          ].map((stat, index) => (
            <div key={index} className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50">
                <stat.icon className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="mb-2 text-4xl font-bold tracking-tight text-slate-900">{stat.value}</div>
              <div className="text-slate-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section - VERDE WHATSAPP */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Como Funciona
          </h2>
          <p className="text-xl text-slate-600">
            Recuperação automatizada em 3 passos simples
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: ShoppingCart,
              title: 'Detectamos o Abandono',
              description: 'Nossa IA identifica automaticamente quando um cliente abandona o carrinho e analisa seu comportamento de navegação.',
              gradient: 'from-green-500 to-emerald-500',
            },
            {
              icon: MessageCircle,
              title: 'Mensagem Personalizada',
              description: 'Geramos uma mensagem única para cada cliente via WhatsApp, otimizada para máxima conversão baseada em dados reais.',
              gradient: 'from-green-600 to-teal-600',
            },
            {
              icon: TrendingUp,
              title: 'Conversão Garantida',
              description: 'Acompanhamos cada interação e otimizamos continuamente, aumentando suas vendas mês após mês.',
              gradient: 'from-emerald-500 to-green-600',
            },
          ].map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-green-200">
              <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-15`}></div>
              <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-green-500/30`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Por Que Escolher a OpenSix?
            </h2>
            <p className="text-xl text-slate-600">
              Tecnologia de ponta que realmente entrega resultados
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-4 md:grid-cols-2">
            {[
              'IA verdadeiramente personalizada, não templates genéricos',
              'Integração nativa com WhatsApp Business',
              'Análise preditiva de melhor momento para envio',
              'Aprendizado contínuo com cada interação',
              'Configuração em minutos, sem código',
              'Suporte em português 24/7',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-12 text-center text-white shadow-2xl">
          {/* Glow interno */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="relative">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Garanta Seu Acesso Antecipado
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Vagas limitadas • Primeiros usuários terão condições especiais
            </p>
            
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="flex-1 rounded-xl border-0 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Entrar na Lista
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">OpenSix</span>
            </div>
            <p className="text-slate-600">© 2024 OpenSix. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}