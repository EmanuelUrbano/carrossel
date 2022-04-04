/*se estiver na imagem  1
    o href_seta_esquerda=1
    senao
     será href_seta_direta
*/

function mudar_href_estiver_em_foco(id_seta){
    const carrossel=document.getElementById("carrossel")
    const numero_de_itens_no_carrossel= carrossel.childElementCount
    const elemento_mostrando =  document.documentElement.scrollTop
    
    if (id_seta=="seta_esquerda"){
        console.log(elemento_mostrando)
    }else{
        if(id_seta=="seta_direita"){

        }
    }
}
