import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Gamme, Hotel, Tag } from "component-library";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug as string;
  const response = await fetch(
    "http://127.0.0.1:1337/api/hotels?pLevel=5&filters[slug][$eq]=" + slug,
    {
      headers: {
        Authorization:
          "Bearer 2c49f05b2e50babe1b3da01f58cb3b09678e8c556a6297ada0448631909ef727d43a2585db75a4f0506eb2e9e728a40dd6d789baccd55213427b7649d8007aa9f25cfe5989d7d7ba35be8b4d8d6b2e0771bc59c02e9e8ff731d9e8478c5b1e33f36cfe303ab9924d72f3d88a0a7670e6622b478f18d8e69cb8a76426a1735065",
      },
    }
  );
  return response;
};
export default function Index() {
  const data = useLoaderData<typeof loader>();
  //const hotelResponse: HotelResponse = data;
  const hotel: Hotel = data.data[0] as Hotel;
  const gamme: Gamme = data.data[0].gamme as Gamme;
  const tags: Tag[] = data.data[0].tags as Tag[];

  return (
    <div className="bg-white p-2">
      <div className="h-screen">
        <h1 className="text-black font-bold text-xl">{hotel.nom}</h1>
        <span
          className="text-black text-l"
          style={{
            color: gamme.color || "#000000",
          }}
        >
          APPART'CITY {gamme?.name}{" "}
          {new Array(gamme.stars).fill(0).map(() => "⭐")}
        </span>
        <div className="flex ">
          {hotel.image.map((img, index) => (
            <img
              className="w-40 h-40 p-2 "
              key={index}
              src={"http://localhost:1337/" + img.url}
              alt={img.alternativeText}
              loading="lazy"
            />
          ))}
        </div>
        <div>
          {tags.map((tag, index) => (
            <div
              className="flex items-center content-center rounded-xl w-fit p-1"
              key={index}
              style={{
                border: " solid 2px " + tag.tag_category?.color,
              }}
            >
              <img
                className="w-6 h-6 "
                key={index}
                src={"http://localhost:1337/" + tag.tag_category?.picto?.url}
                alt={tag.tag_category?.picto?.alternativeText || ""}
                loading="lazy"
              />
              <span className="text-sm text-black">{tag.label}</span>
            </div>
          ))}
        </div>
        <p className="text-black">{hotel.description}</p>
      </div>
    </div>
  );
}
