window.onload = async () => {
    const data = await (await fetch("cursos/sw_a.json")).json()
    document.getElementById("title").innerHTML = "Horario de " + data.name
    document.getElementById("wtitle").innerHTML = data.name
    createTable(data.dias)
    today(data.dias)
}

//make table

function createTable(data) {
    var table = "<tbody>";
    const links = {
        "Visión por Computador" : "https://informatica.cv.uma.es/course/view.php?id=5127",
        "Modelado y Diseño de Software" : "https://informatica.cv.uma.es/course/view.php?id=5050",
        "Gestión de la Información" : "https://informatica.cv.uma.es/course/view.php?id=5004",
        "Ingeniería de Requisitos" : "https://informatica.cv.uma.es/course/view.php?id=5077",
        "Técnicas Computacionales" : "https://informatica.cv.uma.es/course/view.php?id=5119"
    }

    for (var i = 0; i < 3; i++) {
        table += "<tr>"
        table += "<th scope=\"row\">" + getHour(i) + "</th>"
        for (var j = 1; j <= 5; j++) {
            if(i == 0){
                table += "<td><a style=\"text-decoration: none; color: white\" href=\"" + links[data[j][i]] + "\"><b>" + data[j][i] + "</b></a></td>"
            } else {
                table += "<td><a style=\"text-decoration: none; color: white\" href=\"" + links[data[j][i]] + "\">" + data[j][i] + "</a></td>"
            }
        }
        table += "</tr>"
    }

    table += "</tbody>"

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
    var table = "<table class=\"mx-auto w-50 table table-striped\"><thead><tr class=\"text-center\"><th><scope class=\"row\">Horas</scope></th><th><scope class=\"row\">" + getDay(day) + "</scope></th></tr></thead><tbody><tr>"
    if(day > 0 && day < 6){
        for(var i = 0; i < 3 ; i++){
            table += "<td>"+getHour(i)+"</td><td>"+data[day][i]+"</td></tr><tr>"
        }
        table += "</tr></tbody></table>"
    }else{
        table = "<h4>¡No hay clase!</h4>"
    }

    document.getElementById("today").innerHTML = table

    day++
    day %= 7
    table = "<table class=\"mx-auto w-50 table table-striped\"><thead><tr class=\"text-center\"><th><scope class=\"row\">Horas</scope></th><th><scope class=\"row\">" + getDay(day) + "</scope></th></tr></thead><tbody><tr>"
    if(day > 0 && day < 6){
        for(var i = 0; i < 3 ; i++){
            table += "<td>"+getHour(i)+"</td><td>"+data[day][i]+"</td></tr><tr>"
        }
        table += "</tr></tbody></table>"
    }else{
        table = "<h4>¡No hay clase!</h4>"
    }

    document.getElementById("tomo").innerHTML = table
}
