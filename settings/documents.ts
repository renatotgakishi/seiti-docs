import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  
  
  {
    heading: 'MEU PORTFÓLIO - PAYLOAD',
    title: 'Portfólio Payload',
    href: '/portfolio',
    items: [
      { title: '01 - Introdução', href: '/01-introducao' },
      { title: '02 - Instalação Payload', href: '/02-instalacao-payload' },
      { title: '03 - Configuração Next.js', href: '/03-configuracao-next' },
      { title: '04 - Estrutura do Projeto', href: '/04-estrutura-projeto' },
      { title: '05 - Padrão de Blocos', href: '/05-padrao-blocos' },
      { title: '06 - Bloco Home / Hero', href: '/06-bloco-home' },
      { title: '07 - Bloco Sobre', href: '/07-bloco-sobre' },
      { title: '08 - Bloco Serviços', href: '/08-bloco-servicos' },
      { title: '09 - Bloco Trabalhos', href: '/09-bloco-trabalhos' },
      { title: '10 - Bloco Depoimentos', href: '/10-bloco-depoimentos' },
      { title: '11 - Bloco Blog', href: '/11-bloco-blog' },
      { title: '12 - Bloco Contato', href: '/12-bloco-contato' },
      { title: '13 - Montagem Pages', href: '/13-montagem-pages' },
      { title: '14 - SEO e Performance', href: '/14-seo-performance' },
      { title: '15 - Deploy Final', href: '/15-deploy' },
    ],
  },
  { spacer: true },
  {
    title: 'Documentador',
    heading: 'TEMPLATE ORIGINAL',
    href: '',
    // @ts-ignore
    noLink: true,
    items: [
      {
        heading: 'Introduction',
        title: 'Basic Setup',
        href: '/basic-setup',
        items: [
          { title: 'Installation', href: '/installation' },
          { title: 'Setup', href: '/setup' },
          { title: 'Changelog', href: '/changelog' },
        ],
      },
      { spacer: true },
      {
        title: 'Navigation',
        href: '/navigation',
        heading: 'Documents',
      },
      {
        title: 'Structure',
        href: '/structure',
        items: [
          {
            title: 'Deep',
            href: '/deep',
            items: [
              { title: 'Deeper', href: '/deeper', items: [{ title: 'Even deeper', href: '/even-deeper' }] },
            ],
          },
        ],
      },
      { spacer: true },
      {
        title: 'Markdown',
        href: '/markdown',
        heading: 'Components',
        items: [
          { title: 'Cards', href: '/cards' },
          { title: 'Diagrams', href: '/diagrams' },
          { title: 'Filetree', href: '/filetree' },
          { title: 'Lists', href: '/lists' },
          { title: 'Maths', href: '/maths' },
          { title: 'Notes', href: '/notes' },
          { title: 'Steps', href: '/steps' },
          { title: 'Table', href: '/table' },
          { title: 'Tabs', href: '/tabs' },
        ],
      },
    ],
  },
]