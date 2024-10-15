import { getCSS, tickConfig } from "./common.js";

function gerarGraficoCarros() {
    const marcas = ['Ford', 'Chevrolet', 'Honda', 'Volvo', 'Outro'];
    const quantidade = [13, 11, 5, 1, 3];

    const data = [
        {
            x: marcas,
            y: quantidade,
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Distribuição de Carros na Sala 13',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Marcas de Carros',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidade de Carros',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.getElementById('grafico-carros');
    Plotly.newPlot(grafico, data, layout);
}

gerarGraficoCarros();
