const Page = ({ message } = props) => {
  return (
    <div>
      <h1>Mfe-starter's Page</h1>
      <p>
        Message from stranger
        <br />
        <b>{message ?? "I am alone"}</b>
      </p>
    </div>
  );
};
export default Page;
