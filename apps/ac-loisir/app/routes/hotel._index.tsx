import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Gamme, Hotel, Tag, CardHotel } from "component-library";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch("http://127.0.0.1:1337/api/hotels?pLevel=3", {
    headers: {
      Authorization:
        "Bearer 2c49f05b2e50babe1b3da01f58cb3b09678e8c556a6297ada0448631909ef727d43a2585db75a4f0506eb2e9e728a40dd6d789baccd55213427b7649d8007aa9f25cfe5989d7d7ba35be8b4d8d6b2e0771bc59c02e9e8ff731d9e8478c5b1e33f36cfe303ab9924d72f3d88a0a7670e6622b478f18d8e69cb8a76426a1735065",
    },
  });
  return response;
};
export default function Index() {
  const data = useLoaderData<typeof loader>();
  const hotels: Hotel[] = data.data as Hotel[];

  return (
    <div className="bg-white p-2 flex flex-wrap h-screen">
      {hotels.map((hotel, index) => (
        <Link key={index} to={"/hotel/" + hotel.slug}>
          <CardHotel {...hotel} />
        </Link>
      ))}
    </div>
  );
}
