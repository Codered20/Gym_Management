import React from 'react';
import Zumba from '../HomepageComponents/zumba';
import ZumbaScroller from '../HomepageComponents/zumbaScroller';
import Crossfit from '../HomepageComponents/Crossfit';
import Gym from '../HomepageComponents/Gym';

function HomePage() {
  const [quote, setQuote] = React.useState("");
  const [character, setCharacter] = React.useState("");
  const [anime, setAnime] = React.useState("");
  const [image, setImage] = React.useState("");

  const generateQuote = async () => {
    try {
      const motivationalAnimes = [
        "Naruto",
        "One Piece",
        "Hunter x Hunter",
        "Haikyuu!!",
        "Bleach",
        "Ping Pong the Animation",
        "Barakamon",
        "Sword Art Online",
        "Fairy Tail",
        "Dragon Ball Z",
        "One Punch Man",
        "Vinland Saga",
      ];
      const animeImages = {
        "Naruto": "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=640",
        "One Piece": "https://wallpapercave.com/wp/wp2056932.jpg",
        "Hunter x Hunter": "https://i0.wp.com/iwatchitall.com/wp-content/uploads/2022/06/quotes-ging-1.jpg.webp",
        "Haikyuu!!": "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/haikyuu-the-dumpster-battle-review.jpg",
        "Bleach": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqHRasUC01W0_dk6LVZSxMVwG8MwGqvtfzg&s",
        "Ping Pong the Animation": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab8bZRaMx04O82IM_ZwxdkZMFzL1ekdzdRg&s",
        "Barakamon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIU0Oa04vczVwrVKVFk8f9J_55xMwHsg9SxA&s",
        "Sword Art Online": "https://i.pinimg.com/564x/4a/a2/a8/4aa2a87bcbac749e446eb4718d3a41df.jpg",
        "Fairy Tail": "https://www.gamereactor.eu/media/41/fairytail2_4414183b.jpg",
        "Dragon Ball Z": "https://images.squarespace-cdn.com/content/v1/5aad96d33917eec4192c41fd/1539352687524-LYTCH127BN65I19YP22P/Psychology+of+Goku-4.png",
        "One Punch Man": "https://pbs.twimg.com/media/DdZpeWiXkAAaEuF.jpg:large",
        "Vinland Saga": "https://i.ytimg.com/vi/yb04h7Ds95U/maxresdefault.jpg",
      }
      const count = motivationalAnimes.length;
      const idx = Math.floor(Math.random() * count);
      const response = await fetch('https://yurippe.vercel.app/api/quotes?show='+ motivationalAnimes[idx]); // Replace with the actual API endpoint
      console.log(response);
      const item = await response.json();
      const itemsCount = item.length;
      const idx2 = Math.floor(Math.random() * itemsCount);
      console.log(item);
      setQuote(item[idx2].quote || "Failed to load quote"); // Handle response format
      setCharacter(item[idx2].character || null)
      setAnime(item[idx2].show || null)
      setImage(animeImages[motivationalAnimes[idx]]);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("An error occurred while fetching the quote.");
    }
  };

  // Fetch a quote when the component mounts
  React.useEffect(() => {
    generateQuote();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div className="quote" onClick={generateQuote}>
        <p><b>{quote || "Loading..."}</b></p>
        <p><b>{character}</b></p>
        <p><b>{anime}</b></p>
        {/* <button onClick={generateQuote} className="generateQuote">Generate New Quote</button> */}
      </div>

      <div className='img-container'> <img src ={image}/></div>
      <Zumba/>
      <ZumbaScroller/>
      <Crossfit/>
      <Gym/>
    </>
  );
}

export default HomePage;
