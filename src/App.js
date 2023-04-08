import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:url" content="https://redeemreda.netlify.app/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Redeem" />
        <meta
          property="og:description"
          content="Redeem est juste une page SHopify"
        />
        <meta property="fb:app_id" content="765270881679557" />
      </Helmet>
      <h1>Ma page</h1>
      <p>Ceci est le contenu de ma page.</p>
    </div>
  );
}

export default App;
