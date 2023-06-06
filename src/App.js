import GooglePayButton from "@google-pay/button-react";
import './App.css'

export default function App() {
  return <div className='App'>
    <GooglePayButton
      buttonColor='white'
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        // allowedPaymentMethods: [
        //   {
        //     type: 'CARD',
        //     parameters: {
        //       allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        //       allowedCardNetworks: ['MASTERCARD', 'VISA'],
        //       billingAddressRequired: true,
        //       billingAddressParameters: {
        //         format: "FULL",
        //         phoneNumberRequired: true
        //       }
        //     },

        //     tokenizationSpecification: {
        //       type: 'PAYMENT_GATEWAY',
        //       parameters: {
        //         gateway: "stripe",
        //         "stripe:version": "v3",
        //         "stripe:publishableKey": "pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA"
        //       }
        //     },
        //   },
        // ],
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'acceptblue',
                gatewayMerchantId: 'BCR2DN4TRKDKV7SG',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: 'BCR2DN4TRKDKV7SG',
          merchantName: 'NepSter',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '2',
          currencyCode: 'USD',
          countryCode: 'US',
        },
      }}
      onLoadPaymentData={paymentRequest => {
        console.log('load payment data', paymentRequest);
      }}
      onError={error=>{console.log('@ERROR',error)}}
    />
  </div>
}
