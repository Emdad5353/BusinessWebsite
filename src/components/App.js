import Header from "./ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" component={()=> <div>Home</div>} />
          <Route exact path="/services" component={()=> <div>Services</div>} />
          <Route exact path="/customSoftware" component={()=> <div>Custom Software</div>} />
          <Route exact path="/mobileapps" component={()=> <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={()=> <div>Home</div>} />
          <Route exact path="/revolution" component={()=> <div>The Revolution</div>} />
          <Route exact path="/about" component={()=> <div>About</div>} />
          <Route exact path="/contact" component={()=> <div>Contact</div>} />
          <Route exact path="/estimate" component={()=> <div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
