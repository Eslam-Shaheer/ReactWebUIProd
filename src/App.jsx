// function App() {
//   return <></>;
// }

// export default App;

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import Nav from "./components/Nav";
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "Eslam",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");

//     console.log(this.state.userName, "After mounting");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps);
//     console.log(prevState);
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   render() {
//     console.log("render");
//     return (
//       <>
//         {/* <span>{this.state.userName}</span> */}
//         {/* <h1>App component</h1> */}
//         <Nav></Nav>
//       </>
//     );
//   }
// }

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import Nav from "./components/Nav";
// import Sidebar from "./components/Sidebar";
// import Form from "./components/Form";
// import NewForm from "./components/NewForm";

// const App = () => {
//   const [selectedForm, setSelectedForm] = useState("normal form");

//   return (
//     <div>
//       <Nav />
//       <div style={{ display: "flex", gap: 10, height: "100vh" }}>
//         <Sidebar />
//         <div>
//           <div className="d-flex gap-2">
//             <button
//               className="btn btn-primary"
//               onClick={() => setSelectedForm("normal form")}
//             >
//               Normal form
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setSelectedForm("React hook form")}
//             >
//               React hook form
//             </button>
//           </div>
//           {selectedForm == "normal form" ? <Form /> : <NewForm />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import CategoryContextProvider from "./contexts/CategoryContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <CategoryContextProvider>
            <RouterProvider router={routes} />;
          </CategoryContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

{
  /* <BrowserRouter >
  <Routes>
    <Route path="/" element={<Home />}/> 
   
  </Routes>
</BrowserRouter> */
}
