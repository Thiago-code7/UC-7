

/*function App() {

  return (
    <>
      <div className="mx-auto flex max-w-sm itens-center p-6 shadow-1g bg-red-50">
        <div clasName="text-xl font-medium text-black dark:text-white">
          <h1>Hello Word, reacth + tailwind</h1>
          <p className="text-gray-500 dark:text-gray-400">Tentaremos formatar algo!</p>
        </div>
      </div>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center ">
        <div className="p-8 bg-whithe roundend-2x1 shadow-lg">
          <h1 className="text-2x1 font-bold text-purple-600">Hello World, React + Tailwind</h1>
          <p>Tentaremos formatar algo!</p>
        </div>
      </div>

    </>
  )
}

export default App*/
import CardOrange from './components/CardOrange'; 
import CardRed from './components/CardRed';
import CardBlue from './components/CardBlue';


function App() {
  return (
    <>
      <CardRed />
      <CardBlue />
      <CardOrange />
    </>
  );
}

export default App;



