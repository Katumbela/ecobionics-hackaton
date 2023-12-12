import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/inicial";
import FreeTrial from "./pages/freetrial";
import Dashboard from "./pages/dashboard";
import Entrar from "./pages/login";
import Tasks from "./pages/tarefas";
import Error404 from "./pages/error404";
import Ngos from "./pages/ngos";
import Srcs from "./pages/srcs";



const RotasPT = () => {

    return (
        <BrowserRouter>
                <Routes >
                    <Route element={<Home />} path="/" exact/>
                    <Route element={<Ngos />} path="/ngos" exact/>
                    <Route element={<Srcs />} path="/srcs" exact/>
                    <Route element={<Home />} path="/marketplace" exact/>
                    <Route element={<Error404/>} path="" exact/>
                    <Route element={<Tasks/>} path="/tasks" exact/>
                    <Route element={<Dashboard/>} path="/panel/dashboard" exact/>
                    <Route element={<Entrar/>} path="/login" exact/>
                    <Route element={<FreeTrial/>} path="/cadastro/:pacoteId" exact/>
                </Routes>
        </BrowserRouter>
    )
}

export default RotasPT;