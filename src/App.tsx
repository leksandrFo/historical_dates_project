import GlobalStyles from './styles/global.styles.ts'
import { Container } from './styles/components.styles.ts'
import Marking from './components/Marking.tsx'
import Title from './components/Title.tsx'
import ContextProvider from './providers/ContextProvider.tsx'
import Slider from './components/Slider/Slider.tsx'
import Interval from './components/Interval/Interval.tsx'
import DataToggler from './components/DataToggler/DataToggler.tsx'
import Circle from './components/Circle/Circle.tsx'

function App() {

  return (
    <>
      <Container>
        <Marking />
        <Title />
        <ContextProvider>
          <Circle />
          <Interval />
          <DataToggler />
          <Slider />
        </ContextProvider>
      </Container>
      <GlobalStyles />
    </>
  )
}

export default App
