
    // Import the PayPal SDK
    paypal.Buttons({
        createOrder: function(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '0.01'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name);
            });
        }
    }).render('#paypal-button-container');
    
    // Add click event listener to all elements with class "compra"
    document.querySelectorAll('.compra').forEach(function(element) {
        element.addEventListener('click', function() {
            // Get the paypal button container element
            var paypalButtonContainer = this.nextElementSibling;
            // Render the PayPal button
            paypal.Buttons().render(paypalButtonContainer);
        });
    });
