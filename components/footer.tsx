import React from 'react'

function Footer() {
    const date = new Date(Date.now())
  return (
    <footer className='bg-white border-t mt-4'>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-sm text-black dark:text-gray-400">
              &copy; {date.getFullYear()} Kamba Livros. Todos os direitos reservados.
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Sobre', 'Termos', 'Privacidade', 'Cookies', 'Contato', 'Ajuda'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      
    </footer>
  )
}

export default Footer