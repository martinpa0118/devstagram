import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const dropzone = new Dropzone("#dropzone", {
    dictDefaultMessage: 'Sube tu aquí imagen',
    acceptedFiles: '.png, .jpg, .jpeg, .gif, .svg, .webp, .avif',
    addRemoveLinks: true,
    dictRemoveFile: 'Borrar archivo',
    maxFiles: 1,
    uploadMultiple: false,

    init: function(){
        if(document.querySelector('[name="imagen"]').value.trim()){
            const imagenPublicada = {}
            imagenPublicada.size = 1234;
            imagenPublicada.name = document.querySelector('[name="imagen"]').value;

            this.options.addedfile.call(this, imagenPublicada);
            this.options.thumbnail.call(this,imagenPublicada,`/uploads/${imagenPublicada.name}`)

            imagenPublicada.previewElement.classList.add(

                "dz-succes",
                 "dz-complete"
                
            );

        }
    }
});

dropzone.on('success',function(file,response){
    console.log(response.imagen)
    document.querySelector('[name="imagen"]').value = response.imagen
})