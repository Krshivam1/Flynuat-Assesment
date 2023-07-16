import React from "react";
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import StateUpdateExample from "./components/StateUpdateExample";
import HookExamples from "./components/HookExamples";
import ContextComponent from "./components/ContextComponent";
import ParentComponent from "./components/ParentComponent";
import ScrollBy from "./components/scrollBy";
import Socket from "./components/Socket";

const App = () => {
  return (
    <div>
      <ClassComponent name='User' />
      <FunctionComponent name='User' subText='expample of functional component' />
      <StateUpdateExample />
      <ScrollBy />
      <HookExamples />
      <Socket />
      <ContextComponent />
      <ParentComponent greetingText='Hi user, welcome to our site' />
    </div>
  );
}

export default App;
