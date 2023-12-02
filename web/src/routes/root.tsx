export default function Root() {
  return (
    // Pagina de Login
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>
        This is the home page.
      </div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={() => console.log('click')}
          value={'Log in'} />
      </div>
    </div>
  );
}
