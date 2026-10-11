console.log("Working");

function myfunc(){
    console.log('called');
    console.log(document);
    // console.log(document.getElementById('x1'));
    // console.log(document.getElementById('x1').value);
    // console.log(document.getElementById('x2').value);
    // console.log(document.getElementById('x3').value);        
    
    let amount= document.getElementById('x1').value;
    let roi= document.getElementById('x2').value;
    let duration = document.getElementById('x3').value;

    if(amount == "" || roi == "" || duration == ""){
        document.getElementById('message').innerHTML = 'Values Require';
    }
    else{
        console.log(isNaN(amount));
        if(isNaN(amount) || isNaN(roi) || isNaN(duration)){
            document.getElementById('message').innerHTML = 'Values must be a number';
        }
        else{
            if(amount<=0 || roi<=0 || duration<=0){
                doument.getElementById('message').innerHTML = 'Values must be a positive number';
            }
            else{
                console.log(typeof amount);
                let p = Number(amount);
                let r = parseFloat(roi);
                let n = parseInt(duration);
                
                n = n*12;
                r = r/12/100;
                let emi = p * r * (1+r)**n / ((1+r)**n-1);
                console.log(emi);

                let totalPaid = emi * n;
                let totalInterest = totalPaid - p;

                document.getElementById('message').innerHTML =
                `
                EMI = ${Math.round(emi)} <br />
                Total Paid = ${Math.round(totalPaid)} <br /> 
                Total Interest = ${Math.round(totalInterest)} <br />
                `;
            }
    }
    }
    
}