import './imcCalc.css'

const imcCalc = () => {
  return (
    <div id='calc-container'>
      
        <h2> CALCULADORA DE IMC</h2>

        <br />
        <form id='imc-form'>
            <div className='form-inputs'></div>
            
            <div className='form-controls'>
            <label htmlFor="heigth">Altura</label>
            <input type="text" name='heigth' id='heigth' placeholder='insira a altura '/>
           
            </div>
            <br />
            <div className='form-controls'>
            <label htmlFor="weigth">Peso</label>
            <input type="text" name='weigth' id='weigth' placeholder='insira o peso '/>

          
           
            </div>
            <br />
            <button> Calcular</button> 
            
            <button>Limpar</button>
        </form>
        
        </div>
  )
}

export default imcCalc