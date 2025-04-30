
function submitQuiz() {
    const form = document.getElementById("quizForm");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    let score = 0;

    questions.forEach((q, index) => {
        const selected = form.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correta) {
            score++;
            resultsDiv.innerHTML += `<p><strong>Questão ${index + 1}:</strong> Correta ✅<br><em>${q.justificativa}</em></p>`;
        } else {
            resultsDiv.innerHTML += `<p><strong>Questão ${index + 1}:</strong> Incorreta ❌<br><em>${q.justificativa}</em></p>`;
        }
    });

    resultsDiv.innerHTML = `<h2>Resultado: ${score} de ${questions.length} questões corretas</h2>` + resultsDiv.innerHTML;
    resultsDiv.style.display = "block";
}

window.onload = function () {
    const form = document.getElementById("quizForm");
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<p><strong>${index + 1}. ${q.enunciado}</strong></p>`;
        q.alternativas.forEach((alt, i) => {
            div.innerHTML += `
                <label><input type="radio" name="q${index}" value="${i}"> ${alt}</label><br>`;
        });
        form.appendChild(div);
    });
};
