import React from "react";
import { Router } from "@reach/router"
import Home from '../home/Home';
import Document from '../document/Document';
import Artboard from '../artboard/Artboard';

const App = () => (
    <div>
        <Router>
            <Home path="/" />
            <Document path="document/:shortId" />
            <Artboard path="document/:shortId/artboard/:id" />
        </Router>
    </div>
);

export default App;
