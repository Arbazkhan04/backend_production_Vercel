const { senEmail } =  require('../Miscellenous/sendEmail');

const sendEmailAgent = async(req, res) => {
    try {
        let payLoad =  req.body;
        const emailResponse = await senEmail(payLoad);
        res.json({
            message:emailResponse
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            result:null
        })
    }
}


module.exports = {
    sendEmailAgent
}