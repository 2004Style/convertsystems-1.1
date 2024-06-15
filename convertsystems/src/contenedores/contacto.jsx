export function ContactoContainer() {
    return (
        <div className="containercontacto">
            <div className="contactform">
                <form className="formcontacto">
                    <div className="contactformgrup">
                        <label className="titulosContact" htmlFor="textarea">Asunto</label>
                        <input className="imputcontact" required="" name="email" id="email" type="text" defaultValue=''/>
                    </div>
                    <div className="contactformgrup">
                        <label className="titulosContact" htmlFor="textarea">Describir su inconveniente</label>
                        <textarea className="textareacontac" required="" cols="50" rows="10" id="textarea" name="textarea" defaultValue=''></textarea>
                    </div>
                    <a type="submit" className="btnenviarcorreo">Enviar</a>
                </form>
            </div>
        </div>
    )
}