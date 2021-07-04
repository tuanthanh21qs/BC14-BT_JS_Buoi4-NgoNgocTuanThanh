// BT1
function BT1 () {
    var ST1 = document.getElementById("ST1").value;
    var ST2 = document.getElementById("ST2").value;
    var ST3 = document.getElementById("ST3").value;

    var max = 0;

    KQ1.innerHTML = "";

    parseInt(ST1);
    parseInt(ST2);
    parseInt(ST3);

    if ((ST1 >= ST2) && (ST2 >= ST3)) {
        KQ1.innerHTML = "Thứ tự tăng dần là " + ST3 + " " + ST2 + " " + ST1;
    }

    if ((ST1 >= ST3) && (ST3 >= ST2)) {
        KQ1.innerHTML = "Thứ tự tăng dần là " + ST2 + " " + ST3 + " " + ST1;
    }

    if ((ST2 >= ST1) && (ST1 >= ST3)) {        
        KQ1.innerHTML = "Thứ tự tăng dần là " + ST3 + " " + ST1 + " " + ST2;        
    }

    if ((ST2 >= ST3) && (ST3 >= ST1)) {
        KQ1.innerHTML = "Thứ tự tăng dần là " + ST1 + " " + ST3 + " " + ST2;
    }

    if ((ST3 >= ST1) && (ST1 >= ST2)) {
        KQ1.innerHTML = "Thứ tự tăng dần là " + ST2 + " " + ST1 + " " + ST3;
    }

    if ((ST3 >= ST2) && (ST2 >= ST1)) {
        KQ1.innerHTML = "Thứ tự tăng dần là " + ST1 + " " + ST2 + " " + ST3;
    }
}

// BT2  
function bo (){
    KQ2.innerHTML = "";
    KQ2.innerHTML = "Chào Bố";    
}

function me (){
    KQ2.innerHTML = "";
    KQ2.innerHTML = "Chào Mẹ";    
}

function anhTrai (){
    KQ2.innerHTML = "";
    KQ2.innerHTML = "Chào Anh trai";    
}

function emGai (){
    KQ2.innerHTML = "";
    KQ2.innerHTML = "Chào Em gái";    
}

// BT3

function BT3 (){
    var ST1 = document.getElementById("ST1__3").value;
    var ST2 = document.getElementById("ST2__3").value;
    var ST3 = document.getElementById("ST3__3").value;
  
    var soLe = 0;
    var soChan = 0;

    if ((ST1 % 2) === 0) {
        soChan++;
        
    }else{
        soLe++;
    }   

    if ((ST2 % 2) == 0) {
        soChan++;
    }else{
        soLe++;
    }

    if ((ST3 % 2) == 0) {
        soChan++;
    }else{
        soLe++;
    }

    KQ3__1.innerHTML = "";
    KQ3__2.innerHTML = "";

    KQ3__1.innerHTML = "TỔNG SỐ LẺ LÀ: " + soLe;
    KQ3__2.innerHTML = "TỔNG SỐ CHẴN LÀ: " + soChan;
}

function BT4 (){

    KQ4.innerHTML = "ĐÂY LÀ TAM GIÁC THƯỜNG";

    var C1 = document.getElementById("C1").value;
    var C2 = document.getElementById("C2").value;  
    var C3 = document.getElementById("C3").value;

    if ((C1 == C2) && (C2 == C3)) {
        KQ4.innerHTML = "ĐÂY LÀ TAM GIÁC ĐỀU";
    }else if ((C1 == C2) || (C2 == C3) || (C1 == C3)) {
        KQ4.innerHTML = "ĐÂY LÀ TAM GIÁC CÂN";
    }

    if (((C1**2 + C2**2) == C3**2) || ((C1**2 + C3**2) == C2**2) || ((C2**2 + C3**2) == C1**2)) {
        KQ4.innerHTML = "ĐÂY LÀ TAM GIÁC VUÔNG";
    }  
}

