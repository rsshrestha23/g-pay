function onGooglePayLoaded() {
    window.googlePayClient = new google.payments.api.PaymentsClient({
        environment: "TEST"
    });
}