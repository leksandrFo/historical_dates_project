import { useEffect, useState } from "react";
import useWindowWidth from './hooks/useWindowsWidth.ts'
import GlobalStyles from "./styles/global.styles.ts";
import { media } from "./styles/media.styles.ts";
import { Container } from "./styles/components.styles.ts";
import Marking from "./components/Marking.tsx";
import Title from "./components/Title.tsx";
import ContextProvider from "./providers/ContextProvider.tsx";
import Slider from "./components/Slider/Slider.tsx";
import Pagination from "./components/Pagination/Pagination.tsx";
import Interval from "./components/Interval/Interval.tsx";
import DataToggler from "./components/DataToggler/DataToggler.tsx";
import CategoryName from './components/CategoryName/CategoryName.tsx'
import Circle from "./components/Circle/Circle.tsx";

function App() {
  
  const [mobile, setMobile] = useState<boolean>(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (width <= media.small) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return (
    <>
      <Container>
        <Marking />
        <Title />
        <ContextProvider>
          {!mobile && <Circle />}
          <Interval />
          <CategoryName />
          <DataToggler />
          <Slider mobile={mobile}/>
          {mobile && <Pagination />}
        </ContextProvider>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
