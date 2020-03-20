function loadMenu() {
    fetch("http://localhost:1337/categories")
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        console.log(data);
        var content = "";
        var content2 = "";
        var right = false;

        for ( x in data) {
            if (right) {
                content2 += "<div><h2>" + data[x].Title + "</h2>" +
                "<p>" + data[x].Description + "</p></div>";
            }
            else {
                content += "<div><h2>" + data[x].Title + "</h2>" +
                "<p>" + data[x].Description + "</p></div>";
            }
            right = !right;
        }

        document.getElementById('menu-left').innerHTML = content;
        document.getElementById('menu-right').innerHTML = content2;
    });
}