var ctx = document.getElementById('myChart');

d3.csv('Datos.csv')
.then( (datos) => {
    
    console.log(datos)

    let Region = datos.map( function(elemento, indice){
        console.log(indice, elemento)
        return elemento.Region
    } )

    let Numero = datos.map(function (elemento, indice) {
        console.log(indice, elemento)
        return elemento.Numero
    })

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Region,
            datasets: [{
                label: 'Numero de declaraciones de emergencia (por region)',
                data: Numero,
                backgroundColor: [
                    'rgba(0, 99, 132, 0.6)',
                    'rgba(20, 99, 132, 0.6)',
                    'rgba(40, 99, 132, 0.6)',
                    'rgba(60, 99, 132, 0.6)',
                    'rgba(80, 99, 132, 0.6)',
                    'rgba(100, 99, 132, 0.6)',
                    'rgba(120, 99, 132, 0.6)',
                    'rgba(140, 99, 132, 0.6)',
                    'rgba(160, 99, 132, 0.6)',
                    'rgba(180, 99, 132, 0.6)',
                    'rgba(200, 99, 132, 0.6)',
                    'rgba(220, 99, 132, 0.6)'
                    
                ],
                borderColor: [
                    'rgba(0, 99, 132, 1)',
                    'rgba(20, 99, 132, 1)',
                    'rgba(40, 99, 132, 1)',
                    'rgba(60, 99, 132, 1)',
                    'rgba(80, 99, 132, 1)',
                    'rgba(100, 99, 132, 1)',
                    'rgba(120, 99, 132, 1)',
                    'rgba(140, 99, 132, 1)',
                    'rgba(160, 99, 132, 1)',
                    'rgba(180, 99, 132, 1)',
                    'rgba(200, 99, 132, 1)',
                    'rgba(220, 99, 132, 1)'
                                   
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

})
