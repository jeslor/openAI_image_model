import ImageContainer from "@/components/containers/imageContainer";
import { SearchForm } from "@/components/forms/searchForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 tablet:py-24 px-4 tablet:px-24">
        <h1 className="text-2xl tablet:text-6xl font-semibold text-center">Open AI image model</h1>
        <div className="py-6 w-full">
          <p className="pb-6 opacity-65 tablet:py-8 text-center">
            This is a simple example of how to use the OpenAI image model. You can use it to generate images from text.
          </p>
          <SearchForm />
        </div>
        <div>
        <ImageContainer />
        </div>
    </main>
  );
}
