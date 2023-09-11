const baseUrl = 'http://api.telegram.org/bot6502249027:AAHRTVOSBQPBgs5cIh0_2xkFSGP4-t5rytU/';

export const sendMessage = async (message) => {
    const uri = `${baseUrl}sendMessage?chat_id=-4086077636&text=${message}`;
    const response = await fetch(uri);
    console.log(response);
}