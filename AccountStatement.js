$( document ).ready(function() 
{

// Start JS - Print HTML to PDF 
            $('#PrintPage').click(function(){
            $('#MyHtmlData').printThis();     
            });
// End JS - Print HTML to PDF 

// Start JS - Display Printed Date to HTML    
            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            // This arrangement can be altered based on how we want the date's format to appear.
            let currentDate = `${day}/${month}/${year}`;
            console.log(currentDate); // "15/2/2024"
            document.getElementById("PrintedDate").innerHTML = currentDate;
// End JS - Display Printed Date to HTML  

});


// Star JS - tbAccountPayments
            const tbAccountPayments_JsonData = [
            {
                "PaymentDate": "2023/01/01",
                "Amount": "R100.00",
                "Reference": "CDHCHG",
                "Comment": "Thank you for your payment"
            },
            {
                "PaymentDate": "2023/01/01",
                "Amount": "R100.00",
                "Reference": "CDHCHG",
                "Comment": "Thank you for your payment"
            },
            {
                "PaymentDate": "2023/01/01",
                "Amount": "R100.00",
                "Reference": "CDHCHG",
                "Comment": "Thank you for your payment"
            }
            ];

            const tbAccountPayments_tbBody = document.querySelector("#tbAccountPayments tbody");

            tbAccountPayments_JsonData.forEach(AccountPayment=>{

                const row=document.createElement('tr');

                const PaymentDateCell=document.createElement('td');
                PaymentDateCell.textContent=AccountPayment.PaymentDate;
                row.appendChild(PaymentDateCell);

                const AmountCell=document.createElement('td');
                AmountCell.textContent=AccountPayment.Amount;
                row.appendChild(AmountCell);

                const ReferenceCell=document.createElement('td');
                ReferenceCell.textContent=AccountPayment.Reference;
                row.appendChild(ReferenceCell);

                const CommentCell=document.createElement('td');
                CommentCell.textContent=AccountPayment.Comment;
                row.appendChild(CommentCell);

                tbAccountPayments_tbBody.appendChild(row);

});
// End  JS - tbAccountPayments

// Start JS - tbROfficialCallCharges

$.getJSON("/tbROfficialCallCharges.Json", function(data)
{
    var tbROfficialCallCharges_Data = '';
    $.each(data, function(key,value)
    {
        tbROfficialCallCharges_Data += '<tr>';
        tbROfficialCallCharges_Data += '<td>'+ value.ApprovedDate +'</td>';
        tbROfficialCallCharges_Data += '<td>'+ value.NumberDialed +'</td>';
        tbROfficialCallCharges_Data += '<td>'+ value.CallDate +    '</td>';
        tbROfficialCallCharges_Data += '<td>'+ value.CallTime +    '</td>';
        tbROfficialCallCharges_Data += '<td>'+ value.CallCost +    '</td>';
        tbROfficialCallCharges_Data += '<td>'+ value.Comment +     '</td>';
        tbROfficialCallCharges_Data += '</tr>';
    });

    $('#tbROfficialCallCharges').append(tbROfficialCallCharges_Data);

    // "ApprovedDate": "2023/01/01",
    // "NumberDialed": "0624045342",
    // "CallDate": "2023/01/01",
    // "CallTime": "00:10",
    // "CallCost": "R5.00",
    // "Comment": "Call Reversed"

});


// End   JS - tbROfficialCallCharges