"use server";
import OpenAI from 'openai';


const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANISATION_ID,
});

export const searchForImages = async (query: string) => {
    try {
        const res = await client.chat.completions.create({
            messages: [{ role: "user", content: "Say this is a test" }],
            model: "gpt-4o-mini",
        });
        
        console.log(res);
        

        
    } catch (error) {
        console.log('server error', error);
        
    }
}
