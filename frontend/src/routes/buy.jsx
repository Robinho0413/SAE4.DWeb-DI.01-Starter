import Pricing from '../ui/Pricing';
import { fetchPricingData } from '../lib/loaders';
import { useLoaderData } from "react-router-dom";


export async function loader(){
    let pricingData = await fetchPricingData();
    return pricingData;
}


export default function Buy() {

    const data = useLoaderData();

    return (
      <>
        <section>
          <Pricing {...data} ></Pricing>
          {/* <Pricing title={data.title} description={data.description} plans={data.plans}/> */}
        </section>
      </>
    );
  }