// import "../styles.css";
import Header from "../components/Header";
import Form1 from "../components/Form1";
import ConfigForm from "../components/ConfigForm";
import LoadingTest from "../components/LoadingTest";

export default function Home(props) {
  const swap = props.handler;
  const swapDetails = (comp) => {
    switch (comp) {
      case "home":
        return <Form1 clickHandler={swap} />;
      case "config":
        return <ConfigForm clickHandler={swap} />;
      case "laoding":
        return <LoadingTest clickHandler={swap} />;
      default:
        return <Form1 clickHandler={swap} />;
    }
  };

  return (
    <div type="H1">
      <Header />
      {swapDetails(props.comp)}
    </div>
  );
}
