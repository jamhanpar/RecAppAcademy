document.addEventListener('DOMContentLoaded', () => {
    // const data = await fetch('http')
    // const header = document.getElementById('header');
    // console.log(header);
    // header.innerHTML = "Hello, it's James. I'm testing innerHTML.";
    // alert('Wow');

    // const root = document.getElementById('root');
    // root.innerHTML = virtualDOM();

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
});

const virtualDOM = () => {
    const data = await fetch('http')
    const header = document.getElementById('header');
    console.log(header);
    header.innerHTML = "Hello, it's James. I'm testing innerHTML.";
    alert('Wow');

    return (
        <div></div>
    )
}