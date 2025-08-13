class Configuration {

    private static instance: Configuration;
    private BaseURL: string;
    private apiURL: string;

    private constructor() {
        this.BaseURL = 'https://faceapi.regulaforensics.com';
        this.apiURL = `${this.BaseURL}/api`;
    }

    public static getInstance(): Configuration {
        if (!this.instance) {
            this.instance = new Configuration();
        }
        return this.instance;
    }
    public getBaseURL(): string {
        return this.BaseURL;
    }
    public getApiURL(): string {
        return this.apiURL;
    }
}

const configuration = Configuration.getInstance();

interface ConfigType {
    baseURL: string;
    apiURL: string;
}


export const config: ConfigType = {
    baseURL: configuration.getBaseURL(),
    apiURL: configuration.getApiURL()
}


