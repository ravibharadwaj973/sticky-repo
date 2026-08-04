exports.handler = async (event) => {
    console.log("SNS Event:", JSON.stringify(event));

    return {
        statusCode: 200,
        body: "Lambda executed successfully"
    };
};