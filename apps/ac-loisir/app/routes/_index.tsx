import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { componentMap, StrapiSlicesZoneComponent } from "component-library";
import { HomePage } from "component-library";
import qs from "qs";

export const loader = async () => {
  const test2 = {
    populate: {
      DynamicZone: {
        populate: "*",
      },
      Seo: {
        populate: ["shareImage"],
      },
    },
  };
  const test3 = {
    populate: {
      DynamicZone: {
        on: {
          "shared.banner": { populate: "*" },
          "shared.home-hotel-highlighting": {
            populate: {
              pushHotelByGamme: {
                populate: {
                  pushHotel: {
                    populate: {
                      hotels: {
                        fields: ["slug", "nom"],
                        populate: "*",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      Seo: {
        populate: ["shareImage"],
      },
    },
  };
  const param = decodeURI(qs.stringify(test3));

  const response = await fetch("http://127.0.0.1:1337/api/home-page?" + param, {
    headers: {
      Authorization:
        "Bearer 2c49f05b2e50babe1b3da01f58cb3b09678e8c556a6297ada0448631909ef727d43a2585db75a4f0506eb2e9e728a40dd6d789baccd55213427b7649d8007aa9f25cfe5989d7d7ba35be8b4d8d6b2e0771bc59c02e9e8ff731d9e8478c5b1e33f36cfe303ab9924d72f3d88a0a7670e6622b478f18d8e69cb8a76426a1735065",
    },
  });
  return response;
};
export const meta: MetaFunction = ({ data }) => {
  return [
    { title: `${data?.data.Seo.metaTitle}` },
    { description: data?.data?.Seo.metaDescription },

    {
      name: "robots",
      content: "follow, index",
    },
  ];
};
export default function Index() {
  const data = useLoaderData<typeof loader>();
  const home: HomePage = data.data;
  console.log("gome", home.DynamicZone);

  return (
    <div className="bg-white">
      <div className="bg-white">
        <StrapiSlicesZoneComponent
          components={componentMap}
          entries={home.DynamicZone as unknown[]}
          strapiComponentFolder="shared"
        />
      </div>
    </div>
  );
}
