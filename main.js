let loadHome = () => {
    Controller('/partialPages/Home.html', 'GET', null);
}

let loadAboutUs = () => {
    Controller('/partialPages/AboutUs.html', 'GET', null, true);
}

let Controller = (url, method, data, emptyView = false) => { 
    $.ajax({
        url: url,
        method: method,
        data: data,
        success: (result) => {
            if(emptyView) {
                $('#Body').empty();
            }
            $('#Body').append(result);
        },
        error: function (result) {
            console.log(result);
        }
    });
}