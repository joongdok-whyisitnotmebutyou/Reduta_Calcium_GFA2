function clearScreen() {
    document.getElementById("what").value = "";
    }

    function display(value) {
        document.getElementById("what").value += value;
    }
    
    function calculate() {
        var p = document.getElementById("what").value;
        var q = eval(p);
        document.getElementById("what").value = q;
    }