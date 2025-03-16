export const ContactUs = () => {
    const email = `risoflora@gmail.com`;
    return (
        <div className="flex flex-col p-4 font-extralight text-md text-risoflora">
            <hr className="border-gray-400 mt-3 mb-4" />
            <h3 className="text-lg ">Contato</h3>
            <p>telefone: 77 9 9939-7911</p>
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            <p>Rua das Flores, 123</p>
            <p>Bairro Jardim Primavera</p>
            <p>CEP: 45600-000</p>
            <p>Cidade: São Felix</p>
            <p>Estado: Ba, Brasil</p>
            
        </div>
    )
}