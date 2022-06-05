 
function dados(){
    let url = '/user'
    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()
    let data = JSON.parse(xhttp.responseText)[0]
    console.log(data)

    document.getElementById("endereco").innerText = data.endereco
    document.getElementById("telefone").innerText = data.telefone
    document.getElementById("email").innerText = data.email
};