function append(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateresult(){
    try{
        const res = eval(document.getElementById("display").value);
        document.getElementById('display').value=res;
    }catch(error){

        document.getElementById('display').value="Error";

    }
}

