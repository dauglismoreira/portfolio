import './App.css';
import useScript from './useScript';
import { ReactPictureGrid } from 'react-picture-grid';

function App({url}) {
  useScript(url)

  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Nature 01',
      description: 'This picture is taken from unsplash.com',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      title: 'Nature 02',
      description: 'This picture is taken from unsplash.com',
    },
    {
      image:
        'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80',
      title: 'Nature 03',
      description: 'This picture is taken from unsplash.com',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      title: 'Nature 04',
      description: 'This picture is taken from unsplash.com',
    },
  ];

  return (
    <div className="App">
      <canvas id="canvas"></canvas>
      <div className="sidebar">
        <div className="logo">

        </div>
        <div className="menu">
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social">

        </div>
      </div>
      <div className="main">
        <div className="section1">
          <div className="container">
            <span className="title">
              <h2 className="line1">Hi,</h2>
              <h2 className="line2">I'm Dauglis</h2>
              <h2 className="line3">web developer</h2>
            </span>
            <span className="button-green">
              <span className="button-green-hover"></span>
              <button><span className="button-text">Contact me!</span></button>
            </span>
          </div>
        </div>
        <div className="section2">
          <div className="container">
            <span className="title">
                <h2>My Portfólio</h2>
                <p>lalalalalalalalalalalalalalal</p>
            </span>
            <div className="image-grid">
            <ReactPictureGrid
              data={data}
              showTitle
              gap={10}
              closeOnClick />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
