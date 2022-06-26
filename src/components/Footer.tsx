import { Footerlogo } from "./Footerlogo";

export function Footer() {
  return (
    <div className="flex py-6 border-t border-gray-600 gap-6">
      <Footerlogo />
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </p>
        <a href="" className="text-gray-300">
          Políticas de privacidade
        </a>
      </div>
    </div>
  );
}
