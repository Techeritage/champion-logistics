import Headers from "../Components/Headers";
import HomeSection1 from "../Components/HomeSection1";
import { HomeSkeleton } from "../Components/loader";

import { getHomePage } from "../libs/Powerhouse";

export default async function HomePage() {
  const home = await getHomePage();

  return (
    <>
      <Headers />
      {home && home._id ? <HomeSection1 data={home} /> : <HomeSkeleton />}
    </>
  );
}
