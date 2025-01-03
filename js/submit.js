document.getElementById('playerForm').onsubmit = async function(e) {
    e.preventDefault();

    const response = await fetch('data.json');
    const data = await response.json();

    data.players.push({
        name: document.getElementById('name').value,
        answer: document.getElementById('answer').value
    });

    console.log('updated data:', data);
}