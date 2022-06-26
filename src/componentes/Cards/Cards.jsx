import "./Cards.css";

const Cards = ({ titulo, children }) => {

  const scroll = (e) => {

    let tit = document.getElementById("tit");
    if (e.target.scrollTop >= 16){
        tit.classList.add("small");
    }else{
        tit.classList.remove("small");        
    }
  };

  return (
    <div className="cards" onScroll={scroll}>
      <header>
        <h1 id="tit">{titulo}</h1>
      </header>

      <section id='section_cards'>      
        {children}
      </section>
    </div>
  );
};

export default Cards;
