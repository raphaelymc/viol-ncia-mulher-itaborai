fetch('dados.json')
  .then(response => response.json())
  .then(data => {

    const ctx = document.getElementById('graficoViolencia');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Feminicídio',
          'Tentativa de feminicídio',
          'Estupro',
          'Ameaça'
        ],
        datasets: [{
          label: 'Casos',
          data: [
            data.feminicidio,
            data.tentativa,
            data.estupro,
            data.ameaca
          ],
          backgroundColor: [
            '#8B1E3F',
            '#D97A2B',
            '#E7C84B',
            '#5C5260'
          ]
        }]
      }
    });

  });