// import Chart from 'chart.js/auto';

const playlistContainer = document.querySelector('#playlist-container');

console.log(playlistContainer);
const tempoData = document.querySelector('#tempoData');
const danceData = document.querySelector('#danceData');
const valenceData = document.querySelector('#valenceData');
const speechData = document.querySelector('#speechData');
const sentimentData = document.querySelector('#sentimentData');

// const chart = new Chart(document.getElementById('PlaylistAnalysis'), {
//   type: 'bar',
//   data: {
//     labels: ['tempo', 'danceability', 'valence', 'speechiness', 'sentiment'],
//     datasets: [
//       {
//         xAxisID: 'xAxis1',
//         data: [tempoData, danceData, valenceData, speechData, sentimentData],
//       },
//     ],
//   },
//   options: {
//     backgroundColor: '#32CD32',
//   },
// });