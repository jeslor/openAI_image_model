"use server";
import OpenAI from 'openai';


const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANISATION_ID,
});

export const searchForImages = async (query: string) => {
    try {
        const completionResponse = await client.chat.completions.create({
            messages: [{ role: "user", content: query }],
            model: "gpt-3.5-urbo",
        });
        return JSON.parse(JSON.stringify(completionResponse.choices[0].message.content));
        
        
    } catch (error:any) {
       const {message} = error;
       
        return JSON.parse(JSON.stringify(message));
        
    }
}
