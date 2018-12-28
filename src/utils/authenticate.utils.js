import api from "../service/api";

export const generateOtp = async (payload, callback) => {
    try {
        const response = await api("/api/register/generate-otp", "POST", payload);
        if (response.status === 200) {
            const resBody = await response.json();
            console.log(resBody);
            callback(resBody, payload);
        } else {
            throw new Error("Something went wrong");
        }
    } catch (e) {
        console.log(e);
    }
};

const registerUser = async (payload, callback) => {
    try {
        const body = {
            login: payload
        };
        const response = await api("/api/register", "POST", body);
        if (response.status === 201) {
            const resBody = await response.json();
            console.log(resBody);
            if (resBody) {
                callback(resBody, payload);
            }
        } else {
            throw new Error("User already exists");
        }
    } catch (e) {
        console.log(e);
    }
};

export const checkUserExist = async (payload, callback) => {
    try {
        const response = await api(`/api/register/check-account-exists?login=${payload}`, "GET");
        if (response.status === 200) {
            const resBody = await response.json();
            console.log(response, resBody);
            if (!resBody) {
                registerUser(payload, callback);
            }
        } else {
            throw new Error("User already exists");
        }
    } catch (e) {
        console.log(e);
    }
};

const activateAccountByOtp = async (payload, callback) => {
    try {
        const response = await api(`/api/activate?key=${payload.otp}&username=${payload.username}`, "GET");
        if (response.status === 200) {
            const responseBody = await response.json();
            if (responseBody && responseBody.id_token) {
                const data = {
                    username: payload.username,
                    token: responseBody.id_token
                };
                callback(data);
            } else {
                throw new Error("Token not generated.");
            }
        } else {
            throw new Error("Something went wrong.");
        }
    } catch (e) {
        console.log(e);
    }
};

export const verifyOtpRequest = async (payload, callback) => {
    try {
        const response = await api(`/api/register/validate-otp?otp=${payload.otp}&username=${payload.username}`, "GET");
        if (response.status === 200) {
            activateAccountByOtp(payload, callback);
        } else {
            throw new Error("Something went wrong.");
        }
    } catch (e) {
        console.log(e);
    }
};

export const handleRegisterPassword = async (payload, token) => {
    try {
        const reqBody = {
            password: payload.password
        };
        const headers = {
            Authorization: token
        };
        const response = await api("/api/account", "POST", reqBody, headers);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};
