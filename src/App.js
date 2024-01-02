
import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea';
import { useEffect, useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)
  const toggleMode = (color)=>{
    setMode(color)
  }

  useEffect(() => {
    if(mode==="light"){
      document.body.style.backgroundColor = "white"
      setbgcolor("white")
      setbtncolor("primary")
      document.body.style.color = "black"
      showAlert("Light Mode Enabled!","success")
    }
    else if(mode==="dark"){
      document.body.style.backgroundColor = "#333333"
      setbgcolor("grey")
      setbtncolor(mode)
      document.body.style.color = "white"
      showAlert("Dark Mode Enabled!","success")
    }
    else if(mode==="success"){
      document.body.style.backgroundColor = "green"
      setbgcolor("#98FB98")
      setbtncolor(mode)
      document.body.style.color = "white"
      showAlert("Green Mode Enabled!","success")
    }
    else if(mode==="warning"){
      document.body.style.backgroundColor = "yellow"
      setbgcolor("#FFF9E0")
      setbtncolor(mode)
      document.body.style.color = "black"
      showAlert("Yellow Mode Enabled!","success")
    }
    else if(mode==="danger"){
      document.body.style.backgroundColor = "red"
      setbgcolor("#FFE4E1")
      setbtncolor(mode)
      document.body.style.color = "white"
      showAlert("Red Mode Enabled!","success")
    }
  }, [mode]);

  const [bgcolor, setbgcolor] = useState("grey")
  const [btncolor, setbtncolor] = useState("primary")

  const showAlert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  return (
    <>
    <Navbar title="TextUtils" about="About TextUtils" toggleMode={toggleMode} mode={mode}/>
    <div className="container my-3">
    <Alert alert={alert}/>
    <TextArea mode={mode} bgcolor ={bgcolor} showAlert={showAlert} btncolor={btncolor} heading="Put your text here to analyze"/>
    {/* <About/> */}
    </div>
    </>
  );
}

{/* <Router>
    <Navbar title="TextUtils" about="About TextUtils" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextArea mode={mode} bgcolor ={bgcolor} showAlert={showAlert} btncolor={btncolor} heading="Put your text here to analyze"/>} />
        </Routes>
    </div>
    </Router> */}

export default App;
