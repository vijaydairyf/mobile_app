import Config from "react-native-config";

export default async (url, method, reqBody = null, headers = {}) => {
    try {
        const URL = Config.BASE_URL.concat(url);
        const body = reqBody && JSON.stringify(reqBody);

        const fetchParams = {method, headers};

        if ((method === "POST" && !body) || (method === "PUT" && !body)) {
            throw new Error("Request body required");
        }

        if (body) {
            fetchParams.body = body;
            fetchParams.headers["Content-Type"] = "application/json";
        }

        const fetchPromise = fetch(URL, fetchParams);
        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Request timeout");
            }, 5000);
        });

        const response = await Promise.race([fetchPromise, timerPromise]);
        return response;
    } catch (err) {
        return err;
    }
};
