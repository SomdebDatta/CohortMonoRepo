function App() {
  // return (
  //   <div className="grid grid-cols-10">
  //     <div className="bg-red-500 col-span-2">hi</div>
  //     <div className="bg-yellow-500 col-span-5">hi</div>
  //     <div className="bg-blue-500 col-span-1">hi</div>
  //     <div className="bg-red-500 col-span-2">hi</div>
  //     <div className="bg-blue-500">hi</div>
  //     <div className="bg-yellow-500">hi</div>
  //   </div>
  // )
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-red-500">hi</div>
      <div className="bg-blue-500">hi</div>
      <div className="bg-yellow-500">hi</div>
    </div>
  )
}

export default App