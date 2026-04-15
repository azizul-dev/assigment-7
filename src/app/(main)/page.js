import Banner from "@/components/Banner/Banner";
import Friends from "@/components/Friends/Friends";


export default async function Home () {
const res = await fetch('https://assignment-7-swart-one.vercel.app/data.json');
const friends = await res.json();
  return (
    <div>
       <Banner friends={friends}/>
       <Friends/>
    </div>
  );
}
