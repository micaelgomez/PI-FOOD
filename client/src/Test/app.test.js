// import React from "react";
// import { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { MemoryRouter } from "react-router-dom";
// import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import { App } from "../App.js";

// import Detail from "../Components/Details/details";
// import Landing from "../Components/Landing/landing";
// import RecipeCreate from "../Components/RecipeCreate/recipeCreate";
// import Home from "../Components/Home/home";

// describe("App", () => {
//   describe("El componente Nav debe renderizar en todas las rutas.", () => {
//     it('El componente Landing debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
//       const wrapper = mount(
//         <Provider store={store}>
//           <MemoryRouter initialEntries={["/"]}>
//             <App />
//           </MemoryRouter>
//         </Provider>
//       );

//       expect(wrapper.find(Landing)).toHaveLength(1);
//       expect(wrapper.find(Detail)).toHaveLength(0);
//       expect(wrapper.find(RecipeCreate)).toHaveLength(0);
//       expect(wrapper.find(Home)).toHaveLength(0);
//     });
//   });
// });
