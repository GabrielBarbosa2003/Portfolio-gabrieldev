import posts from "../../json/projetos.json"
import Modelo1 from "../../components/modelosProjetos/modelo1/Modelo1"
import Modelo2 from "../../components/modelosProjetos/modelo2/Modelo2"


export function Projetos() {
    return (
        <ul>
            {posts.map((post) => {
                if (post.id % 2 == 1) {
                    return (
                        <Modelo1 imagem={post.imagem} titulo={post.titulo} linguagem={post.linguagem} texto={post.texto} git={post.git} vercel={post.vercel} />
                    )

                } else {
                    return (
                        <Modelo2 imagem={post.imagem} titulo={post.titulo} linguagem={post.linguagem} texto={post.texto} git={post.git} vercel={post.vercel}  />
                    )
                }
            })}
        </ul>
    )
}
