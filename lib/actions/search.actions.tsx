"use server";
import OpenAI from 'openai';


const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANISATION_ID,
});

export const searchForImages = async (query: string) => {
    try {
        // const completionResponse = await client.chat.completions.create({
        //     messages: [{ role: "user", content: query }],
        //     model: "gpt-3.5-urbo",
        // });
        // const info = completionResponse.choices[0].message.content;
        // return JSON.parse(JSON.stringify({info, message: "success"}));


        const generatedImages = await client.images.generate({
            model: "dall-e-2",
            prompt: `generate images of ${query}`,
            size: "1024x1024",
            quality: "standard",
            n:3,
        });

        console.log(generatedImages);
        return JSON.parse(JSON.stringify({info: generatedImages.data, message: "success", topic: query}));
        
        
        
    } catch (error:any) {
        console.log("error", error);
        
       const {message} = error;

       
        return JSON.parse(JSON.stringify({info: message, message: "error"}));
        
    }
}
