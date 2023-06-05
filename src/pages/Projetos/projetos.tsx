import posts from "../../json/projetos.json"
import Modelo1 from "../../components/modelosProjetos/modelo1/Modelo1"
import Modelo2 from "../../components/modelosProjetos/modelo2/Modelo2"


export function Projetos() {
    return (
        <ul>
            {posts.map((post) => {
                if (post.id % 2 == 1) {
                    console.log(post.imagem)
                    return (
                        <Modelo1 id={post.id} imagem={post.imagem} titulo={post.titulo} linguagem={post.linguagem} texto={post.texto} git={post.git} vercel={post.vercel} posicao={post.id} />
                    )

                } else {
                    return (
                        <Modelo2 id={post.id} imagem={post.imagem} titulo={post.titulo} linguagem={post.linguagem} texto={post.texto} git={post.git} vercel={post.vercel} posicao={post.id} />
                    )
                }
            })}
        </ul>
    )
}
