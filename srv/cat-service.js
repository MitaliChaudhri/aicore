const axios = require('axios');

const {getDestination} = require('@sap-cloud-sdk/core');

module.exports = async function (srv) {
     srv.on('getData', async (req) => {
        try {
            // Retrieve the destination
            const destination = await getDestination('AiBuildAppDestination');

            // Make the API call
            // const response = await axios.get(destination + '/v2/inference/deployments/d08de7fe31a12597/v2/greet', {
            //     // headers: {
            //     //     'Authorization': `Bearer ${destination.authTokens[0].value}` // Adjust based on your auth
            //     // }
            // });

            let r = await axios({
                method: 'get', // or 'post', 'put', etc.
                url: destination.uri + '/v2/inference/deployments/d08de7fe31a12597/v2/greet'//,
                // headers: {
                //     'Authorization': `Bearer ${destination.authentication}` // adjust if needed
                // }
            });
            console.log(response);
        } catch (error) {
            console.error('Error calling destination API:', error);
            throw new Error('Failed to fetch data from the destination API');
        }
     });
};
