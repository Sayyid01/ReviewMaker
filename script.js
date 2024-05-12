// function generateTestimoni(form) {
    // let username = form.nama.value;
    // let testimoni = form.testimoni.value;
    // let inisial = username[0].toUpperCase();

    // document.getElementById('initial').innerHTML = inisial;
    // document.getElementById('uname').innerHTML = inisial + username.slice(1);
    // document.getElementById('testimoniText').innerHTML = testimoni;
// }

$(document).ready(function () {
    const form = document.querySelector("#testimoniInput");
    form.addEventListener('submit', (event)=>{
        let username = form.elements["nama"].value;
        let testimoni = form.elements["testimoni"].value;
        let inisial = username[0].toUpperCase();
    
        document.getElementById('inisial').innerHTML = inisial;
        document.getElementById('uname').innerHTML = inisial + username.slice(1);
        document.getElementById('testimoniText').innerHTML = testimoni;

        event.preventDefault(); //prevent the form from resseting the entire pages
    });

    const testimoniText = document.querySelector('#testimoniText');
    document.querySelector("#left").addEventListener('click', () => {
        testimoniText.style.textAlign = 'left';
    });

    document.querySelector("#center").addEventListener('click', () => {
        testimoniText.style.textAlign = 'center';
    });

    document.querySelector("#right").addEventListener('click', () => {
        testimoniText.style.textAlign = 'right';
    });

    document.querySelector("#justify").addEventListener('click', () => {
        testimoniText.style.textAlign = 'justify';
    });

    // Global variable 
    var element = $(".list li");

    // Global variable 
    var getCanvas;

    $("#btn-Preview-Image").on('click', function () {
        html2canvas(element, {
            logging: true,
            useCORS: true, // This helps with handling cross-origin images
            scale: 2, // You can adjust scaling to manage the output resolution
            onrendered: (function (canvas) {
                $("#previewImage").empty().append(canvas); // Clear existing canvas before appending new one
                getCanvas = canvas;
            }),
            catch: (function (error) {
                console.error('Error during canvas rendering:', error);
            })
        });
    });


    $("#btn-Convert-Html2Image").on('click', function () {
        var imgageData =
            getCanvas.toDataURL("image/png");

        // Now browser starts downloading  
        // it instead of just showing it 
        var newData = imgageData.replace(
            /^data:image\/png/, "data:application/octet-stream");

        $("#btn-Convert-Html2Image").attr(
            "download", "Testimoni.png").attr(
                "href", newData);
    });
});