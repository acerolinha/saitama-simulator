import { IStage } from '../models/IStage';

export const Stages: IStage[] = [
  {
    stage: 0,
    action: {
      title: 'Socar mosquito',
      reward: 1,
      time: 5,
    },
    item: {
      title: 'luva descartável',
      description: 'Uma luva para cozinhar, não foi devidamente esterelizada',
      price: 10,
    },
  },
  {
    stage: 1,
    action: {
      title: 'Amaciar carne',
      reward: 5,
      time: 10,
    },
    item: {
      title: 'marreta do Chapolin',
      description: 'Uma marreta vermeia',
      price: 50,
    },
  },
  {
    stage: 2,
    action: {
      title: 'Caçar vilão nível Lobo',
      reward: 10,
      time: 15,
    },
    item: {
      title: 'anéis da Shopee',
      description: 'São vagabundos, mas machucam',
      price: 100,
    },
  },
  {
    stage: 3,
    action: {
      title: 'Bater em vilão nível Tigre',
      reward: 20,
      time: 20,
    },
    item: {
      title: 'soco inglês',
      description: 'Anatômico para criminosos',
      price: 300,
    },
  },
  {
    stage: 4,
    action: {
      title: 'Espancar vilão nível Demônio',
      reward: 40,
      time: 25,
    },
    item: {
      title: 'luva da Nike',
      description: 'Se é caro deve ser bom',
      price: 600,
    },
  },
  {
    stage: 5,
    action: {
      title: 'Capturar ameaça nível Dragão',
      reward: 80,
      time: 30,
    },
    item: {
      title: 'luva de boxe',
      description: 'Autografada pelo Whindersson Nunes',
      price: 1000,
    },
  },
  {
    stage: 6,
    action: {
      title: 'Lutar com o Maguila',
      reward: 160,
      time: 35,
    },
    item: {
      title: 'máquininha de cortar cabelo',
      description: 'Você está ficando calvo de tanto bater',

      price: 1500,
    },
  },
  {
    stage: 7,
    action: {
      title: 'Enfrentar ameaça nível Deus',
      reward: 160,
      time: 35,
    },
    item: {
      title: 'comprar capa vermelha',
      description:
        'Do avesso tem uma estrela amarela e o número 13, mas ninguém sabe o que significa',
      price: 2000,
    },
  },
];
