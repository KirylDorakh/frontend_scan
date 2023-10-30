import $api from "../http";

export default class SearchService {
    static async getHistograms(body) {
        return $api.post(
            "/objectsearch/histograms", body
        )
    }

    static async getObjectsearch(body) {
        return $api.post(
            "/objectsearch", body
        )
    }

    static async getDocuments(body) {
        return $api.post(
            "/documents", body
        )
    }
}