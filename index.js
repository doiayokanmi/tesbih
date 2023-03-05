let counts = 0;

function increm() {
counts++;
document.getElementById('display').innerHTML = counts;
}

function reset() {
    counts = 0;
    document.getElementById('display').innerHTML = counts;
}