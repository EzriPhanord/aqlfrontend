// const Retour = () => {
//   alert("Retour sur la page d'accueil");
// };

export default function LoadingTest(props) {
  return (
    <div type="text" className="box">
      <fieldset> On teste votre site</fieldset>
      <fieldset> on affichera les resultats sou peu</fieldset>
      <div className="rect">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="54px"
          height="60px"
          viewBox="0 0 24 30"
        >
          <rect x="0" y="0" width="3" height="10" fill="#ffff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="10" y="0" width="3" height="10" fill="#ffff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="0" width="3" height="10" fill="#ffff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      <div>
        <form className="boutton">
          <button className="b2" onClick={() => props.clickHandler("config")}>
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
}
