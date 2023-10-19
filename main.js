for(let indexFoto = 22; indexFoto >= 1; indexFoto--){

    let sceneTemp, containerFoto, img, control, h2Back, h2Next;

    sceneTemp = document.createElement("div");
    sceneTemp.setAttribute("class", "scene");

    containerFoto = document.createElement("div");
    containerFoto.setAttribute("class", "container-foto");

    img = document.createElement("img");
    img.setAttribute("src", "img/"+indexFoto+".png");
    img.setAttribute("alt", indexFoto);

    control = document.createElement("div");
    control.setAttribute("class", "control");

    h2Back = document.createElement("h2");
    h2Back.innerHTML = "Kembali";
    h2Back.setAttribute("id", "back");

    h2Next = document.createElement("h2");
    h2Next.innerHTML = `<img src="icon/neks.png">`;
    h2Next.setAttribute("id", "next");

    // control.appendChild(h2Back);
    control.appendChild(h2Next);
    containerFoto.appendChild(img);

    sceneTemp.appendChild(containerFoto);
    sceneTemp.appendChild(control);

    document.querySelector(".container-scene").appendChild(sceneTemp);
}





let btnMulai = document.getElementById("mulai"),
    inp = document.getElementById("nama");
    intro = document.querySelector(".intro");

    inp.addEventListener("input", () => {
        btnMulai.style.transform = "scale(1)";
    })

    btnMulai.addEventListener("click", () =>{
        intro.style.display = "none";
        document.getElementById("namaUser2").innerText = inp.value;
        document.querySelector("h2#namaUser").innerText = inp.value;

})

let iconMulai = document.getElementById("iconStart"),
    divHome = document.querySelector(".home"),
    basic = document.getElementById("basic"),
    intermediate = document.getElementById("intermediate"),
    divDificult = document.querySelector(".dificult"),
    dificult;

    let poin = 0;
    let soalBasic = [
        ["Banjir adalah bencana alam akibat air yang terlalu banyak dan tergenang selama beberapa hari di sekitar kita.", "pil1"],
        ["Salah satu penyebab banjir adalah karena kita sering membuang sampah sembarangan.", "pil1"],
        ["Pada air banjir tidak ada kuman yang jahat.", "pil2"],
        ["Air banjir dapat menyebabkan penyakit seperti flu, demam, dan diare.", "pil1"],
        ["Supaya kita tidak sakit, maka kita harus menjaga kebersihan dengan mencuci tangan pakai sabun, mandi 2 kali sehari, dan  meminum air yang sudah direbus dan matang.", "pil1"],

    ]
    for(let i = 0; i < soalBasic.length; i++){

        let contSoal = document.createElement("div"),
        divSoal = document.createElement("div"),
        divJawaban = document.createElement("div"),
        pilihan1 = document.createElement("h3"),
        pilihan2 = document.createElement("h3");
        
        contSoal.setAttribute("class", "container-soal");
        contSoal.style.alignItems = "space-between";
        divSoal.setAttribute("class", "soal");
        contSoal.style.backgroundImage = `url(img/soal2/${i}.png)`;
        // divSoal.innerText = soalBasic[i][0];

        divJawaban.setAttribute("class", "jawaban");
        pilihan1.setAttribute("id", "pil1");
        pilihan1.innerText = "Benar";
        pilihan2.setAttribute("id", "pil2");
        pilihan2.innerText = "Salah";

        divJawaban.appendChild(pilihan1);
        divJawaban.appendChild(pilihan2);

        // contSoal.appendChild(divSoal);
        contSoal.appendChild(divJawaban);

        document.body.appendChild(contSoal);

        pilihan1.addEventListener("click", ()=>{
            if(pilihan1.id == soalBasic[i][1]){
                console.log("jawabn benar")
                poin += 20;
                document.querySelector("#pointUser").innerText = poin;
                document.querySelector("#pointUser2").innerText = "Poin : " + poin;

                contSoal.style.transform = "translateY(1980px)";
                setTimeout(()=>{
                    contSoal.style.display = "none";

                }, 1200);

            }else{
                console.log("jawabn Salah")
                contSoal.style.transform = "translateY(1980px)";
                setTimeout(()=>{
                    contSoal.style.display = "none";

                }, 1200);


            }
        })

        pilihan2.addEventListener("click", ()=>{
            if(pilihan2.id == soalBasic[i][1]){
                console.log("jawabn benar")
                poin += 20;
                document.querySelector("#pointUser").innerText = poin;
                document.querySelector("#pointUser2").innerText = "Poin : " + poin;

                contSoal.style.transform = "translateY(1980px)";

                setTimeout(()=>{
                    contSoal.style.display = "none";

                }, 1200);

            }else{
                console.log("jawabn Salah");
                contSoal.style.transform = "translateY(1980px)";

                setTimeout(()=>{
                    contSoal.style.display = "none";

                }, 1200);

            }
        })
    }

    let soalIntermediate = [
        ["Apa itu banjir ?", 
        "Peristiwa dimana menurunnya debit air dalam jumlah yang besar", 
        "Peristiwa dimana suatu daerah tergenang air dalam jumlah yang besar", 
        "Peristiwa dimana terjadi pergerakan tanah dan jatuhnya bebatuan", 
        "Peristiwa atau kondisis pengikisan permukaan bumi", 
        "Peristiwa dimana suatu daerah tergenang air dalam jumlah yang besar"],

        ["Apa penyebab terjadinya banjir ?",
        "Curah hujan yang tinggi",
        "Penurunan permukaan air laut",
        "Membuang sampah pada tempatnya",
        "Perencanaan pemeliharaan drainase yang baik",
        "Curah hujan yang tinggi"
        ],

        ["Manakah yang bukan dampak negatif dari bencana banjir?",
        "Merusak sarana prasarana",
        "Erosi dan tanah longsor",
        "Pencemaran lingkungan",
        "Lingkungan menjadi bersih",
        "Lingkungan menjadi bersih",
        ],

        ["Apa penyakit yang sering terjadi ketika banjir?",
        "Diare",
        "Diabetes Mellitus",
        "Hipertensi",
        "Hepatitis",
        "Diare"
        ],

        ["Apa penyakit yang disebabkan oleh Nyamuk Aedes Aegypti  dan bisa terjadi ketika banjir?",
        "Demam berdarah",
        "Influenza",
        "Leptoapirosis",
        "Penyakit kulit",
        "Demam berdarah",
        ],

        ["Apa yang harus dilakukan sebelum terjadi banjir ?",
        "Mematikan aliran listrik",
        "Bersiap evakuasi dan mengungsi",
        "Membuang sampah di sungai",
        "Mengetahui istilah peringatan bahaya banjir",
        "Mengetahui istilah peringatan bahaya banjir",
        ],

        ["Manakah hal yang tidak perlu dilakukan ketika terjadi banjir?",
        "Terus memantau informasi terkait banjir dan kondisi cuaca",
        "Jangan takut dan panik",
        "Bersihkan tempat penampungan air dan peralatan lainnya",
        "Bersiap dan segera mungkin mengungsi jika skala banjir meningkat",
        "Bersihkan tempat penampungan air dan peralatan lainnya",
        ],

        ["Apa yang harus dilakukan setelah banjir terjadi?",
        "Menyalakan listrik tanpa mengeringkan peralatan listrik",
        "Secepatnya membersihkan rumah dengan antiseptik",
        "Menggunakan air banjir",
        "Mencatat nomor penting yang dapat dihubungi sebagai antisipasi",
        "Secepatnya membersihkan rumah dengan antiseptik",
        ],

        ["Apa yang dimaksud dengan PHBS ?",
        "Pedoman Hidup Bersih dan Sejahtera",
        "Perilaku  Hidup Bahagia dan Sejahtera",
        "Panduan Hidup Bersih dan Sehat",
        "Perilaku Hidup Bersih dan Sehat",
        "Perilaku Hidup Bersih dan Sehat",
        ],

        ["PHBS apa yang dapat dilakukan saat banjir ?",
        "Membuang sampah sembarangan",
        "Membiasakan cuci tangan dengan sabun",
        "Tidak menggunakan alas kaki",
        "Merokok di tempat pengungsian",
        "Membiasakan cuci tangan dengan sabun",
        ]
    ];

    for(let i = 0; i < soalIntermediate.length; i++){

        let contSoal = document.createElement("div"),
        divSoal = document.createElement("div"),
        divJawaban = document.createElement("div"),
        pilihan1 = document.createElement("h3"),
        pilihan2 = document.createElement("h3"),
        pilihan3 = document.createElement("h3"),
        pilihan4 = document.createElement("h3"),
        pilihan5 = document.createElement("h3");
        
        contSoal.setAttribute("class", "container-soal");
        contSoal.style.backgroundImage = `url(img/soal/${i}.png)`;

        divSoal.setAttribute("class", "soal");
        // divSoal.innerText = soalIntermediate[i][0];
        // divSoal.innerText = soalIntermediate[i][0];
        divJawaban.setAttribute("class", "jawaban");
        pilihan1.setAttribute("id", "pil1");
        pilihan1.innerText = soalIntermediate[i][1];
        pilihan2.setAttribute("id", "pil2");
        pilihan2.innerText = soalIntermediate[i][2];
        pilihan3.setAttribute("id", "pil3");
        pilihan3.innerText = soalIntermediate[i][3];
        pilihan4.setAttribute("id", "pil4");
        pilihan4.innerText = soalIntermediate[i][4];
        pilihan5.setAttribute("id", "pil5");
        pilihan5.innerText = soalIntermediate[i][5];

        divJawaban.appendChild(pilihan1);
        divJawaban.appendChild(pilihan2);
        divJawaban.appendChild(pilihan3);
        divJawaban.appendChild(pilihan4);
        // divJawaban.appendChild(pilihan5);

        // contSoal.appendChild(divSoal);
        contSoal.appendChild(divJawaban);

        document.body.appendChild(contSoal);

        pilihan1.addEventListener("click", ()=>{
            cekJawabn(contSoal,pilihan1,i);
        })

        pilihan2.addEventListener("click", ()=>{
            cekJawabn(contSoal,pilihan2,i);  
        })

        pilihan3.addEventListener("click", ()=>{
            cekJawabn(contSoal,pilihan3,i);
        })

        pilihan4.addEventListener("click", ()=>{
            cekJawabn(contSoal,pilihan4,i);
        })

        pilihan5.addEventListener("click", ()=>{
            cekJawabn(contSoal,pilihan5,i);
        })
    }

    function cekJawabn(contSoal,el,i){
        if(el.innerText == soalIntermediate[i][5]){
            console.log("jawabn benar")
            poin += 10;
            document.querySelector("#pointUser").innerText = poin;
            document.querySelector("#pointUser2").innerText = "Point : " + poin;

            contSoal.style.transform = "translateY(1980px)";
            setTimeout(()=>{
                contSoal.style.display = "none";

            }, 1200);

        }else{
            console.log("jawabn Salah")
            contSoal.style.transform = "translateY(1980px)";
            setTimeout(()=>{
                contSoal.style.display = "none";

            }, 1200);


        }
    }

    basic.addEventListener("click", ()=>{
        divDificult.style.transform = "translate(-1800px)";
        dificult = "basic";

    });

    intermediate.addEventListener("click", ()=>{
        divDificult.style.transform = "translate(-1800px)";
        dificult = "intermediate";
    });

    iconMulai.addEventListener("click", () => {
        divHome.style.transform = "translate(-1980px)";
    });


    let scene = document.getElementsByClassName("scene");
    for(let i = 0; i < scene.length; i++){
        let tblBack = scene[i].querySelector("#back"),
            tblNext = scene[i].querySelector("#next");
            
        if(i == 0){
            
            // tblNext.innerHTML = "<a href='index.html'>Selesai</a>";
            tblNext.style.display = "none";
            let tblFinish = document.createElement("h2");
            tblFinish.setAttribute("id", "finish");
            tblFinish.innerHTML = `<img src="icon/neks.png">`;

            scene[i].querySelector(".control").appendChild(tblFinish);
            tblFinish.addEventListener("click", ()=>{
                document.querySelector(".displayPoint").style.height = "100vh";
                if( poin <= 50){
                    document.getElementById("ket").innerHTML = "Pengetahuan Kurang";
                }else if(poin > 50 && poin <= 75){
                    document.getElementById("ket").innerHTML = "Pengetahuan Cukup";
                }else if(poin > 75){
                    document.getElementById("ket").innerHTML = "Pengetahuan Baik";
                }
            })

        }
        else if( i == scene.length-1){
            scene[i].querySelector(".control").style.transform = "scale(1)";
            // tblBack.innerHTML = "<a href='index.html'>Kembali</a>";
            
        }

   
        
        tblNext.addEventListener("click", () => {
            // scene[i].style.transform = "translate(1980px)";
            scene[i].style.opacity = "0";
            scene[i-1].querySelector(".control").style.transform = "scale(1)";
            console.log(i);
            console.log(dificult);

            // cek soal per scene
            if(dificult == "basic"){

                if(scene[i].querySelector("img").alt == 3){
                    document.querySelectorAll(".container-soal")[0].style.transform = "translateY(0)";
                    
                }else if(scene[i].querySelector("img").alt == 9){
                    document.querySelectorAll(".container-soal")[1].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[1].style.zIndex = "1";
                    document.querySelectorAll(".container-soal")[2].style.transform = "translateY(0)";
                    
                }else if(scene[i].querySelector("img").alt == 19){
                    document.querySelectorAll(".container-soal")[3].style.transform = "translateY(0)";

                }else if(scene[i].querySelector("img").alt == 21){
                    document.querySelectorAll(".container-soal")[4].style.transform = "translateY(0)";
                    
                }
            }else{
                if(scene[i].querySelector("img").alt == 3){
                    document.querySelectorAll(".container-soal")[5].style.transform = "translateY(0)";
                    
                }else if(scene[i].querySelector("img").alt == 9){
                    document.querySelectorAll(".container-soal")[6].style.transform = "translateY(0)";
                    
                }else if(scene[i].querySelector("img").alt == 17){
                    document.querySelectorAll(".container-soal")[7].style.transform = "translateY(0)";
                    
                }else if(scene[i].querySelector("img").alt == 19){
                    document.querySelectorAll(".container-soal")[8].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[9].style.zIndex = "1";
                    document.querySelectorAll(".container-soal")[9].style.transform = "translateY(0)";
                    
                }else if(scene[i].querySelector("img").alt == 21){
                    document.querySelectorAll(".container-soal")[10].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[10].style.zIndex = "5";
                    document.querySelectorAll(".container-soal")[11].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[11].style.zIndex = "4";
                    document.querySelectorAll(".container-soal")[12].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[12].style.zIndex = "3";
                    document.querySelectorAll(".container-soal")[13].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[13].style.zIndex = "2";
                    document.querySelectorAll(".container-soal")[14].style.transform = "translateY(0)";
                    document.querySelectorAll(".container-soal")[14].style.zIndex = "1";
                    
                }
            }
            setTimeout(() => {
                scene[i].style.transform = "rotateX(90deg)";
                },1000)
                
            });

            
        //     tblBack.addEventListener("click", () => {
        //         scene[i+1].style.transform = "rotateX(0)";
        //         setTimeout( ()=>{
        //             scene[i+1].style.opacity = "1";
        //         },1000)
        //         scene[i].querySelector(".control").style.transform = "scale(0) translateY(500px)";


        // });

    }
        
        
   



    // cek jawaban
//     let conSoal = document.querySelector(".container-soal"),
//         pil1 = document.querySelector("#pil1"),
//         pil2 = document.querySelector("#pil2"),
//         pil3 = document.querySelector("#pil3"),
//         pil4 = document.querySelector("#pil4"),
//         pil5 = document.querySelector("#pil5");

//     let pil = document.querySelectorAll(".jawaban h3");

//    pil.forEach((e) => {
//     e.addEventListener("click", () => {
//         if(e.id == "pil2"){
//             console.log("benar")
//         }else{
//             console.log("salah")
//         }
        
//     })
//    })