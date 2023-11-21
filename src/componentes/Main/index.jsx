import './styles.css'
import img1 from '../../imgs/image1.jpg'

 export function Main() {
  return (
    <>
        <div id="main">
            <img id='image' src={img1} alt="Ambiente com pessoa de casaco laranja" />

            <h1>Transformando <span>espaço</span>, Criando <span>história</span></h1>

            <p>Nós criamos ambientes <strong>exclusívos</strong> e <strong>únicos</strong>, com muito bom gosto e profissionalismo, investimos tempo e <span>dedicação no seu projeto</span>. Nosso compromisso vai além de simplesmente decorar.</p>

            <p>Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância</strong> e <strong>finesse</strong> para todo aquele que estiver ali. Sua história visual começa aqui!</p>
        </div>
        
    </>
  )
}

