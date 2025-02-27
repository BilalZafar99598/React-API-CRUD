const apiRequest = async (url = '', requestObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, requestObj);
        if(!response.ok) throw Error('Please reload the app');

    } catch (error) {
        errMsg = error.message;
    } finally {
        return errMsg;
    }
} 

export default apiRequest;




// const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
//     try {
//         const response = await fetch(url, optionsObj);
//         if (!response.ok) throw Error('Please reload the app');
//     } catch (err) {
//         errMsg = err.message;
//     } finally {
//         return errMsg;
//     }
// }

// export default apiRequest;