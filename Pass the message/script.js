

const a = document.getElementById("text1");

document.getElementById("output").addEventListener("click",
    function () {
        if (a.value == "") {
            alert("Write something");
        }

        document.getElementById("box3").innerHTML = a.value;
        a.value = "";
    })
