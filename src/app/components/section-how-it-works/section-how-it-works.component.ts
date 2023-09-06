import { Component } from '@angular/core';

@Component({
  selector: 'app-section-how-it-works',
  templateUrl: './section-how-it-works.component.html',
  styleUrls: ['./section-how-it-works.component.css']
})
export class SectionHowItWorksComponent {
  accordionItems = [
    {
      title: 'Equipe',
      content: 'Trabalho com uma equipe contendo um nutricionista, uma médica e um treinador que sou eu, juntos iremos te entregar um treino e uma dieta específica para o objetivo que você deseja alcançar. Caso haja necessidade de atuação médica, é cobrado um valor adicional de $100 para uma avaliação diretamente com a Dr Gabriela, onde ela irá avaliar o caso e indicará o melhor tratamento. ',
      isOpen: false
    },
    {
      title: 'Suporte',
      content: 'Forneço um suporte para dúvidas e correções de vídeo, ou seja, você pode (e deve) filmar diariamente alguns exercícios do seu treino e me enviar no WhatsApp para que isso seja feito.',
      isOpen: false
    },
    {
      title: 'Acompanhamento',
      content: 'Além disso trabalho com feedbacks a cada 7 ou 14 dias, via formulário, com algumas informações para que eu entenda como o planejamento feito para você está funcionando e principalmente para saber se você está conseguindo ter adesão ao plano. Considero esses pontos acima o diferencial do meu trabalho, pois de nada adianta ter uma super periodização de treinos no papel, se na hora de executar você não consegue extrair o seu melhor.',
      isOpen: false
    }
  ];

  toggleAccordion(index: number) {
    this.accordionItems.forEach((item, i) => {
      if (i === index) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }
    });
  }

}
