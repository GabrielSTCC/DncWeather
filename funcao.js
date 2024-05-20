async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('estado').value = data.uf;
    } catch (error) {
        console.log(error.message);
    }
    

}

async function getPrevisao(){
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timeformat=unixtime&forecast_days=1`);
        const data = await response.json();
        console.log(data);
        document.getElementById('temperatura').value = `Previsão de tempo de acordo com a região: ${data.current.temperature_2m}°C`;
    }catch(error){
        console.log(error.message);
    }
}