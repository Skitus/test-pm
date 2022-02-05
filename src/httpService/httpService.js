import axios from 'axios';

class HttpService {

    BASE_URL = 'https://135.181.30.244:27007/api/summaries/';

    async getCandidates(candidatesCurrentPage, candidatesIsPhoto) {
        return (await axios.get(`${this.BASE_URL}`, {
            params: {
                    page: candidatesIsPhoto ? 1 : candidatesCurrentPage,
                    photo: candidatesIsPhoto || "",
            },
        })).data;
    }

}

const httpService = new HttpService();
export default httpService;