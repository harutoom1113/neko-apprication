"use client";
import { useState } from "react";
import { fetchImage } from "./fetch-image";

type CatImageProps = {
  url: string;
};

export default function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);
  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className="flex  justify-center items-center flex-col bg-gray-100">
      <button
        className="bg-sky-500 text-white rounded-lg my-10 text-xl px-4"
        onClick={refreshImage}
      >
        ほかの猫を見る
      </button>
      {imageUrl && <img className="w-1/2 h-auto" src={imageUrl} />}
    </div>
  );
}
