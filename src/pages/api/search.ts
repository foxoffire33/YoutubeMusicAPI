import type { NextApiRequest, NextApiResponse } from 'next'
import { YTMUSIC } from "@/models";

type ResponseData = {
    message: string
    data?: any;
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const sessionInfo = "";

        const api = new YTMUSIC(sessionInfo);

        const searchTerm = req.query.q || '';
        const searchType = req.query.type || "songs";

        const data = await api.search(searchTerm as string,{
            filter: "songs",
        });

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        res.status(500).json({ message: "Error", error: (error as Error).message });
    }
}
