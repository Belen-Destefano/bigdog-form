

function SecretComponent({handleClick}) {

    document.body.style.backgroundImage = 'url(/backgroundSecret.jpg)';
    
  return (
        <div style={{marginTop: '3%',  backgroundColor: 'rgb(0 0 0 / 70%)', padding: '10%'}}>
            <h1 style={{    color: 'white' , textAlign: 'center'}}>
                INGRESASTE LAS KEYWORDS SECRETAS CORRECTAMENTE
            </h1>
            <h2 style={{ color: 'white', textAlign: 'center'}}>ENVIAREMOS UN AGENTE DEVELOPER DE BIG DOG PARA QUE PUEDA ASISTIRTE</h2>
            <h2 style={{ color: 'white' , textAlign: 'center'}}>Te pedimos que Cierres la página y no reveles nuestra identidad. BigDog mantiene una cantidad limitada y selecta de clientes.</h2>

            <button onClick={handleClick} style={{color: 'white', backgroundColor: '#696969', borderColor: 'white'}}>Volver</button>
        </div>
  )
}

export default SecretComponent