//DOM Event Handling in js

document.getElementById('btn').onclick = function(){
    console.log('clicked');

    let amount = document.getElementById('x1').value;
    let roi = document.getElementById('x2').value;
    let duration = document.getElementById('x3').value;

    if (amount == "" || roi == "" || duration == "") {
        document.getElementById('message').innerHTML = 'Values are Required';
    }
    else {
        if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
            document.getElementById('message').innerHTML =
                'Values must be a number...';
        }
        else {
            if (amount <= 0 || roi <= 0 || duration <= 0) {
                document.getElementById('message').innerHTML =
                    'Values must be a positive number...';
            }
            else {
                console.log(amount,roi,duration);
                
                //               
                amount = Number(amount);
                roi = Number(roi);
                duration = Number(duration);

                let year =1;
                let openingBalance = 0;
                while(year<=duration){

                    let interest = (openingBalance+amount)*roi/100;
                    interest = Math.round(interest);
                    let closingBalance = openingBalance+amount+interest;
                    console.log(year,openingBalance,amount,interest,closingBalance);

                    //DOM Manipulation
                    let trTag= document.createElement('tr');
                    console.log(trTag);

                    let tdTag1=document.createElement('td');
                    let tdTag2=document.createElement('td');
                    let tdTag3=document.createElement('td');
                    let tdTag4=document.createElement('td');
                    let tdTag5=document.createElement('td');
                    console.log(tdTag1);

                    //filling table cells (td) with content
                    tdTag1.innerHTML=year;
                    tdTag2.innerHTML=openingBalance;
                    tdTag3.innerHTML=amount;
                    tdTag4.innerHTML=interest;
                    tdTag5.innerHTML=closingBalance;

                    //append td tag in tr tag
                    trTag.append(tdTag1,tdTag2,tdTag3,tdTag4,tdTag5);

                    //apppend tr tag in tbody (having id="result") tag
                    document.getElementById('result').append(trTag);

                    

                    year++
                    openingBalance = closingBalance; 
                }
            }
        }
    }
}