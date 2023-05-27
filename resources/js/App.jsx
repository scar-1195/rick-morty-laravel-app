import "./bootstrap";
import "../css/app.css";

//* React's imports 
import React from "react";
import ReactDOM from "react-dom/client";
import { RickMortyApp } from "./RickMortyApp";

//* PrimeReact's imports
import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

//* ReactQuery's imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RickMortyApp />
        </QueryClientProvider>
    </React.StrictMode>
);
