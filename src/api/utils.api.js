export const fetchLogger = (response) => {
    console.log(`fetchLogger ${response.url} status`, response.status);
    return response.json().then((jsonData)=>{
        console.log(`fetchLogger ${response.url} data`, jsonData);
        return jsonData
    })
}