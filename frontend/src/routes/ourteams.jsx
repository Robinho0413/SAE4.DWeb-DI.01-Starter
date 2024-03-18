import { Suspense } from 'react';
import { Await, defer, useLoaderData } from "react-router-dom";
import Team from '../ui/Team';
import { fetchOurTeams, fetchTestimonialData } from "../lib/loaders";
import Testimonial from "../ui/Testimonial";
import TeamSkeleton from '../ui/Team/TeamSkeleton';


export async function loader({params}){
    let teamData = fetchOurTeams(params.teamName);
    let testimonialData = await fetchTestimonialData(params.teamName);
    return defer( { team:teamData, testimonial:testimonialData });
}

export default function OurTeams(){

    const data = useLoaderData();

    return(
        <>
            <Suspense fallback={ <TeamSkeleton /> }>
                <Await resolve={data.team} errorElement={<div>Failed to load team data</div>}>
                    {teamData => <Team {...teamData} />}
                </Await>

            </Suspense>

            <Testimonial data={data.testimonial} />
        </>
    )
}

function Loading() {
    return <h2>🌀 Chargement...</h2>;
  }