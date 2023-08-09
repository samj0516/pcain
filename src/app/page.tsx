import Image from 'next/image'
// import { createClient } from "../prismicio";
import * as prismic from "@prismicio/client";
import Card from '../Components/filmImageCard'


export async function getData() {
  const repositoryName = "pcainportfolio";
  const client = prismic.createClient(repositoryName);
  const filmCredits = await client.getAllByType("film_credit");
  console.log(filmCredits)
  

  return filmCredits ;
}

export default async function Home() {
  const filmCredits = await getData();
  console.log(filmCredits.map((filmCredit) => (filmCredit.data.title[0].text)))
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
     {filmCredits.map((filmCredit) => (
     <Card
        imageSrc={filmCredit.data.video_image.url}
        title={filmCredit.data.title[0].text}
        role={filmCredit.data.role[0].text}/>))}
      </div>
    </div>
  )
}
