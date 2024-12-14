import Layout from "@/components/layout";
import Link from "next/link";
import { getSortedList } from "@/lib/data";
import { getSortedYokaiList } from "@/lib/data-yokai";
import { getSortedAlienList } from "@/lib/data-aliens";


// define a getStaticProps() function 
export async function getStaticProps() {
  const allData = await getSortedList();
  const yokaiData = await getSortedYokaiList();
  const alienData = await getSortedAlienList();
  
  return {
    props: { allData, yokaiData, alienData  }
  };
}



// exports our homepage
export default function Home( { allData, yokaiData, alienData } ) {
  return (
    <Layout home>
      <h1 style={{ marginLeft: '10px' }}>Dandadan! - Returned from WPDB</h1>
      <img 
        src="/media/dandadance.gif" 
        alt="Dandadan GIF" 
        className="img-fluid mt-3 mb-3"
      />

      {/* Display list of Main Characters */}
      <div className="list-group" >
        <h2 style={{ marginLeft: '10px' }}>Main Characters</h2>
        {allData.map(({ id, name }) => (
          <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action" style={{ backgroundColor: '#d1a7f0'}}>
            {name}
          </Link>
        ))}
      </div>

      {/* Display list of Yokai */}
      <div className="list-group mt-4">
        <h2 style={{ marginLeft: '10px' }}>Yokai</h2>
        {yokaiData.map(({ id, name }) => (
          <Link key={id} href={`/yokai/${id}`} className="list-group-item list-group-item-action" style={{ backgroundColor: '#f8a1a1'}}>
            {name}
          </Link>
        ))}
      </div>

      <div className="list-group mt-4">
        <h2 style={{ marginLeft: '10px' }}>Aliens</h2>
        {alienData.map(({ id, name }) => (
          <Link key={id} href={`/alians/${id}`} className="list-group-item list-group-item-action" style={{ backgroundColor: '#4fd8d5'}}>
            {name}
          </Link>
        ))}
      </div>
    </Layout>
  );
}