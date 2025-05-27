function App() {
  return (
    <div className="bg-gray-200 w-full h-screen">
      <div className="w-full h-screen flex items-center justify-center px-4 md:px-0">
        <div className="w-full max-w-[520px] bg-white p-4 rounded-2xl">
          <h1 className="mb-12 font-bold text-2xl text-center">
            Informe suas credencias
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className=" w-full h-12 border border-gray-400 rounded-lg px-2"
            />

            <input
              type="password"
              placeholder="Digite sua senha"
              className=" w-full h-12 border border-gray-400 rounded-lg px-2 focus:border-red-50"
            />

            <button className="w-full mt-6 bg-amber-600 h-12 rounded-lg cursor-pointer hover:bg-amber-700 transition-all">
              <span className="text-white font-semibold">Enviar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
