window.onload = () => {
    fetch("cursos/sw_a.json").then(response => response.json()).then(data => {
        document.getElementById("title").innerHTML = "Horario de " + data.name
        document.getElementById("wtitle").innerHTML = data.name
        createTable(data.dias)
        today(data.dias)
    })
}

//make table

function createTable(data) {
    var table = "<tr><th>Horas</th><th>Lunes</th><th>Martes</th><th>Mi&eacute;rcoles</th><th>Jueves</th><th>Viernes</th></tr>"

    for (var i = 0; i < 3; i++) {
        table += "<tr>"
        table += "<td>" + getHour(i) + "</td>"
        for (var j = 1; j <= 5; j++) {
            table += "<td>" + data[j][i] + "</td>"
        }
        table += "</tr>"
    }

    document.getElementById('tabla').innerHTML += table
}

//get hour by number

function getHour(n) {
    var res = undefined
    switch (n) {
        case 0: res = "8:45 - 10:30"
            break
        case 1: res = "10:45 - 12:30"
            break
        case 2: res = "12:45 - 14:30"
    }
    return res
}


function getDay(day){
    const weekday = ["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"]
    return weekday[day]
}

//today table

function today(data){
    var day = new Date()
    day = day.getDay()
    var table = "<table><tr><th>Horas</th><th>" + getDay(day) + "</th></tr><tr>"
    if(day > 0 && day < 6){
        for(var i = 0; i < 3 ; i++){
            table += "<td>"+getHour(i)+"</td><td>"+data[day][i]+"</td></tr><tr>"
        }
        table += "</tr></table>"
    }else{
        table = "<h4>¡No hay clase!</h4>"
    }

    document.getElementById("today").innerHTML = table

    day++
    day %= 7
    table = "<table><tr><th>Horas</th><th>" + getDay(day) + "</th></tr><tr>"
    if(day > 0 && day < 6){
        for(var i = 0; i < 3 ; i++){
            table += "<td>"+getHour(i)+"</td><td>"+data[day][i]+"</td></tr><tr>"
        }
        table += "</tr></table>"
    }else{
        table = "<h4>¡No hay clase!</h4>"
    }

    document.getElementById("tomo").innerHTML = table
}
