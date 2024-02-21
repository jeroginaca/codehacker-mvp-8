import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-white/10 px-20 py-12 max-md:flex-col">
      <p>Copyright © 2024 CodeHackerAcademy </p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terminos & Condiciones</Link>
        <Link href="/privacy-policy">Politicas de Privacidad</Link>
      </div>
    </footer>
  )
}

export default Footer