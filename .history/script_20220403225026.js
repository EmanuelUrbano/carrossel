/*se estiver na imagem  1
    o href_seta_esquerda=1
    senao
     será href_seta_direta
*/

function mudar_href_estiver_em_foco(){
    const carrossel=document.getElementById("carrossel")
    const numero_de_itens_no_carrossel= carrossel.childElementCount
    console.log(numero_de_itens_no_carrossel)
}
