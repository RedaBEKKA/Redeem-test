import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:url" content="http://example.com/mypage" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Titre de ma page" />
        <meta property="og:description" content="Description de ma page" />
        <meta property="fb:app_id" content="votre_app_id_facebook" />
      </Helmet>
      <h1>Ma page</h1>
      <p>Ceci est le contenu de ma page.</p>
    </div>
  );
}

export default App;
