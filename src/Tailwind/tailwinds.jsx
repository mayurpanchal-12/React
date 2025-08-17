function Prac(params) {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Tailwind CSS Practice</h1>
      <p className="text-gray-700 mb-2">
        This is a simple example of using Tailwind CSS in a React application.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
      <div className="mt-4 p-4 bg-white shadow-md rounded">
        <p className="text-gray-600">
          Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.
        </p>
      </div>
    </div>
  )
}
export default Prac;