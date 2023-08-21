import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
import "../Super.css";
import Rodape from "../components/Rodape";
import VLibras from "@djpfs/react-vlibras";

function Home() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavProjeto />
      <Carrossel />
      <br />
      <h1 className="h1-titulo">Saiba mais sobre qualidade de vida</h1>
      <br />
      <p className="txt-quali">
          Qualidade de vida refere-se à percepção geral de bem-estar e satisfação que um indivíduo ou uma comunidade tem em relação a diversos aspectos de suas vidas. Não se limita apenas a aspectos físicos, mas também engloba aspectos emocionais, sociais e psicológicos. Uma boa qualidade de vida indica que as necessidades básicas estão sendo atendidas e que há um equilíbrio saudável entre os diferentes aspectos da vida. A avaliação da qualidade de vida pode variar de pessoa para pessoa e de cultura para cultura. Diferentes indicadores são utilizados para medir a qualidade de vida em diferentes países e contextos. Alguns índices comuns incluem o Índice de Desenvolvimento Humano (IDH), que considera fatores como expectativa de vida, educação e renda, e o Índice de Felicidade Interna Bruta (FIB), que também leva em conta aspectos emocionais e espirituais.</p>

          <h1 className="h1-proposta">Nossa proposta</h1>
      <div className="row-sopa">
        <img src="https://longevidadesaudavel.com.br/wp-content/uploads/2022/09/healthy-young-asian-runner-woman-warm-up-the-body-stretching-before-exercise-1024x683.jpg" alt="" />
        <p className="txt-prod">
        Apresentamos o revolucionário Relógio SaúdeVital, uma fusão perfeita entre tecnologia e bem-estar pessoal. Este não é apenas um relógio, mas sim um companheiro inteligente que está sempre a postos para cuidar da sua saúde de maneira abrangente e personalizada.
<br />
        O Relógio SaúdeVital é um dispositivo de última geração projetado para ser o seu parceiro de saúde em todos os momentos. Equipado com sensores avançados e algoritmos inteligentes, ele monitora continuamente uma ampla gama de métricas vitais para fornecer um retrato completo do seu bem-estar físico e mental.
<br />
        Com um design elegante e ergonômico, o Relógio SaúdeVital se adapta perfeitamente ao seu estilo de vida ativo. Sua interface intuitiva de toque e tela nítida tornam a navegação simples e agradável. Ao sincronizar-se com o seu smartphone, o relógio oferece um painel completo com análises detalhadas e insights sobre a sua saúde. Esteja no controle de cada aspecto do seu bem-estar com a inovação e precisão do Relógio SaúdeVital. Sua jornada para uma vida mais saudável começa no seu pulso.
        </p>
        <br />
      </div>
      <h1 className="h1-beneficios">Benefícios do nosso relógio</h1>
      <p className="txt-beneficios">Monitoramento da Saúde: Se o relógio tem recursos de monitoramento de saúde, como medição de frequência cardíaca, monitoramento de sono e contagem de passos, isso pode ajudar as pessoas a acompanhar e melhorar sua saúde geral.
<br />
Lembretes e Organização: Se o relógio inclui recursos de lembretes e planejamento, como notificações para tomar água, fazer exercícios ou lembrar de compromissos, ele pode ajudar a manter uma rotina saudável e produtiva.
<br />
Gestão do Estresse: Se o relógio oferece recursos para meditação guiada, respiração consciente ou monitoramento do nível de estresse, isso pode ajudar as pessoas a lidar melhor com o estresse do dia a dia.
<br />
Monitoramento do Sono: Se o relógio analisa a qualidade do sono e oferece sugestões para melhorar os padrões de sono, isso pode contribuir para uma melhor saúde física e mental.
<br />
Integração com Tecnologia: Se o relógio se integra com smartphones e aplicativos de saúde, ele pode fornecer uma visão abrangente do bem-estar da pessoa, permitindo um acompanhamento mais eficaz e personalizado.
<br />
Motivação para o Exercício: Se o relógio inclui recursos de rastreamento de exercícios e metas, ele pode incentivar as pessoas a se manterem ativas e engajadas em sua rotina de exercícios.
<br />
Design Atrativo: Se o relógio apresenta um design atraente, confortável e moderno, ele pode ser uma peça de moda além de sua funcionalidade.
<br />
Qualidade e Durabilidade: Se o relógio é fabricado com materiais de alta qualidade e é durável, as pessoas podem ver isso como um investimento a longo prazo em sua saúde e estilo de vida.
<br />
Facilidade de Uso: Se o relógio é intuitivo e fácil de usar, ele pode atrair pessoas de todas as idades e níveis de familiaridade com tecnologia.
<br />
Depoimentos e Avaliações: Comentários positivos de outros compradores que experimentaram uma melhoria em sua qualidade de vida usando o relógio podem influenciar outras pessoas a comprá-lo.</p>
      <br />
      <h1 className="h1-parceria">Parcerias</h1>
      <p className="txt-parceria">É com grande entusiasmo que anunciamos a empolgante parceria entre nossa empresa e Xiaomi, duas líderes globais em inovação tecnológica. Juntos, estamos embarcando em uma jornada emocionante para distribuir relógios tecnológicos de última geração, redefinindo a maneira como as pessoas interagem com o mundo ao seu redor.
        Estamos empolgados com o futuro que essa parceria entre [Sua Empresa] e Xiaomi trará. Juntos, estamos lançando as bases para uma nova era de relógios tecnológicos que se destacam não apenas pela sua funcionalidade, mas também pelo seu impacto na vida das pessoas.
      </p>
      <Cards />
      <br />
      <Rodape />
    </div>
  );
}

export default Home;
